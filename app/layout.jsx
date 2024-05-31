"use client";
import { ShopContextProvider } from "./shopContext/page";
// import CartProvider from "@/components/CartContext";
const RootLayout = ({ children }) => {
  return (
    <html>
      {/* <CartProvider> */}
      <ShopContextProvider>
        <body>{children}</body>
      </ShopContextProvider>

      {/* </CartProvider> */}
    </html>
  );
};

export default RootLayout;
