import { Routes, Route, Navigate } from 'react-router-dom'

import { AppLayout } from './layout';
import { HomePage, ItemListPage, CartPage } from './pages';

function App() {

  return (
    <AppLayout>

      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/carrito" element={  <CartPage /> } />
        <Route path="/categoria/:categoryId" element={ <ItemListPage /> }/>

        <Route path="*" element={ <Navigate to="/" replace/> }/>
      </Routes>

    </AppLayout>

  )
}

export default App;