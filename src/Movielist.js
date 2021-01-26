import React from "react";
import "./REACT.css";

const Movielist = (props) => {
  const { movie } = props;
  return (
    <div className="movie-card">
      <div className="left">
        <img alt="" className="poster" src={movie.poster} />
      </div>
      <div className="right">
        <div className="title">{movie.title}</div>
        <div className="plot">{movie.overview}</div>
        <br />
        <div className="genres">
          {movie.genres.map((g) => {
            return <button className="btn">{g}</button>;
          })}
        </div>
        <br />
        <div className="btn1">
          <button className="btn">FAVOURITE</button>
        </div>
      </div>
    </div>
  );
};
export default Movielist;
