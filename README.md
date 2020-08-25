# TDE - Webpack Boilerplate

Our own Webpack Boilerplate for new projects.

## Requirements

* [Yarn](https://yarnpkg.com)
* Node v12.16.0+

## Installation

To install, follow these instructions.

1: Add all of the files to your project.

2: Change the `web` folder name to the correct name.

3: Open your terminal and go to your project:

        cd /path/to/project
        
4: Run Yarn to install all of the packages:

        yarn
        
5: Run one of the commands:
* `yarn watch` to watch any changes inside the `assets` folder
* `yarn build` to compile the `build` folder
        
## Multiple themes

To install the plugin with multiple themes, follow these instructions.

1: Add all of the files to your project.

2: Change the `public` folder name to the correct name.

3: Open the `packages.json` file and find these lines:
```json
"scripts": {
    "preinstall": "node webpack/preinstall-script.js",
    "watch": "check-node-version --node '>= $(node -p \"require('./package.json').config.node\")' && webpack -p --watch --config webpack/webpack.config.js",
    "build": "check-node-version --node '>= $(node -p \"require('./package.json').config.node\") && webpack -p --config webpack/webpack.config.js"
},
```

4: Change the lines and add multiple themes. `theme1` and `theme2` should be renamed to your theme names:
```json
"scripts": {
   "theme1-watch": "check-node-version --node '>= $(node -p \"require('./package.json').config.node\")' && NODE_THEME=theme1 webpack -p --watch --config webpack/webpack.config.js",
   "theme1-build": "check-node-version --node '>= $(node -p \"require('./package.json').config.node\")' && NODE_THEME=theme1 webpack -p --config webpack/webpack.config.js",
   
   "theme2-watch": "check-node-version --node '>= $(node -p \"require('./package.json').config.node\")' && NODE_THEME=theme2 webpack -p --watch --config webpack/webpack.config.js",
   "theme2-build": "check-node-version --node '>= $(node -p \"require('./package.json').config.node\")' && NODE_THEME=theme2 webpack -p --config webpack/webpack.config.js",
},
```

5: Create the theme folders inside the `assets` folder (e.g. `theme1` and `theme2`).

6: Copy the `css`, `js`, `mjml` and `svg` folders inside `theme1` and `theme2`.

7: Open your terminal and go to your project:

        cd /path/to/project
        
8: Run Yarn to install all of the packages:

        yarn
        
9: Run one of the commands:\
_Theme 1_
* `yarn theme1-watch` to watch any changes inside the `assets/theme1` folder
* `yarn theme1-build` to compile the `build/theme1` folder for development

_Theme 2_
* `yarn theme2-watch` to watch any changes inside the `assets/theme2` folder
* `yarn theme2-build` to compile the `build/theme2` folder for development

10: Change the location of the CSS and JS file inside the `index.html`:\
_Theme 1_
* `<link rel="stylesheet" href="/build/theme1/css/css-main.build.css">`
* `<script src="/build/theme1/js/js-app.build.js"></script>`

_Theme 2_
* `<link rel="stylesheet" href="/build/theme2/css/css-main.build.css">`
* `<script src="/build/theme2/js/js-app.build.js"></script>`

## Form example
Use this markup for the default form styling:

```
<form class="form js-form-validate">
  <!-- Single field -->
  <div class="form__group">
    <div class="form__item">
      <label class="form__label" for="field3">field3*</label>
      <input class="form__input" id="field3" name="field3" type="text" required="required">
    </div>
  </div>
  
  <!-- Multiple fields -->
  <div class="form__group">
    <div class="form__item form__item--6">
      <label class="form__label" for="field1">field1*</label>
      <input class="form__input" id="field1" name="field1" type="text" required="required">
    </div>
    <div class="form__item form__item--6">
      <label class="form__label" for="field2">field2*</label>
      <input class="form__input" id="field2" name="field2" type="text" required="required">
    </div>
  </div>
  
  <!-- Radio -->
  <div class="form__group">
    <div class="form__item form__item--spacing-small">
      <span class="form__label">field4*</span>
      <label class="form__radio" for="value1">
        <input type="radio" id="value1" name="field4" required value="value1">
        <span class="form__radio__box"></span>
        <span class="form__radio__label">value1</span>
      </label>
    </div>
  </div>
  <div class="form__group">
    <div class="form__item">
      <label class="form__radio" for="value2">
        <input type="radio" id="value2" name="field4" required value="value2">
        <span class="form__radio__box"></span>
        <span class="form__radio__label">value2</span>
      </label>
    </div>
  </div>
  
  <!-- Checkbox -->
  <div class="form__group">
    <div class="form__item">
      <span class="form__label">field5*</span>
      <label class="form__checkbox" for="field5">
        <input type="checkbox" id="field5" name="field5" required>
        <span class="form__checkbox__box"></span>
        <span class="form__checkbox__label">value1</span>
      </label>
    </div>
  </div>
  
  <!-- Submit button -->
  <div class="form__group">
    <div class="form__item">
      <button type="submit">Verzenden</button>
    </div>
  </div>
</form>
```

