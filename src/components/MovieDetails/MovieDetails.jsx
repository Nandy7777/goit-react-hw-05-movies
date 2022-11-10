import { Outlet, Link, useParams, useLocation } from 'react-router-dom';
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
          <Link to="cast" state={{ from: location }}>
            Cast
          </Link>
          <Link to="reviews" state={{ from: location }}>
            Reviews
          </Link>
        </div>
      )}

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet context={{ movieId, movie }} />
      </Suspense>
    </>
  );
};

export default MovieDetails;
