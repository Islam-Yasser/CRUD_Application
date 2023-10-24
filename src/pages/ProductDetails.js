import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";

function ProductDetails() {
  let { ProductID } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:9000/products/${ProductID}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);
  return (
    <>
      <h1 className="head">Details of product whose ID is : {ProductID}</h1>
      <div className="container1">
        <h3>{product.title}</h3>
        <h4>Category : {product.category}</h4>
      </div>
      {!product.image ? (
        <div className="spinn">
          <div className="spinner-grow" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <img src={product.image} class="card-img-top" alt={product.category} />
      )}
      <h6 className="price">price : {product.price} $</h6>
    </>
  );
}
export default ProductDetails;
