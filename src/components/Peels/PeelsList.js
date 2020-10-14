import React from 'react'
import { connect } from 'react-redux';
import { fetchPeels } from '../../actions';
import { Link } from 'react-router-dom';

class PeelsList extends React.Component {
  componentDidMount() {
    this.props.fetchPeels();
  }

  renderAdmin(peel) {
    if (peel.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/peels/edit/${peel.id}`} className="ui button primary" >Edit</Link>
          <Link to={`/peels/delete/${peel.id}`} className="ui button negative">
            Delete
          </Link>
        </div>
      )
    }
  }

  renderList() {
    return this.props.peels.map(peel => {
      return (
        <div className="item" key={peel.id}>
          {this.renderAdmin(peel)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            <Link
              to={`/peels/${peel.id}`}
              className="header"
            >
              {peel.title}
            </Link>
            <div className="description">{peel.description}</div>
          </div>

        </div>
      )
    })
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: 'right ' }} >
          <Link to="/peels/new" className="ui button primary" >
            New Peel
          </Link>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <h2>Peels</h2>
        <div className="ui celled list">{this.renderList()} </div>
        {this.renderCreate()}
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    peels: Object.values(state.peels),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  }
}

export default connect(mapStateToProps, { fetchPeels })(PeelsList);