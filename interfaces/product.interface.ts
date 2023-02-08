export interface ProductsI {
    id: string
    name: string
    description: string
    price: number
    images: productImages[]
    features: string[]
    notes: string
    dimensions: string
}
interface productImages {
    imageUrl: string
}
