import { GithubIcon } from "./GithubIcon"

export const Footer = () => {
  return (
    <div className="mt-28 h-56 w-full bg-slate-100 dark:bg-gray-800 flex items-center justify-center dark:text-teal-400 gap-3">
      <h2>Developed by @dev-mauro</h2>
      
      <GithubIcon size={6}/>

    </div>
  )
}