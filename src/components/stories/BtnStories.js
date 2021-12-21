import React from "react";
import style from "./stories.module.css";
//getting props for button characteristics
//But are not aur aim here so leave it
const BtnStories = (props) => {
  return (
    <div>
      <button
        className={
          props.direction === "next"
            ? `${style.btnSlide} ${style.next}`
            : `${style.btnSlide} ${style.prev}`
        }
        onClick={props.moveSlide}
      >
        <img
          // src={props.direction === "next" ? rightArrowIcon : leftArrowIcon}
          src=""
          alt=""
        />
      </button>
    </div>
  );
};

export default BtnStories;
