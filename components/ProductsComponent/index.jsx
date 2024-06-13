"use client";
import "@/styles/globals.css";
import { React, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Information from "@/components/Information";
import SideBar from "@/components/SideBar";
import { useSearchParams } from "next/navigation";

const ProductsComponent = () => {
  const searchParams = useSearchParams();
  const [product, setProduct] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [handleFilters, setHandleFilters] = useState({
    colorsText: null,
    size: null,
    price: { min: null, max: null },
    category: null,
  });

  useEffect(() => {
    if (searchParams.get("category")) {
      setHandleFilters({
        ...handleFilters,
        category: searchParams.get("category"),
      });
    }
  }, [searchParams]);

  useEffect(() => {
    fetch("https://6638e1b44253a866a24f88d2.mockapi.io/products")
      .then((Response) => Response.json())
      .then((Result) => setProduct(Result))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    let temp = product;
    if (handleFilters.category) {
      temp = temp.filter((item) => {
        return (
          item.category.toUpperCase() === handleFilters.category.toUpperCase()
        );
      });
    }

    if (handleFilters.colorsText) {
      temp = temp.filter((item) => {
        return item.colorsText.some((color) => {
          return color.toUpperCase() === handleFilters.colorsText.toUpperCase();
        });
      });
    }

    if (handleFilters.size) {
      temp = temp.filter((item) => {
        return item.size?.some((s) => {
          return s.toUpperCase() === handleFilters.size.toUpperCase();
        });
      });
    }

    if (handleFilters.price.min && handleFilters.price.max) {
      temp = temp.filter((item) => {
        return (
          +item.price >= handleFilters.price.min &&
          +item.price <= handleFilters.price.max
        );
      });
    }

    setFilteredProducts(temp);
    console.log(filteredProducts);
    console.log(handleFilters);
  }, [handleFilters, product]);

  return (
    <>
      <Header />
      {console.log(searchParams)}
      {console.log(filteredProducts)}
      <section className="m-2 sm:m-3 max-sm:flex-col flex max-sm:items-center sm:justify-between gap-5">
        <aside className="w-[300px]">
          <SideBar
            handleFilters={handleFilters}
            setHandleFilters={setHandleFilters}
          />
        </aside>

        <main className="max-sm:my-5 flex flex-wrap items-center justify-around gap-2">
          {filteredProducts.length === 0 ? (
            <p>No products were found with the filters you selected!</p>
          ) : (
            filteredProducts.map((data) => {
              return (
                <Link key={data.id} href={`/products/${data.id}`}>
                  <div className="bg-[#737373] w-[280px] sm:w-[250px] h-[450px] sm:h-[400px] flex p-5 flex-col items-center rounded-lg text-center">
                    <Image
                      className="rounded-lg"
                      width={250}
                      height={250}
                      alt={"img"}
                      src={data.images[0]}
                    />
                    <p className="my-3">{data.title}</p>
                    <p>{data.price} $</p>
                  </div>
                </Link>
              );
            })
          )}
        </main>
      </section>
      <Information />
      <Footer />
    </>
  );
};

export default ProductsComponent;
