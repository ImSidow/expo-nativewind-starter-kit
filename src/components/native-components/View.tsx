import useThemeColor from "@hooks/useThemeColor";
import { View as DefaultView } from "react-native";
import { ThemeProps } from "./types";

export type ViewProps = ThemeProps & DefaultView["props"];

export function View(props: ViewProps) {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, "background");

    return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}
