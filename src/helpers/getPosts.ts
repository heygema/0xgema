import { promises as fs } from "fs";
import matter from "gray-matter";
import path from "path";
import { POST_DIR } from "../constant";

export default async function getPosts() {
  try {
    let postDirs = await fs.readdir(POST_DIR);

    let posts: Array<{ date: string; slug: string }> = [];

    for (const slug of postDirs) {
      let targetPath = path.join(POST_DIR, slug + "/index.mdx");
      let post = await fs.readFile(targetPath, "utf-8");
      let parsedMatter = matter(post);
      posts.push({
        ...parsedMatter.data,
        date: new Date(parsedMatter.data?.date).toISOString(),
        slug,
      });
    }

    const sorted = posts.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return sorted;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return [];
  }
}
