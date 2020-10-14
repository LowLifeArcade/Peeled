import React from 'react'
import { connect } from 'react-redux'
import Modal from '../Modal'
import history from '../../history'
import { fetchPeel, deletePeel } from '../../actions'
import { Link } from 'react-router-dom'

class PeelsDelete extends React.Component {
  componentDidMount() {
    this.props.fetchPeel(this.props.match.params.id)
  }

  renderActions() {
    const { id } = this.props.match.params
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deletePeel(id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui button">Cancel</Link>
      </React.Fragment>
    )
  }

  renderContent() {
    if (!this.props.peel) {
      return 'Are you sure you want to delete?'
    }

    return `Are you sure you want to delete: ${this.props.peel.title}`
  }

  render() {
    return (
      <Modal
        title="Delete Peel"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    )
  }
};

const mapStateToProps = (state, ownProps) => {
  return { peel: state.peels[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchPeel, deletePeel })(PeelsDelete);