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