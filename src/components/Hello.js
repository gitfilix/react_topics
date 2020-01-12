import React from 'react';

export const Hello = () => {
  React.useEffect(()=> {
    console.log('render hello');

    return () => {
      console.log('umount hello component');
    }
  }, [])


  return (
    <h3>Hello There!</h3>
  )
}

export default Hello
