import React from "react";
import "./top.css";

function Top({
  bgcontainer,
  news,
  title,
  description,
  pricedesc,
  firstlink,
  secondlink,
  caption1,
  caption2,
  priceclassname,
  linkwraper,
  titleclassname,
  descclassname,
}) {
  return (
    <>
      <section className={bgcontainer}>
        <div className="container">
          <div className="new-alert">{news}</div>

          <div className={titleclassname}>{title}</div>

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

          <div className="ipod-caption row">
            <div className="col-sm-12 col-md-6 text-md-right">{caption1}</div>
            <div className="col-sm-12 col-md-6 text-md-left">{caption2}</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Top;
