import React, { Component } from 'react';
import { connect } from 'react-redux';
import NotificationItem from './NotificationItem';
import { Col, Card, CardBody, CardSubtitle, Container } from 'reactstrap';


class Notifications extends Component {

  render () {
    let filterRepairItems= this.props.properties.filter((item)=> item.repairs === true)
    let filterRenewalItems= this.props.properties.filter((item)=> item.renewal_notice === true)

    let repairItems = filterRepairItems.map(repair => {
      return (
        <Col key={repair.id} md={12}>
          <NotificationItem repair={repair} />
        </Col>
      )
    })


    return (
      <Container>
       <Card>
         <CardBody>
           <CardSubtitle>Repairs</CardSubtitle>
         </CardBody>
         <CardBody className="text-left">
           {repairItems}
         </CardBody>
       </Card>
     </Container>
    )
  }
}

function mapStateToProps(state) {
  return {
    properties: state.properties
  }
}

export default connect(mapStateToProps, null) (Notifications);
