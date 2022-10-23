// eslint-disable react-hooks/exhaustive-deps
import { motion } from "framer-motion";
import Fuse from "fuse.js";
import { useRouter } from "next/router";
import { useEffect, useMemo, useRef, useState } from "react";
import { useModalStore, usePostsStore } from "../../data/store";
import { Post } from "../../data/types";
import Button from "../Button";
import * as styles from "./style.css";

export enum MenuType {
  "POST",
  "ACTION",
}

export type MenuItem = {
  type: MenuType.ACTION;
  menu: {
    title: string;
  };
  icon?: React.ReactNode;
  action: () => void;
};

export default function ModalMenu() {
  const inputRef = useRef<HTMLInputElement>();
  const [search, setSearch] = useState<string>("");
  const setOpen = useModalStore((state) => state.setOpen);
  const router = useRouter();

  const currentRoute = useMemo(() => {
    return router.query.slug;
  }, [router]);

  const previousRoute = useMemo(() => {
    return currentRoute?.toString();
  }, []);

  const closeModal = () => {
    setOpen(false);
  };

  const navigate = (href: string) => {
    closeModal();
    router.push(href);
  };

  useEffect(() => {
    if (previousRoute !== currentRoute) {
      closeModal();
    }
  }, [currentRoute]);

  const posts = usePostsStore((state) => state.posts);

  const menuItems: Array<MenuItem> = [
    {
      type: MenuType.ACTION,
      menu: {
        title: "Home",
      },
      action: () => navigate("/"),
    },
  ];

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

  const fuseMenuItems = useMemo(
    () =>
      new Fuse(menuItems, {
        keys: ["menu.title"],
      }),
    []
  );

  const searchedPosts = useMemo(
    () => fuse.search<Post>(search),
    [search, fuse]
  );

  const searchedMenuItems = useMemo(
    () => fuseMenuItems.search<MenuItem>(search),
    [search, fuseMenuItems]
  );

  //const renderedMenuItems = search ? searchedMenuItems : menuItems;

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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          padding: 18,
        }}
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
        <Button onClick={closeModal}>ESC</Button>
      </div>
      <div className={styles.menuContainer}>
        {searchedPosts.map(({ item }, index) => {
          const href = `/posts/${item.slug}`;

          let title = item.title;

          if (title.length >= 65) {
            title = title.slice(0, 65) + "...";
          }

          return (
            <div
              key={index}
              onClick={() => navigate(href)}
              className={styles.menuItem}
            >
              {title}
            </div>
          );
        })}
        {search
          ? searchedMenuItems.map(({ item }, index) => {
              return (
                <div
                  key={`${item.menu.title}-${index}`}
                  onClick={item?.action}
                  className={styles.menuItem}
                >
                  {item.menu.title}
                </div>
              );
            })
          : menuItems.map(({ menu, action }, index) => {
              return (
                <div
                  key={`${menu.title}-${index}`}
                  onClick={action}
                  className={styles.menuItem}
                >
                  {menu.title}
                </div>
              );
            })}
      </div>
    </motion.div>
  );
}
