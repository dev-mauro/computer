import { NavbarTitle, NavbarWidgets, CategoriesList, Searcher } from './';



const Navbar = () => {
  return (
    <nav
      className="sticky top-0 z-20 w-full md:flex flex-wrap justify-start
      grid grid-cols-1 grid-rows-2 bg-slate-100 text-gray-800 px-2 md:px-4 2xs:px-8 md:pr-24
      dark:bg-gray-800 dark:text-white py-5"
    >

      <NavbarTitle/>
      <CategoriesList />
      <Searcher/>
      <NavbarWidgets />

    </nav>
  )
}

export { Navbar };

/*
"md:flex md:space-x-4
      grid grid-cols-1 grid-rows-2
      relative bg-slate-100 text-gray-800 px-4 2xs:px-8
      dark:bg-gray-800 dark:text-white py-5"
*/