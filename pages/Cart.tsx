import {useAppSelector} from "../app/hooks";
import {NextPage} from "next";
import {ShoppingBagIcon} from "@heroicons/react/24/outline";
import {CartItem} from "../components/checkout/CartItem";
import {RequestItemI} from "../interfaces/cart.interface";
import {useRouter} from "next/router";



const Cart: NextPage =() => {
    const router = useRouter();
    const cart = useAppSelector(state => state.items)

    async function loadSession(): Promise<void> {
        let request: RequestItemI[] = []
        for(const item of cart){
            request.push({id: item.itemId, qty: item.itemQty})
        }
        const response = await fetch('/api/createPaymentSession', {
            method: 'POST',
            body: JSON.stringify({
                'items': request
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const stripeUrl = await response.json()

        if(stripeUrl.url) {
            await router.push(stripeUrl.url);
        }

    }


    if (cart.length >= 1) return (
        <div className={'min-h-screen'}>
            <h1 className={'py-5 font-bold text-3xl text-center '}> Checkout </h1>
            <div className={'mx-5 p-5 grid grid-cols-3 gap-5 items-start'}>
                <div className={'col-span-3 flex flex-col gap-y-5 lg:col-span-2'}>
                    {cart?.map((item) => (
                        <CartItem key={item.itemId} {...item} />
                    ))}
                </div>
                <div className={'col-span-3 min-h-[50vh] bg-blue-800 text-golden-rod rounded-md flex flex-col items-center lg:col-span-1'}>
                    {/*TODO: Properly calculate cart total*/}
                    <div>
                        <span>Subtotal</span>
                        <span>$100</span>

                    </div>
                    <div className={'mt-auto'}>
                        <button className={'mx-auto py-2 px-10 my-5 text-center text-blue-800 text-lg font-bold bg-golden-rod rounded-md hover:bg-blue-800 hover:text-white'}
                                onClick={() => loadSession()}>
                            Start Checkout
                        </button>
                    </div>
                </div>
            </div>


        </div>
    )

    return (
        <div className={'flex justify-center items-center  bg-blue-800 text-white  min-h-[70vh]'}>
            <div className={'flex flex-col items-center gap-y-10 '}>
                <h1 className={'font-xl font-bold leading-loose text-center'}>Your cart is empty... Check out some of our products</h1>
                <ShoppingBagIcon className={'w-20'} />
            </div>
        </div>
    )
}

export default Cart