import Image from "next/image";
import home1 from "/public/images/home/1.webp";
import home1Mobile from "/public/images/home/1m.webp";
import home2 from "/public/images/home/2.webp";
import home2Mobile from "/public/images/home/2m.webp";
import OurMission from "/public/images/home/OurMission.jpg";
import OurMissionMobile from "/public/images/home/OurMissionMobile.jpg";
import LetCollaborate from "/public/images/home/LetsCollaborate.jpg";
import LetCollaborateMobile from "/public/images/home/LetsCollaborateMobile.jpg";
import CustomerLayout from "./components/layouts/customer";
import { PrismaClient } from "@prisma/client";
import ProductPreview from "./components/product";

const prisma = new PrismaClient();

export default async function Home() {
  const data = await getData();
  return (
    <CustomerLayout>
      <div className={"z-0 bg-blue-800 py-10"}>
        <div className={"mx-auto max-w-5xl px-5 font-lora lg:px-0"}>
          <div className={"overflow-hidden rounded-lg  "}>
            <div className="relative hidden aspect-[16/9] sm:flex">
              <Image
                src={home1}
                alt={
                  "Thoughtfully Designed, Bespoke Furnishings for Modern Living."
                }
              />
            </div>
            <div className="visible relative aspect-[11/16] sm:hidden">
              <Image
                src={home1Mobile}
                alt={
                  "Thoughtfully Designed, Bespoke Furnishings for Modern Living."
                }
              />
            </div>
          </div>
          <div className={"my-10 overflow-hidden rounded-lg"}>
            <div className="relative hidden aspect-[16/9] sm:flex">
              <Image
                src={home2}
                alt={
                  "Thoughtfully Designed, Bespoke Furnishings for Modern Living."
                }
              />
            </div>
            <div className="visible relative aspect-[11/16] sm:hidden">
              <Image
                src={home2Mobile}
                alt={
                  "Thoughtfully Designed, Bespoke Furnishings for Modern Living."
                }
              />
            </div>
          </div>
          <div className={"overflow-hidden rounded-lg"}>
            <div className="bg-white" id={"product"}>
              <div className="mx-auto max-w-2xl py-4 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="mt-6">
                  <h2 className="my-10 py-2 text-center text-4xl font-extrabold tracking-tight text-gray-900">
                    Products
                  </h2>

                  <div
                    className={
                      "grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8"
                    }
                  >
                    {data.products.map((product) => (
                      <div key={product.id}>
                        <ProductPreview
                          product={{
                            id: product.id,
                            name: product.name,
                            image: product.images[0].imageUrl,
                            price: product.price,
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/*<ProductGrid />*/}
          </div>
          <div className={"my-10 overflow-hidden rounded-lg  "} id={"mission"}>
            <div className="relative hidden aspect-[16/9] sm:block">
              <Image
                src={OurMission}
                alt={
                  "Thoughtfully Designed, Bespoke Furnishings for Modern Living."
                }
              />
            </div>
            <div className="visible relative aspect-[11/16] sm:hidden">
              <Image
                src={OurMissionMobile}
                alt={
                  "Thoughtfully Designed, Bespoke Furnishings for Modern Living."
                }
              />
            </div>
          </div>
          <div className={"mt-10 overflow-hidden rounded-lg"}>
            <a
              className={"hover:cursor-pointer hover:opacity-75 "}
              id={"collaborate"}
              href={"mailto:info@yahtzmen.com"}
            >
              <div className="relative hidden aspect-[16/9] sm:block">
                <Image
                  src={LetCollaborate}
                  alt={
                    "Thoughtfully Designed, Bespoke Furnishings for Modern Living."
                  }
                />
              </div>
              <div className="visible relative aspect-[8/16] sm:hidden">
                <Image
                  src={LetCollaborateMobile}
                  alt={
                    "Thoughtfully Designed, Bespoke Furnishings for Modern Living."
                  }
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </CustomerLayout>
  );
}

export async function getData() {
  const products = await prisma.product.findMany({
    select: {
      id: true,
      name: true,
      price: true,
      images: {
        where: {
          sequenceNumber: 0,
        },
        take: 1,
      },
    },
  });
  return { products };
}
