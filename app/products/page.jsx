import React from "react";
import ProductsComponent from "@/components/ProductsComponent";
import { Suspense } from "react";

const Products = () => {
  return (
    <div>
      <Suspense fallback={<></>}>
        <ProductsComponent />
      </Suspense>
    </div>
  );
};

export default Products;
