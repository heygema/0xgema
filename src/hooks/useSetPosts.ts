import { useEffect } from "react";
import { usePostsStore } from "../data/store";
import { Posts } from "../data/types";

export function useSetPosts(posts: Posts) {
  const setPosts = usePostsStore((state) => state.setPosts);

  return useEffect(() => {
    setPosts(posts);
  }, []);
}
