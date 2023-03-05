import React from "react";
import { Link } from "react-router-dom";
import "./styles/Product.css";

export default function Product() {
  const description = [
    "Підкладка: 100% поліестер",
    "Застібка: блискавка",
    "Кишені: дві",
    "Довжина виробу: коротка",
    "Колір: зелений, чорний",
    "Склад: 80% Поліестер, 20% Синтепух",
  ];
  return (
    <>
      <div className="container">
        <section className="product">
          <div className="product-slider loaded">
            <div className="product-slider__main">
              <div className="swiper">
                <div className="swiper-wrapper">
                  <img
                    src="https://media2.vsisvoi.ua/uploads/catalog/products/2023/01/31/581792/gallery/photo_2023-01-31_21-39-34.jpg"
                    alt="product"
                  />
                </div>
              </div>
              <div className="product__avail product-avail">
                <div className="product-avail__item">ПРОДАВЕЦЬ: ВСІ. СВОЇ</div>
                <div className="product-avail__item">НАЯВНІСТЬ В МАГАЗИНАХ</div>
                <div className="product-avail__item">
                  ДОСТАВКА ТА ПОВЕРНЕННЯ
                </div>
              </div>
            </div>
          </div>
          <div className="additional-wrap">
            <div className="product-top">
              <div className="product-description">
                <div className="product-description__title">Love Vivienne</div>
              </div>
              <div className="product-description__subtitle">Куртка</div>
            </div>
            <div className="product__price">3970 ₴</div>
            <div className="product__order">
              <div className="product-order__item">
                <Link to="/bag" className="product-order__btn">
                  Додати до кошика
                </Link>
              </div>
            </div>
            <div className="pr-block-wrap">
              <div className="product__info product-info">
                <div className="product-info__title">ІНФОРМАЦІЯ ПРО ТОВАР</div>
                <div className="product-info__list">
                  <ul>
                    {description.map((item) => (
                      <div>{item}</div>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
