import React, { Component } from 'react';

class Item extends Component {
    constructor(props){
    super();
    this.state = {
      timer:null,
      price: null,

    }
  }

  updateComponent = (e) => {
    console.log('reset timer');
    console.log('update price');
  } 
  
  render(){
    return (
      <div>
        <div>
        <a href="#"><h5>{this.props.item.productName}</h5></a>
      </div>
      <div className="auction-item-img">
        <a href=""><img src="{this.props.item.imgUrl}" alt=""/></a>
        <h2>{timer}</h2>
        <h5>{user}</h5>
      </div>
      <input type="button" onClick={this.updateComponent}/>
      </div>
    
    )
  }
}

export default Item