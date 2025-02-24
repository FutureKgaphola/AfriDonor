import { NativewindColors,appGreeen,bgOverlay } from "@/constants/style";
import { ImageBackground, ImageSourcePropType, Text, TouchableOpacity, View } from "react-native";
import PrimaryButton from "./Buttons/PrimaryButton";
import SecondaryButton from "./Buttons/SecondaryButton";
const CarosalView = ({item}:any) => { 
    return ( 
        <ImageBackground
        source={item.bg}
         style={NativewindColors.Image_Background}>
            <View style={[NativewindColors.overlay,{backgroundColor:bgOverlay}]}>
                <Text style={NativewindColors.cardTitle}>{item?.title}</Text>
                <Text style={NativewindColors.cardSubTitle}>{item?.msg}</Text>
                
                <SecondaryButton title="Make a request" onpress={()=>{
                    console.log("Make a request");
                }}/>
            </View>
            <Text>{""}</Text>
        </ImageBackground>
     );
}
 
export default CarosalView;