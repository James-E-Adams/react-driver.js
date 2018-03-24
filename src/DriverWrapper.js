import React, { Component } from "react";
import ReactDOM from "react-dom";
import "driver.js/dist/driver.min.css";

class DriverWrapper extends Component {
  componentDidMount() {
    const { popoverOptions, driver } = this.props;
    const id = ReactDOM.findDOMNode(this.childElement).id;
    driver.highlight({ element: `#${id}`, popover: popoverOptions });
  }
  render() {
    const { children } = this.props;
    const childrenWithProps = React.Children.map(children, child =>
      React.cloneElement(child, { ref: el => (this.childElement = el) })
    );
    return childrenWithProps;
  }
}
export default DriverWrapper;
