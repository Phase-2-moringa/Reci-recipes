import React, {useState, useEffect} from 'react';
import './App.css';
import SearchBar from './Components/SearchBar';
import Recipe from './Components/Recipe';

const api = "http://localhost:3000/meals"

function App() {
  const [mealsRecipes, setMealsRecipes] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

// function to fetch data from the api

  return (
    <div className="container">
      <h3>The door to best and tasty meals is <br />
          good recipe!</h3>
    </div>
  );
}

export default App;

// www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
