import React, { useState } from 'react';
import { GlobalStyles } from './styles/Global';
import {ThemeProvider} from 'styled-components';
import { light, dark } from './styles/Theme';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';



function App() {


  const [theme, setTheme] = useState(light)
  const client = new QueryClient();

  return (
  
<ThemeProvider theme={theme}>
  <QueryClientProvider client={client}>
    <GlobalStyles />
    <Header setTheme={setTheme} theme={theme}/>
    <SearchBar />
    </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
