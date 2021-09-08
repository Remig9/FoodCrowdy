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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { colors } from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';


export const Newticket = props => {
    let data = [{
        value: 'Banana',
      }, {
        value: 'Mango',
      }, {
        value: 'Pear',
      }];

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
   horizontalAlignment={'flex-start'} 
   verticalAlignment={'center'}
   direction={'row'}
  >
  <Container marginLeft={3} >
  <AntDesign
                  name="arrowleft"
                  color={ Colors.appTextGrey
                  }
                  size={20}
                  
                /> 
                </Container>
                <Container marginLeft={4}>
  <H1 color={Colors.appBlue} size={15}>New Ticket</H1> 
  </Container>   
  </Container> 
  <Container
  height={6}
   width={30}
   backgroundColor={Colors.appWhite} 
   horizontalAlignment={'center'} 
   verticalAlignment={'center'}
   direction={'row'}
  >
     <H1 size={15} color={Colors.appBlue}>12345t</H1>     
  </Container>     
  
   </Container>
   <Container marginTop={3} marginLeft={8}>
   <TextInputBox
   height={6}
   width={75}
   placeholder={'Enter Subject'}
   backgroundColor={Colors.appWhite} 
   horizontalAlignment={'center'} 
   verticalAlignment={'center'}
   borderColor={Colors.appDropdown}
   >
  </TextInputBox> 
   </Container>
   <Container marginLeft={5} marginTop={3}>
   <Container
width={80}
height={7}
backgroundColor={Colors.appWhite}
horizontalAlignment={'center'}
verticalAlignment={'center'}
direction={'row'}
>



<Dropdown
        label='Select Pos'
        data={data}
      containerStyle={{borderWidth:3, height:'88%',width:'93%',borderColor:'rgba(211, 213, 218, 1)',
      justifyContent:'space-around',borderRadius:8,paddingLeft:'4%',fontSize:11}}
      textColor={'black'}
      itemPadding={2}
      labelFontSize={15}
     
      dropdownOffset={	{ top: 6, left: 3 }}
      />
 
</Container>
   </Container>
   <Container
    height={3}
   width={75}
    marginTop={3}
   backgroundColor={Colors.appWhite} 
   horizontalAlignment={'flex-start'} 
   verticalAlignment={'center'}
   marginLeft={8}
   >
<H2 size={15} color={Colors.appTextGrey}>Support chat</H2>
   </Container>
   <Container
    height={10}
   width={90}
    marginTop={3}
   backgroundColor={Colors.appWhite} 
   horizontalAlignment={'center'} 
   verticalAlignment={'center'}
   direction={'row'}
 
   >
     <Container
    height={10}
   width={50}
   marginLeft={16}
   backgroundColor={Colors.appWhite} 
   horizontalAlignment={'center'} 
   verticalAlignment={'center'}

   >
   <P>the commission I am getting from my POS is quite poor. I want
    it to be redeployed to another merchant.</P>
   </Container>
   <Container
width={7} 
    height={3.5}
    backgroundColor={Colors.appBlack} 
    marginLeft={9}
    horizontalAlignment={'center'}
    verticalAlignment={'center'}
    borderRadius={7}
    marginTop={-2}
>
    <Entypo
              name="chat"
              color={Colors.appWhite}
              size={14}
            />
</Container>
   </Container>
   <Container
   height={10}
   width={90}
    marginTop={3}
   backgroundColor={Colors.appWhite} 
   horizontalAlignment={'space-evenly'} 
   verticalAlignment={'center'}
   direction={'row'}
 
   >
      <Container
    height={4}
    width={8}
    backgroundColor={Colors.appUniquered}
    borderRadius={29}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    marginLeft={-14}
    >
     <FontAwesome5
                  name="headset"
                 size={14}
                 color={Colors.appWhite}
                />   
    </Container> 
    <Container
    height={10}
   width={50}
  
   backgroundColor={Colors.appWhite} 
   horizontalAlignment={'center'} 
   verticalAlignment={'center'}
  marginLeft={-14}
   >
   <P>Hello Kemi, thanks for reaching out. I will look in to your complain and get back to you asap.</P>
   </Container>
   
   </Container>
   <Container
    height={5}
   width={90}
   backgroundColor={Colors.appWhite} 
   horizontalAlignment={'flex-end'} 
   verticalAlignment={'center'}
   direction={'row'}
   marginLeft={-3}
   >
  
    <Container
width={8} 
    height={4}
    backgroundColor={Colors.appWhite} 

    horizontalAlignment={'center'}
    verticalAlignment={'center'}
    borderRadius={7}  
>
   <P size={10}>OK</P>
</Container>  
 <Container
width={7} 
    height={3.5}
    backgroundColor={Colors.appBlack} 
  
    horizontalAlignment={'center'}
    verticalAlignment={'center'}
    borderRadius={7}
   
>
    <Entypo
              name="chat"
              color={Colors.appWhite}
              size={14}
            />
</Container>          
   </Container>
    </Container>
  
    
  
  );
};

export default Newticket;
