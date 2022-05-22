import React from "react";
import emily from "../images/image-emily.jpg";
import thomas from "../images/image-thomas.jpg";
import jennie from "../images/image-jennie.jpg";
export const Reviews = () => {
  return (
    <div className="reviews">
      <h1 className="reviews__title">Client testimonials</h1>
      <div className="reviews__items">
        <div className="reviews__item  reviews__item--1">
          <img className="reviews__item--img" src={emily} alt="" />
          <p className="review__text">
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <p className="review__name">
            <h3 className="name">Emily R.</h3>
            <h5 className="post">Marketing Director</h5>
          </p>
        </div>
        <div className="reviews__item  reviews__item--2">
          <img className="reviews__item--img" src={thomas} alt="" />
          <p className="review__text">
            Sunnyside’s enthusiasm coupled with their keen interest in our
            brand’s success made it a satisfying and enjoyable experience.
          </p>
          <p className="review__name ">
            <h3 className="name"> Thomas S.</h3>
            <h5 className="post">Chief Operating Officer</h5>
          </p>
        </div>
        <div className="reviews__item reviews__item--3">
          <img className="reviews__item--img" src={jennie} alt="" />
          <p className="review__text">
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </p>
          <p className="review__name">
            <h3 className="name"> Jennie F.</h3>

            <h5 className="post">Business Owner</h5>
          </p>
        </div>
      </div>
    </div>
  );
};
