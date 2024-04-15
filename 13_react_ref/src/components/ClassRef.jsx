import { Component, createRef } from "react";

export default class ClassRef extends Component {
  input = createRef();

  render() {
    return (
      <>
        <h2>클래스형 컴포넌트 ㄴ</h2>
        <input type="text" ref={this.input} />
        <button onClick={() => this.input.focus()}>버튼</button>
        <br />

        <div>{this.localVar.current}</div>
        <div>this.state.state : {this.state.state}</div>
        <button onClick={() => this.localVar.current++}>localVar +1</button>
        <button onClick={() => this.setState({ state: this.state.state++ })}>
          state 1
        </button>
      </>
    );
  }
}
