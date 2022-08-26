import React, { ReactElement } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  '@keyframes wait': {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 0,
    },
  },
  '@keyframes fadein': {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  },
  root: {
    animation: '$wait 0.3s, $fadein 1s ease-in 0.3s',
    height: '100%',
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 'auto',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    fontSize: 'xx-large',
  },
  title: {
    fontSize: 'xxx-large',
    marginBottom: '1rem',
  },
  linkContainer: {
    marginTop: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: 'large',
    '& div': {
      margin: '0.5rem',
    },
  },
  link: {
    color: 'inherit',
  },
});

function Main(): ReactElement {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        Hi, I&apos;m Bryce
      </div>
      <div>
        I write no nonsense code
      </div>
      <div className={classes.linkContainer}>
        <div>
          <a className={classes.link} href="mailto:brycemeyer.dev@gmail.com" rel="noreferrer" target="_blank">
            brycemeyer.dev@gmail.com
          </a>
        </div>
        <div>
          My
          {' '}
          <a className={classes.link} href="https://github.com/bjm904" rel="noreferrer" target="_blank">
            GitHub
          </a>
        </div>
        <div>
          This site&apos;s
          {' '}
          <a className={classes.link} href="https://github.com/bjm904/www-brycejmeyer-com" rel="noreferrer" target="_blank">
            source
          </a>
        </div>
      </div>
    </div>
  );
}

export default Main;
