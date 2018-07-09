# andreobrien.me (prev andreobriennz.com) 

The front-end source code for my portfolio (currently version 5.0.1). Features a full redesign, and is now built with Vue and Express (back-end is in a separate repo). Previous version (https://andreobriennz.com) was built with Laravel and JavaScript/jQuery.

Version 4 and 5 are mostly the same, except for the Vue components being rewritten into Vue files. However, semantic versioning required me to update the version number to reflect the breaking changes and new dependencies that occured when moving to Vue files.

### Version history
**Versions 1-4 (mid 2016 - early 2018)**
- Version 1: Built with pure HTML, CSS and jQuery animations (Apache / Linux enviroment)
- Version 1.1: Started using Vue in the work section, and added some added new work
- Version 2: Mostly the same design, but built with OctoberCMS (a CMS based on Laravel)
- Version 3: Full redesign (except for panoramic header image) and removing OctoberCMS to be just built on Laravel
- Version 4: Full redesign as single page app, rebuilt with Vue

**Version 5.x.x (current)**
- Version 5.0.0: Rewritten with components in Vue files. Back-end / contact form is now decouped and uses ExpressJS (Node) and cloud hosting (Ubuntu / Nginx)
- Version 5.0.1: Added tests with Cypress and fixed issues, general improvements