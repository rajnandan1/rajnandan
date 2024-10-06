import { StaticRenderer } from "@connectv/sdh";
import register from "jsdom-global";
import { ConfigOverride } from "@codedoc/core";

const renderer = new StaticRenderer(); // --> create a static renderer
register(); // --> register jdom global so that we can create DOM elements

export function msClarity() {
    return function (): ConfigOverride {
        return {
            page: {
                scripts: [
                    <script
                        async
                        src="https://www.googletagmanager.com/gtag/js?id=G-XY8P7ZVPV5"
                    ></script>,
                    <script>
                        {`
							window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());

							gtag('config', 'G-XY8P7ZVPV5');
							function getMillisecondsSinceUTCDate(utcDate) {
								const givenDate = Date.parse(utcDate);
								const now = Date.now();
								const milliseconds = now - givenDate;
								return milliseconds;
							}
						`}
                    </script>,
                ],
            },
        };
    };
}
