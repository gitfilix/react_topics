import React, { Component} from 'react';

// clasbased
class Conditional extends Component {

  state = {
    loading : true
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        loading: false
      })
    }, 1200)
  }

  render(){
    if(this.state.loading){
      return(
        <div>hi, its loading</div>
      )
    } else {
      return (
        <div>hi, its rendered</div>
      )
    }
  }


}

export default Conditional;
