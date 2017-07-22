import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import FacebookLoginForm from './screens/FacebookLoginForm';
import CourseList from './screens/CourseList';
import CourseDetails from './screens/CourseDetails';
import ScorecardForm from './screens/ScorecardForm';
import GamePlay from './screens/GamePlay';
import WelcomeScreen from './screens/WelcomeScreen';

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
          key="facebookLogin"
          component={FacebookLoginForm}
          title="Facebook Login"
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
