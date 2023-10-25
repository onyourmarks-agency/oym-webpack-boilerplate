# TDE - Webpack Boilerplate

Our own Webpack Boilerplate for new projects.

## Requirements

* [Pnpm](https://pnpm.js.org)
* Node v20+

## Installation

To install, follow these instructions.

1: Add all of the files to your project.

2: Change the `public` folder name to the correct name.

3: Open your terminal and go to your project:

    cd /path/to/project
        
4: Use the correct nvm version:
```nvm use 20```

5: Run Pnpm to install all of the packages:

    pnpm install
        
6: Run one of the commands:
* `pnpm watch` to watch any changes inside the `assets` folder
* `pnpm build` to compile the `build` folder
        
## Multiple themes

To install the plugin with multiple themes, follow these instructions.

1: Add all of the files to your project.

2: Change the `public` folder name to the correct name.

3: Open the `packages.json` file and find these lines:
```json
"scripts": {
    "watch": "node webpack/pre-script.js && webpack -p --watch --config webpack/webpack.config.js",
    "build": "node webpack/pre-script.js && webpack -p --config webpack/webpack.config.js"
},
```

4: Change the lines and add multiple themes. `theme1` and `theme2` should be renamed to your theme names:
```json
"scripts": {
   "theme1-watch": "node webpack/pre-script.js && NODE_THEME=theme1 webpack -p --watch --config webpack/webpack.config.js",
   "theme1-build": "node webpack/pre-script.js && NODE_THEME=theme1 webpack -p --config webpack/webpack.config.js",
   
   "theme2-watch": "node webpack/pre-script.js && NODE_THEME=theme2 webpack -p --watch --config webpack/webpack.config.js",
   "theme2-build": "node webpack/pre-script.js && NODE_THEME=theme2 webpack -p --config webpack/webpack.config.js",
},
```

5: Create the theme folders inside the `assets` folder (e.g. `theme1` and `theme2`).

6: Copy the `css`, `js` and `svg` folders inside `theme1` and `theme2`.

7: Open your terminal and go to your project:

        cd /path/to/project
        
8: Run Pnpm to install all of the packages:

        pnpm install
        
9: Run one of the commands:
_Theme 1_
* `pnpm theme1-watch` to watch any changes inside the `assets/theme1` folder
* `pnpm theme1-build` to compile the `build/theme1` folder for development

_Theme 2_
* `pnpm theme2-watch` to watch any changes inside the `assets/theme2` folder
* `pnpm theme2-build` to compile the `build/theme2` folder for development

10: Change the location of the CSS and JS file inside the `index.html`:\
_Theme 1_
* `<link rel="stylesheet" href="/build/theme1/css/css-main.build.css">`
* `<script src="/build/theme1/js/js-app.build.js"></script>`

_Theme 2_
* `<link rel="stylesheet" href="/build/theme2/css/css-main.build.css">`
* `<script src="/build/theme2/js/js-app.build.js"></script>`

## Hamburger
Use this markup for a hamburger menu trigger. The data element `data-menu-is-active` will be added to the body when the hanburger is active. The state wil also be stored in the svelte store.
```html
<div class="js-hamburger"></div>
```

## Scrollable
Use this markup as a start for a scrollable element. 
Make sure the items have a height and a width, and don't forget to set these dimensions in the javascript as well.

```html
<div class="scrollable js-scrollable">
    <div class="scrollable__slider dragscroll js-scrollable-items">
        <div class="scrollable__inner js-scrollable-inner">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            ...
        </div>
    </div>

    <div class="scrollable__controls">
        <button class="scrollable__controls__button js-scrollable-left" type="button"><</button>
        <button class="scrollable__controls__button js-scrollable-right" type="button">></button>
    </div>
</div>
```

## Image slider
Use this markup as a start for a simple image slider.

When you import a new module in javascript, dont forget to also include the styles in `css/2-vendor/_swiper.scss`.
```html
<div class="image-slider swiper js-image-slider">
    <div class="swiper-wrapper">
        <div class="swiper-slide">1</div>
        <div class="swiper-slide">2</div>
        <div class="swiper-slide">3</div>
        ...
    </div>

    <div class="image-slider__pagination"></div>
    
    <div class="image-slider__navigation">
        <button class="image-slider__button image-slider__button--prev"><</button>
        <button class="image-slider__button image-slider__button--next">></button>
    </div>
</div>
```

## Accordion
Use this markup as a start for very simple accordion items

```html
<div class="accordion">
    <div class="accordion__item">
        <input class="accordion__input" type="checkbox" name="accordion1" id="accordion1">
        <label class="accordion__title" for="accordion1">Accordion item 1</label>
        <div class="accordion__content">Content for accordion item 1</div>
    </div>

    <div class="accordion__item">
        <input class="accordion__input" type="checkbox" name="accordion2" id="accordion2">
        <label class="accordion__title" for="accordion2">Accordion item 2</label>
        <div class="accordion__content">Content for accordion item 2</div>
    </div>
</div>
```

## Popup
Add `data-popup-content="#popup-content"` on the trigger to open a popup with the contents of the element with `id="popup-content"`.
By default this opens a fullscreen popup, but you can also specify a type with `data-popup-type="small"`. This will add a modifier class: `popup--small` to the popup. You can also add new types.
```html
<button data-popup-content="#popup-content"></button>
```

## Scroll-to
Add `data-scroll-to="#target"` on the trigger to scroll to element with `id="target"`
```html
<button data-scroll-to="#target"></button>
```

## Form example
Use this markup for the default form styling and validation:

```html
<form class="form js-form-validate">
    <!-- Single field -->
    <div class="form__group">
        <div class="form__item">
            <label class="form__label" for="field1">field1*</label>
            <input class="form__input" id="field1" name="field1" type="text" required="required">
        </div>
    </div>
    
    <!-- Multiple fields -->
    <div class="form__group">
        <div class="form__item form__item--6">
            <label class="form__label" for="field2">field2*</label>
            <input class="form__input" id="field2" name="field2" type="text" required="required">
        </div>
        <div class="form__item form__item--6">
            <label class="form__label" for="field3">field3*</label>
            <input class="form__input" id="field3" name="field3" type="text" required="required">
        </div>
    </div>
    
    <!-- Radio -->
    <div class="form__group">
        <div class="form__item">
            <span class="form__label">field4*</span>
            <label class="input-radio" for="value1">
                <input type="radio" id="value1" name="field4" required value="value1">
                <span class="input-radio__box"></span>
                <span class="input-radio__label">value1</span>
            </label>
            <label class="input-radio" for="value2">
                <input type="radio" id="value2" name="field4" required value="value2">
                <span class="input-radio__box"></span>
                <span class="input-radio__label">value2</span>
            </label>
        </div>
    </div>
    
    <!-- Checkbox -->
    <div class="form__group">
        <div class="form__item">
            <span class="form__label">field5*</span>
            <label class="input-checkbox" for="field5">
                <input type="checkbox" id="field5">
                <span class="input-checkbox__box"></span>
                <span class="input-checkbox__label">value 3</span>
            </label>
        </div>
    </div>
    
    <!-- Submit button -->
    <div class="form__group">
        <div class="form__item">
            <button class="btn" type="submit">Verzenden</button>
        </div>
    </div>
</form>
```

### Input date
Use this markup for a date select. Make sure all classes prefixed with `js-form-date-` are present. 
The value from the selects will be placed in the hidden input with the format `YYYY-MM-DD`.

Inside `modules/formvalidation/init`, make sure the customValidation `date` is enabled in the customValidations and `formatDateField()` is enabled in the `init()` function .
```html
<!-- Date -->
<div class="form__group js-form-date">
    <input class="js-form-date-result" type="hidden" name="birthDate" required="required" data-bouncer-target="#date-error">
    
    <div class="form__item form__item--4">
        <label class="form__label" for="field6">field6*</label>
        <select class="form__input js-form-date-day" id="field6" name="field6">
            <option value="" disabled selected></option>
            <option value="1">1</option>
            <option value="2">2</option>
            ...
        </select>
    
        <div id="date-error"></div>
    </div>
    <div class="form__item form__item--4">
        <label class="form__label" for="field7">field7*</label>
        <select class="form__input js-form-date-month" id="field7" name="field7">
            <option value="" disabled selected></option>
            <option value="1">Januari</option>
            <option value="2">Februari</option>
            ...
        </select>
    </div>
    <div class="form__item form__item--4">
        <label class="form__label" for="field8">field8*</label>
        <select class="form__input js-form-date-year" id="field8" name="field8">
            <option value="" disabled selected></option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            ...
        </select>
    </div>
</div>
```

### At least one checkbox is required
Make sure `isAtLeastOneCheckboxChecked` is enabled in the `customValidations` inside `modules/formvalidation/init` and use the following markup.

```html
<div class="form__group" data-bouncer-at-least-one-checkbox>
    <div class="form__item">
        <span class="form__label">Field 9</span>
        <label class="input-checkbox" for="field9">
            <input type="checkbox" id="field9" name="multipleCheckboxes[]" data-bouncer-target="#multipleCheckboxes">
            <span class="input-checkbox__box"></span>
            <span class="input-checkbox__label">value 1</span>
        </label>
        <label class="input-checkbox" for="field10">
            <input type="checkbox" id="field10" name="multipleCheckboxes[]" data-bouncer-target="#multipleCheckboxes">
            <span class="input-checkbox__box"></span>
            <span class="input-checkbox__label">value 2</span>
        </label>
        <label class="input-checkbox" for="field11">
            <input type="checkbox" id="field11" name="multipleCheckboxes[]" data-bouncer-target="#multipleCheckboxes">
            <span class="input-checkbox__box"></span>
            <span class="input-checkbox__label">value 3</span>
        </label>
        <div id="multipleCheckboxes"></div>
    </div>
</div>
```
