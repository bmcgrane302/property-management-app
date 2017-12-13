import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getProperties } from './actions/properties';
import Dashboard from './components/Dashboard';
import SplashPage from './components/SplashPage';
import EditProperty from './components/EditProperty';
import AddPropForm from './components/AddPropForm';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.getProperties()
    console.log('testing');
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
             <Route exact path="/" component={SplashPage} />
             <Route exact path="/dash" component={Dashboard} />
             <Route exact path="/update/:id" component={EditProperty} />
             <Route exact path="/add" component={AddPropForm} />

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
