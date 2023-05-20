import { AddBoxTwoTone, AirplanemodeActiveTwoTone, ArticleTwoTone, DownloadForOffline, DownloadForOfflineTwoTone, ErrorTwoTone, HomeTwoTone, InfoTwoTone, LocalOfferTwoTone, RouteTwoTone } from "@mui/icons-material";
import { createTheme, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ThemeProvider, Toolbar, Typography } from "@mui/material"
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {Predictor, Splash} from "./Pages";

function App() {

  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#ff0000',
      },
      secondary: {
        main: '#3333ff',
      },
    },
    typography: {
      h4: {
        color: 'white',
        fontFamily: "'Noto Serif', serif;",
        marginBottom: 10
      },
      h6: {
        color: 'white',
        fontFamily: "'Noto Serif', serif;",
        marginBottom: 10,
        textAlign: 'center'
      },
      h5: {
        color: 'white',
        fontFamily: "'Consolas', serif;",
        marginBottom: 10,
        textAlign: 'center',
        // fontWeight: 100
      },
      p: {
        color: 'white',
        fontFamily: "'Roboto Mono', monospace;",
        marginBottom: 10,
        fontSize: 17.5
      },
      body2: {
        color: 'white',
        fontFamily: "'Roboto Mono', monospace;",
        fontSize: 17.5
      },
      body1: {
        fontFamily: "'Roboto Mono', monospace;",
      },
    }
  });


  return (
    <ThemeProvider theme={theme}>
        <BrowserRouter>
    <Routes>

    <Route path="/" exact element={<Splash/>} />
    <Route path="/predict" exact element={<Predictor/>} />

    <Route path="*" element={<Navigate to="/" replace />} />
</Routes>
</BrowserRouter>
      </ThemeProvider>
  )
}

export default App
