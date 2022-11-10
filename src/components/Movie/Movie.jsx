import { useNavigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const Movie = ({ dataCinema }) => {
  const {
    backdrop_path,
    title,
    original_title,
    vote_average,
    poster_path,
    release_date,
    overview,
    genres,
  } = dataCinema;
  const location = useLocation();
  const genresCinema = genres.map(gen => gen.name + ' ');
  const navigate = useNavigate();

  return (
    <>
      <div p={`https://image.tmdb.org/t/p/w500${backdrop_path}`}>
        <button
          type="button"
          onClick={() => {
            navigate(location?.state?.from?.pathname ?? '/');
          }}
        >
          Back
        </button>
      </div>
      <div>
        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" />
        <div>
          <h1>
            {title || original_title}
            <span> ({release_date})</span>
          </h1>
          <p>
            User score <span> {vote_average}</span>
          </p>
          <h3>Overview</h3>
          <p>{overview || 'there is no overview yet'}</p>
          <h3>Genres</h3>
          <p>{genresCinema}</p>
        </div>
      </div>
    </>
  );
};

export default Movie;

Movie.propTypes = {
  dataCinema: PropTypes.object.isRequired,
};