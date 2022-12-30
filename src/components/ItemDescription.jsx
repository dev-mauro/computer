const itemDescriptionTitle = (brand, model) => {
  if(!model) return;

  if(model.includes(brand)) return model;

  return `${brand} ${model}`;
}

const ItemDescription = ({ brand, model, price, small = false }) => {

  const modelFontSize = small ? "text-xl" : "text-3xl"
  const priceFontSize = small ? "text-lg" : "text-xl mb-16";

  return (
    <div>
      <h3 className={`${modelFontSize} capitalize font-bold pb-1 pl-1 md:pl-0 dark:text-white`}>
        { itemDescriptionTitle(brand, model) }
      </h3>

      <p className={`${priceFontSize} font-light pl-1 md:pl-0 dark:text-gray-100`}>
        ${price}
      </p>
    </div>
  )
}

export { ItemDescription }