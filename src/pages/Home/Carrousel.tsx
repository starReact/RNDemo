import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import SnapCarousel, { AdditionalParallaxProps, Pagination, ParallaxImage } from 'react-native-snap-carousel'
import { hp, viewportWidth, wp } from '../../utils'

const data = [
    "https://img0.baidu.com/it/u=452613109,1206704870&fm=253&fmt=auto&app=138&f=PNG?w=499&h=293",
    "https://img2.baidu.com/it/u=1156442884,460835921&fm=253&fmt=auto&app=138&f=JPEG?w=751&h=500",
    "https://img1.baidu.com/it/u=3495905376,3473488948&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=375",
    "https://img2.baidu.com/it/u=424633239,2506098071&fm=253&fmt=auto&app=138&f=JPEG?w=492&h=353",
    "https://img2.baidu.com/it/u=3036360591,933141846&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500",
    "https://img2.baidu.com/it/u=3665081185,322159230&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500"
]

const renderItem = ({ item }: { item: string }, parallaxProps?: AdditionalParallaxProps) => {
    return (
        <ParallaxImage
            source={{ uri: item }}
            style={styles.image}
            {...parallaxProps}
            parallaxFactor={0.8}
            spinnerColor="rgba(0, 0, 0, 0.25)"
            containerStyle={styles.imageContainer} />
    )
}

const siderwidth = wp(90);
const siderheight = hp(26);
const itemWidth = siderwidth + wp(2) * 2;
const sliderWidth = viewportWidth;

export default function Carrousel() {
    const [index, setIndex] = useState(0);
    return (
        <View>
            <SnapCarousel
                renderItem={renderItem}
                hasParallaxImages
                data={data}
                itemWidth={itemWidth}
                loop
                onSnapToItem={(index) => setIndex(index)}
                autoplay
                sliderWidth={sliderWidth} />
            <View style={styles.paginationWrapper}>
                <Pagination
                    containerStyle={styles.paginationContainer}
                    dotsLength={data.length}
                    activeDotIndex={index}
                    dotStyle={{
                        width: 6,
                        height: 6,
                        borderRadius: 5,
                        marginHorizontal: 2,
                        backgroundColor: '#f86442'
                    }}
                    inactiveDotStyle={{
                        backgroundColor: "rgba(255, 255, 255, 0.4)"
                    }}
                    inactiveDotScale={0.6}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        width: itemWidth,
        height: siderheight,
        borderRadius: 8
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover'
    },
    paginationWrapper: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    paginationContainer: {
        position: 'absolute',
        // height: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        top: -30,
        paddingHorizontal: 4,
        paddingVertical: 3,
        borderRadius: 4
    }
})