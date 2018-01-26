import React, { Component } from 'react';

class Item extends Component {
  constructor(props) {
    super();
    this.state = {
      timer: '',
      price: '',
      flashClass: 'button-flash'

    }
  }
  // -------Helper functions
  updateComponent = (e) => {
    console.log('update component')
  }

  tick = () => {
    if (this.state.timer > 1) {
      this.setState({
        timer: this.state.timer - 1,
      })
    } else {
      
      this.setState({
        timer: 10 + Math.round(2 * Math.random()),
        price: this.state.price +0.01
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
          <a href="#"><h5>{this.props.item.productName}</h5></a>
        </div>
        <p>Time remaining: {this.state.timer}</p>
        <div className="auction-item-img">
          <a href=""><img src={this.props.item.imgUrl} alt="" /></a>
          <h3 className={this.state.flashClass}>${parseFloat(this.state.price).toFixed(2)}</h3>
          <h5>{this.props.item.username}</h5>
          <input type="button" value="Pay me!" onClick={this.updateComponent} />
        </div>
      </div>

    )
  }
}

export default Item