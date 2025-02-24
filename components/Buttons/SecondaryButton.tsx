import { appGreeen, appWhite, NativewindColors } from "@/constants/style";
import { Text } from "react-native";
import { TouchableOpacity, View } from "react-native";

interface PrimaryButtonProps {
    title: string; 
    onpress: () => void;
}
const SecondaryButton = (props:PrimaryButtonProps) => {
    return (
        <View style={NativewindColors.btnWrapper}>
            <TouchableOpacity
                onPress={props.onpress}
             style={[NativewindColors.secbtnStyle,{backgroundColor:appGreeen}]}>
                <Text style={[{ color: appWhite }]}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default SecondaryButton;