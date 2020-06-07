import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits({count}) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Total Users on this apps</Title>
      <Typography component="p" variant="h4">
        {count}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        Last updated : Today
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View more details
        </Link>
      </div>
    </React.Fragment>
  );
}