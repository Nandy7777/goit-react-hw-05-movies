import { Route, Routes } from 'react-router-dom';
import Home from "components/Home";
import Movies from 'components/Movies';

export const App = () => {
  return (
    <div>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Movies />} />
        
      </Routes>
    </div>
  );
};