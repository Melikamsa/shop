"use client";
import React, { useContext, useEffect, useState } from "react";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ShopContext } from "../shopContext/page";
import { FaRegTrashCan } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { FaMinus, FaPlus } from "react-icons/fa6";
import Image from "next/image";

const CheckOut = () => {
  const { cartItems, addToCart, removeFromCart, deleteFromCart } =
    useContext(ShopContext);

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch("https://6638e1b44253a866a24f88d2.mockapi.io/products")
      .then((Response) => Response.json())
      .then((Result) => setProductList(Result))
      .catch((err) => console.log(err));
  }, []);

  console.log(productList);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onFormSubmit = (data) => {
    console.log(data);
  };

  let subtotal = 0;

  let grandTotal = 0;

  let deliveryCharge = 20;

  const [inputValue, setInputValue] = useState("");

  const handlerInputChange = (event) => {
    setInputValue(event.target.value);
    console.log(inputValue);
  };

  // const [apply, setApply] = useState();

  const emal = () => {
    if (inputValue === "20free") {
      deliveryCharge = 0;
      console.log("kode takhfif")
    }
  };

  return (
    <>
      <Header />

      <section className="p-3">
        <section className="flex flex-col gap-20">
          {/* <div>
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
          </div> */}

          <div className="taqir mikone ">
            <h1 className="text-2xl font-bold mb-10">checkout</h1>

            <section className="border-2 border-[#737373] p-2 text-center rounded-md">
              <div className="flex items-center justify-between">
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
                    subtotal +=
                      item.price *
                      cartItems?.filter((row) => row.id === item.id)[0]?.count;

                    grandTotal = subtotal + deliveryCharge;
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
                            {/* <p>{item.title}</p> */}
                          </div>
                          <p className="w-[38px] text-center">{item.price}</p>
                          <p>
                            {
                              <div className="flex items-center justify-between">
                                {cartItems?.filter(
                                  (row) => row.id === item.id
                                )[0]?.count > 0 ? (
                                  <div className=" w-[77px] flex items-center justify-between border-2 border-black rounded-md gap-2 p-1 sm:p-2">
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

          <section className="md:w-[40%] p-5 border-2 border-[#737373] rounded-md flex flex-col gap-5">
            <div className="flex items-center justify-between font-semibold ">
              <span>subtotal</span>
              <span> $ {subtotal}</span>
            </div>
            <hr />
            <div>
              <p>enter discount code</p>
              <div className="flex my-4">
                <input
                  onChange={handlerInputChange}
                  className="bg-white border border-black outline-none py-2 p-5 rounded-l"
                  type="text"
                />
                <button
                  onClick={emal}
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
            <button className="bg-black text-white py-3 rounded-md">
              Proceed To Checkout
            </button>
          </section>
        </section>
      </section>

      <Footer />
    </>
  );
};

export default CheckOut;
