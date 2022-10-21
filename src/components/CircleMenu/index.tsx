import { motion } from "framer-motion";
import * as styles from "./style.css";
import "reactjs-popup/dist/index.css";
import Popup from "reactjs-popup";
import { useEffect, useState } from "react";

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
              setOpen(() => true);
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
      <div>Popup content here !!</div>
    </Popup>
  );
}
