"use client";
import "@/styles/globals.css";
import { PiCaretRightThin, PiShoppingBag } from "react-icons/pi";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ShopContext } from "../../components/shopContext/page";

const CheckOut = () => {
  const { cartItems, setCartItems, addToCart, removeFromCart, deleteFromCart } =
    useContext(ShopContext);
  const [inputValue, setInputValue] = useState("");

  const [deliveryCharge, setDeliveryCharge] = useState(20);

  const [grandTotal, setGrandTotal] = useState(0);

  const [pageStage, setPageStage] = useState(1);

  const [subtotal, setSubtotal] = useState(0);

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch("https://6638e1b44253a866a24f88d2.mockapi.io/products")
      .then((Response) => Response.json())
      .then((Result) => setProductList(Result))
      .catch((err) => console.log(err));
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onFormSubmit = (data) => {
    console.log(cartItems);
    setCartItems([]);
    setPageStage(3);
    console.log(data);
  };

  useEffect(() => {
    setSubtotal(
      productList
        .filter((item) =>
          cartItems?.some((cartItem) => cartItem.id === item.id)
        )
        .reduce(
          (acc, item) =>
            acc +
            (item.price *
              cartItems?.filter((row) => row.id === item.id)[0]?.count ?? 0),
          0
        )
    );
  }, [cartItems, productList]);

  const handlerInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const discountCode = () => {
    if (inputValue === "20free") {
      setDeliveryCharge(0);
    }
  };

  useEffect(() => {
    setGrandTotal(deliveryCharge + subtotal);
  }, [cartItems, productList, deliveryCharge, inputValue, subtotal]);

  return (
    <>
      <Header />
      <div className="md:flex md:items-start">
        {pageStage === 1 ? (
          <div className="md:w-[60%] p-2 sm:p-4 mb-10 rounded-md">
            <h1 className="text-2xl font-bold mb-10">checkout</h1>

            <section className="border-2 border-[#737373] p-2 text-center rounded-md">
              <div className="flex items-center justify-between my-3">
                <span className="w-[66px]">products</span>
                <span className="w-[38px]">price</span>
                <span className="w-[77px]">quantity</span>
                <span className="w-[65px]">subtotal</span>
                <span>
                  <FaRegTrashCan />
                </span>
              </div>
              <hr />
              <section>
                {productList
                  .filter((item) =>
                    cartItems.some((cartItem) => cartItem.id === item.id)
                  )
                  .map((item) => {
                    return (
                      <>
                        <div className="flex items-center justify-between my-3 ">
                          <div className="flex items-center">
                            <Image
                              className="rounded-lg"
                              width={66}
                              height={66}
                              alt={"img"}
                              src={item.images[0]}
                            />
                          </div>
                          <p className="w-[38px] text-center">{item.price}</p>
                          <p>
                            {
                              <div className="flex items-center justify-between">
                                {cartItems?.filter(
                                  (row) => row.id === item.id
                                )[0]?.count > 0 ? (
                                  <div className=" w-[77px] lg:w-[120px] flex items-center justify-between border-2 border-black rounded-md gap-2 p-1 sm:p-2">
                                    <button
                                      onClick={() => {
                                        cartItems?.find(
                                          (row) => row.id === item.id
                                        ) === undefined ||
                                        +cartItems?.filter(
                                          (row) => row.id === item.id
                                        )[0]?.count < +item.in_Stock
                                          ? addToCart(item.id)
                                          : console.log(item.id);
                                      }}
                                    >
                                      <FaPlus />
                                    </button>
                                    <span>
                                      {
                                        cartItems?.filter(
                                          (row) => row.id === item.id
                                        )[0]?.count
                                      }
                                    </span>

                                    <button
                                      onClick={() => removeFromCart(item.id)}
                                    >
                                      <FaMinus />
                                    </button>
                                  </div>
                                ) : (
                                  deleteFromCart(item.id)
                                )}
                              </div>
                            }
                          </p>
                          <p className="w-[65px] text-center">
                            {item.price *
                              cartItems?.filter((row) => row.id === item.id)[0]
                                ?.count}
                          </p>

                          <button onClick={() => deleteFromCart(item.id)}>
                            <FaRegTrashCan />
                          </button>
                        </div>
                        <hr />
                      </>
                    );
                  })}
              </section>
            </section>
          </div>
        ) : pageStage === 2 ? (
          <div className="md:w-[60%] p-2 sm:p-4 mb-10 rounded-md">
            <h1 className="text-2xl font-bold mb-10">add a new addres</h1>

            <form onSubmit={handleSubmit(onFormSubmit)}>
              <lable>name</lable>
              <input
                className=" bg-white border-2 mb-5 p-2 outline-none border-[#737373] rounded-md"
                type="text"
                placeholder="enter name"
                {...register("name", {
                  required: "name is required",
                  pattern: {
                    value: /[A-Za-z0-9_]+/,
                    message: "Invalid name",
                  },
                })}
              />
              {errors.name && (
                <p className="text-red-600 mb-8">{errors.name?.message}</p>
              )}
              <lable>mobile number</lable>
              <input
                className="bg-white border-2 mb-5 p-2 outline-none border-[#737373] rounded-md"
                type="text"
                placeholder="enter mobile number"
                {...register("number", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^\+?1?\s?(\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}$/,
                    message: "Invalid number",
                  },
                })}
              />
              {errors.number && (
                <p className="text-red-600 mb-8">{errors.number?.message}</p>
              )}
              <lable>flat , house no , building , company , apartment</lable>
              <input
                placeholder="flat , house no , building , company , apartment"
                className="bg-white border-2 mb-5 p-2 outline-none border-[#737373] rounded-md"
                type="text"
                {...register("house", {
                  required: "Enter the details correctly",
                })}
              />
              {errors.house && (
                <p className="text-red-600 mb-8">{errors.house?.message}</p>
              )}
              <lable>area ,colony , street , sector , vilage</lable>
              <input
                placeholder="area ,colony , street , sector , vilage"
                className="bg-white border-2 mb-5 p-2 outline-none border-[#737373] rounded-md"
                type="text"
                {...register("street", {
                  required: "Enter the address correctly",
                })}
              />
              {errors.street && (
                <p className="text-red-600  mb-8">{errors.street?.message}</p>
              )}
              <lable>city</lable>
              <input
                placeholder="city"
                className="bg-white border-2 mb-5 p-2 outline-none border-[#737373] rounded-md"
                type="text"
                {...register("city", {
                  required: "Enter the city correctly",
                })}
              />
              {errors.city && (
                <p className="text-red-600 mb-8">{errors.city?.message}</p>
              )}
              <lable>pin code</lable>
              <input
                className="bg-white border-2 mb-5 p-2 outline-none border-[#737373] rounded-md "
                type="text"
                placeholder="enter pin code"
                {...register("pinCode", {
                  required: "pinCode is required",
                  pattern: {
                    value: /[A-Za-z0-9_]+/,
                    message: "Invalid pinCode",
                  },
                })}
              />
              {errors.pinCode && (
                <p className="text-red-600 mb-8">{errors.pinCode?.message}</p>
              )}
              <button
                className="bg-black text-white py-2 px-5 my-5 rounded-md"
                type="submit"
              >
                Add New Address
              </button>
            </form>
          </div>
        ) : (
          <div className="w-screen h-screen top-0 left-0 fixed flex items-center justify-center bg-black bg-opacity-90 z-[1000]">
            <div className="bg-black text-center w-[300px] h-[200px] rounded-md text-white p-4 flex flex-col items-center gap-4">
              <span className="text-3xl">
                <PiShoppingBag />
              </span>
              <p>Your purchase has been successfully registered</p>
              <button className="bg-[#737373] px-5 py-2 rounded-md">
                <Link href="/">Back To Home</Link>
              </button>
            </div>
          </div>
        )}

        <section className="p-2 sm:p-4 mb-10 lg:px-16 xl:text-xl md:mt-[70px]">
          <section className="flex max-md:flex-col gap-20">
            <section className="md:w-[100%] px-2 py-4 border-2 border-[#737373] rounded-md flex flex-col gap-5">
              <div className="flex items-center justify-between font-semibold ">
                <span>subtotal</span>
                <span> $ {subtotal}</span>
              </div>
              <hr />
              <div>
                <p>enter discount code</p>
                <div className="flex my-4">
                  <input
                    placeholder="20free"
                    onChange={handlerInputChange}
                    className="bg-white border border-black outline-none py-2 p-5 rounded-l"
                    type="text"
                  />

                  <button
                    onClick={discountCode}
                    className="bg-black text-white py-2 px-5 rounded-r"
                  >
                    Apply
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <span>delivery charge</span>
                  <span>$ {deliveryCharge}</span>
                </div>
              </div>
              <hr />
              <div className="flex items-center justify-between font-semibold ">
                <span>grand total</span>
                <span>${grandTotal}</span>
              </div>
              {
                <button
                  disabled={cartItems?.length === 0}
                  onClick={() => {
                    if (cartItems?.length > 0) {
                      setPageStage(2);
                    }
                  }}
                  className="bg-black text-white py-3 rounded-md"
                >
                  Proceed To Checkout
                </button>
              }
            </section>
          </section>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default CheckOut;
