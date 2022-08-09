/**
 * Main module
 */
import gulp from "gulp";
/**
 * Paths import
 */
import { path } from "./gulp/config/path.js";
/**
 * Plugins import
 */
import { plugins } from "./gulp/config/plugins.js"

// Transfer values into global var
global.app = {
   isBuild: process.argv.includes('--build'),
   isDev: !process.argv.includes('--build'),
   path: path,
   gulp: gulp,
   plugins: plugins
}

/**
 * Tasks import
 */
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { zip } from "./gulp/tasks/zip.js";
// import { otfToTtf, ttfToWoff, fontStyle } from "./gulp/tasks/fonts.js";

/**
 * Set watcher on change
 */
function watcher() {
   gulp.watch(path.watch.files, copy);
   gulp.watch(path.watch.html, html);
   gulp.watch(path.watch.scss, scss);
   gulp.watch(path.watch.js, js);
   gulp.watch(path.watch.images, images);
}

// const fonts = gulp.series(otfToTtf, ttfToWoff, fontStyle);

const mainTasks = gulp.parallel(copy, html, scss, js, images);

// Scenaries of tasks'  execution
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
const deployZip = gulp.series(reset, mainTasks, zip);

export { dev };
export { build };
export { deployZip };

/**
 * Set execution of 'copy' as default
 */
gulp.task('default', dev);