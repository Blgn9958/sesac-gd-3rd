import { Component } from "react";

export default class FoodProps extends Component {
  render() {
    console.log(this.FoodProps);

    return (
      <>
        <div>
          가장 많이 먹는
          <span className="FoodProps">김밥</span>: {this.props.price}
        </div>
      </>
    );
  }
  static defaultProps = {
    price: 4000,
  };
}
