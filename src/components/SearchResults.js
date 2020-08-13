import React from 'react';
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';

import Tweet from './Tweet';

const NUM_PER_PAGE = 15;

const ProgressSpinner = styled(CircularProgress)`
  align-self: center;
`;

const PageNavigator = styled(({ className, start, setStart, total }) => {
  return (
    <div className={className}>
      {start >= NUM_PER_PAGE && <Button onClick={() => setStart(start - NUM_PER_PAGE)}>Previous Page</Button>}
      {start < total - NUM_PER_PAGE && <Button onClick={() => setStart(start + NUM_PER_PAGE)}>Next Page</Button>}
    </div>
  )
})`
  margin-top: 24px;
  display: flex;
  justify-content: flex-end;

  > :not(:last-child) {
    margin-right: 24px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 48px;
`;

const SearchResults = ({ data, isLoading, isError, start, setStart, total }) => {
  if (isError) {
    return (
      <Container>
        An error occurred. Please try another search query
      </Container>
    )
  }

  if (isLoading) {
    return (
      <Container>
        <ProgressSpinner />
      </Container>
    );
  }

  return (
    <Container>
      <PageNavigator start={start} setStart={setStart} total={total} />
      {data.map(({ id, ...rest }) => <Tweet key={id} {...rest} />)}
    </Container>
  );
};

export default SearchResults;
