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

      <Container>
          <Row>
             <Col sm="10">
               <CardSubtitle >{this.props.property.address}:
                 {this.props.property.rent_paid?<CardText style={{color: 'green' }}>PAID</CardText> :
                 <CardText style={{color: 'red' }}>UNPAID</CardText>}
               </CardSubtitle>
             </Col>
             <Col sm="2">
                {this.props.property.rent_paid?'':<Button
                  onClick={this.handleClick}
                  size="sm"
                  outline
                  color="success">
                  $</Button>}
             </Col>
          </Row>
      </Container>
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
