import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import * as styles from "./style.css";

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export default function Button({
  children,
  ...otherProps
}: { children: string } & ButtonProps) {
  return (
    <button className={styles.button} {...otherProps}>
      {children}
    </button>
  );
}
