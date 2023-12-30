"use client";

import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Disclosure, Tab } from "@headlessui/react";
import Image from "next/image";
import classNames from "../../../lib/helpers";
import AddToCart from "@/lib/redux/features/cart/addToCart";

export function Product({
  product,
}: {
  product: {
    id: string;
    name: string;
    images: { imageUrl: string }[];
    description: string;
    price: number;
    notes: string | null;
    features: [string];
    dimensions: string;
  };
}) {
  return (
    <div className={"m-auto grid max-w-7xl grid-cols-1 lg:grid-cols-3"}>
      <div className={"col-span-2 my-5"}>
        <Tab.Group
          as="div"
          className="col-span-1 mx-10 flex max-w-5xl flex-col-reverse items-stretch lg:flex-row"
        >
          {/* Image selector */}
          <div className="w-full flex-none lg:w-20">
            <Tab.List className="flex flex-row justify-around lg:flex-col ">
              {product.images.map((image) => (
                <Tab
                  key={image.imageUrl}
                  className="relative my-5 flex aspect-square h-12 max-h-20 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4 lg:h-20"
                >
                  {(selected) => (
                    <>
                      <span className="sr-only"> {image.imageUrl} </span>
                      <span className="absolute inset-0 overflow-hidden rounded-md">
                        <div className={"relative aspect-square"}>
                          <Image
                            src={image.imageUrl}
                            width={100}
                            height={100}
                            alt=""
                          />
                        </div>
                      </span>
                      <span
                        className={classNames(
                          selected ? "ring-golden-rod" : "ring-transparent",
                          "pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2",
                        )}
                        aria-hidden="true"
                      />
                    </>
                  )}
                </Tab>
              ))}
            </Tab.List>
          </div>
          <Tab.Panels className="my-3 h-full w-full self-stretch justify-self-stretch px-6">
            {product.images.map((image) => (
              <Tab.Panel key={image.imageUrl}>
                <div
                  className={"relative aspect-square overflow-clip rounded-lg"}
                >
                  <Image
                    className={"object-contain"}
                    sizes="500px"
                    fill
                    src={image.imageUrl}
                    alt={image.imageUrl}
                  />
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
      <div className="col-span-1 mx-auto flex max-w-2xl flex-col px-4 pt-10 ">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          {product.name}
        </h1>
        <p className="py-3 text-3xl tracking-tight text-gray-900">
          ${product.price}
        </p>
        <div className="flex flex-col py-10">
          <div className={"py-10"}>
            <div className="space-y-6">
              <p className="whitespace-pre-line text-base text-gray-900">
                {product.description}
              </p>
            </div>
          </div>
          <div className={"w-full self-center"}>
            <AddToCart className={
              "my-5 w-full rounded-md bg-blue-800 py-2 py-2 text-center text-lg font-bold text-golden-rod hover:bg-golden-rod hover:text-white"
            } product={{id: product.id, name: product.name, price: product.price, }}>
              Add to Cart
            </AddToCart>

          </div>
          <div className={"my-5 border-t-2 border-gray-200"}>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="my-5 flex w-full justify-between rounded-lg bg-golden-rod px-4 py-2  text-left text-sm font-medium text-black focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>Features</span>
                    <ChevronDownIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-black`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    <ul>
                      {product.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {product.notes ? (
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="my-5 flex w-full justify-between rounded-lg bg-golden-rod px-4 py-2  text-left text-sm font-medium text-black focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span>Notes</span>
                      <ChevronDownIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-black`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                      <p className={"whitespace-pre-line"}>{product.notes}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ) : (
              <></>
            )}
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="my-5 flex w-full justify-between rounded-lg bg-golden-rod px-4 py-2  text-left text-sm font-medium text-black focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>Dimensions</span>
                    <ChevronDownIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-black`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    <p className={"whitespace-pre-line"}>
                      {product.dimensions}
                    </p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </div>
    </div>
  );
}
