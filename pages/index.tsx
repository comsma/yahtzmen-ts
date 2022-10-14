import type {NextPage} from 'next'
import Image from 'next/future/image'
import home1 from '/public/images/home/1.webp'
import home1Mobile from '/public/images/home/1m.webp'
import home2 from '/public/images/home/2.webp'
import home2Mobile from '/public/images/home/2m.webp'
import home3 from '/public/images/home/3.webp'
import home3Mobile from '/public/images/home/3m.webp'
import home4 from '/public/images/home/4.webp'
import home4Mobile from '/public/images/home/4m.webp'
import {useEffect, useState} from "react";
import {ProductsI} from "../interfaces/product.interface";

const Home: NextPage = () => {
    const [products, setProducts] = useState<ProductsI[]>()

    useEffect(() => {
        fetch('https://api.yahtzmen.com/product/list', {method: 'GET'})
            .then((r) => r.json()).then(r => setProducts(r))
    }, [])
    return (
        <div className={'font-lora max-w-5xl m-auto'}>
            <div className="hidden w-full lg:block">
                <Image
                    src={home1}
                    className={'h-auto w-full'}
                    alt={"Thoughtfully Designed, Bespoke Furnishings for Modern Living."}
                    sizes={'100vw'}
                />
            </div>
            <div className="visible w-full lg:hidden">
                <Image
                    src={home1Mobile}
                    className={'h-auto w-full'}
                    alt={"Thoughtfully Designed, Bespoke Furnishings for Modern Living."}
                    sizes={'100vw'}
                />
            </div>
            <div className="hidden w-full lg:block">
                <Image
                    src={home2}
                    className={'h-auto w-full'}
                    alt={"Thoughtfully Designed, Bespoke Furnishings for Modern Living."}
                    sizes={'100vw'}
                />
            </div>
            <div className="visible w-full lg:hidden">
                <Image
                    src={home2Mobile}
                    className={'h-auto w-full'}
                    alt={"Thoughtfully Designed, Bespoke Furnishings for Modern Living."}
                    sizes={'100vw'}
                />
            </div>
            <div className="bg-white" id={"products"}>
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Products</h2>

                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                        {products?.map((product) => (
                            <div key={product.name} className="group relative">
                                <div
                                    className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                    <img
                                        src={product.images[0]?.imageUrl}
                                        alt={product.name}
                                        className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                    />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm font-book-antiqua text-gray-700">
                                            <a href={'/Product?id=' + product.id}>
                                                <span aria-hidden="true" className="absolute inset-0"/>
                                                {product.name}
                                            </a>
                                        </h3>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">${product.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div id={'mission'}>
                <div className="hidden w-full lg:block">
                    <Image
                        src={home3}
                        className={'h-auto w-full'}
                        alt={"Thoughtfully Designed, Bespoke Furnishings for Modern Living."}
                        sizes={'100vw'}
                    />
                </div>
                <div className="visible w-full lg:hidden">
                    <Image
                        src={home3Mobile}
                        className={'h-auto w-full'}
                        alt={"Thoughtfully Designed, Bespoke Furnishings for Modern Living."}
                        sizes={'100vw'}
                    />
                </div>
            </div>
            <div id={'collaborate'}>
                <div className="hidden w-full lg:block">
                    <a href={'mailto:info@yahtzmen.com'}>
                        <Image
                            src={home4}
                            className={'h-auto w-full'}
                            alt={"Thoughtfully Designed, Bespoke Furnishings for Modern Living."}
                            sizes={'100vw'}
                        />
                    </a>

                </div>
                <div className="visible w-full lg:hidden">
                    <a href={'mailto:info@yahtzmen.com'}>
                        <Image
                            src={home4Mobile}
                            className={'h-auto w-full'}
                            alt={"Thoughtfully Designed, Bespoke Furnishings for Modern Living."}
                            sizes={'100vw'}
                        />
                    </a>
                </div>
            </div>
            </div>



    )
}

export default Home
