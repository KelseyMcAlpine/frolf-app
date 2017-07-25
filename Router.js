import React from 'react';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { Scene, Router, Actions } from 'react-native-router-flux';
import FacebookLoginForm from './screens/FacebookLoginForm';
import CourseList from './screens/CourseList';
import CourseDetails from './screens/CourseDetails';
import ScorecardForm from './screens/ScorecardForm';
import GamePlay from './screens/GamePlay';
import WelcomeScreen from './screens/WelcomeScreen';
import CourseSearch from './screens/CourseSearch';
import ScorecardsList from './screens/ScorecardsList';
import ContactList from './screens/ContactList';
import SearchResults from './screens/SearchResults';


const RouterComponent = () => {
  const { sceneStyle, navStyle } = styles;
  return (
    <Router>
      <Scene
        key="auth"
        hideNavBar
      >
        <Scene
          initial
          key="welcome"
          component={WelcomeScreen}
          hideNavBar
        />
        <Scene
          key="facebookLogin"
          component={FacebookLoginForm}
        />
      </Scene>

      <Scene
        key="main"
        titleStyle={{ fontWeight: '600' }}
        navigationBarStyle={navStyle}
      >
        <Scene
          key="courseList"
          component={CourseList}
          title="Nearby Courses"
          onLeft={() => Actions.scorecardsList()}
          leftTitle={<Ionicons name="md-menu" size={24} color="#000" />}
          onRight={() => Actions.courseSearch()}
          rightTitle={<MaterialIcons name="search" size={24} color="#000" />}
          sceneStyle={sceneStyle}
        />
        <Scene
          key="courseSearch"
          component={CourseSearch}
          title="Find Courses"
          sceneStyle={sceneStyle}
        />
        <Scene
          key="scorecardsList"
          component={ScorecardsList}
          title="Scorecard History"
          sceneStyle={sceneStyle}
          onLeft={() => Actions.courseList({ type: 'reset' })}
          leftTitle="Done"
        />
        <Scene
          key="searchResults"
          component={SearchResults}
          title="Search Results"
          onLeft={() => Actions.scorecardsList()}
          leftTitle={<Ionicons name="md-menu" size={24} color="#000" />}
          onRight={() => Actions.courseSearch()}
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
          key="contactList"
          component={ContactList}
          title="Contact List"
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
    paddingTop: 80,
    backgroundColor: '#EEEEEE'
  },
  navStyle: {
    backgroundColor: '#fff',
    borderBottomWidth: 0,
    paddingTop: 10,
    height: 80
  }
};

export default RouterComponent;
