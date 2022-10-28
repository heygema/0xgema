import { ReactNode } from "react";
import { Card } from "../../core-ui/Card";

export function BioSection({ children }: { children: ReactNode }) {
  return <Card variant="bio">{children}</Card>;
}
