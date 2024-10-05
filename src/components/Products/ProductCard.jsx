import React from "react";
import PropTypes from "prop-types";
import info from "../../assets/info.png";

const ProductCard = ({ product, onInfoClick }) => {
  const addProductToCart = (e) => {
    let productsInCart = [];
    if (window.localStorage.getItem("cart")) {
      productsInCart = JSON.parse(window.localStorage.getItem("cart"));
    }
    const productAlreadyAdded = productsInCart.find(
      (product) => product.id === e.target.id
    );
    if (productAlreadyAdded) {
      productAlreadyAdded.qt += 1;
    } else {
      productsInCart.push({ id: e.target.id, qt: 1 });
    }
    window.localStorage.setItem("cart", JSON.stringify(productsInCart));
  };

  return (
    <div
      key={product.id}
      className="relative m-10 flex flex-col overflow-hidden border border-gray-100 bg-white shadow-md"
    >
      <img src={product.imageURL} alt={product.name} />
      <div className="mt-4 pb-5">
        <h5 className="text-xl tracking-tight text-slate-900">
          {product.name}
        </h5>
        <div className="mt-2 mb-5 flex justify-center items-center">
          <p>
            <span className="text-3xl font-bold text-slate-900">
              {product.price} RON
            </span>
          </p>
        </div>
        <div className="flex flex-row font-medium text-black items-buttom justify-center items-center">
          <button
            id={product.id}
            className="ml-8 flex flex-row bg-green-950 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-green-300"
            onClick={addProductToCart}
          >
            Add to cart
          </button>
          <span onClick={() => onInfoClick(product.id)}>
            <button>
              <img
                className="h-[30px] flex bottom-0  pl-6   w-full object-cover"
                src={info}
                alt="img"
              ></img>
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
  onInfoClick: PropTypes.func.isRequired,
};

export default ProductCard;
