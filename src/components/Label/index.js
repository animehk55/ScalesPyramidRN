/* eslint-disable */ 

import React from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';
import {Color, Font} from '../../utils/theme';

const Label = props => {
  const {color, textAlign, style, onPress, children, numberOfLines} = props;

  let textStyle = [];
  textStyle.push({fontSize: Font.SIZE_16});
  // textStyle.push({fontFamily: Font.IBM_BOLD});
  textStyle.push({
    color: color,
    textAlign: textAlign,
  });
  textStyle.push(style);

  return (
    <Text numberOfLines={numberOfLines} style={textStyle}>
      {children}
    </Text>
  );
};

Label.defaultProps = {
  color: Color.BLACK,
};

Label.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),

  numberOfLines: PropTypes.number,
  color: PropTypes.string,
  textAlign: PropTypes.string,
};

export default Label;
