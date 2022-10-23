import { motion } from "framer-motion";
import * as styles from "./style.css";
import "reactjs-popup/dist/index.css";
import Popup from "reactjs-popup";
import { Suspense, useEffect } from "react";
import dynamic from "next/dynamic";
import Smiley from "../../.././public/assets/images/Smiley-small15.svg";
import { useModalStore } from "../../data/store";

interface Props {
  onClick?: () => void;
}

const ModalMenu = dynamic(() => import("../ModalMenu/"), {
  suspense: true,
});

export default function CircleMenu({ onClick }: Props) {
  const { isOpen, setOpen } = useModalStore((state) => state);

  const closeModal = () => setOpen(false);

  useEffect(() => {
    let keyHandler: ReturnType<typeof document.addEventListener> | undefined;
    if (document !== undefined) {
      keyHandler = document.addEventListener("keydown", (event) => {
        switch (event.key) {
          case "k": {
            if (event.metaKey) {
              setOpen(!isOpen);
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
          whileHover={{
            scale: 1.2,
          }}
          whileTap={{
            scale: 0.9,
          }}
          className={styles.container}
          onClick={onClick}
          aria-label="menu-button"
        >
          <div className={styles.CircleStackGlow} />
          <div className={styles.CircleStackGlow} />
          <div className={styles.circleFallback}>
            <Smiley className={styles.smiley} />
          </div>
        </motion.div>
      }
      open={isOpen}
      modal
      position="right center"
    >
      <Suspense fallback="...">
        <ModalMenu />
      </Suspense>
    </Popup>
  );
}
