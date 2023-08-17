import { Dimensions } from "react-native";
import { widthMobileUI,heightMobileUI } from "../constant";

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

export const responsiveWidth = (width) => {
    return windowWidth*width/widthMobileUI;
}

export const responsiveHeight = (height) => {
    return windowHeight*height/heightMobileUI;
}

export const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}