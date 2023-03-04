import React from "react";
import "../styles/Homepage.css";

export default function Homepage() {
  return (
    <>
      <div className="container">
        <div className="main-slider">
          <h1 className="main-title">
            всі. свої - маркетплейс українських брендів
          </h1>
        </div>
        <div className="banners">
          <div className="banners__item banners__item-big">
            <img
              src="https://media2.vsisvoi.ua//uploads/mainslider/slide/2022/01/23/5/63aef2e7752fc.png"
              alt="Подарункові сертифікати"
            />
            <div className="swiper-slide">
              <div
                className="blue-purple"
                style={{
                  background: "#7257bf",
                }}
              >
                <span
                  style={{
                    color: "#ffffff",
                  }}
                >
                  Подарункові сертифікати
                </span>
              </div>
            </div>
          </div>
          <div className="banners__item">
            <img
              src="https://media2.vsisvoi.ua//uploads/mainslider/slide/2022/01/23/6/63ebcafa2ca5b.png"
              alt="Мерч незламних"
            />
            <div className="swiper-slide">
              <div
                className="blue-purple"
                style={{
                  background: "#8d1111",
                }}
              >
                <span
                  style={{
                    color: "#ffffff",
                  }}
                >
                  Мерч України
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
