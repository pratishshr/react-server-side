/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/28/16.
 */

import React, {Component} from 'react';

class Todo extends Component {
  render() {
    return (
      <div className="col-md-6 col-md-offset-3">
        {/* These children now represents the routes inside of the /todos route */}
          {this.props.children}
      </div>
    )
  }
}

export default Todo;