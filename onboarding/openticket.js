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
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {Spacebar} from '../component/spacebar';
import {Banner} from '../component/banner';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Fruits} from '../component/fruits';
import {PepperContent} from '../component/pepperContent';
import {Egusi} from '../component/egusi';
import Bucketbuy from './bucketbuy';
import Boxegusi from '../component/boxegusi';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { colors } from 'react-native-elements';


export const Openticket = props => {


  return (
   
    <Container flex={1} backgroundColor={Colors.appBackground} paddingLeft={5}>
  <Container
  height={7}
   width={90}
   backgroundColor={Colors.appWhite} 
   horizontalAlignment={'space-between'} 
   verticalAlignment={'center'}
   direction={'row'}
  >
    <Container
  height={6}
   width={50}
   backgroundColor={Colors.appWhite} 
   horizontalAlignment={'center'} 
   verticalAlignment={'center'}
   direction={'row'}
  >
  <P>mail.avischarles@gmail.com</P>    
  </Container> 
  <Container
  height={6}
   width={30}
   backgroundColor={Colors.appWhite} 
   horizontalAlignment={'center'} 
   verticalAlignment={'center'}
   direction={'row'}
  >
     <H1 size={19} color={Colors.appBlue}>Open Ticket</H1>     
  </Container>     
  </Container>
  <Container
   height={11}
   width={90}
   backgroundColor={Colors.appWhite} 
   horizontalAlignment={'center'} 
   verticalAlignment={'center'}
   direction={'row'}
   marginTop={3}
   >
    <Container
   height={10}
   width={20}
   backgroundColor={Colors.appBlack} 
   horizontalAlignment={'center'} 
   verticalAlignment={'center'}
   marginLeft={-5}
   >
     <Container
   height={7}
   width={20}
   backgroundColor={Colors.appWhite} 
   horizontalAlignment={'center'} 
   verticalAlignment={'center'}
   
   
   >
    <Boxegusi/>   
   </Container>
    <Container
   height={3}
   width={20}
   backgroundColor={Colors.appWhite} 
   horizontalAlignment={'flex-end'} 
   verticalAlignment={'center'}
 
   >
      <H1 size={14} color={Colors.appBlue}>123455</H1>
   </Container>   
   </Container>
   <Container
  width={47} 
    height={9}
    backgroundColor={Colors.appWhite} 
    horizontalAlignment={'center'}
    verticalAlignment={'center'}
    marginLeft={3}
>
<Container
  width={21} 
    height={4}
    backgroundColor={Colors.appWhite} 
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    marginLeft={-25}
    marginTop={-2}
>
   <H1 size={13}>EGUSI SOUP</H1>
</Container>
<Container
  width={45} 
    height={4}
    backgroundColor={Colors.appWhite} 
    horizontalAlignment={'flex-start'}
    verticalAlignment={'center'}
    direction={'row'}
    marginTop={1}
    
>

                <H2 color={Colors.appTextGrey} size={11}>How much is this combo? I am 
                looking to buying for 2 persons</H2> 
</Container>
</Container>
<Container
width={8} 
    height={4}
    backgroundColor={Colors.appUniquebluetwo} 
    marginLeft={10}
    horizontalAlignment={'center'}
    verticalAlignment={'center'}
    borderRadius={7}
    marginTop={-4}
>
    <Entypo
              name="chat"
              color={Colors.appWhite}
              size={20}
            />
</Container>

   </Container> 
   <Container
   height={11}
   width={90}
   backgroundColor={Colors.appWhite} 
   horizontalAlignment={'center'} 
   verticalAlignment={'center'}
   direction={'row'}
   marginTop={3}
   >
    <Container
   height={10}
   width={20}
   backgroundColor={Colors.appBlack} 
   horizontalAlignment={'center'} 
   verticalAlignment={'center'}
   marginLeft={-5}
   >
     <Container
   height={7}
   width={20}
   backgroundColor={Colors.appWhite} 
   horizontalAlignment={'center'} 
   verticalAlignment={'center'}
   
   
   >
    <Boxegusi/>   
   </Container>
    <Container
   height={3}
   width={20}
   backgroundColor={Colors.appWhite} 
   horizontalAlignment={'flex-end'} 
   verticalAlignment={'center'}
 
   >
      <H1 size={14} color={Colors.appBlue}>123455</H1>
   </Container>   
   </Container>
   <Container
  width={47} 
    height={9}
    backgroundColor={Colors.appWhite} 
    horizontalAlignment={'center'}
    verticalAlignment={'center'}
    marginLeft={3}
>
<Container
  width={21} 
    height={4}
    backgroundColor={Colors.appWhite} 
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    marginLeft={-25}
    marginTop={-2}
>
   <H1 size={13}>EGUSI SOUP</H1>
</Container>
<Container
  width={45} 
    height={4}
    backgroundColor={Colors.appWhite} 
    horizontalAlignment={'flex-start'}
    verticalAlignment={'center'}
    direction={'row'}
    marginTop={1}
    
>

                <H2 color={Colors.appTextGrey} size={11}>How much is this combo? I am 
                looking to buying for 2 persons</H2> 
</Container>
</Container>
<Container
width={8} 
    height={4}
    backgroundColor={Colors.appUniqueboxGrey} 
    marginLeft={10}
    horizontalAlignment={'center'}
    verticalAlignment={'center'}
    borderRadius={7}
    marginTop={-4}
>
    <Entypo
              name="chat"
              color={Colors.appWhite}
              size={20}
            />
</Container>

   </Container> 
   <Container
   height={11}
   width={90}
   backgroundColor={Colors.appWhite} 
   horizontalAlignment={'center'} 
   verticalAlignment={'center'}
   direction={'row'}
   marginTop={3}
   >
    <Container
   height={10}
   width={20}
   backgroundColor={Colors.appBlack} 
   horizontalAlignment={'center'} 
   verticalAlignment={'center'}
   marginLeft={-5}
   >
     <Container
   height={7}
   width={20}
   backgroundColor={Colors.appWhite} 
   horizontalAlignment={'center'} 
   verticalAlignment={'center'}
   
   
   >
    <Boxegusi/>   
   </Container>
    <Container
   height={3}
   width={20}
   backgroundColor={Colors.appWhite} 
   horizontalAlignment={'flex-end'} 
   verticalAlignment={'center'}
 
   >
      <H1 size={14} color={Colors.appBlue}>123455</H1>
   </Container>   
   </Container>
   <Container
  width={47} 
    height={9}
    backgroundColor={Colors.appWhite} 
    horizontalAlignment={'center'}
    verticalAlignment={'center'}
    marginLeft={3}
>
<Container
  width={21} 
    height={4}
    backgroundColor={Colors.appWhite} 
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    marginLeft={-25}
    marginTop={-2}
>
   <H1 size={13}>EGUSI SOUP</H1>
</Container>
<Container
  width={45} 
    height={4}
    backgroundColor={Colors.appWhite} 
    horizontalAlignment={'flex-start'}
    verticalAlignment={'center'}
    direction={'row'}
    marginTop={1}
    
>

                <H2 color={Colors.appTextGrey} size={11}>How much is this combo? I am 
                looking to buying for 2 persons</H2> 
</Container>
</Container>
<Container
width={8} 
    height={4}
    backgroundColor={Colors.appUniqueboxGrey} 
    marginLeft={10}
    horizontalAlignment={'center'}
    verticalAlignment={'center'}
    borderRadius={7}
    marginTop={-4}
>
    <Entypo
              name="chat"
              color={Colors.appWhite}
              size={20}
            />
</Container>

   </Container> 
   <Container
   height={11}
   width={90}
   backgroundColor={Colors.appWhite} 
   horizontalAlignment={'center'} 
   verticalAlignment={'center'}
   direction={'row'}
   marginTop={3}
   >
    <Container
   height={10}
   width={20}
   backgroundColor={Colors.appBlack} 
   horizontalAlignment={'center'} 
   verticalAlignment={'center'}
   marginLeft={-5}
   >
     <Container
   height={7}
   width={20}
   backgroundColor={Colors.appWhite} 
   horizontalAlignment={'center'} 
   verticalAlignment={'center'}
   
   
   >
    <Boxegusi/>   
   </Container>
    <Container
   height={3}
   width={20}
   backgroundColor={Colors.appWhite} 
   horizontalAlignment={'flex-end'} 
   verticalAlignment={'center'}
 
   >
      <H1 size={14} color={Colors.appBlue}>123455</H1>
   </Container>   
   </Container>
   <Container
  width={47} 
    height={9}
    backgroundColor={Colors.appWhite} 
    horizontalAlignment={'center'}
    verticalAlignment={'center'}
    marginLeft={3}
>
<Container
  width={21} 
    height={4}
    backgroundColor={Colors.appWhite} 
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    marginLeft={-25}
    marginTop={-2}
>
   <H1 size={13}>EGUSI SOUP</H1>
</Container>
<Container
  width={45} 
    height={4}
    backgroundColor={Colors.appWhite} 
    horizontalAlignment={'flex-start'}
    verticalAlignment={'center'}
    direction={'row'}
    marginTop={1}
    
>

                <H2 color={Colors.appTextGrey} size={11}>How much is this combo? I am 
                looking to buying for 2 persons</H2> 
</Container>
</Container>
<Container
width={8} 
    height={4}
    backgroundColor={Colors.appUniqueboxGrey} 
    marginLeft={10}
    horizontalAlignment={'center'}
    verticalAlignment={'center'}
    borderRadius={7}
    marginTop={-4}
>
    <Entypo
              name="chat"
              color={Colors.appWhite}
              size={20}
            />
</Container>

   </Container> 
    </Container>
  
    
  
  );
};

export default Openticket;
