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
    })
  }

  updateBookFilter = (bookFilter) => {
    this.setState({
      bookFilter,
    })
  }

  updatePrintFilter = (printFilter) => {
    this.setState({
      printFilter,
    })
  }



  fetchBooks = (search) => {
    let url = `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyCFPV5tutDwVJkBJZS0NzkljCzq_3UAXtQ`;
    // const options = {
    //     method: `GET`,
    //     headers: {
    //       "Authorizaiton": "Bearer AIzaSyCFPV5tutDwVJkBJZS0NzkljCzq_3UAXtQ",
    //       "Accept": "application/json"
    //     }
    if (this.state.bookFilter && this.state.printFilter) {
      url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.search}&filter=${this.state.filter}&printType=${this.state.printType}&key=AIzaSyCFPV5tutDwVJkBJZS0NzkljCzq_3UAXtQ`
    } else if (this.state.bookFilter) {
      url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.search}&filter=${this.state.filter}&key=AIzaSyCFPV5tutDwVJkBJZS0NzkljCzq_3UAXtQ`
    } else if (this.state.printFilter) {
      url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.search}&printType=${this.state.printType}&key=AIzaSyCFPV5tutDwVJkBJZS0NzkljCzq_3UAXtQ`
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
      this.setState({
        books: data.items,
        error: null
      });
    })
    .catch(err => {
      this.setState({
        error: err.message
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
