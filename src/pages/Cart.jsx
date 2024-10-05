import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import bin from "../assets/bin.png";
import add from "../assets/add.png";
import minus from "../assets/minus.png";

const Cart = () => {
  const [products, setProducts] = useState(null);

  const [productsInCart, setProductsInCart] = useState(
    JSON.parse(window.localStorage.getItem("cart"))
  );
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        `https://652bdb8ed0d1df5273eecf98.mockapi.io/3dproducts`
      );
      const products = await response.json();
      setProducts(products);
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (products && productsInCart) {
      let total = 0;
      productsInCart.forEach((item) => {
        const product = products.find((p) => p.id === item.id);
        if (product) {
          total += product.price * item.qt;
        }
      });
      setTotalPrice(total);
    }
  }, [products, productsInCart]);

  const getProductById = (id) => {
    const product = products.find((product) => product.id === id);
    return product;
  };

  const handleProductQuantity = (productsInCart, productId, action) => {
    const currentProduct = productsInCart.find(
      (product) => product.id === productId
    );
    const indexOfProductToBeDeleted = productsInCart.indexOf(currentProduct);

    console.log("current product = ", currentProduct);

    switch (action) {
      case "decrease":
        if (currentProduct.qt > 1) currentProduct.qt = currentProduct.qt - 1;
        break;
      case "increase":
        currentProduct.qt = currentProduct.qt + 1;
        break;
      case "delete":
        productsInCart.splice(indexOfProductToBeDeleted, 1);
        break;
    }

    if (productsInCart.length === 0) {
      localStorage.removeItem("cart");
      setProductsInCart(null);
    } else {
      localStorage.setItem("cart", JSON.stringify(productsInCart));
      setProductsInCart(productsInCart);
    }
  };

  const decreaseQuantity = (e) => {
    const productsInCart =
      JSON.parse(window.localStorage.getItem("cart")) ?? [];
    handleProductQuantity(productsInCart, e.target.id, "decrease");
  };

  const increaseQuantity = (e) => {
    const productsInCart =
      JSON.parse(window.localStorage.getItem("cart")) ?? [];
    handleProductQuantity(productsInCart, e.target.id, "increase");
  };

  const deleteProductFromCart = (e) => {
    const productsInCart =
      JSON.parse(window.localStorage.getItem("cart")) ?? [];
    handleProductQuantity(productsInCart, e.target.id, "delete");
  };

  return products && productsInCart ? (
    <div className="p-10 gap-10 flex flex-col items-center">
      {productsInCart.map((productInCart) => {
        const product = getProductById(productInCart.id);

        return (
          <div
            className="flex flex-col gap-2 md:flex-row items-center"
            key={productInCart.id}
          >
            <div className="flex flex-col lg:flex-row items-center justify-between w-full">
              <p className="px-2 w-full ">{product?.name}</p>
              <div className="px-2 flex justify-center items-center lg:w-[500px]">
                <img width={150} src={product?.imageURL} alt={product?.name} />
              </div>
              <p className="px-2 justify-center items-center md:w-full">
                {product?.price} RON
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between w-full md:gap-5">
              <div className="flex items-center justify-center gap-5 w-full md:w-auto">
                <img
                  src={minus}
                  alt="minus"
                  className="w-[20px] hover:cursor-pointer"
                  id={productInCart.id}
                  onClick={decreaseQuantity}
                />
                <p>{productInCart.qt}</p>
                <img
                  src={add}
                  alt="add"
                  className="w-[20px] hover:cursor-pointer"
                  id={productInCart.id}
                  onClick={increaseQuantity}
                />
                <img
                  src={bin}
                  alt="bin"
                  className="w-[20px] hover:cursor-pointer"
                  onClick={deleteProductFromCart}
                  id={productInCart.id}
                />
              </div>
            </div>
          </div>
        );
      })}
      <div className="flex justify-center items-center mt-4">
        <p className="text-lg font-bold">Total: {totalPrice} RON</p>
      </div>
    </div>
  ) : (
    <div className="pt-20 text-center">
      Cosul este momentan gol, va rugam sa adaugati produse din{" "}
      <Link className="underline text-blue-500" to="/">
        pagina de produse
      </Link>
    </div>
  );
};

export default Cart;
