import { ItemCard } from "./"

const ItemList = ({ productList, justify = 'center', wrap = true }) => {
  
  wrap = (wrap) ? 'flex-wrap max-w-7xl gap-x-10' : 'overflow-x-scroll gap-x-5 xl:overflow-x-auto pb-5 custom-scrollbar';
  
  return (
    <div className={`flex ${wrap} justify-${justify}  gap-y-12 mx-auto`}>
    {
      productList.map( item => <ItemCard key={item.id} {...item}/> )
    }
    </div>
  )
}

export { ItemList }