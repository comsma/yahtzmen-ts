import Image from "next/image";
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import Link from "next/link";
import {useAppSelector} from "../app/hooks";
import logo from '/public/images/logo.webp'
import name from '/public/images/name-logo.webp'
const navigation = [
    {name: 'Products', href: '/#product'},
    {name: 'Our Mission', href: '/#mission'},
    {name: 'Lets Collaborate', href: '/#collaborate'},
]

export default function Navigation() {
    const cart = useAppSelector(state => state.items)
    return (
        <header className="bg-blue-800 font-lora text-golden-rod top-0 sticky z-50">
            <nav className="px-4 sm:px-6 lg:px-8 relative" aria-label="Top">
                <div className="py-3 ">
                    <div className="grid grid-cols-3 grid-rows-2 gap-5 py-2 min-h-20 m-auto w-full lg:grid-cols-7 lg:grid-rows-1">

                        <div className={'mx-4 invisible lg:visible lg:col-span-2'}>
                            <Link href={'/'}>
                                <div className={'relative h-full'}>
                                    <Image
                                        className={'object-contain'}
                                        fill={true}
                                        src={name}
                                        alt="Yahtzmen YF logo"
                                    />
                                </div>
                            </Link>
                        </div>
                        <div className={'mx-4 row-start-1 col-start-1 col-span-1 lg:col-start-4'}>
                            <Link href={'/'}>
                                <div className={'relative h-full'}>
                                    <Image
                                        className={'object-contain'}
                                        fill={true}
                                        src={logo}
                                        alt="Yahtzmen YF logo"
                                    />
                                </div>
                            </Link>
                        </div>
                        <div className="mx-4 col-span-3 row-start-2 lg:col-span-2 lg:row-start-1 lg:col-start-5">
                            <div className={'flex flex-row justify-center gap-x-6'}>
                                {navigation.map((link) => (
                                    <div className={'items-center'} key={link.name}>
                                        <Link href={link.href}
                                              className="text-xs font-light hover:text-orange-yellow-crayola md:text-base xl:text-lg">
                                            {link.name}
                                        </Link>
                                    </div>

                                ))}
                            </div>
                        </div>
                        <div className={'mx-4 justify-self-center col-start-3 row-start-1 col-span-1  lg:col-start-7 lg:justify-self-end'}>
                            <Link href={'/Cart'}>
                                <div className={'relative inline-block'}>
                                    <ShoppingCartIcon className={'h-7 w-7 '}/>
                                    <span className={'absolute top-0 right-0 h-2 w-2 p-[5px] flex items-center justify-center bg-golden-rod text-blue-800 text-[7px] font-bold rounded-full border-2 border-blue-800'}>{cart.length}</span>

                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}