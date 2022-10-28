import { style, styleVariants } from "@vanilla-extract/css";
import { BREAKPOINTS } from "../../constant";
import { globalVars } from "../../styles/theme.css";

export const card = style({
    background: globalVars.colors.transluscent,
    boxShadow: "0px 2px 5px rgba(0,0,0,0.25)",
    backdropFilter: "blur(1.1px)",
    borderRadius: "16px",
    padding: "40px",
    placeItems: "center",
    textAlign: "left",
});

export const cardVariant = styleVariants({
    normal: [card],
    emptyCenter: [
        {
            flexDirection: "column",
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        },
    ],
    bio: [
        card,
        {
            "@media": {
                [`(max-width: ${BREAKPOINTS.mobile})`]: {
                    background: "none",
                    boxShadow: "none",
                    padding: 0,
                    backdropFilter: "none",
                },
            },
        },
    ],
});
