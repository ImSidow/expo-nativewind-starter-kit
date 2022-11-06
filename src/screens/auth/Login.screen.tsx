import Button from "@components/buttons/Button";
import { Text, View } from "@components/native-components";
import StackScreenLayout from "@layouts/StackScreenLayout";
import { useUserStore } from "@stores/index";

const LoginScreen = () => {
    const authenticateUser = useUserStore((state) => state.authenticateUser);
    return (
        <StackScreenLayout>
            <Text className="text-red-500"> Login screen </Text>
            <Button label="Login" className="mt-10 ml-5" onPress={() => authenticateUser({})} />
        </StackScreenLayout>
    );
};

export default LoginScreen;
