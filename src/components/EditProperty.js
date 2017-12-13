import React, { Component } from 'react';
import { editProperty } from '../actions/properties';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';



class EditProperty extends Component {


   editProperty = (values) => {
    console.log('form values', values)
    this.props.editProperty(values);
  }



  render () {
    const { handleSubmit } = this.props
    console.log('props in edit', this.props);

    return (
        <Card>
          <CardBody>

            <form onSubmit={handleSubmit(this.editProperty)}>
               <div>
                 <label htmlFor="address">Address</label>
                 <Field name="address" component="input" type="text" />
               </div>
               <div>
                 <label htmlFor="unit">Unit</label>
                 <Field name="unit" component="input" type="text" />
               </div>
               <div>
                 <label htmlFor="city">City</label>
                 <Field name="city" component="input" type="text" />
               </div>
               <div>
                 <label htmlFor="state">State</label>
                 <Field name="state" component="input" type="text" />
               </div>
               <button type="submit">Submit</button>
             </form>
           </CardBody>
        </Card>

    )
  }
}

EditProperty = reduxForm({
  // a unique name for the form
  form: 'property_edit'
})(EditProperty)

function mapStateToProps(state, props) {
  //console.log('statetetetetetetet', state.properties[0]);
   return {
     initialValues: state.properties.filter(property => property.id == props.match.params.id)[0]
   }
}

function mapDispatchToProps(dispatch) {
    return {

       editProperty: bindActionCreators(editProperty, dispatch)
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps) (EditProperty);
