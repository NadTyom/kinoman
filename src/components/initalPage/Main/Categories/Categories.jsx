import React, { useState } from "react";

export default function Categories({ onFilter }) {
  const categories = [
    "Բոլորը",
    "Սերիալ",
    "Ֆիլմ",
    "Թոփ-100",
    "Սպասվածներ",
    "Նորույթ",
  ];

  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <>
      <ul className="horizontal">
        {categories.map((elm, index) => {
          const isActive = activeCategory === elm;
          return (
            <li
              className={isActive ? "activeLink" : ""}
              onClick={() => {
                onFilter(elm);
                setActiveCategory(elm);
              }}
              key={index}
            >
              {elm}
            </li>
          );
        })}
      </ul>
    </>
  );
}
