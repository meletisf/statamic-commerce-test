const mix = require("laravel-mix");
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js("resources/js/site.js", "public/js");

mix.postCss("resources/css/site.css", "public/css", [
  require("postcss-import"),
  require("tailwindcss"),
  require("postcss-nested"),
  require("postcss-preset-env")({ stage: 0 }),
]);

mix.setPublicPath("public");

if (mix.inProduction()) {
  mix.version();
}
