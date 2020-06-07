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
import ReactCover from '../../images/react-cover.png';
import Sidebar from './Sidebar';
import {reactCourse} from '../../api/courses';


const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));


const mainFeaturedPost = {
  title: 'Complete ReactJS course: Go from ZERO to HERO in ReactJS',
  description: "Learn Angular, Start from the basics and go all the way to creating your own applications ",
  image: ReactCover,
  imgText: 'main image description',
};

const toBeLearned = ['Learn to use React professionally.', 'You will get everything about React.','Understand the folder structure of React.','earn the advance topics like HTTP Client how to send the request and get the response with HTTP GET and POST.','Learn the topics like event handling and event binding in React.','All the advance topics are covered here.'];

const requirements = ['Access to a computer with an internet connection.'];

const description = ['Become a React Programmer and learn one of employer\'s most requested skills !','This course will teach you React in a practical manner, with every lecture comes a full coding screencast and a corresponding code notebook! Learn in whatever manner is best for you!','We will start by helping you get React installed on your computer, regardless of your operating system, whether its Linux, MacOS, or Windows, we\'ve got you covered!']

const sidebar = {
  title: 'About the course',
  description:
    'React is an open source javascript library for building user interfaces. React is a project created and maintained by Facebook. React has more than a 100 thousand stars on GitHub and a huge community behind it.',
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
                  {reactCourse.map(item => (
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