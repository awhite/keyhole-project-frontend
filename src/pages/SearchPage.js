import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import qs from 'qs';

import SearchBar from '../components/SearchBar';
import SearchForm from '../components/SearchForm';
import { Link, useLocation } from 'react-router-dom';

const Form = styled(SearchForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;

  ${SearchBar} {
    margin-bottom: 24px;
  }
`;

const Container = styled.div`
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchPage = () => {
  const location = useLocation();
  const [query, setQuery] = useState(qs.parse(location.search.slice(1)).q);
  const handleChange = event => setQuery(event.target.value);

  return (
    <Container>
      <Link to="/"><Typography variant="h2">TweetSearch</Typography></Link>
      <Form query={query}>
        <SearchBar value={query} handleChange={handleChange} />
        <Button type="submit" variant="contained">Search</Button>
      </Form>
    </Container>
  );
};

export default SearchPage;
