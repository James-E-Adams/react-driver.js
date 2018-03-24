# `react-driver.js` - A React wrapper around driver.js.

Not usable yet, still need to fix a few npm/bundling issues.

[![npm](https://img.shields.io/npm/v/react-driver.js.svg?style=flat-square)](https://npmjs.org/react-driver.js)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](LICENSE)

## Install

With `yarn`:

```shellsession
yarn add react-driver.js
```

With `npm`:

```shellsession
npm install --save-dev react-driver.js
```

## Usage

```jsx
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Driver, withDriver } from "react-driver.js";
import "react-driver.js/dist/index.css";

class Child extends Component {
  render() {
    return <div id="cheese">Potato</div>;
  }
}

const App = ({ driver }) => (
  <Driver
    popoverOptions={{
      title: "Title on Popover",
      description: "Body of the popover",
      position: "bottom"
    }}
    driver={driver}
  >
    <Child />
  </Driver>
);

const driverOptions = {
  //Put some options here to be passed to the driver.js constructor
};
export default withDriver(App, driverOptions);
```

## Instructions

Use the withDriver HOC wherever you need a reference to the driver.
Then, wrap the component you wish to highlight as `<Driver> <YourComponent> </Driver>`. API is the same as driver.js. Only highlight is supported atm.

## Options

Driver options follow:

```js
{
  animate: true,                    // Whether to animate or not
  opacity: 0.75,                    // Background opacity (0 means only popovers and without overlay)
  padding: 10,                      // Distance of element from around the edges
  allowClose: true,                 // Whether the click on overlay should close or not
  doneBtnText: 'Done',              // Text on the final button
  closeBtnText: 'Close',            // Text on the close button for this step
  stageBackground: '#ffffff',       // Background color for the staged behind highlighted element
  nextBtnText: 'Next',              // Next button text for this step
  prevBtnText: 'Previous',          // Previous button text for this step
  showButtons: false,               // Do not show control buttons in footer
  scrollIntoViewOptions: {},        // We use `scrollIntoView()` when possible, pass here the options for it if you want any
  onHighlightStarted: (Element) {}, // Called when element is about to be highlighted
  onHighlighted: (Element) {},      // Called when element is fully highlighted
  onDeselected: (Element) {},       // Called when element has been deselected
}
```

Popover options follow:

```js
{
    title: 'Title for the Popover',
    description: 'Description for it',
    position: 'left', // can be `top`, `left`, `right`, `bottom`
}
```
