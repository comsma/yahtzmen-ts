import Image from "next/image";
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import Link from "next/link";
const navigation = [
    {name: 'Products', href: '/#products'},

    {name: 'Our Mission', href: '/#mission'},
    {name: 'Lets Collaborate', href: '/#collaborate'},
]

export default function Navigation() {

    return (
        <header className="bg-oxford-blue font-lora text-golden-rod sticky top-0 z-50">
            <nav className="mx-auto px-4 sm:px-6 lg:px-8 relative" aria-label="Top">
                <div className="m-auto py-3">
                    <div
                        className="grid grid-cols-1 grid-rows-2 gap-5 py-2 content-center justify-items-center h-20 m-auto w-full place-content-between lg:grid-cols-3 lg:grid-rows-1">
                        <div className={'hidden relative lg:flex'}>
                            <div className={'w-96 cursor-pointer'}>
                                <Link href={'/'}>
                                    <Image
                                        layout={'fill'}
                                        objectFit={'contain'}
                                        src="https://yahtzmen-storage.nyc3.cdn.digitaloceanspaces.com/name-logo.webp"
                                        alt="Yahtmen Furnishings"
                                    />
                                </Link>

                            </div>
                        </div>
                        <div className={'relative'}>
                            <div className={'w-96 cursor-pointer'}>
                                <Link href={'/'}>
                                    <Image
                                        layout={'fill'}
                                        objectFit={'contain'}
                                        src="https://yahtzmen-storage.nyc3.cdn.digitaloceanspaces.com/logo.webp"
                                        alt="Yahtzmen YF logo"
                                    />
                                </Link>
                            </div>

                        </div>
                        <div className="space-x-8 lg:inline-flex items-center">
                            {navigation.map((link) => (
                                <a key={link.name} href={link.href}
                                   className="py-3 font-light text-md hover:text-orange-yellow-crayola md:text-lg lg:text-xl">
                                    {link.name}
                                </a>
                            ))}
                        </div>

                    </div>
                </div>
            </nav>
        </header>
    )
}