import { useState } from "react"

const useForm = (initialState = {}) => {

  const [formState, setFormState] = useState(initialState);

  const onInputChange = ({target}) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  }

  const onInputReset = () => {
    setFormState( initialState );
  }

  return {
    formState,
    onInputChange,
    onInputReset,
    ...formState,
  }
}

export { useForm }