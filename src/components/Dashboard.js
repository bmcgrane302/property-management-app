import React, { Component } from 'react';
import { connect } from 'react-redux';
import Property from './Property';
import RentStatus from './RentStatus';
import Notifications from './Notifications';
import TopNav from './TopNav';
import AddPropForm from './AddPropForm';
import { Container, Row, Col, InputGroup, Input, Button } from 'reactstrap';



class Dashboard extends Component {
  state = {
    showAddForm: false
  }


  render () {
     console.log('state', this.props.properties);

     let propertyList = this.props.properties.sort((a,b)=> b.id-a.id).map(property => {
       return (
         <Col key={property.id} md={12}>
          <Property property={property} />
        </Col>
       )
     })

    return (
      <div>
        <TopNav />
          <Button onClick={()=> this.setState({showAddForm: !this.state.showAddForm})}>
                Add Property
          </Button>
          {this.state.showAddForm?<AddPropForm />: null}
        <Row>
          <Col sm='8'>
             {propertyList}
          </Col>
          <Col sm='4'>
            <RentStatus />
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
