import { Outlet, NavLink, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import {getDataById} from 'services/movie-api';
import Movie from 'components/Movie/Movie';
import { toast } from 'react-toastify';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  useEffect(() => {
    (async () => {
      const movieData = await getDataById(movieId);
      setMovie(movieData);
      try {
      } catch (error) {
        toast.error(error.message);
      }
    })();
  }, [movieId]);

  return (
    <>
      {movie && <Movie dataCinema={movie} />}
      {movie && (
        <div>
          <h2>Additional information</h2>
          <NavLink to="cast" state={{ from: location }}>
            Cast
          </NavLink>
          <NavLink to="reviews" state={{ from: location }}>
            Reviews
          </NavLink>
        </div>
      )}

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet context={{ movieId, movie }} />
      </Suspense>
    </>
  );
};

export default MovieDetails;
