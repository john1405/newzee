import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  constructor(){
    super();
    console.log("NewsItem insider");
  }
  render() {
    return (
      <div className="container my-3">
        <h2>Newzee -- Top Bulletins </h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItem title="Nothing" description="just checking" imageUrl="https://imageio.forbes.com/specials-images/imageserve//629a1786657a8856c24fcbbb/0x0.jpg?format=jpg&width=1200" />
          </div>
          <div className="col-md-4">
            <NewsItem />
          </div>
          <div className="col-md-4">
            <NewsItem />
          </div>
        </div>
      </div>
    );
  }
}
