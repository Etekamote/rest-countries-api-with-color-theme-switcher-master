import React, { useState } from 'react';
import { GlobalStyles } from './styles/Global';
import {ThemeProvider} from 'styled-components';
import { light, dark } from './styles/Theme';
import { Header } from './components/Header';



function App() {


  const [theme, setTheme] = useState(light)


  return (
  
<ThemeProvider theme={theme}>
    <GlobalStyles />
    <Header setTheme={setTheme} theme={theme}/>
    </ThemeProvider>
  );
}

export default App;
