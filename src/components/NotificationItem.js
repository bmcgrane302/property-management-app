import React, { Component } from 'react';
import { Button, Card, CardBody, CardSubtitle, Row, Col, Container } from 'reactstrap';


class NotificationItem extends Component {

  render () {

    return (

      <Container>

          <Row>

             <Col sm="9">
               <CardSubtitle >{this.props.repair.address}</CardSubtitle>
               <CardSubtitle>{this.props.repair.repair_description}</CardSubtitle>
             </Col>

             <Col sm="3">
               <Button size="sm" outline color="success">complete</Button>
             </Col>

          </Row>

      </Container>
    )
  }
}

export default NotificationItem
