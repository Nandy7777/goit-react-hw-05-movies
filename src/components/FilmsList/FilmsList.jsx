import React from 'react';
import { useLocation, NavLink, generatePath } from 'react-router-dom';

import def from '../images/def.jpg';

const FilmsList = ({ films }) => {
  const location = useLocation();
  return (
    <div>
      {films.map(({ title, poster_path, name, id }) => {
       const movieLink = generatePath('/movies/:movieId', {
         movieId: id,
       });
        const imgSrc = poster_path
          ? `https://image.tmdb.org/t/p/w500${poster_path}`
          : def;
        return (
          <NavLink key={id} to={movieLink} state={{ from: location }}>
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
