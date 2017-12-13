import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeProperty } from '../actions/properties';
import { bindActionCreators } from 'redux';
import { Card, CardImg, CardText, CardBody, Row, Col,
  CardTitle, CardSubtitle, Button } from 'reactstrap';


class Property extends Component {

  render () {
    return (
      <div>
        <Card style={{marginTop: 25}}>
        <CardBody className="text-left">
          <Row  >
            <Col>
              <CardTitle>{this.props.property.address} </CardTitle>
            </Col>
            <Col>
              <CardTitle>Unit: {this.props.property.unit}</CardTitle>
            </Col>
            <Col>
              <CardTitle>{this.props.property.city} {this.props.property.state} {this.props.property.zipcode} </CardTitle>
            </Col>
          </Row>
          <Row style={{paddingBottom: 10}}>
            <Col sm='4'>
              <CardSubtitle>Tenant</CardSubtitle>
            </Col>
            <Col sm='8'>
              <CardSubtitle>{this.props.property.fname} {this.props.property.lname}</CardSubtitle>
            </Col>
          </Row>
          <Row style={{paddingBottom: 10}}>
            <Col sm='4'>
              <CardSubtitle>Mortgage: </CardSubtitle>
            </Col>
            <Col sm='8'>
              <CardSubtitle>${this.props.property.mortgage}</CardSubtitle>
            </Col>
          </Row>
          <Row style={{paddingBottom: 10}}>
            <Col sm='4'>
              <CardSubtitle>Property Tax: </CardSubtitle>
            </Col>
            <Col sm='8'>
              <CardSubtitle>${this.props.property.property_tax}</CardSubtitle>
            </Col>
          </Row>
          <Row style={{paddingBottom: 10}}>
            <Col sm='4'>
              <CardSubtitle>Property Tax: </CardSubtitle>
            </Col>
            <Col sm='8'>
              <CardSubtitle>${this.props.property.property_tax}</CardSubtitle>
            </Col>
          </Row>
          <Row style={{paddingBottom: 10}}>
            <Col sm='4'>
              <CardSubtitle>Property Insurance:</CardSubtitle>
            </Col>
            <Col sm='8'>
              <CardSubtitle>${this.props.property.property_insurance}</CardSubtitle>
            </Col>
          </Row>
          <Row style={{paddingBottom: 10}}>
            <Col sm='4'>
              <CardSubtitle>Rent:</CardSubtitle>
            </Col>
            <Col sm='8'>
              <CardSubtitle>${this.props.property.rent_amount}</CardSubtitle>
            </Col>
          </Row>
          <Row style={{paddingBottom: 10}}>
            <Col sm='4'>
              <CardSubtitle>Lease start date:</CardSubtitle>
            </Col>
            <Col sm='8'>
              <CardSubtitle>{this.props.property.lease_start_date}</CardSubtitle>
            </Col>
          </Row>
          <Row style={{paddingBottom: 10}}>
            <Col sm='4'>
              <CardSubtitle>Lease end date: </CardSubtitle>
            </Col>
            <Col sm='8'>
              <CardSubtitle>{this.props.property.lease_end_date}</CardSubtitle>
            </Col>
          </Row>
          <Row style={{paddingBottom: 10}}>
            <Col sm='4'>
             <CardSubtitle>Rent status:</CardSubtitle>
            </Col>
            <Col sm='8'>
              {this.props.property.rent_paid?<CardSubtitle style={{color: 'green' }}>PAID</CardSubtitle> :
              <CardSubtitle style={{color: 'red' }}>UNPAID</CardSubtitle>}
            </Col>
          </Row>
          <Row style={{paddingBottom: 10}}>
            <Col sm='4'>
            <CardSubtitle>Repairs:</CardSubtitle>
            </Col>
            <Col sm='8'>
              {this.props.property.repairs?<CardSubtitle >NONE</CardSubtitle> :
              <CardSubtitle style={{color: 'red' }}>NEEDED</CardSubtitle>}
            </Col>
          </Row>
          <Row style={{paddingBottom: 10}}>
            <Col sm='4'>
            <CardSubtitle>Repair comments: </CardSubtitle>
            </Col>
            <Col sm='8'>
              <CardSubtitle>{this.props.property.repair_description}</CardSubtitle>
            </Col>
          </Row>
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
