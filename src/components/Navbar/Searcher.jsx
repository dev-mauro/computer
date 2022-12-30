import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { useForm } from '../../hooks';

const Searcher = () => {

  const {search, onInputChange, onInputReset} = useForm({
    search: '',
  });

  const onSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <form
      onSubmit={onSubmit}
      className="w-full max-w-xl row-start-2 row-span-1 dark:bg-gray-700 rounded-md mt-1 xl:mt-0 mx-auto md:mx-0 flex items-center px-3 border-b border-gray-300 dark:border-none"
    >

      <input
        type="text"
        placeholder="Qué estás buscando..."
        name="search"
        onChange={onInputChange}
        value={search}
        className="peer px-3 py-2 bg-transparent outline-none text-center mx-auto w-full order-2"
      />

      <button
        type="submit"
        className="order-1 text-gray-400 peer-focus:text-teal-600 peer-hover:text-teal-600 dark:peer-focus:text-white dark:peer-hover:text-white"
      >
        <MagnifyingGlassIcon className="h-6 w-6"/>
      </button>

      <button className="order-3" onClick={ onInputReset } type="button">
        <XMarkIcon
          className="h-6 w-6 text-gray-400 hover:text-teal-600 dark:hover:text-white"
        />
      </button>

    </form>
  )
}

export { Searcher };
