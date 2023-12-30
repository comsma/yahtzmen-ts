import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import CustomerLayout from "../../components/layouts/customer";

export default function Cart() {
  return (
    <CustomerLayout>
      <div
        className={
          "flex min-h-[70vh] items-center  justify-center bg-blue-800  text-white"
        }
      >
        <div className={"flex flex-col items-center gap-y-10 "}>
          <h1 className={"font-xl text-center font-bold leading-loose"}>
            Your cart is empty... Check out some of our products
          </h1>
          <ShoppingBagIcon className={"w-20"} />
        </div>
      </div>
    </CustomerLayout>
  );
}
