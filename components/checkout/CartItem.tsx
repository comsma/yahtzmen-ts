import {CartItemI} from "../../interfaces/cart.interface";
import {MinusCircleIcon, PlusCircleIcon} from "@heroicons/react/20/solid";
import {TrashIcon} from "@heroicons/react/24/solid";
import {decrementItem, incrementItem, removeItem} from "../../features/cartSlice";
import Image from "next/image";
import {useAppDispatch} from "../../app/hooks";
import {ReactPropTypes} from "react";

export const CartItem =(item: CartItemI) => {
    const dispactch = useAppDispatch();
    return (
        <>
            <div className={'mx-auto my-5 p-5 max-w-3xl grid grid-cols-5 grid-rows-1 bg-gray-200 rounded-xl'} key={item.itemId}>
                <div className={'col-span-3 grid grid-cols-3 place-items-center'}>
                    <div className={'col-span-1'}>
                        <p>{item.name}</p>
                    </div>
                    <div className={'col-span-1 grid grid-cols-3 place-items-center'}>
                        <MinusCircleIcon onClick={() => dispactch(decrementItem(item.itemId))} className={'w-5 h-5'} />
                        <p>{item.itemQty}</p>
                        <PlusCircleIcon onClick={() => dispactch(incrementItem(item.itemId))} className={'w-5 h-5'} />
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
        </>
    )
}