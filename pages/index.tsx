import type {NextPage} from 'next'
import Image from 'next/image'
import home1 from '../public/images/home/1.webp'
import home2 from '../public/images/home/2.webp'
import home3 from '../public/images/home/3.webp'

const products = [
    {"name": "Lamp", "images": [{"img": "1.jpg"}, {"img": "2.jpg"}]},
    {"name": "Desk", "images": [{"img": "1.jpg"}, {"img": "2.jpg"}]},


]
const Home: NextPage = () => {
    return (<>
            <div className="w-px-[300] h-screen relative">
                <Image src={home1}
                       layout={'fill'}
                       objectFit={'cover'}
                       alt={"Thoughtfully Designed, Bespoke Furnishings for Modern Living."}/>
                <div
                    className={'absolute z-20 bg-opacity-70 bg-black top-1/4 left-1/2 -translate-x-1/2 p-5 w-3/4 lg:bg-opacity-0 lg:left-1/4 lg:w-auto font-book-antiqua text-golden-rod text-2xl tracking-wide lg:text-4xl'}>
                    <p className={'ml-0 leading-loose'}>Thoughtfully Designed,</p>
                    <p className={'ml-10 leading-loose'}>Bespoke Furnishings for</p>
                    <p className={'ml-20 leading-loose'}>Modern Living.</p>
                </div>

            </div>
            <div className="w-screen h-screen relative">
                <Image src={home2}
                       layout={'fill'}
                       objectFit={'cover'}
                       alt={"Thoughtfully Designed, Bespoke Furnishings for Modern Living."}/>
            </div>
            <div className="bg-white">
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Products</h2>

                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {products?.map((product) => (
                            <div key={product.name} className="group relative">
                                <div
                                    className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                    <img
                                        src={product.images[0].img}
                                        alt={product.name}
                                        className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                    />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm font-book-antiqua text-gray-700">
                                            <a href={product.name}>
                                                <span aria-hidden="true" className="absolute inset-0"/>
                                                {product.name}
                                            </a>
                                        </h3>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">{product.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-screen h-screen relative">
                <Image src={home3}
                       layout={'fill'}
                       objectFit={'cover'}
                       alt={"Thoughtfully Designed, Bespoke Furnishings for Modern Living."}/>
            </div>
        </>


    )
}

export default Home
