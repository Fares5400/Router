import React from "react";
import { useParams } from "react-router-dom";

const MovieDetails = ({ Movies }) => {
  const { id } = useParams();

  const movie = Movies.find((m) => m._id ===id ) ;

  console.log(movie.title, "our movie");
  console.log(movie.title, "our movie");

  return (
    <div>
      <div className="cardDetails">
        <a href="#">
        <div className="title">{movie.title}</div>

          <img className="img1" alt="movie" src={movie.imgUrl} />
          <div className="text">{movie.description}</div>
          <a href="#">
            <div className="catagory">
              {movie.category} <i className="fas fa-film"></i>
            </div>
          </a>
          <a href="#">
            <div className="views">
              {movie.date} <i className="far fa-eye"></i>{" "}
            </div>
          </a>
        </a>
      </div>
    </div>
  );
};

export default MovieDetails;
