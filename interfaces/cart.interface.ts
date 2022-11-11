
interface CartI {
    items: CartItemI[]
}

interface CartItemI {
    itemId: string,
    name: string,
    itemQty: number,
    itemImg: string,
    price: number
}

export type {CartI, CartItemI}