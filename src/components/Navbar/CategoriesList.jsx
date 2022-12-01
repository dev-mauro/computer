import { NavLink } from 'react-router-dom'

const active = ( {isActive} ) => {
  return `navbar-item row-span-1 ${ (isActive) ? 'text-teal-500 dark:text-teal-400 font-bold' : 'text-gray-600'}`;
} 

const CategoriesList = () => {
  return (
    <ul className="justify-center items-center row-start-3 mt-2 md:mt-0 row-span-4 md:border-l border-gray-300 dark:border-slate-600 flex space-x-1 md:pl-1 mr-1">
      <NavLink to="/categoria/hardware" className={ active }>
        Hardware
      </NavLink>
      <NavLink to="/categoria/perifericos" className={ active }>
        Periféricos
      </NavLink>
      <NavLink to="/categoria/equipos" className={ active }>
        Equipos
      </NavLink>
    </ul>
  )
}

export { CategoriesList };
