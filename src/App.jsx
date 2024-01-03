import React, { Component } from 'react';
import './App.css';
import starWarsEmblem from "./Star-Wars-Emblem.png";
import Searchbox from './Searchbox';
import CardList from './CardList';
import ScrollBar from './ScrollBar';

class App extends Component {

  constructor() {
    super()
    this.state = {
      arrayOfStarWars: [],
      searchField : ""
    };
  }

  componentDidMount() {
    const arrayOfSwapi = [];

    async function fetching() {
      try {
        const fetchApi = await fetch("https://swapi.py4e.com/api/people/");
        const response = await fetchApi.json();
        for (let index = 1; index <= response.count; index++) {
          try {
            const swapiLink = `https://swapi.py4e.com/api/people/${index}`;
            arrayOfSwapi.push(swapiLink);
          } catch (error) {
            console.log("error", error);
          }
        }
        console.log(arrayOfSwapi);
      } catch (error) {
        console.log("error", error);
      }
    }

    const fetchingStarWars = async () => {
      const { arrayOfStarWars } = this.state;
      for await (const starWar of arrayOfSwapi) {
        try {
          const fetchStarWar = await fetch(starWar);
          const response = await fetchStarWar.json();
          arrayOfStarWars.push(response);
          this.setState({arrayOfStarWars: arrayOfStarWars });
        } catch (error) {
          console.log("error", error);
        }
      }

      arrayOfStarWars.forEach((person, i) => {
        try {
          if (person.name === arrayOfStarWars[i + 1].name) {
            arrayOfStarWars.splice(i, 1);
          }
        } catch (error) {
          console.log("error", error);
        }
      });
      console.log(arrayOfStarWars);
    }

    fetching().then(() => fetchingStarWars());
  }

  search = (event) => {
    this.setState({searchField : event.target.value});
  }


  render() {
    const { arrayOfStarWars, searchField } = this.state;

    const filterStarWar = arrayOfStarWars.filter(starwar => {
      return starwar && starwar.name && starwar.name.toLowerCase().includes(searchField.toLowerCase());
    });
    

    // const allStarwars = arrayOfStarWars.length > 0 ? arrayOfStarWars : "loading...";
    
    return (
      <div className='app-container'>
        <div className='wrapper-head'>
          <img src={starWarsEmblem} alt="" />
          <h1 className='header'>Find your favorite starwars character, and their description</h1>
          <Searchbox searchChange={this.search} />
        </div>
          {
            arrayOfStarWars.length <= 80 ? 
            (
              <h1 className='loading'>Getting Data Starwars data...</h1>
            )
             :
            (
              <ScrollBar>
              <CardList starwars={filterStarWar} />
              </ScrollBar>
            )  
          }
      </div>
    )
  }
}

export default App;
