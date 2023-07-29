import React,{Component} from 'react';
import Navbar from './components/Navbar';
import NewsComponent from './components/NewsComponent';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component{
  constructor(){
    super();
    this.state={
        search:'',
        category: 'general',
        country: ['in','India'],
        key:1,
        progress:0
    }
  }

  //this is to increase loading bar which is brought from npm package
  setProgress= (progress)=>{
    this.setState({
      progress: progress
    })
  }

  searchQuery= (searchTerm)=>{
    this.setState({
      search: searchTerm,
      key: this.state.key+1
    })
    this.setProgress(100);
  }

  changeCategory= (category)=>{
    this.setState({
      category: category,
      search:'',
      key: this.state.key+1
    })
    this.setProgress(100);
  }

  changeCountry= (country)=>{
    this.setState({
      country: country,
      search:'',
      key: this.state.key+1
    })
    this.setProgress(100);
  }

  render(){
    return(
      // changed key after every state change because component doesn't rerender if state changes dynamically. But if key changes, component will rerender
      <div key={this.state.key}>
        <Navbar searchBar={this.searchQuery} changeCategory={this.changeCategory} changeCountry={this.changeCountry}/>
        <LoadingBar color='#ffffff' height={3} loaderSpeed={1000} progress={this.state.progress} onLoaderFinished={() => this.setProgress(0)}/>
        <NewsComponent pageSize={12} search={this.state.search} category={this.state.category} country={this.state.country}/>
      </div>
    )
  }
}