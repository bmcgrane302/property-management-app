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

      <Container>

          <Row>
             <Col sm="9">
               <CardSubtitle >{this.props.repair.address}</CardSubtitle>
                <CardText>{this.props.repair.repair_description}</CardText>
             </Col>
             <Col sm="3">
               <Button
                 onClick={this.handleClick}
                 size="sm"
                 outline
                 color="success">
                 complete</Button>
             </Col>
          </Row>
           
      </Container>
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
