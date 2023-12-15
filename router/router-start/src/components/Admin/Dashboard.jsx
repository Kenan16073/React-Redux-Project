import { Table } from "../Table";
import { useProductsGetQuery } from "../../store/products/productsApi";

export function Dashboard() {




    const { data, isLoading, isError } = useProductsGetQuery();

    let content;

    if (isLoading) {
        content =

            <>


<div className="border border-blue-300 shadow rounded-md p-4 w-[100%] w-full ">
                <div className="animate-pulse flex ">
                    <div className="flex-1  py-1">
                            <div className="h-2 w-48 bg-slate-700 rounded"></div>
                    </div>
                    <div className="flex-1  py-1">
                            <div className="h-2 w-48 bg-slate-700 rounded"></div>
                    </div>
                    <div className="flex-1  py-1">
                            <div className="h-2 w-48 bg-slate-700 rounded"></div>
                    </div>
                    <div className="flex-1  py-1">
                            <div className="h-2 w-48 bg-slate-700 rounded"></div>
                    </div>
                    <div className="flex-1  py-1">
                            <div className="h-2 w-48 bg-slate-700 rounded"></div>
                    </div>
                    <div className="flex-1  py-1">
                            <div className="h-2 w-48 bg-slate-700 rounded"></div>
                    </div>
                </div>
            </div>

                {/* <div role="status" class="w-[100%] p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
                    <div class="flex items-center justify-between">
                        <div>
                            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-[100%] mb-2.5"></div>
                            <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                        </div>
                        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                    </div>
                    <div class="flex items-center justify-between pt-4">
                        <div>
                            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                            <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                        </div>
                        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                    </div>
                    <div class="flex items-center justify-between pt-4">
                        <div>
                            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                            <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                        </div>
                        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                    </div>
                    <div class="flex items-center justify-between pt-4">
                        <div>
                            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                            <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                        </div>
                        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                    </div>
                    <div class="flex items-center justify-between pt-4">
                        <div>
                            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                            <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                        </div>
                        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                    </div>
                    <span class="sr-only">Loading...</span>
                </div> */}

            </>

    } else if (isError) {
        content = 'Error'
    } else {
        let productsArr = Object.entries(data);
        content =
            <tbody>

                {productsArr.map((item, index) => (
                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {item[0]}
                        </th>
                        <td className="px-6 py-4">
                            {item[1].title}
                        </td>
                        <td className="px-6 py-4">
                            {item[1].price}
                        </td>
                        <td className="px-6 py-4">
                            {item[1].brand}
                        </td>
                        <td className="px-6 py-4">
                            {item[1].status ? "Active" : 'Deactive'}
                        </td>
                        <td className="flex justify-evenly  py-4">
                            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Views</button>
                            <button type="button" class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Update</button>
                            <button type="button" class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
                        </td>

                    </tr>
                ))}





            </tbody>
    }




    const tableHead = [
        {
            name: 'Id'
        },
        {
            name: 'Title'
        },
        {
            name: 'Price'
        },
        {
            name: 'Brand'
        },
        {
            name: 'Status'
        },
        {
            name: 'Options'
        },
    ]



    return (
        <>

            <h1 className="text-center text-3xl"> Product List</h1>
            <div className="relative overflow-x-auto mt-8">
                <Table tableHead={tableHead}>
                    {content}
                </Table>
            </div>




           





        </>
    )
}
