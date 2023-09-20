import React from 'react';
import { GlobalStyles } from './styles/Global';
import {ThemeProvider} from 'styled-components';
import { light, dark } from './styles/Theme';


function App() {
  return (
    <ThemeProvider theme={light}>
    <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
