import {NextApiRequest, NextApiResponse} from "next";
import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient()

interface productRequestI extends NextApiRequest{
    query: {
        productId: string
    }
}
export default async function handler(req: productRequestI, res: NextApiResponse) {
    const product = await prisma.product.findUnique({
        where: {
            id: req.query.productId
        },
        include: {
            images: {
                orderBy: {
                    sequenceNumber: 'asc'
                }
            }
        }
    })
    return res.json(product)

}