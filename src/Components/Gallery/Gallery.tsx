import "./style.css";

interface Gallery {
  arrayOfPhotos: string[];
  maxPhotosCount: number;
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  modalActive: boolean;
  setPopUpContent: React.Dispatch<React.SetStateAction<string[]>>;
}

export const Gallery = ({
  arrayOfPhotos,
  maxPhotosCount,
  setModalActive,
  modalActive,
  setPopUpContent,
}: Gallery) => {
  let newArray = arrayOfPhotos.slice(0, 4);

  const handleClick = () => {
    setModalActive(true);
    setPopUpContent(arrayOfPhotos);
  };

  const photosCountValidation = arrayOfPhotos.length > maxPhotosCount;

  return (
    <div className="review-card__gallery" onClick={handleClick}>
      {newArray.map((pic, index) => (
        <div
          key={index}
          className={
            index == maxPhotosCount - 1 && photosCountValidation
              ? "review-card__gallery-picture-wrapper review-card__gallery-picture-wrapper-colored"
              : "review-card__gallery-picture-wrapper"
          }
        >
          {index == maxPhotosCount - 1 && photosCountValidation && (
            <span className="review-card__count-of-hidden-pictures">
              +{arrayOfPhotos.length - maxPhotosCount}
            </span>
          )}
          <img src={pic} alt="photo" />
        </div>
      ))}
    </div>
  );
};
