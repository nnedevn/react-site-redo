// import React, { Component } from 'react';

// class Item extends Component {
//     constructor(props){
//     super();
//     this.state = {
//       timer: '',
//       price: ''

//     }
//   }

//   tick = () => {
//     // If there is one sec remaining reset timer to 10
//     if(this.state.timer === 1 ){
//       this.setState({
//         timer: 10
//       });
//     }
//     // Tick down by one each second
//     this.timerId = setInterval (
//       ()=>this.tick(), 1000
//     )

//     this.setState({
//       timer: this.state.timer 1
//     })

//   }

//   componentDidMount() {
//     alert();
//   }

//   updateComponent = (e) => {


//   } 
//   render(){
//     console.log(this.props.item)
//     // let timer = this.props.item.timer;
//     // let user = this.props.item.userName;

//     return (
//       <div>
//         <div>
//         <a href="#"><h5>{this.props.item.productName}</h5></a>
//       </div>
//       <div className="auction-item-img">
//         <a href=""><img src={this.props.item.imgUrl} alt=""/></a>
//        {this.state.timer}
//       </div>
//       <input type="button" value="Pay me!" onClick={this.updateComponent}/>
//       </div>
    
//     )
//   }
// }

// export default Item