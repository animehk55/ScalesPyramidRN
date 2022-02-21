import React, { useState } from 'react';
import Label from '../../components/Label/index';
import { ScrollView, StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import { Color, Font } from '../../utils/theme';
import { screenWidth } from '../../utils/globals';
import TextButton from '../../components/TextButton/index';
import * as Progress from 'react-native-progress';
import Slider from '@react-native-community/slider';

const PyramidScale = () => {
  const [sliderValue, setSliderValue] = useState(0)
  const [value, setValue] = useState(0)

  const onSliderChange = (value) => {
    setSliderValue(value)
    setValue(Math.round(value * 10))
  }

  return (
    <View style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.headerSection}>
          <Image
            style={styles.slideImg}
            source={require('../../assets/images/topbarw.png')}
          />
          <Image
            style={styles.slideImg}
            source={require('../../assets/images/topbar.png')}
          />
          <Image
            style={styles.slideImg}
            source={require('../../assets/images/topbar.png')}
          />
          <Image
            style={styles.slideImg}
            source={require('../../assets/images/topbar.png')}
          />
          <Image source={require('../../assets/images/topbar.png')} />
        </View>

        <View style={styles.centerSection}>
          <View style={styles.headerText}>
            <Label style={styles.textStyle}>
              RESCUE SESSION: ANGER & FRUSTATION
            </Label>
            <TouchableOpacity>
              <Image height={10} width={10}
                source={require('../../assets/images/back.png')}
              />
            </TouchableOpacity>
          </View>
          <Label
            style={styles.headerTextSub}>
            Pick the level your anger & frustation right now
          </Label>
          <View style={styles.progressSection}>
            <View style={styles.circleProgress}>
              <Progress.Circle
                size={250}
                borderColor={'transparent'}
                progress={sliderValue}
                color={'white'}
                thickness={8}
                style={styles.circleProgressImage}
              />
              <Image height={200} width={200} style={styles.iamgeCircle}
                source={require('../../assets/images/circlebg.png')}
              />
              <Text style={styles.valueAnger}>{value > 0 && value}</Text>
            </View>
          </View>
          <View style={styles.container}>
            <Slider
              value={sliderValue}
              minimumValue={0}
              maximumValue={1}
              minimumTrackTintColor={'#8AD9E4'}
              maximumTrackTintColor={'white'}
              thumbTintColor={'#8AD9E4'}
              style={{ width: 300, height: 30, borderRadius: 10 }}
              onValueChange={(value) => onSliderChange(value)}
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottonBtn}>
        <TextButton
          style={styles.nextBtn}
          titleStyle={styles.buttonText}
          title="Next"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignSelf: 'center' },
  mainSection: {
    backgroundColor: Color.BGCOLOR,
    flex: 1,
  },
  headerText: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerSection: {
    width: screenWidth - 32,
    alignSelf: 'center',
    flexDirection: 'row',
    paddingBottom: 24,
    paddingTop: 24,
  },
  slideImg: {
    marginRight: 9,
  },
  centerSection: {
    width: screenWidth - 32,
    alignSelf: 'center',
  },
  circleProgressImage: {
    position: 'absolute',
    alignItems: 'center', zIndex: 22
  },
  textStyle: {
    color: Color.TEXT_DARKGREY,
    fontSize: Font.SIZE_16,
    paddingBottom: 32,
  },
  headerTextSub: {
    fontSize: Font.SIZE_24,
    color: Color.TEXT_GREY,
  },
  progressSection: {
    paddingTop: 50,
    paddingBottom: 72,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleProgress: {
    width: 300,
    height: 300,
    borderRadius: 166,
    borderWidth: 2,
    borderColor: '#8299A2',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  bottonBtn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextBtn: {
    backgroundColor: Color.WHITE,
    borderRadius: 32,
    width: screenWidth - 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  valueAnger: {
    position: 'absolute',
    color: 'white',
    fontSize: 50
  },
  iamgeCircle: {
    height: 240,
    width: 240
  },
  buttonText: {
    color: Color.TEXT_BLACK,
  },
});

export default PyramidScale;
