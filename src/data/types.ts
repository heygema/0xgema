import matter from "gray-matter";

export type GrayMatterFile = matter.GrayMatterFile<string>;

export type Posts = Array<
  GrayMatterFile & {
    slug: string;
    author: string;
    canonical_url: string;
    date: string;
    hero: string;
    title: string;
  }
>;
