import React, {useState, useEffect} from 'react';
import {Container, ImageWrap, TouchWrap} from '../helper';

import {Colors} from '../helper/constants';
import {Button, H1, H2, P, TextInputBox} from '../helper/element';
import Entypo from 'react-native-vector-icons/Entypo';
import {Fonts} from '../helper/fontSize';
import {AppIcons} from '../helper/images';
export const Egusi = props => {
  return (
    <Container
    height={17}
    width={90}
    backgroundColor={Colors.appBanneregusi}
    marginTop={3}
    verticalAlignment={'center'}
    horizontalAlignment={'space-around'}
    direction={'row'}
    marginLeft={5}
    >
    <Container
     height={10}
    width={30}

  
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    marginLeft={5}
    
    
    >
   <Container
    height={5}
    width={29}
    
    verticalAlignment={'flex-end'}
    horizontalAlignment={'center'}
    >
     <H1 color={Colors.appTextGrey}  size={19}  >EGUSI SOUP</H1>   
    </Container>
    <Container
    height={5}
    width={25}
    marginLeft={-10}
    verticalAlignment={'flex-start'}
    horizontalAlignment={'center'}
    >
     <P color={Colors.appTextGrey} size={12}  >Bucket list</P>       
    </Container>

    </Container>
    <Container  marginLeft={17}>
     <ImageWrap
            source={AppIcons. egusi}
            height={33}
            width={33}
            fit={'contain'}
          />
          </Container>
    </Container>
      
   
  );
};
export default Egusi;
