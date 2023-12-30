"use client";
import { useAppDispatch } from "../../../../../app_redux/hooks";
import { addItem } from "@/lib/redux";
import classNames from "@/lib/helpers";

export default function AddToCart({
  product,
  children,
  className
}: {
  product: {
    id: string;
    name: string;
    image: string;
    qty: number;
    price: number;
  };
  children: React.ReactNode;
  className: string
}) {
  const dispatch = useAppDispatch();
  function add() {
    dispatch(
      addItem({
        id: product.id,
        image: product.image,
        qty: 1,
        price: product.price,
        name: product.name,
      }),
    );
  }
  return <button className={className} onClick={add}>{children}</button>;
}
