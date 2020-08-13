import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';

import theme from './theme';
import SearchPage from './pages/SearchPage';
import SearchResultsPage from './pages/SearchResultsPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route path="/search"><SearchResultsPage /></Route>
          <Route path="/"><SearchPage /></Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider >
  );
}

export default App;
