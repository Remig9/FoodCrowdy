import React, {useState, useEffect, useCallback} from 'react';

import {AppIcons} from '../helper/images';

import {ScrollView, StatusBar, TouchableOpacity} from 'react-native';
import {Colors} from '../helper/constants';
import {Container, ImageWrap, TouchWrap} from '../helper/index';
import Modal from 'react-native-modal';
import {Button, H1, H2, P, TextInputBox} from '../helper/element';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {Spacebar} from '../component/spacebar';
import {Banner} from '../component/banner';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Fruits} from '../component/fruits';
import {PepperContent} from '../component/pepperContent';
import {Egusi} from '../component/egusi';




export const Support = props => {


  return (
    
    <Container flex={1} backgroundColor={Colors.appBackground} paddingLeft={5}>
    <Container
    height={6}
    width={90}
    backgroundColor={Colors.appBackground}
    direction={'row'}
    verticalAlignment={'center'}
    horizontalAlignment={'space-evenly'} 
    marginTop={4}
    >
    <Container
    height={5}
    width={50}
    
    direction={'row'}
    verticalAlignment={'center'}
    horizontalAlignment={'center'} 
    >
    <P size={13} color={Colors.appTextGrey}>mail.avischarles@gmail.com</P>
    </Container>
    <Container
    height={5}
    width={20}
    
    direction={'row'}
    verticalAlignment={'center'}
    horizontalAlignment={'center'} 
    >
       <P size={13} color={Colors.appUniqueblue}>Open Ticket</P>
    </Container>        
    </Container>
    <Container
    height={6}
    width={90}
    backgroundColor={Colors.appBackground}
    direction={'row'}
    verticalAlignment={'center'}
    horizontalAlignment={'center'} 
    marginTop={30}
    >
    <TouchWrap>
     <Container
    height={5}
    width={10}
    backgroundColor={Colors.appUniquered}
    borderRadius={29}
    verticalAlignment={'center'}
    horizontalAlignment={'center'} 
    >
     <FontAwesome5
                  name="headset"
                 size={19}
                 color={Colors.appWhite}
                />   
    </Container> 
    </TouchWrap>   
    </Container>
    <Container
     height={3}
    width={90}
   
    direction={'row'}
    verticalAlignment={'center'}
    horizontalAlignment={'center'} 
    marginBottom={1}
    >
       <H1 size={13} color={Colors.appTextGrey}>No active Ticket</H1>
    
    </Container>
    <Container
    marginLeft={-2}
    paddingVertical={1}
    width={95}
   
    direction={'row'}
    verticalAlignment={'center'}
    horizontalAlignment={'center'} 
    marginBottom={0.2}
    >
       <P size={9} color={Colors.appTextGrey}>Would you like to reach for any inquiries or complain about an issue?
 </P>
    
    </Container>
    <Container
     height={3}
    width={90}
   
    direction={'row'}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    marginBottom={0.2}
    >
       <P size={10} color={Colors.appTextGrey}>complain about an issue? 
 </P>

    </Container>
   <TouchWrap>
    <Container
height={5}
    width={90}
    
    direction={'row'}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
   
>

  <H1 size={18} color={Colors.appOrange}>Talk to us.
 </H1>
</Container>
</TouchWrap>

    <Container
     height={9}
    width={55}
 
    direction={'row'}
    verticalAlignment={'center'}
    horizontalAlignment={'space-between'}
    marginTop={5}
    marginLeft={16}
     >
      <Container
    height={5}
    width={10}
   
    borderRadius={29}
    verticalAlignment={'center'}
    horizontalAlignment={'center'} 
    >
    <ImageWrap
            source={AppIcons.tina}
            height={5}
            width={10}
            fit={'contain'}
            borderRadius={29}
          />
    </Container> 
    <Container
    height={5}
    width={20}
  
    verticalAlignment={'center'}
    horizontalAlignment={'center'} 
    >
      <Container
    height={2.5}
    width={18}
 
    verticalAlignment={'center'}
    horizontalAlignment={'flex-start'}
    paddingLeft={2} 
    >
     <H1 size={14} color={Colors.appTextGrey}>Tina</H1>   
    </Container>
     <Container
    height={2.5}
    width={19}
  
    verticalAlignment={'center'}
    horizontalAlignment={'center'} 
    direction={'row'}
    paddingRight={4.3} 
    >
     <Container
    height={1}
    width={2}
    backgroundColor={Colors.appLightGreen}
    verticalAlignment={'center'}
    horizontalAlignment={'center'} 
    borderRadius={20}
    marginTop={0.7}
     
     >
    </Container>   
    <P size={14} color={Colors.appTextGrey}>Online</P> 
    </Container>         
    </Container>
    <Container
    height={5}
    width={20}
 
    direction={'row'}
    horizontalAlignment={'space-between'}
 
    >
    <TouchWrap>
   <Container
    height={3}
    width={8}
    
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
  
    >
   <AntDesign
                  name="phone"
                  color={ Colors.appGreen
                  }
                  size={18}
                  
                /> 
    </Container>
    </TouchWrap>
     <TouchWrap>
    <Container
    height={3}
    width={8}
   
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    >
   <MaterialCommunityIcons
                  name="message-text"
                  color={ Colors.appGreen
                  }
                  size={18}
                  
                /> 
    </Container>
    </TouchWrap>   
    </Container> 
          
    </Container>
    <Container
     height={9}
    width={55}
   
    direction={'row'}
    verticalAlignment={'center'}
    horizontalAlignment={'space-between'}
    marginTop={-2}
    marginLeft={16}
     >
      <Container
    height={5}
    width={10}

    borderRadius={29}
    verticalAlignment={'center'}
    horizontalAlignment={'center'} 
    >
     <ImageWrap
            source={AppIcons.tina}
            height={5}
            width={10}
            fit={'contain'}
            borderRadius={29}
          />
    </Container> 
    <Container
    height={5}
    width={20}

    verticalAlignment={'center'}
    horizontalAlignment={'center'} 
    >
      <Container
    height={2.5}
    width={18}
   
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    paddingLeft={1} 
    >
     <H1 size={14} color={Colors.appTextGrey}>Rachael</H1>   
    </Container>
     <Container
    height={2.5}
    width={19}
 
    verticalAlignment={'center'}
    horizontalAlignment={'center'} 
    direction={'row'}
    paddingRight={4} 
    >
     <Container
    height={1}
    width={2}
    backgroundColor={Colors.appLightGreen}
    verticalAlignment={'center'}
    horizontalAlignment={'center'} 
    borderRadius={20}
    marginTop={0.7}
     
     >
    </Container>   
    <P size={14} color={Colors.appTextGrey}>Online</P> 
    </Container>         
    </Container>
    <Container
    height={5}
    width={20}
   
    direction={'row'}
    horizontalAlignment={'space-between'}
 
    >
    <TouchWrap>
   <Container
    height={3}
    width={8}
  
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
  
    >
   <AntDesign
                  name="phone"
                  color={ Colors.appGreen
                  }
                  size={18}
                  
                /> 
    </Container> 
    </TouchWrap>
    <TouchWrap>
    <Container
    height={3}
    width={8}

    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    >
   <MaterialCommunityIcons
                  name="message-text"
                  color={ Colors.appGreen
                  }
                  size={18}
                  
                /> 
    </Container> 
    </TouchWrap>  
    </Container>       
    </Container>
    </Container>
   
    
  
  );
};

export default Support;
