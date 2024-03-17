import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { lazy,Suspense } from "react"
import Loader from "./components/Loader"
 

const Home = lazy(()=>import ("./pages/Home"))
const Cart = lazy(()=> import("./pages/Cart"))

const App = () => {
  return (
    <Router>
      {}
      <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      </Suspense>
    </Router>
  )
}

export default App