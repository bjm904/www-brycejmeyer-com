import 'typeface-coda';
import React, { ReactElement } from 'react';
import { createUseStyles } from 'react-jss';
import ReactGA from 'react-ga4';

import Main from './components/Main';

ReactGA.initialize('G-XYBK2NL5E6');

const useStyles = createUseStyles({
  root: {
    fontFamily: 'coda',
    height: '100%',
    display: 'flex',
    background: 'linear-gradient(0deg, #C2C2C2 0%, #F8F8F8 100%)',
    color: '#121212',
    '@media (prefers-color-scheme: dark)': {
      background: 'linear-gradient(0deg, #121212 0%, #232323 100%)',
      color: '#E6E6E6',
    },
  },
});

function App(): ReactElement {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Main />
    </div>
  );
}

export default App;
