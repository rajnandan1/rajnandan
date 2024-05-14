import { ThemedComponentThis, themedStyle } from "@connectv/jss-theme";
import { CodedocConfig, CodedocTheme } from "@codedoc/core";
import {
    FooterStyle,
    DarkModeSwitch$,
    ToCToggle$,
} from "@codedoc/core/components";

const _FooterStyle = themedStyle((theme: CodedocTheme) => {
    const parent = FooterStyle.style(theme); // --> get the style for original footer
    return {
        footer: {
            extend: parent.footer, // --> simply extend them
            "& svg": { fill: theme.light.text },
            "&": { boxShadow: "none" },
            "& .main": { textAlign: "left", paddingLeft: "24px" },
            "body.dark & svg": { fill: theme.dark.text },
            "@media screen and (min-width: 1200px)": {
                // --> and make the left corner of the footer disappear on desktops
                "& .left": { opacity: 0 },
            },
        },
    } as any;
});

export function Footer(
    this: ThemedComponentThis,
    config: CodedocConfig,
    renderer: any
) {
    const classes = this.theme.classes(_FooterStyle);
    return (
        <div class={classes.footer}>
            {/* --> the toggle is included, but hidden on desktop via css */}
            <div class="main">
                <div class="inside">
                    <a href={`https://github.com/rajnandan1`} target="_blank">
                        <svg
                            fill="{theme.light.background}"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            data-name="Layer 1"
                        >
                            <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z" />
                        </svg>
                    </a>
                    <span style="margin:0 10px"> </span>
                    <a
                        href="https://stackoverflow.com/users/3090583/raj-nandan-sharma"
                        target="_blank"
                    >
                        <svg
                            fill="{theme.light.background}"
                            width="18"
                            height="18"
                            viewBox="-4 -2 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="xMinYMin"
                            class="jam jam-stackoverflow"
                        >
                            <path d="M13.492 18.136v-5.272h1.665v7.022H.13v-7.022h1.665v5.272z" />
                            <path d="M3.632 12.364l8.173 1.795.346-1.727-8.173-1.796-.346 1.728zm1.082-4.091l7.567 3.704.692-1.59-7.568-3.728-.691 1.614zm2.097-3.91l6.421 5.614 1.06-1.34L7.87 3.022l-1.06 1.34zM10.962.206L9.622 1.25l4.973 7.045 1.34-1.045L10.962.205zM3.46 16.364h8.346v-1.75H3.46v1.75z" />
                        </svg>
                    </a>
                    <span style="margin:0 10px"> </span>
                    <a
                        href="https://www.linkedin.com/in/rajnandan1/"
                        target="_blank"
                    >
                        <svg
                            fill="{theme.light.background}"
                            width="18"
                            height="18"
                            viewBox="-2 -2 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="xMinYMin"
                            class="jam jam-linkedin"
                        >
                            <path d="M19.959 11.719v7.379h-4.278v-6.885c0-1.73-.619-2.91-2.167-2.91-1.182 0-1.886.796-2.195 1.565-.113.275-.142.658-.142 1.043v7.187h-4.28s.058-11.66 0-12.869h4.28v1.824l-.028.042h.028v-.042c.568-.875 1.583-2.126 3.856-2.126 2.815 0 4.926 1.84 4.926 5.792zM2.421.026C.958.026 0 .986 0 2.249c0 1.235.93 2.224 2.365 2.224h.028c1.493 0 2.42-.989 2.42-2.224C4.787.986 3.887.026 2.422.026zM.254 19.098h4.278V6.229H.254v12.869z" />
                        </svg>
                    </a>
                    <span style="margin:0 10px"> </span>
                    <a href="https://twitter.com/_rajnandan_" target="_blank">
                        <svg
                            fill="{theme.light.background}"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            data-name="Layer 1"
                        >
                            <path d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z" />
                        </svg>
                    </a>
                    <span style="margin:0 10px"> </span>
                    <a
                        href="https://github.com/sponsors/rajnandan1"
                        target="_blank"
                    >
                        <svg
                            fill="{theme.light.background}"
                            width="18"
                            height="18"
                            viewBox="0 0 36 36"
                            version="1.1"
                            preserveAspectRatio="xMidYMid meet"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                        >
                            <title>dollar-solid</title>
                            <path
                                class="clr-i-solid clr-i-solid-path-1"
                                d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm7.65,21.59c-1,3-3.61,3.84-5.9,4v2a1.25,1.25,0,0,1-2.5,0V27.59A11.47,11.47,0,0,1,11,25a1.25,1.25,0,1,1,1.71-1.83,9.11,9.11,0,0,0,4.55,1.94V18.83a9.63,9.63,0,0,1-3.73-1.41,4.8,4.8,0,0,1-1.91-5.84c.59-1.51,2.42-3.23,5.64-3.51V6.25a1.25,1.25,0,0,1,2.5,0V8.11a9.67,9.67,0,0,1,4.9,2A1.25,1.25,0,0,1,23,11.95a7.14,7.14,0,0,0-3.24-1.31v6.13c.6.13,1.24.27,1.91.48a5.85,5.85,0,0,1,3.69,2.82A4.64,4.64,0,0,1,25.65,23.59Z"
                            ></path>
                            <path
                                class="clr-i-solid clr-i-solid-path-2"
                                d="M20.92,19.64c-.4-.12-.79-.22-1.17-.3v5.76c2-.2,3.07-.9,3.53-2.3a2.15,2.15,0,0,0-.15-1.58A3.49,3.49,0,0,0,20.92,19.64Z"
                            ></path>
                            <path
                                class="clr-i-solid clr-i-solid-path-3"
                                d="M13.94,12.48a2.31,2.31,0,0,0,1,2.87,6.53,6.53,0,0,0,2.32.92V10.55C15.16,10.8,14.19,11.84,13.94,12.48Z"
                            ></path>
                            <rect
                                x="0"
                                y="0"
                                width="36"
                                height="36"
                                fill-opacity="0"
                            />
                        </svg>
                    </a>
                    <span style="margin:0 10px"> </span>
                    <span>
                        <svg
                            width="18"
                            height="18"
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 496 496"
                            style="enable-background:new 0 0 496 496;"
                            xml:space="preserve"
                        >
                            <path
                                style="fill:#359846;"
                                d="M0,304v65.6C0,396.8,21.6,416,48,416h400c26.4,0,48-19.2,48-46.4V304H0z"
                            />
                            <path
                                style="fill:#EA8634;"
                                d="M448,80H48C21.6,80,0,99.2,0,126.4V192h496v-65.6C496,99.2,474.4,80,448,80z"
                            />
                            <rect
                                y="192"
                                style="fill:#FCFBF0;"
                                width="496"
                                height="112"
                            />
                            <path
                                style="fill:#21872F;"
                                d="M446.4,416c26.4,0,49.6-19.2,49.6-46.4V304H315.2L446.4,416z"
                            />
                            <path
                                style="fill:#E27423;"
                                d="M448,80H48l132.8,112H496v-65.6C496,99.2,474.4,80,448,80z"
                            />
                            <polygon
                                style="fill:#F7F4E2;"
                                points="316,304 496,304 496,192 180,192 "
                            />
                            <path
                                style="fill:#D86619;"
                                d="M448,80H48l370.4,112H496v-65.6C496,99.2,474.4,80,448,80z"
                            />
                            <polygon
                                style="fill:#F2E9C2;"
                                points="496,214.4 496,192 414.4,192 "
                            />
                            <path
                                style="fill:#167A20;"
                                d="M496,368.8c0,29.6-21.6,47.2-48,47.2H48c-26.4,0-48-20.8-48-48"
                            />
                        </svg>
                    </span>
                </div>
            </div>
            <div class="right">
                <DarkModeSwitch$ />
            </div>{" "}
            {/* --> also do not forget the dark mode switch. */}
        </div>
    );
}
