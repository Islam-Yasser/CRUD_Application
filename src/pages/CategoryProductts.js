import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CategoryProducts() {
  let {CategoryName} = useParams();
  const [category, setcategory] = useState([]);
  useEffect(() => {
    getAllProducts();
  }, []);

  function getAllProducts() {
    fetch("http://localhost:9000/products")
      .then((response) => response.json())
      .then((data) => {
        setcategory(data);
      });
  }

  return (
    <>
    <h1> Category : {CategoryName} </h1>
       {category.map((product) => {
          if (product.category == CategoryName) {
          return (
            <div class="card col-3 mb-3 me-3" key={product.id}>
              <img
                src={product.image}
                class="card-img-top"
                alt={product.category}
              />
              <div class="card-body">
                <p class="card-text title">{product.title.slice(0, 10)}</p>
                <p class="card-text">{product.description.slice(0, 30)}</p>
                <p class="card-text">{product.price}$</p>
                <p class="card-text">ID : {product.id}</p>
              </div>
            </div>
          );
        }
      })
      } 

    </>
  );
}
export default CategoryProducts;
