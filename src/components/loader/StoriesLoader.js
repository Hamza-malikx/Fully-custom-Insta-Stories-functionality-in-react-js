import React from "react";
import style from "./storiesLoader.module.css";
import data from "../data/data";
import { Link } from "react-router-dom";

const StoriesLoader = () => {
  return (
    //Mapping dummy data obviously could map any data getting from api in response
    <div className={style.storiesLoader}>
      {data.map((item, id) => {
        return (
          <Link
            to={`/stories?id=${item.id}`}
            key={item.id}
            className={style.story}
          >
            <img src={item.img} alt="" />
            <svg viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" />
            </svg>
          </Link>
        );
      })}
    </div>
  );
};

export default StoriesLoader;
