import React from 'react';
import { useLocation, Link, generatePath } from 'react-router-dom';
import { Container, Film } from './FilmsList.styled';

import def from '../images/def.jpg';

const FilmsList = ({ films }) => {
  const location = useLocation();
  return (
    <Container>
      {films.map(({ title, poster_path, name, id }) => {
        const movieLink = generatePath('/movies/:movieId', {
          movieId: id,
        });
        const imgSrc = poster_path
          ? `https://image.tmdb.org/t/p/w500${poster_path}`
          : def;
        return (
          <Link key={id} to={movieLink} state={{ from: location }}>
            <Film src={imgSrc} alt="poster of cinema" id={id} />
            <div>
              <h3>{title || name}</h3>
            </div>
          </Link>
        );
      })}
    </Container>
  );
};

export default FilmsList;
