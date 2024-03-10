import React from "react";
import Button from "../Button/button";
import './Counter.css'

class Counter extends React.Component {

  render() {
    console.log(this.count);
    return (
      <div>
        <div className="buttons">
          <Button onClick = {this.props.handleMinus} text = '-'/>
          <p>{this.props.count}</p>
          <Button onClick = {this.props.handlePlus} text = '+'/>
        </div>

        <Button onClick = {this.props.handleReset} text = 'Reset' color="orange"/>
      </div>
    );
  }
}

export default Counter;
