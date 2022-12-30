import { ArrowPathIcon } from "@heroicons/react/24/outline"

export const Loading = () => {
  return (
    <div className="absolute w-screen h-screen top-0 left-0 flex items-center justify-center">
      <ArrowPathIcon className="text-teal-400 animate-spin w-64 h-64"/>
    </div>
  )
}