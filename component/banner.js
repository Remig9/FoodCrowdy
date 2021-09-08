import React, {useState, useEffect} from 'react';
import {Container, ImageWrap, TouchWrap} from '../helper';

import {Colors} from '../helper/constants';
import {H1} from '../helper/element';
import Entypo from 'react-native-vector-icons/Entypo';
import {Fonts} from '../helper/fontSize';
import {AppIcons} from '../helper/images';
export const Banner = props => {
  return (
    <Container
    height={20}
    width={100}
    backgroundColor={Colors.appWhite}
    marginTop={3}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    >
     <ImageWrap
            source={AppIcons.banner1}
            height={90}
            width={90}
            fit={'contain'}
          />
    </Container>
      
   
  );
};
export default Banner;
