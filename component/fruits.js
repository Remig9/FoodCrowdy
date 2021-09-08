import React, {useState, useEffect} from 'react';
import {Container, ImageWrap, TouchWrap} from '../helper';

import {Colors} from '../helper/constants';
import {H1} from '../helper/element';
import Entypo from 'react-native-vector-icons/Entypo';
import {Fonts} from '../helper/fontSize';
import {AppIcons} from '../helper/images';
import { ScrollView } from 'react-native-gesture-handler';
export const Fruits = props => {
  return (
    <ScrollView>
    <Container 
    height={8}
    width={100}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'space-evenly'}
    direction={'row'}
    >
    <Container 
    height={4}
    width={17}
    backgroundColor={Colors.appExoticgreen}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    >
    
    <H1 color={Colors.appExoticgrey} textAlign={'center'} size={12}>
      Grains
    </H1>     
    </Container> 
    <Container 
    height={4}
    width={17}
    backgroundColor={Colors.appExoticgreen}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    >
     <H1 color={Colors.appExoticgrey} textAlign={'center'} size={12}>
     Tubers
    </H1>        
    </Container> 
    <Container 
    height={4}
    width={20}
    backgroundColor={Colors.appExoticgreen}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    >
    <H1 color={Colors.appExoticgrey} textAlign={'center'} size={12}>
      Sea Foods
    </H1>        
    </Container>
    <Container 
    height={4}
    width={10}
    backgroundColor={Colors.appExoticgreen}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    >
    <H1 color={Colors.appExoticgrey} textAlign={'center'} size={12}>
      Oil
    </H1>         
    </Container> 
    <Container 
    height={4}
    width={20}
    backgroundColor={Colors.appExoticgreen}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    >
    <H1 color={Colors.appExoticgrey} textAlign={'center'} size={12}>
    Can Foods
    </H1>         
    </Container>                 
    </Container>
    </ScrollView>
  );
};
export default Fruits;
