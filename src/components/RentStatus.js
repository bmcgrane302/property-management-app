import React, { Component } from 'react';
import { Col, Card, CardBody, CardSubtitle, Container } from 'reactstrap';


class RentStatus extends Component {
  render () {
    return (
      <div>
        <Container>
         <Card>
           <CardBody>
             <CardSubtitle>Repairs</CardSubtitle>
           </CardBody>
           <CardBody className="text-left">

           </CardBody>
         </Card>
         <Card>
           <CardBody>
             <CardSubtitle>Renewal Notices</CardSubtitle>
           </CardBody>
           <CardBody className="text-left">

           </CardBody>
         </Card>
       </Container>
      </div>
    )
  }
}

export default RentStatus
