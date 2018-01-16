import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import styles from './Styles/RoundedButtonStyles'

const defaultStyle = StyleSheet.create({
  container: {
    alignItems: 'center'
  }
})

export default class Input extends Component {
  static defaultProps = {
    placeholderTextColor: 'white',
    autoCapitalize: 'none',
    autoCorrect: false
  }
  render() {
    return (
    <TouchableOpacity style={[defaultStyle.container, this.props.style]} onPress={this.props.onPress} activeOpacity={0.7}>
      <Text style={this.props.textStyle}>
        {this.props.title}
      </Text>
    </TouchableOpacity>
  )
  }
}
