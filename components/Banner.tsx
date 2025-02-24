
import * as React from "react";
import { Dimensions, ImageSourcePropType, Platform, Text, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";
import CarosalView from "./CarosalView";
import { defaultDataWith6Colors } from "@/constants/DummyData";
 
function Banner() {
	const progress = useSharedValue<number>(0);
 
	return (
		<View
			id="carousel-component"
		>
			<Carousel
				autoPlayInterval={2000}
				data={defaultDataWith6Colors}
				height={258}
				loop={true}
				pagingEnabled={true}
				snapEnabled={true}
				width={Dimensions.get("window").width}
				style={{
					width: Dimensions.get("window").width,
				}}
				mode="parallax"
				modeConfig={{
					parallaxScrollingScale: 0.9,
					parallaxScrollingOffset: 50,
				}}
				onProgressChange={progress}
				renderItem={({ item }) => {
                    return (
                        <CarosalView item={item}/>
                    );
                }}
			/>
            
		</View>
	);
}
 
export default Banner;
 