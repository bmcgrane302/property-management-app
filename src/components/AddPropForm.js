import React, { Component } from 'react';
import { addProperty } from '../actions/properties';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';



class AddPropForm extends Component {
   state = {
         address: '',
         unit: '',
         city: '',
         state: '',
         zipcode: '' ,
         fname: '',
         lname: '',
         mortgage: '',
         property_tax: '',
         property_insurance: '',
         rent_amount: '',
         lease_start_date: '',
         lease_end_date: '',
         rent_paid: true,
         renewal_notice: false,
         repairs: false,
         repair_description:'none',
   }

   handleSubmit = (e) => {
     console.log('button working');
     e.preventDefault()
     this.props.addProperty(this.state)
     this.props.history.push('/dash');
   }

  render () {

    return (

<div>
  <Container >
    <Card className='shadow'
       style={{marginTop: 100, padding: 20, borderColor: '#515960', backgroundColor: '#515960' }}>
      <CardBody>
         <Form onSubmit={this.handleSubmit}>
         <Row>
           <Col sm='10'>
             <FormGroup>
               <Input
                 style={{borderColor: '#515960'}}
                 type="text"
                 id="address"
                 onChange={(e)=> this.setState({address: e.target.value})}
                 value={this.state.address}
                 placeholder='address'
                  />
             </FormGroup>
           </Col>
           <Col sm='2'>
             <FormGroup>
               <Input
                  style={{borderColor: '#515960'}}
                  type="text"
                  id="unit"
                  onChange={(e)=> this.setState({unit: e.target.value})}
                  value={this.state.unit}
                  placeholder='unit'
                  />
             </FormGroup>
           </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Input
                  style={{borderColor: '#515960'}}
                  type="text"
                  id="city"
                  onChange={(e)=> this.setState({city: e.target.value})}
                  value={this.state.city}
                  placeholder='city'
                   />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Input
                   style={{borderColor: '#515960'}}
                   type="text"
                   id="state"
                   onChange={(e)=> this.setState({state: e.target.value})}
                   value={this.state.state}
                   placeholder='state'
                   />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Input
                   style={{borderColor: '#515960'}}
                   type="text"
                   id="zipcode"
                   onChange={(e)=> this.setState({zipcode: e.target.value})}
                   value={this.state.zipcode}
                   placeholder='zipcode'
                   />
              </FormGroup>
            </Col>
           </Row>
           <Row>
             <Col sm='6'>
               <FormGroup>
                 <Input
                   style={{borderColor: '#515960'}}
                   type="text"
                   id="fname"
                   onChange={(e)=> this.setState({fname: e.target.value})}
                   value={this.state.fname}
                   placeholder='first name'
                    />
               </FormGroup>
             </Col>
             <Col sm='6'>
               <FormGroup>
                 <Input
                    style={{borderColor: '#515960'}}
                    type="text"
                    id="lname"
                    onChange={(e)=> this.setState({lname: e.target.value})}
                    value={this.state.lname}
                    placeholder='last name'
                    />
               </FormGroup>
             </Col>
            </Row>
           <Row>
             <Col>
               <FormGroup>
                 <Input
                   style={{borderColor: '#515960'}}
                   type="text"
                   id="mortgage"
                   onChange={(e)=> this.setState({mortgage: e.target.value})}
                   value={this.state.mortgage}
                   placeholder='mortgage'
                    />
               </FormGroup>
             </Col>
             <Col>
               <FormGroup>
                 <Input
                    style={{borderColor: '#515960'}}
                    type="text"
                    id="property_tax"
                    onChange={(e)=> this.setState({property_tax: e.target.value})}
                    value={this.state.property_tax}
                    placeholder='property tax'
                    />
               </FormGroup>
             </Col>
             <Col>
               <FormGroup>
                 <Input
                    style={{borderColor: '#515960'}}
                    type="text"
                    id="property_insurance"
                    onChange={(e)=> this.setState({property_insurance: e.target.value})}
                    value={this.state.property_insurance}
                    placeholder='property insurance'
                    />
               </FormGroup>
             </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <Input
                    style={{borderColor: '#515960'}}
                    type="text"
                    id="rent_amount"
                    onChange={(e)=> this.setState({rent_amount: e.target.value})}
                    value={this.state.rent_amount}
                    placeholder='rent amount'
                     />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                <Input
                   style={{borderColor: '#515960'}}
                   type="date"
                   id="lease_start_date"
                   onChange={(e)=> this.setState({lease_start_date: e.target.value})}
                   value={this.state.lease_start_date}
                   placeholder='lease start date'
                   />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Input
                     style={{borderColor: '#515960'}}
                     type="date"
                     id="lease_end_date"
                     onChange={(e)=> this.setState({lease_end_date: e.target.value})}
                     value={this.state.lease_end_date}
                     placeholder='lease end date'
                     />
                </FormGroup>
              </Col>
             </Row>
             <Row>
              <Col>
               <Button
                style={{backgroundColor: 'white'}}
                outline color="success" type='submit'>Submit</Button>
              </Col>
              <Col>
                <Button
                  style={{backgroundColor: 'white'}}
                  outline color="primary" href='./dash'>Dashboard</Button>
              </Col>
             </Row>
         </Form>
      </CardBody>
     </Card>
   </Container>
</div>
    )
  }
}

function mapDispatchToProps(dispatch) {
    return {
      addProperty: bindActionCreators(addProperty, dispatch)
    }
  }

  export default connect(null, mapDispatchToProps) (AddPropForm);
