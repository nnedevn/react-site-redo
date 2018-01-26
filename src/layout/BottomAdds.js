import React, { Component } from 'react';

class BottomAdds extends Component {
  render(){
    return (

      <div className="full">
        <img src="https://dcfv5z6t7wfeu.cloudfront.net//img/mobile/us/discountauction-march.jpg" alt="discountauction" />
        <img src="https://dcfv5z6t7wfeu.cloudfront.net//img/mobile/us/quibids-promise.png" alt="promise" className="promise" />
        <img src="https://dcfv5z6t7wfeu.cloudfront.net//img/mobile/us/versus-march_RD.png" alt="versus" className="promise" />
        <img src="https://dcfv5z6t7wfeu.cloudfront.net//images/landing/48/satisfiedcustomers.jpg" alt="satisfiedcustomers" className="cant" />

      <div className="formz">
        <div className="form-master">
            <div className="form-wrapper clearfix">
            <div>
            <div className="clearfix">
            <div className="banner">
            <img src="https://dcfv5z6t7wfeu.cloudfront.net//img/mobile/us/formbanner-002.png" alt="start now" className="getr" />
            </div>
            <div id="login-form" className="solidified rflang-en">
                <form method="post" id="regform">
            <input type="hidden" name="promo" value="" />
            <input type="hidden" name="action" value="new" />
            <input type="hidden" name="reginclude" value="2" />
            <input type="hidden" name="hideConfirmFields" value="1" />

            <div className="form-content">
              <label>First Name:</label>
              <input type="text" name="account_firstname" id="account_firstname" value="" />
              <a className="info"><img src="https://dcfv5z6t7wfeu.cloudfront.net//images/info-icon.png" alt="" border="0" id="flag_firstname" /></a>
            </div>

            <div className="form-content">
              <label>Last Name:</label>
              <input type="text" name="account_lastname" id="account_lastname" value="" />
              <a className="info"><img src="https://dcfv5z6t7wfeu.cloudfront.net//images/info-icon.png" alt="" border="0" id="flag_lastname" /></a>
            </div>


            <div className="clear" ></div>

            <div className="form-content">
              <label>Email Address:</label>
                    <input type="text" name="account_email" id="account_email" value="" />
              <a className="info"><img src="https://dcfv5z6t7wfeu.cloudfront.net//images/info-icon.png" alt="" border="0" id="flag_email" /></a>
            </div>

            <div className="form-content email-confirm" >
              <label className="italy">Confirm Email:</label>
                    <input type="text" name="account_email2" id="account_email2" value="" />
            </div>


            <div className="form-content">
              <label>Country:</label>
              <select name="account_countryid" id="account_countryid">
              <option value="2">Canada</option><option value="1" selected="">United States</option>            	</select>
            </div>

                  <div className="clear" ></div>

            <div className="form-content">
              <label>Username:</label>
                    <input type="text" name="account_username" id="account_username" onkeydown="checkUsername()" maxlength="16" value="" />
                    <a className="info"><img src="https://dcfv5z6t7wfeu.cloudfront.net//images/info-icon.png" alt="" border="0" id="flag_username" /></a>

                    <span className="error" >
                    <span id="username_response"></span>
                <br />

                      Usernames must be at least 5 characters, and alphanumeric only (A-Z / 0-9).No spaces or special characters are allowed.
                      <br />
                      Please note that your username will be viewed by other users each time you place a bid.
                        </span>
            </div>
            <div className="form-content">
              <label>Password:</label>
              <input type="password" name="account_password" id="account_password" maxlength="25" value="" />
              <a className="info"><img src="https://dcfv5z6t7wfeu.cloudfront.net//images/info-icon.png" alt="" border="0" id="flag_password" /></a>
            </div>

            <div className="form-content password-confirm" >
                    <label>Confirm Password:</label>
                    <input type="password" name="account_password2" id="account_password2" maxlength="25" value="" />
              <a className="info"><img src="https://dcfv5z6t7wfeu.cloudfront.net//images/info-icon.png" alt="" border="0" id="flag_password2" /></a>
            </div>

            <div className="form-content">
            <span className="strength">
              <table>
                <tbody><tr>
                  <td valign="top"><span className="strength-title">Strength:</span></td>
                  <td>
                    <div id="mypassword_text" className="strength-text"></div>
                    <div id="mypassword_bar" className="strength-bar"></div>
                  </td>
                </tr>
              </tbody></table>
            </span>
            </div>

                  <span className="error passwordtext" >Your password should be at least 6 characters long, and include a capital letter(s) and/or number(s).</span>

                  <div id="captcha" ></div>

                  <div className="wraps  ">
                  <div className="offer-checkbox">
              <input type="checkbox" name="newsletter" id="newsletter" value="On" checked="" />
              <strong>3 Free Bonus Bids</strong> Subscribe to QuiBids Special Offers!<br />
            </div>


              <div className="agree-checkbox">
                      <input type="checkbox" name="agree" id="agree" value="On" />
                      I have read and agree to QuiBids <a href="#" onclick="return popupTerms();">Terms &amp; Conditions</a> and <a href="#">Privacy Policy</a>. I also agree that I am at least 12 years of age and to only open one account per person<br />              </div>
            <a className="info"><img src="https://dcfv5z6t7wfeu.cloudfront.net//images/info-icon.png" alt="" border="0" id="flag_privacy" /></a>
                  </div>
                    <input type="submit" name="login" value="Submit" className="button start landing-submit-en " />
                    <img id="processingImg" className="processing" src="https://dcfv5z6t7wfeu.cloudfront.net/img/processing-registration-en.png" />
                    <div className="clear"></div>


                </form>
                <div id="login-form-end"></div>
              </div>

        </div></div></div>
          </div>

          <img src="https://dcfv5z6t7wfeu.cloudfront.net//img/landing/march/form-left-001.jpg" className="lefty" alt="savings" />

        </div>
      </div>


    )
  }
}

export default BottomAdds
