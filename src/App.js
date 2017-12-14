import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getProperties } from './actions/properties';
import Dashboard from './components/Dashboard';
import SplashPage from './components/SplashPage';
import EditProperty from './components/EditProperty';
import AddPropForm from './components/AddPropForm';
import ProfitLoss from './components/ProfitLoss';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.getProperties()

  }

  render() {
    return (
      <div className="App" >
        <Router>
          <Switch>
             <Route exact path="/" component={SplashPage} />
             <Route exact path="/dash" component={Dashboard} />
             <Route exact path="/update/:id" component={EditProperty} />
             <Route exact path="/add" component={AddPropForm} />
             <Route exact path="/pnl" component={ProfitLoss} />

          </Switch>
        </Router>

      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getProperties: bindActionCreators(getProperties, dispatch)
  }
}

export default connect(null, mapDispatchToProps) (App);
