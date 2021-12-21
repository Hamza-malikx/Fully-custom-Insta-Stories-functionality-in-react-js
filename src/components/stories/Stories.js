import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import data from "../data/data";
import style from "./stories.module.css";
import BtnStories from "./BtnStories";
import { useNavigate } from "react-router-dom";
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const Stories = () => {
  //to check if image is being draged
  // const [drag, setDrag] = useState(false);
  //for getting selected user id
  let query = useQuery();
  const response = query.get("id");

  const currentUserData = data[response - 1];
  //getting the length of stories and saving in a variable this will be helpful later
  const length = currentUserData.stories.length;
  //useNavigate for navigation
  const history = useNavigate();

  //simple state just to check the current index of story
  //which story user is at and how many left
  const [slideIndex, setSlideIndex] = useState(1);

  //this function is triggered when user right side for next story
  const nexSlide = () => {
    //if user stories are not completed go to the next story of current user
    if (slideIndex !== currentUserData.stories.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === currentUserData.stories.length) {
      //if all user stories are completed go to the home page logic
      if (parseInt(response) + 1 === data.length + 1) {
        history("/");
      } else {
        //if one users stories are ended go to the next user stories
        setSlideIndex(1);

        history(`/stories?id=${parseInt(response) + 1}`);
      }
    } else {
    }
  };
  //same logic here as previous just obvious that it is for backward going
  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      if (parseInt(response) - 1 === 0) {
        history("/");
      } else {
        history(`/stories?id=${parseInt(response) - 1}`);
      }
    }
  };
  // this function is for progressbar logic which move with each stories
  // if a user has two stories then two paraller progress bars and so on
  const moveDot = (index) => {
    setSlideIndex(index);
  };
  const closeStory = () => {
    history("/");
  };

  return (
    <div className={style.Main}>
      <div className={style.containerSlider}>
        {currentUserData.stories.map((data, index) => {
          return (
            <div
              className={
                slideIndex === index + 1
                  ? `${style.slide} ${style.activeAnim}`
                  : `${style.slide}`
              }
              key={index}
            >
              <div className={style.crossIcon} onClick={closeStory}>
                <svg
                  aria-label="Close"
                  className="_8-yf5 "
                  color="#ffffff"
                  fill="#ffffff"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <polyline
                    fill="none"
                    points="20.643 3.357 12 12 3.353 20.647"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  ></polyline>
                  <line
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    x1="20.649"
                    x2="3.354"
                    y1="20.649"
                    y2="3.354"
                  ></line>
                </svg>
              </div>
              <img
                width="100"
                src={data.story}
                alt=""
                // onMouseDown={() =>
                //   console.log(drag ? closeStory() : closeStory())
                // }
                // onMouseMove={() => setDrag(false)}
                // onMouseUp={() => setDrag(true)}
                onMouseDown={closeStory}
              />
            </div>
          );
        })}

        <BtnStories moveSlide={nexSlide} direction={"next"} />
        <BtnStories moveSlide={prevSlide} direction={"prev"} />

        <div className={style.containerDots}>
          {Array.from({ length: length }).map((item, index) => (
            <div
              key={index}
              onClick={() => moveDot(index + 1)}
              className={
                slideIndex === index + 1
                  ? `${style.dot} ${style.active}`
                  : `${style.dot}`
              }
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stories;
