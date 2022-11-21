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
            <div className={'p-5 grid grid-cols-2 grid-rows-4 gap-x-4 bg-gray-200 rounded-xl md:grid-rows-2'} key={item.itemId}>
                    <div className={'col-span-1 row-span-1 row-start-1 gap-x-4 flex flex-col justify-items-start sm:col-span-4'}>
                        <p className={'font-bold text-lg'}>{item.name}</p>
                        <p>${item.price}</p>
                    </div>
                    <div className={'col-span-2 row-start-4 flex flex-row lg:row-start-2 lg:col-span-4 lg:col-start-1'}>
                        <div className={'flex-1 flex flex-row flow place-items-center gap-x-6'}>
                            <MinusCircleIcon aria-label={`decrement ${item.name} quantity`} onClick={() => dispactch(decrementItem(item.itemId))} className={'h-[19px]'} />
                            <p className={'px-5 text-lg bg-golden-rod rounded-md'}>{item.itemQty}</p>
                            <PlusCircleIcon  aria-label={`increment ${item.name} quantity`} onClick={() => dispactch(incrementItem(item.itemId))} className={'h-[19px]'} />
                            <TrashIcon aria-label={`remove ${item.name} from cart`} className={'ml-auto mx-7 h-[19px] text-red-500'} onClick={() => dispactch(removeItem(item.itemId))}/>
                        </div>
                        <div className={'col-span-1'}>

                        </div>
                    </div>


                    <div className={'mx-auto col-start-1 col-span-2 row-start-2 row-span-2 self-center relative h-40 aspect-square rounded-md overflow-clip lg:row-start-1 lg:col-span-1 lg:col-start-5 lg:row-span-2'}>
                        <Image
                            className={'object-contain'}
                            fill={true}
                            src={item.itemImg}
                            alt={item.name}
                        />
                    </div>
            </div>
        </>
    )
}