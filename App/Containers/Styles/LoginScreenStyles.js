import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  container: {
    paddingBottom: Metrics.baseMargin,
    backgroundColor: Colors.background,
    flex: 1
  },
  header: {
    backgroundColor: Colors.background,
    shadowColor: 'transparent',
    paddingRight: 10
  },
  title: {
    fontSize: 36,
    fontFamily: Fonts.style.default,
    fontWeight: '300',
    textAlign: 'center',
    color: Colors.snow,
    padding: 20,
    paddingBottom: 25
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: 3,
    width: Metrics.screenWidth * 0.9

  },

  labelText: {
    color: Colors.snow
  },
  inputContainer: {
    margin: 5,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  formInput: {
    fontFamily: Fonts.style.default,
    color: Colors.snow,
    paddingLeft: 5,
    fontSize: 20,
    fontWeight: '400'
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginRight: 10ea
  },
  button: {
    overflow: 'hidden',
    backgroundColor: Colors.snow,
    margin: 10,
    padding: 10,
    borderRadius: 5
  },
  buttonText: {
    color: Colors.background,
    fontSize: 28,
    fontWeight: '300'
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    justifyContent: 'space-between'
  }
})
