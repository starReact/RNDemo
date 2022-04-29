import React from 'react'
import { StyleSheet } from 'react-native'
import SnapCarousel, { AdditionalParallaxProps } from 'react-native-snap-carousel'
import { Image } from 'react-native'
import { hp, viewportWidth, wp } from '../../utils'

const data = [
    "https://img0.baidu.com/it/u=452613109,1206704870&fm=253&fmt=auto&app=138&f=PNG?w=499&h=293",
    "https://img2.baidu.com/it/u=1156442884,460835921&fm=253&fmt=auto&app=138&f=JPEG?w=751&h=500",
    "https://img1.baidu.com/it/u=3495905376,3473488948&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=375",
    "https://img2.baidu.com/it/u=424633239,2506098071&fm=253&fmt=auto&app=138&f=JPEG?w=492&h=353",
    "https://img2.baidu.com/it/u=3036360591,933141846&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500",
    "https://img2.baidu.com/it/u=3665081185,322159230&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500"
]

const renderItem = ({item}: {item: string}, parallaxProps?: AdditionalParallaxProps) => {
    return (
        <Image source={{uri: item}} style={styles.image} />
    )
}

const siderwidth = wp(90);
const siderheight = hp(26);  
const itemWidth = siderwidth + wp(2) * 2;
const sliderWidth = viewportWidth;

export default function Carrousel() {

  return (
    <SnapCarousel
        renderItem={renderItem}
        data={data}
        itemWidth={itemWidth}
        sliderWidth={sliderWidth} />
  )
}

const styles = StyleSheet.create({
    image: {
        width: itemWidth,
        height: siderheight
    }
})