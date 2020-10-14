import React from 'react'
import { connect } from 'react-redux'
import { fetchPeel } from '../../actions'

class PeelsShow extends React.Component {
  componentDidMount() {
    this.props.fetchPeel(this.props.match.params.id)
  }

  render(){
    if (!this.props.peel) {
      return <div>Loading...</div>
    }

    const { title, description } = this.props.peel

    return (
      <div>
        <h1>{title}</h1>
        <h5>{description} </h5>
      </div>
    )
  }
};

const mapStateToProps = (state, ownProps) => {
  return { peel: state.peels[ownProps.match.params.id]}
}

export default connect(mapStateToProps,{ fetchPeel }) (PeelsShow);