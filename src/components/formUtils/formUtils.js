import { useState } from "react";
export const useForm = () => {

  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    date: "",
    errors: false,
  });

  const { name, email, password, date } = state;

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value,isChecked } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,isChecked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = !name || !email || !password;
    setState((prevState) => ({
      ...prevState,
      errors,
    }));
    if (!errors) {
      console.log({ name, email, password, date });
    }
  };

  return { state, handleChange, handleSubmit };
};
