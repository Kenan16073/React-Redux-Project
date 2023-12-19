import { Table } from "../Table";
import { useProductsGetQuery } from "../../store/products/productsApi";
import { Link, useParams } from "react-router-dom";
import { useProductsGetOneQuery } from "../store/products/productsApi"


export function Dashboard() {



    // const {id} = useParams()
    const { data, isLoading, isError } = useProductsGetQuery();
    // const { views, request } = useProductsGetOneQuery(id)





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
                            <Link to={`/modal/${item[0]}`} data-modal-target="static-modal" data-modal-toggle="static-modal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Views</Link>
                            <Link to={`/admin/edit/${item[0]}`} class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Edit</Link>
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





            <div id="static-modal" data-modal-backdrop="static" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative p-4 w-full max-w-2xl max-h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                ghygh
                            </h3>
                            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="static-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="p-4 md:p-5 space-y-4">
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                            </p>
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
