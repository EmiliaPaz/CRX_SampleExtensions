# CRX Examples

This repository is a collection of simple Chrome extensions that help with
Chromium development. These are mainly used to test bugs or see UI changes.

## Table of Contents

* Action
  * [Action tooltip](action-tooltip/): extension has an action with an specific
  tooltip
  * [Action tooltip long](action-tooltip-long/): extension has an action with a long name and a long tooltip

* Host Permissions
  * [ActiveTab](activetab/): extension requests activeTab permission
  * [ActiveTab and requested URL](activetab-and-requested-url/): extension requests activeTab permission and example.com host permission
  * [AllUrls](allurls/): extension requests 'all_urls' host permission
  * [Chrome Extension Page with activeTab](chrome-extension-page-activetab): extension that opens a chrome extension owned page with activeTab permission
  * [Chrome Extension Page with activeTab and all_urls](chrome-extension-page-activetab-allurls): extension that opens a chrome extension owned page with activeTab permission and `<all_urls>` host permissions
  * [Chrome Extension Page with all_urls](chrome-extension-page-allurls): extension that opens a chrome extension owned page with `<all_urls>` host permissions
  * [Empty](empty/): extension doesn't request any permission
  * [Optional host permissions](optional-host-permissions/): extension requests optional host permissions and inserts a content script on example.com when granted on user action
  * [Requested URL](requested-url/): extension requests wikipedia.org host permission

* DOM manipulation
  * [Green Background](green-background-allsites/): extension changes the background color to green on all sites
  * [Orange Links](orange-links=requestedsite/): extension changes the links color to orange on wikipedia.org
  * [Red Background](red-background-activetab/): extension changes the background color to red when action is clicked
