import {NextPage} from "next";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";

import { Disclosure, RadioGroup, Tab } from '@headlessui/react'
import {ProductsI} from "../interfaces/product.interface";
import {ChevronDownIcon, ChevronUpIcon} from "@heroicons/react/24/solid";
import Image from "next/image";
import {useAppDispatch} from "../app/hooks";
import {addItem} from "../features/cartSlice";
import {Spinner} from "../components/Spinner";

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Product: NextPage =() => {
    const router = useRouter();
    const dispatch = useAppDispatch();

    const [product, setProduct] = useState<ProductsI>()



    function addToCart() {
        if (product) {
            dispatch(addItem({
                itemId: product.id,
                name: product.name,
                itemImg: product.images[0].imageUrl,
                itemQty: 1,
                price: product.price
            }))
        }
    }
    async function checkout(productId: string): Promise<void> {
        const res = await fetch('https://api.yahtzmen.com/order/checkout', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({'productId': productId})
        })
        const body = await res.json()
        window.location.href = body.url
    }

    useEffect(() => {
        if (router.isReady) {
            const { id } = router.query;
            fetch(`https://api.yahtzmen.com/product/id/${id}`).then(r => r.json()).then(r => setProduct(r))
        }
    }, [router.isReady])

    return (
        <div className="bg-white font-lora">
            {product?.images ?
            <div className={'grid grid-cols-1 lg:grid-cols-3 max-w-7xl m-auto'}>
                <div className={'col-span-2 my-5'}>
                    <Tab.Group as="div" className="col-span-1 mx-10 max-w-5xl flex flex-col-reverse items-stretch lg:flex-row">
                        {/* Image selector */}
                        <div className="w-full flex-none lg:w-20">
                            <Tab.List className="flex flex-row justify-around lg:flex-col ">
                                {product?.images.map((image) => (
                                    <Tab
                                        key={image.imageUrl}
                                        className="my-5 relative flex aspect-square max-h-20 h-12 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4 lg:h-20"
                                    >
                                        {(selected) => (
                                            <>
                                                <span className="sr-only"> {image.imageUrl} </span>
                                                <span className="absolute inset-0 overflow-hidden rounded-md">
                                                    <div className={'relative aspect-square'}>
                                                        <Image
                                                            src={image.imageUrl}
                                                            layout={'fill'}
                                                            objectFit={'cover'}
                                                            alt=""
                                                        />
                                                    </div>

                                            </span>
                                                <span
                                                    className={classNames(
                                                        selected ? 'ring-golden-rod' : 'ring-transparent',
                                                        'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2'
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            </>
                                        )}
                                    </Tab>
                                ))}
                            </Tab.List>
                        </div>
                        <Tab.Panels className="w-full h-full my-3 px-6 self-stretch justify-self-stretch">
                            {product?.images.map((image) => (
                                <Tab.Panel key={image.imageUrl}>
                                    <div className={'relative aspect-square rounded-lg overflow-clip'} >
                                        <Image
                                            src={image.imageUrl}
                                            alt={image.imageUrl}
                                            layout={'fill'}
                                            objectFit={'cover'}


                                        />
                                    </div>

                                </Tab.Panel>
                            ))}
                        </Tab.Panels>


                    </Tab.Group>
                </div>
                {/* Product info */}
                <div className="col-span-1 mx-auto max-w-2xl px-4 pt-10 flex flex-col ">
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product?.name}</h1>
                    <p className="py-3 text-3xl tracking-tight text-gray-900">${product?.price}</p>
                    <div className="py-10 flex flex-col">
                        <div className={'py-10'}>
                            <div className="space-y-6">
                                <p className="text-base text-gray-900 whitespace-pre-line">{product?.description}</p>
                            </div>
                        </div>
                        <div className={'self-center w-full'}>
                            <button onClick={() => addToCart()} className={'py-2 w-full py-2 my-5 text-center text-lg font-bold bg-oxford-blue text-golden-rod rounded-md hover:bg-golden-rod hover:text-white'}>Buy Now</button>
                        </div>
                        <div className={'my-5 border-t-2 border-gray-200'}>
                            <Disclosure>
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button className="flex w-full justify-between rounded-lg bg-golden-rod px-4 py-2 my-5  text-left text-sm font-medium text-black focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                            <span>Features</span>
                                            <ChevronDownIcon
                                                className={`${
                                                    open ? 'rotate-180 transform' : ''
                                                } h-5 w-5 text-black`}
                                            />
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                            <ul>
                                                {product?.features.map(feature => (
                                                    <li key={feature}>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                            {product?.notes ?
                            <Disclosure>
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button className="flex w-full justify-between rounded-lg bg-golden-rod px-4 py-2 my-5  text-left text-sm font-medium text-black focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                            <span>Notes</span>
                                            <ChevronDownIcon
                                                className={`${
                                                    open ? 'rotate-180 transform' : ''
                                                } h-5 w-5 text-black`}
                                            />
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                            <p className={'whitespace-pre-line'}>{product?.notes}</p>
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                                :
                                <></> }
                            <Disclosure>
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button className="flex w-full justify-between rounded-lg bg-golden-rod px-4 py-2 my-5  text-left text-sm font-medium text-black focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                            <span>Dimensions</span>
                                            <ChevronDownIcon
                                                className={`${
                                                    open ? 'rotate-180 transform' : ''
                                                } h-5 w-5 text-black`}
                                            />
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                            <p className={'whitespace-pre-line'}>{product?.dimensions}</p>
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        </div>

                    </div>
                </div>
            </div>
                :
            <div>
                <Spinner />
            </div>}
        </div>

    )
}
export default Product;