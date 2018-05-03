import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
        <p>+{this.props.likes} -{this.props.dislikes}</p>

        <button onClick={this.props.like}>+</button>
        <button onClick={this.props.dislike}>-</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  likes: state.get('likes'),
  dislikes: state.get('dislikes'),
});

const mapDispatchToProps = (dispatch) => ({
  like: () => dispatch({ type: 'ADD_LIKE' }),
  dislike: () => dispatch({ type: 'ADD_DISLIKE' }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
