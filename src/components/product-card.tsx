import { FaPlus } from "react-icons/fa";

type ProductsProps = {
  productId:string
  photo:string;
  name:string;
  price:number;
  stock:number;
  handler: ()=> void;
}
// let server = "sn2j1"
const ProductCard = ({productId,photo,name,price,stock,handler}:ProductsProps) => {
  
  return <div className="product-card">
    <img src={photo} alt={name} />
    <p>{name}</p>
    <span>₹{price}</span>

    <div>
      <button onClick={()=> handler()}>
        <FaPlus/>
      </button>
    </div>
  </div>
}

export default ProductCard