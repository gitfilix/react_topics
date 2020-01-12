import React,  {useEffect, useState } from 'react';
import { useForm } from './useForm';
import Hello from './Hello';
import useFetch from './useFetch'

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

    // showHello state
    const [showHello, setShowHello] = useState(false);

    //counter - starting with 0
    const [count, setCount] = useState(0);

    // useFetch
    const {data, loading} = useFetch(`http://numbersapi.com/${count}/trivia`)

  return(
    <div>
    <div>{loading ? "loading...." : data}</div>
    <div>count: {count}</div>
    <button onClick={()=> setCount(c => c + 1)}>increment</button>
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
