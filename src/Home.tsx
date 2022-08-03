import home1 from "./assets/home-1.jpg";
import pone from "./assets/products/01.jpg";
import ptwo from "./assets/products/02.jpg";
import pthree from "./assets/products/03.jpg";

const products = [
    {
        id: 1,
        name: 'Plant',
        href: '/product',
        imageSrc: pone,
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 2,
        name: 'Chair',
        href: '/product',
        imageSrc: ptwo,
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 3,
        name: 'Cabinent',
        href: '/product',
        imageSrc: pthree,
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    // More products...
]

export default function Home(){
    return(
        <div>
            <div className="w-full h-7000 bg-gray-200 flex justify-center items-center">
                <div className="bg-gray-400 w-full h-screen relative z-0">
                    <img src={home1} height={"screen"}  width={"100%"} className={"h-screen object-cover"} />
                    <div className="absolute inset-0 flex justify-end pr-20 items-center z-10">
                        <div className="max-w-sm bg-white rounded-md overflow-hidden shadow-lg">
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                                    <p className="text-gray-700 text-base">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia,
                                        nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                    </p>
                                </div>
                                <div className="px-6 pt-4 pb-5">
                                    <button className={"mt-8 w-full bg-primary border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"}>View Product</button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white">
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Products</h2>

                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {products.map((product) => (
                            <div key={product.id} className="group relative">
                                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                    <img
                                        src={product.imageSrc}
                                        alt={product.imageAlt}
                                        className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                    />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-gray-700">
                                            <a href={product.href}>
                                                <span aria-hidden="true" className="absolute inset-0" />
                                                {product.name}
                                            </a>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">{product.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

)
}