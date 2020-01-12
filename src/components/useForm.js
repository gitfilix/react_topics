import { useState } from "react";

export const useForm = initialValues => {
  const [values, setValues] = useState(initialValues);
  // console.log('values:', values);
  return [
    values,
    e => {
      setValues({
        ...values,
        [e.target.name]: e.target.value
      });
    }
  ];
};
