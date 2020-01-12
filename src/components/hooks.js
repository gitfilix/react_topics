import React,  {useEffect, useState } from 'react';
import { useForm } from './useForm';
import Hello from './Hello';

const Hooks = () => {
  const [values, handleChange] = useForm({
      email: 'email',
      password: 'secret'
    })

    useEffect(() => {
      console.log('render ');

      //cleanup
      return () => {
        console.log('unmount useEffect');
      }
    }, [values.email])

    const [showHello, setShowHello] = useState(false);

  return(
    <div>
      <>
        <h2>hooks Form</h2>
        <button onClick={() => setShowHello(!showHello)}>toggle Hello </button>
        {showHello && <Hello />}
        <input name="email" value={values.email} onChange={handleChange} />
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
      </>
    </div>
  )
}

export default Hooks;
