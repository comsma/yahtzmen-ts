import { useAppSelector } from '../app/hooks'
import { NextPage } from 'next'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import { CartItem } from '../components/checkout/CartItem'
import { RequestItemI } from '../interfaces/cart.interface'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const Cart: NextPage = () => {
    const router = useRouter()
    const cart = useAppSelector((state) => state.items)
    const [subtotal, setSubtotal] = useState(0)

    async function loadSession(): Promise<void> {
        let request: RequestItemI[] = []
        for (const item of cart) {
            request.push({ id: item.itemId, qty: item.itemQty })
        }
        const response = await fetch('/api/createPaymentSession', {
            method: 'POST',
            body: JSON.stringify({
                items: request,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const stripeUrl = await response.json()

        if (stripeUrl.url) {
            await router.push(stripeUrl.url)
        }
    }

    useEffect(() => {
        let price = 0
        for (let item of cart) {
            price += item.price * item.itemQty
        }
        setSubtotal(price)
    }, [cart])

    if (cart.length >= 1)
        return (
            <div className={'min-h-screen'}>
                <h1 className={'mx-5 p-5 text-left text-5xl font-bold '}>
                    {' '}
                    Checkout{' '}
                </h1>
                <div className={'mx-5 grid grid-cols-4 items-start gap-5 p-5'}>
                    <div
                        className={
                            'col-span-full flex flex-col gap-y-5 lg:col-span-2'
                        }
                    >
                        {cart?.map((item) => (
                            <CartItem key={item.itemId} {...item} />
                        ))}
                    </div>
                    <div
                        className={
                            'col-span-full row-span-1 grid grid-cols-1 grid-rows-2 justify-center rounded-md bg-blue-800 text-golden-rod lg:col-span-1 lg:col-start-4'
                        }
                    >
                        <div
                            className={
                                'col-span-1 row-span-1 mx-auto flex items-center gap-x-8 text-gray-200 '
                            }
                        >
                            <div>
                                <span className={'font-3xl font-bold'}>
                                    Subtotal:
                                </span>
                            </div>
                            <div>
                                <span className={'font-lg font-normal'}>
                                    ${subtotal}
                                </span>
                            </div>
                        </div>
                        <div className={'mx-auto mt-auto'}>
                            <button
                                className={
                                    'mx-auto my-5 rounded-md border-2 border-golden-rod bg-golden-rod py-2 px-10 text-center text-lg font-bold text-blue-800 hover:bg-blue-800 hover:text-white'
                                }
                                onClick={() => loadSession()}
                            >
                                Start Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )

    return (
        <div
            className={
                'flex min-h-[70vh] items-center  justify-center bg-blue-800  text-white'
            }
        >
            <div className={'flex flex-col items-center gap-y-10 '}>
                <h1 className={'font-xl text-center font-bold leading-loose'}>
                    Your cart is empty... Check out some of our products
                </h1>
                <ShoppingBagIcon className={'w-20'} />
            </div>
        </div>
    )
}

export default Cart
