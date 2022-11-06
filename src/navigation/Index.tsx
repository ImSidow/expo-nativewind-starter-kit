/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */

import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import * as React from "react";
import { ColorSchemeName } from "react-native";
import { useUserStore } from "@stores/index";

import LinkingConfiguration from "./LinkingConfiguration";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
    const isUserAuthenticated = useUserStore((state) => state.isUserAuthenticated);

    return (
        <NavigationContainer linking={LinkingConfiguration} theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
            {/* {isUserAuthenticated ? <AppStack /> : <AuthStack />} */}
            <AppStack />
        </NavigationContainer>
    );
}
