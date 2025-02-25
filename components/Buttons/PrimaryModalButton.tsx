import { appGreeen, appWhite, NativewindColors } from "@/constants/style";
import { Text } from "react-native";
import { TouchableOpacity, View } from "react-native";

interface PrimaryButtonProps {
    title: string; 
    onpress: () => void;
    icon?: any;
}
const PrimaryModalButton = (props:PrimaryButtonProps) => {
    return (
        <View style={NativewindColors.btnWrapper}>
            <TouchableOpacity
                onPress={props.onpress}
             style={[NativewindColors.primMbtnStyle,{backgroundColor:appGreeen}]}>
                <View style={{flexDirection:'row', gap:5,justifyContent:'center', alignItems:'center'}}>
                <Text style={[{ color: appWhite}]}>{props.title}</Text>
                {props.icon}
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default PrimaryModalButton;