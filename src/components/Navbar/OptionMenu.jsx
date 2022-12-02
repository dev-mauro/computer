import { ToggleDarkMode } from "./ToggleDarkMode"

const OptionMenu = ({ menuVisibility, onVisibilityChange }) => {

  return (
    <>
      <div
          hidden={ !menuVisibility }
          onClick={ onVisibilityChange }
          style={{top: '-20px', backgroundColor: 'rgba(0,0,0,.2)'}}
          className="absolute w-screen h-screen right-0 bg-transparent z-10">
      </div>

      <div
        hidden={ !menuVisibility }
        className="absolute w-40 right-2 text-black p-2 rounded-md bg-slate-100 dark:bg-gray-800 ring-4 ring-teal-600 2xl:right-6 z-20"
      >
        
        <ToggleDarkMode />
        
      </div>
    </>
  )
}


export { OptionMenu }