import React, { Component } from 'react';
import { Button } from 'reactstrap';

class SplashPage extends Component {
  render () {
    return (
      <div>
        <p>splash</p>
        <Button href='./dash' outline color="secondary">ENTER</Button>
      </div>
    )
  }
}

export default SplashPage
