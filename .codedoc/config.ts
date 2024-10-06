import { configuration, DefaultMarkdownCustomComponents } from "@codedoc/core";
import { msClarity } from "./plugins/ms-clarity";
import { customCSS } from "./plugins/css";
import { customJS } from "./plugins/js";
import { codingBlog } from "@codedoc/coding-blog-plugin"; // --> import the plugin
import { ColorBox } from "./components/colorbox"; // --> import the component
import { CardBox } from "./components/cardbox"; // --> import the component
import { theme } from "./theme";

export const config = /*#__PURE__*/ configuration({
    theme, // --> add the theme. modify `./theme.ts` for changing the theme.
    dest: {
        namespace: "", // --> your github pages namespace. remove if you are using a custom domain.
    },
    page: {
        favicon: "/assets/images/favicon.ico",
        title: {
            base: "Raj Nandan Sharma", // --> the base title of your doc pages
        },
        fonts: {
            text: {
                url: "https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,300..900;1,300..900&display=swap",
                name: "Work Sans",
            },
        },
    },
    misc: {
        github: {
            user: "rajnandan1", // --> your github username (where your repo is hosted)
            repo: "rajnandan", // --> your github repo name
        },
    },
    plugins: [msClarity(), codingBlog(), customCSS(), customJS()],
    markdown: {
        customComponents: {
            ...DefaultMarkdownCustomComponents,
            ColorBox,
            CardBox, // --> add the component to the markdown custom components
        },
    },
});
