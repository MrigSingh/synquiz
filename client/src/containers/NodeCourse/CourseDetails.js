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
import NodeCover from '../../images/node-cover.jpg';
import Sidebar from './Sidebar';
import {nodeJSCourse} from '../../api/courses';


const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));


const mainFeaturedPost = {
  title: 'NODE JS : A BEGINNER LEVEL COURSE',
  description: "Dive deep under the hood of NodeJS, to create a basic level of understanding and to work in backend !",
  image: NodeCover,
  imgText: 'main image description',
};

const toBeLearned = ['Learn to use Node as beginner level.', 'You will get everything about Node','Understand the folder structure of Node.','Learn the advance topics like HTTP Client how to send the request and get the response with HTTP GET and POST.','Learn the topics like routing & posting in Node.','All the basics levle topics are covered here.'];

const requirements = ['Access to a computer with an internet connection.'];

const description = ['Become a Node Programmer and learn one of employer\'s most requested skills !','This course will teach you Node in a practical manner, with every lecture comes a full coding screencast and a corresponding code notebook! Learn in whatever manner is best for you!','We will start by helping you get Node installed on your computer, regardless of your operating system, whether its Linux, MacOS, or Windows, we\'ve got you covered!']

const sidebar = {
  title: 'About the course',
  description:
    'Node.js is an event-based, non-blocking, asynchronous I/O framework that uses Google\'s V8 JavaScript Engine. Node.js, commonly just called Node, is often used for developing applications that rely on the ability to run javascript both on the client and server side. Running the same language on both the client and the server benefits from improved code reusability and the less context switching.',
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
              <Typography variant="h6" gutterBottom>
                Course Contents
              </Typography>
              <Divider />
              <div className={classes.demo}>
                <List dense={false}>
                  {nodeJSCourse.map(item => (
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