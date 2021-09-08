import React, {useState, useEffect, useCallback} from 'react';

import {AppIcons} from '../helper/images';

import {ScrollView, StatusBar} from 'react-native';
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
import {Fruits} from '../component/fruits';
import {PepperContent} from '../component/pepperContent';
import { Dropdown } from 'react-native-material-dropdown';

export const Market = props => {
  let data = [{
    value: 'car',
  }, {
    value: 'go',
  }, {
    value: 'ear',
  }];
 
  return (
    <Container flex={1} backgroundColor={Colors.appwhite}>
   
    <Container
    height={10}
    width={100}
    horizontalAlignment={'center'}
    horizontalAlignment={'center'}
    >
    <Container
    height={10}
    width={100}
    marginTop={3}

    verticalAlignment={'center'}
    horizontalAlignment={'space-between'}
    direction={'row'}
    >
    <TouchWrap>
    <Container
    height={8}
    width={10}
    verticalAlignment={'center'}
    horizontalAlignment={'flex-end'}
    
  
    >
     <Ionicons
                  name="person-outline"
                  color={ Colors.appLightGreen
                  }
                  size={22}
                  
                />   
    </Container>
    </TouchWrap>
    <Container
    height={8}
    width={28}
   
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    
    >
    
    
     <H1 color={Colors.appUniquegrey} size={15}>Hello Kamoli,</H1>   
    </Container>
    <Container
width={20}
height={7}

horizontalAlignment={'center'}
verticalAlignment={'center'}
direction={'row'}
>



<Dropdown
        label='PHC'
        data={data}
      containerStyle={{borderWidth:1.5, height:'55%',width:'95%',borderColor:'grey',
      justifyContent:'space-around',borderRadius:4,paddingLeft:'9%',paddingTop:'9%', fontweight:'bold'}}
      textColor={'black'}
    
      labelFontSize={5}
      dropdownMargins={{ min: 10, max: 9}}
      dropdownOffset={	{ top: 2, left: 3 }}
      itemPadding={7}
      dropdownPosition={-3}
      />
 
</Container>
<TouchWrap>
    <Container
    height={8}
    width={8}

    verticalAlignment={'center'}
    horizontalAlignment={'center'} 
    >
      <MaterialCommunityIcons
                  name="wallet-outline"
                  color={ Colors.appLightGreen
                  }
                  size={22}
                  
                /> 
    </Container>
    </TouchWrap>
    <TouchWrap>
    <Container
    height={8}
    width={8}
    marginRight={3.5}
    verticalAlignment={'center'}
    horizontalAlignment={'center'} 
    >
      <MaterialIcons
                  name="notifications-on"
                  color={ Colors.appLightGreen
                  }
                  size={22}
                  
                />  
    </Container>
    </TouchWrap>
    </Container>
    </Container>
    <ScrollView>
    <Container>
    <Banner/>
    </Container>
    
    <Container>
    <Spacebar/>
    </Container>
    <Container>
    <ScrollView>
    <Fruits/>
    </ScrollView>
    </Container>
    <Container
    height={6}
    width={100}
    
    verticalAlignment={'center'}
    horizontalAlignment={'space-between'}
    direction={'row'}
    >
     <Container
    height={5}
    width={55}
    
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    marginLeft={2}
     >
      <H1 color={Colors.appUniquegrey} size={20}>Best selling Products</H1>   
     </Container>
     <Container
    height={4}
    width={10}
   
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    marginRight={6}
     >
     <EvilIcons
                  name="search"
                  color={ Colors.appBlack
                  }
                  size={30}
                  
                />   
                
                  
               
     </Container>  
    </Container>
   <Container
    height={33}
    width={100}
   
    verticalAlignment={'flex-start'}
    horizontalAlignment={'flex-start'}
    direction={'row'}
   >
  <PepperContent/>
  <PepperContent/>
   </Container>
   <Container
    height={34}
    width={100}
  
    verticalAlignment={'flex-start'}
    horizontalAlignment={'flex-start'}
    direction={'row'}
   >
  <PepperContent/>
  <PepperContent/>
   </Container>
   </ScrollView>
    </Container>

  
  );
};

export default Market;
