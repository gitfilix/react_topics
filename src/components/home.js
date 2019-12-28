import React, { Component } from 'react';

class Home extends Component {
  // 1. constructor
  constructor(props) {
    super(props)

    this.state = { name: 'Francis'}
    // console.log('1 - constructor');
  }

  //2. static getDerivedStateFromProps
  static getDerivedStateFromProps(props, state){
    console.log('2 - getDerivedStateFromProps');
    if(state.name === 'Ron'){
      return {
        name: 'Milhouse'
      }

    }
    return null
  }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log('shouldComponentUpdate nextProps:', nextProps);
    // console.log('shouldComponentUpdate nextState:', nextState);
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate nextState:', prevState);
    return null
  }

  render() {
    // console.log('3 - render will be executed as 3rd');
    return (
      <div onClick={() => this.setState({name: 'Francis Junior'})}>Home - clickme</div>
    )
  }

  componentDidMount() {
    // console.log('4 - componentDidMount');
  }

  componentWillUnmount() {
    console.log('5 - only if component will unmount from dom');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('x - componentDidUpdate');
    console.log('componentDidUpdate prevState', prevState);
    console.log('componentDidUpdate new state', this.state);
  }

}


export default Home;
