import { getRenderer } from '/Users/raj/githubprojects/rajnandan/.codedoc/node_modules/@codedoc/core/dist/es6/transport/renderer.js';
import { initJssCs } from '/Users/raj/githubprojects/rajnandan/.codedoc/node_modules/@codedoc/core/dist/es6/transport/setup-jss.js';initJssCs();
import { installTheme } from '/Users/raj/githubprojects/rajnandan/.codedoc/content/theme.ts';installTheme();
import { countCards } from '/Users/raj/githubprojects/rajnandan/.codedoc/node_modules/@codedoc/coding-blog-plugin/dist/es5/components/article-card/count-cards.js';countCards();
import { codeSelection } from '/Users/raj/githubprojects/rajnandan/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/selection.js';codeSelection();
import { sameLineLengthInCodes } from '/Users/raj/githubprojects/rajnandan/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/same-line-length.js';sameLineLengthInCodes();
import { initHintBox } from '/Users/raj/githubprojects/rajnandan/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-hint/index.js';initHintBox();
import { initCodeLineRef } from '/Users/raj/githubprojects/rajnandan/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-ref/index.js';initCodeLineRef();
import { initSmartCopy } from '/Users/raj/githubprojects/rajnandan/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/smart-copy.js';initSmartCopy();
import { copyHeadings } from '/Users/raj/githubprojects/rajnandan/.codedoc/node_modules/@codedoc/core/dist/es6/components/heading/copy-headings.js';copyHeadings();
import { contentNavHighlight } from '/Users/raj/githubprojects/rajnandan/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/contentnav/highlight.js';contentNavHighlight();
import { loadDeferredIFrames } from '/Users/raj/githubprojects/rajnandan/.codedoc/node_modules/@codedoc/core/dist/es6/transport/deferred-iframe.js';loadDeferredIFrames();
import { smoothLoading } from '/Users/raj/githubprojects/rajnandan/.codedoc/node_modules/@codedoc/core/dist/es6/transport/smooth-loading.js';smoothLoading();
import { tocHighlight } from '/Users/raj/githubprojects/rajnandan/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/toc-highlight.js';tocHighlight();
import { postNavSearch } from '/Users/raj/githubprojects/rajnandan/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/search/post-nav/index.js';postNavSearch();
import { copyLineLinks } from '/Users/raj/githubprojects/rajnandan/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-links/copy-line-link.js';copyLineLinks();
import { gatherFootnotes } from '/Users/raj/githubprojects/rajnandan/.codedoc/node_modules/@codedoc/core/dist/es6/components/footnote/gather-footnotes.js';gatherFootnotes();
import { reloadOnChange } from '/Users/raj/githubprojects/rajnandan/.codedoc/node_modules/@codedoc/core/dist/es6/serve/reload.js';reloadOnChange();
import { DarkModeSwitch } from '/Users/raj/githubprojects/rajnandan/.codedoc/node_modules/@codedoc/core/dist/es6/components/darkmode/index.js';
import { ConfigTransport } from '/Users/raj/githubprojects/rajnandan/.codedoc/node_modules/@codedoc/core/dist/es6/transport/config.js';
import { ArticleCard } from '/Users/raj/githubprojects/rajnandan/.codedoc/node_modules/@codedoc/coding-blog-plugin/dist/es5/components/article-card/index.js';
import { Author } from '/Users/raj/githubprojects/rajnandan/.codedoc/node_modules/@codedoc/coding-blog-plugin/dist/es5/components/author/index.js';

const components = {
  'EyMAZzsbxPR8G+Mu+8iPcQ==': DarkModeSwitch,
  '1hXAtiTt8J9Q/JD8u8oSqQ==': ConfigTransport,
  'XLslJ8bB1oBj5YXBSZsINw==': ArticleCard,
  '1Icf8szCFKlIY89Ls8Wp2g==': Author
};

const renderer = getRenderer();
const ogtransport = window.__sdh_transport;
window.__sdh_transport = function(id, hash, props) {
  if (hash in components) {
    const target = document.getElementById(id);
    renderer.render(renderer.create(components[hash], props)).after(target);
    target.remove();
  }
  else if (ogtransport) ogtransport(id, hash, props);
}
