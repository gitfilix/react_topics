import React, { Component } from 'react';

class Home extends Component {
  // 1. constructor
  constructor(props) {
    super(props)

    this.state = { name: 'francis'}
    console.log('1 - constructor');
  }

  //2. static getDerivedStateFromProps
  static getDerivedStateFromProps(){
    console.log('2 - getDerivedStateFromProps');
    return null
  }

  render() {
    console.log('3 - render will be executed as 3rd');
    return (
      <div>Home</div>
    )
  }

  componentDidMount() {
    console.log('4 - componentDidMount');
  }

  componentWillUnmount() {
    console.log('5 - only if component will unmount from dom');
  }

}


export default Home;
