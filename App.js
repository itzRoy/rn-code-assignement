import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import React from 'react';
import { useSelector } from 'react-redux';
import Dashboard from './src/screens/dashboard/dashboard';

import Login from './src/screens/login/login';

const Stack = createNativeStackNavigator();

function App () {
    const user = useSelector(state => state.user);
    const { accessToken } = user;

    axios.defaults.baseURL = 'http://34.245.213.76:3000/';
    if (accessToken) {
        axios.defaults.headers.common.Authorization = 'Bearer ' + accessToken;
    }
    axios.defaults.headers.post['Content-Type'] =
    'application/x-www-form-urlencoded';

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="login"
                    component={Login}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="dashboard" component={Dashboard} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
