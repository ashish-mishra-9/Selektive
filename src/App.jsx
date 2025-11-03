import logo from './logo.svg';
import React from 'react';
import './App.css';
import card from './components/cardComponent';
import landingPage from './components/landingPage';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import CssBaseline from "@mui/material/CssBaseline"

function AppRoutes() {
  let routes = useRoutes([
    { path: "/", element: landingPage()},
    { path: "/courses", element: card()},
  ]);
  return routes;
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
