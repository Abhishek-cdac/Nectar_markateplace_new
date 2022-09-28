import React from "react";
import dummyData from "../Dummydata";
import Tables from "../../Components/Admin/Tables";

const Worldmap = () => {
  return (
    <section id="worldmap">
      <div className="cont">
        <img className="WorldMap_img" src="/assets/images/World map.webp" />
        <Tables column={dummyData?.WorldMapDataHeading} data={dummyData.WorldMapData}/>
      </div>
    </section>
  );
};

export default Worldmap;
