import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'

const ToggleDarkMode = ({ toggleDarkMode, darkMode }) => {
  return (
    <button
      className="p-4 fixed bottom-0 right-0 m-5 rounded-md bg-slate-100 ring-1 ring-teal-400 dark:bg-gray-800 dark:ring-0"
      onClick={toggleDarkMode}
    >
      {
        (darkMode)
          ? <SunIcon className="w-8 h-8 text-teal-400" />
          : <MoonIcon className="w-8 h-8 text-teal-600" />
      }
    </button>
  )
}

export { ToggleDarkMode };
