//Detail.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(
        `https://652bdb8ed0d1df5273eecf98.mockapi.io/3dproducts/${id}`
      );
      const product = await response.json();
      //console.log(product);
      setProduct(product);
    };

    fetchProduct();
  }, [id]);

  return product ? (
    <>
      <div key={product.id} className="flex justify-center">
        {/*left side name and img */}
        <div className="w-auto">
          <div className="flex justify-evenly pt-12 pl-20">
            <img src={product.imageURL} width={300} alt="" />
          </div>
          <div>
            <div className="font-bold justify-evenly pl-20 flex ">
              {product.name}
            </div>
          </div>
        </div>

        {/* right side description */}
        <div className="w-1/2 flex flex-col justify-evenly mt-40 ">
          <div className="justify-center">{product.description}</div>
        </div>
      </div>
    </>
  ) : (
    <div>Loading...</div>
  );
};

export default Details;
