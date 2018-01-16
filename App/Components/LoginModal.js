import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableOpacity, StyleSheet, Modal, View } from 'react-native'

import Button from './Button'
import styles from './Styles/RoundedButtonStyles'

const defaultStyle = StyleSheet.create({
  container: {
    alignItems: 'center'
  }
})

export default class Input extends Component {

  static defaultProps = {
    animationType: 'slide',
    visible: false
  }
  render() {
    return (
    <Modal
      visible={this.props.visible}
      animationType={this.props.animateType}
      >

      <View style={this.props.style}>
        <Text>Melinda Lee</Text>
      </View>
    </Modal>
  )
  }
}
