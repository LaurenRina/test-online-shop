import React from "react";
import { Link } from "react-router-dom";
import "./styles/Bag.css";

export default function Bag() {
  return (
    <>
      <div className="bag">
        <section className="empty-bag">
          <h2 className="bag-title">ВАШ КОШИК ПОРОЖНІЙ</h2>
          <div className="empty-bag__content">
            <p className="empty-bag__text">
              Додайте щось, щоб заощадити час та зробити шопінг ще приємнішим.
            </p>
            <Link to="/authorization" className="button-bag">
              Почати шопінг
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
