"use client";
import "@/styles/components/SideBar.scss";
import React, { useState } from "react";
import Link from "next/link";
import { PiCaretDownBold } from "react-icons/pi";
import Accordion from "../Accordion";
import Slider from "@mui/material/Slider";
import ColorsText from "@/app/products/filterColor/[colorsText]/page";

const SideBar = ({ handleFilters, setHandleFilters }) => {
  const [showcategories, setShowcategories] = useState(false);
  const [showPrice, setShowPrice] = useState(false);
  const [showColor, setShowColor] = useState(false);
  const [showSize, setShowSize] = useState(false);
  const [range, setRange] = useState([0, 0]);

  function handleChanges(event, newValue) {
    setRange(newValue);
  }

  function rangePrice() {
    let min = range[0];
    let max = range[1];
    setHandleFilters({ ...handleFilters, price: { min: min, max: max } });
    console.log(min, max);
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
                <li
                  onClick={() => {
                    return setHandleFilters({
                      ...handleFilters,
                      category: "jean",
                    });
                  }}
                >
                  Jean
                </li>
                <li
                  onClick={() =>
                    setHandleFilters({ ...handleFilters, category: "boot" })
                  }
                >
                  boot
                </li>
                <li
                  onClick={() =>
                    setHandleFilters({ ...handleFilters, category: "bag" })
                  }
                >
                  bag
                </li>
                <li
                  onClick={() =>
                    setHandleFilters({ ...handleFilters, category: "Belts" })
                  }
                >
                  Belts
                </li>
                <li
                  onClick={() =>
                    setHandleFilters({ ...handleFilters, category: "women" })
                  }
                >
                  women
                </li>
                <li
                  onClick={() =>
                    setHandleFilters({
                      ...handleFilters,
                      category: "jewellery",
                    })
                  }
                >
                  jewellery
                </li>
                <li
                  onClick={() =>
                    setHandleFilters({
                      ...handleFilters,
                      category: "Bracelets",
                    })
                  }
                >
                  Bracelets
                </li>
                <li
                  onClick={() =>
                    setHandleFilters({ ...handleFilters, category: "hat" })
                  }
                >
                  hat
                </li>
                <li
                  onClick={() =>
                    setHandleFilters({ ...handleFilters, category: "Sandal" })
                  }
                >
                  Sandal
                </li>
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
                  rangePrice();
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
                <li
                  onClick={() =>
                    setHandleFilters({ ...handleFilters, colorsText: "white" })
                  }
                >
                  white
                </li>
                <li
                  onClick={() =>
                    setHandleFilters({
                      ...handleFilters,
                      colorsText: "RoyalBlue",
                    })
                  }
                >
                  RoyalBlue
                </li>
                <li
                  onClick={() =>
                    setHandleFilters({
                      ...handleFilters,
                      colorsText: "LightSkyBlue",
                    })
                  }
                >
                  LightSkyBlue
                </li>
                <li
                  onClick={() =>
                    setHandleFilters({
                      ...handleFilters,
                      colorsText: "darkBlue",
                    })
                  }
                >
                  darkBlue
                </li>
                <li
                  onClick={() =>
                    setHandleFilters({
                      ...handleFilters,
                      colorsText: "blueNavy",
                    })
                  }
                >
                  blueNavy
                </li>
                <li
                  onClick={() =>
                    setHandleFilters({
                      ...handleFilters,
                      colorsText: "black",
                    })
                  }
                >
                  black
                </li>
                <li
                  onClick={() =>
                    setHandleFilters({ ...handleFilters, colorsText: "brown" })
                  }
                >
                  brown
                </li>
                <li
                  onClick={() =>
                    setHandleFilters({ ...handleFilters, colorsText: "golden" })
                  }
                >
                  golden
                </li>
                <li
                  onClick={() =>
                    setHandleFilters({ ...handleFilters, colorsText: "silver" })
                  }
                >
                  silver
                </li>
                <li
                  onClick={() =>
                    setHandleFilters({ ...handleFilters, colorsText: "Cyan" })
                  }
                >
                  Cyan
                </li>
                <li
                  onClick={() =>
                    setHandleFilters({ ...handleFilters, colorsText: "pink" })
                  }
                >
                  pink
                </li>
                <li
                  onClick={() =>
                    setHandleFilters({ ...handleFilters, colorsText: "green" })
                  }
                >
                  green
                </li>
                <li
                  onClick={() =>
                    setHandleFilters({ ...handleFilters, colorsText: "wheat" })
                  }
                >
                  wheat
                </li>
                <li
                  onClick={() =>
                    setHandleFilters({
                      ...handleFilters,
                      colorsText: "leopard",
                    })
                  }
                >
                  leopard
                </li>
                <li
                  onClick={() =>
                    setHandleFilters({ ...handleFilters, colorsText: "peru" })
                  }
                >
                  peru
                </li>
                <li
                  onClick={() =>
                    setHandleFilters({
                      ...handleFilters,
                      colorsText: "cornFlowerBlue",
                    })
                  }
                >
                  cornFlowerBlue
                </li>
                <li
                  onClick={() =>
                    setHandleFilters({
                      ...handleFilters,
                      colorsText: "midnightblue",
                    })
                  }
                >
                  midnightblue
                </li>
                <li
                  onClick={() =>
                    setHandleFilters({
                      ...handleFilters,
                      colorsText: "BurntBrown",
                    })
                  }
                >
                  BurntBrown
                </li>
                <li
                  onClick={() =>
                    setHandleFilters({
                      ...handleFilters,
                      colorsText: "BrickColor",
                    })
                  }
                >
                  BrickColor
                </li>
                <li
                  onClick={() =>
                    setHandleFilters({
                      ...handleFilters,
                      colorsText: "steelBlue",
                    })
                  }
                >
                  steelBlue
                </li>
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
                <li
                  className="box"
                  onClick={() =>
                    setHandleFilters({ ...handleFilters, size: "2xl" })
                  }
                >
                  2xl
                </li>
                <li
                  onClick={() =>
                    setHandleFilters({ ...handleFilters, size: "xl" })
                  }
                >
                  xl
                </li>
                <li
                  onClick={() =>
                    setHandleFilters({ ...handleFilters, size: "l" })
                  }
                >
                  l
                </li>
                <li
                  onClick={() =>
                    setHandleFilters({ ...handleFilters, size: "s" })
                  }
                >
                  s
                </li>
                <li
                  onClick={() =>
                    setHandleFilters({ ...handleFilters, size: "m" })
                  }
                >
                  m
                </li>
                <li
                  onClick={() =>
                    setHandleFilters({ ...handleFilters, size: "35" })
                  }
                >
                  35
                </li>
                <li
                  onClick={() =>
                    setHandleFilters({ ...handleFilters, size: "37" })
                  }
                >
                  37
                </li>
                <li
                  onClick={() =>
                    setHandleFilters({ ...handleFilters, size: "38" })
                  }
                >
                  38
                </li>
                <li
                  onClick={() =>
                    setHandleFilters({ ...handleFilters, size: "39" })
                  }
                >
                  39
                </li>
                <li
                  onClick={() =>
                    setHandleFilters({ ...handleFilters, size: "40" })
                  }
                >
                  40
                </li>
                <li
                  onClick={() =>
                    setHandleFilters({ ...handleFilters, size: "41" })
                  }
                >
                  41
                </li>
                <li
                  onClick={() =>
                    setHandleFilters({ ...handleFilters, size: "42" })
                  }
                >
                  42
                </li>
              </ul>
            ) : null}
          </Accordion>
        </section>
      </ul>
    </div>
  );
};

export default SideBar;
