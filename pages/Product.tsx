import {NextPage} from "next";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {ProductsI} from "../interfaces/product.interface";

const Product: NextPage =() => {
    const router = useRouter();

    const [product, setProduct] = useState<ProductsI>()

    useEffect(() => {
        if (router.isReady) {
            const { id } = router.query;
            fetch(`http://localhost:3005/product/id/${id}`).then(r => r.json()).then(r => setProduct(r))
        }
    }, [router.isReady])

    return (
        <div className="bg-white font-lora">
            <main className="py-10 sm:pt-16">
                {/* Product info */}
                <div className="mx-auto max-w-2xl px-4 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16">
                    <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product?.name}</h1>
                    </div>
                    <div className="mt-4 lg:row-span-3 lg:mt-0">
                        <h2 className="sr-only">Product information</h2>
                        <p className="text-3xl tracking-tight text-gray-900">${product?.price}</p>


                    </div>
                    <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
                        <div>
                            <h3 className="sr-only">Description</h3>

                            <div className="space-y-6">
                                <p className="text-base text-gray-900">{product?.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Image gallery */}
                <div className="grid grid-cols-1 gap-y-5 mx-auto mt-6 max-w-2xl sm:px-6 lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 px-8">
                    <div className="aspect-w-3 aspect-h-4 block overflow-hidden rounded-lg ">
                        <img
                            src={product?.images[0].imageUrl}
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                    <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                        <img
                            src={product?.images[1].imageUrl}
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                    <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                        <img
                            src={product?.images[2].imageUrl}
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                </div>



            </main>
        </div>
    )
}
export default Product;