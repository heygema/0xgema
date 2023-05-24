import Link from 'next/link';
import {useTime} from '../../hooks/useTime';
import * as styles from './style.css';

//import Smiley from "../../.././public/assets/images/Smiley-small15.svg";
import {TIME_ZONE} from '../../constant';
import {useRouter} from 'next/router';

// this component is something alright
export function TimezoneClock() {
  const time = useTime();

  const clock = time && `${time.hour}:${time.minute}:${time.second}`;

  const timezoneClock = (
    <span className={styles.timezone}>
      ({TIME_ZONE}) {clock}
    </span>
  );

  return timezoneClock;
}

export function Hero() {
  // ×
  const {route, asPath} = useRouter();

  const routeTitle = new Map([
    ['/', 'Writings'],
    ['/about', 'Gema Anggada'],
    ['/photos', 'Photos'],
  ]);

  const menu = [
    {
      url: '/',
      title: 'Blog',
    },
    {
      url: '/about',
      title: 'About',
    },
  ];

  return (
    <div className={styles.root}>
      <h4 className={styles.title}>{routeTitle.get(route) ?? asPath}</h4>
      <p className={styles.detail}>
        Locale <TimezoneClock />
      </p>
      <div>
        {[].map(({url, title}) => {
          return (
            <Link key={title} href={url}>
              {title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
