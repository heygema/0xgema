import { FiTwitter as Twitter } from "react-icons/fi";
import {
  GrPersonalComputer as System,
  GrHomeRounded as Home,
} from "react-icons/gr";

import { VscGithubAlt as Github } from "react-icons/vsc";
import { RiSkullLine as About } from "react-icons/ri";
import { BiMoon as Night } from "react-icons/bi";
import { BsSun as Day } from "react-icons/bs";

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
  Github: (props: IconBaseProps) => (
    <Github {...props} className={styles.menuIcon} />
  ),
  System: (props: IconBaseProps) => (
    <System {...props} className={styles.menuIcon} />
  ),
  Night: (props: IconBaseProps) => (
    <Night {...props} className={styles.menuIcon} />
  ),
  Day: (props: IconBaseProps) => <Day {...props} className={styles.menuIcon} />,
};
