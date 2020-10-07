import React from "react";
import Slider from "infinite-react-carousel";

export default function FeaturesCarousel() {
  return (
    <React.Fragment>
      <Slider
        dots
        arrows={false}
        // slidesPerRow={5}
        slidesToShow={1}
        swipe={true}
        // autoplay={true}
      >
        <div>
          <img
            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt="community"
          />
          <h3>Membership Management</h3>
          <p>
            A quick description about this topic and it will be the best thing
            in the world!
          </p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt="community"
          />
          <h3>Insights</h3>
          <p>
            A quick description about this topic and it will be the best thing
            in the world!
          </p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1448387473223-5c37445527e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt="community"
          />
          <h3>Automated Billing</h3>
          <p>
            A quick description about this topic and it will be the best thing
            in the world!
          </p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1323&q=80"
            alt="community"
          />
          <h3>Lead Generation & Tracking</h3>
          <p>
            A quick description about this topic and it will be the best thing
            in the world!
          </p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1476611317561-60117649dd94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt="community"
          />
          <h3>Class Scheduling</h3>
          <p>
            A quick description about this topic and it will be the best thing
            in the world!
          </p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1600741476293-0a8671befb55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80"
            alt="community"
          />
          <h3>The Community</h3>
          <p>
            A quick description about this topic and it will be the best thing
            in the world!
          </p>
        </div>
      </Slider>
    </React.Fragment>
  );
}
