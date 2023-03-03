import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Product = ({ item }) => {
  const { id, image, title, price, ratings } = item;
  const {cart} = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const alreadyInCart = (id) => {
    const isItemInCart = cart.find((item) => item.id === id);
    return isItemInCart;
  };
  useEffect(() => {
  
    
  }, [dispatch])
  

  return (
    <div
      key={id}
      className="max-w-sm border p-4 bg-white flex flex-col rounded-sm shadow-lg"
    >
      <div className="w-full h-48 md:h-64 object-contain overflow-hidden aspect-square flex justify-center">
        <img src={image} alt="" className="w-48 h-full object-contain" />
      </div>
      <div className="mb-4">
        <p className="text-gray-700">{title}</p>
        <p className="mt-2">
          <small>$</small>
          <strong className="text-gray-700">{price}</strong>
        </p>
      </div>
      <button
        className="mt-auto bg-gray-600 p-3 rounded-sm text-white"
        onClick={() => alreadyInCart(id)? navigate("/cart"):
          dispatch(
            addToCart({
              id,
              title,
              image,
              price,
            })
          )
        }
      >
        {!alreadyInCart(id)? "Add To Cart" : "Go  to Cart"}

      </button>
    </div>
  );
};

export default Product;
