import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    margin: '30px',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    padding: '10px'
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
    padding: '10px 50px'
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    flexBasis: '33.33%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

export default function DetailedExpansionPanel({fieldName, value, user}) {
  const [currentValue, setValue] = useState(value);
  const [temp, setTemp] = useState(null);
  const classes = useStyles();
  const handleSaveClick = async () => {
    setValue(temp);
    setTemp('');
  }
  return (
    <div className={classes.root}>
      <ExpansionPanel >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id={fieldName}
        >
          <div className={classes.column}>
            <Typography className={classes.heading}>{fieldName}</Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}> {currentValue} </Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
          <div className={classes.column}>Update {fieldName} </div>
          <div className={classes.column}>
          <TextField
          id={fieldName}
          label={fieldName}
          autoComplete="current-password"
          variant="outlined"
          value={temp}
          onChange={(e) => setTemp(e.target.value) }
        />
          </div>
          <div className={clsx(classes.column, classes.helper)}>
            <Typography variant="caption">
              Updating this all over the app may take some time.
              <br />
              <a href="#secondary-heading-and-columns" className={classes.link}>
                Learn more
              </a>
            </Typography>
          </div>
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <Button size="small">Cancel</Button>
          <Button size="small" color="primary" onClick={() => handleSaveClick()} >
            Save
          </Button>
        </ExpansionPanelActions>
      </ExpansionPanel>
    </div>
  );
}
