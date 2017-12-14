import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, Card, CardBody, CardSubtitle, Row, Col, Container, CardText } from 'reactstrap';
import { repairComplete } from '../actions/properties';


class NotificationItem extends Component {

  handleClick = (e) => {
    e.preventDefault()
    this.props.repairComplete(this.props.repair.id)
  }

  render () {

    return (

     <div style={{marginBottom: 10}}>
       <Row >
          <Col sm="8">
            <CardSubtitle >{this.props.repair.address}</CardSubtitle>
          </Col>
          <Col sm="4">
            <Button
              onClick={this.handleClick}
              size="sm"
              outline
              color="success">
              completed</Button>
          </Col>
       </Row>
       <Row >
          <Col>
           <CardSubtitle>{this.props.repair.repair_description}</CardSubtitle>
          </Col>
       </Row>
     </div>


    )
  }
}

function mapStateToProps(store, thisComponentsProps){
  console.log('comment props in notitem', store);
  return {properties: store.properties}
}

function mapDispatchToProps(dispatch){
   return{
     repairComplete: bindActionCreators(repairComplete, dispatch),

   }
}

export default connect(mapStateToProps, mapDispatchToProps) (NotificationItem);
