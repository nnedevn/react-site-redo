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
                <video width="368" height="208" autoplay="" controls="" poster="https://dcfv5z6t7wfeu.cloudfront.net/img/landing/landing_video_3.jpg" />
              		<source src="https://drxdv8f27mzoi.cloudfront.net/marketing/lander_video_oct.mp4?1" type="video/mp4" />
                <div className="img-video">
                  <img src="https://dcfv5z6t7wfeu.cloudfront.net//img/landing/march/wholesale-image.jpg" alt="wholesale"/>
                  <div className="full">
                    <img src="https://dcfv5z6t7wfeu.cloudfront.net//img/landing/bbb-2013.png" alt="bbb" class="bbb-image" />
                    <div className="full">
                      <img src="https://dcfv5z6t7wfeu.cloudfront.net//img/landing/march/quibids-versus.jpg" alt="QuiBids Versus" class="hide-md"/>
                      <div className="full">
                        <img src="https://dcfv5z6t7wfeu.cloudfront.net//images/landing/43/scrolldownbar.jpg" />
                        <div className="past-auctions">
                          <img src="https://dcfv5z6t7wfeu.cloudfront.net//img/landing/march/past-auctions-001.jpg" alt="Past Auctions5"/>
                          <div className="full">
                            <img src="https://dcfv5z6t7wfeu.cloudfront.net//images/landing/43/scrolldownbar.jpg" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
