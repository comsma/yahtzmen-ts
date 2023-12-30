// This is your test secret API key.
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const stripe = require("stripe")(process.env.STRIPE_SK);

interface RequestItemI {
  id: string;
  qty: number;
}

async function getItem(id: string) {
  return await prisma.product.findUnique({
    where: {
      id: id,
    },
    select: {
      name: true,
      price: true,
      description: true,
      images: {
        where: {
          sequenceNumber: 0,
        },
        take: 1,
      },
    },
  });
}

export default async function handlePost(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const requestedItems: RequestItemI[] = req.body.items;

  // Returns if user didn't provide items
  if (requestedItems == undefined || requestedItems?.length <= 0) {
    res.status(400);
    res.send("No items were provided");
    return;
  }

  let lineItems = [];

  // Retrieves items and their data from the database and appends a qty that the user requested

  for (const item of requestedItems) {
    const data = await getItem(item.id);

    if (data) {
      lineItems.push({
        price_data: {
          currency: "USD",
          product_data: {
            name: data.name,
            images: [data.images[0].imageUrl],
          },
          unit_amount: data.price * 100,
        },
        quantity: item.qty,
      });
    }
  }

  //Creates a stripe checkout session with provided items
  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    shipping_address_collection: { allowed_countries: ["US", "CA"] },
    shipping_options: [
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: { amount: 0, currency: "usd" },
          display_name: "Free shipping",
          delivery_estimate: {
            minimum: { unit: "business_day", value: 7 },
            maximum: { unit: "business_day", value: 14 },
          },
        },
      },
    ],
    mode: "payment",
    success_url: `${process.env.HOST_URL}Order/Success`,
    cancel_url: `${process.env.HOST_URL}Cart`,
  });

  res.send({ url: session.url });
}
