import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
      let {title , description} = this.props;
    return (
      <div>
          <div className="card" style={{width: "18rem"}}>
        <img src="https://imageio.forbes.com/specials-images/imageserve//629a1786657a8856c24fcbbb/0x0.jpg?format=jpg&width=1200" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title"> {title}</h5>
            <p className="card-text">{description}</p>
            <a href="/" className="btn btn-primary">Go somewhere</a>
        </div>
        </div>
      </div>
    )
  }
}
