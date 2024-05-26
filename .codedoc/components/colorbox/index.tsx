import { ThemedComponentThis } from "@connectv/jss-theme"; // @see [CONNECTIVE JSS Theme](https://github.com/CONNECT-platform/connective-jss-theme)
import { RendererLike } from "@connectv/html"; // @see [CONNECTIVE HTML](https://github.com/CONNECT-platform/connective-html)
import { CodedocTheme } from "@codedoc/core"; // --> Type helper for theme object

import { ColorBoxStyle } from "./style"; // @see tab:style.ts

export interface ColorBoxOptions {
    color: string;
	type: string;
}

export function ColorBox(
    this: ThemedComponentThis, // --> keep typescript strict typing happy
    options: ColorBoxOptions, // --> the component props (attributes)
    renderer: RendererLike<any, any>, // --> our beloved renderer
    content: any // --> the content of the component
) {
    const classes = this.theme.classes(ColorBoxStyle); // --> fetch the theme-based classes
	if(options.type === undefined) {
		options.type = "text";
	}
    return (
        <div
            class={`${classes.colorBox}`}
            data-color-type={`${options.type}`}
            title={`${"set this color as " + options.type}`}
        >
            <div
                class="color"
                style={`${"background-color:" + options.color}`}
            ></div>
            {options.color}
        </div>
    );
}
