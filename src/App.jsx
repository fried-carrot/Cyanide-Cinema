import { AddBoxTwoTone, AirplanemodeActiveTwoTone, ArticleTwoTone, DownloadForOffline, DownloadForOfflineTwoTone, ErrorTwoTone, HomeTwoTone, InfoTwoTone, LocalOfferTwoTone, RouteTwoTone } from "@mui/icons-material";
import { createTheme, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ThemeProvider, Toolbar, Typography } from "@mui/material"
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {Predictor, Splash} from "./Pages";
import ParticleBackground from 'react-particle-backgrounds'

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

  const settings = {
    canvas: {
      canvasFillSpace: true,
      width: 200,
      height: 200,
      useBouncyWalls: false
    },
    particle: {
      particleCount: 50,
      color: '#94ecbe',
      minSize: 2,
      maxSize: 5
    },
    velocity: {
      directionAngle: 0,
      directionAngleVariance: 360,
      minSpeed: 1,
      maxSpeed: 3
    },
    opacity: {
      minOpacity: 0,
      maxOpacity: 0.5,
      opacityTransitionTime: 3000
    }
  }


  return (
    <ThemeProvider theme={theme}>
      
        <BrowserRouter>
    <Routes>

    <Route path="/" exact element={<Splash/>} />
    <Route path="/predict" exact element={<Predictor/>} />

    <Route path="*" element={<Navigate to="/" replace />} />
</Routes>
</BrowserRouter>
<div className="area">
<ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
</div>
      </ThemeProvider>
  )
}

export default App
