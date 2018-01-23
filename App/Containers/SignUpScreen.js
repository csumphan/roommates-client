import React, { Component } from 'react'
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native'
import { FormLabel, FormInput } from 'react-native-elements'
import { connect } from 'react-redux'
import { Container, Content, Footer, Form, Item, Input, Label, Icon, Button} from 'native-base'
import KeyboardSpacer from 'react-native-keyboard-spacer'
import LargeButton from '../Components/Button'
import LabeledInput from '../Components/LabeledInput'
import { Colors} from '../Themes/'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/SignUpScreenStyle'

class SignUpScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputColor: Colors.background,
      firstName: '',
      lastName: ''
    }
    this.fields = {}
  }

  static navigationOptions = ({navigation}) => {
    const { params = {} } = navigation.state

    const navOptions = {
      headerStyle: styles.header,
      title: <Text style={styles.title}>Sign Up</Text>,
      headerLeft: <Button transparent onPress={params.navigateBack}><Icon style={styles.labelText} name='close'></Icon></Button>,
    }

    return navOptions
  }
  setRef = (refName) => (ref) => {
    this.fields[refName] = ref
  }

  componentDidMount() {
    this.props.navigation.setParams({navigateBack: this.navigateBack})
    this.fields['firstNameInput'].focus()
  }
  navigateBack = () => {
    //cannot use goBack() to go back method because SignUpScreen is in a nested StackNavigator
    this.props.navigation.dispatch({type: 'Navigation/BACK'})
  }

  handleTextChange = (text) => (name) => {
    this.setState({[text]: name})
  }

  onFocusInput = () => {
    this.setState({inputColor: '#648b50'})
  }
  onBlurInput = () => {
    // this.setState({inputColor: Colors.background})
  }
  continueSignUp = () => {
    if (this.state.firstName.trim() === '') {
      this.fields['firstNameInput'].shake()
    }
    else if (this.state.lastName.trim() === '') {
      this.fields['lastNameInput'].shake()
    }
    else {
      this.props.navigation.navigate('SignUpScreen2', {})
    }
  }
  render () {
    return (
      <View style={[styles.container, styles.paddingTop]}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image source={require('../Images/whiteicon.png')} style={styles.icon}/>
          </View>
            <LabeledInput
              inputTextRef={this.setRef('firstNameInput')}
              labelStyle={styles.labelText}
              containerStyle={styles.formContainer}
              inputStyle={styles.formInput}
              onChangeText={this.handleTextChange('firstName')}
              text='First Name'
              autoCapitalize='words'
            />
          <LabeledInput
            inputTextRef={this.setRef('lastNameInput')}
            labelStyle={styles.labelText}
            containerStyle={styles.formContainer}
            inputStyle={styles.formInput}
            onChangeText={this.handleTextChange('lastName')}
            text='Last Name'
            autoCapitalize='words'
          />

        </View>
        <LargeButton
          style={styles.button}
          textStyle={styles.buttonText}
          title='Continue'
          onPress={this.continueSignUp}
        />
        <KeyboardSpacer/>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen)
