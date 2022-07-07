import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export default class News extends Component {

  articles =[
    
  ]

  constructor(){
    super();
    console.log("NewsItem insider");
    this.state = {
      articles : this.articles,
      loading: false,
      page :1,
    }
  }

  async componentDidMount(){
    console.log("himanshu");
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=6f59e4c526b64b07b13a122bf7162235&page=1&pageSize=${this.props.pageSize}`;
    this.setState({
      loading:true
     })
    
    let data = await fetch(url);
    let paresedData  = await data.json();
    this.setState({
      articles : paresedData.articles,
    loading:false,
    });
    console.log(paresedData);
  }
  
   handleNextClick = async()=>{

    
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=6f59e4c526b64b07b13a122bf7162235&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
   
   this.setState({
    loading:true
   })
    let data = await fetch(url);
    let paresedData  = await data.json();
    this.setState({articles : paresedData.articles,totalResults:paresedData.totalResults});

    this.setState({
      page:this.state.page+1,
      articles:paresedData.articles,
      loading:false,

    })
  
  }
  handlePreviousClick = async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=6f59e4c526b64b07b13a122bf7162235&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    this.setState({
      loading:true
     })
    let data = await fetch(url);
    let paresedData  = await data.json();
    this.setState({articles : paresedData.articles});

    this.setState({
      page:this.state.page-1,
      articles:paresedData.articles,
      loading:false,

    })
  }

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center">Newzee -- Top Bulletins</h2>
        {this.state.loading && <Spinner/>}
        <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{
          return  <div className="col-md-4" key={element.url}>
          <NewsItem  title={element.title?element.title.slice(0,45):""} 
          description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage?element.urlToImage:"https://c.ndtvimg.com/2022-07/4c8etp6o_crypto-trading_625x300_05_July_22.jpg"} 
          newsUrl = {element.url}
          />
        </div>
        })}
         
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
        <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>

        </div>
      </div>
    );
  }
}
 