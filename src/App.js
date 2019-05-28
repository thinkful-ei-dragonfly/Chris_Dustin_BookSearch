import React, { Component } from "react";
import "./App.css";
import List from "./List";
import Search from './Search';
import Filter from './Filter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      bookFilter: null,
      printFilter: null,
      search: null,
    };
  }

  updateSearch = (search) => {
    this.setState({
      search,
    }, this.fetchBooks)
  }

  updateBookFilter = (bookFilter) => {
    this.setState({
      bookFilter,
    }, this.fetchBooks)
  }

  updatePrintFilter = (printFilter) => {
    this.setState({
      printFilter,
    },this.fetchBooks)
  }

  renderErrorMessage() {
    if (this.state.error) {
    return <>
          {this.state.error}
          </>
    } else {
      return ``;
    }
  }



  fetchBooks = () => {
    let url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.search}&key=AIzaSyCFPV5tutDwVJkBJZS0NzkljCzq_3UAXtQ`;
    // const options = {
    //     method: `GET`,
    //     headers: {
    //       "Authorizaiton": "Bearer AIzaSyCFPV5tutDwVJkBJZS0NzkljCzq_3UAXtQ",
    //       "Accept": "application/json"
    //     }
    if (this.state.bookFilter && this.state.printFilter) {
      url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.search}&filter=${this.state.bookFilter}&printType=${this.state.printFilter}&key=AIzaSyCFPV5tutDwVJkBJZS0NzkljCzq_3UAXtQ`
      } else if (this.state.bookFilter) {
      url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.search}&filter=${this.state.bookFilter}&key=AIzaSyCFPV5tutDwVJkBJZS0NzkljCzq_3UAXtQ`
    } else if (this.state.printFilter) {
      url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.search}&printType=${this.state.printFilter}&key=AIzaSyCFPV5tutDwVJkBJZS0NzkljCzq_3UAXtQ`
    } 

    fetch(url)
    .then(res => {
      if (!res.ok) {
        throw new Error("Something went wrong, please try again later.");
      }
      return res;
    })
    .then(res => res.json())
    .then(data => {
      if (!data.items) {
        throw new Error (`There are no results for your search`)
      }
      console.log(data);
      this.setState({
        books: data.items,
        error: null
      });
    })
    .catch(err => {
      this.setState({
        error: err.message,
        books: []
      });
    })
  }


  render() {
    const results = this.state.books;
    return (
      <main>
        <header>
          <h1>Google Book Search</h1>
        </header>
        <div className='searchBar'>
          <Search updateSearch={this.updateSearch} fetchBooks={this.fetchBooks}/>
          {this.renderErrorMessage()}
        </div>
        <div className = 'filterBar'>
          <Filter updateBookFilter={this.updateBookFilter} updatePrintFilter={this.updatePrintFilter} fetchBooks={this.fetchBooks}/>
        </div>
        <List items={results} />
      </main>
    );
  }
}

export default App;
