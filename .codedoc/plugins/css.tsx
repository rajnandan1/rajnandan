import { StaticRenderer } from "@connectv/sdh";
import register from "jsdom-global";
import { ConfigOverride } from "@codedoc/core";

const renderer = new StaticRenderer(); // --> create a static renderer
register(); // --> register jdom global so that we can create DOM elements

export function customCSS() {
    return function (): ConfigOverride {
        return {
            page: {
                stylesheets: [
                    <style>
                        {`
							html {
								font-size:22px;
								line-height:1.6;
							}
							a {
								font-weight: 500;
							}
							
						`}
                    </style>,
                ],
            },
        };
    };
}
