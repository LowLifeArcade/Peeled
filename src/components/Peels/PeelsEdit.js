import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchPeel, editPeel } from '../../actions'
import PeelsForm from './PeelsForm'

class PeelsEdit extends React.Component {
  componentDidMount() {
    this.props.fetchPeel(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editPeel(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.peel) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <h3>Edit a Peel</h3>
        <PeelsForm
          // grey them out and delete when clicking in field
          initialValues={_.pick(this.props.peel, 'title', 'description')}
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
};

const mapStateToProps = (state, ownProps) => {
  return { peel: state.peels[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPeel, editPeel })(PeelsEdit);