import { useSelector, useDispatch } from 'react-redux'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'

import { toggleDarkMode } from '../../store/darkModeSlice';


const ToggleDarkMode = () => {

  const { darkMode } = useSelector( state => state.darkMode);
  const dispatch = useDispatch();

  return (
    <fieldset
      className="flex justify-center items-center space-x-2 divide-teal-600"
    >
      <input
        type="radio"
        name="darkmode"
        onChange={() => dispatch(toggleDarkMode())}
        checked={!darkMode}
        className="appearance-none w-3 h-3 rounded-full ring-2 ring-offset-2 ring-teal-500 checked:bg-teal-400 ring-offset-gray-200 dark:ring-offset-gray-800 cursor-pointer"
        />

      <SunIcon className="w-6 h-6 text-teal-600" />
      <MoonIcon className="w-5 h-5 text-teal-600 mr-2" />

      <input
        type="radio"
        name="darkmode"
        onChange={() => dispatch(toggleDarkMode())}
        checked={darkMode}
        className="appearance-none w-3 h-3 rounded-full ring-2 ring-offset-2 ring-teal-500 checked:bg-teal-400 ring-offset-gray-200 dark:ring-offset-gray-800 cursor-pointer"
      />
    </fieldset>
  )
}

export { ToggleDarkMode };
