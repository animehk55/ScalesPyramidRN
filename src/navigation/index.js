
import React, { useContext } from 'react';
import { View, StyleSheet, Platform } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomIcon from '../components/CustomIcon';
import HeaderTitle from '../components/HeaderTitle';
import setHeaderLeft from '../navigation/setHeaderLeft';
import getHeaderTitle from '../navigation/getHeaderTitle';
import GetHeaderTitle from './getHeaderTitle';
import { Color, Font } from '../utils/theme';
import Routes from './Routes';

import LoginScreen from '../layouts/AuthStack/Login';
import ForgotPasswordScreen from '../layouts/AuthStack/ForgotPassword';



const screenOptions = ({ navigation }) => ({
    headerLeft: () => null,
    headerTitle: () => null,
    headerRight: () => <View />,
    headerStyle: {
        ...ifIphoneX({
            height: 106,
        }, {
            height: 80,
        }),
        backgroundColor: Color.WHITE,
        shadowColor: Color.BLACK,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 3,
    },
    gestureEnabled: false,
});

const SetHeaderTitle = ({ route }) => ({
    headerTitle: () => <HeaderTitle title={GetHeaderTitle(route)} />,
});

const setTabbar = ({ route }) => ({
    tabBarLabel: getHeaderTitle(route, true),
});

const Auth = createStackNavigator();
export const AuthStack = () => {
    return (

        <Auth.Navigator screenOptions={screenOptions}>
            <Auth.Screen name={Routes.Login} component={LoginScreen} />
            <Auth.Screen name={Routes.ForgotPassword} component={ForgotPasswordScreen} />
        </Auth.Navigator>

    )
}






// const TabBar = createBottomTabNavigator();
// export const TabBarNavigation = () => {

//     return (
//         <TabBar.Navigator
//             screenOptions={({ route }) => ({
//                 tabBarIcon: ({ color, size, focused }) => {
//                     let iconName;
//                     if (route.name === Routes.Home) {
//                         iconName = 'home';
//                     }
//                     else if (route.name === Routes.Activity) {
//                         iconName = 'activity';
//                     }
//                     else if (route.name === Routes.Finance) {
//                         iconName = 'finance';
//                     }
//                     else if (route.name === Routes.ChatListing) {
//                         iconName = 'chat';
//                     }
//                     else if (route.name === Routes.Profile) {
//                         iconName = 'profile';
//                     }
//                     return (
//                         <View style={[styles.bottomTab, { backgroundColor: focused ? Color.OPACITY_LIGHT : Color.TRANSPARENT }]} >
//                             <CustomIcon name={iconName} size={Font.SIZE_20} color={color} />
//                         </View >
//                     )
//                 },
//             })}
//             tabBarOptions={{
//                 activeTintColor: Color.DEEPBLUE,
//                 inactiveTintColor: Color.GREY,
//                 labelStyle: {
//                     fontSize: Font.SIZE_12,
//                     fontFamily: Font.COMFORTAA_REGULAR,
//                     color: Color.BLACK,
//                 },
//                 style: {
//                     backgroundColor: Color.WHITE,
//                 },
//                 keyboardHidesTabBar: true
//             }}>
//             <TabBar.Screen name={Routes.Home} component={HomeStack} options={setTabbar} />
//             <TabBar.Screen name={Routes.Activity} component={ActivityStack} options={setTabbar} />
//             <TabBar.Screen name={Routes.Finance} component={FinanceStack} options={setTabbar} />
//             <TabBar.Screen name={Routes.ChatListing} component={ChatStack} options={setTabbar} />
//             <TabBar.Screen name={Routes.Profile} component={ProfileStack} options={setTabbar} />
//         </TabBar.Navigator >
//     );
// }

// const styles = StyleSheet.create({
//     bottomTab: {
//         height: 30,
//         width: 30,
//         borderRadius: 8,
//         alignItems: 'center',
//         justifyContent: 'center',
//         marginTop: Platform.OS === 'ios' ? 0 : 5
//     },

// });


