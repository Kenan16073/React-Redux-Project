import { Table } from "../Table";
import { useProductsGetQuery } from "../../store/products/productsApi";
import { Link } from "react-router-dom";


export function Dashboard() {

    const { data, isLoading, isError } = useProductsGetQuery();

    let content;

    if (isLoading) {
        content =
            <>
                <td colSpan={6}  >
                    <div role="status" className="w-[100%] p-6  border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
                        <div className="flex  justify-evenly">
                            <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                            <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                            <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                            <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                            <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                            <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                        </div>
                        <span className="sr-only">Loading...</span>
                    </div>
                    <div role="status" className="w-[100%] p-6  border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
                        <div className="flex  justify-evenly">
                            <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                            <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                            <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                            <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                            <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                            <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                        </div>
                        <span className="sr-only">Loading...</span>
                    </div>
                    <div role="status" className="w-[100%] p-6  border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
                        <div className="flex  justify-evenly">
                            <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                            <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                            <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                            <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                            <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                            <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                        </div>
                        <span className="sr-only">Loading...</span>
                    </div>
                    <div role="status" className="w-[100%] p-6  border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
                        <div className="flex  justify-evenly">
                            <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                            <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                            <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                            <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                            <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                            <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                        </div>
                        <span className="sr-only">Loading...</span>
                    </div>
                    <div role="status" className="w-[100%] p-6  border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
                        <div className="flex  justify-evenly">
                            <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                            <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                            <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                            <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                            <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                            <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                        </div>
                        <span className="sr-only">Loading...</span>
                    </div>
                    <div role="status" className="w-[100%] p-6  border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
                        <div className="flex  justify-evenly">
                            <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                            <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                            <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                            <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                            <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                            <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                        </div>
                        <span className="sr-only">Loading...</span>
                    </div>
                    <div role="status" className="w-[100%] p-6  border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
                        <div className="flex  justify-evenly">
                            <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                            <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                            <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                            <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                            <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                            <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                        </div>
                        <span className="sr-only">Loading...</span>
                    </div>
                    <div role="status" className="w-[100%] p-6  border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
                        <div className="flex  justify-evenly">
                            <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                            <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                            <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                            <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                            <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                            <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                        </div>
                        <span className="sr-only">Loading...</span>
                    </div>
                    <div role="status" className="w-[100%] p-6  border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
                        <div className="flex  justify-evenly">
                            <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                            <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                            <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                            <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                            <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                            <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                        </div>
                        <span className="sr-only">Loading...</span>
                    </div>
                </td>
            </>
    } else if (isError) {
        content = 'Error'
    } else {
        let productsArr = Object.entries(data);
        content =
            <tbody>

                {productsArr.map((item, index) => (
                    <>
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
                                <button  type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Views</button>
                                <Link to={`/admin/edit/${item[0]}`} class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Update</Link>
                                <button type="button" class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
                            </td>

                        </tr>
                    </>




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
