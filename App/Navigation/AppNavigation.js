import { StackNavigator } from 'react-navigation'
import SignUpScreen2 from '../Containers/SignUpScreen2'
import SignUpScreen from '../Containers/SignUpScreen'
import { Animated, Easing } from 'react-native'
import WelcomeScreen from '../Containers/WelcomeScreen'
import LoginScreen from '../Containers/LoginScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens

const SignUpNav = StackNavigator({
  SignUpScreen: { screen: SignUpScreen },
  SignUpScreen2: { screen: SignUpScreen2 }
}, {
  headerMode: 'screen',
  initialRouteName: 'SignUpScreen',
  navigationOptions: {
    headerStyle: styles.header
  },
  transitionConfig: () => ({
     transitionSpec: {
       duration: 300,
       easing: Easing.out(Easing.quad),
       timing: Animated.timing,
     }
  })
})

const PrimaryNav = StackNavigator({
  WelcomeScreen: { screen: WelcomeScreen },
  LoginScreen: { screen: LoginScreen },
  SignUp: {screen: SignUpNav}
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'WelcomeScreen',
  navigationOptions: {
    headerStyle: styles.header
  },
  transitionConfig: () => ({
     transitionSpec: {
       duration: 300,
       easing: Easing.quad,
       timing: Animated.timing,
     },
     screenInterpolator: sceneProps => {
       const { layout, position, scene } = sceneProps;
       const { index } = scene;

       const height = layout.initHeight;
       const translateY = position.interpolate({
         inputRange: [index - 1, index, index + 1],
         outputRange: [height, 0, 0],
       });

       const opacity = position.interpolate({
         inputRange: [index - 1, index - 0.99, index],
         outputRange: [0, 1, 1],
       });

       return { opacity, transform: [{ translateY }] };
     },
   }),
})

export default PrimaryNav
