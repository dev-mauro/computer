import { useState } from 'react';

const useCounter = ({initialValue = 1, minValue, maxValue}) => {

  const [count, setCount] = useState(initialValue)

  const changeState = (newState) => {
    if(newState > maxValue)
      newState = maxValue;

    else if(newState < minValue)
      newState = minValue;

    setCount(newState);
  }

  const onAdd = () => {
    changeState(count + 1);
  }

  const onSubstract = () => {
    changeState(count - 1);
  }

  const onSetValue = (newValue) => {
    changeState(Number(newValue));
  }

  return {
    count,
    onAdd,
    onSubstract,
    onSetValue,
  }
}

export { useCounter }