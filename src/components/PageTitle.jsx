const PageTitle = ({title}) => {
  if(!title) return;

  return (
    <div className="pt-8 pb-10">
      <h1 className="tracking-wider w-fit mx-auto px-4 capitalize font-bold  text-center text-2xl border-b-2 rounded-md leading-9 text-gray-600 border-teal-500 dark:text-gray-100">{title}</h1>
    </div>
  )
}

export { PageTitle }