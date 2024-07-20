import "react-multi-carousel/lib/styles.css";
import { reviewCardsArray } from "../../Users/Users";
import { Review } from "../Review/Review";
import {
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  ReactPortal,
  useState,
} from "react";
import { PopUp } from "../PopUp/PopUp";
import "../../index.css";
import "./style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GallerySlider } from "./GallerySlider";
import { ReviewsSlider } from "./ReviewsSlider";


export const Reviews = () => {
  const [modalActive, setModalActive] = useState(false);
  const [popUpContent, setPopUpContent] = useState<string[]>([]);

  return (
    <section className="section-reviews">
      <div className="container">
        <div className="section section-reviews__wrapper">
          <h2 className="reviews-heading">Отзывы о Барселоне</h2>
          <div className="carusel-review-wrapper">
          <ReviewsSlider
                    modalActive={modalActive}
                    setModalActive={setModalActive}
                    setPopUpContent={setPopUpContent}
                  />
            <button className="btn-reset section-review__btn">
              Все отзывы
            </button>
          </div>
          <PopUp modalActive={modalActive} setModalActive={setModalActive}>
            <GallerySlider popUpContent={popUpContent}></GallerySlider>
          </PopUp>
        </div>
      </div>
    </section>
  );
};

