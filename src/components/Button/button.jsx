import React from "react";

class Button extends React.Component {
  constructor(props) {
    super();
    this.onClick = props.onClick;
    this.text = props.text;
  }
  render() {
    const buttonStyle = {
      backgroundColor:
        this.props.color === "orange" ? "orange" : "rgb(4, 205, 4)",
    };

    return (
      <button onClick={this.onClick} className="btn" style={buttonStyle}>
        {this.text}
      </button>
    );
  }
}

export default Button;
