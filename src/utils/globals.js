import { Dimensions, Platform, NativeModules } from 'react-native';

const { width, height } = Dimensions.get('window');
export const screenWidth = width;
export const screenHeight = height;

export const isIOS = () => {
    return Platform.OS === 'ios' ? true : false
}

const { StatusBarManager } = NativeModules;
export const statusHeight = StatusBarManager.HEIGHT;
const androidHeaderHeight = 56;
const iosHeaderHeight = statusHeight + 44;
export const headerHeight = isIOS() ? iosHeaderHeight : androidHeaderHeight;
// console.log("statusHeight ===>", statusHeight);
// console.log("androidHeaderHeight ===>", androidHeaderHeight);
// console.log("headerHeight ===>", headerHeight);


export const Globals = {
    // Keys
    kUserToken: 'userToken',
    // Keys
};