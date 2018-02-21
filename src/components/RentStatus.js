import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, Card, CardBody, CardSubtitle, Row, Col, Container, CardText } from 'reactstrap';
import { rentPaid } from '../actions/properties';


class RentStatus extends Component {

  handleClick = (e) => {
    e.preventDefault()
    let newYtdRent = (Number(this.props.property.rent_amount) + Number(this.props.property.ytd_rent)).toFixed(2)

    let newYtdMortgage = (Number(this.props.property.mortgage) + Number(this.props.property.ytd_mortgage)).toFixed(2)

    let newYtdInsurance = (Number(this.props.property.property_insurance) + Number(this.props.property.ytd_prop_ins)).toFixed(2)

    let newYtdTax = (Number(this.props.property.property_tax) + Number(this.props.property.ytd_prop_tax)).toFixed(2)

    console.log('testing', newYtdTax);

    this.props.rentPaid(this.props.property.id, newYtdRent, newYtdMortgage, newYtdInsurance, newYtdTax)
    }

  render () {


    return (

        <Row style={{marginBottom: 10}}>
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
             {this.props.property.rent_paid?<Button size="sm" outline color="success">paid</Button> :
             <Button onClick={this.handleClick} size="sm" outline color="danger">unpaid</Button>}
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
