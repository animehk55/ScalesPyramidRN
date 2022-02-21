import React, { useState } from 'react';
import Label from '../../components/Label/index';
import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Color, Font } from '../../utils/theme';
import { screenWidth } from '../../utils/globals';
import TextButton from '../../components/TextButton/index';

const PyramidScale = () => {
  const [barFive, setBarFive] = useState(true)
  const [barFour, setBarFour] = useState(true)
  const [barThree, setBarThree] = useState(true)
  const [barTwo, setBarTwo] = useState(true)
  const [barOne, setBarOne] = useState(true)
  const [status, setStatus] = useState('')

  const onPress = (data) => {
    if (data === 'barFive') {
      setBarFive(false)
      setBarFour(false)
      setBarThree(false)
      setBarTwo(false)
      setBarOne(false)
      setStatus('High')
    }
    else if (data === 'barFour') {
      setBarFive(true)
      setBarFour(false)
      setBarThree(false)
      setBarTwo(false)
      setBarOne(false)
      setStatus('High')
    } else if (data === 'barThree') {
      setBarFive(true)
      setBarFour(true)
      setBarThree(false)
      setBarTwo(false)
      setBarOne(false)
      setStatus('Medium')
    } else if (data === 'barTwo') {
      setBarFive(true)
      setBarFour(true)
      setBarThree(true)
      setBarTwo(false)
      setBarOne(false)
      setStatus('Medium')
    } else if (data === 'barOne') {
      setBarFive(true)
      setBarFour(true)
      setBarThree(true)
      setBarTwo(true)
      setBarOne(false)
      setStatus('Low')
    }
  };

  return (
    <View style={styles.containerFlex}>
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
          <View style={styles.textClose}>
            <Label style={styles.textStyle}>
              RESCUE SESSION: ANGER & FRUSTATION
            </Label>
            <TouchableOpacity>
              <Image
                style={styles.closeImg}
                source={require('../../assets/images/close.png')}
              />
            </TouchableOpacity>
          </View>
          <Label style={styles.headerTextStyle}>
            Pick the level your anger & frustation right now
          </Label>
          <View style={styles.pyramidSection}>
            <Label
              style={styles.status}>
              {status}
            </Label>
            <View style={styles.pyramidImage}>
              <TouchableOpacity style={styles.pyramidimg} onPress={() => onPress('barFive')}>
                {barFive ? <Image source={require('../../assets/images/bar.png')} /> :
                  <Image source={require('../../assets/images/barWh5.png')} />
                }
              </TouchableOpacity>
              <TouchableOpacity style={styles.pyramidimg} onPress={() => onPress('barFour')}>
                {barFour ? <Image source={require('../../assets/images/bar1.png')} /> : <Image source={require('../../assets/images/barWh4.png')} />}
              </TouchableOpacity>
              <TouchableOpacity style={styles.pyramidimg} onPress={() => onPress('barThree')}>
                {barThree ? <Image source={require('../../assets/images/bar2.png')} /> : <Image source={require('../../assets/images/barWh3.png')} />}
              </TouchableOpacity>
              <TouchableOpacity style={styles.pyramidimg} onPress={() => onPress('barTwo')}>
                {barTwo ? <Image source={require('../../assets/images/bar4.png')} /> : <Image source={require('../../assets/images/barWh2.png')} />}
              </TouchableOpacity>
              <TouchableOpacity style={styles.pyramidimg} onPress={() => onPress('barOne')}>
                {barOne ? <Image source={require('../../assets/images/bar5.png')} /> : <Image source={require('../../assets/images/barWh1.png')} />}
              </TouchableOpacity>
            </View>
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
  containerFlex: {
    flex: 1
  },
  status: {
    color: Color.TEXT_WHITE,
    fontSize: Font.SIZE_16,
    paddingBottom: 32,
  },
  mainSection: {
    backgroundColor: Color.BGCOLOR,
    flex: 1,
  },
  textClose: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  closeImg: {
    width: 16,
    height: 16,
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
  headerTextStyle: {
    fontSize: Font.SIZE_24,
    color: Color.TEXT_GREY
  },
  textStyle: {
    color: Color.TEXT_LIGHTGREEN,
    fontSize: Font.SIZE_16,
    paddingBottom: 32,
  },
  pyramidSection: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 96,
  },
  pyramidImage: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  pyramidimg: {
    marginBottom: 24,
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
  buttonText: {
    color: Color.TEXT_BLACK,
  },
});

export default PyramidScale;
