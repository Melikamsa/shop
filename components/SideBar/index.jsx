"use client";
import "@/styles/components/SideBar.scss";
import React, { useState } from "react";
import Link from "next/link";
import { PiCaretDownBold } from "react-icons/pi";
import Accordion from "../Accordion";
import Slider from "@mui/material/Slider";

const SideBar = () => {
  const [showcategories, setShowcategories] = useState(false);
  const [showPrice, setShowPrice] = useState(false);
  const [showColor, setShowColor] = useState(false);
  const [showSize, setShowSize] = useState(false);
  const [range, setRange] = useState([0, 0]);

  function handleChanges(event, newValue) {
    setRange(newValue);
  }

  return (
    <div className="sideBar">
      <ul>
        <section className="p-2">
          <Accordion
            isOpenStatus={setShowcategories}
            AccordionHeader={
              <li
                onClick={() => {
                  setShowcategories(true);
                  console.log("categori");
                }}
                className="headerList my-3"
              >
                product categories
                <span className={`mt-1 ${showcategories ? "rotate-180" : ""}`}>
                  <PiCaretDownBold />
                </span>
              </li>
            }
          >
            {showcategories ? (
              <ul className="subset">
                <Link href="/products/filterCategory/jean">
                  <li>Jean</li>
                </Link>
                <Link href="/products/filterCategory/boot">
                  <li>boot</li>
                </Link>
                <Link href="/products/filterCategory/bag">
                  <li>bag</li>
                </Link>
                <Link href="/products/filterCategory/Belts">
                  <li>Belts</li>
                </Link>
                <Link href="/products/filterCategory/women">
                  <li>women</li>
                </Link>
                <Link href="/products/filterCategory/jewellery">
                  <li>jewellery</li>
                </Link>
                <Link href="/products/filterCategory/Bracelets">
                  <li>Bracelets</li>
                </Link>
                <Link href="/products/filterCategory/hat">
                  <li>hat</li>
                </Link>
                <Link href="/products/filterCategory/Sandal">
                  <li>Sandal</li>
                </Link>
              </ul>
            ) : null}
          </Accordion>
        </section>

        <section className="p-2">
          <Accordion
            isOpenStatus={setShowPrice}
            AccordionHeader={
              <li
                onClick={() => {
                  setShowPrice(true);
                  console.log("price");
                }}
                className="my-3 headerList"
              >
                filter by price
                <span className="mt-1">
                  <PiCaretDownBold />
                </span>
              </li>
            }
          >
            {showPrice ? (
              <div
                style={{
                  width: "100%",
                  paddingTop: "30px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >
                <Slider
                  value={range}
                  onChange={handleChanges}
                  valueLabelDisplay="auto"
                />
                price : {range[0]} - {range[1]}
              </div>
            ) : null}
          </Accordion>
        </section>

        <section className="p-2">
          <Accordion
            isOpenStatus={setShowColor}
            AccordionHeader={
              <li
                onClick={() => {
                  setShowColor(true);
                  console.log("color");
                }}
                className="my-3 headerList"
              >
                filter by color
                <span className="mt-1">
                  <PiCaretDownBold />
                </span>
              </li>
            }
          >
            {showColor ? (
              <ul className="subset">
                <Link href="/products/filterColor/white">
                  <li>white</li>
                </Link>
                <Link href="/products/filterColor/RoyalBlue">
                  <li>RoyalBlue</li>
                </Link>
                <Link href="/products/filterColor/LightSkyBlue">
                  <li>LightSkyBlue</li>
                </Link>
                <Link href="/products/filterColor/darkBlue">
                  <li>darkBlue</li>
                </Link>
                <Link href="/products/filterColor/blueNavy">
                  <li>blueNavy</li>
                </Link>
                <Link href="/products/filterColor/black">
                  <li>black</li>
                </Link>
                <Link href="/products/filterColor/brown">
                  <li>brown</li>
                </Link>
                <Link href="/products/filterColor/golden">
                  <li>golden</li>
                </Link>
                <Link href="/products/filterColor/silver">
                  <li>silver</li>
                </Link>
                <Link href="/products/filterColor/Cyan">
                  <li>Cyan</li>
                </Link>
                <Link href="/products/filterColor/pink">
                  <li>pink</li>
                </Link>
                <Link href="/products/filterColor/green">
                  <li>green</li>
                </Link>
                <Link href="/products/filterColor/wheat">
                  <li>wheat</li>
                </Link>
                <Link href="/products/filterColor/leopard">
                  <li>leopard</li>
                </Link>
                <Link href="/products/filterColor/peru">
                  <li>peru</li>
                </Link>
                <Link href="/products/filterColor/cornFlowerBlue">
                  <li>cornFlowerBlue</li>
                </Link>
                <Link href="/products/filterColor/midnightblue">
                  <li>midnightblue</li>
                </Link>
                <Link href="/products/filterColor/BurntBrown">
                  <li>BurntBrown</li>
                </Link>
                <Link href="/products/filterColor/BrickColor">
                  <li>BrickColor</li>
                </Link>
                <Link href="/products/filterColor/steelBlue">
                  <li>steelBlue</li>
                </Link>
              </ul>
            ) : null}
          </Accordion>
        </section>

        <section className="p-2">
          <Accordion
            isOpenStatus={setShowSize}
            AccordionHeader={
              <li
                onClick={() => {
                  setShowSize(true);
                  console.log("size");
                }}
                className="headerList my-3"
              >
                filter by size
                <span className={`mt-1 ${showSize ? "rotate-180" : null}`}>
                  <PiCaretDownBold />
                </span>
              </li>
            }
          >
            {showSize ? (
              <ul className="subset">
                <Link href="/products/filterSize/2xl">
                  <li className="box">2xl</li>
                </Link>
                <Link href="/products/filterSize/xl">
                  <li>xl</li>
                </Link>
                <Link href="/products/filterSize/l">
                  <li>l</li>
                </Link>
                <Link href="/products/filterSize/s">
                  <li>s</li>
                </Link>
                <Link href="/products/filterSize/m">
                  <li>m</li>
                </Link>
                <Link href="/products/filterSize/35">
                  <li>35</li>
                </Link>
                <Link href="/products/filterSize/37">
                  <li>37</li>
                </Link>
                <Link href="/products/filterSize/38">
                  <li>38</li>
                </Link>
                <Link href="/products/filterSize/39">
                  <li>39</li>
                </Link>
                <Link href="/products/filterSize/40">
                  <li>40</li>
                </Link>
                <Link href="/products/filterSize/41">
                  <li>41</li>
                </Link>
                <Link href="/products/filterSize/42">
                  <li>42</li>
                </Link>
              </ul>
            ) : null}
          </Accordion>
        </section>
      </ul>
    </div>
  );
};

export default SideBar;
