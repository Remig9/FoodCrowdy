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
import {Spacebar} from '../component/spacebar';
import {Banner} from '../component/banner';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Fruits} from '../component/fruits';
import {PepperContent} from '../component/pepperContent';
import {Egusi} from '../component/egusi';

export const Payment = props => {


  return (
    <Container flex={1} backgroundColor={Colors.appWhitess} paddingLeft={5} >
    <Container
      height={4}
      width={90}
      
      verticalAlignment={'center'}
      horizontalAlignment={'flex-end'}
      backgroundColor={Colors.appWhite}
    >
       
     <MaterialIcons
                  name="cancel"
                  color={ Colors.appBlack
                  }
                  size={30}
                  
                />      
    </Container>
    <Egusi/>
   <Container
    height={50}
    width={90}
    backgroundColor={Colors.appRed}
    
    horizontalAlignment={'center'}
    verticalAlignment={'center'}
    borderRadius={10}
   >
   <Container
    height={7}
    width={90}
    backgroundColor={Colors.appBackground}
    direction={'row'}
    marginTop={29}
    horizontalAlignment={'space-between'}
    verticalAlignment={'center'}
   >
  <Container
    height={6}
    width={20}
    backgroundColor={Colors.appBackground}
    horizontalAlignment={'center'}
    verticalAlignment={'center'}
    >
   
    <P size={16}>Total</P>    
    </Container>
    <Container
    height={6}
    width={20}
    backgroundColor={Colors.appBackground}
     direction={'row'}
     horizontalAlignment={'center'}
    verticalAlignment={'center'}
   >
   <MaterialCommunityIcons
                  name="currency-ngn"
                  color={ Colors.appExoticgreenthree
                  }
                  size={18}
                  
                /> 
   <H1 color={Colors.appExoticgreenthree} size={18}>700</H1>      
   </Container>
   </Container>
   <Container
   height={6}
    width={90}
    backgroundColor={Colors.appBackground}
     direction={'row'}
     horizontalAlignment={'space-between'}
    verticalAlignment={'center'}
  >
    <Container
   height={5}
    width={20}
    backgroundColor={Colors.appBackground}
     horizontalAlignment={'center'}
    verticalAlignment={'center'}
 
  >
   <P size={13}>Add to Cart </P>   
  </Container>
  <Container
   height={5}
    width={10}
    backgroundColor={Colors.appBackground}

    verticalAlignment={'center'}
    marginLeft={-10}
  >
     <AntDesign
                  name="shoppingcart"
                  color={ Colors.appLightGreen
                  }
                  size={20}
                  
                /> 
  </Container>
  <Button
  height={5}
width={33}
backgroundColor={Colors.appYellow} 
text={'Proceed to Pay'}
size={15} 
borderRadius={5}  
  />
  
  
  
  </Container>
   </Container>
  
  
   
    </Container>
    
  
  );
};

export default Payment;
