import React from "react";
import { Link } from "react-router-dom";
import "./styles/List.css";

export default function List() {
  const products = [
    {
      img: "https://media2.vsisvoi.ua/uploads/catalog/products/2023/02/25/487133/gallery/487133_63fe21aa7e7a263fe21aa7e7a3.jpeg",
      price: "3770 ₴",
      id: 1,
    },
    {
      img: "https://media2.vsisvoi.ua/uploads/catalog/products/2023/01/31/581792/gallery/photo_2023-01-31_21-39-34.jpg",
      price: "3770 ₴",
      id: 2,
    },
    {
      img: "https://media2.vsisvoi.ua/uploads/catalog/products/2023/01/25/581107/gallery/Копия 901.jpg",
      price: "3970 ₴",
      id: 3,
    },
    {
      img: "https://media2.vsisvoi.ua/uploads/catalog/products/2023/01/31/581795/gallery/photo_2023-01-31_21-39-36.jpg",
      price: "3770 ₴",
      id: 4,
    },
    {
      img: "https://media2.vsisvoi.ua/uploads/catalog/products/2023/02/25/487135/gallery/487135_63fe1fcc5a38763fe1fcc5a388.jpeg",
      price: "3590 ₴",
      id: 5,
    },
    {
      img: "https://media2.vsisvoi.ua/uploads/catalog/products/2023/01/31/581786/gallery/photo_2023-01-31_21-32-14.jpg",
      price: "3770 ₴",
      id: 6,
    },
  ];
  let list = [
    { name: "Популярне", id: 1 },
    { name: "Від меншої ціни", id: 2 },
    { name: "Від більшої ціни", id: 3 },
  ];

  return (
    <>
      <div className="list">
        <section className="category-top">
          <h1 className="category-title">Одяг</h1>
          <div className="category-top__container">
            <div className="category-top__filter">
              <form className="category-top__filter-item">
                <span className="category-top__sort">Сортувати</span>
                <div className="nice-select category-top__select">
                  <span className="current">Популярне</span>
                  <button className="nice-select-btn">▾</button>
                  <div className="nice-select-dropdown">
                    <ul className="nice-select__list">
                      {list.map((item) => (
                        <li className="nice-select__option" key={item.id}>
                          {item.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
        <div className="products">
          <div className="products__container">
            <div className="products__items">
              <div className="products__item">
                {products.map((product) => {
                  return (
                    <div className="card" kye={product.id}>
                      <Link to="/product" className="card__link">
                        <div className="card__img">
                          <img src={product.img || null} alt="card-img" />
                        </div>
                        <div className="card__info">
                          <div className="card__brand">Love Vivienne</div>
                          <div className="card__title">Куртка</div>
                          <div className="card__price">{product.price}</div>
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
