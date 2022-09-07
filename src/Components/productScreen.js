import "../App.css";
import { useState } from "react";
import Slider from "react-slick";
import ProductsFooter from "./productsFooter";
import dummyData from "../containers/Dummydata";



function App() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <i class="fa fa-angle-right" aria-hidden="true"></i>
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <i class="fa fa-angle-left" aria-hidden="true"></i>
      </div>
    );
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
    <div className="App">
      <section id="productScreen" style={{ height: "35em" }}>
        <div className="container product-container">
          {console.log("images", dummyData)}
          <Slider {...settings}>
            {dummyData?.slidesData?.map((img, idx) => (
              <div
                className={idx === imageIndex ? "slide activeSlide" : "slide"}
              >
                <img src={img.image} alt={img} />
              </div>
            ))}
          </Slider>
        </div>
        <div className="product-banner-content">
          <h4>Description</h4>

          <p>{dummyData.slidesData[imageIndex].description}</p>
        </div>
      </section>
      <ProductsFooter/>
    </div>
  );
}

export default App;
