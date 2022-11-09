import { motion } from "framer-motion";
import * as styles from "./style.css";
import "reactjs-popup/dist/index.css";
import Popup from "reactjs-popup";
import { Suspense, useEffect } from "react";
import Smiley from "../../.././public/assets/images/Smiley-small15.svg";
import { useModalStore } from "../../data/store";
import ModalMenu from "../ModalMenu";
import { Loading } from "../../core-ui/Loading";

export default function CircleMenu() {
  const { isOpen, setOpen, toggleOpen } = useModalStore((state) => state);

  const closeModal = () => setOpen(false);

  const onClick = () => setOpen(true);

  const keyDown = (event: KeyboardEvent) => {
    switch (event.key) {
      case "k": {
        if (event.metaKey) {
          event.preventDefault();
          toggleOpen();
        }
        break;
      }
      case "Escape": {
        event.preventDefault();
        closeModal();
        break;
      }
      default: {
        return;
      }
    }
  };

  useEffect(() => {
    if (!document) return;
    document.addEventListener("keydown", keyDown);

    return () => removeEventListener("keydown", keyDown);
  }, []);

  // <Smiley className={styles.smiley} />
  return (
    <Popup
      onClose={closeModal}
      closeOnEscape
      closeOnDocumentClick
      onOpen={onClick}
      trigger={
        <motion.div
          title="(cmd+ctrl)+k"
          whileHover={{
            scale: 1.2,
          }}
          whileTap={{
            scale: 0.9,
          }}
          className={styles.container}
          role="button"
        >
          <div className={styles.CircleStackGlow} />
          <div className={styles.CircleStackGlow} />
          <div className={styles.circleFallback}>⌘</div>
        </motion.div>
      }
      open={isOpen}
      modal
      position="right center"
    >
      <Suspense fallback={<Loading />}>
        <ModalMenu />
      </Suspense>
    </Popup>
  );
}
