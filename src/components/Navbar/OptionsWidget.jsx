import {  useState } from 'react'
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline'
import { OptionMenu } from './';

const OptionsWidget = () => {

  // visible or invisible
  const [menuVisibility, setMenuVisibility] = useState(false);

  const onVisibilityChange = () => {
    setMenuVisibility( !menuVisibility );
  }

  return (
    <div>
      <button
        className="py-2 px-2 rounded-br-full hover:text-teal-600 dark:text-gray-300 dark:hover:text-white dark:hover:font-normal group"
        onClick={onVisibilityChange}
      >

        <EllipsisVerticalIcon className="w-6 h-6"/>

      </button>

      <OptionMenu menuVisibility={menuVisibility} onVisibilityChange={onVisibilityChange}/>

    </div>
  )
}

export { OptionsWidget }