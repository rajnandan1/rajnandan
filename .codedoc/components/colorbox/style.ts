import { themedStyle } from "@connectv/jss-theme"; // @see [Connective JSS Theme](https://github.com/CONNECT-platform/connective-jss-theme)
import { CodedocTheme } from "@codedoc/core";

export const ColorBoxStyle = themedStyle<CodedocTheme>((theme) => ({
    colorBox: {
        display: "inline-block",
        verticalAlign: "middle",
        borderRadius: 8,
        padding: 8,
        maxWidth: 320,
        margin: "8px 8px 8px 0px",
        overflow: "hidden",
        cursor: "pointer",
        transition: "box-shadow .3s, transform .3s",
        border: "1px solid",
        borderColor: theme.light.text,
        paddingLeft: "3rem",
        position: "relative",

        "& .color": {
            position: "absolute",
            top: 0,
            left: 0,
            width: "2.5rem",
            height: "100%",
            borderRight: "1px solid",
            borderRightColor: theme.light.text,
        },
        "body.dark &": { borderColor: theme.dark.text },
        "body.dark & .color": { borderRightColor: theme.dark.text },
    },
}));
