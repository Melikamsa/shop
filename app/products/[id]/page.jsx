"use client";
import "@/styles/globals.css";
import { React, useEffect, useState, useContext } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Header from "@/components/Header";
import Image from "next/image";
import { FaMinus, FaPlus } from "react-icons/fa6";
import Footer from "@/components/Footer";
import Information from "@/components/Information";
import RelatedProducts from "@/components/RelatedProducts";
import AddReview from "@/components/AddYourReview";
import { ShopContext } from "@/components/shopContext/page";

const product = () => {
  const params = useParams();
  const [item, setItem] = useState({});
  const { cartItems, setCartItems, addToCart, removeFromCart } =
    useContext(ShopContext);

  useEffect(() => {
    axios
      .get(`https://6638e1b44253a866a24f88d2.mockapi.io/products/${params.id}`)
      .then((result) => {
        setItem(result.data);
      })
      .catch((err) => console.log(err));
  }, [params]);

  let stock = item.in_Stock;

  return (
    <>
      <Header />
      <div className="flex max-sm:flex-col max-sm:items-center items-start justify-around gap-8 my-10 sm:m-5">
        <div className="flex max-lg:flex-col item-center gap-3">
          {item.images
            ? Object.values(item?.images).map((img, i) => {
                return (
                  <div className="" key={i}>
                    <Image width={300} height={300} alt="img" src={img} />
                  </div>
                );
              })
            : "images"}
        </div>

        <section className=" flex max-md:flex-col max-md:items-center  md:justify-around">
          <section className="p-3 w-[300px] lg:w-[400px] h-[400px] bg-[#737373] flex flex-col justify-between gap-8 lg:text-lg xl:text-xl">
            <p>title : {item.title}</p>
            <p>price : {item.price} $</p>
            <p>in-Stock : {stock}</p>

            <div className="flex  gap-3">
              colors :
              {item.colors
                ? Object.values(item?.colors).map((colors) => {
                    return (
                      <span
                        className="border-2 border-black mb-2 p-[12px] rounded-md cursor-pointer"
                        style={{ backgroundColor: colors }}
                      ></span>
                    );
                  })
                : " - "}
            </div>

            <div>
              size :
              {item.size
                ? Object.values(item?.size).map((size) => {
                    return (
                      <span className="border-2 border-black px-2 m-2 rounded-md cursor-pointer">
                        {size}
                      </span>
                    );
                  })
                : " - "}
            </div>

            <section className="flex justify-between gap-2">
              {cartItems?.filter((row) => row.id === item.id)[0]?.count > 0 ? (
                <div className=" flex items-center border-2 border-black rounded-md gap-3 p-1 sm:p-2">
                  <button
                    onClick={() => {
                      cartItems?.find((row) => row.id === item.id) ===
                        undefined ||
                      +cartItems?.filter((row) => row.id === item.id)[0]
                        ?.count < +item.in_Stock
                        ? addToCart(item.id)
                        : console.log(item.id);
                    }}
                  >
                    <FaPlus />
                  </button>
                  <span>
                    {cartItems?.filter((row) => row.id === item.id)[0]?.count}
                  </span>

                  <button onClick={() => removeFromCart(item.id)}>
                    <FaMinus />
                  </button>
                </div>
              ) : (
                <button
                  className="bg-black text-white py-3 px-4 rounded-lg"
                  onClick={() => {
                    cartItems?.find((row) => row.id === item.id) ===
                      undefined ||
                    +cartItems?.filter((row) => row.id === item.id)[0]?.count <
                      +item.in_Stock
                      ? addToCart(item.id)
                      : console.log(item.id);
                  }}
                >
                  Add To Cart
                </button>
              )}
            </section>
          </section>
        </section>
      </div>

      <AddReview />
      <RelatedProducts />
      <Information />
      <Footer />
    </>
  );
};

export default product;
