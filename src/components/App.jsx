import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "components/Home";
import Movies from 'components/Movies';
import Header from 'components/Header';
import MovieDetails from 'components/MovieDetails';
// import Reviews from 'components/Reviews';
// import Cast from 'components/Cast';


export const App = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          {/* <Route path="reviews" element={<Reviews />}></Route>
          <Route path="cast" element={<Cast />}></Route> */}
        </Route>
      </Routes>
      <ToastContainer autoClose={3000} theme="colored" />
    </div>
  );
};