import React from "react";
import "./App.css";
import Counter from "./components/counter/Counter";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  handleMinus() {
    this.setState((state) => {
      return { ...state, count: (state.count -= 1) };
    });
  }

  handlePlus() {
    this.setState((state) => {
      return { ...state, count: (state.count += 1) };
    });
  }

  handleReset() {
    this.setState((state) => {
      return { ...state, count: 0 };
    });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <Counter
          count={this.state.count}
          handlePlus={this.handlePlus.bind(this)}
          handleMinus={this.handleMinus.bind(this)}
          handleReset={this.handleReset.bind(this)}
        />
      </div>
    );
  }
}

export default App;






