import React, { Component } from "react";
const { Provider, Consumer } = React.createContext();

class MyContextProvider extends Component {
  state = {
      isAuthenticated: false
  };
  render() {
    return (
      <Provider
        value={{ isAuthenticated: this.state.isAuthenticated}}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { MyContextProvider, Consumer as MyContextConsumer };
