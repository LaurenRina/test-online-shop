import React from "react";
import { Link } from "react-router-dom";
import "./styles/Authorization.css";

export default function Authorization() {
  return (
    <>
      <div className="authorization">
        <section className="authorization-title-wr">
          <h1 className="authorization-title">Вхід</h1>
        </section>
        <div className="authorization container">
          <div className="authorization-content">
            <div className="authorization-text">
              Увійти за допомогою
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png"
                alt="Google account"
              />
            </div>
            <form className="authorization-form authorization-form-profile">
              <div className="authorization-form__item">
                <div className="form-group">
                  <label className="control-label" for="profile-first_name">
                    Email
                  </label>
                  <div className="form-questions__item">
                    <input type="text" className="form-control"></input>
                  </div>
                </div>
              </div>
              <div className="authorization-form__item">
                <div className="form-group">
                  <label className="control-label" for="profile-last_name">
                    Пароль
                  </label>
                  <div className="form-questions__item">
                    <input type="text" className="form-control"></input>
                  </div>
                </div>
              </div>
              <div className="authorization-form__item">
                <div className="authorization-form__btn">
                  <Link to="/profile" className="button-authorization">
                    Увійти
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
