import React, {useState, useEffect} from 'react';
import {Container, ImageWrap, TouchWrap} from '../helper';

import {Colors} from '../helper/constants';
import {H1} from '../helper/element';
import Entypo from 'react-native-vector-icons/Entypo';
import {Fonts} from '../helper/fontSize';
import {AppIcons} from '../helper/images';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';


export const PepperContent = props => {
  return (
    <Container
    height={32}
    width={44}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    marginLeft={4}
    marginTop={0.5}
    borderWidth={1}
    borderColor={Colors.appInnerborderGrey}
    borderRadius={10}
    >
     <Container
    height={15}
    width={43}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
     >
    <ImageWrap
            source={AppIcons.peper}
            height={15}
            width={40}
            fit={'contain'}
          />     
     </Container> 
      <Container
    height={15}
    width={43}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
     >
    <Container
    height={6}
    width={40}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'space-between'}
    direction={'row'}
    
    >
    <Container
    height={3}
    width={15}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
   
    >
       <H1 color={Colors.appUniquegreyTwo} size={11}>Ata Rodo,</H1>    
    </Container> 
     <Container
    height={3}
    width={6}
    backgroundColor={Colors.appGreen}
    borderRadius={25}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    marginRight={1}
    >
      <H1 color={Colors.appWhite} size={11}>KG</H1>
    </Container> 
    </Container>
      <Container
    height={4}
    width={40}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'space-between'}
    direction={'row'}
    >
     <Container
    height={3}
    width={16}
    backgroundColor={Colors.appLightGreen}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    marginTop={-3}
    direction={'row'}
 
    >
    <MaterialCommunityIcons
                  name="currency-ngn"
                  color={ Colors.appWhite
                  }
                  size={13}
                  
                /> 
   <H1 color={Colors.appWhite} size={13}>500</H1>  
    </Container> 
    <Container
    height={3}
    width={11}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    direction={'row'}
    marginTop={-3}
    >
    <MaterialCommunityIcons
                  name="currency-ngn"
                  color={ Colors.appRed
                  }
                  size={13}
                  
                /> 
   <H1 color={Colors.appRed} size={11} textDecorationLine={'line-through'} 
   textDecorationStyle={'solid'}>500</H1>  
    </Container>
    </Container>
      <Container
    height={4}
    width={40}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'space-between'}
    direction={'row'}
    >
    <TouchWrap>
    <Container
    height={3}
    width={8}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
  
    >
   <EvilIcons
                  name="heart"
                  color={ Colors.appLightGreen
                  }
                  size={22}
                  
                /> 
    </Container> 
    </TouchWrap>
    <TouchWrap>
    <Container
    height={3}
    width={8}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    >
   <AntDesign
                  name="phone"
                  color={ Colors.appLightGreen
                  }
                  size={20}
                  
                /> 
    </Container>
    </TouchWrap>
    <TouchWrap>
    <Container
    height={3}
    width={8}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    >
   <AntDesign
                  name="shoppingcart"
                  color={ Colors.appLightGreen
                  }
                  size={20}
                  
                /> 
    </Container> 
    </TouchWrap>
    </Container>
           
     </Container>     
    </Container>
      
   
  );
};
export default PepperContent;
