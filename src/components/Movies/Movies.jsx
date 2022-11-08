import { useState } from 'react';
import Searchbar from 'components/Searchbar';
import { getDataByName } from 'services/movie-api';
import FilmsList from 'components/FilmsList';
import { toast } from 'react-toastify';

const Movies = () => {
  const [cinemaObj, setCinemaObj] = useState(null);

  const handleFormSubmit = async name => {
    try {
      const searchCinema = await getDataByName(name);
      if (searchCinema.length === 0) {
        toast.info(` ${name} not found!`);
        return;
      }
      setCinemaObj(searchCinema);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div>
      <Searchbar onSubmit={handleFormSubmit} />
      {cinemaObj && <FilmsList films={cinemaObj} />}
    </div>
  );
};

export default Movies;
