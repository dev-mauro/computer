import { Navbar, ToggleDarkMode } from "../components"
import { useDarkMode } from "../hooks";

const AppLayout = ({children}) => {

  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Navbar darkMode={darkMode}/>

      { children }

      <ToggleDarkMode toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>

      {/* Footer */}
    </div>
  )
}

export { AppLayout }