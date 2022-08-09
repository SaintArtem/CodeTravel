import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve())

const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
   build: {
      js: `${buildFolder}/js/`,
      // pug: `${buildFolder}/`,
      html: `${buildFolder}/`,
      files: `${buildFolder}/files/`,
      images: `${buildFolder}/img/`,
      css: `${buildFolder}/css/`,
      // fonts: `${buildFolder}/fonts/`,
   },
   src: {
      js: `${srcFolder}/js/app.js`,
      // pug: `${srcFolder}/*.pug`,
      html: `${srcFolder}/*.html`,
      files: `${srcFolder}/files/**/*.*`,
      scss: `${srcFolder}/scss/style.scss`,
      images: `${srcFolder}/img/**/*.*`,
   },
   watch: {
      js: `${srcFolder}/js/**/*.js`,
      // pug: `${srcFolder}/**/*.pug`,
      html: `${srcFolder}/**/*.html`,
      files: `${srcFolder}/files/**/*.*`,
      scss: `${srcFolder}/scss/**/*.scss`,
      images: `${srcFolder}/img/**/*.{jpg, jpeg, png, gif, webp, svg}`,
   },
   clean: buildFolder,
   buildFolder: buildFolder,
   srcFolder: srcFolder,
   rootFolder: rootFolder,
   ftp: ``
}