import React, { Component } from 'react';
import { connect } from 'react-redux';
import NotificationItem from './NotificationItem';
import RenewalItem from './RenewalItem';
import RentStatus from './RentStatus';
import { Col, Card, CardBody, CardSubtitle, Container, CardTitle }
from 'reactstrap';


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

    let propList = this.props.properties.sort((a,b)=> a.paid-b.paid).map(property => {
      return (
        <Col key={property.id} md={12}>
         <RentStatus property={property} />
       </Col>
      )
    })
    console.log('prop list', propList);

    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle>Rent status</CardTitle>
          </CardBody>
          <CardBody className="text-left">
            {propList}
          </CardBody>
        </Card>
       <Card>
         <CardBody>
           <CardTitle>Repairs</CardTitle>
         </CardBody>
         <CardBody className="text-left">
           {repairItems}
         </CardBody>
       </Card>
       <Card>
         <CardBody>
           <CardTitle>Renewal Notices</CardTitle>
         </CardBody>
         <CardBody className="text-left">
           {renewalItems}
         </CardBody>
       </Card>
     </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    properties: state.properties
  }
}

export default connect(mapStateToProps, null) (Notifications);
