// Home.js > Products
import React, { useState, useEffect } from "react";
import ProductCard from "../components/Products/ProductCard";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://652bdb8ed0d1df5273eecf98.mockapi.io/3dproducts"
      );
      const products = await response.json();
      setProducts(products);
      //setFilteredProducts(products);
    };

    fetchProducts();
  }, []);

  const handleProductClick = (id) => {
    navigate(`/details/${id}`);
  };

  return products ? (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} onInfoClick={handleProductClick} />
          </div>
        ))}
      </div>
    </>
  ) : (
    <div>Loading ...</div>
  );
};

export default Home;
