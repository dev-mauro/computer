import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'

const OptionMenu = ({ menuVisibility, onVisibilityChange }) => {
  return (
    <>
      <div
          hidden={ !menuVisibility }
          onClick={ onVisibilityChange }
          style={{top: '-20px', backgroundColor: 'rgba(0,0,0,.2)'}}
          className="absolute w-screen h-screen right-0 bg-transparent">
      </div>

      <div
        hidden={ !menuVisibility }
        className="absolute w-40 right-2 text-black p-2 rounded-md bg-gray-200 dark:bg-gray-800 ring-4 ring-teal-600 2xl:right-6"
      >
        <fieldset className="flex justify-center items-center space-x-2 divide-teal-600">
          <input
            type="radio"
            name="darkmode"
            className="appearance-none w-3 h-3 rounded-full ring-2 ring-offset-2 ring-teal-500 checked:bg-teal-400 ring-offset-gray-200 dark:ring-offset-gray-800 cursor-pointer"
          />

          <SunIcon className="w-6 h-6 text-teal-600" />
          <MoonIcon className="w-5 h-5 text-teal-600 mr-2" />

          <input
            type="radio"
            name="darkmode"
            className="appearance-none w-3 h-3 rounded-full ring-2 ring-offset-2 ring-teal-500 checked:bg-teal-400 ring-offset-gray-200 dark:ring-offset-gray-800 cursor-pointer"
            checked
          />
        </fieldset>
        
      </div>
    </>
  )
}


export { OptionMenu }