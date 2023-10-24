import { useEffect, useState } from "react";
import "./Home.css";

function Home() {
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
  return (
    <>
      <h1>Home Page</h1>
      <div class="container">
        <div class="row mt-5">
          {products.map((product) => {
            return (
              <div class="card col-3 mb-3 me-3" key={product.id}>
                {!product.image ? (
                  <div class="spinner-grow" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  <img
                    src={product.image}
                    class="card-img-top"
                    alt={product.category}
                  />
                )}
                {/* <img src={product.image} class="card-img-top" alt={product.category} /> */}
                <div class="card-body">
                  <p class="card-text title">{product.title.slice(0, 10)}</p>
                  <p class="card-text">{product.description.slice(0, 30)}</p>
                  <p class="card-text">{product.price}$</p>
                  <p class="card-text">ID : {product.id}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Home;
