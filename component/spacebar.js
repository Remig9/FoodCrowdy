import React, {useState, useEffect} from 'react';
import {Container, ImageWrap, TouchWrap} from '../helper';

import {Colors} from '../helper/constants';
import {H1} from '../helper/element';
import Entypo from 'react-native-vector-icons/Entypo';
import {Fonts} from '../helper/fontSize';
import {AppIcons} from '../helper/images';
export const Spacebar = props => {
  return (
    <Container
    height={2}
    width={100}
    backgroundColor={Colors.appWhite}
    direction={'row'}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    >
     <Container
      height={0.3}
    width={5}
    backgroundColor={Colors.appLightgrey}
    marginRight={1}
     ></Container>
     <Container
      height={0.3}
    width={5}
    backgroundColor={Colors.appLightgrey}
    marginRight={1}
     ></Container>
     <Container
      height={0.3}
    width={5}
    backgroundColor={Colors.appLightGreen}
    marginRight={1}
     ></Container> 
     <Container
      height={0.3}
    width={5}
    backgroundColor={Colors.appLightgrey}
    
     ></Container>           
    </Container>
      
   
  );
};
export default Spacebar;
