# How to set up Webpack 5, ES6 with ESLint, PostCSS with Stylelint, CSSNANO and more!

- author : **Jon Torrado**
- article : [How to set up Webpack 5, ES6 with ESLint, PostCSS with Stylelint, CSSNANO and more!](https://jontorrado.medium.com/working-with-webpack-4-es6-postcss-with-preset-env-and-more-93b3d77db7b2)

So thank you **Jon Torrado**.

## We are going to use:

- [Webpack 5](https://webpack.github.io/)
- [ES6](https://es.wikipedia.org/wiki/ECMAScript) with [Babel](https://babeljs.io/)
- [ESLint](https://eslint.org/) for JavaScript linting
- [PostCSS](https://postcss.org/) with import and preset-env
- [Stylelint](https://stylelint.io/) for CSS linting
- [Clean Webpack Plugin](https://github.com/johnagan/clean-webpack-plugin), [CSSNANO](https://cssnano.co/), [File Loader](https://webpack.js.org/loaders/file-loader/), [MiniCssExtractPlugin](https://webpack.js.org/plugins/mini-css-extract-plugin/) and some othe useful tools.

## Tweaks

- Renamed FileLoader to ImageLoader
  - Modified the `webpack.common.js`
  - Modified the `loaders.js`
- Created an images directory `src/images`

## Feature Templates, Images, Fonts

- Created a new directory `src/templates`
- Created a new file `index.html`
- Installed a new plugin `html-webpack-plugin`
- Added new plugin to `loaders.js`
- Added css files `container.css` & `typography.css`
- Added an image
- Added a fonts directory `src/fonts`
- Added fonts to the directory fonts, `Baloo 2` and `Fira Code`
- Added the `FontsLoader`
- Added the `HtmlWebPackPlugin` & `CopyPlugin`

### Current issues

- The injection of the js bundle is in the header, not where I wish it to be @ the footer
- The non generic fonts `Baloo 2` & `Fira Code` do not want to display
