import Image from "next/image";
import Link from "next/link";
import * as styles from "./style.css";

export function Projects() {
  const projects = [
    {
      title: "Zebracult",
      href: "https://zebracult.vercel.app",
      description: "yay",
      image: "zebracult.png",
      alt: "zebracult project preview image",
    },
  ];

  return (
    <div className={styles.root}>
      {projects.map(({ href, alt, title, description }, index) => (
        <Link
          key={`${title}-${index}`}
          aria-label={title}
          href={href}
          target="_blank"
        >
          <div className={styles.project}>
            <Image
              alt={alt}
              className={styles.display}
              src={`/assets/projects/zebracult.png`}
              width="290px"
              height="166px"
            />
            <div className={styles.content}>
              <span className={styles.title}>{title}</span>
              <span>{description}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
