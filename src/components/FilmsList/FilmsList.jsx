import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';

import def from '../images/def.jpg';

const FilmsList = ({ films, bool }) => {
  const location = useLocation();
  return (
    <div>
     <h1>TRENDING TODAY</h1>
      {films.map(({ title, poster_path, name, id }) => {
       
        const imgSrc = poster_path
          ? `https://image.tmdb.org/t/p/w500${poster_path}`
          : def;
        return (
          <NavLink key={id} to={`/movies/${id}`} state={{ from: location }}>
            <img src={imgSrc} alt="poster of cinema" id={id} />
            <div>
              <div>
                <h3>{title || name}</h3>
              </div>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};
export default FilmsList;
