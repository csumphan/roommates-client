import React, { Component } from 'react'
import { ScrollView, Text, View, Image, TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'

import Swiper from 'react-native-swiper'
import Button from '../Components/Button'
import LoginModal from '../Components/LoginModal'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/WelcomeScreenStyle'

class WelcomeScreen extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {
  //   }
  // }
  static navigationOptions = ({navigation}) => {
    const { params = {} } = navigation.state;
    const navOptions = {
      headerRight: <Button textStyle={styles.headerText} title='Log In' onPress={params.handleLogin}/>,
      headerStyle: styles.header
    }

    return navOptions
  }
  componentDidMount() {
    this.props.navigation.setParams({handleLogin: this.handleLogin})
  }
  handleLogin = () => {
    console.log('Pressed')
    this.props.navigation.navigate('LoginScreen', {})
  }
  handleSignUp = () => {
    this.props.navigation.navigate('SignUp', {})
  }
  render () {
    return (
      <View style={styles.container}>
        <Swiper style={styles.swiper} loop={false} automaticallyAdjustContentInsets>
          <View style={styles.slide}>
            <Text style={styles.welcomeText} >Welcome to Roommates</Text>
            <View style={styles.imageContainer}>
              <Image source={require('../Images/whiteicon.png')} style={styles.icon}/>
            </View>
            <Text style={styles.slideText}>Help manages and schedules household task</Text>
          </View>
          <View>
            <View style={styles.imageContainer}>
              <Text>
                <Icon style={styles.icon} name="broom" size={120} color="white" />
              </Text>
            </View>
            <Text style={styles.slideText}>Track daily chores and view shit about shit</Text>
          </View>
          <View>
            <Text style={styles.slideText}>Keep housemates accountable for their shit using reminders</Text>
          </View>
        </Swiper>
        <Button
          style={styles.button}
          textStyle={styles.buttonText}
          title='Sign Up'
          onPress={this.handleSignUp}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen)
