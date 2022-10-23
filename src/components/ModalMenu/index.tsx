// eslint-disable react-hooks/exhaustive-deps
import { motion } from "framer-motion";
import Fuse from "fuse.js";
import { useRouter } from "next/router";
import { useEffect, useMemo, useRef, useState } from "react";
import { useModalStore, usePostsStore } from "../../data/store";
import { Post } from "../../data/types";
import * as styles from "./style.css";

export type MenuType = "POST" | "LINK" | "ACTION";

export type MenuItem = {
  type: MenuType;
  post?: Post;
  menu?: {
    title: string;
  };
  action: () => void;
};

export default function ModalMenu() {
  const inputRef = useRef<HTMLInputElement>();
  const [rendered, setRendered] = useState(false);
  const [search, setSearch] = useState<string>("");
  const setOpen = useModalStore((state) => state.setOpen);
  const router = useRouter();

  useEffect(() => {
    setRendered(true);
  }, []);

  const currentRoute = useMemo(() => {
    return router.query.slug;
  }, [router]);

  const closeModal = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (rendered) {
      closeModal();
    }
  }, [currentRoute]);

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

  const navigate = (href: string) => {
    closeModal();
    router.push(href);
  };

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
          const href = `/posts/${item.slug}`;
          return (
            <div
              key={index}
              onClick={() => navigate(href)}
              className={styles.menuItem}
            >
              {item.title}
            </div>
          );
        })}
        <div onClick={() => navigate("/")} className={styles.menuItem}>
          Home
        </div>
      </div>
    </motion.div>
  );
}
