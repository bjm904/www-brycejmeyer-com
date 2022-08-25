import 'typeface-coda';
import React, { ReactElement } from 'react';
import { createUseStyles } from 'react-jss';
import { detect } from 'detect-browser';
import ReactGA from 'react-ga4';

import Main from './components/Main';

ReactGA.initialize('G-XYBK2NL5E6');

const browser = detect();

const smoothGradients = browser && browser.name !== 'firefox';

const colorAndBackgroundCSS = {
  backgroundColor: '#F8F8F8',
  backgroundImage: '',
  color: '#121212',
  '@media (prefers-color-scheme: dark)': {
    backgroundColor: '#121212',
    backgroundImage: '',
    color: '#E6E6E6',
  },
};

if (smoothGradients) {
  colorAndBackgroundCSS.backgroundImage = 'linear-gradient(0deg, #C2C2C2 0%, #F8F8F8 100%)';
  colorAndBackgroundCSS['@media (prefers-color-scheme: dark)'].backgroundImage = 'linear-gradient(0deg, #121212 0%, #232323 100%)';
}

const useStyles = createUseStyles({
  root: {
    fontFamily: 'coda',
    height: '100%',
    display: 'flex',
    ...colorAndBackgroundCSS,
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
