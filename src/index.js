import React from 'react'
import PropTypes from 'prop-types'
import {
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default class ButtonPicker extends React.PureComponent {
  render() {
    const { color, backgroundColor, borderColor } = this.props
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={this.props.onPress}
        style={[styles.container, { backgroundColor, borderColor }]}
      >
        <MaterialIcons
          name={'keyboard-arrow-down'}
          size={26}
          style={{ marginLeft: 15, alignSelf: 'flex-start' }}
          color={color}
        />
        <Text numberOfLines={1} style={[styles.label, { color }]}>{this.props.label.toUpperCase()}</Text>
      </TouchableOpacity>
    )
  }
}

ButtonPicker.propTypes = {
  label: PropTypes.string,
  onPress: PropTypes.func,
  color: PropTypes.string,
  borderColor: PropTypes.string,
  backgroundColor: PropTypes.string,
}

ButtonPicker.defaultProps = {
  label: 'Selecciona un elemento',
  color: '#000',
  borderColor: '#d3d3d3',
  backgroundColor: '#fff',
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  label: {
    flexWrap: 'nowrap',
    position: 'absolute',
    paddingHorizontal: 40,
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 15,
  }
})
