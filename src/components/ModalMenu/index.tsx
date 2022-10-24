// eslint-disable react-hooks/exhaustive-deps
import { motion } from "framer-motion";
import Fuse from "fuse.js";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { useEffect, useMemo, useRef, useState } from "react";
import { useModalStore, usePostsStore } from "../../data/store";
import { Post } from "../../data/types";
import { useThemeSwitch } from "../../hooks/useThemeSwitch";
import Button from "../Button";
import { Icons } from "../Icons";
import * as styles from "./style.css";

export enum MenuType {
  "POST",
  "ACTION",
  "DESCRIPTION",
}

export type MenuItem = {
  type: MenuType.ACTION;
  menu: {
    title: string;
  };
  icon?: React.ReactNode;
  action: () => void;
};

export type PostSearchItem = {
  type: MenuType.POST;
  post?: Post;
  action: () => void;
};

export default function ModalMenu() {
  const inputRef = useRef<HTMLInputElement>();
  const [search, setSearch] = useState<string>("");
  const [selectedMenuIndex, selectMenuIndex] = useState<number>(0);
  // figure out
  //const { setTheme } = useThemeSwitch();
  const { setTheme } = useTheme();

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
      icon: <Icons.Home className={styles.homeIcon} />,
      menu: {
        title: "Home",
      },
      action: () => navigate("/"),
    },
    {
      type: MenuType.ACTION,
      icon: <Icons.About className={styles.menuIcon} />,
      menu: {
        title: "About",
      },
      action: () => navigate("/about"),
    },

    {
      type: MenuType.ACTION,
      menu: {
        title: "Twitter",
      },
      icon: <Icons.Twitter className={styles.menuIcon} />,
      action: () => navigate("https://twitter.com/0xgema"),
    },

    {
      type: MenuType.ACTION,
      menu: {
        title: "Github",
      },
      icon: <Icons.Github className={styles.menuIcon} />,
      action: () => navigate("https://github.com/heygema"),
    },
    {
      type: MenuType.ACTION,
      menu: {
        title: "Switch to Light Theme",
      },
      icon: <Icons.Day className={styles.menuIcon} />,
      action: () => setTheme?.("light"),
    },
    {
      type: MenuType.ACTION,
      menu: {
        title: "Switch to Dark Theme",
      },
      icon: <Icons.Night className={styles.menuIcon} />,
      action: () => setTheme?.("dark"),
    },
    {
      type: MenuType.ACTION,
      menu: {
        title: "Switch to System Theme",
      },
      icon: <Icons.System className={styles.menuIcon} />,
      action: () => setTheme?.("system"),
    },
  ];

  const postSearchItems = posts.map((post) => ({
    type: MenuType.POST,
    post,
    action: () => navigate(`/posts/${post.slug}`),
  }));

  type CombinedItem = MenuItem | PostSearchItem;

  const combinedMenuItems: Array<CombinedItem> = useMemo(
    () => [
      ...(menuItems as Array<MenuItem>),
      ...(postSearchItems as Array<PostSearchItem>),
    ],
    [setTheme, menuItems, postSearchItems]
  );

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  const combinedFuse = useMemo(
    () =>
      new Fuse(combinedMenuItems, {
        keys: ["post.title", "menu.title"],
      }),
    []
  );

  const combinedSearchItems = useMemo(
    () => combinedFuse.search<PostSearchItem | MenuItem>(search),
    [search, combinedFuse, setTheme]
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
      <div className={styles.searchContainer}>
        <input
          aria-label="global-search-box"
          className={styles.inputStyle}
          placeholder="Search for posts and menus..."
          type="text"
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
        {combinedSearchItems.map(({ item }, index) => {
          if (item.type === MenuType.POST) {
            let title = item.post.title;

            if (title.length >= 65) {
              title = title.slice(0, 65) + "...";
            }

            return (
              <div
                key={`${item.post.slug}-${index}`}
                onClick={item.action}
                className={styles.menuItem}
              >
                <span className={styles.menuTitle.noIcon}>{title}</span>
              </div>
            );
          } else {
            if (item.menu.title.startsWith("Switch")) {
              console.log("action >>", item.action);
            }

            return (
              <div
                key={`${item.menu.title}-${index}`}
                onClick={item.action}
                className={styles.menuItem}
              >
                {item.icon}
                <span className={styles.menuTitle.withIcon}>
                  {item.menu.title}
                </span>
              </div>
            );
          }
        })}
        {!search &&
          menuItems.map(({ menu, icon, action }, index) => {
            return (
              <div
                key={`${menu.title}-${index}`}
                onClick={action}
                className={styles.menuItem}
              >
                {icon}
                <span className={styles.menuTitle.withIcon}>{menu.title}</span>
              </div>
            );
          })}
      </div>
    </motion.div>
  );
}
