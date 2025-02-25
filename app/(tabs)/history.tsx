import PrimaryButton from "@/components/Buttons/PrimaryButton";
import SecondaryButton from "@/components/Buttons/SecondaryButton";
import { useCallback, useEffect, useMemo, useRef } from "react";
import { Image, ImageBackground, TouchableOpacity } from "react-native";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button } from "react-native-paper";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import BottomSheet, { BottomSheetView, BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { s } from "react-native-wind";
import Fontisto from '@expo/vector-icons/Fontisto';

import { Ionicons } from '@expo/vector-icons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import PrimaryModalButton from "@/components/Buttons/PrimaryModalButton";
import { appGreeen } from "@/constants/style";
import { useRouter } from "expo-router";
const History = () => {
      const snapPonits = useMemo(() => ["18%", "28%", "30%"], []);
      // ref
      const bottomSheetRef = useRef<BottomSheet>(null);
      useEffect(() => {

            return () => bottomSheetRef.current?.close();
      }, [])
      const renderbacdrop = useCallback((props: any) => <BottomSheetBackdrop appearsOnIndex={1} disappearsOnIndex={0} {...props} />, []);
      // callbacks
      const handleSheetChanges = useCallback((index: number) => {
            console.log('handleSheetChanges', index);
      }, []);
      const insets = useSafeAreaInsets();
      const router = useRouter();
      return (
            <GestureHandlerRootView style={{ flex: 1, marginTop: insets.top }}>


                  <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Notifications</Text>
                  <ImageBackground source={require('../../assets/images/hum.jpg')} style={{ paddingTop: 50, borderRadius: 15, margin: 2, overflow: 'hidden' }}>

                        <View style={{}}>
                              <View style={{ backgroundColor: 'rgba(126, 161, 103, 0.34)', padding: 2, borderRadius: 5 }}>
                                    <TouchableOpacity onPress={() => bottomSheetRef.current?.expand()} style={{ position: 'absolute', backgroundColor: 'white', borderRadius: 100, zIndex: 5, right: 0, marginTop: 5, marginRight: 5 }}>
                                          <MaterialCommunityIcons name="dots-vertical-circle-outline" size={24} color="black" />
                                    </TouchableOpacity>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                          <Image
                                                style={{ width: 50, height: 50, borderRadius: 180 }}
                                                source={require('../../assets/sponsors/spar.jpg')}
                                          />
                                          <View style={{ padding: 2 }}>
                                                <Text style={{ color: 'black', fontSize: 20, fontWeight: '600' }}>{"spar"}</Text>
                                                <Text style={{ color: 'gray' }}>{"Good For You"}</Text>
                                                <Text style={{ backgroundColor: appGreeen, color: 'white', padding: 2 }}>{"Today 11:12 am"}</Text>
                                          </View>

                                    </View>
                                    <View style={{ backgroundColor: 'white', padding: 5, gap: 5 }}>
                                          <Text>Hi, future spar has given you a free meal and is ready to collect at a store near you.</Text>
                                          <Text style={{ fontWeight: 'bold' }}>Category: Proper Meal</Text>
                                    </View>
                                    <View style={{ gap: 5, flexDirection: 'row' }}>
                                          <PrimaryButton onpress={(() => { bottomSheetRef.current?.expand(); })} title="confirm" />
                                          <SecondaryButton onpress={(() => { })} title="decline" />
                                    </View>
                              </View>
                        </View>

                  </ImageBackground>


                  <BottomSheet index={-1}
                        enablePanDownToClose
                        backdropComponent={renderbacdrop}
                        snapPoints={snapPonits}
                        ref={bottomSheetRef}
                        onChange={handleSheetChanges}
                  >
                        <BottomSheetView style={{ backgroundColor: 'white', borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>
                              <Text style={s`text-lg font-bold text-center`}>Meal Information</Text>
                              <View style={s`m-1`}>
                                    <View style={s`flex flex-row rounded-md border-gray-50 border-2 p-2 items-center`}>
                                          <Ionicons name="fast-food-outline" size={24} color="black" />
                                          <Text>1 x Proper meal</Text>
                                    </View>
                                    <View style={s`flex flex-row rounded-md border-gray-50 border-2 p-2 items-center`}>
                                          <Ionicons name="home-outline" size={24} color="black" />
                                          <Text>Lebowakgomo, malaneng zone-F</Text>
                                    </View>
                                    <View style={s`flex flex-row rounded-md border-gray-50 border-2 p-2 items-center`}>
                                          <Fontisto name="shopping-store" size={24} color="black" />
                                          <Text>Provider : Spar</Text>
                                    </View>
                                    <View style={s`flex flex-row rounded-md border-gray-50 border-2 p-2 items-center`}>
                                    <TouchableOpacity onPress={()=>{bottomSheetRef.current?.close(); router.push('/(tabs)/qrScreen');}}>
                                    <MaterialCommunityIcons name="qrcode-scan" size={24} color="black" />
                                    </TouchableOpacity>
                                          <Text style={{color:'red'}}>Show this QR code at store at any till point or to relevent employee of the company</Text>
                                    </View>
                                    <View>
                                          <Text style={{ fontSize: 10 }}>Please confirm your free order, as free orders are required to be collected within 48 hours. if not collect then it will be reallocated to other indiciduals or be discarded due to health standars.</Text>
                                    </View>
                                    <PrimaryModalButton icon={<FontAwesome5 name="check-circle" size={15} color="white" />} onpress={() => { }} title="Confirm Pick Up" />
                              </View>

                        </BottomSheetView>
                  </BottomSheet>
            </GestureHandlerRootView>
      );
}

export default History;