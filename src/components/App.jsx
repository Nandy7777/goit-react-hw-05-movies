import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = lazy(() => import('./Home'));
const MovieDetails = lazy(() => import('./MovieDetails'));
// const Reviews = lazy(() => import('./Reviews'));
const Cast = lazy(() => import('./Cast'));
const Movies = lazy(() => import('./Movies'));
const Header = lazy(() => import('./Header'))

export const App = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="movies" element={<Movies />}></Route>
          <Route path="movies/:movieId" element={<MovieDetails />}>
            {/* <Route path="reviews" element={<Reviews />}></Route> */}
            <Route path="cast" element={<Cast />}></Route>
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer autoClose={3000} theme="colored" />
    </div>
  );
};
