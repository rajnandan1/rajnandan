import { CodedocConfig, CodedocTheme } from "@codedoc/core";
import { ThemedComponentThis, themedStyle } from "@connectv/jss-theme";
import { Header as _Header, HeaderStyle } from "@codedoc/core/components";
const _HeaderStyle = themedStyle((theme: CodedocTheme) => {
    const parent = HeaderStyle.style(theme); // --> get the style for original footer
    return {
        header: {
            extend: parent.header, // --> simply extend them
            "&": {
                position: "relative",
                zIndex: 100,
                textAlign: "left",
                maxWidth: "768px",
                margin: "0 auto",
                padding: "32px 32px 0px 32px",
                marginBottom: "40px",
            },
            "& .nav-link svg path": { fill: theme.light.primary },
            "body.dark & .nav-link svg path": { fill: theme.dark.primary },
            "& .nav-link": {
                marginRight: "15px",
                paddingLeft: "35px",
                position: "relative",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: "400 !important",
                color: theme.light.text,
            },
            "& .nav-link.selected": {
                fontWeight: "500 !important",
                color: theme.light.text,
            },
            "& .nav-link:hover": { textDecoration: "underline" },
            "body.dark & .nav-link": {
                color: theme.dark.text,
            },
            "body.dark & .nav-link.selected": {
                color: theme.dark.text,
            },
            "@media screen and (min-width: 1200px)": {
                // --> and make the left corner of the footer disappear on desktops
                "& .left": { opacity: 0 },
            },
            "& .nav-link img": {
                position: "absolute",
                left: "0",
                top: "-5px",
                border: `2px solid ${theme.dark.primary}`,
            },
        },
    } as any;
});
export function Header(
    this: ThemedComponentThis,
    config: CodedocConfig,
    renderer: any
) {
    const classes = this.theme.classes(_HeaderStyle);
    return (
        <div class={classes.header}>
            <a href="/" class="nav-link">
                <img
                    src="/assets/images/me.jpg"
                    style="widht: 24px;height:24px;border-radius:50%;"
                ></img>
                Raj Nandan Sharma
            </a>
        </div>
    );
}
