import { Routes, Route } from 'react-router-dom'
import { Navbar, ToggleDarkMode, Searcher } from './components'
import { HomePage, Hardware, Equipos, Perifericos, Carrito } from './' 
import { useDarkMode } from './hooks'

function App() {

  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Navbar darkMode={darkMode} />
      <Routes>
        <Route path="/" element={ <HomePage /> }></Route>
        <Route path="/hardware" element={  <Hardware/> }></Route>
        <Route path="/perifericos" element={  <Perifericos /> }></Route>
        <Route path="/equipos" element={  <Equipos /> }></Route>
        <Route path="/carrito" element={  <Carrito /> }></Route>
      </Routes>

      <ToggleDarkMode toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
    </div>
  )
}

export default App