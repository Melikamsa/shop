"use client";
import React, { useContext, useEffect, useState } from "react";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ShopContext } from "../shopContext/page";

const CheckOut = () => {
  const { cartItems } = useContext(ShopContext);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://6638e1b44253a866a24f88d2.mockapi.io/products")
      .then((Response) => Response.json())
      .then((Result) => setProduct(Result))
      .catch((err) => console.log(err));
  }, [product]);

  return (
    <>
      <Header />
      {/* <div>
        {console.log(product)}
        {product
          .filter((item) =>
            cartItems?.find((cartItem) => cartItem.id === item.id)
          )
          .map((item) => console.log(item))}
      </div> */}
      <section>
        <h2></h2>
      </section>

      <section className="m-11 p-5 w-[40%] bg-slate-500 flex flex-col gap-5">
        <div className="flex items-center justify-between font-semibold ">
          <span>subtotal</span>
          <span>$200.00</span>
        </div>
        <hr />
        <div>
          <p>enter discount code</p>
          <div className="flex my-2">
            <input
              className="bg-white border border-black outline-none py-2 p-5 rounded-l"
              type="text"
            />
            <button className="bg-black text-white py-2 px-5 rounded-r">
              Apply
            </button>
          </div>
          <div className="flex items-center justify-between">
            <span>delivery charge</span>
            <span>$5.00</span>
          </div>
        </div>
        <hr />
        <div className="flex items-center justify-between font-semibold ">
          <span>grand total</span>
          <span>$205.00</span>
        </div>
        <button className="bg-black text-white py-3 rounded-md">
          Proceed To Checkout
        </button>
      </section>

      <Footer />
    </>
  );
};

export default CheckOut;
