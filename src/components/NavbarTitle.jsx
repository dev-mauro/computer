import { NavLink } from 'react-router-dom'
import { CpuChipIcon } from '@heroicons/react/24/solid'

const neonText = (darkMode) =>
  (darkMode)
    ? 'dark-neon-text'
    : 'light-neon-text';

const NavbarTitle = ({ darkMode }) => {
  return (
    <NavLink to="/" className={`max-w-sm pl-2 md:pl-0 justify-self-start mr-4 flex justify-start items-center text-teal-500 hover:cursor-pointer dark:hover:text-teal-200 transition-all duration-500 dark:text-teal-300 xs:justify-self-center ${neonText(darkMode)}`}>

      <CpuChipIcon className="w-6 h-6 2xs:w-8 2xs:h-8 mr-2 shrink-0" />
      <h1 className="text-lg text-center
        after:content-['Computer_Scientist']
        2xs:after:content-['The_Computer_Scientist'] 2xs:text-lg"
      ></h1>

    </NavLink>
  )
}

export { NavbarTitle }
