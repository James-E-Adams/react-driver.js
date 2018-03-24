import React from "react";
import Driver from "driver.js";

const withDriver = (WrappedComponent, options) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.driver = new Driver(options);
    }
    render() {
      return <WrappedComponent driver={this.driver} {...this.props} />;
    }
  };
};

export default withDriver;
