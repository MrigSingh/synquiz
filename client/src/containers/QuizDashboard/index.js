import React,  {useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import angular from '../../images/angular.png';
import node from '../../images/node.png';
import bootstrap from '../../images/bootstrap.png';
import flutter from '../../images/flutter.png';
import ruby from '../../images/ruby.png';
import java from '../../images/java.jpg';
import javascript from '../../images/javascript.jpg';
import python from '../../images/python.jpg';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const upcoming = [
  {
    icon: angular,
    name: 'AngularJS',
    author: 'Colte Steele'
  },
  {
    icon: ruby,
    name: 'Ruby Programming Language',
    author: 'John Smith'
  },
  {
    icon: bootstrap,
    name: 'Bootstrap 4',
    author: 'Steve Smith'
  },
  {
    icon: flutter,
    name: 'Flutter Programming Language',
    author: 'Colte Steele'
  }
]
const quiz = [
  {
    icon: python,
    name: 'Python Programming Language',
    author: 'John Smith',
    route: '/python-quiz'
  },
  {
    icon: java,
    name: 'Java Programming Language',
    author: 'Steve Smith',
    route: '/java-quiz'
  },
  {
    icon: javascript,
    name: 'Javascript Programming Language',
    author: 'John Smith',
    route: '/js-quiz'
  },
  {
    icon: node,
    name: 'NodeJS',
    author: 'Colte Steele',
    route: '/node-quiz'
  }
]

function QuizDashboard({auth}) {
  const classes = useStyles();
  const history = useHistory()

  useEffect(() => {
    if(!localStorage.getItem('jwtToken')){
      history.push('/login')
    }
  }, [history])
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Welcome to Quizzes Dashboard
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              We present you a new learning platform using which you can enhance your learning abilities and technical skills.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="outlined" color="primary" onClick={() => history.push('/dashboard')} >
                    Explore Courses
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary" onClick={() => history.push('/quiz-dashboard')} >
                    Explore Quizzes
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4} >
            {quiz.map((card) => (
              <Grid item key={card.name} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.icon}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name}
                    </Typography>
                    <Typography>
                      Take this quiz and test your skill. Remember Eat, Sleep, Learn, Repeat. We wish you best of luck. Happy Leaning!
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" onClick={() => history.push(card.route)} >
                      Appear
                    </Button>
                    <Button size="small" color="primary" onClick={() => history.push(card.route)} >
                      Explore
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Container className={classes.cardGrid} maxWidth="md">
          <h3>Upcoming Quizzes</h3>
          <Grid container spacing={4}>
            {upcoming.map((card) => (
              <Grid item key={card.name} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.icon}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name}
                    </Typography>
                    <Typography>
                      This quiz is being under development by our creators. You can subscribe to them so whenever it become available we will notify you.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Subscribe
                    </Button>
                    <Button size="small" color="primary">
                      Explore
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <Footer />
    </React.Fragment>
  );
}
QuizDashboard.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  null
)(QuizDashboard);