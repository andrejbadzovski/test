import React, { useState, useEffect } from "react";
import AddProduct from "./pages/AddProduct";
import ShowProducts from "./pages/ShowProducts";

const App = () => {
  const [path, setPath] = useState(window.location.pathname);
  if(window.location.href === 'https://andrejbadzovski-test.000webhostapp.com/'){
    return (<ShowProducts/>)
  }

  return (
    <div>
      <AddProduct/>
    </div>

  );
};

export default App;

