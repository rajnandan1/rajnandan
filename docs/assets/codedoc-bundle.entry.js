import { getRenderer } from '/Users/rajnandan1/Code/rajnandan/.codedoc/node_modules/@codedoc/core/dist/es6/transport/renderer.js';
import { initJssCs } from '/Users/rajnandan1/Code/rajnandan/.codedoc/node_modules/@codedoc/core/dist/es6/transport/setup-jss.js';initJssCs();
import { installTheme } from '/Users/rajnandan1/Code/rajnandan/.codedoc/content/theme.ts';installTheme();
import { countCards } from '/Users/rajnandan1/Code/rajnandan/.codedoc/node_modules/@codedoc/coding-blog-plugin/dist/es5/components/article-card/count-cards.js';countCards();
import { codeSelection } from '/Users/rajnandan1/Code/rajnandan/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/selection.js';codeSelection();
import { sameLineLengthInCodes } from '/Users/rajnandan1/Code/rajnandan/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/same-line-length.js';sameLineLengthInCodes();
import { initHintBox } from '/Users/rajnandan1/Code/rajnandan/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-hint/index.js';initHintBox();
import { initCodeLineRef } from '/Users/rajnandan1/Code/rajnandan/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-ref/index.js';initCodeLineRef();
import { initSmartCopy } from '/Users/rajnandan1/Code/rajnandan/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/smart-copy.js';initSmartCopy();
import { copyHeadings } from '/Users/rajnandan1/Code/rajnandan/.codedoc/node_modules/@codedoc/core/dist/es6/components/heading/copy-headings.js';copyHeadings();
import { contentNavHighlight } from '/Users/rajnandan1/Code/rajnandan/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/contentnav/highlight.js';contentNavHighlight();
import { loadDeferredIFrames } from '/Users/rajnandan1/Code/rajnandan/.codedoc/node_modules/@codedoc/core/dist/es6/transport/deferred-iframe.js';loadDeferredIFrames();
import { smoothLoading } from '/Users/rajnandan1/Code/rajnandan/.codedoc/node_modules/@codedoc/core/dist/es6/transport/smooth-loading.js';smoothLoading();
import { tocHighlight } from '/Users/rajnandan1/Code/rajnandan/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/toc-highlight.js';tocHighlight();
import { postNavSearch } from '/Users/rajnandan1/Code/rajnandan/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/search/post-nav/index.js';postNavSearch();
import { copyLineLinks } from '/Users/rajnandan1/Code/rajnandan/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-links/copy-line-link.js';copyLineLinks();
import { gatherFootnotes } from '/Users/rajnandan1/Code/rajnandan/.codedoc/node_modules/@codedoc/core/dist/es6/components/footnote/gather-footnotes.js';gatherFootnotes();
import { DarkModeSwitch } from '/Users/rajnandan1/Code/rajnandan/.codedoc/node_modules/@codedoc/core/dist/es6/components/darkmode/index.js';
import { ConfigTransport } from '/Users/rajnandan1/Code/rajnandan/.codedoc/node_modules/@codedoc/core/dist/es6/transport/config.js';
import { TabSelector } from '/Users/rajnandan1/Code/rajnandan/.codedoc/node_modules/@codedoc/core/dist/es6/components/tabs/selector.js';
import { Author } from '/Users/rajnandan1/Code/rajnandan/.codedoc/node_modules/@codedoc/coding-blog-plugin/dist/es5/components/author/index.js';

const components = {
  'Vj9baMzYX6511ehyP5EHFQ==': DarkModeSwitch,
  '5JEPPKNgmMhfKEqwO3U0ew==': ConfigTransport,
  'd5H08QOzWT19D1BkAxYQGg==': TabSelector,
  'rNAGJitPZOA8sfqc5HliCw==': Author
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
