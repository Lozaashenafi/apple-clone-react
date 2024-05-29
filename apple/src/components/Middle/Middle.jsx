import React from "react";
import Left from "./Left";
import Right from "./Right";
import "./middle.css";

function Middle({
  middleclassname,
  logo,
  title,
  description,
  pricedesciption,
  linkwraper,
  firstlink,
  secondlink,
  logobot,
  caption,
  playlink,
  titleclassname,
  descriptionclassname,
  title1,
  logo1,
  description1,
  pricedesciption1,
  linkwraper1,
  firstlink1,
  secondlink1,
  logobot1,
  caption1,
  playlink1,
  titleclassname1,
  descriptionclassname1,
}) {
  return (
    <section className={middleclassname}>
      <div className="container-fluid">
        <div className="row">
          <Left
            logo={logo}
            title={title}
            description={description}
            pricedesciption={pricedesciption}
            linkwraper={linkwraper}
            firstlink={firstlink}
            secondlink={secondlink}
            logobot={logobot}
            caption={caption}
            playlink={playlink}
            titleclassname={titleclassname}
            descriptionclassname={descriptionclassname}
          />
          <Right
            logo1={logo1}
            title1={title1}
            description1={description1}
            pricedesciption1={pricedesciption1}
            linkwraper1={linkwraper1}
            firstlink1={firstlink1}
            secondlink1={secondlink1}
            logobot1={logobot1}
            caption1={caption1}
            playlink1={playlink1}
            titleclassname1={titleclassname1}
            descriptionclassname1={descriptionclassname1}
          />
        </div>
      </div>
    </section>
  );
}

export default Middle;
