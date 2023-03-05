import React from "react";
import "./styles/Profile.css";

export default function Profile() {
  return (
    <>
      <div className="profile">
        <section className="account-title-wr">
          <h1 className="account-title">МІЙ АКАУНТ</h1>
        </section>
        <div className="account container">
          <div className="account-content">
            <form className="account-form account-form-profile">
              <div className="account-form__item">
                <div className="form-group">
                  <label className="control-label" for="profile-first_name">
                    Ім’я
                  </label>
                  <div className="form-questions__item">
                    <input type="text" className="form-control"></input>
                  </div>
                </div>
              </div>
              <div className="account-form__item">
                <div className="form-group">
                  <label className="control-label" for="profile-last_name">
                    Прізвище
                  </label>
                  <div className="form-questions__item">
                    <input type="text" className="form-control"></input>
                  </div>
                </div>
              </div>
              <div className="account-form__item">
                <div className="form-group">
                  <label className="control-label" for="profile-phone">
                    Телефон
                  </label>
                  <div className="form-questions__item">
                    <input type="text" className="form-control"></input>
                  </div>
                </div>
              </div>
              <div className="account-form__item">
                <div className="form-group">
                  <label className="control-label" for="profile-email">
                    Email
                  </label>
                  <div className="form-questions__item">
                    <input type="text" className="form-control"></input>
                  </div>
                </div>
              </div>
              <div className="account-form__item">
                <div className="account-form__btn">
                  <button type="submit" className="button-cart">
                    Оновити профіль
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
