import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import {Slider1, Slider2} from '../../../assets'
import { SliderBox } from 'react-native-image-slider-box'
import {colors, responsiveHeight,responsiveWidth} from '../../../utils'
import { processFontFamily } from 'expo-font'

export default class BannerSlider extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        images: [Slider1, Slider2]
      }
    }
    render() {
        return (
        <View style={styles.container}>
            <SliderBox 
            images={this.state.images} 
            autoplay 
            circleLoop 
            sliderBoxHeight={responsiveHeight(132)}
            ImageComponentStyle={styles.slider}
            dotStyle={styles.dotStyle}
            dotColor={colors.primary}
            imageLoadingColor={colors.primary}
            ImageLoader
            />
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        marginTop:5
    },
    slider:{
        borderRadius: 10,
        width: responsiveWidth(354)
    },
    dotStyle:{
        width:15,
        height:5,
        borderRadius:5
    }
})