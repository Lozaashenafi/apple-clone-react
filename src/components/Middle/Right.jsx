import React from "react";

function Right({
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
    <div className="right-side-wrapper  col-sm-12 col-md-6">
      <div className="right-side-container">
        <div className="top-logo-wrapper">
          <div className="logo-wrapper">
            <img src={logo1} />
          </div>
        </div>
        <div className={titleclassname1}>{title1}</div>
        <div className={descriptionclassname1}>{description1}</div>
        <div className="price-wrapper">{pricedesciption1}</div>
        <div className={linkwraper1}>
          <ul>
            <li>
              <a href="">{firstlink1}</a>
            </li>
            <li>
              <a href="">{secondlink1}</a>
            </li>
          </ul>
        </div>
        <div className="tvshow-logo-wraper">
          <img src={logobot1} />
        </div>
      </div>
    </div>
  );
}

export default Right;
