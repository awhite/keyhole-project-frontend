import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

const SearchBar = styled(({ className, value, handleChange }) => (
  <TextField autoFocus className={className} id="outlined-basic" label="Keyword" variant="outlined" value={value} onChange={handleChange} />
))``;

export default SearchBar;
