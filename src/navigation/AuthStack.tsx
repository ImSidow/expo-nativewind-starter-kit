/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";

import { RootStackParamList } from "./types.d";
const Stack = createNativeStackNavigator<RootStackParamList>();

import LoginScreen from "@screens/auth/Login.screen";

const AuthStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ title: "Login" }} />
        </Stack.Navigator>
    );
};

export default AuthStack;
