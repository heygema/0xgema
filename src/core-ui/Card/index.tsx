import { ReactNode } from "react";
import * as styles from "./style.css";

export type Props = {
  children: ReactNode;
  variant?: "normal" | "bio" | "empty" | "emptyPadded";
};

export function Card({ children, variant = "normal" }: Props) {
  return <div className={styles.cardVariant[variant]}>{children}</div>;
}
