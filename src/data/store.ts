import create from "zustand";
import { Posts } from "./types";

type State = {
  posts: Posts;
  addPosts: (posts: Posts) => void;
  remove: () => void;
};

export const usePostsStore = create<State>((set) => ({
  posts: [] as Posts,
  addPosts: (posts: Posts) =>
    set((state) => ({ posts: [...state.posts, ...posts] })),
  remove: () => set({ posts: [] }),
}));
