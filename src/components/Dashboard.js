import React, { Component } from 'react';
import Property from './Property';
import RentStatus from './RentStatus';
import Notifications from './Notifications';

class Dashboard extends Component {
  render () {
    return (
      <div>
        <h2>Dashboard</h2>
        <Property />
        <RentStatus />
        <Notifications />
      </div>
    )
  }
}

export default Dashboard
