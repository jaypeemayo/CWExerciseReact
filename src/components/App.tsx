import * as React from "react";
import { hot } from "react-hot-loader";

// const reactLogo = require("./../assets/img/react_logo.svg");
//import "./../assets/scss/App.scss";
import {ProductPage} from "./Product/ProductPage/ProductPage";

class App extends React.Component<Record<string, unknown>, undefined> {
  public render() {
    return (
      <div className="app">
         <ProductPage />
      </div>
    );
  }
}

declare let module: Record<string, unknown>;

export default hot(module)(App);
