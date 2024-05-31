"use client";
import "@/styles/globals.css";
import { React, useEffect, useState, useContext } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Header from "@/components/Header";
import Image from "next/image";
import { FaMinus, FaPlus, FaRegHeart } from "react-icons/fa6";
import Footer from "@/components/Footer";
import Information from "@/components/Information";
import RelatedProducts from "@/components/RelatedProducts";
import AddReview from "@/components/AddYourReview";
import { ShopContext } from "@/app/shopContext/page";

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

  const isInCart = cartItems?.some((item) => item.id === item.id);

  return (
    <>
      <Header />

      <section className="my-12 flex max-md:flex-col max-md:items-center  md:justify-around">
        {/* <section className="w-[90%] md:w-[45%] lg:w-[40%] xl:w-[35%]">
          {item.images
            ? Object.values(item?.images).map((img) => {
                return (
                  <div className="my-5">
                    <Image
                      src={img}
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                );
              })
            : null}
        </section> */}

        <section className=" w-[90%] md:w-[45%] lg:w-[40%] xl:w-[35%] md:h-[460px] my-5 p-2 bg-[#f1eeee] flex flex-col justify-between gap-8 lg:text-lg xl:text-xl">
          <p>title : {item.title}</p>
          <p>price : {item.price} $</p>
          <p>in-Stock : {stock}</p>

          <div className="flex  gap-3">
            colors :
            {item.colors
              ? Object.values(item?.colors).map((colors) => {
                  return (
                    <button
                      style={{ backgroundColor: colors }}
                      className="border-2 border-black p-3 rounded-md"
                    ></button>
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
                    cartItems.find((row) => row.id === item.id) === undefined ||
                    +cartItems?.filter((row) => row.id === item.id)[0]?.count <
                      +item.in_Stock
                      ? addToCart(item.id)
                      : console.log(item.id);
                    console.log(item.in_Stock);
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
              className="bg-black text-white p-3"
                onClick={() => {
                  cartItems.find((row) => row.id === item.id) === undefined ||
                  +cartItems?.filter((row) => row.id === item.id)[0]?.count <
                    +item.in_Stock
                    ? addToCart(item.id)
                    : console.log(item.id);
                }}
              >
                Add To Cart
              </button>
            )}

            <button className=" border-2 border-black rounded-md px-2 sm:px-3">
              <FaRegHeart />
            </button>
          </section>
        </section>
      </section>
      {/* <AddReview />
      <RelatedProducts />
      <Information />
      <Footer /> */}
    </>
  );
};

export default product;
