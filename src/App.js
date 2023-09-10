import { useState } from "react";
import "./App.css";
import ListMovies from "./Components/ListMovies";
import MovieCard from "./Components/MovieCard";
import AddMovie from "./Components/AddMovie";
import { Button } from "bootstrap";
import Search from "./Components/Search";
import Rate from "./Components/Rate";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Dashboard from "./Components/Dashboard";
import MovieDetails from "./Components/MovieDetails";

function App() {
  //******This is the Api *******/
  const [Movies, setMovies] = useState([
    {
      _id: "5fedeef47c0ffe00176db1ca",
      title: "The Lord of the rings",
      rate: 4,
      date: "2003",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      description:
        "Sauron's armies attacked Minas Tirith, the capital of Gondor. Never has this once powerful kingdom needed its king so much. However, will Aragorn find it in him to fulfill his destiny?",
      category: "Fantasy",
      __v: 0,
    },
    {
      _id: "5fedefe47c0ffe00176db1cb",
      title: "Papillion",
      rate: 5,
      date: "2017",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BNWI1MTczNTEtYTEzNy00ZTZkLTg4MDEtZjdjNDI2Mzc5MDE5XkEyXkFqcGdeQXVyNDI3NjU1NzQ@._V1_.jpg",
      description:
        "In the underbelly of Paris in the 1930s, the thug Henri Charrière, known as Papillon, is arrested and then sentenced to life in prison for a murder he denies having committed. On the ship that takes him to serve his sentence in the Cayenne penal colony, he meets Louis Dega, a wealthy forger. Determined to regain freedom, the two men quickly form an unlikely alliance to find a way to escape",
        
      category: "Special Presentations",
      __v: 0,
    },
    
  ]);
  //*** Show and hide  ***/
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);

  const [showRate, setShowRate] = useState(false);
  const handleShowRate = () => {
    setSearchRate(0);
    setShowRate(!showRate);
  };

  //** Search**/
  const [searchName, setSearchName] = useState("");
  const [searchRate, setSearchRate] = useState(5);

  //*** Adding movie  ***/
  const AddToMovie = (Movie) => {
    setMovies([...Movies, Movie]);
  };

  return (
    <>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route
            path="/movieList"
            element={
              <ListMovies
                Movies={Movies}
                searchName={searchName}
                searchRate={searchRate}
              />
            }
          />
          <Route path="/dashbord"
          element={
            <Dashboard/>
          }
          />
          <Route path="/addMovie" element={<AddMovie AddToMovie={AddToMovie}/>}/>
          <Route path="/search" element={<Search Movies={Movies} searchName={searchName}
                searchRate={searchRate} setSearchName={setSearchName} setSearchRate={setSearchRate} />} />
          <Route path="/movieDetails/:id" element ={<MovieDetails Movies={Movies}   />}/>
          
        </Routes>

        
      </div>
    </>
  );
}

export default App;
