# Canvo
An easy to implement, well-featured image editor that uses HTML5 Canvas.

## Installation
### Browser
Just download `canvo.browser.js` from the `dist/` directory in this repo and include the following in the bottom of your `<body>` before any other scripts:
```html
<script type='text/javscript' src='/path/to/canvo.browser.js'></script>
```

### Bower
Run this in your projects main directory:
```sh
bower install canvo
```

Then include it like this:
```html
<script type='text/javascript' src='/path/to/bower_components/canvo/dist/canvo.browser.js'></script>
```

### Node
Use your choice of package manager to install `canvo`, and import it using one of these two methods:

**CommonJS (e.g. `require()`):**
```js
const Editor = require('canvo');

// Use it below (you should know this)...
```
**ESModules (e.g. [Webpack](https://webpack.js.org/) or [Rollup](https://rollupjs.com)):**
```js
import Editor from 'canvo';

// Use it below (you should know this)...
```
You should know this stuff anyway, I just try to make my READMEs idiot-proof.
