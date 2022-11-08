import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "components/Home";
import Movies from 'components/Movies';
import Header from 'components/Header';


export const App = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
      </Routes>
      <ToastContainer autoClose={3000} theme="colored" />
    </div>
  );
};