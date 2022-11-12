import {useAppDispatch, useAppSelector} from "../app/hooks";
import {NextPage} from "next";
import {Fragment, useEffect, useState} from "react";
import {TrashIcon} from "@heroicons/react/24/solid";
import {removeItem} from "../features/cartSlice";
import {MinusCircleIcon, PlusCircleIcon} from "@heroicons/react/20/solid";
import Image from "next/image";
import {ShoppingBagIcon} from "@heroicons/react/24/outline";
import CheckoutForm from "../components/CheckoutForm";
import {loadStripe, StripeElementsOptions} from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import {CartItem} from "../components/checkout/CartItem";

const stripePromise = loadStripe('pk_live_51LR2GAJ0ME8OZdmfeJBPDuUmrpqJNpsD6bg9SGxPhIVm5MdYOPevriRkjb5ekpUnIUQ6zYj4YGqnWWXpGlq7vzGC00865VCWz7');

const Checkout: NextPage =() => {
    const cart = useAppSelector(state => state.items)
    const dispactch = useAppDispatch();
    const [clientSecret, setClientSecret] =useState("");

    const options: StripeElementsOptions = {
        clientSecret,
        appearance: {
            theme: 'night'
        }
    };

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("/api/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, []);

    if (cart.length >= 1) return (
        <div className={'min-h-screen'}>
            <h1 className={'py-5 font-bold text-3xl text-center '}> Checkout </h1>
            {cart?.map((item) => (
                <CartItem key={item.itemId} {...item} />
            ))}
            {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            )}
        </div>
    )

    return (
        <div className={'flex justify-center items-center  bg-oxford-blue text-white  min-h-[70vh]'}>
            <div className={'flex flex-col items-center gap-y-10 '}>
                <h1 className={'font-xl font-bold leading-loose text-center'}>Your cart is empty... Check out some of our products</h1>
                <ShoppingBagIcon className={'w-20'} />
            </div>
        </div>
    )
}

export default Checkout