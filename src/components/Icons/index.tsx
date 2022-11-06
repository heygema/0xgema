import { FiTwitter as Twitter } from "react-icons/fi";
import {
  GrPersonalComputer as System,
  GrHomeRounded as Home,
} from "react-icons/gr";

import { VscGithubAlt as Github } from "react-icons/vsc";
import { RiSkullLine as About } from "react-icons/ri";
import { BiMoon as Night } from "react-icons/bi";
import {
  BsTwitter,
  BsGithub,
  BsSun as Day,
  BsLinkedin as LinkedIn,
  BsMastodon as Mastodon,
} from "react-icons/bs";

import * as styles from "./style.css";
import { IconBaseProps } from "react-icons";

export const Icons = {
  Home: (props: IconBaseProps) => (
    <Home {...props} className={styles.boldIcon} />
  ),
  About: (props: IconBaseProps) => (
    <About {...props} className={styles.menuIcon} />
  ),
  Twitter: (props: IconBaseProps) => (
    <Twitter {...props} className={styles.boldIcon} />
  ),
  BsTwitter: (props: IconBaseProps) => (
    <BsTwitter {...props} className={styles.menuIcon} />
  ),
  Github: (props: IconBaseProps) => (
    <Github {...props} className={styles.menuIcon} />
  ),
  BsGithub: (props: IconBaseProps) => (
    <BsGithub {...props} className={styles.menuIcon} />
  ),
  Mastodon: (props: IconBaseProps) => (
    <Mastodon {...props} className={styles.menuIcon} />
  ),
  System: (props: IconBaseProps) => (
    <System {...props} className={styles.menuIcon} />
  ),
  Night: (props: IconBaseProps) => (
    <Night {...props} className={styles.menuIcon} />
  ),
  Day: (props: IconBaseProps) => <Day {...props} className={styles.menuIcon} />,
  Linkedin: (props: IconBaseProps) => <LinkedIn {...props} />,
};
