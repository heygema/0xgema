import Link from 'next/link';
import { useRouter } from 'next/router';

import { Avatar } from '../Avatar';

import * as styles from './style.css';
import MenuButton from '../MenuButton';

const menu = [
  {
    url: '/',
    title: 'About',
  },
  {
    url: '/blog',
    title: 'Blog',
  },
];

export function Hero() {
  const { route, asPath } = useRouter();

  const domain =
    typeof window !== 'undefined' ? window.location.hostname : 'localhost';

  const routeTitle = new Map([
    ['/', domain],
    ['/blog', 'Writings'],
    ['/photos', 'Photos'],
  ]);

  return (
    <div className={styles.root}>
      <div className={styles.navigationContainer}>
        <Avatar />
        <MenuButton />
      </div>
      <h4 className={styles.title}>{routeTitle.get(route) ?? asPath}</h4>
      <div className={styles.menuContainer}>
        {menu.map(({ url, title }) => {
          const isSelected = url === route;
          return (
            <Link key={title} href={url} passHref>
              <a className={styles.menu[isSelected ? 'selected' : 'base']}>
                {title}
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
