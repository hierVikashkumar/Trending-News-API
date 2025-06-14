import React, {useEffect, useState} from "react";
import Card from "./card";

const Newsapp = () => {
  const [search, setSearch] = useState("india");
  const [newsData, setNewData] = useState(null);
  const API_KEY = "a4870dc7b57d4c79baef8d2de18ce6fc";

  const getData = async() => {
    const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
    const jsonData = await response.json();
    console.log(jsonData.articles);
    setNewData(jsonData.articles);
  };

  useEffect(()=>{
    getData();
  },[])

  const handleInput = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  const userInput = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <nav>
        <div>
          <h1>Trendy News</h1>
        </div>
        <ul>
          <a href="#">All News</a>
          <a href="#">Trending News</a>
        </ul>
        <div className="SearchBar">
          <input type="text" placeholder="Search News" value={search} onChange={handleInput} />
          <button onClick={getData}>Search</button>
        </div>
      </nav>

      <div>
        <p className="head">Stay Update with TrendyNews</p>
      </div>

      <div className="categoryBtn">
        <button onClick={userInput} value="sports">Sports</button>
        <button onClick={userInput} value="politics">Politics</button>
        <button onClick={userInput} value="entertainment">Entertainment</button>
        <button onClick={userInput} value="health">Health</button>
        <button onClick={userInput} value="fitness">Fitness</button>
      </div>

      <div>
        {newsData?  <Card data={newsData}/> : null}
       
      </div>
    </div>
  );
};

export default Newsapp;
