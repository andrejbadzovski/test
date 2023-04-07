import { useState } from "react";
import "../App.css";
import axios from 'axios';
import Input from "../components/Input";
import "../styles.css";
  
function AddProduct() {
    const [product, setProduct] = useState({
        name: '',
        sku: '',
        price: '',
        type: '',
        size: '',
        width: '',
        length: '',
        weight: '',
        height: '',
      });
    const [errors, setErrors] = useState('');
    const { name, sku, price, type, size, width, length, weight, height } = product;
    const handleChange = (e) => {
        const { name, value } = e.target;
        const newValue = value === '' ? '' : value;
        setProduct({
          ...product,
          [name]: newValue,
        });
      };

    const handleTypeChange = (event) => {
        const { value } = event.target;
        setProduct({
            ...product,
            type: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        axios.post('https://product-store-scandiwebtest.000webhostapp.com/api/add-products', form)
          .then(res => {
            setProduct({
                type: type, 
          })
          window.location.href = '/'
          })
          .catch(err => {
            setErrors(err.response.data)
          });
      }

    return (
        <div className="container">
            <div className="mainAdd">
                <div className="headerText">Product List</div>
                <button className="buttonSave" type="submit" form="product_form">Save</button>
            </div>
            <form className="input" action="https://product-store-scandiwebtest.000webhostapp.com/api/add-products" method="post" onSubmit={handleSubmit} id="product_form">
                <Input label="Name" name="name" value={name} type="text" onChange={handleChange} errors={errors.name && errors.name } />
                <Input label="Price" name="price" value={price} type="number" onChange={handleChange} errors={errors.price && errors.price} />
                <Input label="Sku" name="sku" value={sku} type="text" onChange={handleChange} errors={errors.sku && errors.sku}/>
                <div className="select">
                    <label htmlFor="productType">Type: </label>
                    <select id="productType" name="type" value={type} onChange={handleTypeChange}>
                        <option value="">Select a type</option>
                        <option value="dvd">DVD</option>
                        <option value="book">Book</option>
                        <option value="furniture">Furniture</option>
                    </select>
                </div>
                {type == '' && errors.type && <span className="errorMessage">{errors.type}</span>}
                <Input label="Size" name="size" value={size} type="number" onChange={handleChange} hidden={type !== 'dvd'} description="Please provide size in MB" errors={errors.size && errors.size}/>
                <Input label="Weight" name="weight" value={weight} type="number" onChange={handleChange} hidden={type !== 'book'} description="Please provide weight in Kg" errors={errors.weight && errors.weight}/>
                <Input label="Width" name="width" value={width} type="number" onChange={handleChange} hidden={type !== 'furniture'} errors={errors.width && errors.width}/>
                <Input label="Length" name="length" value={length} type="number" onChange={handleChange} hidden={type !== 'furniture'} errors={errors ? errors.length && errors.length : ''}/>
                <Input label="Height" name="height" value={height} type="number" onChange={handleChange} hidden={type !== 'furniture'} description="Please provide dimensions in HxWxL format" errors={errors.height && errors.height}/>
            </form>
        </div>
    );
}
  
export default AddProduct;