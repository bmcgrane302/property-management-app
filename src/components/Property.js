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
        <CardBody className="text-left">
          <CardTitle>{this.props.property.address}  {this.props.property.unit}</CardTitle>
          <CardSubtitle>{this.props.property.city} {this.props.property.state} {this.props.property.zipcode} </CardSubtitle>
          <CardSubtitle>Mortgage: ${this.props.property.mortgage}</CardSubtitle>
          <CardSubtitle>Property Tax: ${this.props.property.property_tax}</CardSubtitle>
          <CardSubtitle>Property Insurance: ${this.props.property.property_insurance}</CardSubtitle>
          <CardSubtitle>Rent: ${this.props.property.rent_amount}</CardSubtitle>
          <CardSubtitle>Lease start date: {this.props.property.lease_start_date}</CardSubtitle>
          <CardSubtitle>Lease end date: {this.props.property.lease_end_date}</CardSubtitle>
          <CardSubtitle>Rent status: {this.props.property.rent_paid}</CardSubtitle>
          <CardSubtitle>Repairs: {this.props.property.repairs}</CardSubtitle>
          <CardSubtitle>Repair comments: {this.props.property.repair_description}</CardSubtitle>

           
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
