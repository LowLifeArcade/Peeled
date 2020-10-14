import React from 'react';
import { connect } from 'react-redux';
import { createPeel } from '../../actions'
import PeelsForm from './PeelsForm'

class PeelsCreate extends React.Component {
  // use this to send to API for autonaming idea
  onSubmit = (formValues) => {
    this.props.createPeel(formValues);
  }

  render() {
    return (
      <div>
        <h3>Create a Peel</h3>
        <PeelsForm onSubmit={this.onSubmit} />
      </div>
    );
  }
};

export default connect(null, { createPeel })(PeelsCreate);