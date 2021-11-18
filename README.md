# TDE - Webpack Boilerplate

Our own Webpack Boilerplate for new projects.

## Requirements

* [Pnpm](https://pnpm.js.org)
* Node v16.13.0+

## Installation

To install, follow these instructions.

1: Add all of the files to your project.

2: Change the `public` folder name to the correct name.

3: Open your terminal and go to your project:

        cd /path/to/project
        
4: Run Pnpm to install all of the packages:

        pnpm install
        
5: Run one of the commands:
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
        
9: Run one of the commands:\
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

##Hamburger
Use this markup for a hamburger menu trigger
```html
<div class="js-hamburger"></div>
```

##Scrollable
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

##Image slider
Use this markup as a start for a simple image slider.
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
        <div class="image-slider__button image-slider__button--prev"><</div>
        <div class="image-slider__button image-slider__button--next">></div>
    </div>
</div>
```

##Accordion
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

##Scroll-to
Add `data-scroll-to="#target"` on the trigger to scroll to element with `id="target"`
```html
<span data-scroll-to="#target"></span>
```

## Form example
Use this markup for the default form styling:

```html
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
                <input type="checkbox" id="field5" name="multipleCheckboxes[]" data-bouncer-target=".form__error-wrapper-multiple">
                <span class="input-checkbox__box"></span>
                <span class="input-checkbox__label">value 3</span>
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

### Input date
*Make sure `field-hooks/date` and bounded function here is enabled in `modules/formvalidation/init`.*
```html
<div class="form__item">
    <form action="" class="js-form-validate">
        <label for="birthDate">Geboortedatum:</label>
        <input type="date" id="birthDate" data-field-birthdate-output="[data-field-birthdate-result]" value="" placeholder="dd-mm-jjjj" pattern="(0[1-9]|1[0-9]|2[0-9]|3[01])-(0[1-9]|1[012])-[0-9]{4}|[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])" data-bouncer-message="Gebruik de notatie: dd-mm-jjjj" required>
        <input type="hidden" name="birthDate" data-field-birthdate-result>
    </form>
</div>
```

Second field (hidden) will convert all dates to US date format like YYYY-MM-DD e.g. 1986-20-11.

### At least one checkbox is required
*Make sure `isAtLeastOneCheckboxChecked` is enabled in the `customValidations` inside `modules/formvalidation/init`.*

*If this field is required add `data-bouncer-checkboxes-required` to the same element as `data-bouncer-at-least-one-checkbox`.*
```html
<div class="form__group form__group--vertical" data-bouncer-at-least-one-checkbox>
    <div class="form__options">
      <div class="form__item">
        <span class="form__label">Optie 1:</span>
        <label class="form__checkbox" for="field5">
          <input type="checkbox" id="field5" name="multipleCheckboxes[]" data-bouncer-target=".form__error-wrapper-multiple">
          <span class="form__checkbox__box"></span>
          <span class="form__checkbox__label">value 1</span>
        </label>
      </div>
      <div class="form__item">
        <label class="form__checkbox" for="field6">
          <input type="checkbox" id="field6" name="multipleCheckboxes[]" data-bouncer-target=".form__error-wrapper-multiple">
          <span class="form__checkbox__box"></span>
          <span class="form__checkbox__label">value 2</span>
        </label>
      </div>
      <div class="form__item">
        <label class="form__checkbox" for="field7">
          <input type="checkbox" id="field7" name="multipleCheckboxes[]" data-bouncer-target=".form__error-wrapper-multiple">
          <span class="form__checkbox__box"></span>
          <span class="form__checkbox__label">value 3</span>
        </label>
      </div>
      <div class="form__error-wrapper-multiple"></div>
    </div>
  </div>
```
