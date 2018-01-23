import React, { Component } from 'react'
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native'
import { FormLabel, FormInput, CheckBox } from 'react-native-elements'
import { connect } from 'react-redux'
import { Label, Button, Icon } from 'native-base'
import KeyboardSpacer from 'react-native-keyboard-spacer'
import LargeButton from '../Components/Button'
import LabeledInput from '../Components/LabeledInput'
import { Colors} from '../Themes/'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/SignUpScreenStyle'

class SignUpScreen2 extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputColor: Colors.background,
      email: '',
      password: '',
      validEmail: false,
      validPassword: false
    }
    this.fields = {}
  }

  static navigationOptions = ({navigation}) => {
    const { params = {} } = navigation.state

    const navOptions = {
      headerStyle: styles.header,
      title: <Text style={styles.title}>Sign Up</Text>,
      headerLeft: <Button transparent onPress={params.navigateBack}><Icon style={styles.labelText} name='arrow-back'></Icon></Button>,
    }

    return navOptions
  }
  setRef = (refName) => (ref) => {
    this.fields[refName] = ref
  }

  componentDidMount() {
    this.props.navigation.setParams({navigateBack: this.navigateBack})
  }
  navigateBack = () => {
    this.props.navigation.goBack()
  }

  handleEmailChange = (name) => {
    this.setState({email: name}, () => this.validateEmail())
  }

  handlePasswordChange = (password) => {
    this.setState({password}, () => this.validatePassword())
  }

  validateEmail = () => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)) {
      this.setState({validEmail: true})
    }
    else {
      this.setState({validEmail: false})
    }
  }

  validatePassword = () => {
    if(this.state['password'].length > 6) {
      this.setState({validPassword: true})
    }
    else {
      this.setState({validPassword: false})
    }
  }

  continueSignUp = () => {
    if(!this.state.validEmail) {
      console.log(this.fields['emailInput'])
      this.fields['emailInput'].shake()
    }
    else if (!this.state.validPassword) {
      this.fields['passwordInput'].shake()
    }
    else {
      this.props.navigation.navigate('SignUpScreen2', {})
    }
  }
  render () {
    return (
      <View style={[styles.container, styles.paddingTop]}>
        <View style={styles.container}>

          <LabeledInput
            inputTextRef={this.setRef('emailInput')}
            labelStyle={styles.labelText}
            containerStyle={styles.formContainer}
            inputStyle={styles.formInput}
            underlineColorAndroid='transparent'
            text='Email'
            onChangeText={this.handleEmailChange}
          />
          <LabeledInput
            inputTextRef={this.setRef('passwordInput')}
            labelStyle={styles.labelText}
            containerStyle={styles.formContainer}
            inputStyle={styles.formInput}
            secureTextEntry
            underlineColorAndroid='transparent'
            text='Password'
            onChangeText={this.handlePasswordChange}
          />
          <View style={styles.validationContainer}>
            <CheckBox
              containerStyle={styles.checkBoxContainer}
              component={View}
              textStyle={styles.checkBoxText}
              title='Valid Email'
              onPress={null}
              checked={this.state.validEmail}
            />
            <CheckBox
              containerStyle={styles.checkBoxContainer}
              component={View}
              textStyle={styles.checkBoxText}
              onPress={null}
              checked={this.state.validPassword}
              title='Password must be greater than 6 characters'
            />
          </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen2)
