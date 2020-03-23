import React from "react";
import "./Content.css";
function Content({ items, loading, error }) {
  return (
    <div className="content-style">
      {<p>Loading</p> && loading}
      {<p>error</p> && error}

      {items.map((item, key) => {
        return (
          <div key={key} className="card">
            <img
              className="card-img"
              src={item.images["Poster Art"]["url"]}
              alt={item.title}
            />
            <p>{item.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Content;
