import { useSelector } from "react-redux"



const Total = () => {
const cart = useSelector((state) => state.cart)

const getTotal = () => {
    let totalQuantity = 0
    let totalPrice = 0
    cart.cart.forEach(item => {
      totalQuantity += item.quantity
      totalPrice += item.price * item.quantity
    })
    return {totalPrice, totalQuantity}
  }

  return (
    <div className="self-end p-2 pr-8">
        Total ({getTotal().totalQuantity} items) : <strong>
            ${getTotal().totalPrice}
        </strong>
    </div>
  )
}

export default Total