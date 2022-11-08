import { Route, Routes } from 'react-router-dom';
import Home from "components/Home";
import Movies from 'components/Movies';
import Header from 'components/Header';

export const App = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Movies />} />
      </Routes>
    </div>
  );
};