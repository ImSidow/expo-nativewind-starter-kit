import { View } from "@components/native-components";
import React from "react";
import { ViewStyle } from "react-native";

const StackScreenLayout: React.FC<{ style?: ViewStyle; children: React.ReactNode }> = ({ style, children, ...props }) => {
    return (
        <View style={[{ flex: 1 }, style]} {...props}>
            {children}
        </View>
    );
};

export default StackScreenLayout;
