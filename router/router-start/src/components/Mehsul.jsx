import { useEffect, useState } from "react";
import axios from 'axios'
import { Cards } from "./Cards";



export function Mehsul() {

    const [post, setPost] = useState([])

    async function getProducts() {
        const { data } = await axios.get('https://fakestoreapi.com/products')
        setPost(data)

    }

    useEffect(() => {
        getProducts();
    }, [])


    return (
        <div className="max-w-screen-xl mx-auto">

            <div className=" flex flex-wrap justify-between mt-[20px] gap-y-5">
                {
                    post.map(item => (
                        <Cards key={item.id} item={item} />
                    ))
                }
            </div>
        </div>


    );
}
