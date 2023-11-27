import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {Home} from "./components/Home"
import {About} from "./components/About"
import { Contact } from "./components/Contact"
import { Header } from "./components/Header"
import { Mehsul } from "./components/Mehsul"
import { ProductsDetail } from "./components/ProductsDetail"
import { Register } from "./components/Auth/Register"
import Login from "./components/Auth/Login"

export default function App() {
  return (
    <>
    <Router>
      <Header/>



      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/products" element={<Mehsul/>} />
        <Route path="/detail/:id" element={<ProductsDetail/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>




    </Router>
    </>
  )
}
