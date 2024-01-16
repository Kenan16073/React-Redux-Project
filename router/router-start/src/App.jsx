import { HashRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./components/Home"
import { About } from "./components/About"
import { Contact } from "./components/Contact"
import { Header } from "./components/Header"
import { Mehsul } from "./components/Mehsul"
import { ProductsDetail } from "./components/ProductsDetail"
import { Register } from "./components/Auth/Register"
import Login from "./components/Auth/Login"
import { useEffect, useContext } from "react";
import { commonContext } from "./context/common-mode"
import { RequareAuth } from "./components/RequareAuth"
import { Add } from "./components/Admin/Add"
import { Dashboard } from "./components/Admin/Dashboard"
import { Edit } from "./components/Admin/Edit"
import { Error } from "./components/404"
import { Footer } from "./components/Footer"

export default function App() {


  const { mode } = useContext(commonContext);

  useEffect(() => {
    if (mode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, []);



  return (
    <>
      <Router>
        <Header />

        {/* public rote */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Mehsul />} />
          <Route path="/detail/:id" element={<ProductsDetail />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />

          {/* private rote */}
          <Route element={<RequareAuth />}>
            <Route path="/admin/add" element={<Add/>}/>
            <Route path="/admin/edit/:id" element={<Edit/>}/>
            <Route path="/admin/dashboard" element={<Dashboard/>}/>
          </Route>
        </Routes>

        <Footer/>
      </Router>
    </>
  )
}
