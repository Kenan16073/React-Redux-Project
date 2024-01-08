import { useProductsGetQuery } from "../store/products/productsApi"
import { Cards } from "./Cards";
import { LoadingPage } from "./LoadingPage";




export function Mehsul() {

    const { data, isLoading, isError } = useProductsGetQuery();


    let responseData;


    if (isLoading) {
        responseData = <LoadingPage />
    } else if (isError) {
        responseData = 'error'
    } else {

        let productsArr = Object.entries(data).filter(item => {
            return item[1].status === "true";
        });

        responseData = (
            <div className=" flex flex-wrap justify-between mt-[20px] gap-y-5">

                {
                    productsArr.map(item => (
                        <Cards key={item[0]} id={item[0]} item={item[1]} />
                    ))
                }
            </div>
        )
    }



    return (
        <div className="mt-[80px]">
            <h1 className="text-center text-3xl">Products</h1>
            <div className="max-w-screen-xl   mx-auto">
                {responseData}
            </div>
        </div>

    );
}
