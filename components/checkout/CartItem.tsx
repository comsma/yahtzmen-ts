import { CartItemI } from '../../interfaces/cart.interface'
import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/20/solid'
import { TrashIcon } from '@heroicons/react/24/solid'
import { decrementItem, incrementItem, removeItem } from '../../features/cartSlice'
import Image from 'next/image'
import { useAppDispatch } from '../../app/hooks'

export const CartItem = (item: CartItemI) => {
    const dispactch = useAppDispatch()
    return (
        <>
            <div
                className={
                    'grid grid-cols-2 grid-rows-4 gap-x-4 rounded-xl bg-gray-200 p-5 md:grid-rows-2'
                }
                key={item.itemId}
            >
                <div
                    className={
                        'col-span-1 row-span-1 row-start-1 flex flex-col justify-items-start gap-x-4 sm:col-span-4'
                    }
                >
                    <p className={'text-lg font-bold'}>{item.name}</p>
                    <p>${item.price}</p>
                </div>
                <div
                    className={
                        'col-span-2 row-start-4 flex flex-row lg:col-span-4 lg:col-start-1 lg:row-start-2'
                    }
                >
                    <div
                        className={
                            'flow flex flex-1 flex-row place-items-center gap-x-6'
                        }
                    >
                        <MinusCircleIcon
                            aria-label={`decrement ${item.name} quantity`}
                            onClick={() =>
                                dispactch(decrementItem(item.itemId))
                            }
                            className={'h-[19px]'}
                        />
                        <p className={'rounded-md bg-golden-rod px-5 text-lg'}>
                            {item.itemQty}
                        </p>
                        <PlusCircleIcon
                            aria-label={`increment ${item.name} quantity`}
                            onClick={() =>
                                dispactch(incrementItem(item.itemId))
                            }
                            className={'h-[19px]'}
                        />
                        <TrashIcon
                            aria-label={`remove ${item.name} from cart`}
                            className={'mx-7 ml-auto h-[19px] text-red-500'}
                            onClick={() => dispactch(removeItem(item.itemId))}
                        />
                    </div>
                    <div className={'col-span-1'}></div>
                </div>

                <div
                    className={
                        'relative col-span-2 col-start-1 row-span-2 row-start-2 mx-auto aspect-square h-40 self-center overflow-clip rounded-md lg:col-span-1 lg:col-start-5 lg:row-span-2 lg:row-start-1'
                    }
                >
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
