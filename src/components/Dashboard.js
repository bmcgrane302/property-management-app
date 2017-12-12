import React, { Component } from 'react';
import { connect } from 'react-redux';
import Property from './Property';
import RentStatus from './RentStatus';
import Notifications from './Notifications';
import TopNav from './TopNav';
import AddPropForm from './AddPropForm';
import { Container, Row, Col, InputGroup, Input, Button } from 'reactstrap';



class Dashboard extends Component {



  render () {
     console.log('state', this.props.properties);

     let propertyList = this.props.properties.sort((a,b)=> a.id-b.id).map(property => {
       return (
         <Col key={property.id} md={12}>
          <Property property={property} />
        </Col>
       )
     })

    return (
      <div>
        <TopNav />
        <Row>
          <Col sm='8'>
             {propertyList}
          </Col>
          <Col sm='4'>
            <Notifications />
          </Col>
        </Row>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    properties: state.properties
  }
}


export default connect(mapStateToProps, null) (Dashboard);
