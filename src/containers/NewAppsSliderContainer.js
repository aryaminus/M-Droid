// import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import NewAppsSlider from '../components/NewAppsSlider';

const mapStateToProps = (state, ownProps) => {
  return {
    // apps: state.applications.apps
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openDetails: app => {
      dispatch({
        type: 'Navigation/NAVIGATE',
        routeName: 'AppDetails',
        params: { app: app }
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewAppsSlider);
