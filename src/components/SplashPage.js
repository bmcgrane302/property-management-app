import React, { Component } from 'react';
import { Button } from 'reactstrap';

class SplashPage extends Component {
  render () {
    return (
      <div>
        <div className = "splashPage1 shadow">
            <div className="logo shadow">
              <h1 className='centerLogo'>LANDLORD</h1>
               <Button style={{color: 'black'}} href='/dash' className='enterButton' color="white" size="lg" >ENTER</Button>
            </div>
        </div>
        <div className = "splashPage2">
        </div>
      </div>
    )
  }
}

export default SplashPage
