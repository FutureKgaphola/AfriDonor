import { TouchableOpacity, View ,Text} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRouter } from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';
const QrScreen = () => {
    const router = useRouter();
    return (
        <SafeAreaView>
            <View style={{padding:5}}>
                <TouchableOpacity style={{alignSelf:'flex-end'}} >
                <MaterialIcons onPress={() => router.push('/(tabs)/history')} name="cancel" size={30} color="black" />
                </TouchableOpacity>
                    <View style={{alignItems:'center'}}>
                    <AntDesign name="qrcode" size={350} color="black" />
                    </View>
                    <Text>Only authorized personnel are allowed to scan this qrcode. (Reserved For Office Use only).</Text>
            </View>
        </SafeAreaView>
    );
}

export default QrScreen;