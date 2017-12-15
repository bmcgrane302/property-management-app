import React, { Component } from 'react';
import { connect } from 'react-redux';
import Property from './Property';
import RentStatus from './RentStatus';
import Notifications from './Notifications';
import TopNav from './TopNav';
import AddPropForm from './AddPropForm';
import BottomNav from './BottomNav';
import { Container, Row, Col, InputGroup, Input, Button, Card } from 'reactstrap';



class Dashboard extends Component {
  state = {
    filterTitle: ''
  }

  handleChange = (e) => {
    this.setState({filterTitle: e.target.value})
  }



  render () {
    let filterList = this.state.filterTitle !== ''?this.props.properties.filter((item)=> item.address.startsWith(this.state.filterTitle)):this.props.properties;
     console.log('filter', filterList);

     let propertyList = filterList.sort((a,b)=> a.id-b.id).map(property => {
       return (

           <Col key={property.id} md={12}>
            <Property property={property}/>
            <Button className='shadow'
              style= {{backgroundColor: '#515960', color: 'white'}}
              size="sm" block
              onClick={() => this.props.history.push('/update/' + property.id)}
              >EDIT</Button>
           </Col>

       )
     })

    return (
      <div className='dashboard'>
      <Container>
        <TopNav />
        <Row>
          <Col sm='7'>
            <Container>
              <InputGroup >
                <Input className='shadow'
                  style={{borderColor: '#515960'}}
                  onChange={this.handleChange} type="search"
                  placeholder="search for property" />
              </InputGroup>
            </Container >
             {propertyList}
          </Col>
          <Col sm='5'>
            <Notifications />
          </Col>
        </Row>
        <BottomNav />
      </Container>
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
