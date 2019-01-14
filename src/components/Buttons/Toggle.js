import React, { Component } from "react";
import Borrow from "../Form/Borrow";
import { Button } from "react-bootstrap";

export default class Toggle extends Component {
  constructor() {
    super();
    this.state = {
      isHidden: true
    };
  }
  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.toggleHidden.bind(this)}>-></button>
        {!this.state.isHidden && <Child />}
      </div>
    );
  }
}

const Child = () => <div className="mortHide">{<Borrow />}</div>;

//   state = {
//     on: false
//   };

//   toggle = () => {
//     this.setstate({
//       on: !this.state.on
//     });
//   };

//   render() {
//     return (
//       <div>
//         {this.state.on && <Borrow />}
//         <button onClick={this.toggle}>Next</button>
//       </div>
//     );
//   }
