import React, { useState } from 'react';
import { GlobalStyles } from './styles/Global';
import { ThemeProvider } from 'styled-components';
import { light, dark } from './styles/Theme';
import { Header } from './components/Header';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Home } from './pages/Home';
import { Country } from './pages/Country';



function App() {
  const router= createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root/>}>
    <Route index path="/" element={<Home />} />
    <Route path="/country" element={<Country />}>
      <Route path=":country" element={<Country />} />
      </Route>
    </Route>
  ))

  

  return (<>
    <RouterProvider router={router}></RouterProvider>
    </>

  );
}


export const Root = () =>{
  const [theme, setTheme] = useState(light)
  const client = new QueryClient();
  return<>
  <ThemeProvider theme={theme}>
  <QueryClientProvider client={client}>
    <GlobalStyles />
    <Header setTheme={setTheme} theme={theme}/>
    <Outlet />
    </QueryClientProvider>
    </ThemeProvider>
  </>
}


export default App;
