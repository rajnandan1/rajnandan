import { ThemedComponentThis, themedStyle } from "@connectv/jss-theme"; // --> for theming
import { CodedocTheme } from "@codedoc/core"; // --> we want our left-header's style to be compliant with codedoc theme
import { ToCToggle$ } from "@codedoc/core/components"; // --> this is the hamburger menu

const LeftHeaderStyle = themedStyle((theme: CodedocTheme) => ({
    // --> defined a themed-based style
    leftHeader: {
        // --> styles of the main left-header component
        position: "fixed",
        top: 24,
        left: 24,
        zIndex: 999, // --> make sure it is above the ToC
        "@media screen and (max-width: 1200px)": {
            // --> lets hide it on mobile
            "&": { display: "none" },
        },
    },
    leftHeaderPadding: {
        // --> also a padding element that we'll use to pad ToC to not overlap with the left-header
        height: 80,
        position: "sticky", // --> it should stick to the top of ToC
        top: -32, // --> this is because ToC has a padding by default
        marginTop: -32,
		fontSize: "12px",
        background: theme.toc.light.background, // --> should be of same background as ToC
        "body.dark &": { background: theme.toc.dark.background }, // --> also should share the ToC background in dark mode
        "@media (prefers-color-scheme: dark)": {
            // --> this is for when the page scripts have not yet determined the user preference for dark mode/light mode and the system-settings is being adhered to
            "body:not(.dark-mode-animate) &": {
                background: theme.toc.dark.background,
            },
        },
        "body.dark-mode-animate &": { transition: "background .3s" }, // --> should animate its dark-mode-dependent properties
        "@media screen and (max-width: 1200px)": {
            // --> also make it go away on mobile.
            "&": { display: "none" },
        },
    },
}));

export function LeftHeader(this: ThemedComponentThis, _: any, renderer: any) { // --> the main left-header component
    const classes = this.theme.classes(LeftHeaderStyle); // --> just get the styles resolved based on theme
    return (
        <div class={classes.leftHeader}>
            <ToCToggle$ />
        </div>
    ); // --> and return a div
}

export function LeftHeaderPadding( // --> the padding element
    this: ThemedComponentThis,
    _: any,
    renderer: any
) {
    const classes = this.theme.classes(LeftHeaderStyle);
    return <div class={classes.leftHeaderPadding} />;
}
