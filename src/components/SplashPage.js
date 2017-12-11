import React, { Component } from 'react';
import { Button } from 'reactstrap';

class SplashPage extends Component {
  render () {
    return (
      <div>
        <p>slash</p>
        <Button href='./dash' outline color="secondary">ENTER</Button>
      </div>
    )
  }
}

export default SplashPage
