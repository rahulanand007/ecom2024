import { useState } from "react"
import { FaSearch, FaShoppingBag, FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa"
import { Link} from "react-router-dom"

const user ={_id : "2", role:"admin"}

const Header = () => {
    const [isOpen,setIsOpen] = useState<boolean>(false)
    const logoutHandler = ()=>{
        setIsOpen(false)
    }
  return (
    <nav className="header">
        <Link onClick={()=> setIsOpen(false)} to="/">HOME</Link>
        <Link onClick={()=> setIsOpen(false)} to="/search"><FaSearch/></Link> 
        <Link onClick={()=> setIsOpen(false)} to="/cart"><FaShoppingBag/></Link> 
        {
            user?._id ? (
            <>
            <button onClick={()=> setIsOpen((prev)=>!prev)}>
                <FaUser/>
            </button>
            <dialog open={isOpen}>
                {user.role === "admin" && (
                    <ul><Link to="/admin/dashboard">Admin</Link></ul>
                )}
                <ul><Link to="/orders">Orders</Link></ul>
                <button onClick={logoutHandler}><FaSignOutAlt/></button>
            </dialog>
            </>
            ) : <Link to={"/login"}><FaSignInAlt/></Link>
        }
    </nav>
  )
}

export default Header