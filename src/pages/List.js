import React from "react";
import { Link } from "react-router-dom";
import "../styles/List.css";

export default function List() {
  const products = [
    "https://media2.vsisvoi.ua/uploads/catalog/products/2023/01/25/581107/gallery/Копия 901.jpg",
    "https://media2.vsisvoi.ua/uploads/catalog/products/2023/01/31/581792/gallery/photo_2023-01-31_21-39-34.jpg",
    "https://media2.vsisvoi.ua/uploads/catalog/products/2023/02/25/487133/gallery/487133_63fe21aa7e7a263fe21aa7e7a3.jpeg",
    "https://media2.vsisvoi.ua/uploads/catalog/products/2023/01/31/581786/gallery/photo_2023-01-31_21-32-14.jpg",
    "https://media2.vsisvoi.ua/uploads/catalog/products/2023/02/25/487135/gallery/487135_63fe1fcc5a38763fe1fcc5a388.jpeg",
    "https://media2.vsisvoi.ua/uploads/catalog/products/2023/01/31/581795/gallery/photo_2023-01-31_21-39-36.jpg",
  ];
  return (
    <>
      <div id="list">
        <section className="category-top">
          <h1 className="category-title">Одяг</h1>
          <div className="category-top__container"></div>
        </section>
        <div className="products">
          <div className="products__container">
            <div className="products__items">
              <div className="products__item">
                {products.map((img) => {
                  return (
                    <div className="card">
                      <Link to="/product" className="card__link">
                        <div className="card__img">
                          <img src={img || null} alt="card-img" />
                        </div>
                        <div className="card__info">
                          <div className="card__brand">Love Vivienne</div>
                          <div className="card__title">Куртка</div>
                          <div className="card__price">3970 ₴</div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
