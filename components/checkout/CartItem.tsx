import {CartItemI} from "../../interfaces/cart.interface";
import {MinusCircleIcon, PlusCircleIcon} from "@heroicons/react/20/solid";
import {TrashIcon} from "@heroicons/react/24/solid";
import {decrementItem, incrementItem, removeItem} from "../../features/cartSlice";
import Image from "next/image";
import {useAppDispatch} from "../../app/hooks";

export const CartItem =(item: CartItemI) => {
    const dispactch = useAppDispatch();
    return (
        <>
            <div className={'p-5 grid grid-cols-5 grid-rows-2 gap-x-4 bg-gray-200 rounded-xl'} key={item.itemId}>
                    <div className={'col-span-4 row-start-1 gap-x-4 flex flex-col justify-items-start'}>
                        <p className={'font-bold text-lg'}>{item.name}</p>
                        <p>${item.price}</p>
                    </div>
                    <div className={'col-span-4 row-start-2 flex flex-row'}>
                        <div className={'flex-1 flex flex-row place-items-center gap-x-6'}>
                            <MinusCircleIcon aria-label={`decrement ${item.name} quantity`} onClick={() => dispactch(decrementItem(item.itemId))} className={'w-10 h-10'} />
                            <p className={'px-5 text-lg bg-golden-rod rounded-md'}>{item.itemQty}</p>
                            <PlusCircleIcon  aria-label={`increment ${item.name} quantity`} onClick={() => dispactch(incrementItem(item.itemId))} className={'w-10 h-10'} />
                            <TrashIcon aria-label={`remove ${item.name} from cart`} className={'ml-auto mx-7 w-7 h-7 text-red-500'} onClick={() => dispactch(removeItem(item.itemId))}/>
                        </div>
                        <div className={'col-span-1'}>

                        </div>
                    </div>


                    <div className={'col-start-5 col-span-1 row-span-2 ml-auto relative min-h-80 w-full aspect-square rounded-md overflow-clip'}>
                        <Image
                            className={'object-center'}
                            fill={true}
                            src={item.itemImg}
                            alt={item.name}
                        />
                    </div>
            </div>
        </>
    )
}