import { useParams } from "react-router-dom"
import { useProductsGetOneQuery } from "../store/products/productsApi";
import { LoadingPage } from "./LoadingPage";

export function ProductsDetail() {

    const { id } = useParams()

    const { data, isLoading } = useProductsGetOneQuery(id)




    return (


        <section className="overflow-hidden mt-[80px] h-screen bg-white py-11 font-poppins dark:bg-gray-900">
            {
                isLoading ? <LoadingPage/> : <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full mb-8 md:w-1/2 md:mb-0">
                            <div className="sticky top-0  overflow-hidden ">
                                <div className="relative mb-6 lg:mb-10 lg:h-2/4 ">
                                    <img src={data.link} alt=""
                                        className="object-cover w-full lg:h-full " />
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 md:w-1/2 ">
                            <div className="lg:pl-20">
                                <div className="mb-8 ">
                                    <h2 className="max-w-xl mb-6 text-2xl font-bold dark:text-gray-400 md:text-4xl">
                                        {data.title}</h2>
                                    <p className="inline-block mb-6 text-4xl font-bold text-gray-700 dark:text-gray-400 ">
                                        <span>{data.price}$</span>
                                    </p>
                                    <p className="max-w-md text-gray-700 dark:text-gray-400">
                                       {data.description}
                                    </p>
                                </div>
                                <div className="mb-8">
                                    <h2
                                        className="w-16 pb-1 mb-4 text-2xl font-bold border-b border-blue-300 dark:text-gray-400 dark:border-gray-600">
                                        Model</h2>
                                    <div className="flex flex-wrap  -mb-2">
                                        <h2
                                            className="pb-1 mb-4 text-1xl font-bold border-blue-300 dark:text-gray-400 dark:border-gray-600">
                                            {data.brand}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }

        </section>




        // <div className="max-w-screen-xl mx-auto">
        //     {
        //         isSuccess &&  <div>
        //         <h1 className="text-center text-3xl">
        //             {data.title}
        //         </h1>
        //         <p className="text-center">
        //             {data.description}
        //         </p>
        //     </div>
        //     }

        // </div>
    )
}
