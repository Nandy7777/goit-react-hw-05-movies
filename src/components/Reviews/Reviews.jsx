import { useState, useEffect } from 'react';
import { getDataReviewsById } from 'services/movie-api';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();
    
    useEffect(() => {
      (async () => {
        try {
          const dataReviews = await getDataReviewsById(movieId);
          setReviews(dataReviews);
        } catch (error) {
          toast.error(error.message);
        }
      })();
    }, [movieId]);

  return (
    <div>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => {
            const { id, author, content } = review;
            return (
              <li key={id}>
                <h2>Author: {author}</h2>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </div>
  );
};
export default Reviews;
