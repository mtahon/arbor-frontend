import React from 'react';
import { Card, CardContent, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import colors from '../styles/colors';

const styles = makeStyles({
  item: {
    position: 'relative',
    width: '100%',
    height: '168px',
    borderRadius: '6px',
    boxShadow: '0px 2px 6px rgba(10, 23, 51, 0.04), 0px 4px 12px rgba(10, 23, 51, 0.04)',
    transition: 'background-color .3s ease, box-shadow .3s ease',
    ['@media (max-width: 767px)']: { // eslint-disable-line no-useless-computed-key
      height: '100px',
    }
  },
  itemHome: {
    height: '100px',
    backgroundColor: 'transparent',
    boxShadow: 'none',
    '&:hover': {
      boxShadow: '0px 2px 6px rgba(10, 23, 51, 0.04), 0px 4px 12px rgba(10, 23, 51, 0.04)',
      '& .MuiButton-root:hover': {
        backgroundColor: colors.primary.white,
      }
    },
    '& button': {
      padding: '0'
    }
  },
  cardButton: {
    position: 'relative',
    width: '100%',
    height: '100%',
    ['@media (max-width: 767px)']: { // eslint-disable-line no-useless-computed-key
      justifyContent: 'flex-start'
    }
  },
  homeCardButton: {
    ['@media (max-width: 960px)']: { // eslint-disable-line no-useless-computed-key
      justifyContent: 'flex-start'
    }
  },
  cardContent: {
    height: '100%',
    padding: '14px',
    ['@media (max-width: 767px)']: { // eslint-disable-line no-useless-computed-key
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '&:last-child': {
        paddingBottom: '16px'
      }
    }
  },
  homeCardContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '16px',
    '&:last-child': {
      paddingBottom: '16px'
    }
  },
  directoryTitle: {
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: 1.45,
    color: colors.greyScale.dark,
    textTransform: 'none',
    marginTop: '10px',
    whiteSpace: 'nowrap',
    ['@media (max-width: 767px)']: { // eslint-disable-line no-useless-computed-key
      marginTop: 0,
      marginLeft: '10px',
    }
  },
  homeDirectoryTitle: {
    marginTop: 0,
    marginLeft: '10px',
  },
  directoryImageWrapper: {
    position: 'relative',
    height: '64px',
    width: '64px',
    overflow: 'hidden',
    margin: '0 auto'
  },
  directoryImage: {
    width: '100%',
    height: '100%'
  }
});

export default function DirectoryCard(props) {
  const classes = styles();
  const { directoryName, directoryImage, homeLayout = false, handleSearchByType } = props;

  const directoryTitle = str => {
    let s = str.split('-').join(' ');
    return s[0].toUpperCase()+s.slice(1)
  };

  return (
    <Card className={ homeLayout ? [classes.item, classes.itemHome].join(' ') : classes.item}>
      <Button onClick={handleSearchByType} className={homeLayout ? [classes.cardButton, classes.homeCardButton].join(' ') : classes.cardButton}>
        <CardContent className={homeLayout ? [classes.cardContent, classes.homeCardContent].join(' ') : classes.cardContent}>
          <div className={classes.directoryImageWrapper}>
            {
              directoryImage ? (
                <img src={directoryImage} alt={'directory'} className={classes.directoryImage}/>
              ) : null
            }
          </div>
          <Typography variant={'subtitle2'} className={homeLayout ? [classes.directoryTitle, classes.homeDirectoryTitle].join(' ') : classes.directoryTitle}>{directoryTitle(directoryName)}</Typography>
        </CardContent>
      </Button>
    </Card>
  )
}