import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";

import { promises as fs } from "fs";
import { POST_DIR } from "../constant";
import Link from "next/link";
import matter from "gray-matter";
import path from "path";
import { useRouter } from "next/router";

type GrayMatterFile = matter.GrayMatterFile<string>;

type Posts = Array<
  GrayMatterFile & {
    slug: string;
    author: string;
    canonical_url: string;
    date: string;
    hero: string;
    title: string;
  }
>;

type Props = {
  posts: Posts;
};

export default function Home({ posts }: Props) {
  const { query } = useRouter();

  const page = query?.page || 1;

  const postPerPage = 4;

  const totalPages = Math.ceil(posts.length / postPerPage);

  //const offset =  ;

  console.log({
    page,
    totalPages,
  });

  //const renderedPosts = posts.slice(0)

  return (
    <div>
      {posts.map(({ slug, ...info }) => {
        const heroPath = path.join("/assets", info.hero);

        return (
          <motion.div whileHover={{ scale: 1.02 }} key={slug}>
            <Link href={"/posts/" + slug}>
              <a>{slug}</a>
            </Link>
            <Image
              src={heroPath}
              alt={`hero-${slug}`}
              width="150px"
              height={"100px"}
            />
            <p>{info.excerpt}</p>
          </motion.div>
        );
      })}
    </div>
  );
}

export async function getStaticProps() {
  let result = {
    props: {
      posts: {},
    },
  };

  try {
    let postDirs = await fs.readdir(POST_DIR);

    let posts = [];

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

    return {
      props: {
        posts,
      },
    };
  } catch {
    return result;
  }
}
