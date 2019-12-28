import React from 'react';


const Conditional = () => {

  const returnValue = () => {
    return false
  }

  const showIt = () => {
    return (
      returnValue() ?
      <div>
      <p>Conditional is true</p>
      </div>
      :
      <div>
      <p>Conditional is false</p>
      </div>
    )
  }

    return(
    <div>
    {showIt()}
    </div>
    )
}

export default Conditional;
