v2.8.0
======
Confirm window callback logic was changed. Also, it supports html message now.
Only one modal is able to be opened per time.
Favourite pictures critical fixes, and better ui.
Added ability to create alert windows.

v2.7.1
======
Minor fixes

v2.7.0
======
Theme's changing now reloads page (or requests to reload page), because of themes javascripts.

v2.6.0
======
Themes module: selected option from settings was renames to defaultTheme. User doesn't need to refresh page after theme's switching now. After changing default theme on another by administrator users with another theme will get modal window with request to change theme to defaultTheme. If user is new or his theme is equal to previous default theme, it will be switched to new defaultTheme automatically without confirmation.
New war theme.
Minor fixes.

v2.5.1
======
ImagePreview module hotfix. Documentation update.

v2.5.0
======
bbCodesHelper module: settings param templateButtonsOrder was renamed to templateButtons.
Utils module was renamed to "common".
Method addMessageToChatInput from common module was moved to helpers (cytubeEnhanced.Helpers).
Gulp dependencies update. Switching from browserify to webpack. Gulpfile improvements.
Modules performance improvements.
Minor fixes.
Docs fixes, new documentation for modules.