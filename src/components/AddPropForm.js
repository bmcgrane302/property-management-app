import React, { Component } from 'react';
import { addProperty } from '../actions/properties';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class AddPropForm extends Component {
   state = {
         address: '',
         unit: '',
         city: '',
         state: '',
         zipcode: '' ,
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

  render () {

    return (
        <Card>
          <CardBody>
             <Container>
               <Form onSubmit={this.handleSubmit}>
               <Row>
                 <Col sm='10'>
                   <FormGroup>
                     <Input
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
                   <Col>
                     <FormGroup>
                       <Input
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
                          type="text"
                          id="property_tax"
                          onChange={(e)=> this.setState({property_tax: e.target.value})}
                          value={this.state.property_tax}
                          placeholder='property_tax'
                          />
                     </FormGroup>
                   </Col>
                   <Col>
                     <FormGroup>
                       <Input
                          type="text"
                          id="property_insurance"
                          onChange={(e)=> this.setState({property_insurance: e.target.value})}
                          value={this.state.property_insurance}
                          placeholder='property_insurance'
                          />
                     </FormGroup>
                   </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Input
                          type="text"
                          id="rent_amount"
                          onChange={(e)=> this.setState({rent_amount: e.target.value})}
                          value={this.state.rent_amount}
                          placeholder='rent_amount'
                           />
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <Input
                           type="text"
                           id="lease_start_date"
                           onChange={(e)=> this.setState({lease_start_date: e.target.value})}
                           value={this.state.lease_start_date}
                           placeholder='lease_start_date'
                           />
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <Input
                           type="text"
                           id="lease_end_date"
                           onChange={(e)=> this.setState({lease_end_date: e.target.value})}
                           value={this.state.lease_end_date}
                           placeholder='lease_end_date'
                           />
                      </FormGroup>
                    </Col>
                   </Row>
                   <Button type='submit'>Submit</Button>
               </Form>
             </Container>
           </CardBody>
        </Card>

    )
  }
}

function mapDispatchToProps(dispatch) {
    return {
      addProperty: bindActionCreators(addProperty, dispatch)
    }
  }

  export default connect(null, mapDispatchToProps) (AddPropForm);
