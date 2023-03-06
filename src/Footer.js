import React from "react";
import "./styles/Footer.css";

function Item(props) {
  return <li>{props.name}</li>;
}

function Footer() {
  const clients = [
    { name: "доставка", id: 1 },
    { name: "оплата", id: 2 },
    { name: "поширені запитання", id: 3 },
    { name: "контакти", id: 4 },
  ];
  const partners = [
    { name: "приєднатися до платформи", id: 1 },
    { name: "преса про нас", id: 2 },
  ];
  return (
    <>
      <footer className="footer">
        <div className="footer__info footer-info">
          <div className="container">
            <div className="footer-info__mail">
              <div className="footer-info__payment info-payment">
                <div className="info-payment__link">
                  <a href="/">
                    <img
                      src="logo-white.png"
                      className="logo-img"
                      alt="Всі. Свої"
                    />
                  </a>
                </div>
                <div className="info-payment__cards">
                  <img src="visa-card.jpeg" className="card-img" alt="Visa" />
                  <img
                    src="mastercard-card.jpeg"
                    className="card-img"
                    alt="Mastercard"
                  />
                </div>
              </div>
              <div className="footer-info__information info-information">
                <div className="info-information__item footer-spoller">
                  <div className="_spoller__title footer-spoller__title">
                    Покупцям
                  </div>
                  <div className="_spoller__content footer-spoller__body">
                    <ul>
                      {clients.map((item) => (
                        <Item name={item.name} key={item.id} />
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="info-information__item footer-spoller">
                  <div className="_spoller__title footer-spoller__title">
                    Партнерам
                  </div>
                  <div className="_spoller__content footer-spoller__body">
                    <ul>
                      {partners.map((item) => (
                        <Item name={item.name} key={item.id} />
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom footer-bottom container">
          <div className="footer-bottom__item">Розробка та підтримка</div>
          <div className="footer-bottom__item">
            Усі права захищені 2023 vsisvoi.ua
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
