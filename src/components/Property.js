import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

class Property extends Component {
  render () {
    return (
      <div>
        <Card>
        <CardBody>
          <CardTitle>{this.props.property.address}</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
        </CardBody>
      </Card>
      </div>
    )
  }
}

export default Property
