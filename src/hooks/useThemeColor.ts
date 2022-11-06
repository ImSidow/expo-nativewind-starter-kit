import Colors from "@helpers/constants/Colors";
import useColorScheme from "@hooks/useColorScheme";

const useThemeColor = (props: { light?: string; dark?: string }, colorName: keyof typeof Colors.light & keyof typeof Colors.dark) => {
    const theme = useColorScheme();
    const colorFromProps = props[theme];

    if (colorFromProps) {
        return colorFromProps;
    } else {
        return Colors[theme][colorName];
    }
};

export default useThemeColor;
