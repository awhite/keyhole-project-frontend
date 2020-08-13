import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { Link, useLocation, Redirect } from 'react-router-dom';
import qs from 'qs';

import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';
import SearchForm from '../components/SearchForm';

const NavbarForm = styled(SearchForm)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 24px;

  ${SearchBar} {
    margin-left: 24px;
  }
`;

const Navbar = ({ query, handleChange }) => (
  <NavbarForm query={query}>
    <Link to="/"><Typography variant="h4">TweetSearch</Typography></Link>
    <SearchBar value={query} handleChange={handleChange} />
  </NavbarForm>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 960px;
  width: 100%;
`;

const SearchResultsPage = () => {
  const location = useLocation();
  const { q: defaultQuery, start: defaultStart } = qs.parse(location.search.slice(1));
  const [query, setQuery] = useState(defaultQuery || '');
  const [start, setStart] = useState(defaultStart || 0);
  const [total, setTotal] = useState(0);
  const [isError, setIsError] = useState(false);
  const handleChange = event => setQuery(event.target.value);

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (query === '') return;
    async function fetchData() {
      setIsLoading(true);
      try {
        const result = await fetch(`http://172.105.23.47:8001/search?${qs.stringify({ q: query, start }, { format: 'RFC1738' })}`);
        const { results, count } = await result.json();
        setData(results);
        setTotal(count);
        setIsLoading(false);
      } catch (err) {
        setIsError(true);
        setIsLoading(false);
      }
    }

    fetchData();
  }, [start, location]);

  if (defaultQuery === '') return <Redirect to="/" />;

  return (
    <Container>
      <Navbar query={query} handleChange={handleChange} start={start} />
      <SearchResults start={start} setStart={setStart} total={total} isLoading={isLoading} data={data} isError={isError} />
    </Container>
  );
}

export default SearchResultsPage;
