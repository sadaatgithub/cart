
import { useSelector } from "react-redux"
import CartItems from "../components/CartItems"
import Total from "../components/Total"
import { useNavigate } from "react-router-dom"

const Cart = () => {
const {cart} = useSelector((state) => state.cart)
const navigate = useNavigate()

  return (
    <>{cart.length === 0? <div className="flex justify-center items-center h-screen flex-col gap-10">
        <h3 className="text-4xl font-bold text-slate-700">Cart is empty</h3>
        <button className="bg-emerald-600 text-white p-4 rounded-sm shadow-sm" onClick={() => navigate("/")}>Continue Shopping</button>
        </div>:
      <div className="flex flex-col mt-10 gap-10 container mx-auto md:w-1/2 border">
        
    <div className="flex divide-y  flex-col border-b">

        {cart.map((item) => <CartItems item={item} key={item.id}/>)}
    </div>
    <Total/>
    </div>
}
</>)
}

export default Cart