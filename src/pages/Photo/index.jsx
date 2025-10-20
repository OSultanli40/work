import React from "react";
import "./style.scss";
import Navbar from "../../components/Nav";
import { t } from "i18next";
import Footer from "../../components/Footer";

const DEFAULT_ITEMS = [
  // 38 nümunə (istəsən artır/azalt)
  { id: 1,  src: "../../assets/Images/1.jpeg", color: "#f94144" },
  { id: 2,  src: "../../assets/Images/2.jpeg", color: "#f3722c" },
  { id: 3,  src: "../../assets/Images/3.jpeg", color: "#f8961e" },
  { id: 4,  src: "../../assets/Images/4.jpeg", color: "#f9844a" },
  { id: 5,  src: "../../assets/Images/5.jpeg", color: "#f9c74f" },
  { id: 6,  src: "../../assets/Images/6.jpeg", color: "#90be6d" },
  { id: 7,  src: "../../assets/Images/7.jpeg", color: "#43aa8b" },
  { id: 8,  src: "../../assets/Images/8.jpeg", color: "#4d908e" },
  { id: 9,  src: "../../assets/Images/9.jpeg", color: "#577590" },
  { id: 10, src: "../../assets/Images/10.jpeg", color: "#277da1" },
  { id: 11, src: "../../assets/Images/11.jpeg", color: "#d90429" },
  { id: 12, src: "../../assets/Images/12.jpeg", color: "#ef476f" },
  { id: 13, src: "../../assets/Images/13.jpeg", color: "#ffd166" },
  { id: 14, src: "../../assets/Images/14.jpeg", color: "#06d6a0" },
  { id: 15, src: "../../assets/Images/15.jpeg", color: "#118ab2" },
  { id: 16, src: "../../assets/Images/16.jpeg", color: "#073b4c" },
  { id: 17, src: "../../assets/Images/17.jpeg", color: "#b7094c" },
  { id: 18, src: "../../assets/Images/18.jpeg", color: "#a01a58" },
  { id: 19, src: "../../assets/Images/19.jpeg", color: "#892b64" },
  { id: 20, src: "../../assets/Images/20.jpeg", color: "#723c70" },
  { id: 21, src: "../../assets/Images/21.jpeg", color: "#5c4d7d" },
  { id: 22, src: "../../assets/Images/22.jpeg", color: "#455e89" },
  { id: 23, src: "../../assets/Images/23.jpeg", color: "#2e6f95" },
  { id: 24, src: "../../assets/Images/24.jpeg", color: "#1982a4" },
  { id: 25, src: "../../assets/Images/25.jpeg", color: "#6a4c93" },
  { id: 26, src: "../../assets/Images/26.jpeg", color: "#8ac926" },
  { id: 27, src: "../../assets/Images/27.jpeg", color: "#ff595e" },
  { id: 28, src: "../../assets/Images/28.jpeg", color: "#1982c4" },
  { id: 29, src: "../../assets/Images/29.jpeg", color: "#6a994e" },
  { id: 30, src: "../../assets/Images/30.jpeg", color: "#a7c957" },
  { id: 31, src: "../../assets/Images/31.jpeg", color: "#bc4749" },
  { id: 32, src: "../../assets/Images/32.jpeg", color: "#e76f51" },
  { id: 33, src: "../../assets/Images/33.jpeg", color: "#2a9d8f" },
  { id: 34, src: "../../assets/Images/34.jpeg", color: "#264653" },
  { id: 35, src: "../../assets/Images/35.jpeg", color: "#e63946" },
  { id: 36, src: "../../assets/Images/36.jpeg", color: "#457b9d" },
  { id: 37, src: "../../assets/Images/37.jpeg", color: "#1d3557" },
  { id: 38, src: "../../assets/Images/38.jpeg", color: "#ff9f1c" },
];

export default function Photo({ items = DEFAULT_ITEMS}) {
  return (
    <section className="china-gallery" aria-label="China images gallery">
      <Navbar/>
      <div className="china-gallery__inner">
        

        <ul className="china-gallery__list">
          {items.map((it) => (
            <li className="china-gallery__tile" key={it.id}>
              {/* Əgər real şəkil path-ı varsa, onu göstər; yoxdursa rəng blok */}
              {it.src ? (
                <img
                  className="china-gallery__img"
                  src={it.src}
                  alt={`Image ${it.id}`}
                  loading="lazy"
                />
              ) : (
                <div
                  className="china-gallery__color"
                  style={{ backgroundColor: it.color || "#ccc" }}
                  aria-hidden="true"
                />
              )}
            </li>
          ))}
        </ul>
      </div>
      <Footer/>
    </section>
  );
}
