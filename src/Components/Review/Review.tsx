import { formatDate } from "../../Utils/format-date";
import { Gallery } from "../Gallery/Gallery";
import "./style.css";

const maxPhotosCount = 4;

interface Review {
  name: string;
  img: string;
  topic: string;
  message: string;
  gallery: string[];
  createdAt: Date;
  comments: string[];
  rating: number;
}

export interface ReviewProps {
  review: Review;
  modalActive: boolean;
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  setPopUpContent: React.Dispatch<React.SetStateAction<string[]>>;
}

const getCommentText = (count: number): string => {
  if (count === 1) return "комментарий";
  if (count >= 2 && count <= 4) return "комментария";
  return "комментариев";
};


export const Review = ({
  review,
  modalActive,
  setModalActive,
  setPopUpContent,
}: ReviewProps) => {

  return (
    <div className="review-card">
      <div className="review-card__user-info-wrapper">
        <picture className="review-card__picture">
          <img src={review.img} alt="avatar" />
        </picture>
        <h3 className="review-card__user-name">{review.name}</h3>
      </div>
      <h4 className="review-card__topic">
        <span className="review-card__topic-span">БАРСЕЛОНА</span> — О ГОРОДЕ:
      </h4>
      <p className="review-card__descr">{review.message}</p>
      {/* <div className="review-card__gallery" style={{ display: "flex" }}> */}
      <Gallery
        arrayOfPhotos={review.gallery}
        maxPhotosCount={maxPhotosCount}
        setModalActive={setModalActive}
        modalActive={modalActive}
        setPopUpContent={setPopUpContent}
      />
      {/* </div> */}
      <div className="review-card__bottom-section">
        <span className="review-card__data">
          {formatDate(review.createdAt)}
        </span>
        {/* <span className="review-card__comments">{review.comments.length}</span> */}
        <span className="review-card__comments">
          {review.comments.length} <span>{getCommentText(review.comments.length)}</span>
        </span>
        <span className="review-card__like">{review.rating}</span>
      </div>
    </div>
  );
};
