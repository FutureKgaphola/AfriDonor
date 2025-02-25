
import { ImageBackground } from "react-native";
import { Text, View } from "react-native";
import StatusView from "../StatusView/StatusView";
import Ionicons from '@expo/vector-icons/Ionicons';

const CardViews = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 5 }}>
            <ImageBackground
                source={require('../../assets/images/eggnet.jpg')} style={{ padding: 20 }}>
                <View style={{ padding: 20, overflow: 'hidden', borderWidth: 2, borderColor: 'white', backgroundColor: 'white' }}>
                    <Text style={{ fontSize: 25 }}>Get to meet our sponsors</Text>
                    <Text style={{ fontSize: 12 }}>Thanks to this amazing companies, this initiative became possible.</Text>
                </View>

                <StatusView />

                <View style={{ justifyContent: "space-evenly", flexDirection: 'row',margin:3 }}>

                    <View style={{ padding: 20, overflow: 'hidden', borderWidth: 2, borderColor: 'white', backgroundColor: 'white' }}>
                    <Ionicons name="fast-food-outline" size={24} color="black" />
                        <Text style={{ fontSize: 16 }}>Contribution:</Text>
                        <Text style={{ fontSize: 15 }}>76 K</Text>
                    </View>
                    <View style={{ padding: 20, overflow: 'hidden', borderWidth: 2, borderColor: 'white', backgroundColor: 'white' }}>
                    <Ionicons name="heart-circle-outline" size={24} color="black" />
                        <Text style={{ fontSize: 16 }}>Heartfelt</Text>
                        <Text style={{ fontSize: 15 }}>34 K</Text>
                    </View>
                </View>

            </ImageBackground>



        </View>
    );
}

export default CardViews;
