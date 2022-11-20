import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/solid'

const Searcher = () => {
  return (
    <form className="dark:bg-gray-700 rounded-md w-full max-w-xl mt-1 xl:mt-0 mx-auto md:mx-0 flex items-center px-3 border-b border-gray-300 dark:border-none">
      {/* <input type="text" placeholder="Qué estás buscando..."
      className="p-2 bg-transparent border-b border-gray-400 outline-none"
      /> */}
      <input type="text" placeholder="Qué estás buscando..."
      className="peer px-3 py-2 bg-transparent outline-none text-center mx-auto w-full order-2"
      />
      <MagnifyingGlassIcon className="h-6 w-6 text-gray-400 order-1 peer-focus:text-teal-600 peer-hover:text-teal-600 
      dark:peer-focus:text-white dark:peer-hover:text-white"/>
      <button className="order-3">
        <XMarkIcon className="h-6 w-6 text-gray-400 hover:text-teal-600 dark:hover:text-white"/>
      </button>
    </form>
  )
}

export { Searcher };
