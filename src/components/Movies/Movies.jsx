import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Searchbar from 'components/Searchbar';
import { getDataByName } from 'services/movie-api';
import FilmsList from 'components/FilmsList';
import { toast } from 'react-toastify';

const Movies = () => {
  const [cinemaObj, setCinemaObj] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const productName = searchParams.get('name') ?? '';


  const handleFormSubmit = async name => {
    try {
      const searchCinema = await getDataByName(name);
       const nextParams = name !== '' ? { name } : {};
       setSearchParams(nextParams);
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
      <Searchbar value={productName} onSubmit={handleFormSubmit} />
      {cinemaObj && <FilmsList films={cinemaObj} />}
    </div>
  );
};

export default Movies;
