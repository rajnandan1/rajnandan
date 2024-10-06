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
								font-size:16px;
								line-height:1.6;
							}
							a {
								font-weight: 500;
							}
							* {
								font-family: 'Work Sans', sans-serif;
							}
								/* vietnamese */
							@font-face {
							font-family: 'Newsreader';
							font-style: italic;
							font-weight: 200 800;
							font-display: swap;
							src: url(https://fonts.gstatic.com/s/newsreader/v20/cY9CfjOCX1hbuyalUrK439vCgYhCBJWxZCPp.woff2) format('woff2');
							unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
							}
							/* latin-ext */
							@font-face {
							font-family: 'Newsreader';
							font-style: italic;
							font-weight: 200 800;
							font-display: swap;
							src: url(https://fonts.gstatic.com/s/newsreader/v20/cY9CfjOCX1hbuyalUrK439vCgIhCBJWxZCPp.woff2) format('woff2');
							unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
							}
							/* latin */
							@font-face {
							font-family: 'Newsreader';
							font-style: italic;
							font-weight: 200 800;
							font-display: swap;
							src: url(https://fonts.gstatic.com/s/newsreader/v20/cY9CfjOCX1hbuyalUrK439vCjohCBJWxZA.woff2) format('woff2');
							unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
							}
							/* vietnamese */
							@font-face {
							font-family: 'Newsreader';
							font-style: normal;
							font-weight: 200 800;
							font-display: swap;
							src: url(https://fonts.gstatic.com/s/newsreader/v20/cY9AfjOCX1hbuyalUrK439HyjIJFJpeBZQ.woff2) format('woff2');
							unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
							}
							/* latin-ext */
							@font-face {
							font-family: 'Newsreader';
							font-style: normal;
							font-weight: 200 800;
							font-display: swap;
							src: url(https://fonts.gstatic.com/s/newsreader/v20/cY9AfjOCX1hbuyalUrK439DyjIJFJpeBZQ.woff2) format('woff2');
							unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
							}
							/* latin */
							@font-face {
							font-family: 'Newsreader';
							font-style: normal;
							font-weight: 200 800;
							font-display: swap;
							src: url(https://fonts.gstatic.com/s/newsreader/v20/cY9AfjOCX1hbuyalUrK4397yjIJFJpc.woff2) format('woff2');
							unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
							}

							h1, h2, h3 {
								font-family: 'Newsreader', serif;
							}
							a[class^="cs--author"] {
								margin-top: 1rem;
							}
							
						`}
                    </style>,
                ],
            },
        };
    };
}
