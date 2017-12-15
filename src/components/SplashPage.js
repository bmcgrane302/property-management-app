import React, { Component } from 'react';
import { Button } from 'reactstrap';

class SplashPage extends Component {
  render () {
    return (
      <div>
        <div className = "splashPage1">
            <div className="logo">
              <h1 className='centerLogo'>LANDLORD</h1>
              <h4 className='enterButton'><a href='/dash'>ENTER</a></h4>
            </div>
        </div>
        <div className = "splashPage2">
        </div>
      </div>
    )
  }
}

export default SplashPage
