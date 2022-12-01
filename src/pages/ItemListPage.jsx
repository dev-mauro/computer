import { useParams } from "react-router-dom"

const ItemListPage = () => {
  
  const { categoryId } = useParams();
  
  return (
    <>
      <h1>{categoryId}</h1>
    </>
  )
}

export { ItemListPage }