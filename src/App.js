import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
>>>>>>> 80e5ff939f4c6af957f203be5293a1f4bee98d5f
class App extends Component {
  handleOnClick() {
    this.props.dispatch({
      type: "INCREASE_COUNT",
    });
  }

  render() {
    return (
      <div className="App">
        <button onClick={(event) => this.handleOnClick()}>Click</button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { items: state.items };
};


const mapStateToProps = (state) => {
  return { items: state.items };
};

export default connect(mapStateToProps)(App);
