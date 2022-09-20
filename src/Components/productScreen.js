import "../App.css";
import { useState } from "react";
import Slider from "react-slick";
import ProductsFooter from "./productsFooter";
import dummyData from "../containers/Dummydata";
import Modal from "./Header/Modal";

function Productscreen() {
  // Slider
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <i class="fa fa-angle-right product-arrow" aria-hidden="true"></i>
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <i class="fa fa-angle-left product-arrow" aria-hidden="true"></i>
      </div>
    );
  };

  const openImage = () => {
    const Image = document.getElementById("myImg");
    const source = Image.src;
    console.log("hvwfvhgsdgcvdssdajvjc", source);
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div>
      <section id="productScreen">
        <div className="container">
          {" "}
          <Slider {...settings}>
            {dummyData?.slidesData2?.map((img, idx) => (
              <div
                className={
                  idx === imageIndex ? "Prodslide ProdactiveSlide" : "Prodslide"
                }
              >
                <img
                  className="productSlideImg"
                  src={img.image}
                  alt={img}
                  onClick={openImage}
                />
              </div>
            ))}
          </Slider>
          <div className="product-banner-content">
            <h2>Description</h2>

            <p>{dummyData.slidesData2[imageIndex].description}</p>
          </div>
        </div>
      </section>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="false"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
  
    </div>
  );
}

export default Productscreen;
