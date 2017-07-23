import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import FacebookLoginForm from './screens/FacebookLoginForm';
import CourseList from './screens/CourseList';
import CourseDetails from './screens/CourseDetails';
import ScorecardForm from './screens/ScorecardForm';
import GamePlay from './screens/GamePlay';
import WelcomeScreen from './screens/WelcomeScreen';
import { MaterialIcons } from '@expo/vector-icons';


const RouterComponent = () => {
  const { sceneStyle } = styles;
  return (
    <Router>
      <Scene
        key="auth"
        hideNavBar={true}
      >
        <Scene
          initial
          key="welcome"
          component={WelcomeScreen}
          hideNavBar={true}
        />
        <Scene
          key="facebookLogin"
          component={FacebookLoginForm}
        />
      </Scene>

      <Scene
        key="main"
        titleStyle={{ fontWeight: '600' }}
      >
        <Scene
          key="courseList"
          component={CourseList}
          title="Nearby Courses"
          onLeft={() => alert("left button")}
          leftTitle={<MaterialIcons name="sort" size={24} color="#000" />}
          onRight={() => alert("right button")}
          rightTitle={<MaterialIcons name="search" size={24} color="#000" />}
          sceneStyle={sceneStyle}
        />
        <Scene
          key="courseDetails"
          component={CourseDetails}
          title="Course Details"
          sceneStyle={sceneStyle}
        />
        <Scene
          key="scorecardForm"
          component={ScorecardForm}
          title="New Scorecard"
          sceneStyle={sceneStyle}
        />
        <Scene
          key="gamePlay"
          component={GamePlay}
          title="Game"
          sceneStyle={sceneStyle}
        />
      </Scene>
    </Router>
  );
};

const styles = {
  sceneStyle: {
    paddingTop: 63,
    backgroundColor: '#EEEEEE'
  }
};

export default RouterComponent;
