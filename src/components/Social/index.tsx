import { motion } from 'framer-motion';
import Link from 'next/link';
import { Icons } from '../Icons';
import * as styles from './style.css';

export function Social() {
  const links = [
    {
      label: 'social-link-twitter',
      href: 'https://twitter.com/0xgema',
      icon: <Icons.BsTwitter />,
    },
    {
      label: 'social-link-github',
      href: 'https://github.com/heygema',
      icon: <Icons.BsGithub />,
    },
    {
      label: 'social-link-linkedin',
      href: 'https://linkedin.com/in/heygema',
      icon: <Icons.Linkedin />,
    },
    {
      label: 'social-link-youtube',
      href: 'https://www.youtube.com/channel/UCp3bZ2CYGavOv20O_eh3k8g',
      icon: <Icons.Youtube />,
    },
    // {
    //   label: 'social-link-mastodon',
    //   href: 'https://mstdn.social/@gema',
    //   icon: <Icons.Mastodon />,
    // },
  ];

  return (
    <div className={styles.root}>
      {links.map(({ href, label, icon }, index) => (
        <Link
          key={`${label}-${index}`}
          aria-label={label}
          href={href}
          target="_blank"
          passHref
        >
          <motion.a
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
          >
            {icon}
          </motion.a>
        </Link>
      ))}
    </div>
  );
}
