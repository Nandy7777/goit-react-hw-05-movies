import { useState, useEffect } from 'react';
import { getDataPopularCinema } from 'services/movie-api';
import { toast } from 'react-toastify';
import FilmsList from 'components/FilmsList';

const Home = () => {
  const [cinema, setCinema] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const cinema = await getDataPopularCinema();
        setCinema(cinema);
      } catch (error) {
        toast.error(error.message);
      }
    })();
  }, []);

  return (
    <div>
      <h1>Trending</h1>
      <FilmsList films={cinema} />
    </div>
  );
};

export default Home;
