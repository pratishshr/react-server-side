/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/28/16.
 */

import React, {Component} from  'react';
import {Link} from 'react-router';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="/" className="navbar-brand">Simple-React-Todo</Link>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><a href="#"></a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header;