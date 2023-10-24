import { useEffect, useState } from "react";
import "./Categories.css"
import { Link } from "react-router-dom";


function Categories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:9000/categories`)
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);
  return (
    <>
      <h1>All Categoreis</h1>
      <div className="container ">
        <div className="row">
          {categories.map((category) => {
            return (
              <Link to={`/categories/${category.name}`} class="card col-3 mb-1 me-1">
                <img src={category.image} class="card-img-top" alt={category.name} />
                <div class="card-body">
                  <p class="card-text">{category.name.toUpperCase()}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Categories;
