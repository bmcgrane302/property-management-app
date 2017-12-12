import React, { Component } from 'react';
import { connect } from 'react-redux';
import NotificationItem from './NotificationItem';
import RenewalItem from './RenewalItem';
import RentStatus from './RentStatus';
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

    let renewalItems = filterRenewalItems.map(renewal => {
      return (
        <Col key={renewal.id} md={12}>
          <RenewalItem renewal={renewal} />
        </Col>
      )
    })

    return (
      <Container>
        <Card>
          <CardBody>
            <CardSubtitle>Rent status</CardSubtitle>
          </CardBody>
          <CardBody className="text-left">

          </CardBody>
        </Card>
       <Card>
         <CardBody>
           <CardSubtitle>Repairs</CardSubtitle>
         </CardBody>
         <CardBody className="text-left">
           {repairItems}
         </CardBody>
       </Card>
       <Card>
         <CardBody>
           <CardSubtitle>Renewal Notices</CardSubtitle>
         </CardBody>
         <CardBody className="text-left">
           {renewalItems}
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
