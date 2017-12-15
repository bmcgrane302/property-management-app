import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, Card, CardBody, CardSubtitle, Row, Col, Container } from 'reactstrap';
import { renewalRemoved } from '../actions/properties';


class RenewalItem extends Component {

  handleClick = (e) => {
    e.preventDefault()
    this.props.renewalRemoved(this.props.renewal.id)
  }

  render () {

    return (

          <Row style={{marginBottom: 10}}>
             <Col sm="9">
               <CardSubtitle >{this.props.renewal.address}</CardSubtitle>
             </Col>
             <Col sm="3">
               <Button
                 onClick={this.handleClick}
                 size="sm"
                 outline
                 color="success">
                 send</Button>
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
    renewalRemoved: bindActionCreators(renewalRemoved, dispatch),

   }
}

export default connect(mapStateToProps, mapDispatchToProps) (RenewalItem);
