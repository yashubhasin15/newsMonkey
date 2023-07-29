import React, { Component } from 'react'

export default class NewsItems extends Component {
    render() {
        let {title, desc, imageUrl, url, source, date}= this.props;
        return (
            <div className="card bg-light">
                <span className="position-absolute end-0 d-flex badge rounded-pill bg-danger">{source}</span>
                <img src={imageUrl? imageUrl:'https://media.istockphoto.com/photos/breaking-news-world-news-with-map-backgorund-picture-id1182477852?k=20&m=1182477852&s=612x612&w=0&h=I3wdSzT_5h1y9dHq_YpZ9AqdIKg8epthr8Guva8FkPA='} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc}</p>
                    <h6 className='my-3'>Published At: {new Date(date).toUTCString()}</h6>
                    <a href={url} className="btn btn-sm text-white" style={{backgroundColor:'#ff4c68'}}>Read More</a>
                </div>
            </div>
        )
    }
}
