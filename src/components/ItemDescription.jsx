const itemDescriptionTitle = (brand, model) => {
  if(!model) return;

  if(model.includes(brand)) return model;

  return `${brand} ${model}`;
}

const ItemDescription = ({ brand, model, price }) => {
  return (
    <>
      <h3 className="text-3xl capitalize font-bold pb-1 pl-1 md:pl-0 dark:text-white">
        { itemDescriptionTitle(brand, model) }
      </h3>

      <p className="text-xl font-light mb-16 pl-1 md:pl-0 dark:text-gray-100">
        ${price}
      </p>
    </>
  )
}

export { ItemDescription }