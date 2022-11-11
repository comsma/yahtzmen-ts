import { PrismaClient } from '@prisma/client'
import {NextApiRequest, NextApiResponse} from "next";
const prisma = new PrismaClient()

const products = async (req: NextApiRequest, res: NextApiResponse) => {
    const products = await prisma.product.findMany({
        select: {
            id: true,
            name: true,
            price: true,
            images: {
                take: 1
            }
        }
    });
    return res.json(products);

}

export default products;

export const config = {
    runtime: 'experimental-edge',
};


