import { Component } from "react";
import "../Styles/Boton.css";

class Boton extends Component {
  render() {
    return (
      <div
        className="Boton"
        onClick={this.props.onClick}
        data-size={this.props.size}
        data-value={this.props.value}
      >
        {this.props.label}
      </div>
    );
  }
}

export default Boton;
