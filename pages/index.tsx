import type { NextPage } from 'next'
import Image from 'next/image'
import home1 from '/public/images/home/1.webp'
import home1Mobile from '/public/images/home/1m.webp'
import home2 from '/public/images/home/2.webp'
import home2Mobile from '/public/images/home/2m.webp'
import home3 from '/public/images/home/3.webp'
import home3Mobile from '/public/images/home/3m.webp'
import home4 from '/public/images/home/4.webp'
import home4Mobile from '/public/images/home/4m.webp'
import {ProductGrid} from "../components/ProductGrid";
import {useRouter} from "next/router";
import {cloudflareLoader} from "../helpers/cloudflare.image";


const Home: NextPage = () => {
    const router = useRouter()
    return (
        <div className={'bg-oxford-blue py-10 z-0'}>
            <div className={'font-lora max-w-5xl mx-auto px-5 lg:px-0'}>
                <div className={'my-10 rounded-lg overflow-hidden shadow-xl shadow-golden-rod/30 '}>
                    <div className="hidden relative aspect-[16/9] sm:flex">
                        <Image
                        src={home1}
                        loader={cloudflareLoader}
                        layout={'fill'}
                        objectFit={'contain'}
                        alt={"Thoughtfully Designed, Bespoke Furnishings for Modern Living."}
                    />
                    </div>
                    <div className="visible relative aspect-[11/16] sm:hidden">
                        <Image
                        src={home1Mobile}
                        loader={cloudflareLoader}
                        layout={'fill'}
                        objectFit={'cover'}
                        alt={"Thoughtfully Designed, Bespoke Furnishings for Modern Living."}
                        />
                    </div>
                </div>
                <div className={'my-10 rounded-lg overflow-hidden shadow-xl shadow-golden-rod/30 '}>
                    <div className="hidden relative aspect-[16/9] sm:flex">
                        <Image
                            src={home2}
                            loader={cloudflareLoader}
                            layout={'fill'}
                            objectFit={'contain'}
                            alt={"Thoughtfully Designed, Bespoke Furnishings for Modern Living."}
                        />
                    </div>
                    <div className="visible relative aspect-[11/16] sm:hidden">
                        <Image
                            src={home2Mobile}
                            loader={cloudflareLoader}
                            layout={'fill'}
                            objectFit={'cover'}
                            alt={"Thoughtfully Designed, Bespoke Furnishings for Modern Living."}
                        />
                    </div>
                </div>
                <div className={'rounded-lg overflow-hidden'}>
                    <ProductGrid />
                </div>
                <div className={'my-10 rounded-lg overflow-hidden shadow-xl shadow-golden-rod/30 '} id={'mission'}>
                    <div className="hidden relative aspect-[16/9] sm:block">
                        <Image
                            src={home3}
                            loader={cloudflareLoader}
                            layout={'fill'}
                            objectFit={'cover'}
                            alt={"Thoughtfully Designed, Bespoke Furnishings for Modern Living."}
                        />
                    </div>
                    <div className="visible relative aspect-[11/16] sm:hidden">
                        <Image
                            src={home3Mobile}
                            loader={cloudflareLoader}
                            layout={'fill'}
                            objectFit={'cover'}
                            alt={"Thoughtfully Designed, Bespoke Furnishings for Modern Living."}
                        />
                    </div>
                </div>
                <div className={'mt-10 rounded-lg overflow-clip shadow-xl shadow-golden-rod/30 bg-gray-100 '}>
                    <div
                        className={'hover:opacity-75 hover:cursor-pointer '}
                        id={'collaborate'} onClick={() => router.push('mailto:info@yahtzmen.com')}
                    >
                        <div className="hidden relative aspect-[16/9] sm:block">
                            <Image
                                src={home4}
                                loader={cloudflareLoader}
                                layout={'fill'}
                                objectFit={'cover'}
                                alt={"Thoughtfully Designed, Bespoke Furnishings for Modern Living."}
                            />

                        </div>
                        <div className="visible relative aspect-[8/16] sm:hidden">
                            <Image
                                src={home4Mobile}
                                loader={cloudflareLoader}
                                layout={'fill'}
                                objectFit={'cover'}
                                alt={"Thoughtfully Designed, Bespoke Furnishings for Modern Living."}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default Home
