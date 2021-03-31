# Tailwind Demo

Simple configuration that uses the Tailwind/jit plugin to compile only the CSS styles you need on the fly greatly reducing file size.

## Installation Steps

1. git clone https://github.com/roberthallatt/tailwind-jit-demo.git
2. cd tailwind-jit-demo
3. npm install

## Build commands

1. Development => npm run serve
2. Production => npm run build
3. Compress images (optional if you have an img folder in the assets folder) => npm run compress:images

By design, there is no source folder because it isn't needed. HTML files are located in the /dist folder and all files are watched by Browser-sync.

Happy coding!
