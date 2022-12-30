import { useSelector } from 'react-redux';

import { Navbar, Footer } from "../components"

const AppLayout = ({children}) => {

  const { darkMode } = useSelector(state => state.darkMode);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div style={{minHeight: '100vh'}} className="bg-gray-50 dark:bg-slate-700 flex flex-col min-h-screen">

        <Navbar/>

        <main className="px-2 xs:px-5 py-1 pb-10 bg-gray-50 dark:bg-slate-700"
          style={{minHeight: 'calc(100vh - 400px)'}}
        >

          { children }

        </main>

        <Footer/>
      </div>
    </div>
  )
}

export { AppLayout }