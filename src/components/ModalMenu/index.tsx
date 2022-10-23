import { motion } from "framer-motion";
import Fuse from "fuse.js";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { usePostsStore } from "../../data/store";
import { Post } from "../../data/types";
import * as styles from "./style.css";

type MenuType = "POST" | "LINK" | "ACTION";

export default function ModalMenu() {
  const inputRef = useRef<HTMLInputElement>();
  const [search, setSearch] = useState<string>("");

  const posts = usePostsStore((state) => state.posts);

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  const fuse = useMemo(
    () =>
      new Fuse(posts, {
        keys: ["title"],
      }),
    []
  );

  const searchedPosts = useMemo(
    () => fuse.search<Post>(search),
    [search, fuse]
  );

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
        autoComplete="off"
        value={search}
        onChange={(e) => {
          e.preventDefault();
          setSearch(e?.target?.value || "");
        }}
      />
      <div className={styles.menuContainer}>
        {searchedPosts.map(({ item }, index) => {
          return (
            <Link key={index} href={`/posts/${item.slug}`}>
              <div className={styles.menuItem}>{item.title}</div>
            </Link>
          );
        })}
        <Link href={"/"}>
          <div className={styles.menuItem}>Home</div>
        </Link>
      </div>
    </motion.div>
  );
}
