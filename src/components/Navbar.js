import React, { Component } from 'react'

export default class Navbar extends Component {
    constructor(){
        super();
        this.state={
            search:''
        }
      }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:'#ff4c68'}}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">News Monkey</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item nav-link" onClick={()=>{this.props.changeCategory('general')}} style={{cursor:'pointer'}}>Home</li>
                        <li className="nav-item nav-link" onClick={()=>{this.props.changeCategory('business')}} style={{cursor:'pointer'}}>Business</li>
                        <li className="nav-item nav-link" onClick={()=>{this.props.changeCategory('entertainment')}} style={{cursor:'pointer'}}>Entertainment</li>
                        <li className="nav-item nav-link" onClick={()=>{this.props.changeCategory('health')}} style={{cursor:'pointer'}}>Health</li>
                        <li className="nav-item nav-link" onClick={()=>{this.props.changeCategory('science')}} style={{cursor:'pointer'}}>Science</li>
                        <li className="nav-item nav-link" onClick={()=>{this.props.changeCategory('sports')}} style={{cursor:'pointer'}}>Sports</li>
                        <li className="nav-item nav-link" onClick={()=>{this.props.changeCategory('technology')}} style={{cursor:'pointer'}}>Technology</li>

                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Country
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li className="dropdown-item" onClick={()=>{this.props.changeCountry(['us','USA'])}}>USA</li>
                            <li className="dropdown-item" onClick={()=>{this.props.changeCountry(['in','India'])}}>India</li>
                            <li className="dropdown-item" onClick={()=>{this.props.changeCountry(['ru','Russia'])}}>Russia</li>
                            <li className="dropdown-item" onClick={()=>{this.props.changeCountry(['au','Australia'])}}>Australia</li>
                            <li className="dropdown-item" onClick={()=>{this.props.changeCountry(['cn','China'])}}>China</li>
                        </ul>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input onChange={(event)=>{this.setState({search: event.target.value})}} value={this.state.search} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button onClick={()=>{this.props.searchBar(this.state.search)}} className="btn btn-light btn-outline-success" type="button">Search</button>
                    </form>
                    </div>
                </div>
            </nav>
        )
    }
}
