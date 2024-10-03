import { BrowserRouter, Routes, Route } from "react-router-dom"
import BaseLayout from "./layout/BaseLayout"
import Store from "./pages/Store"
import Detail from "./pages/Detail"
import Cart from "./pages/Cart"
import CheckOut from "./pages/CheckOut"
import NotFound from "./components/NotFound"
import { CartContextProvider } from "./context/cartContext"

function App() {

  return (
    
    <CartContextProvider>
      <BrowserRouter>
          <BaseLayout>
            <Routes>
              <Route exact path="/" element={<Store />} />
              <Route exact path="/category/:categoryId" element={<Store />} />
              <Route exact path="/item/:id" element={<Detail />} />
              <Route exact path="/cart" element={<Cart />} />
              <Route exact path="/checkout" element={<CheckOut />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BaseLayout>
      </BrowserRouter>
    </CartContextProvider>

  )
}

export default App
