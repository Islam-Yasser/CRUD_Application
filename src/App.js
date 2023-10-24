import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import ProductDetails from "./pages/ProductDetails";
import EditProduct from "./pages/EditProduct";
import Categories from "./pages/Categories";
import CategoryProducts from "./pages/CategoryProductts";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="row">
        <div className="col-2 sidebar">
          <Sidebar />
        </div>
        <div className="col-10">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="products" element={<Products/>}/>
            <Route path="categories" element={<Categories/>}/>
            <Route path="categories/:CategoryName" element={<CategoryProducts/>}/>
            <Route path="products/add" element={<AddProduct/>}/>
            <Route path="products/edit/:ProductID" element={<EditProduct/>}/>
            <Route path="products/:ProductID" element={<ProductDetails/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
