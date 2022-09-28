import React from 'react';
import {promises as fs} from 'fs';
import {POST_PATH} from '../../constant';
import path from 'path';

export default function Post({htmlString}) {
  console.log({
    htmlString,
  });
  return htmlString;
}

export const getStaticPaths = async () => {
  const files = await fs.readdir(POST_PATH);

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({params: {slug}}) => {
  const postLocation = path.join(POST_PATH, slug + `/index` + '.mdx');
  const markdownWithMetadata = await fs.readFile(postLocation, 'utf-8');

  console.log({
    postLocation,
    markdownWithMetadata,
  });

  //   const parsedMarkdown = matter(markdownWithMetadata);

  //   const htmlString = marked(parsedMarkdown.content);

  return {
    props: {
      htmlString: markdownWithMetadata,
    },
  };
};
