
import { defaultDataWith6Colors, Lorems, sampleStructure } from '@/constants/DummyData';
import { FlatList } from 'react-native';
import { Image, View } from 'react-native';
import { Divider, Text, Title } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';
import PrimaryButton from '../Buttons/PrimaryButton';
import SecondaryButton from '../Buttons/SecondaryButton';

const PostView = ({item}:{item:sampleStructure}) => {
  return (
    <View style={{ padding: 2,marginBottom:3 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
        <Image
          style={{ width: 50, height: 50, borderRadius: 180 }}
          source={item.profileImage}
        />
        <View style={{ padding: 2 }}>
          <Text style={{color:'black',fontWeight:'600'}}>{item.name}</Text>
          <Text style={{color:'gray'}}>{item.subtitle}</Text>
          <Text>{item.day}</Text>
        </View>
  
      </View>
      <Text>{Lorems}</Text>
  
      <FlatList
        horizontal
        style={{margin:2}}
        showsHorizontalScrollIndicator={false}
        data={item.pictures}
        renderItem={({ item }) => (
          <Image
            style={{ width: 250, height: 250 }}
            source={item.url}
          />
        )}
      />
      <View style={{flexDirection:'row', gap:5,alignItems:'center'}}>
      <Ionicons name="heart-circle-outline" size={24} color="black" />
      <Text>{item.reactions}</Text>
      </View>
      <Divider></Divider>
      <View style={{flexDirection:'row', gap:5}}>
      <SecondaryButton title={"Like"} onpress={()=>{}}/>
      <PrimaryButton title={"Request"} onpress={()=>{}}/>
     
      </View>
      <View style={{backgroundColor:'white',height:5, marginTop:7}}></View>
    </View>
  );
}

export default PostView;