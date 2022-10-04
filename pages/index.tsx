import type {NextPage} from 'next'
import Image from 'next/image'
import home1 from '../public/images/home/1.webp'
import home2 from '../public/images/home/2.webp'
import home3 from '../public/images/home/3.webp'
import home4 from '../public/images/home/4.webp'
import {useState} from "react";
import {ProductsI} from "../interfaces/product.interface";

const Home: NextPage = () => {
    const [products, setProducts] = useState<ProductsI[]>()
    fetch('http://localhost:3005/product/list', {method: 'GET'})
        .then((r) => r.json()).then(r => setProducts(r))

    return (<div className={'font-lora'}>
            <div className="w-full aspect-[9/16] overflow-hidden relative object-left md:aspect-[16/9]">
                <Image
                    src={home1}
                    alt={"Thoughtfully Designed, Bespoke Furnishings for Modern Living."}
                    layout="fill"
                    objectPosition={"left"}
                    objectFit="cover"
                />
                <div
                    className={'absolute z-20 flex flex-col justify-start top-0 bottom-0 p-5 w-full lg:w-1/2 text-golden-rod text-2xl tracking-wide lg:p-20 lg:justify-center'}>
                    <div className={'text-4xl text-center leading-loose lg:text-left'}>
                        <p>Thoughtfully Designed,</p>
                        <p>Bespoke Furnishings for</p>
                        <p>Modern Living.</p>
                    </div>
                </div>
            </div>
            <div className="w-full aspect-[9/16] overflow-hidden relative object-left md:aspect-[16/9] ">
                <Image
                    src={home2}
                    alt={"Thoughtfully Designed, Bespoke Furnishings for Modern Living."}
                    layout="fill"
                    objectPosition={"left"}
                    objectFit="cover"
                />
                <div
                    className={'absolute z-20 top-0 bottom-0 p-5 w-full mt-40 lg:w-1/2 text-golden-rod text-2xl tracking-wide lg:p-20 '}>
                    <p className={'leading-loose text-center bottom-5'}>All our Products are Made to Order and Hand Crafted from the Finest Materials.</p>
                </div>

            </div>
            {/*<div className="w-screen h-screen relative">*/}
            {/*    <Image src={home2}*/}
            {/*           layout={'fill'}*/}
            {/*           objectFit={'cover'}*/}
            {/*           alt={"Thoughtfully Designed, Bespoke Furnishings for Modern Living."}/>*/}
            {/*</div>*/}
            <div className="bg-white" id={"shop"}>
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Products</h2>

                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
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
            <div className="w-full aspect-[9/16] overflow-hidden relative object-left md:aspect-[16/9] " id={"collaborate"}>
                <Image
                    src={home3}
                    alt={"Thoughtfully Designed, Bespoke Furnishings for Modern Living."}
                    layout="fill"
                    objectPosition={"left"}
                    objectFit="cover"
                />
                <div
                    className={'absolute z-20 flex flex-col justify-end top-0 bottom-0 p-5 w-full lg:w-1/2 font-book-antiqua text-golden-rod text-2xl tracking-wide lg:p-20 lg:justify-center'}>
                    <div>
                        <h1 className={'text-4xl'}>Let's Collaborate.</h1>
                        <div className={'pl-5 pt-5 text-2xl leading-loose'}>
                            <p>If your looking to create something
                                custom or if your interested in modifing
                                one of our existing products so best fits
                                your design.

                            </p>
                            <br />
                            <p>Please contact us,</p>
                            <p>we would love to work with you.</p>
                        </div>
                    </div>


                </div>

            </div>
            <div className="w-full h-screen relative object-left  " id={"mission"}>
                <Image
                    src={home4}
                    alt={"Thoughtfully Designed, Bespoke Furnishings for Modern Living."}
                    layout="fill"
                    objectPosition={"left"}
                />
                <div
                    className={'absolute flex flex-col justify-end z-20 bg-opacity-50 bg-black top-0 bottom-0 p-5 lg:w-auto font-book-antiqua text-golden-rod text-2xl tracking-wide lg:p-20 lg:justify-center'}>
                    <div className={'text-xl lg:text-2xl lg:w-3/4 self-center'}>
                        <h1 className={'text-4xl'}>Our Mission</h1>
                        <br />
                        <p className={'mleading-relaxed text-xl lg:leading-loose'}>
                            Yathzmen furnishings was started to fulfill a need to create,
                            to build something of quality, by hand and share it with
                            others. Our mission is to love what we do and do what we
                            love. To grow this company so we can share our designs
                            and craftsmanship with our clients around the world. When
                            you buy a product of ours your not buying something mass
                            produced, its created for you. By doing this your getting
                            something special that was made just for you.
                        </p>
                        <br />
                        <p className={'leading-loose font-bold'}>Paul Pilewski</p>
                        <p className={'leading-loose'}>Owner and Artisan of Yahtzmen Furnishings</p>
                    </div>

                </div>

            </div>
        </div>


    )
}

export default Home
