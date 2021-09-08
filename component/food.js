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

import { Dropdown } from 'react-native-material-dropdown';
import NumericInput from 'react-native-numeric-input'


import CheckBox from '@react-native-community/checkbox';
import { colors } from 'react-native-elements';
export const Food = props => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    let data = [{
       value: 'Banana',
     }, {
       value: 'Mango',
     }, {
       value: 'Pear',
     }];
     
     const [selectedValue, setSelectedvalue] =useState(0)

  return (
    <Container
   height={9}
   width={85}
   backgroundColor={Colors.appWhite}
   horizontalAlignment={'space-between'}
    verticalAlignment={'center'}
    direction={'row'}
    marginTop={3}
   >
   <Container 
    width={8} 
    height={4}
    backgroundColor={Colors.appWhite}
    >
    <CheckBox
    disabled={false}
    value={toggleCheckBox}
    onValueChange={(newValue) => setToggleCheckBox(newValue)}
  />
</Container>
<Container
  width={15} 
    height={8}
    backgroundColor={Colors.appWhite} 
    horizontalAlignment={'center'}
    verticalAlignment={'center'}
    marginLeft={-5}
>
<Container
  width={14} 
    height={4}
    backgroundColor={Colors.appWhite} 
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
>
   <H2 size={12}>Egusi</H2>
</Container>
<Container
  width={14} 
    height={4}
    backgroundColor={Colors.appWhite} 
    horizontalAlignment={'center'}
    verticalAlignment={'center'}
    direction={'row'}
>
    <MaterialCommunityIcons
                  name="currency-ngn"
                  color={ Colors.appExoticgreenthree
                  }
                  size={14}
                  
                /> 
   <H1 color={Colors.appExoticgreenthree} size={14}>500</H1>    
</Container>
</Container>
<Container
width={20}
height={8}
backgroundColor={Colors.appWhite}
horizontalAlignment={'center'}
verticalAlignment={'center'}
direction={'row'}
>



<Dropdown
        label='select'
        data={data}
      containerStyle={{borderWidth:1, height:'60%',width:'90%',borderColor:'grey',
      justifyContent:'space-around',borderRadius:3}}
      textColor={'black'}
      itemPadding={2}
      labelFontSize={15}
     
      dropdownOffset={	{ top: 6, left: 3 }}
      />
 
</Container>
<Container
width={30}
height={5}
backgroundColor={Colors.appWhite}
horizontalAlignment={'center'}
verticalAlignment={'center'}
direction={'row'}
borderRadius={5}
marginRight={1}
borderWidth={1}
borderColor={Colors.appTextGrey}
> 
<TouchWrap>
<Container
width={9}
height={4}
backgroundColor={Colors.appWhite}
horizontalAlignment={'center'}
verticalAlignment={'center'}
>
 <EvilIcons
                  name="minus"
                  color={ Colors.appTextGrey
                  }
                  size={25}
                  
                />   
</Container>
</TouchWrap>
<Container
width={9}
height={4}
backgroundColor={Colors.appWhite}
horizontalAlignment={'center'}
verticalAlignment={'center'}
>
 <P size={20}>1</P>  
</Container>
<TouchWrap>
<Container
width={9}
height={4}
backgroundColor={Colors.appWhite}
horizontalAlignment={'center'}
verticalAlignment={'center'}
>
   <AntDesign
                  name="pluscircleo"
                  color={ Colors.appTextGrey
                  }
                  size={18}
                  
                />   
</Container>
</TouchWrap>
</Container>
   </Container>
   
  );
};
export default Food;
