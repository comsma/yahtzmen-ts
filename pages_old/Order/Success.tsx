import { NextPage } from "next";
import { useAppDispatch, useAppSelector } from "../../app_redux/hooks";
import { useRouter } from "next/router";
import { emptyCart } from "../../features/cartSlice";
import { useEffect } from "react";

const Success: NextPage = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.items);
  const router = useRouter();

  useEffect(() => {
    dispatch(emptyCart());
    router.push("/");
  }, [cart]);

  return <></>;
};

export default Success;
