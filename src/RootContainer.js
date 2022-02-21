// /**


import React, { useEffect } from 'react';
import { TextInput, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider, useSelector } from 'react-redux';
// import { PersistGate } from 'redux-persist/lib/integration/react';
import SplashScreen from 'react-native-splash-screen';

// import store, { persistor } from './state/store';
import { navigationRef } from './navigation/RootNavigation';
import Routes from './navigation/Routes';
import { AuthStack, TabBarNavigation } from './navigation';
import { Globals } from './utils/globals';

TextInput.defaultProps = { ...(TextInput.defaultProps || {}), allowFontScaling: false };
Text.defaultProps = { ...(Text.defaultProps || {}), allowFontScaling: false };
Text.defaultProps.allowFontScaling = false

const RootContainer = () => {
    const BaseStack = createStackNavigator();

    const userToken = useSelector(state => state.auth.userToken);
    const isLogin = useSelector(state => state.auth.isLogin);

    useEffect(() => {
        _bootstrap();
    }, []);

    const _bootstrap = () => {
        setTimeout(() => {
            SplashScreen.hide();
        }, 1000);
    };

    return (
        <NavigationContainer>
            <BaseStack.Navigator>
                {userToken == null ?
                    <BaseStack.Screen name={Routes.Auth} component={AuthStack} options={{
                        headerShown: false,
                        animationTypeForReplace: isLogin ? 'push' : 'pop'
                    }} />
                    :
                    <BaseStack.Screen name={Routes.Tab} component={TabBarNavigation} options={{ headerShown: false }} />
                }
            </BaseStack.Navigator>
        </NavigationContainer>
    )
}

export default RootContainer;
