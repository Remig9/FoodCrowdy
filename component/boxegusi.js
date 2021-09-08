import React, {useState, useEffect} from 'react';
import {Container, ImageWrap, TouchWrap} from '../helper';

import {Colors} from '../helper/constants';
import {Button, H1, H2, P, TextInputBox} from '../helper/element';
import Entypo from 'react-native-vector-icons/Entypo';
import {Fonts} from '../helper/fontSize';
import {AppIcons} from '../helper/images';
export const Boxegusi = props => {
  return (
    <Container
    height={19}
    width={15}

 
    verticalAlignment={'center'}
    horizontalAlignment={'space-around'}
    direction={'row'}

    >
    <Container
     height={16}
    width={14}

  
    verticalAlignment={'center'}
    horizontalAlignment={'center'} 
    >

    </Container>
     <ImageWrap
            source={AppIcons. egusi}
            height={15}
            width={13}
            fit={'contain'}
          />
    </Container>
      
   
  );
};
export default Boxegusi;
