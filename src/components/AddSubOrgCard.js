import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import AddSubDiagramIcon from '../assets/SvgComponents/AddSubDiagramIcon';
import ButtonCommon from './Button';

import colors from '../styles/colors';

const styles = makeStyles({
  container: {
    position: 'relative',
    width: '100%',
    height: '287px',
    backgroundColor: colors.primary.white,
    border: `1px dashed ${colors.greyScale.lightest}`,
    borderRadius: '8px',
    boxSizing: 'border-box',
    boxShadow: 'none'
  },
  contentWrapper: {
    position: 'relative',
    width: 'calc(100% - 32px)',
    height: 'calc(100% - 32px)',
    paddingBottom: '16px'
  },
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  iconWrapper: {
    display: 'table',
    margin: '0 auto'
  },
  icon: {
    width: '32px',
    height: '42px',
  },
  buttonWrapper: {
    marginTop: '10px'
  },
  button: {
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: 1.2,
    color: colors.secondary.cyan,
    textTransform: 'none'
  }
});

export default function AddSubOrgCard(props) {
  const classes = styles();

  return (
    <Card className={classes.container}>
      <CardContent className={classes.contentWrapper}>
        <div className={classes.content}>
          <div className={classes.iconWrapper}>
            <AddSubDiagramIcon viewBox={'0 0 32 43'} className={classes.icon}/>
          </div>
          <div className={classes.buttonWrapper}>
            <ButtonCommon
              className={classes.button}
              onClick={() => console.log('add sub')}
            >
              <Typography variant={'inherit'} noWrap>+ Add Sub-Organization</Typography>
            </ButtonCommon>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}