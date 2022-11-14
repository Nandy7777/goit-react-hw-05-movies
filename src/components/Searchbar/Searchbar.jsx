import { useState } from 'react';
import { toast } from 'react-toastify';
import { FaSearch } from 'react-icons/fa';
import {
  SearchbarHeader,
  Form,
  SearchFormButton,
  ButtonLabel,
  Input,
} from './Searchbar.styled';
import PropTypes from 'prop-types';

export default function Searchbar({ setSearchParams }) {
  const [filmName, setFilmName] = useState('');

  const handleNameChange = event => {
    setFilmName(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (filmName.trim() === '') {
      return toast.error('Please type something!');
    }

    setSearchParams(filmName !== '' ? { name: filmName.trim() } : {});
    setFilmName('');
  };

  return (
    <SearchbarHeader>
      <Form onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <FaSearch />
          <ButtonLabel>Search</ButtonLabel>
        </SearchFormButton>
        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          name="imageName"
          value={filmName}
          onChange={handleNameChange}
        />
      </Form>
    </SearchbarHeader>
  );
}

Searchbar.propTypes = {
  setSearchParams: PropTypes.func.isRequired,
};
