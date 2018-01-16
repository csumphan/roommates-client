import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TextInput } from 'react-native'
import styles from './Styles/RoundedButtonStyles'

export default class Input extends Component {
  static defaultProps = {
    placeholderTextColor: 'white',
    autoCapitalize: 'none',
    autoCorrect: false
  }
  render() {
    return (
    <TextInput
      style={styles.sectionText}
      {...this.props}
    />
  )
  }
}
