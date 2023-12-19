import { useParams } from "react-router-dom"
import { useProductsGetOneQuery } from "../store/products/productsApi"



export function Modal() {

    const { id } = useParams()
    const { data, isLoading, isError } = useProductsGetOneQuery(id)



    let content;

    if (isLoading) {
        content = 'loading'
    } else if (isError) {
        content = 'error'
    } else {
        let productsArr = Object.entries(data);
        content =
            {
            
            productsArr.map((index, item) => (

            ))
        }
}





return (
        
    )
}
