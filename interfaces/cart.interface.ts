
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

interface RequestItemI {
    id: string,
    qty: number
}

export type {CartI, CartItemI, RequestItemI}