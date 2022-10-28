import Link from "next/link";
import { Icons } from "../Icons";
import * as styles from "./style.css";

export function Social() {
  const links = [
    {
      label: "social-link-twitter",
      href: "https:/twitter.com/0xgema",
      icon: <Icons.Twitter />,
    },
    {
      label: "social-link-github",
      href: "https:/github.com/heygema",
      icon: <Icons.Github />,
    },
    {
      label: "social-link-linkedin",
      href: "https:/linkedin.com/in/heygema",
      icon: <Icons.Linkedin />,
    },
  ];

  return (
    <div className={styles.root}>
      {links.map(({ href, label, icon }) => (
        <Link aria-label={label} href={href} target="_blank">
          {icon}
        </Link>
      ))}
    </div>
  );
}
