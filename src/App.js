import "./styles.css";
import React from "react";
import Navbar from "./Navbar";
import Movielist from "./Movielist";
import { data } from "./data";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="tabs">
          <div className="tab">MOVIES</div>
          <div className="tab">FAVOURITES</div>
        </div>
        <div className="list">
          {data.map((movie) => {
            return <Movielist movie={movie} key={movie.id} />;
          })}
        </div>
      </div>
    );
  }
}

export default App;
