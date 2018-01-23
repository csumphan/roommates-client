import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  paddingTop: {
    paddingTop: 15
  },
  header: {
    backgroundColor: Colors.background,
    shadowColor: 'transparent',
  },
  title: {
    fontSize: 24,
    fontFamily: Fonts.style.default,
    fontWeight: '400',
    textAlign: 'center',
    color: Colors.snow,
    paddingBottom: 5
  },

  labelText: {
    color: Colors.snow,
    fontSize: 20,
  },
  iconContainer: {
    marginLeft: 10
  },
  inputContainer: {
    margin: 5,
    marginBottom: 10,
    alignSelf: 'center'
  },
  loginContainer: {
    marginTop: 5,
  },
  imageContainer: {
    alignSelf: 'center',
    padding: 12,
    borderStyle: 'solid',
    borderColor: Colors.snow,
    borderWidth: 2,
    borderRadius: 240 * 0.5
  },
  icon: {
    height: 50,
    width: 50,
  },
  formContainer: {
    backgroundColor: '#a4c693',
    borderWidth: 0,
    borderBottomColor: '#a4c693',
    margin: 5,
    borderRadius: 3
  },
  formInput: {
    fontFamily: Fonts.style.default,
    color: 'white',
    borderWidth: 0,
    fontSize: 18,
    fontWeight: '500',
    padding: 10,
    paddingTop: 15,
    paddingBottom: 15
  },
  button: {
    overflow: 'hidden',
    backgroundColor: Colors.snow,
    margin: 10,
    padding: 10,
    borderRadius: 5,
    left: 0,
    right: 0,
    bottom: 0,
    height: 55
  },
  buttonText: {
    color: Colors.background,
    fontSize: 28,
    fontWeight: '300'
  },
  focus: {
    backgroundColor: '#648b50'
  },
  blur: {
    backgroundColor: Colors.background
  },
  validationContainer: {
    margin: 10
  },
  checkBoxContainer: {
    backgroundColor: Colors.background,
    borderWidth: 0,
    padding: 0
  },
  checkBoxText: {
    fontSize: 14,
    color: Colors.snow
  }
})
