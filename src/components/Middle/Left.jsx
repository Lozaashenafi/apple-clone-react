import React from "react";

function Left({
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
}) {
  return (
    <div className="left-side-wrapper col-sm-12 col-md-6">
      <div className="left-side-container">
        <div className="logo-wrapper">
          <img src={logo} />
        </div>
        <div className={titleclassname}>{title}</div>
        <div className={descriptionclassname}>{description}</div>
        <div className="price-wrapper">{pricedesciption}</div>

        <div className={linkwraper}>
          <ul>
            <li>
              <a href="">{firstlink}</a>
            </li>
            <li>
              <a href="">{secondlink}</a>
            </li>
          </ul>
        </div>
        <div className="top-logo-wrapper"></div>

        <div className="tvshow-logo-wraper">
          <img src={logobot} />
        </div>

        <div className={playlink}>
          <a href="#">{caption}</a>
        </div>
      </div>
    </div>
  );
}

export default Left;
