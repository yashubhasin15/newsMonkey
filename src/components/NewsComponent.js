import React, { Component } from 'react'
import NewsItems from './NewsItems'
import PropTypes from 'prop-types'


export default class NewsComponent extends Component {

    static propTypes={
        country: PropTypes.array,
        category: PropTypes.string,
        search: PropTypes.string,
        pageSize: PropTypes.number,
    }

    constructor(){
        super();

        this.state={
            articles: [],
            isLoaded: false,
            page: 1,
        }
    }

    //this fetch can also be done using useEffect hook as we have done in searchbar project(mike dane)
    componentDidMount(){
        fetch(`https://newsapi.org/v2/${this.props.search?`everything?q=${this.props.search}`:`top-headlines?country=${this.props.country[0]}&category=${this.props.category}`}&apiKey=6eab864fccda41bca75ebc19332ee051&pageSize=${this.props.pageSize}`)
        .then(res => res.json())
        .then((result)=>{
            this.setState({
                articles: result.articles,
                isLoaded: true,
                totalResults: result.totalResults,
                page: 1
            })
        })
    }

    handlePrevAndNext= (direction)=>{
        this.setState({isLoaded: false})
        fetch(`https://newsapi.org/v2/${this.props.search?`everything?q=${this.props.search}`:`top-headlines?country=${this.props.country[0]}&category=${this.props.category}`}&apiKey=6eab864fccda41bca75ebc19332ee051&page=${direction==='prev'?this.state.page - 1:this.state.page + 1}&pageSize=${this.props.pageSize}`)
        .then(res => res.json())
        .then((result)=>{
            this.setState({
                articles: result.articles,
                page: direction==='prev'?this.state.page - 1:this.state.page + 1,
                isLoaded: true
            })
        })
        document.documentElement.scrollTop = 0
    }
    
    render() {
        return (
            <div>
                {this.state.isLoaded? 
                <div className="container my-3">
                    <h1 className="d-flex justify-content-center text-capitalize py-3">{this.props.search?`Showing ${this.state.totalResults} Results for "${this.props.search}"`:`Top ${this.props.category!=='general' ? this.props.category:""} headlines from ${this.props.country[1]}`}</h1>
                    <p className="d-flex justify-content-center">{this.state.totalResults>0 && `Page ${this.state.page} of ${Math.ceil(this.state.totalResults/this.props.pageSize)}`}</p>
                    <div className="row">
                        {this.state.articles.map((element)=>{
                            return (
                                <div className="col-md-4 my-3" key={element.url}>
                                    <NewsItems title={element.title} desc={element.description} imageUrl={element.urlToImage} url={element.url} source={element.source.name} date={element.publishedAt}/>
                                </div>
                            )
                        })}
                    </div>
                    <div className="container d-flex justify-content-between my-3">
                        <button onClick={()=>{this.handlePrevAndNext('prev')}} disabled={this.state.page===1} type="button" className="btn btn-dark">&larr; Previous</button>
                        <button onClick={()=>{this.handlePrevAndNext('next')}} disabled={this.state.page>=Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark">Next &rarr;</button>
                    </div>
                </div> 
                : <img style={{display: 'block', margin: 'auto', padding: '70px'}} src='https://miro.medium.com/max/875/1*5ngZiNtGMrp_xmZHxSvJ0g.gif' alt='loading...'></img>
                }
            </div>
        )
    }
}

//api keys: 310ad9d452294dcdb6cbb6415bdceb23 , 6eab864fccda41bca75ebc19332ee051 , 828f6b16fc924afca522a9277cf27e11
