import { motion } from "framer-motion";
import * as styles from "./style.css";
import "reactjs-popup/dist/index.css";
import Popup from "reactjs-popup";
import { Suspense, useEffect } from "react";
import Smiley from "../../.././public/assets/images/Smiley-small15.svg";
import { useModalStore } from "../../data/store";
import ModalMenu from "../ModalMenu";

export default function CircleMenu() {
  const { isOpen, setOpen } = useModalStore((state) => state);

  const closeModal = () => setOpen(false);

  const onClick = () => setOpen(true);

  useEffect(() => {
    if (!document) return;
    const keyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "k": {
          if (event.metaKey) {
            setOpen(!isOpen);
          }
          break;
        }
        default: {
          return;
        }
      }
    };
    document.addEventListener("keydown", keyDown);

    return () => removeEventListener("keydown", keyDown);
  }, []);

  return (
    <Popup
      onClose={closeModal}
      closeOnEscape
      closeOnDocumentClick
      onOpen={onClick}
      trigger={
        <motion.div
          whileHover={{
            scale: 1.2,
          }}
          whileTap={{
            scale: 0.9,
          }}
          className={styles.container}
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
