import React from 'react';

import { useHistory } from 'react-router-dom';
import qs from 'qs';

const SearchForm = ({ className, query, start, children }) => {
  const history = useHistory();
  const handleSubmit = event => {
    event.preventDefault();

    history.push(`/search?${qs.stringify({ q: query }, { format: 'RFC1738' })}`);
  };

  return (
    <form className={className} onSubmit={handleSubmit}>
      {children}
    </form>
  );
};

export default SearchForm;
