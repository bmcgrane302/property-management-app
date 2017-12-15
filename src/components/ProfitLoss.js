import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Form, FormGroup, Label, Input, FormText, Table } from 'reactstrap';

class ProfitLoss extends Component {

  render () {
    let filterYtdMortgage= this.props.properties.reduce((acc,item)=> acc + Number(item.ytd_mortgage), 0)
    let filterYtdPropTax= this.props.properties.reduce((acc,item)=> acc + Number(item.ytd_prop_tax), 0)
    let filterYtdPropInsur= this.props.properties.reduce((acc,item)=> acc + Number(item.ytd_prop_ins), 0)
    let filterYtdRent= this.props.properties.reduce((acc,item)=> acc + Number(item.ytd_rent), 0)
    let filterYtdRepairs= this.props.properties.reduce((acc,item)=> acc + Number(item.ytd_repairs), 0)
    let totalRev = filterYtdRent-filterYtdMortgage-filterYtdPropTax-filterYtdPropInsur-filterYtdRepairs;

    console.log('all totals', filterYtdMortgage, filterYtdPropTax, filterYtdPropTax, filterYtdRent, filterYtdRepairs);
    console.log('mortgage totalRev', totalRev);

    return (
      <div>
        <div className='pnlPage'>
        <Table  className='shadow' hover  style={{backgroundColor: 'white'}}>
          <thead style= {{backgroundColor: '#515960', color: 'white'}}>
            <tr>
              <th>Year To Date</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody >
            <tr>
              <td>Mortgage</td>
              <td style={{color: 'red' }}>${filterYtdMortgage.toFixed(2)}</td>
            </tr>
            <tr>
              <td>Property Tax</td>
              <td style={{color: 'red' }}>${filterYtdPropTax.toFixed(2)}</td>
            </tr>
            <tr>
              <td>Property Insurance</td>
              <td style={{color: 'red' }}>${filterYtdPropInsur.toFixed(2)}</td>
            </tr>
            <tr>
              <td>Rent</td>
              <td style={{color: 'green' }}>${filterYtdRent.toFixed(2)}</td>
            </tr>
            <tr>
              <td >Repairs</td>
              <td style={{color: 'red' }}>${filterYtdRepairs.toFixed(2)}</td>
            </tr>
            <tr>
              <td>Total Profit</td>
              <td style={{color: 'green' }}>${totalRev.toFixed(2)}</td>
            </tr>
          </tbody>
        </Table>
        <Row>
          <Col>
            <Button
              href='./dash'
              style={{backgroundColor: 'white'}}
              size="sm"
              outline
              color="primary"
              >Dashboard
            </Button>
          </Col>
        </Row>
      </div>

   </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    properties: state.properties
  }
}


export default connect(mapStateToProps, null) (ProfitLoss);
