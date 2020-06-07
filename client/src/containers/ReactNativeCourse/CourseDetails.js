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
import ReactNativeCover from '../../images/react-native-cover.png';
import Sidebar from './Sidebar';
import {reactNativeJSCourse} from '../../api/courses';


const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));


const mainFeaturedPost = {
  title: 'COMPLETE REACT NATIVE JS COURESE: BASIC TO ADVANCED',
  description: "Learn Reactnative like a Professional! Start from the basics and go all the way to creating your own applications !",
  image: ReactNativeCover,
  imgText: 'main image description',
};

const toBeLearned = ['Learn to use React Native professionally.', 'You will get everything about React Native.','Understand the folder structure of React Native.','Learn the advance topics like HTTP Client how to send the request and get the response with HTTP GET and POST.','Learn the topics like event handling and event binding in React Native.','All the advance topics are covered here.'];

const requirements = ['Access to a computer with an internet connection.'];

const description = ['Become a React Native Programmer and learn one of employer\'s most requested skills !','This course will teach you React Native in a practical manner, with every lecture comes a full coding screencast and a corresponding code notebook! Learn in whatever manner is best for you!','We will start by helping you get React Native installed on your computer, regardless of your operating system, whether its Linux, MacOS, or Windows, we\'ve got you covered!']

const sidebar = {
  title: 'About the course',
  description:
    'REACT Native helps you create real and exciting mobile apps with the help of JavaScript only, which is supportable for both android and iOS platforms. Just code once, and the REACT Native apps are available for both iOS and Android platforms which helps to save development time. Found a great popularity and also backed by Facebook, REACT Native, has a huge community support today. React Native is built on top of ReactJS which has given a huge competition to the long time favorite, AngularJS. React Native is a framework that builds a hierarchy of UI components to build the JavaScript code. It has a set of components for both iOS and Android platforms to build a mobile application with native look and feel.',
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

export default function CourseDetails() {
  const classes = useStyles();

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
              <div className={classes.demo}>
                <List dense={false}>
                  {reactNativeJSCourse.map(item => (
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