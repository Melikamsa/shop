"use client";
import "@/styles/components/SideBar.scss";
import React, { useState } from "react";
import Link from "next/link";
// import "@/styles/globals.css";
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
                <Link href="/">
                  <li>jewellery</li>
                </Link>
                <Link href="/">
                  <li>Bracelets</li>
                </Link>
                <Link href="/">
                  <li>hat</li>
                </Link>
                <Link href="/">
                  <li>Belts</li>
                </Link>
                <Link href="/">
                  <li>women</li>
                </Link>
                <Link href="/">
                  <li>bag</li>
                </Link>
                <Link href="/">
                  <li>boot</li>
                </Link>
                <Link href="/">
                  <li>Jean</li>
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
                <Link href="/">
                  <li>white</li>
                </Link>
                <Link href="/">
                  <li>RoyalBlue</li>
                </Link>
                <Link href="/">
                  <li>LightSkyBlue</li>
                </Link>
                <Link href="/">
                  <li>darkBlue</li>
                </Link>
                <Link href="/">
                  <li>blueNavy</li>
                </Link>
                <Link href="/">
                  <li>black</li>
                </Link>
                <Link href="/">
                  <li>brown</li>
                </Link>
                <Link href="/">
                  <li>golden</li>
                </Link>
                <Link href="/">
                  <li>silver</li>
                </Link>
                <Link href="/">
                  <li>Cyan</li>
                </Link>
                <Link href="/">
                  <li>pink</li>
                </Link>
                <Link href="/">
                  <li>green</li>
                </Link>
                <Link href="/">
                  <li>wheat</li>
                </Link>
                <Link href="/">
                  <li>leopard</li>
                </Link>
                <Link href="/">
                  <li>peru</li>
                </Link>
                <Link href="/">
                  <li>cornFlowerBlue</li>
                </Link>
                <Link href="/">
                  <li>midnightblue</li>
                </Link>
                <Link href="/">
                  <li>BurntBrown</li>
                </Link>
                <Link href="/">
                  <li>BrickColor</li>
                </Link>
                <Link href="/">
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
                <Link href="/">
                  <li className="box">2xl</li>
                </Link>
                <Link href="/">
                  <li>xl</li>
                </Link>
                <Link href="/">
                  <li>l</li>
                </Link>
                <Link href="/">
                  <li>s</li>
                </Link>
                <Link href="/">
                  <li>m</li>
                </Link>
                <Link href="/">
                  <li>35</li>
                </Link>
                <Link href="/">
                  <li>37</li>
                </Link>
                <Link href="/">
                  <li>38</li>
                </Link>
                <Link href="/">
                  <li>39</li>
                </Link>
                <Link href="/">
                  <li>40</li>
                </Link>
                <Link href="/">
                  <li>41</li>
                </Link>
                <Link href="/">
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
