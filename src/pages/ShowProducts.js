import { useState, useEffect} from "react";
import "../App.css";
import axios from 'axios';
import "../styles.css";
import SingleProduct from "../components/SingleProduct";
  
function ShowProducts() {
    const [products, setProducts] = useState('');
    const [selectedProducts, setSelectedProducts] = useState([])
    const queryString = window.location.search;
    let url = 'https://product-store-scandiwebtest.000webhostapp.com/api/get-products';

    if (queryString) {
    url += queryString;
    }

    const getProducts = () => {
        axios.get(url)
          .then(res => {
            setProducts(res.data)
          })
          .catch(err => {
            console.log(err.response)
          });
      }
      useEffect(() => {
        getProducts()
      },[])
    
      const handleMassDelete = () => {
        const params = new URLSearchParams({ ids: selectedProducts });
        const url = `https://product-store-scandiwebtest.000webhostapp.com/api/delete-products?${params}`;
      
        axios
          .get(url, {
            headers: {
              'Content-Type': 'application/json',
            },
          })
          .then((response) => {
            window.location.reload();
          })
          .catch((err) => {
            console.log(err);
          });
      };
      return (
        <div className='container'>
          <div className='mainDelete'>
            <div className='headerText'>Product List</div>
            <div className='buttonStyle'>
              <button onClick={handleMassDelete}>
                MASS DELETE
              </button>
              <a href="/products">ADD</a>
            </div>
          </div>
          <div className='cardMain'>
            {Object.values(products).map((product) => (
              <SingleProduct key={product.sku} product={product} selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts} />
            ))}
          </div>
        </div>
      );
    };
    
    export default ShowProducts;