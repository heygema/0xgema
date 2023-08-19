import { motion, useAnimate } from 'framer-motion';
import * as styles from './style.css';
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import { Suspense, useEffect } from 'react';
import { useModalStore } from '../../data/store';
import ModalMenu from '../ModalMenu';
import { Loading } from '../Loading';

export default function MenuButton() {
  const { isOpen, setOpen, toggleOpen } = useModalStore((state) => state);

  const [glow1, animateGlow1] = useAnimate();
  const [glow2, animateGlow2] = useAnimate();

  const closeModal = () => setOpen(false);

  const onClick = () => setOpen(true);

  const keyDown = (event: KeyboardEvent) => {
    switch (event.key) {
      case 'k': {
        if (event.metaKey) {
          event.preventDefault();
          toggleOpen();
        }
        break;
      }
      case 'Escape': {
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
    document.addEventListener('keydown', keyDown);

    return () => removeEventListener('keydown', keyDown);
  }, []);

  return (
    <Popup
      onClose={closeModal}
      closeOnEscape
      closeOnDocumentClick
      onOpen={onClick}
      trigger={
        <motion.div
          title="(cmd/ctrl)+k"
          whileTap={{
            scale: 0.9,
          }}
          className={styles.container}
          onMouseOver={() => {
            animateGlow1(glow1.current, { opacity: 1 }, { duration: 0.2 });
            animateGlow1(glow2.current, { opacity: 1 }, { duration: 0.2 });
          }}
          onMouseLeave={() => {
            animateGlow2(glow1.current, { opacity: 0 }, { duration: 0.2 });
            animateGlow2(glow2.current, { opacity: 0 }, { duration: 0.2 });
          }}
          role="button"
        >
          <div ref={glow1} className={styles.CircleStackGlow} />
          <div ref={glow2} className={styles.CircleStackGlow} />
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
