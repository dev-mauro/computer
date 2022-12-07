import { InformationCircleIcon } from "@heroicons/react/24/solid";

const ItemDetails = ({ details }) => {
  return (
    <>
      <hr className="border-gray-300 dark:border-teal-400"/>

      <p className="py-7 relative dark:text-white">
        <legend
          className="absolute bg-gray-50 pr-1 text-gray-500 dark:text-teal-400 dark:bg-gray-700"
          style={{top: '-13px'}}
        >

          <InformationCircleIcon className="w-8 h-8"/>
        </legend>

        {details}

      </p>

      <hr className="border-gray-300 dark:border-teal-400"/>
    </>
  )
}

export { ItemDetails }