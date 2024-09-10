import { BrowserRouter, Routes, Route } from "react-router-dom"
import BaseLayout from "./layout/BaseLayout"
import Store from "./pages/Store"
import Detail from "./pages/Detail"

function App() {

  return (

      <BrowserRouter>
        <BaseLayout>
          <Routes>
            <Route exact path="/" element={<Store />} />
            <Route exact path="/item/:id" element={<Detail />} />
          </Routes>
        </BaseLayout>
      </BrowserRouter>

  )
}

export default App
