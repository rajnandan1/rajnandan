
import { configuration } from '@codedoc/core';

import { theme } from './theme';


export const config = /*#__PURE__*/configuration({
  theme,                                  // --> add the theme. modify `./theme.ts` for changing the theme.
  dest: {
    namespace: '/rajnandan'               // --> your github pages namespace. remove if you are using a custom domain.
  },
  page: {
    title: {
      base: 'Rajnandan'                   // --> the base title of your doc pages
    }
  },
  misc: {
    github: {
      user: 'rajnandan1',                 // --> your github username (where your repo is hosted)
      repo: 'rajnandan',                  // --> your github repo name
    }
  },
});
