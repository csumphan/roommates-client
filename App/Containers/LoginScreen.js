import React, { Component } from 'react'
import { ScrollView, Text, Image, View, TextInput, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
// import Input from '../Components/Input'
import { Container, Content, Footer, Form, Item, Input, Label, Icon, Button} from 'native-base'
import LargeButton from '../Components/Button'
import { Images } from '../Themes'
import UserActions from '../Redux/UserRedux'

// Styles
import styles from './Styles/LoginScreenStyles'

class LoginScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      validEmail: false
    }
    this.fields = {}
  }

  static navigationOptions = () => {
    const navOptions = {
      headerStyle: styles.header
    }

    return navOptions
  }

  componentDidMount() {
    this.fields['emailInput']._root.focus()
  }

  handleTextChange = (text) => (name) => {
    this.setState({[text]: name})
  }
  handleLogin = () => {
    const { email, password } = this.state
    const trimmedEmail = email.trim()
    const credential = {
      email: trimmedEmail,
      password
    }
    this.props.login(credential)
  }
  setRef = (refName) => (ref) => {
    this.fields[refName] = ref
  }

  validateEmail = () => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)) {
      this.setState({validEmail: true})
    }
    else {
      this.setState({validEmail: false})
    }
  }

  render () {
    return (
      <Container style={styles.container}>
        <Content keyboardShouldPersistTaps='always' style={styles.content} contentContainerStyle={styles.contentContainer}>
          <Text style={styles.title}>Log In</Text>
          <Form>
            <Item
              style={StyleSheet.flatten(styles.inputContainer)}
              success={this.state.validEmail}
              >
              <Icon
                style={StyleSheet.flatten(styles.labelText)}
                active
                name='mail'
              />
              <Input
                ref={this.setRef('emailInput')}
                onChangeText={this.handleTextChange('email')}
                onBlur={this.validateEmail}
                placeholder='Email'
                placeholderTextColor='white'
                autoCorrect={false}
                autoCapitalize='none'
                style={StyleSheet.flatten(styles.formInput)}>
              </Input>
            </Item>
            <Item
              style={StyleSheet.flatten(styles.inputContainer)}
              >
              <Icon
                style={StyleSheet.flatten(styles.labelText)}
                active
                name='key'
              />
              <Input
                getRef={this.setRef('passwordInput')}
                onChangeText={this.handleTextChange('password')}
                style={StyleSheet.flatten(styles.formInput)}
                placeholder='Password'
                placeholderTextColor='white'
                secureTextEntry
                autoCorrect={false}
                autoCapitalize='none'
                >
              </Input>
            </Item>
          </Form>
          <Button style={styles.forgotPassword} transparent>
            <Text>Forgot Password...</Text>
          </Button>
          <LargeButton
            style={styles.button}
            textStyle={styles.buttonText}
            title='Log In'
            onPress={this.handleLogin}
          />
        </Content>

      </Container>
    )
  }
}
const mapDispatchToProps = dispatch => ({
  login: credential => dispatch(UserActions.loginRequest(credential))
})

export default connect(null, mapDispatchToProps)(LoginScreen)
