import {useAppDispatch, useAppSelector} from "../app/hooks";
import {NextPage} from "next";
import {Fragment} from "react";
import {TrashIcon} from "@heroicons/react/24/solid";
import {removeItem} from "../features/cartSlice";
import {MinusCircleIcon, PlusCircleIcon} from "@heroicons/react/20/solid";
import Image from "next/image";
import {ShoppingBagIcon} from "@heroicons/react/24/outline";

const Checkout: NextPage =() => {
    const cart = useAppSelector(state => state.items)
    const dispactch = useAppDispatch();

    if (cart.length >= 1) return (
        <div className={'min-h-screen'}>
            <h1 className={'py-5 font-bold text-3xl text-center '}> Checkout </h1>
            {cart?.map((item) => (
                <div className={'mx-auto my-5 p-5 max-w-3xl grid grid-cols-5 grid-rows-1 bg-gray-200 rounded-xl'} key={item.itemId}>
                    <div className={'col-span-3 grid grid-cols-3 place-items-center'}>
                        <div className={'col-span-1'}>
                            <p>{item.name}</p>
                        </div>
                        <div className={'col-span-1 grid grid-cols-3 place-items-center'}>
                            <MinusCircleIcon className={'w-5 h-5'} />
                            <p>{item.itemQty}</p>
                            <PlusCircleIcon className={'w-5 h-5'} />
                        </div>
                        <div className={'col-span-1'}>
                            <TrashIcon className={'w-4 h-4'} onClick={() => dispactch(removeItem(item.itemId))}/>
                        </div>
                    </div>

                    <div className={'col-start-4 col-span-1 ml-auto relative min-h-80 w-full aspect-square rounded-md overflow-clip'}>
                        <Image
                            layout={'fill'}
                            objectFit={'cover'}
                            src={item.itemImg}
                            alt={item.name}
                        />
                    </div>


                </div>
            ))}
        </div>
    )

    return (
        <div className={'flex justify-center items-center  bg-oxford-blue text-white  min-h-[70vh]'}>
            <div className={'flex flex-col items-center gap-y-10 '}>
                <h1 className={'font-xl font-bold leading-loose text-center'}>Your cart is empty... Check out some of our products</h1>
                <ShoppingBagIcon className={'w-20'} />
            </div>
        </div>
    )
}

export default Checkout