import create from "zustand";
import { Posts } from "./types";

type State = {
  posts: Posts;
  setPosts: (posts: Posts) => void;
  remove: () => void;
};

export const usePostsStore = create<State>((set) => ({
  posts: [] as Posts,
  setPosts: (posts: Posts) => set(() => ({ posts: [...posts] })),
  remove: () => set({ posts: [] }),
}));

export const useModalStore = create<{
  isOpen: boolean;
  setOpen: (input: boolean) => void;
  toggleOpen: () => void;
}>((set) => ({
  isOpen: false,
  setOpen: (isOpen) => set(() => ({ isOpen })),
  toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}));
