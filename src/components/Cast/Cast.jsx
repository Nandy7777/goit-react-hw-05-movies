import { useState, useEffect } from 'react';
import { getDataActorById } from 'services/movie-api';
import { useParams } from 'react-router-dom';
import def from 'components/images/def.jpg';
import { toast } from 'react-toastify';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const dataCast = await getDataActorById(movieId);
        setCast(dataCast);
      } catch (error) {
        toast.error(error.message);
      }
    })();
  }, [movieId]);

  return (
    <>
      {cast &&
        (cast.length > 0 ? (
          <ul>
            {cast.map(({ profile_path, original_name, character, id }) => {
              const img = profile_path
                ? `https://image.tmdb.org/t/p/w500${profile_path}`
                : def;
              return (
                <li key={id}>
                  <img src={img} alt="poster of character" />
                    <div>
                      <h3>{original_name}</h3>
                      <h3>{character || 'no name'}</h3>
                    </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <p>No cast</p>
        ))}
    </>
  );
};

export default Cast;
