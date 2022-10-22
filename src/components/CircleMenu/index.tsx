import { motion } from "framer-motion";
import * as styles from "./style.css";
import "reactjs-popup/dist/index.css";
import Popup from "reactjs-popup";
import { useEffect, useState } from "react";
import { globalVars } from "../../styles/theme.css";

interface Props {
  onClick?: () => void;
}

export default function CircleMenu({ onClick }: Props) {
  const [open, setOpen] = useState(false);

  const closeModal = () => setOpen(false);

  useEffect(() => {
    let keyHandler: ReturnType<typeof document.addEventListener> | undefined;
    if (document !== undefined) {
      keyHandler = document.addEventListener("keydown", (event) => {
        console.log(event.key);
        switch (event.key) {
          case "k": {
            if (event.metaKey) {
              setOpen((open) => !open);
            }
          }
        }
      });
    }

    // fuck
    return () => removeEventListener("keydown", keyHandler as any);
  }, []);

  return (
    <Popup
      onClose={closeModal}
      closeOnEscape
      closeOnDocumentClick
      trigger={
        <motion.div
          onClick={onClick}
          aria-label="menu-button"
          whileHover={{
            scale: 1.2,
          }}
          whileTap={{
            scale: 0.9,
          }}
          className={styles.container}
        >
          <div className={styles.circleFallback} />
        </motion.div>
      }
      open={open}
      modal
      position="right center"
    >
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            scale: 0.9,
          },
          visible: { opacity: 1, scale: 1 },
        }}
        transition={{
          duration: 0.1,
        }}
        initial="hidden"
        animate="visible"
        style={{
          borderRadius: "18px",
          padding: "5px",
          background: globalVars.colors["grayish-02-hollow"],
          backdropFilter: "blur(4px)",
          height: "33rem",
          width: "100%",
        }}
      />
    </Popup>
  );
}
