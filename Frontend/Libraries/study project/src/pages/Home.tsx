import {Button, Grid} from '@mui/material';
import React from 'react';

function Home() {
  return (
    <Grid container>
      <Grid item xs={12} style={{backgroundColor: 'pink'}}>
        <h1>Navbar</h1>
      </Grid>
      <Grid container xs={12} spacing={2} style={{backgroundColor: 'red'}}>
        <h1>slider</h1>
        <Grid item xs={2}>
          <h1 style={{backgroundColor: 'steelblue'}}>img</h1>
        </Grid>
        <Grid item xs={2}>
          <h1 style={{backgroundColor: 'steelblue'}}>img</h1>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Home;
