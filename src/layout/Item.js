
import React, { Component } from 'react';

class Item extends Component {
  constructor(props) {
    super();
    this.state = {
      timer: '',
      price: '',
      flashClass: 'button-flash',
      flashClass: ''
    }
  }
  // -------Helper functions
  updateComponent = (e) => {
    this.setState({
      timer: 10 + Math.round(4 * Math.random()),
      price: this.state.price +0.01,
      flashClass:'button-flash'
    })
  }
  // Update the price and timer values every second
  tick = () => {
    if (this.state.timer > 1) {
      this.setState({
        timer: this.state.timer - 1,
        flashClass:''
      })
    } else {
      this.setState({
        timer: 10 + Math.round(2 * Math.random()),
        price: this.state.price + 0.01,
        flashClass: 'button-flash'
      })

    }
  }

  componentDidMount() {
    this.setState({
      timer: this.props.item.timerValue,
      price: this.props.item.price
    });

    this.timerID = setInterval(
      () => this.tick(), 1000
    );
  }

  render() {
    console.log(this.props.item)

    return (
      <div className="single-item">
        <div>
          <a href="#"><h5 className="product-name">{this.props.item.productName}</h5></a>
        </div>
        <div className="auction-item-img">
          <a href=""><img src={this.props.item.imgUrl} alt="" /></a>
          <p>Time remaining: {this.state.timer}</p>
          <h3 className={this.state.flashClass}>${parseFloat(this.state.price).toFixed(2)}</h3>
          <h5 className="username">{this.props.item.username}</h5>
          <input className="payme-button"type="button" value="Pay me!" onClick={this.updateComponent} />
        </div>
      </div>

    )
  }
}

export default Item
