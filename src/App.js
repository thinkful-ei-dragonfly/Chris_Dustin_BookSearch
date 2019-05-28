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
      search: null,
      printFilter: null,
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

  componentDidMount() {
    const url = `https://www.googleapis.com/books/v1/volumes?q=harry&key=AIzaSyCFPV5tutDwVJkBJZS0NzkljCzq_3UAXtQ`;
    // const options = {
    //     method: `GET`,
    //     headers: {
    //       "Authorizaiton": "Bearer AIzaSyCFPV5tutDwVJkBJZS0NzkljCzq_3UAXtQ",
    //       "Accept": "application/json"
    //     }

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
      });
  }



  render() {
    const results = this.state.books;
    return (
      <main>
        <header>
          <h1>Google Book Search</h1>
        </header>
        <div className='searchBar'>
          <Search updateSearch={this.updateSearch}/>
        </div>
        <div className = 'filterBar'>
          <Filter updateBookFilter={this.updateBookFilter} updatePrintFilter={this.updatePrintFilter}/>
        </div>
        <List items={results} />
      </main>
    );
  }
}

export default App;
