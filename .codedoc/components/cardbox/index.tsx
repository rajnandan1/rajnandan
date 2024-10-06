import { ThemedComponentThis } from "@connectv/jss-theme"; // @see [CONNECTIVE JSS Theme](https://github.com/CONNECT-platform/connective-jss-theme)
import { RendererLike } from "@connectv/html"; // @see [CONNECTIVE HTML](https://github.com/CONNECT-platform/connective-html)
import { CodedocTheme } from "@codedoc/core"; // --> Type helper for theme object

import { CardBoxStyle } from "./style"; // @see tab:style.ts

export interface ColorBoxOptions {
    width: string;
    height: string;
    logo: string;
    title: string;
    desc: string;
    link: string;
}

export function CardBox(
    this: ThemedComponentThis, // --> keep typescript strict typing happy
    options: ColorBoxOptions, // --> the component props (attributes)
    renderer: RendererLike<any, any>, // --> our beloved renderer
    content: any // --> the content of the component
) {
    const classes = this.theme.classes(CardBoxStyle); // --> fetch the theme-based classes
    if (options.width === undefined) {
        options.width = "100%";
    }
    if (options.height === undefined) {
        options.height = "0px";
    }
    if (options.title === undefined) {
        options.title = "Title";
    }
    if (options.desc === undefined) {
        options.desc = "Description";
    }
    if (options.logo === undefined) {
        options.logo = "/assets/images/me.jpg";
    }
    if (options.link === undefined) {
        options.link = "/";
    }

    return (
        <div
            class={`${classes.cardBox}`}
            style={`width:${options.width};height:${options.height}`}
        >
            <div class="cnd">
                <img src={options.logo} alt={options.title} />
                <h3>{options.title}</h3>
                <p>{options.desc}</p>
                <a href={options.link} target="_blank">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#333"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-square-arrow-out-up-right"
                    >
                        <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                        <path d="m21 3-9 9" />
                        <path d="M15 3h6v6" />
                    </svg>
                </a>
            </div>
        </div>
    );
}
