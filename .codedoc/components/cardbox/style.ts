import { themedStyle } from "@connectv/jss-theme"; // @see [Connective JSS Theme](https://github.com/CONNECT-platform/connective-jss-theme)
import { CodedocTheme } from "@codedoc/core";

export const CardBoxStyle = themedStyle<CodedocTheme>((theme) => ({
    cardBox: {
        display: "inline-block",
        verticalAlign: "middle",
        marginBottom: "3rem",

        "& .cnd": {
            borderRadius: 4,
            margin: "8px 8px 8px 8px",
            overflow: "hidden",
            transition: "box-shadow .3s, transform .3s",
            height: "100%",
            padding: "1rem",
            position: "relative",
            backgroundColor: "transparent",
            border: "1px solid #efd3c0",
            color: theme.light.text,
        },
        "& .cnd img": {
            width: "2rem",
            height: "2rem",
            backgroundColor: "#fff",
            padding: "0.25rem",
            marginBottom: "0rem",
        },
        "& .cnd h3": {
            marginBottom: "0rem",
            marginTop: ".5rem",
        },
        "& .cnd p": {
            marginTop: ".5rem",
        },
        "& .cnd a": {
            position: "absolute",
            top: "1rem",
            right: "1rem",
        },
        "body.dark & .cnd": { color: theme.dark.text },
        "@media (max-width: 600px)": {
            "&": {
                width: "100% !important",
                marginBottom: "40px",
            },
        },
    },
}));
