import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handle(
    req: NextApiRequest,
    res: NextApiResponse
) {
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
    })
    return res.json(products)
}
