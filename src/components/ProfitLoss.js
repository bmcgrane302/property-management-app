import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class ProfitLoss extends Component {

  render () {
    let filterMortgage= this.props.properties.reduce((acc,item)=> acc + Number(item.mortgage), 0)
    let filterPropTax= this.props.properties.reduce((acc,item)=> acc + Number(item.property_tax), 0)
    let filterPropInsur= this.props.properties.reduce((acc,item)=> acc + Number(item.property_insurance), 0)
    
    console.log('mortgage', filterMortgage, filterPropTax, filterPropInsur);

    return (
      <div>PNL</div>
    )
  }
}

function mapStateToProps(state) {
  return {
    properties: state.properties
  }
}


export default connect(mapStateToProps, null) (ProfitLoss);
