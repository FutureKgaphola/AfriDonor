import { Image, Text, useColorScheme, View } from "react-native";
const AppLogo = ({title,width,height,fontSize}:{title:string,width:number,height:number,fontSize:number}) => {
    let isDarkMode = useColorScheme() === 'dark';
    return (
        <View style={{ flexDirection: "row", alignItems: "center",paddingLeft:5 }}>
            <Image
                style={{ width: width, height: height }}
                source={require( "../assets/images/ugali.png")}
            />
            <Text style={{color: !isDarkMode ? "#3D3B40" : "white",marginLeft:3,fontSize:fontSize,fontWeight:'bold'}}>
                {title}
            </Text>
        </View>
    );
}
export default AppLogo;