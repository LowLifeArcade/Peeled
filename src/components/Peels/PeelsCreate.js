import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createPeel } from '../../actions'


class PeelsCreate extends React.Component {
  renderError({ error, touched }) {
    if(touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className=`field ${meta.error && meta.touched ? 'error': ''}`
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    )
  }

  // use this to send to API for autonaming idea
  onSubmit = (formValues) => {
    this.props.createPeel(formValues);
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error" >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <br />
        <Field name="description" component={this.renderInput} label="Enter Description" />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
};

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'Please enter a title'
  }

  if (!formValues.description) {
    errors.description = 'Please enter description'
  }

  return errors;
}

const formWrapped = reduxForm({
  form: 'peelsCreate',
  validate
})(PeelsCreate);

export default connect(null, { createPeel })(formWrapped);