import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";
import { reviewCardsArray } from "../../Users/Users";
import { Review } from "../Review/Review";
import Slider from "react-slick";

function SampleNextArrowReviews() {
  return (
    <div
      style={{ display: "none", background: "red" }}
      onClick={undefined}
    />
  );
}

function SamplePrevArrowReviews() {
  return (
    <div
      style={{ display: "none", background: "green" }}
      onClick={undefined}
    />
  );
}

interface ReviewProps {
  modalActive: boolean;
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  setPopUpContent: React.Dispatch<React.SetStateAction<string[]>>;
}

export const ReviewsSlider = ({
  modalActive,
  setModalActive,
  setPopUpContent,
}: ReviewProps) => {
  const settings = {
    nextArrow: (
      <SampleNextArrowReviews
      />
    ),
    prevArrow: (
      <SamplePrevArrowReviews
      />
    ),
    className: "slider variable-width",
    dots: true,
    infinite: true,
    // centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    appendDots: (
      dots: React.ReactNode
    ) => (
      <div
        style={{
          display: "flex",
          justifyContent: "end",
          right: "-6px",
          bottom: "-58px",
        }}
      >
        <ul className="custom-dots-list"> {dots} </ul>
      </div>
    ),
    customPaging: (i: number) => <div className="custom-dots">{i + 1}</div>,
  };

  return (
    <Slider {...settings}>
      {reviewCardsArray.map((review, index) => (
        <div key={index} style={{ width: 322 }}>
          <Review
            review={review}
            modalActive={modalActive}
            setModalActive={setModalActive}
            setPopUpContent={setPopUpContent}
          />
        </div>
      ))}
    </Slider>
  );
};
