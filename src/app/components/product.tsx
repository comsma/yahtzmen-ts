import Link from "next/link";
import Image from "next/image";

export default async function ProductPreview({
  product,
}: {
  product: { id: string; name: string; image: string; price: number };
}) {
  return (
    <div key={product.name} className="group relative">
      <Link href={`/product/${product.id}`}>
        <div>
          <div className="relative aspect-[1/1] overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
            <Image fill={true} src={product.image} alt={product.name} />
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="font-book-antiqua text-sm text-gray-700">
                <span aria-hidden="true" className="absolute inset-0" />
                {product.name}
              </h3>
            </div>
            <p className="text-sm font-medium text-gray-900">
              ${product.price}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
