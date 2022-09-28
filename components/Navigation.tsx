import Image from "next/image";

const navigation = [
    {name: 'Shop', href: '/#shop'},
    {name: 'Collaborate', href: '/#collaborate'},
    {name: 'Mission', href: '/#mission'}
]

export default function Navigation() {

    return (
        <header className="bg-oxford-blue font-lora text-golden-rod sticky top-0 z-50">
            <nav className="mx-auto px-4 sm:px-6 lg:px-8 relative" aria-label="Top">
                <div className="m-auto py-3">
                    <div
                        className="grid grid-cols-1 grid-rows-2 gap-5 py-2 content-center justify-items-center h-20 m-auto w-full place-content-between lg:grid-cols-3 lg:grid-rows-1">
                        <div className={'hidden relative lg:flex'}>
                            <div className={'w-96'}>
                                <Image
                                    layout={'fill'}
                                    objectFit={'contain'}
                                    src="https://yahtzmen-storage.nyc3.cdn.digitaloceanspaces.com/name-logo.webp"
                                    alt="Yahtmen Furnishings"
                                />
                            </div>
                        </div>
                        <div className={'relative'}>
                            <div className={'w-96'}>
                                <Image
                                    layout={'fill'}
                                    objectFit={'contain'}
                                    src="https://yahtzmen-storage.nyc3.cdn.digitaloceanspaces.com/logo.webp"
                                    alt="Yahtzmen YF logo"
                                />
                            </div>

                        </div>
                        <div className="space-x-8 lg:inline-flex items-center">
                            {navigation.map((link) => (
                                <a key={link.name} href={link.href}
                                   className="py-3 font-light text-xl hover:text-orange-yellow-crayola">
                                    {link.name}
                                </a>
                            ))}
                            {/*<ShoppingBagIcon className={"h-5 w-5 text-accent"} />*/}
                        </div>
                    </div>
                    <div className="hidden flex-col justify-items-center justify-center p-10 lg:hidden">


                        <div className={"self-end"}>
                            {/*<ShoppingBagIcon className={"h-5 w-5 text-accent"} />*/}
                        </div>
                        {/*<div className={"pb-5"}>*/}
                        {/*    <a href="#" className={"w-70 py-3"}>*/}
                        {/*        <span className="sr-only">Workflow</span>*/}
                        {/*        <Image*/}
                        {/*            className="h-10 w-auto"*/}
                        {/*            src={name}*/}
                        {/*            alt=""*/}
                        {/*        />*/}
                        {/*    </a>*/}
                        {/*</div>*/}
                        <div className="space-x-8 flex justify-center border-t-2 border-accent ">
                            {navigation.map((link) => (
                                <a key={link.name} href={link.href}
                                   className="py-3 font-light hover:text-white">
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