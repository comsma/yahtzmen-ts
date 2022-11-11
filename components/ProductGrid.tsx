import {ProductsI} from "../interfaces/product.interface";
import useSWR from 'swr'
import Link from "next/link";
import Image from 'next/image'

const fetcher = (url: RequestInfo | URL) => fetch(url).then((res) => res.json());

export const ProductGrid =() => {
    const { data, error } = useSWR<ProductsI[]>('https://api.yahtzmen.com/product/list', fetcher)
    if (error) return <div>An error occured.</div>
    if (!data) return <div>Loading ...</div>

    return(
        <div className="bg-white" id={"product"}>
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Products</h2>
                <div
                    className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    {data?.map((product) => (
                        <div key={product.name} className="group relative">
                            <Link href={`/Product?id=${product.id}`}>
                                <div>
                                    <div
                                        className="relative w-full min-h-80 bg-gray-200 aspect-square rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                        <Image
                                            src={product.images[0].imageUrl}
                                            alt={product.name}
                                            layout={'fill'}
                                            objectFit={'cover'}
                                        />
                                    </div>
                                    <div className="mt-4 flex justify-between">
                                        <div>
                                            <h3 className="text-sm font-book-antiqua text-gray-700">
                                                <span aria-hidden="true" className="absolute inset-0"/>
                                                {product.name}
                                            </h3>
                                        </div>
                                        <p className="text-sm font-medium text-gray-900">${product.price}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}