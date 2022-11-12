import Image from "next/image";
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import Link from "next/link";
import {useAppSelector} from "../app/hooks";
import {cloudflareLoader} from "../helpers/cloudflare.image";
const navigation = [
    {name: 'Products', href: '/#product'},
    {name: 'Our Mission', href: '/#mission'},
    {name: 'Lets Collaborate', href: '/#collaborate'},
]

export default function Navigation() {
    const cart = useAppSelector(state => state.items)
    return (
        <header className="bg-oxford-blue font-lora text-golden-rod top-0 sticky z-50">
            <nav className="mx-auto px-4 sm:px-6 lg:px-8 relative" aria-label="Top">
                <div className="m-auto py-3 ">
                    <div
                        className="grid grid-cols-1 grid-rows-3 justify-items-center gap-5 py-2 min-h-20 m-auto w-full lg:grid-cols-7 lg:grid-rows-1"
                    >
                        <div className={'hidden col-span-3 lg:flex'}>
                            <Link href={'/'}>
                                <div className={'relative w-96'}>
                                    <Image
                                        objectFit={'contain'}
                                        layout={'fill'}
                                        src={`${process.env.publicCdn}/name-logo.webp`}
                                        alt="Yahtmen Furnishings"
                                    />
                                </div>
                            </Link>
                        </div>
                        <div className={'flex col-start-0 col-span-1 lg:col-start-4'}>
                            <Link href={'/'}>
                                <div className={'relative w-96'}>
                                    <Image
                                        objectFit={'contain'}
                                        layout={'fill'}
                                        src={`${process.env.publicCdn}/logo.webp`}
                                        alt="Yahtzmen YF logo"
                                    />
                                </div>
                            </Link>
                        </div>
                        <div className="col-span-1 row-start-2 lg:col-span-2 lg:row-start-1 lg:col-start-5">
                            <div className={'flex flex-row gap-x-6'}>
                                {navigation.map((link) => (
                                    <div className={'items-center'} key={link.name}>
                                        <Link href={link.href}
                                              className="py-3 font-light text-md hover:text-orange-yellow-crayola md:text-lg lg:text-xl">
                                            {link.name}
                                        </Link>
                                    </div>

                                ))}
                            </div>
                        </div>
                        <div className={'col-start-0 row-start-3 col-span-1 lg:row-start-1 lg:col-start-7'}>
                            <Link href={'/Checkout'}>
                                <div className={'relative inline-block'}>
                                    <ShoppingCartIcon className={'h-10 w-10 '}/>
                                    <span className={'absolute top-0 right-0 h-4 w-4 p-2 flex items-center justify-center bg-golden-rod text-oxford-blue text-[10px] font-bold rounded-full border-2 border-oxford-blue'}>{cart.length}</span>

                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}