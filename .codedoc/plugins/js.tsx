import { StaticRenderer } from "@connectv/sdh";
import register from "jsdom-global";
import { ConfigOverride } from "@codedoc/core";

const renderer = new StaticRenderer(); // --> create a static renderer
register(); // --> register jdom global so that we can create DOM elements

export function customJS() {
    return function (): ConfigOverride {
        return {
            page: {
                scripts: [
                    <script>
                        {`
							document.addEventListener("DOMContentLoaded", function () {
								
								const utcDate = '1990-11-14T12:30:14';
								const secondsInYear = 365*86400*1000;
								
								setInterval(() => {
									const age = document.getElementById("age");
									if(age){
										const millisecondsSinceUTCDate = getMillisecondsSinceUTCDate(utcDate);
										age.innerHTML = (millisecondsSinceUTCDate/secondsInYear).toFixed(8);
									}
								}, 400);
								
								const url = new URL(location.href);
								const pathname = url.pathname; 
								const headerLinkClass = document.getElementsByClassName("nav-link");
								for (let i = 0; i < headerLinkClass.length; i++) {
									const link = headerLinkClass[i];
									if (link.getAttribute("href") == pathname) {
										link.classList.add('selected');
									} else {
										link.classList.remove('selected');
									}
									
								}
								for (let i = 0; i < headerLinkClass.length; i++) {
									const link = headerLinkClass[i];
									link.addEventListener("click", function () {
										for (let j = 0; j < headerLinkClass.length; j++) {
											headerLinkClass[j].classList.remove('selected');
										}
										link.classList.add('selected');
									});
								}

								//event listener for div which has data-color-type
								document.addEventListener("click", function (event) {
									const colorBox = event.target.closest('[data-color-type]');
									if (colorBox) {
										const color = colorBox.innerText;
										const colorType = colorBox.getAttribute('data-color-type');
										if (colorType === 'bg') {
											document.body.style.backgroundColor = color;
										} else if (colorType === 'text') {
											document.body.style.color = color;
										} else if (colorType === 'theme') {
											//write css to change a color
											const css = \`
												a {
													color: \${color} !important;
												}
											\`;
											const style = document.createElement('style');
											style.appendChild(document.createTextNode(css));
											document.head.appendChild(style);

										}
									}
								});
								
							});
						`}
                    </script>,
                ],
            },
        };
    };
}
