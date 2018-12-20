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
      'logowrapper',
      {
        file: logofile,
        delay: 100,
        onReady: () => {
          document.getElementById('svg8').onclick = () => {
            this.props.history.push('/');
          };
        },
      },
      () => {
        Snap('#svg8')
          .selectAll('path')
          .animate({ fillOpacity: 1 }, 400);
      }
    );
  };
  render() {
    return <div id="logowrapper" />;
  }
}

export default withRouter(Logo);
