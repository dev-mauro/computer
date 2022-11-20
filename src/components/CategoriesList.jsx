import { NavLink } from 'react-router-dom'

const active = ( e ) => {
  const { isActive } = e;

  return `navbar-item row-span-1 ${ (isActive) ? 'nav-link active' : 'nav-link'}`;;
} 

const CategoriesList = () => {
  return (
    <ul className="justify-center items-center row-start-2 mt-2 md:mt-0 row-span-4 md:border-l border-gray-300 dark:border-slate-600 flex space-x-1 md:pl-1 mr-1">
      <NavLink to="hardware" className={ active }>
        Hardware
      </NavLink>
      <NavLink to="perifericos" className={ active }>
        Periféricos
      </NavLink>
      <NavLink to="equipos" className={ active }>
        Equipos
      </NavLink>
    </ul>
  )
}

export { CategoriesList };
