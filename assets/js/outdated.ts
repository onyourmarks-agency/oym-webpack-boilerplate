// For settings and options; see https://github.com/tdeNL/outdated-browser-rework
// @ts-ignore
import outdatedBrowser from '@onyourmarks/outdated-browser-rework';
import '@onyourmarks/outdated-browser-rework/dist/style.css';

outdatedBrowser();
outdatedBrowser({
  isUnknownBrowserOK: true,
  requiredCssProperty: 'object-fit',
  language: 'nl',
});
