import { status } from "@/constants/DummyData";
import { FlatList, Image, View } from "react-native";

const StatusView = () => {
    
    return ( 
        <FlatList
        style={{padding:5}}
        data={status}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
            <View style={{alignItems:'center',borderRadius:180,overflow:'hidden',margin:1}} >
            <View style={{borderRadius:180,overflow:'hidden',borderWidth:2,borderColor:'white', backgroundColor:'white',padding:2}}>
            <Image
                style={{width: 50, height: 50,borderRadius:180}}
                source={item.img} 
            />
            </View>
             
        </View>
        )}
        />
       
     );
}
 
export default StatusView;