import { useSelector } from 'react-redux';

import { Navbar, ToggleDarkMode } from "../components"

const AppLayout = ({children}) => {

  const {darkMode} = useSelector(state => state.darkMode);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Navbar/>

      { children }

      {/* Footer */}
    </div>
  )
}

export { AppLayout }