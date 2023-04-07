import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProduct from "./pages/AddProduct";
import ShowProducts from "./pages/ShowProducts"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShowProducts />} />
        <Route path='/products' element={<AddProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

