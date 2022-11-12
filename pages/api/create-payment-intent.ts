// This is your test secret API key.
import {NextApiRequest, NextApiResponse} from "next";
import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();

const stripe = require("stripe")(process.env.STRIPE_SK);

interface itemI {
    id: string
    qty: number
}

const calculateOrderAmount = async (items: itemI[]) => {
    let total = 0;
    for (let item of items) {
        const price  = await prisma.product.findUnique({
            where: {
                id: item.id
            },
            select: {
                price: true
            }
        });
        if(price){
            total += (price.price * item.qty);
        }
    }
    return total * 100
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { items } = req.body;

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
        // amount: calculateOrderAmount(items),
        amount: await calculateOrderAmount([{
            id: '63409af754b0887f268737c4', qty: 2
        }, { id: '6340d565b5956526236b6eae', qty: 3}]),
        currency: "usd",
        automatic_payment_methods: {
            enabled: true,
        },
    });

    res.send({
        clientSecret: paymentIntent.client_secret,
    });
};