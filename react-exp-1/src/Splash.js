import React, { Component } from 'react';
import './Splash.css';

/* So now you can see the beautiful thing about react is that
you develop everything in MODULES. This means you can swap components
in and out easily, and edit them as well! This is the modularity
that Sathish adulated. */

/* can use css to style the elements below */
class Splash extends Component {
  render() {
    return (
      <div className="splash">
        <h1>親愛的加油喔 &nbsp;!</h1>
        <h1>:-)</h1>
      </div>
    );
  }
}

export default Splash;
