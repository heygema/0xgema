import { ReactNode } from "react";
import * as styles from "./style.css";

export function Card({ children }: { children: ReactNode }) {
    return <div className={styles.card}>{children}</div>;
}
