import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import * as styles from "./style.css";

export default function ModalMenu() {
  const inputRef = useRef<HTMLInputElement>();
  const [search, setSearch] = useState<string>();

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  return (
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
      className={styles.modal}
    >
      <input
        className={styles.inputStyle}
        placeholder="Search"
        type="text"
        id="combobox-input"
        data-command-input=""
        aria-expanded="true"
        aria-autocomplete="list"
        aria-owns="command-list"
        aria-haspopup="listbox"
        autoComplete="off"
        role="combobox"
        value={search}
        onChange={(e) => {
          e.preventDefault();
          setSearch(e?.target?.value || "");
        }}
      />
    </motion.div>
  );
}
