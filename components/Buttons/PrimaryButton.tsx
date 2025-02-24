import { appGreeen, NativewindColors } from "@/constants/style";
import { Text } from "react-native";
import { TouchableOpacity, View } from "react-native";

interface PrimaryButtonProps {
    title: string; 
    onpress: () => void;
}
const PrimaryButton = (props:PrimaryButtonProps) => {
    return (
        <View style={NativewindColors.btnWrapper}>
            <TouchableOpacity
                onPress={props.onpress}
             style={NativewindColors.primbtnStyle}>
                <Text style={[{ color: appGreeen }]}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default PrimaryButton;