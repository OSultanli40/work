import React from "react";
import "./style.scss";
import Navbar from "../../components/Nav";
import { t } from "i18next";
import Footer from "../../components/Footer";

const buildImageUrl = (file) => new URL(`../../assets/Images/${file}`, import.meta.url).href;

const DEFAULT_ITEMS = [
  // 38 nümunə (istəsən artır/azalt)
  { id: 1, file: "1.jpeg", color: "#f94144" },
  { id: 2, file: "2.jpeg", color: "#f3722c" },
  { id: 3, file: "3.jpeg", color: "#f8961e" },
  { id: 4, file: "4.jpeg", color: "#f9844a" },
  { id: 5, file: "5.jpeg", color: "#f9c74f" },
  { id: 6, file: "6.jpeg", color: "#90be6d" },
  { id: 7, file: "7.jpeg", color: "#43aa8b" },
  { id: 8, file: "8.jpeg", color: "#4d908e" },
  { id: 9, file: "9.jpeg", color: "#577590" },
  { id: 10, file: "10.jpeg", color: "#277da1" },
  { id: 11, file: "11.jpeg", color: "#d90429" },
  { id: 12, file: "12.jpeg", color: "#ef476f" },
  { id: 13, file: "13.jpeg", color: "#ffd166" },
  { id: 14, file: "14.jpeg", color: "#06d6a0" },
  { id: 15, file: "15.jpeg", color: "#118ab2" },
  { id: 16, file: "16.jpeg", color: "#073b4c" },
  { id: 17, file: "17.jpeg", color: "#b7094c" },
  { id: 18, file: "18.jpeg", color: "#a01a58" },
  { id: 19, file: "19.jpeg", color: "#892b64" },
  { id: 20, file: "20.jpeg", color: "#723c70" },
  { id: 21, file: "21.jpeg", color: "#5c4d7d" },
  { id: 22, file: "22.jpeg", color: "#455e89" },
  { id: 23, file: "23.jpeg", color: "#2e6f95" },
  { id: 24, file: "24.jpeg", color: "#1982a4" },
  { id: 25, file: "25.jpeg", color: "#6a4c93" },
  { id: 26, file: "26.jpeg", color: "#8ac926" },
  { id: 27, file: "27.jpeg", color: "#ff595e" },
  { id: 28, file: "28.jpeg", color: "#1982c4" },
  { id: 29, file: "29.jpeg", color: "#6a994e" },
  { id: 30, file: "30.jpeg", color: "#a7c957" },
  { id: 31, file: "31.jpeg", color: "#bc4749" },
  { id: 32, file: "32.jpeg", color: "#e76f51" },
  { id: 33, file: "33.jpeg", color: "#2a9d8f" },
  { id: 34, file: "34.jpeg", color: "#264653" },
  { id: 35, file: "35.jpeg", color: "#e63946" },
  { id: 36, file: "36.jpeg", color: "#457b9d" },
  { id: 37, file: "37.jpeg", color: "#1d3557" },
  { id: 38, file: "38.jpeg", color: "#ff9f1c" },
].map(({ id, file, color }) => ({
  id,
  src: buildImageUrl(file),
  color,
}));

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
