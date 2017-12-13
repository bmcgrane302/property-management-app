import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, Card, CardBody, CardSubtitle, Row, Col, Container, CardText } from 'reactstrap';
import { rentPaid } from '../actions/properties';


class RentStatus extends Component {

  handleClick = (e) => {
    e.preventDefault()
    this.props.rentPaid(this.props.property.id)

  }

  render () {


    return (

          <Row style={{paddingBottom: 10}}>
             <Col sm="6">
               <CardSubtitle >
                 {this.props.property.address}
               </CardSubtitle>
             </Col>
             <Col sm="3">
               <CardSubtitle >
                 {this.props.property.unit}
               </CardSubtitle>
             </Col>
             <Col sm='3'>
               <a onClick={this.handleClick}>{this.props.property.rent_paid?<CardSubtitle style={{color: 'green' }}>PAID</CardSubtitle> :
               <CardSubtitle style={{color: 'red' }}>UNPAID</CardSubtitle>}</a>
             </Col>
          </Row>
       
    )
  }
}

function mapStateToProps(store, thisComponentsProps){
  return {properties: store.properties}
}

function mapDispatchToProps(dispatch){
   return{
     rentPaid: bindActionCreators(rentPaid, dispatch),

   }
}

export default connect(mapStateToProps, mapDispatchToProps) (RentStatus);
