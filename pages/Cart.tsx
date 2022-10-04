import {NextPage} from "next";

const products = [
    {
        id: 1,
        name: 'High Wall Tote',
        href: '#',
        price: '$210.00',
        color: 'White and black',
        size: '15L',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/checkout-page-07-product-01.jpg',
        imageAlt: 'Front of zip tote bag with white canvas, white handles, and black drawstring top.',
    },
    {
        id: 1,
        name: 'High Wall Tote',
        href: '#',
        price: '$210.00',
        color: 'White and black',
        size: '15L',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/checkout-page-07-product-01.jpg',
        imageAlt: 'Front of zip tote bag with white canvas, white handles, and black drawstring top.',
    },
    // More products...
]

const Cart: NextPage =() => {
    return(
        <div className="bg-white font-lora">
            {/* Background color split screen for large screens */}
            <main className="relative mx-auto grid max-w-7xl grid-cols-1 gap-x-16 ">
                <h1 className="sr-only">Checkout</h1>

                <section
                    aria-labelledby="summary-heading"
                    className="pt-6 pb-12 text-oxford-blue"
                >
                    <div className="mx-auto max-w-2xl px-4">
                        <h2 id="summary-heading" className="sr-only">
                            Order summary
                        </h2>

                        <dl>
                            <dt className="text-sm font-medium">Amount due</dt>
                            <dd className="mt-1 text-3xl font-bold tracking-tight">$232.00</dd>
                        </dl>

                        <ul role="list" className="divide-y divide-white divide-opacity-10 text-sm font-medium">
                            {products.map((product) => (
                                <li key={product.id} className="flex items-start space-x-4 py-6">
                                    <img
                                        src={product.imageSrc}
                                        alt={product.imageAlt}
                                        className="h-20 w-20 flex-none rounded-md object-cover object-center"
                                    />
                                    <div className="flex-auto space-y-1">
                                        <h3 className="font-bold">{product.name}</h3>
                                        <p>{product.color}</p>
                                        <p>{product.size}</p>
                                    </div>
                                    <p className="flex-none text-base font-medium">{product.price}</p>
                                </li>
                            ))}
                        </ul>

                        <dl className="space-y-6 border-t border-white border-opacity-10 pt-6 text-sm font-medium">
                            <div className="flex items-center justify-between">
                                <dt>Subtotal</dt>
                                <dd>$570.00</dd>
                            </div>

                            <div className="flex items-center justify-between">
                                <dt>Shipping</dt>
                                <dd>$25.00</dd>
                            </div>

                            <div className="flex items-center justify-between">
                                <dt>Taxes</dt>
                                <dd>$47.60</dd>
                            </div>

                            <div className="flex items-center justify-between border-t border-white border-opacity-10 pt-6">
                                <dt className="text-base">Total</dt>
                                <dd className="text-base">$642.60</dd>
                            </div>
                            <form action="http://localhost:3005/order/checkout" method="POST">
                                <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
                                    <div className="mt-10 flex justify-center border-t border-gray-200 pt-6">
                                        <button
                                            type="submit"
                                            className="rounded-md border border-transparent bg-golden-rod py-2 px-8 text-sm font-medium text-white shadow-sm hover:bg-oxford-blue focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                                        >
                                            Pay now
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </dl>
                    </div>
                </section>

                <section
                    aria-labelledby="payment-and-shipping-heading"
                    className="py-16 "
                >

                </section>
            </main>
        </div>
    )
}
export default Cart;