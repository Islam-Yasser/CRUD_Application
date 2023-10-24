import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/dist/sweetalert2.min.css";

function Products() {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    getAllProducts();
  }, []);

  function getAllProducts() {
    fetch("http://localhost:9000/products")
      .then((response) => response.json())
      .then((data) => {
        setproducts(data);
      });
  }

  function deleteProduct(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:9000/products/${id}`, {
          method: "DELETE",
        }).then(() => {
          getAllProducts();
        });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  }

  return (
    <>
      <h1>Products Page</h1>
      <Link to={"/products/add"} className="btn btn-success mt-3">
        Add Product
      </Link>
      <table class="table table-striped mt-5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Price</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => {
            return (
              <tr key={item.id}>
                <th>{item.id}</th>
                <th>{item.title.slice(0, 45)}...</th>
                <th>{item.category}</th>
                <th>{item.price}</th>
                <th>
                  <Link to={`/products/${item.id}`} className="btn btn-info">
                    Info
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteProduct(item.id)}
                  >
                    Delete
                  </button>
                  <Link to={`/products/edit/${item.id}`}className="btn btn-primary">Edit</Link>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
export default Products;
