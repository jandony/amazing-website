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
              src="https://assets-global.website-files.com/57e28713ba08d28127821e9c/5d7ba73163a906ead7e24b5f_Chalk_Performance_Training%402x.jpg"
              alt="company logo"
            />
          </div>
        </div>
        <div className="slideTitle">
          <div className="logo">
            <img
              src="https://assets-global.website-files.com/57e28713ba08d28127821e9c/5d7ba72d0661b7c305aa2412_CF_Jhawk_Fitness%402x.jpg"
              alt="company logo"
            />
          </div>
        </div>
        <div className="slideTitle">
          <div className="logo">
            <img
              src="https://assets-global.website-files.com/57e28713ba08d28127821e9c/5d7ba72863a9069336e24b52_Vogue_Fitness%402x.jpg"
              alt="company logo"
            />
          </div>
        </div>
        <div className="slideTitle">
          <div className="logo">
            <img
              src="https://assets-global.website-files.com/57e28713ba08d28127821e9c/5d7ba72563a90616a1e24b4d_Street_Parking%402x.jpg"
              alt="company logo"
            />
          </div>
        </div>
        <div className="slideTitle">
          <div className="logo">
            <img
              src="https://assets-global.website-files.com/57e28713ba08d28127821e9c/5d7ba72e3a8c25810b4f8cd0_CF_Metric%402x.jpg"
              alt="company logo"
            />
          </div>
        </div>
        <div className="slideTitle">
          <div className="logo">
            <img
              src="https://assets-global.website-files.com/57e28713ba08d28127821e9c/5d7ba732a48b02e3b5f3e289_CF_Hells_Kitchen%402x.jpg"
              alt="company logo"
            />
          </div>
        </div>
        <div className="slideTitle">
          <div className="logo">
            <img
              src="https://assets-global.website-files.com/57e28713ba08d28127821e9c/5d7ba72bf5b5b22a6bbbdb98_CF_ASAP%402x.jpg"
              alt="company logo"
            />
          </div>
        </div>
      </Slider>
    </React.Fragment>
  );
}
