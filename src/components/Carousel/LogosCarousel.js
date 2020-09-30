import React from "react";
import Slider from "infinite-react-carousel";

export default function LogosCarousel(props) {
  return (
    <React.Fragment>
      <Slider
        arrows={false}
        slidesToShow={props.totalLogos}
        swipe={true}
        autoplay={true}
      >
        <div className="slideTitle">
          <div className="logo">
            <img
              src="https://assets-global.website-files.com/57e28713ba08d28127821e9c/5db06132ffea69d1c3fbcf76_CF_Medford%402x.png"
              alt="company logo"
            />
          </div>
        </div>
        <div className="slideTitle">
          <div className="logo">
            <img
              src="https://assets-global.website-files.com/57e28713ba08d28127821e9c/5db06132ffea69d1c3fbcf76_CF_Medford%402x.png"
              alt="company logo"
            />
          </div>
        </div>
        <div className="slideTitle">
          <div className="logo">
            <img
              src="https://assets-global.website-files.com/57e28713ba08d28127821e9c/5db06132ffea69d1c3fbcf76_CF_Medford%402x.png"
              alt="company logo"
            />
          </div>
        </div>
        <div className="slideTitle">
          <div className="logo">
            <img
              src="https://assets-global.website-files.com/57e28713ba08d28127821e9c/5db06132ffea69d1c3fbcf76_CF_Medford%402x.png"
              alt="company logo"
            />
          </div>
        </div>
        <div className="slideTitle">
          <div className="logo">
            <img
              src="https://assets-global.website-files.com/57e28713ba08d28127821e9c/5db06132ffea69d1c3fbcf76_CF_Medford%402x.png"
              alt="company logo"
            />
          </div>
        </div>
        <div className="slideTitle">
          <div className="logo">
            <img
              src="https://assets-global.website-files.com/57e28713ba08d28127821e9c/5db06132ffea69d1c3fbcf76_CF_Medford%402x.png"
              alt="company logo"
            />
          </div>
        </div>
        <div className="slideTitle">
          <div className="logo">
            <img
              src="https://assets-global.website-files.com/57e28713ba08d28127821e9c/5db06132ffea69d1c3fbcf76_CF_Medford%402x.png"
              alt="company logo"
            />
          </div>
        </div>
        <div className="slideTitle">
          <div className="logo">
            <img
              src="https://assets-global.website-files.com/57e28713ba08d28127821e9c/5db06132ffea69d1c3fbcf76_CF_Medford%402x.png"
              alt="company logo"
            />
          </div>
        </div>
      </Slider>
    </React.Fragment>
  );
}
