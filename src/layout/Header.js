import React, { Component } from 'react';

class Header extends Component {
  render(){

    return (
      <div>
        <div className="full">
          <img src="https://dcfv5z6t7wfeu.cloudfront.net//img/landing/march/big-header.jpg" alt="quibids auction" />
        </div>
        <div className="full">
          <img src="https://dcfv5z6t7wfeu.cloudfront.net//img/landing/us/2018-header.jpg" alt="save wholesale" />
        </div>
        <div className="full"> 
          <div className="video-box">
            <div className="img-video">
              <img src="https://dcfv5z6t7wfeu.cloudfront.net//img/landing/march/overstock-image.jpg" alt="overstock" />
              <div className="video">
              </div>
            </div>
          </div>
        </div>
      </div>
      
       

    
    )
  }
}

export default Header