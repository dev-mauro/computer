import { useEffect } from "react";
import { useState } from "react";

const ItemCount = ({count, onAdd, onSubstract, onSetValue}) => {

  const [localCount, setLocalCount] = useState(count)
  
  useEffect(() => {
    setLocalCount(count);
  }, [count])
  
  const onInputChange = ({target}) => {
    const { value } = target;
    onSetValue(value);
    setLocalCount(count);
  }

  const onInputClick = ({target}) => {
    target.select();
  }
  

  return (
    <div className="flex w-48">
      <button
        onClick={onSubstract} 
        className="h-9 w-9 px-3 py-1 bg-slate-200 rounded-sm border-b-2 border-gray-400 text-gray-800 hover:bg-slate-100 mr-1 dark:bg-teal-400 dark:text-white dark:border-teal-600"
      > - </button>

      <input
        type="number"
        value={localCount}
        onChange={onInputChange}
        onClick={onInputClick}
        className="outline-none w-28 h-9 rounded-md text-center text-gray-800 border-b-2 border-gray-400 bg-slate-200 hover:shadow-md dark:bg-teal-400 dark:text-white dark:border-teal-600"
      />

      <button
        onClick={onAdd} 
        className="h-9 w-9 px-3 py-1 bg-slate-200 rounded-sm border-b-2 border-gray-400 text-gray-800 hover:bg-slate-100 ml-1 dark:bg-teal-400 dark:text-white dark:border-teal-600"
      > + </button>
    </div>
  )
}

export { ItemCount }