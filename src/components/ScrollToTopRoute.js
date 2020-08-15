import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import "../styles/Animations.css";

class ScrollToTopRoute extends Component {
  componentDidUpdate(prevProps) {
    if (
      this.props.path === this.props.location.pathname &&
      this.props.location.pathname !== prevProps.location.pathname
    ) {
      window.scrollTo({
        top: 0, 
        left: 0, 
        behavior: 'smooth'
      });
      
      
    }
  }

  render() {
    const { component: Component, ...rest } = this.props;

    return (
      <Route
        {...rest}
        render={(props) => <Component {...props} />}
      />
    );
  }
}

export default withRouter(ScrollToTopRoute);
