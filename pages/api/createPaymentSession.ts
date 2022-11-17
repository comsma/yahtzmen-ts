// This is your test secret API key.
import {NextApiRequest, NextApiResponse} from "next";
import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();

const stripe = require("stripe")(process.env.STRIPE_SK);

interface RequestItemI {
    id: string,
    qty: number
}

async function getItem(id: string) {
    return await prisma.product.findUnique({
        where: {
            id: id
        },
        select: {
            name: true,
            price: true,
            description: true,
            images: {
                where: {
                    sequenceNumber: 0
                },
                take: 1
            }
        },
    })
}

export default async function handlePost(req: NextApiRequest, res: NextApiResponse) {
    const requestedItems: RequestItemI[] = req.body.items;

    // Returns if user didn't provide items
    if (requestedItems == undefined || requestedItems?.length <= 0) {
        res.status(400)
        res.send('No items were provided')
        return
    }

    let lineItems = [];

    // Retrieves items and their data from the database and appends a qty that the user requested

    for(const item of requestedItems){

        const data = await getItem(item.id);

        if(data) {
            lineItems.push({
                price_data: {
                    currency: 'USD',
                    product_data: {
                        name: data.name,
                        images: [data.images[0].imageUrl]
                    },
                    unit_amount: data.price,
                },
                quantity: item.qty
            })
        }
    }

    //Creates a stripe checkout session with provided items
    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: 'https://example.com/success',
        cancel_url: 'https://yahtzmen.com/Cart',
    })

    res.send( { 'url': session.url });
};