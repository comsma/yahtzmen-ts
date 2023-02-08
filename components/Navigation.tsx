import Image from 'next/image'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { useAppSelector } from '../app/hooks'
import logo from '/public/images/logo.webp'
import name from '/public/images/name-logo.webp'

const navigation = [
    { name: 'Products', href: '/#product' },
    { name: 'Our Mission', href: '/#mission' },
    { name: 'Lets Collaborate', href: '/#collaborate' },
]

export default function Navigation() {
    const cart = useAppSelector((state) => state.items)
    return (
        <header className="sticky top-0 z-50 bg-blue-800 font-lora text-golden-rod">
            <nav className="relative px-4 sm:px-6 lg:px-8" aria-label="Top">
                <div className="py-3 ">
                    <div className="min-h-20 m-auto grid w-full grid-cols-3 grid-rows-2 gap-5 py-2 lg:grid-cols-7 lg:grid-rows-1">
                        <div
                            className={
                                'invisible mx-4 lg:visible lg:col-span-2'
                            }
                        >
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
                        <div
                            className={
                                'col-span-1 col-start-1 row-start-1 mx-4 lg:col-start-4'
                            }
                        >
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
                        <div className="col-span-3 row-start-2 mx-4 lg:col-span-2 lg:col-start-5 lg:row-start-1">
                            <div
                                className={
                                    'flex flex-row justify-center gap-x-6'
                                }
                            >
                                {navigation.map((link) => (
                                    <div
                                        className={'items-center'}
                                        key={link.name}
                                    >
                                        <Link
                                            href={link.href}
                                            className="hover:text-orange-yellow-crayola text-xs font-light md:text-base xl:text-lg"
                                        >
                                            {link.name}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div
                            className={
                                'col-span-1 col-start-3 row-start-1 mx-4 justify-self-center  lg:col-start-7 lg:justify-self-end'
                            }
                        >
                            <Link href={'/Cart'}>
                                <div className={'relative inline-block'}>
                                    <ShoppingCartIcon className={'h-7 w-7 '} />
                                    <span
                                        className={
                                            'absolute top-0 right-0 flex h-2 w-2 items-center justify-center rounded-full border-2 border-blue-800 bg-golden-rod p-[5px] text-[7px] font-bold text-blue-800'
                                        }
                                    >
                                        {cart.length}
                                    </span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
