export interface ProductsI {
    id: string,
    name: string,
    description: string,
    price: number,
    images:  productImages[]
}
interface productImages {
    imageUrl: string
}