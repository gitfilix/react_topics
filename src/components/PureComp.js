import React, { PureComponent} from 'react';

// PURE Component is also a classbased components
// it will only render if the state or props had changed

class PureComp extends PureComponent {
  state = {
    name: 'Francis'
  }


  // whithout PureComponent you can do the same with shouldComponentUpdate:

  // shouldComponentUpdate(nextProps, nextState) {
  //   if(nextState.name === this.state.name) {
  //     return false
  //   } else {
  //     return true
  //   }
  // }

  render() {
    console.log('rendered');
    return (
      <>
        <h4>{this.state.name}</h4>
        <button
          onClick= {()=> this.setState({name: 'Filix'})}
          >click to change name</button>
      </>
    )
  }
}

export default PureComp;
