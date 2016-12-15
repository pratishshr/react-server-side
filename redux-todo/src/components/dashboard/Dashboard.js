/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/28/16.
 */

import React, {Component} from 'react';
import {Link} from 'react-router';

class Dashboard extends Component {
  render() {
    return (
      <div className="jumbotron ">
        <h2>Helo! Are you learning React?</h2>
        <p>Well, this is a simple CRUD application that covers the basics of a react application.</p>
        <p>It is made using plain React, without Redux (I'll make one later, maybe :P).</p>
        <p className="text-left">
          <p><b>Things you will see: </b></p>
          <ul>
              <li>All of the CRUD operations</li>
              <li>Routing with 'React-Router'</li>
              <li>Http calls with 'Axios'</li>
              <li>Throwing a spinner while fetching data</li>
              <li>Using forms and making controlled components</li>
              <li>And more...</li>
            </ul>
        </p>
        <div className="clearfix"></div>
        <p>
          <a href="/todos" className="btn btn-default btn-lg" role="button">
            <i className="fa fa-github" aria-hidden="true"></i>
            <span>{' '}GitHub</span>
          </a>
          <Link to="/todos" className="btn btn-primary btn-lg" role="button">Go to App</Link>
        </p>
      </div>
    )
  }
}

export default Dashboard;