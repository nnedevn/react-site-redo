import React, { Component } from 'react';
import Item from './Item';

class Items extends Component {

  render(){

      const allItems = this.props.items.map((item)=> {
   return <Item item={item}/>
  })
  
    return (
      <div className="allItems">
        {allItems}
      </div>
    )
  }
}

export default Items