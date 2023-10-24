import { useEffect, useState } from "react";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/dist/sweetalert2.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function AddProduct() {
  const [ProductName, setProductName] = useState();
  const [ProductPrice, setProductPrice] = useState();
  const [ProductDescription, setProductDescription] = useState();
  const [ProductCategory, setProductCategory] = useState();
  const [ProductImage, setProductImage] = useState();
  let navi = useNavigate();

  const Submitform = (Event) => {
    var flag = true;
    Event.preventDefault();
    if (ProductName == undefined) {
      flag = false;
      Swal.fire({
        title: "Error!",
        text: "Aww , May be you have left some fields empty , It might be Product Name field, please Check it .",
        icon: "error",
        confirmButtonText: "Got it !",
        timer: 5000,
        timerProgressBar: true,
      });
    }
    if (ProductDescription == undefined) {
      flag = false;
      Swal.fire({
        title: "Error!",
        text: "Aww , May be you have left some fields empty , It might be Product Description field, please Check it .",
        icon: "error",
        confirmButtonText: "Got it !",
        timer: 5000,
        timerProgressBar: true,
      });
    }
    if (ProductPrice == undefined) {
      flag = false;
      Swal.fire({
        title: "Error!",
        text: "Aww , May be you have left some fields empty , It might be Product Price field, please Check it .",
        icon: "error",
        confirmButtonText: "Got it !",
        timer: 5000,
        timerProgressBar: true,
      });
    }
    if (ProductCategory == undefined) {
      flag = false;
      Swal.fire({
        title: "Error!",
        text: "Aww , May be you have left some fields empty , It might be Product Category field, please Check it .",
        icon: "error",
        confirmButtonText: "Got it !",
        timer: 5000,
        timerProgressBar: true,
      });
    }
    if (ProductImage == undefined) {
      flag = false;
      Swal.fire({
        title: "Error!",
        text: "Aww , May be you have left some fields empty , It might be Product Image field, please Check it .",
        icon: "error",
        confirmButtonText: "Got it !",
        timer: 5000,
        timerProgressBar: true,
      });
    }
    if (flag) {
      axios({
        method: "post",
        url: "http://localhost:9000/products",
        data: {
          title: ProductName,
          description: ProductDescription,
          category: ProductCategory,
          price: ProductPrice,
          image:ProductImage
        },
      }).then((data) => {
        navi("/products");
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved and product added ',
          showConfirmButton: false,
          timer: 1500
        })
        
      });
    }
  };

  return (
    <>
      <h1>Add Product</h1>
      <form>
        <fieldset className="mt-3">
          <div className="input-group mb-3 mt-5">
            <span className="input-group-text">ProductName</span>
            <input
              type="text"
              aria-label="ProductName"
              className="form-control"
              onChange={(e) => {
                setProductName(e.target.value);
              }}
            />
            <span className="input-group-text">Description</span>
            <input
              type="text"
              aria-label="Description"
              className="form-control"
              onChange={(e) => {
                setProductDescription(e.target.value);
              }}
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text">$</span>
            <span className="input-group-text">0.00</span>
            <input
              type="text"
              className="form-control"
              aria-label="Dollar amount (with dot and two decimal places)"
              onChange={(e) => {
                setProductPrice(e.target.value);
              }}
            />
          </div>

          <select
            class="form-select mb-3"
            aria-label="Default select example"
            value={ProductCategory}
            onChange={(e) => {
              setProductCategory(e.target.value);
            }}
          >
            <option selected>Open this select menu</option>
            <option value="men's clothes">men's clothing</option>
            <option value="wommen's clothes">wommen's clothing</option>
            <option value="jewelery">jewelery</option>
            <option value="electronics">electronics</option>
          </select>
          <div className="input-group mb-5">
          <span className="input-group-text">Image Url</span>
            <input
              type="text"
              aria-label="Description"
              className="form-control"
              onChange={(e) => {
                setProductImage(e.target.value);
              }}
            />
            </div>
          <button
            type="submit"
            className="btn btn-success"
            onClick={(event) => {
              Submitform(event);
            }}
          >
            Submit
          </button>
        </fieldset>
      </form>
    </>
  );
}
export default AddProduct;
