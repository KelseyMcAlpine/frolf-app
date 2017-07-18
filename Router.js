import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import CourseList from './components/CourseList';
import CourseDetails from './components/CourseDetails';
import ScorecardForm from './components/ScorecardForm';
import GamePlay from './components/GamePlay';
import WelcomeScreen from './components/WelcomeScreen';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 60 }}>
      <Scene key="main">
        <Scene
          initial
          key="welcome"
          component={WelcomeScreen}
          title="Welcome"
        />
        <Scene
          key="login"
          component={LoginForm}
          title="Login"
        />
        <Scene
          key="courseDetails"
          component={CourseDetails}
          title="Course Details"
        />
        <Scene
          key="courseList"
          component={CourseList}
          title="Nearby Courses"
        />
        <Scene
          key="scorecardForm"
          component={ScorecardForm}
          title="New Scorecard"
        />
        <Scene
          key="gamePlay"
          component={GamePlay}
          title="Game"
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
