import { useDispatch } from "react-redux"
import { testApi } from "../store/products/productsSlice"
import { useEffect } from "react"



export function About() {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(testApi())
  },[])

  return (
    <div className="max-w-screen-xl mx-auto text-center">About</div>
  )
}
