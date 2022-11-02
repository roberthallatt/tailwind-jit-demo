# Tailwind Starter

This starter does not rely on Gulp, Grunt or or any other kind of task runner. It uses NPM CLI commands.

Note: imagemin-cli throws errors with the latest version of node.js. It works fine with version 16.

The following NPM packages are used:

- tailwindcss
- tailwind-config-viewer
- panini (handy flat file compiler)
- concat
- imagemin-cli (image minification)
- uglify-js (JS minification)
- browser-sync (local server)
- npm-run-all
- onchange

Commands to build out your site

- npm start (starts a server and watches for changes)
- npm run build (use when you are ready to deploy your site to a production server)
- npm run twconfig (a nice GUI to view your tailwind CSS styles) 
