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
                    <script>
                        {`
							<script type="text/javascript">
								(function(c,l,a,r,i,t,y){
									c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
									t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
									y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
								})(window, document, "clarity", "script", "mby12uhrw6");
							</script>
						`}
                    </script>,
                ],
            },
        };
    };
}
