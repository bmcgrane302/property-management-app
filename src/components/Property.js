import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeProperty } from '../actions/properties';
import { bindActionCreators } from 'redux';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

class Property extends Component {

  render () {
    return (
      <div>
        <Card>
        <CardBody>
          <CardTitle>{this.props.property.address}  {this.props.property.unit}</CardTitle>
          <CardSubtitle>{this.props.property.city} {this.props.property.state} {this.props.property.zipcode} </CardSubtitle>
            <Button
              onClick={()=> this.props.removeProperty(this.props.property.id)}
            >remove
          </Button>
        </CardBody>
      </Card>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
    return {
      removeProperty: bindActionCreators(removeProperty, dispatch)
    }
  }

export default connect(null, mapDispatchToProps) (Property)
