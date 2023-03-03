import React from "react";
import { incrementQuantity , decrementQuantity, removeItem} from "../features/cartSlice";
import { useDispatch } from "react-redux";
import {RiDeleteBin6Line} from "react-icons/ri"
import {AiOutlineMinus} from "react-icons/ai"


const CartItems = ({ item }) => {
  const { id, title, price, quantity, image } = item;
  const dispatch = useDispatch();
  return (
    <div
      className="flex w-full gap-2 p-4 rounded-sm shadow-sm"
    >
      <div className="w-1/3  overflow-hidden flex justify-center items-center">
        <img src={image} alt="" className="w-full h-24 object-contain" />
      </div>
      <div className="w-2/3 flex flex-col p-2">
        <p>{title}</p>
        <p>
          $ <strong>{price}</strong> 
        </p>
        <div className="w-full mt-4  flex gap-8">
        <div className="w-1/4  border flex justify-">
          <button className="bg-gray-200 w-8 text-center font-bold text-lg grid place-items-center" >
          {quantity === 1? <RiDeleteBin6Line onClick={() => dispatch(removeItem(id))} className="text-gray-600"/>:<AiOutlineMinus onClick={() => dispatch(decrementQuantity(id))} className="font-thin text-gray-700 w-full"/>}  
          </button>
          <p className="grow text-center">{quantity}</p>{" "}
          <button className="bg-gray-200 w-8 text-center font-bold text-lg" onClick={() => dispatch(incrementQuantity(id))}>
            +
          </button>
        </div>
        <button className="bg-red-600 text-white px-4 rounded-sm"
        onClick={() => dispatch(removeItem(id))}>Remove</button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
