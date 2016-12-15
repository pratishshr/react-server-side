/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/28/16.
 */

import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import toastr from 'toastr';

// Utils
import {httpUtil} from '../../utils';

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      todo: {
        title: '',
        description: '',
        isComplete: false
      },
      isSubmittingTodo: false,
      isFetchingTodo: false
    };
    this.submitForm = this.submitForm.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
  }

  componentDidMount() {
    let props = this.props;

    // Fetch data if on Edit page
    if (props.params.todoId) {
      this.setState({isFetchingTodo: true});
      httpUtil.get(`todos/${props.params.todoId}`).then((response) => {
        let data = response.data.data;
        this.setState({
          todo: {
            title: data.title,
            description: data.description || '',
            isComplete: data.isComplete
          },
          isFetchingTodo: false
        });
      }).catch((err) => {
        this.setState({isFetchingTodo: false});
        toastr.error(err.message)
      });
    }
  }

  goToListing() {
    browserHistory.push('/todos');
  }

  submitForm(e) {
    e.preventDefault();
    this.setState({isSubmittingTodo: true});
    let props = this.props;
    let title = this.refs.title.value;
    let description = this.refs.description.value;

    // Perform Create or Update operations according to the presence of id
    if (!props.params.todoId) {
      httpUtil.post('todos', {
        title: title,
        description: description,
        isComplete: this.state.todo.isComplete
      }).then((response) => {
        this.setState({isSubmittingTodo: false});
        this.goToListing();
        toastr.success(`Added '${title}'`)
      }).catch((err) => {
        this.setState({isSubmittingTodo: false});
        toastr.error(err.message)
      });
    } else {
      httpUtil.put('todos', props.params.todoId, {
        title: title,
        description: description,
        isComplete: this.state.todo.isComplete
      }).then((response) => {
        this.setState({isSubmittingTodo: false});
        this.goToListing();
        toastr.success(`Updated '${title}'`);
      }).catch((err) => {
        this.setState({isSubmittingTodo: false});
        toastr.error(err.message)
      });
    }
  }

  handleInputChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.state.todo[name] = value;
    this.setState({todo: this.state.todo});
  }

  handleCheckBoxChange(e) {
    let name = e.target.name;
    this.state.todo[name] = !this.state.todo[name];
    this.setState({todo: this.state.todo});
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <h1>{this.props.params.todoId ? 'Update' : 'Add'} Todo</h1>
        </div>
        
        {/* Disable form when a request is being performed */}
        <fieldset disabled={this.state.isSubmittingTodo || this.state.isFetchingTodo}>
          <form onSubmit={this.submitForm}>
            <div className="form-group">
              <label>Title</label>
              <input ref="title"
                     name="title"
                     type="text"
                     className="form-control"
                     placeholder="Title"
                     value={this.state.todo.title}
                     onChange={this.handleInputChange}/>
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea ref="description"
                        name="description"
                        className="form-control"
                        placeholder="description"
                        value={this.state.todo.description}
                        onChange={this.handleInputChange}/>
            </div>
            <div className="form-group">
              <label>Done?</label>
              <div className="form-group">
                <div className="radio-inline">
                  <input type="radio"
                         name="isComplete"
                         checked={this.state.todo.isComplete}
                         onChange={this.handleCheckBoxChange}/> Yes
                </div>
                <div className="radio-inline">
                  <input type="radio"
                         name="isComplete"
                         checked={!this.state.todo.isComplete}
                         onChange={this.handleCheckBoxChange}/> No
                </div>
              </div>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-success pull-left">Save</button>
              <button onClick={this.goToListing} type="button" className="btn btn-danger pull-left">Cancel</button>

              {/* Show a spinner when the form is submitting */}
              {this.state.isSubmittingTodo ? <div className="spinner pull-left"></div> : null}
            </div>
          </form>
        </fieldset>
      </div>
    )
  }
}

export default TodoForm;
