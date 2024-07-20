import Slider from "react-slick";

interface GallerySliderProps {
  popUpContent: string[];
}

// Кнопки переключения фото в галлепрее
function SampleNextArrowGallery(props: {
  className: any;
  style: any;
  onClick: any;
}) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-next-arrow`}
      style={{
        ...style,
        display: "block",
        background: "transparent",
        width: "49px",
        height: "45px",
        fontSize: "50px",
        right: "0",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrowGallery(props: {
  className: any;
  style: any;
  onClick: any;
}) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-prev-arrow`}
      style={{
        ...style,
        display: "block",
        background: "transparent",
        width: "49px",
        height: "45px",
        fontSize: "50px",
        left: "0",
        zIndex: "100",
      }}
      onClick={onClick}
    />
  );
}

export const GallerySlider = ({ popUpContent }: GallerySliderProps) => {
  const settingsPhoto = {
    nextArrow: (
      <SampleNextArrowGallery
        className={undefined}
        style={undefined}
        onClick={undefined}
      />
    ),
    prevArrow: (
      <SamplePrevArrowGallery
        className={undefined}
        style={undefined}
        onClick={undefined}
      />
    ),
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
  };

  return (
    <Slider {...settingsPhoto}>
      {popUpContent.map((img, index) => (
        <img className="popup-gallery-image" key={index} src={img} alt="pic" />
      ))}
    </Slider>
  );
};
