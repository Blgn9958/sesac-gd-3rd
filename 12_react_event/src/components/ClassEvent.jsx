import { Component } from "react";

export default class ClassEvent extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  state = {};

  handleClick() {
    this.setState({ msg: "웃어보세요" });
  }

  render() {
    return (
      <>
        <h2>클래스형 컴포넌트에서 이벤트</h2>
        <div>{this.state.msg}</div>
        <button onClick={this.handleClick}>변경!</button>

        <input
          type="text"
          onChange={(e) => {
            console.log(e);
            console.log(e.target.value);
          }}
        />
      </>
    );
  }
}
