import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TextInput, View } from 'react-native'
import styles from './Styles/RoundedButtonStyles'
import { FormLabel, FormInput } from 'react-native-elements'
import { Colors} from '../Themes/'

export default class Input extends Component {
  static defaultProps = {
    autoCapitalize: 'none',
    autoCorrect: false
  }

  constructor (props) {
    super(props)
    this.state = {
      inputColor: '#a4c693'
    }
  }


  render() {
    return (
    <View>
      <FormLabel labelStyle={this.props.labelStyle}>{this.props.text}</FormLabel>
      <FormInput
        {...this.props}
        ref={this.props.inputTextRef}
        containerStyle={this.props.containerStyle}
      />
    </View>
  )
  }
}
