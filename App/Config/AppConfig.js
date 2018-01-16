// Simple React Native specific changes

import '../I18n/I18n'

const apiUrl = __DEV__ ? 'http://localhost:3000' : 'https://staging-api.urryde.com/api/v1'

export default {
  // font scaling override - RN default is on
  allowTextFontScaling: true,
  apiUrl
}
