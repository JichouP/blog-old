import React, { Component } from 'react';
import { withRouter, RouteComponentProps } from 'react-router';

import Vivus from 'vivus';
import Snap from 'snapsvg';
import logofile from './res/logo.svg';

class Logo extends Component<RouteComponentProps<{}>, any> {
  componentDidMount = () => {
    const logo = document.getElementsByTagName('svg');
    if (logo) {
      while (logo.length) {
        logo[0].remove();
      }
    }
    new Vivus(
      'logodiv',
      {
        file: logofile,
        delay: 100,
      },
      () => {
        Snap('#svg8')
          .selectAll('path')
          .animate({ fillOpacity: 1 }, 400);
      }
    );
  };
  render() {
    return (
      <div
        id="logodiv"
        onClick={() => {
          this.props.history.push('/');
        }}
      />
    );
  }
}

export default withRouter(Logo);
