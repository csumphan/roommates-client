import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },
  swiper: {
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
  imageContainer: {
    padding: 40,
    borderStyle: 'solid',
    borderColor: Colors.snow,
    borderWidth: 4,
    borderRadius: 240 * 0.5

  },
  icon: {
    height: 140,
    width: 140,
  },
  slide: {
    flex: 1,
    alignItems: 'center'
  },
  slideText: {
    color: Colors.snow,
    fontSize: 20,
    fontWeight: '300',
    textAlign: 'center',
    padding: 10,
    paddingBottom: 30,
    fontFamily: Fonts.style.default
  },
  welcomeText: {
    fontSize: 36,
    fontFamily: Fonts.style.default,
    fontWeight: '300',
    textAlign: 'center',
    color: Colors.snow,
    padding: 20,
    paddingBottom: 50
  },
  header: {
    backgroundColor: Colors.background,
    shadowColor: 'transparent',
    paddingRight: 10
  },
  headerText: {
    color: '#2F4B4F',
    fontSize: 18,
    fontFamily: Fonts.style.default,
    fontWeight: '400'
  }
})
