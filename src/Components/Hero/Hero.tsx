import Barselona from "../../assets/Barcelona.png";
import "./style.css";

export const Hero = () => {
  return (
    <section className="section-hero">
      <div className=" container">
        <div className="section">
          <div className="row">
            <div className="col-6 no-padding-right">
              <picture>
                <img src={Barselona} alt="Picture of Barselona" />
              </picture>
            </div>
            <div className="col-6 section-hero__right-side">
              <div className="section-hero__right-side-inner-wrapper">
                <h1 className="section-hero__heading">
                  Барселона — обзор города
                </h1>
                <p className="section-hero__descr">
                  Барселона с её золотистыми пляжами, архитектурными шедеврами
                  Гауди, многочисленными фестивалями и гастрономическим
                  разнообразием понравилась мне в первый же день пребывания и
                  стала местом, в котором...
                </p>
                <button className="btn-reset hero-section__btn">
                  Читать дальше
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
