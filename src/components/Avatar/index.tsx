import { globalVars } from "../../styles/theme.css";

export function Avatar() {
  return (
    <div
      style={{
        height: "300px",
        width: "300px",
        borderRadius: "100%",
        border: `15px solid ${globalVars.colors["grayish-02"]}`,
        margin: "0 auto",
      }}
    ></div>
  );
}
