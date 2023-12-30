import Image from "next/image";
import { Spinner } from "../../../../components/Spinner";
import { PrismaClient } from "@prisma/client";
import { Product } from "./product";
import CustomerLayout from "../../components/layouts/customer";

const prisma = new PrismaClient();

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await getData(params.slug);
  return (
    <CustomerLayout>
      <div className="bg-white font-lora">
        {data.product ? <Product product={data.product} /> : <>no product</>}
      </div>
    </CustomerLayout>
  );
}

export async function getData(id: string) {
  const product = await prisma.product.findUnique({
    where: {
      id: id,
    },
    include: {
      images: {
        orderBy: {
          sequenceNumber: "asc",
        },
      },
    },
  });
  return {
    product,
  };
}
