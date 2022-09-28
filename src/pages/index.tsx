import Head from 'next/head';
import Image from 'next/image';
import {motion} from 'framer-motion';
import styles from '../styles/Home.module.css';

import {promises as fs} from 'fs';
import {POST_PATH} from '../constant';
import Link from 'next/link';

export default function Home({posts}: {posts: Array<string>}) {
  return (
    <div>
      {posts.map((slug) => {
        return (
          <div key={slug}>
            <Link href={'/p/' + slug}>
              <a>{'/p/' + slug}</a>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export async function getStaticProps() {
  let postFiles = await fs.readdir(POST_PATH);

  return {
    props: {
      posts: postFiles.map((file) => file.replace('.md', '')),
    },
  };
}
