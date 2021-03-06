import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native'

class NextQuoteButton extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
        <Text style={styles.buttonText}>Next Thought</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderColor: '#000000',
    padding: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: '#000000',
    fontSize: 18,
  }
})

NextQuoteButton.propTypes = {
  onPress: PropTypes.func.isRequired,
}

export default NextQuoteButton
