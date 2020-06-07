import Homepage from './containers/Homepage';
import Login from './containers/Login';
import Register from './containers/Register';
import DashBoard from './containers/DashBoard';
import QuizDashboard from './containers/QuizDashboard';
import ReactCourse from './containers/ReactCourse';
import AngularCourse from './containers/AngularCourse';
import NodeCourse from './containers/NodeCourse';
import ReactNativeCourse from './containers/ReactNativeCourse';
import JSQuizContainer from './containers/JSQuizContainer';
import JavaQuizContainer from './containers/JavaQuizContainer';
import PythonQuizContainer from './containers/PythonQuizContainer';
import NodeQuizContainer from './containers/NodeQuizContainer';
import AdminDashboard from './containers/AdminDashboard';
import ProfileContainer from './containers/ProfileContainer';

const routes = [
  {
    component: Homepage,
    route: '/',
    exact: true
  },
  {
    component: Login,
    route: '/login',
    exact: true
  },
  {
    component: Register,
    route: '/register',
    exact: true
  },
  {
    component: DashBoard,
    route: '/dashboard',
    exact: true
  },
  {
    component: QuizDashboard,
    route: '/quiz-dashboard',
    exact: true
  },
  {
    component: ReactCourse,
    route: '/react-course',
    exact: true
  },
  {
    component: ReactNativeCourse,
    route: '/react-native-course',
    exact: true
  },
  {
    component: AngularCourse,
    route: '/angular-course',
    exact: true
  },
  {
    component: NodeCourse,
    route: '/node-course',
    exact: true
  },
  {
    component: JSQuizContainer,
    route: '/js-quiz',
    exact: true
  },
  {
    component: JavaQuizContainer,
    route: '/java-quiz',
    exact: true
  },
  {
    component: PythonQuizContainer,
    route: '/python-quiz',
    exact: true
  },
  {
    component: NodeQuizContainer,
    route: '/node-quiz',
    exact: true
  },
  {
    component: AdminDashboard,
    route: '/admin',
    exact: true
  },
  {
    component: ProfileContainer,
    route: '/profile',
    exact: true
  }
]

export default routes;
