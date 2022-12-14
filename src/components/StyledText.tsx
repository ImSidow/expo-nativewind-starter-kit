import { Text, TextProps } from "@components/native-components";

export function MonoText(props: TextProps) {
    return <Text {...props} style={[props.style, { fontFamily: "space-mono" }]} />;
}
