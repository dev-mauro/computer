const ItemDetailImage = ({ imageURL }) => {
  return (
    <figure className="w-full md:w-1/2 h-96 ring-1 ring-slate-200 mb-10 md:mb-0 dark:ring-teal-400">

      <img src={imageURL} alt="" />

    </figure>
  )
}

export { ItemDetailImage }