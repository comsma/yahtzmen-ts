import { ProductsI } from "../interfaces/product.interface";
import useSWR from "swr";
import Link from "next/link";
import Image from "next/image";
import { fetcher } from "../helpers/fetcher";

export const ProductGrid = () => {
  const { data, error } = useSWR<ProductsI[]>("/api/product", fetcher);

  return (
    <div className="bg-white" id={"product"}>
      <div className="mx-auto max-w-2xl py-4 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-6">
          {error ? (
            <div className={"col-span-3 text-center"}>
              <h1 className={"text-lg"}>Could not load products</h1>
              <p className={"text-sm font-light"}>{error.message}</p>
            </div>
          ) : (
            <> </>
          )}
          {data ? (
            <>
              <h2 className="my-10 py-2 text-center text-4xl font-extrabold tracking-tight text-gray-900">
                Products
              </h2>

              <div
                className={
                  "grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8"
                }
              >
                {data?.map((product) => (
                  <div key={product.name} className="group relative">
                    <Link href={`/Product?id=${product.id}`}>
                      <div>
                        <div className="relative aspect-[1/1] overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
                          <Image
                            fill={true}
                            src={product.images[0].imageUrl}
                            alt={product.name}
                          />
                        </div>
                        <div className="mt-4 flex justify-between">
                          <div>
                            <h3 className="font-book-antiqua text-sm text-gray-700">
                              <span
                                aria-hidden="true"
                                className="absolute inset-0"
                              />
                              {product.name}
                            </h3>
                          </div>
                          <p className="text-sm font-medium text-gray-900">
                            ${product.price}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};
