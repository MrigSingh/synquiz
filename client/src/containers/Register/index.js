import React, {useState, useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Alert from '@material-ui/lab/Alert';
import Header from '../../components/Header';
import { withRouter, useHistory } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        &lt;SynQuiz&#47;&gt;
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SignUp({auth, registerUser, errors}) {
  const classes = useStyles();
  const history = useHistory();
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [stream, setstream] = useState('');
  const [collegeName, setcollegeName] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [confirm, setconfirm] = useState('');

  useEffect(() => {
    if(auth.isAuthenticated){
      history.push('/dashboard');
    } else if (localStorage.getItem('jwtToken')) {
      history.push('/dashboard');
    } 
  }, [auth, history])

  const handleSignUpClick = (e) => {
    e.preventDefault()
    console.log('click')
    const object = {
      firstName,
      lastName,
      stream,
      collegeName,
      email,
      password,
      password2: confirm
    }
    registerUser(object, history);
  }
  console.log(errors);
  return (
    <div>
    <Header />
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                value={firstName}
                onChange={(e) => setfirstName(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                value={lastName}
                onChange={(e) => setlastName(e.target.value) }
                autoComplete="lname"
              />
            </Grid>
            {errors.name && <Alert severity="error">{errors.name}</Alert>}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setemail(e.target.value) }
              />
            </Grid>
            {errors.email && <Alert severity="error">{errors.email}</Alert>}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setpassword(e.target.value) }
                autoComplete="current-password"
              />
            </Grid>
            {errors.password && <Alert severity="error">{errors.password}</Alert>}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="confirm"
                label="Confirm Password"
                type="password"
                value={confirm}
                onChange={(e) => setconfirm(e.target.value) }
                id="confirm-password"
                autoComplete="confirm-password"
              />
            </Grid>
            {errors.password2 && <Alert severity="error">{errors.password2}</Alert>}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="collegeName"
                label="College"
                id="college"
                value={collegeName}
                onChange={(e) => setcollegeName(e.target.value) }
              />
            </Grid>
            {errors.college && <Alert severity="error">{errors.college}</Alert>}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="stream"
                label="Stream/Branch"
                id="stream"
                value={stream}
                onChange={(e) => setstream(e.target.value) }
              />
            </Grid>
            {errors.stream && <Alert severity="error">{errors.stream}</Alert>}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(e) => handleSignUpClick(e)}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
    </div>
  );
}

SignUp.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(SignUp));