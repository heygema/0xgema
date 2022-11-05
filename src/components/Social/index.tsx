import Link from "next/link";
import { Icons } from "../Icons";
import * as styles from "./style.css";

export function Social() {
  const links = [
    {
      label: "social-link-twitter",
      href: "https://twitter.com/0xgema",
      icon: <Icons.Twitter />,
    },
    {
      label: "social-link-github",
      href: "https://github.com/heygema",
      icon: <Icons.Github />,
    },
    {
      label: "social-link-linkedin",
      href: "https://linkedin.com/in/heygema",
      icon: <Icons.Linkedin />,
    },
    {
      label: "social-link-mastodon",
      href: "https://mstdn.social/@gema",
      icon: <Icons.Mastodon />,
    },
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
          <a aria-label={label} target="_blank" rel="noopener noreferrer">
            {icon}
          </a>
        </Link>
      ))}
    </div>
  );
}
