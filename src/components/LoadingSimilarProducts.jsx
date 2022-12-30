import { TagIcon } from "@heroicons/react/24/solid"
import { LoadingProducts } from "./LoadingProducts"

export const LoadingSimilarProducts = () => {
  return (
    <div
      className="max-w-7xl mx-auto md:pl-10 xl:pl-0"
    >
      <div className="flex items-center mb-5">
        <TagIcon className="w-6 h-6 mr-3 dark:text-white"/>
        <h2 className="text-2xl 2xs:text-3xl capitalize font-bold pb-1 dark:text-white">
          productos relacionados
        </h2>
      </div>

      <LoadingProducts justify={"start"} wrap={false}/>
      
    </div>
  )
}