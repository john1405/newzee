import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {

  articles =[
    
  ]

  constructor(){
    super();
    console.log("NewsItem insider");
    this.state = {
      articles : this.articles,
      loading: false,
    }
  }

  async componentDidMount(){
    console.log("himanshu");
    let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=6f59e4c526b64b07b13a122bf7162235";
    let data = await fetch(url);
    let paresedData  = await data.json();
    this.setState({articles : paresedData.articles});
    console.log(paresedData);
  }

  render() {
    return (
      <div className="container my-3">

        <h2>Newzee -- Top Bulletins </h2>
        {this.state.articles.map((element)=>{console.log(element)})}
        <div className="row">
        {this.state.articles.map((element)=>{
          return  <div className="col-md-4" key={element.url}>
          <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage?element.urlToImage:"https://c.ndtvimg.com/2022-07/4c8etp6o_crypto-trading_625x300_05_July_22.jpg"} 
          newsUrl = {element.url}
          />
        </div>
        })}
         
        </div>
      </div>
    );
  }
}
