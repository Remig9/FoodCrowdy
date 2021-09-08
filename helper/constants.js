/* eslint-disable prettier/prettier */
import React from 'react';
import {Dimensions, PixelRatio} from 'react-native';
// export const FONT_FAMILY = 'Inter-Bold.ttf';

export const Colors = {
  appWhite: '#FFFFFF',
  appPrimary: '#017691',
  appTextGrey: '#6C6969', 
  appGreen: '#0B6D56',
  appYellow: '#E0B10A',
  appOrange: '#E87409',
  appUniqueorange:'rgba(232, 116, 9, 1)',
  appLightGreen: '#2CDABA',
  appBlue: '#0E2C5C',
  appUniqueblue:'rgba(14, 44, 92, 1)',
  appUniquebluetwo:'rgba(17, 86, 221, 1)',
  appUniquegreen:'#11C87B',
  appUniquegrey: '#6A6A6A',   
  appBlack:'#000000',
  appLightgrey:'rgba(218, 218, 218, 1)', 
  appUniqueboxGrey:'rgba(239, 239, 239, 1)',
  appExoticgreen:'rgba(74, 169, 175, 0.17)', 
  appExoticgrey:'rgba(61, 83, 84, 1)',
  appUniquegreyTwo:'rgba(108, 105, 105, 1)',
  appInnerborderGrey: 'rgba(218, 218, 218, 1)',
  appSearchgrey:'rgba(218, 218, 218, 1)',
  appExoticgreenTwo :'rgba(17, 200, 123, 1)',
  appRed:'rgba(234, 16, 16, 1)',
  appUniquered:'rgba(245, 68, 78, 1)',
  appBottomtabColor:'rgba(17, 63, 66, 1)',
  appBackground:'#FFFFFF',
  appBanneregusi:'rgba(196, 196, 196, 0.11)',
  apppLine:'rgba(118, 104, 104, 0.06)',
  appUniqueyellow:'rgba(224, 177, 10, 1)',
  appExoticyellow:'rgba(254, 236, 175, 1)',
  appExoticgreenthree:'rgba(44, 218, 186, 1)',
  appGreenlinear:'rgba(44, 218, 186, 1)',
  appDropdown:'rgba(211, 213, 218, 1)',
  appForfour:'rgba(88, 103, 100, 1)',
};

export const Width = (val: any) => {
  let res;
  val === undefined || null ? (res = null) : (res = (val / 100) * width);
  return res;
};

const {width, height} = Dimensions.get('window');

export const RH = val => {
  if (val == null || val == undefined) {
    return null;
  } else {
    let result = (val / 100) * height;
    return result;
  }
};

export const RW = val => {
  if (val == null || val == undefined) {
    return null;
  } else {
    let result = (val / 100) * width;
    return result;
  }
};

export const RF = val => {
  let factor = PixelRatio.get();
  factor > 2.2 ? (factor = 2) : null;
  let size = ((factor * width) / 1000) * val;
  return size + 4;
};

export const RR = val => {
  let result = val / 100;
  result = result * (height + width);
  return result * 0.13;
};
