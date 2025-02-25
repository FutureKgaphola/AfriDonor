import Banner from '@/components/Banner';
import CardViews from '@/components/CardViews/CardViews';
import { FlatList, Keyboard, View } from 'react-native';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-paper';
import { Fragment, useState } from 'react';
import { appGreeen } from '@/constants/style';
import {MaterialIcons,Ionicons} from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native';
import AppLogo from '@/components/AppLogo';
import PostView from '@/components/CardViews/postsView';
import { samplePost } from '@/constants/DummyData';

export default function HomeScreen() {
  const [text, setText] = useState("");
  const [isvisible,setVisibility]=useState(false);
  Keyboard.addListener('keyboardDidShow',()=>setVisibility(true));
  Keyboard.addListener('keyboardDidHide',()=>{setVisibility(false);setText("");});
  return (
    <SafeAreaView>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

        <Fragment>
          <AppLogo height={40} width={40} title='AfriDonor' fontSize={20} />
          <View style={{ marginBottom: 2 }}>
            <TextInput
              value={text}
              mode="outlined"
              left={<TextInput.Icon icon={() => <Ionicons name="search-circle-outline" size={24} color="black" />} />}
              style={{ marginLeft: 10, marginRight: 10, marginTop: 10 }}
              placeholder='search for your favourite meal...'
              theme={{ colors: { primary: appGreeen }, roundness: 25 }}
              onChangeText={text => setText(text)}
              right={<TextInput.Icon icon={()=> isvisible ? <MaterialIcons onPress={()=>Keyboard.dismiss()} name="cancel" size={24} color="#B4B4B8" /> :null}/>}
            />
          </View>
          <FlatList
          showsVerticalScrollIndicator={false}
            style={{ marginBottom: 85 }}
            data={[
              { key: '1', type: 'banner' },

              { key: '2', type: 'cardView' },
              { key: '3', type: 'postsView' },
            ]}
            renderItem={({ item }) => {
              if (item.type === 'banner') {
                return <Banner />;
              } else if (item.type === 'cardView') {
                return <CardViews />
              }
              else if (item.type === 'postsView') {
                return  (
                  <FlatList
                  data={samplePost}
                  keyExtractor={(item)=>item.id}
                  renderItem={({item})=><PostView key={item.id} item={item}/>}
                  />
                )
              }
              else {
                return <Text>Unknown item type</Text>;
              }
            }}
            keyExtractor={(item) => item.key}
          />
        </Fragment>
      </TouchableWithoutFeedback>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
