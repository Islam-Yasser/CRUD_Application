import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/dist/sweetalert2.min.css";

function EditProduct() {
  let { ProductID } = useParams();
  const [product, setproduct] = useState();
  const [ProductName, setProductName] = useState();
  const [ProductPrice, setProductPrice] = useState();
  const [ProductDescription, setProductDescription] = useState();
  const [ProductCategory, setProductCategory] = useState();
  const [ProductImage, setProductImage] = useState();
  let navi = useNavigate();
  useEffect(() => {
    fetch(`http://localhost:9000/products/${ProductID}`)
      .then((response) => response.json())
      .then((data) => {
        setproduct(data);
        setProductName(data.title);
        setProductPrice(data.price);
        setProductDescription(data.description);
        setProductCategory(data.category);
        setProductImage(data.image);
      });
  }, []);

  function submitForm(Event) {
    Event.preventDefault();
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        axios({
          method: "put",
          url: "http://localhost:9000/products/" + ProductID,
          data: {
            title: ProductName,
            description: ProductDescription,
            category: ProductCategory,
            price: ProductPrice,
            image: ProductImage,
          },
        }).then((data) => {
          console.log(data);
          navi("/products");
        });
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  }
  return (
    <>
      <h1>Edit Product whose ID : {ProductID} </h1>
      <form key={ProductID}>
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
            className="btn btn-primary"
            onClick={(event) => {
              submitForm(event);
            }}
          >
            Change
          </button>
        </fieldset>
      </form>
    </>
  );
}
export default EditProduct;
