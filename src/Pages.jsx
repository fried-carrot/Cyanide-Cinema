import { Box, Button, CircularProgress, Divider, Drawer, FormControl, InputLabel, List, ListItem, ListItemButton, ListItemIcon, ListItemText, MenuItem, Paper, Select, TextareaAutosize, TextField, Toolbar, Typography } from "@mui/material"
import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from './logo.png'
import { NumberFormatBase } from "react-number-format";
import { Fade, Zoom } from "react-reveal";
import Jello from 'react-reveal/Jello';
import { Home } from "@mui/icons-material";
import * as tf from '@tensorflow/tfjs';
import {loadGraphModel} from '@tensorflow/tfjs-converter';
import AddIcon from '@mui/icons-material/Add';
import { Configuration, OpenAIApi } from 'openai';

export function Splash() {

  return (
    <React.Fragment>
      <Jello><img className="App-logo" src={logo}/></Jello>
      <Fade><Typography variant="h5">Cyanide Cinema</Typography></Fade>
      <Paper variant="outlined" sx={{marginBottom: 10,marginLeft: '28.5%', width: '40%', p: 2.5, flexDirection: 'row', overflow: 'auto'}}>
        <Fade>
        <Typography variant="body2" sx={{textAlign: 'left'}}>Predict your movie's piracy rates and generate a detailed report in less than five minutes, all with AI.</Typography>
        </Fade>
        <Divider sx={{marginTop: 2}}/>
        <Button href="/predict" sx={{marginTop: 2}}><Typography color="inherit" variant="body2">Try it</Typography></Button>
        <Button href="https://github.com/fried-carrot/Cyanide-Cinema" color="secondary" sx={{marginTop: 2}}><Typography color="secondary" variant="body2">Source</Typography></Button>
        </Paper>
    </React.Fragment>
  )
}

export function Predictor() {
  const configuration = new Configuration({
    apiKey: 'APIKEY',
});

  const openai = new OpenAIApi(configuration);

  const [loadState, setLoadState] = useState(0);

  const [model, setModel] = useState();
  const [prediction, setPrediction] = useState();

  const [imdb, setImdb] = useState();
  const [runtime, setRuntime] = useState();

  const [appropriate, setAppropriate] = useState();
  const [industry, setIndustry] = useState();
  const [language, setLanguage] = useState();

  const [report, setReport] = useState();

  const pirateMode = ["Be serious, and do NOT act like a pirate or poet.", "Make at least one sentence of your response creative and funny, like a poet.", "Make your response creative and funny, like a pirate."];

  async function loadModel() {
    try {
    const model = await tf.loadLayersModel('https://cyanide-cinema.web.app/v69.2264_js/model.json');
    setModel(model);
    console.log("Load model success")
    }
    catch (err) {
    console.log(err);
    }
    }

    function getPirateRank(result) {
      let pirateRating;
      if(0 <= result && result <= 0.2) {
        pirateRating = "very low"
        return pirateRating;
      } else if (0.2 < result && result <= 0.4) {
        pirateRating = "low"
        return pirateRating;
      } else if (0.4 < result && result <= 0.6) {
        pirateRating = "somewhat high"
        return pirateRating;
      } else if (0.6 < result && result <= 0.8) {
        pirateRating = "high"
        return pirateRating;
      } else if (0.8 < result && result <= 1) {
        pirateRating = "very high"
        return pirateRating;
      }
    }

    async function predict(mode) {
      try {
      setLoadState(1);
      let array = [Number(imdb), Number(runtime), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      
      switch (appropriate) {
        case 1:
          array[6] = 1;
          break;
        case 2:
          array[10] = 1;
          break;
        case 3:
          array[11] = 1;
          break;
        case 4:
          array[13] = 1;
          break;
        case 5:
          array[8] = 1;
          break;
        case 6:
          array[7] = 1;
          break;
        case 7:
          array[3] = 1;
          break;
        case 8:
          array[9] = 1;
          break;
        case 9:
          array[22] = 1;
          break;
        case 10:
           array[12] = 1;
          break;
        case 11:
          array[2] = 1;
          break;
        case 12:
          array[19] = 1;
          break;
        case 13:
          array[20] = 1;
          break;
        case 14:
          array[21] = 1;
          break;
        case 15:
          array[16] = 1;
          break;
        case 16:
          array[18] = 1;
          break;
        case 17:
          array[14] = 1;
          break;
        case 18:
          array[15] = 1;
          break;
        case 19:
          array[17] = 1;
          break;
      }
      switch (industry) {
        case 1:
          array[23] = 1;
          break;
        case 2:
          array[24] = 1;
          break;
        case 3:
          array[25] = 1;
          break;
        case 4:
          array[26] = 1;
          break;
        case 5:
          array[27] = 1;
          break;
        case 6:
          array[28] = 1;
          break;
        case 7:
          array[29] = 1;
          break;
        case 8:
          array[30] = 1;
          break;
        case 9:
          array[31] = 1;
          break;
        case 10:
          array[32] = 1;
          break;
      }
      switch (language) {
        case 1:
          array[33] = 1;
          break;
        case 2:
          array[34] = 1;
          break;
        case 3:
          array[35] = 1;
          break;
        case 4:
          array[36] = 1;
          break;
        case 5:
          array[37] = 1;
          break;
        case 6:
          array[38] = 1;
          break;
        case 7:
          array[39] = 1;
          break;
        case 8:
          array[40] = 1;
          break;
        case 9:
          array[41] = 1;
          break;
        case 10:
          array[43] = 1;
          break;
        case 11:
          array[44] = 1;
          break;
        case 12:
          array[45] = 1;
          break;
        case 13:
          array[46] = 1;
          break;
        case 14:
          array[47] = 1;
          break;
        case 15:
          array[48] = 1;
          break;
        case 16:
          array[49] = 1;
          break;
        case 17:
          array[50] = 1;
          break;
        case 18:
          array[51] = 1;
          break;
        case 19:
          array[52] = 1;
          break;
        case 20:
          array[53] = 1;
          break;
        case 21:
          array[54] = 1;
          break;
        case 22:
          array[55] = 1;
          break;
        case 23:
          array[56] = 1;
          break;
        case 24:
          array[57] = 1;
          break;
        case 25:
          array[58] = 1;
          break;
        case 26:
          array[59] = 1;
          break;
        case 27:
          array[60] = 1;
          break;
        case 28:
          array[61] = 1;
          break;
        case 29:
          array[62] = 1;
          break;
        case 30:
          array[63] = 1;
          break;
        case 31:
          array[64] = 1;
          break;
        case 32:
          array[65] = 1;
          break;
        case 33:
          array[66] = 1;
          break;
        case 34:
          array[67] = 1;
          break;
        case 35:
          array[68] = 1;
          break;
        case 36:
          array[69] = 1;
          break;
        case 37:
          array[70] = 1;
          break;
        case 38:
          array[71] = 1;
          break;
        case 39:
          array[72] = 1;
          break;
        case 40:
          array[73] = 1;
          break;
        case 41:
          array[74] = 1;
          break;
        case 42:
          array[75] = 1;
          break;
        case 43:
          array[76] = 1;
          break;
      }

      let tensor = tf.reshape(tf.cast(array, 'float32'), [1,78])
      const result = await model.predict(tensor).dataSync()
      setPrediction(result);

      const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: "The likelihood of a movie surpassing 1000 pirated downloads is " + (100*result).toFixed(1) + " percent, which is " + getPirateRank(result) + ". Because this probability is " + getPirateRank(result) + ", identify the potential results of this for the movie maker. If the rate is low, provide only good things. Respond in 4 to 5 sentences. You must repeat the percentage rate in the first sentence of the response. " + pirateMode[mode]}],
        temperature: 0.8
      });
      setReport(response.data.choices[0].message.content)
      setLoadState(2);
      }
      catch (err) {
      console.log(err);
      }
      }

    //React Hook
    useEffect(()=>{
    tf.ready().then(()=>{
    loadModel()
    });
    },[])

  return (
    <React.Fragment>
      <Drawer variant="permanent" open PaperProps={{sx: {width: '25%'}}}>
        <Toolbar />
      <Divider />
      <FormControl fullWidth>
  <InputLabel>Age Rating</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    label="Age"
    onChange={(e) => setAppropriate(e.target.value)}
  >
    <MenuItem value={1}>G</MenuItem>
    <MenuItem value={2}>PG</MenuItem>
    <MenuItem value={3}>PG-13</MenuItem>
    <MenuItem value={4}>R</MenuItem>
    <MenuItem value={5}>NC-17</MenuItem>
    <MenuItem value={6}>MA-17</MenuItem>
    <MenuItem value={7}>Approved</MenuItem>
    <MenuItem value={8}>Not Rated</MenuItem>
    <MenuItem value={9}>Unrated</MenuItem>
    <MenuItem value={10}>Passed</MenuItem>
    <MenuItem value={11}>18+</MenuItem>
    <MenuItem value={12}>TV-Y</MenuItem>
    <MenuItem value={13}>TV-Y7</MenuItem>
    <MenuItem value={14}>TV-Y7-FV</MenuItem>
    <MenuItem value={15}>TV-G</MenuItem>
    <MenuItem value={16}>TV-PG</MenuItem>
    <MenuItem value={17}>TV-13</MenuItem>
    <MenuItem value={18}>TV-14</MenuItem>
    <MenuItem value={19}>TV-MA</MenuItem>
  </Select>
</FormControl>
<FormControl fullWidth>
  <InputLabel>Industry</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    label="Age"
    onChange={(e) => setIndustry(e.target.value)}
  >
    <MenuItem value={1}>3D Features</MenuItem>
    <MenuItem value={2}>Animation</MenuItem>
    <MenuItem value={3}>Bollywood</MenuItem>
    <MenuItem value={4}>Dubs (Dual Audio)</MenuItem>
    <MenuItem value={5}>Hollywood</MenuItem>
    <MenuItem value={6}>Pakistani</MenuItem>
    <MenuItem value={7}>Punjabi</MenuItem>
    <MenuItem value={8}>Stage Shows</MenuItem>
    <MenuItem value={9}>Tollywood</MenuItem>
    <MenuItem value={10}>Wresling</MenuItem>
  </Select>
</FormControl>
<FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Language</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    label="Age"
    onChange={(e) => setLanguage(e.target.value)}
  >
    <MenuItem value={1}>Afrikaans</MenuItem>
    <MenuItem value={2}>Arabic</MenuItem>
    <MenuItem value={3}>Bengali</MenuItem>
    <MenuItem value={4}>Cantonese</MenuItem>
    <MenuItem value={5}>Chinese</MenuItem>
    <MenuItem value={6}>Czech</MenuItem>
    <MenuItem value={7}>Danish</MenuItem>
    <MenuItem value={8}>Dutch</MenuItem>
    <MenuItem value={9}>English</MenuItem>
    <MenuItem value={10}>French</MenuItem>
    <MenuItem value={11}>German</MenuItem>
    <MenuItem value={12}>Gujarati</MenuItem>
    <MenuItem value={13}>Haryanvi</MenuItem>
    <MenuItem value={14}>Hindi</MenuItem>
    <MenuItem value={15}>Indonesian</MenuItem>
    <MenuItem value={16}>Italian</MenuItem>
    <MenuItem value={17}>Japanese</MenuItem>
    <MenuItem value={18}>Kannada</MenuItem>
    <MenuItem value={19}>Korean</MenuItem>
    <MenuItem value={20}>Malayalam</MenuItem>
    <MenuItem value={21}>Mandarin</MenuItem>
    <MenuItem value={22}>Maori</MenuItem>
    <MenuItem value={23}>Marathi</MenuItem>
    <MenuItem value={24}>Multiple Languages</MenuItem>
    <MenuItem value={25}>Nepali</MenuItem>
    <MenuItem value={26}>None</MenuItem>
    <MenuItem value={27}>Norwegian</MenuItem>
    <MenuItem value={28}>Oriya</MenuItem>
    <MenuItem value={29}>Panja</MenuItem>
    <MenuItem value={30}>Persian</MenuItem>
    <MenuItem value={31}>Polish</MenuItem>
    <MenuItem value={32}>Portuguese</MenuItem>
    <MenuItem value={33}>Punjabi</MenuItem>
    <MenuItem value={34}>Rhaetian</MenuItem>
    <MenuItem value={35}>Russian</MenuItem>
    <MenuItem value={36}>Spanish</MenuItem>
    <MenuItem value={37}>Swedish</MenuItem>
    <MenuItem value={38}>Tamil</MenuItem>
    <MenuItem value={39}>Telugu</MenuItem>
    <MenuItem value={40}>Thai</MenuItem>
    <MenuItem value={41}>Turkish</MenuItem>
    <MenuItem value={42}>Urdu</MenuItem>
    <MenuItem value={43}>Vietnamese</MenuItem>
  </Select>
</FormControl>
<TextField id="imdb" label="IMDB Rating (Out of 10)" variant="outlined" type="number" onChange={(e) => setImdb(e.target.value)}/>
<TextField id="runtime" label="Runtime (Minutes)" variant="outlined" type="number" onChange={(e) => setRuntime(e.target.value)}/>
      <Divider />
      {imdb && runtime && appropriate && industry && language ? (<List>
        <ListItem key='Generate' disablePadding>
            <ListItemButton onClick={() => predict(0)} color="text.primary">
              <ListItemIcon>
                <AddIcon />
              </ListItemIcon>
              <ListItemText variant='p' primary='Generate' />
            </ListItemButton>
          </ListItem>
          <ListItem key='Generate (Poetic Mode)' disablePadding>
            <ListItemButton onClick={() => predict(1)} color="text.primary">
              <ListItemIcon>
                <AddIcon />
              </ListItemIcon>
              <ListItemText variant='p' primary='Generate (Poetic Mode)' />
            </ListItemButton>
          </ListItem>
          <ListItem key='Generate (Pirate Mode)' disablePadding>
            <ListItemButton onClick={() => predict(2)} color="text.primary">
              <ListItemIcon>
                <AddIcon />
              </ListItemIcon>
              <ListItemText variant='p' primary='Generate (Pirate Mode)' />
            </ListItemButton>
          </ListItem>
          </List>) : (<List><ListItem key='Generate' disablePadding>
            <ListItemButton disabled color="text.primary">
              <ListItemIcon>
                <AddIcon />
              </ListItemIcon>
              <ListItemText variant='p' primary='Generate' />
            </ListItemButton>
          </ListItem>
          <ListItem key='Generate (Poetic Mode)' disablePadding>
            <ListItemButton disabled color="text.primary">
              <ListItemIcon>
                <AddIcon />
              </ListItemIcon>
              <ListItemText variant='p' primary='Generate (Poetic Mode)' />
            </ListItemButton>
          </ListItem>
          <ListItem key='Generate (Pirate Mode)' disablePadding>
            <ListItemButton disabled color="text.primary">
              <ListItemIcon>
                <AddIcon />
              </ListItemIcon>
              <ListItemText variant='p' primary='Generate (Pirate Mode)' />
            </ListItemButton>
          </ListItem>
          </List>)}

          <List>
          <ListItem key='Home' disablePadding>
            <ListItemButton href='/updates'>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText variant='p' primary='Home' />
            </ListItemButton>
          </ListItem>
      </List>
      <Typography variant="body2" color='text.secondary' sx={{position: "absolute", bottom: "0"}}>v1 Model</Typography>
        </Drawer>

      <Fade><Typography variant="h5" sx={{marginTop: '5%', marginLeft: '22.5%'}}>Predict and Generate</Typography></Fade>
    
     <Paper variant="outlined" sx={{marginTop: 2, width: '50%', p: 2.5, flexDirection: 'row', overflow: 'auto', marginLeft: '35%'}}>
        {loadState == 0 && <Fade><Typography variant="body2" sx={{textAlign: 'left'}}>Your generated piracy report will appear here, containing an estimated download count.</Typography>
        <br/><Typography variant="body2" color='text.secondary' sx={{textAlign: 'left'}}>Example: You have proposed an R-rated English movie in the Hollywood industry with an IMDB rating of 5.4 and a runtime of 160 minutes. This feature has a 21% chance of receiving more than 1000 pirated downloads. When compared with the reception and popularity, this risk rate is relatively low. Therefore, piracy should not have much impact on this film's performance.</Typography>
        <br/><Typography variant="body2" sx={{textAlign: 'left'}}>Statistical Trends:</Typography>
        <List>
          <ListItem><Typography variant="body2" sx={{textAlign: 'left'}}>Flops tend to be pirated more (people don't want to pay for a bad movie).</Typography></ListItem>
          <ListItem><Typography variant="body2" sx={{textAlign: 'left'}}>R-rated Hollywood movies (in English) have more torrent listings.</Typography></ListItem>
          <ListItem><Typography variant="body2" sx={{textAlign: 'left'}}>Recent movies are more accessible, meaning they can be pirated easily.</Typography></ListItem>
        </List>
        </Fade>}
        {loadState == 1 && <React.Fragment><CircularProgress/><br/><Typography variant="body2">Generating... Please wait...</Typography></React.Fragment>}
        {loadState == 2 && <Fade><Typography variant="body2" sx={{textAlign: 'left'}}>{report}</Typography><br/><Typography variant="body2" sx={{textAlign: 'left'}}>Piracy risk rate: {(100*prediction).toFixed(1)}%</Typography></Fade>}
      </Paper>
        </React.Fragment>
  )
}

