import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react";

export function ProductsDetail() {

    const {id} = useParams()

    const [detail,setDetail] = useState({})

    async function getDetailProducts(){
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id);
        setDetail(data);
    }

    useEffect(()=>{
        getDetailProducts();
    },[])



    return (
        <div className="max-w-screen-xl mx-auto">
            <div>
                <h1 className="text-center text-3xl">
                    {detail.title}
                </h1>
                <p className="text-center">
                    {detail.body}
                </p>
            </div>
        </div>
    )
}
