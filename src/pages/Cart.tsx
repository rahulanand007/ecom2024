import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItem from "../components/cart-item";
import { Link } from "react-router-dom";

const cartitems = [
  {
    productId: "sdadsa",
    photo:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-mbp13-space-m1-2020?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1628621779000",
    name:"Macbook",
    price:78000,
    quantity: 4,
    stock: 10
  }
];
const subtotal = 4000;
const tax = Math.round(subtotal * 0.18);
const shippingCharges = 200;
const discount = 400;
const total = subtotal + tax + shippingCharges - discount;

const Cart = () => {
  const [couponCode, setCouponCode] = useState<string>("");
  const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false);

  useEffect(() => {
    const timeOutID = setTimeout(()=>{
      if(Math.random() >0.5) setIsValidCouponCode(true);
      else setIsValidCouponCode(false)
    },1000)  
  
    return () => {
     clearTimeout(timeOutID)
     setIsValidCouponCode(false)
    }
  }, [couponCode])
  

  return (
    <div className="cart">
      <main>

      {
        cartitems.length>0? cartitems.map((i,index)=> 
        <CartItem key={index} cartItem={i}/>
        ) :<h1>No Items Added</h1>
      }
      
      </main>
      <aside>
        <p>Subtotal : ₹{subtotal}</p>
        <p>Shipping Charges : ₹{shippingCharges}</p>
        <p>Tax : ₹{tax}</p>
        <p>
          Discount : 
          <em> - ₹{discount}</em>
        </p>
        <p>
          <b> Total: ₹{total} </b>
        </p>

        <input
          type="text"
          placeholder="Coupon Code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />
        {couponCode &&
          (isValidCouponCode ? (
            <span className="green">
              ₹{discount} off using the code - <code>{couponCode}</code>
            </span>
          ) : (
            <span className="red">
              Invalid Coupon <VscError />
            </span>
          ))}

            {
              cartitems.length>0 && <Link to="/shipping">Checkout</Link>
            }

      </aside>
    </div>
  );
};

export default Cart;
