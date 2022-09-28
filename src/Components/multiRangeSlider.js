import React, { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";

function MultirangeSlider() {
  const [minValue, set_minValue] = useState(25);
  const [maxValue, set_maxValue] = useState(75);
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12" style={{border:"none"}}>
            <MultiRangeSlider
              min={0}
              max={100}
              step={5}
              ruler={true}
              label={true}
              preventWheel={false}
              minValue={minValue}
              maxValue={maxValue}
              onInput={(e) => {
                handleInput(e);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default MultirangeSlider;
