import { NextPage } from "next";
import { useRouter } from "next/router";

import { Disclosure, Tab } from "@headlessui/react";
import { ProductsI } from "../interfaces/product.interface";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useAppDispatch } from "../app_redux/hooks";
import { addItem } from "../features/cartSlice";
import { Spinner } from "../components/Spinner";
import useSWR from "swr";
import { fetcher } from "../helpers/fetcher";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Product: NextPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR<ProductsI>(`/api/product/${id}`, fetcher);

  function addToCart() {
    if (data) {
      dispatch(
        addItem({
          itemId: data.id,
          name: data.name,
          itemImg: data.images[0].imageUrl,
          itemQty: 1,
          price: data.price,
        }),
      );
    }
  }
  async function checkout(productId: string): Promise<void> {
    const res = await fetch("https://api.yahtzmen.com/order/checkout", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ productId: productId }),
    });
    const body = await res.json();
    window.location.href = body.url;
  }

  return (
    <div className="bg-white font-lora">
      {data?.images ? (
        <div className={"m-auto grid max-w-7xl grid-cols-1 lg:grid-cols-3"}>
          <div className={"col-span-2 my-5"}>
            <Tab.Group
              as="div"
              className="col-span-1 mx-10 flex max-w-5xl flex-col-reverse items-stretch lg:flex-row"
            >
              {/* Image selector */}
              <div className="w-full flex-none lg:w-20">
                <Tab.List className="flex flex-row justify-around lg:flex-col ">
                  {data?.images.map((image) => (
                    <Tab
                      key={image.imageUrl}
                      className="relative my-5 flex aspect-square h-12 max-h-20 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4 lg:h-20"
                    >
                      {(selected) => (
                        <>
                          <span className="sr-only"> {image.imageUrl} </span>
                          <span className="absolute inset-0 overflow-hidden rounded-md">
                            <div className={"relative aspect-square"}>
                              <Image src={image.imageUrl} fill={true} alt="" />
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
                {data?.images.map((image) => (
                  <Tab.Panel key={image.imageUrl}>
                    <div
                      className={
                        "relative aspect-square overflow-clip rounded-lg"
                      }
                    >
                      <Image
                        src={image.imageUrl}
                        alt={image.imageUrl}
                        fill={true}
                      />
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>
          </div>
          {/* Product info */}
          <div className="col-span-1 mx-auto flex max-w-2xl flex-col px-4 pt-10 ">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {data?.name}
            </h1>
            <p className="py-3 text-3xl tracking-tight text-gray-900">
              ${data?.price}
            </p>
            <div className="flex flex-col py-10">
              <div className={"py-10"}>
                <div className="space-y-6">
                  <p className="whitespace-pre-line text-base text-gray-900">
                    {data?.description}
                  </p>
                </div>
              </div>
              <div className={"w-full self-center"}>
                <button
                  onClick={() => addToCart()}
                  className={
                    "my-5 w-full rounded-md bg-blue-800 py-2 py-2 text-center text-lg font-bold text-golden-rod hover:bg-golden-rod hover:text-white"
                  }
                >
                  Add to Cart
                </button>
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
                          {data?.features.map((feature) => (
                            <li key={feature}>{feature}</li>
                          ))}
                        </ul>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                {data?.notes ? (
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
                          <p className={"whitespace-pre-line"}>{data?.notes}</p>
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
                          {data?.dimensions}
                        </p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Spinner />
        </div>
      )}
    </div>
  );
};
export default Product;
