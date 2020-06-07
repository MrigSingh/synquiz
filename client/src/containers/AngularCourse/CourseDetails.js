import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import MainFeaturedPost from './MainFeaturedPost';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import AngularCover from '../../images/angular-cover.png';
import Sidebar from './Sidebar';
import {angularCourse} from '../../api/courses';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));


const mainFeaturedPost = {
  title: 'ANGULAR : A BEGINNER LEVEL COURSE IN ANGULAR JS',
  description: "Learn Angular, Start from the basics and go all the way to creating your own applications !",
  image: AngularCover,
  imgText: 'main image description',
};

const toBeLearned = ['Learn to use Angular professionally.', 'You will get everything about Angular.','Understand the folder structure of Angular.','earn the advance topics like HTTP Client how to send the request and get the response with HTTP GET and POST.','Learn the topics like event handling and event binding in Angular with component-routing and module-routing.','All the advance topics are covered here.'];

const requirements = ['Access to a computer with an internet connection.'];

const description = ['Become a Angular Programmer and learn one of employer\'s most requested skills !','This course will teach you Angular in a practical manner, with every lecture comes a full coding screencast and a corresponding code notebook! Learn in whatever manner is best for you!','We will start by helping you get Angular installed on your computer, regardless of your operating system, whether its Linux, MacOS, or Windows, we\'ve got you covered!']

const sidebar = {
  title: 'About the course',
  description:
    'Angular is a TypeScript-based open-source front-end web application platform led by the Angular Team at Google and by a community of individuals and corporations to address all of the parts of the developer\'s workflow while building complex web applications. Angular is a complete rewrite from the same team that built AngularJS. Angular is a framework for building client applications in HTML and either JavaScript or a language like TypeScript that compiles to JavaScript.',
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

export default function CourseDetails() {
  const classes = useStyles();
  console.log(angularCourse)
  // const preventDefault = (event) => event.preventDefault();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={5} className={classes.mainGrid}>
             <Grid item xs={12} md={8}>
              <Typography variant="h6" gutterBottom>
                What you will learn
              </Typography>
              <Divider />
              <ul style={{marginBottom: '80px'}} >
                {toBeLearned.map(item => (
                  <li><Typography variant="h6" gutterBottom>{item}</Typography></li>
                ))}
              </ul>
              <Typography variant="h6" gutterBottom>
                Requirements
              </Typography>
              <Divider />
              <ul style={{marginBottom: '80px'}}>
                {requirements.map(item => (
                  <li><Typography variant="h6" gutterBottom>{item}</Typography></li>
                ))}
              </ul>
              <Typography variant="h6" gutterBottom>
                Description
              </Typography>
              <Divider />
              <ul style={{marginBottom: '80px'}}>
                {description.map(item => (
                  <li><Typography variant="h6" gutterBottom>{item}</Typography></li>
                ))}
              </ul>
              <Typography variant="h6" gutterBottom>
                Course Contents
              </Typography>
              <Divider />
              <div className={classes.demo}>
                <List dense={false}>
                  {angularCourse.map(item => (
                    <ListItem>
                      <ListItemAvatar>
                      <a target="_blank" rel="noopener noreferrer" href={item.url} onClick={() => {}}>
                        <Avatar >
                          <FolderIcon />
                        </Avatar>
                      </a>  
                      </ListItemAvatar>
                      <ListItemText
                        primary={item.name}
                      />
                    </ListItem>
                  ))}
                </List>
              </div>
            </Grid>
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
    </React.Fragment>
  );
}