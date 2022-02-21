/* eslint-disable */ 


import React from 'react';
import {StyleSheet, TouchableOpacity, ViewPropTypes} from 'react-native';
import PropTypes from 'prop-types';
import Label from '../Label';
import {Color, Font} from '../../utils/theme';

const TextButton = props => {
  const {
    style,
    activeOpacity,
    disabled,
    onPress,
    titleStyle,
    title,
    children,
    iconShow,
    iconName,
    iconStyle,
  } = props;

  let buttonStyle = [];
  buttonStyle.push(styles.button);
  buttonStyle.push(style);

  let textStyle = [];
  textStyle.push(styles.title);
  textStyle.push(titleStyle);

  return (
    <TouchableOpacity
      style={[
        styles.buttonStyle,
        {backgroundColor: disabled ? Color.RED : Color.TEXT_DARKBLUE},
        style,
      ]}
      activeOpacity={activeOpacity}
      disabled={disabled}
      onPress={onPress}>
      <Label
        style={[
          styles.textStyle,
          {color: disabled ? Color.TEXT_DARKBLUE : Color.WHITE},
          titleStyle,
        ]}>
        {title}
      </Label>
    </TouchableOpacity>
  );
};

TextButton.propTypes = {
  style: ViewPropTypes.style,
  activeOpacity: PropTypes.number,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,

  title: PropTypes.string,
  titleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

const styles = StyleSheet.create({
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    borderRadius: 10,
    backgroundColor: Color.WHITE,
  },
  textStyle: {
    // fontFamily: Font.IBM_BOLD,
    color: Color.TEXT_WHITE,
    fontSize: Font.SIZE_16,
    includeFontPadding: false,
  },

  iconStyle: {
    color: Color.TEXT_BLACK,
    fontSize: Font.SIZE_20,
    // paddingRight: 10
  },
});

export default TextButton;
