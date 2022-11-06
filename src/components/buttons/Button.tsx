import { Text, TextStyle, TouchableOpacity, TouchableOpacityProps, ViewStyle } from "react-native";

const Button: React.FC<{ label?: string; labelStyle?: TextStyle; labelClassName?: string; style?: ViewStyle; className?: string; children?: React.ReactNode } & TouchableOpacityProps> = ({ label, labelStyle, labelClassName, style, className, children, ...props }) => {
    return (
        <TouchableOpacity style={style} className={`rounded px-10 py-2.5 self-start bg-[#3290ED] ${className}`} {...props}>
            {children ? (
                children
            ) : (
                <Text className={`text-white font-medium ${labelClassName}`} style={labelStyle}>
                    {label}
                </Text>
            )}
        </TouchableOpacity>
    );
};

export default Button;
