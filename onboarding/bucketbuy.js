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

export const Bucketbuy = props => {
const [active , setActive]=useState("fastBuy")

  return (
    <Container flex={1} backgroundColor={Colors.appWhitess}>
    <ScrollView>
    <Container
      height={6}
      width={100}
      backgroundColor={Colors.appWhite}
      verticalAlignment={'center'}
      horizontalAlignment={'center'}
      marginTop={5}
      direction={'row'}
    >
    <Button width={29} 
        height={3.5} 
        text={'Fast Buy'} color={Colors.appTextGrey}
        verticalAlignment={'center'}
         horizontalAlignment={'center'} 
         backgroundColor={active=='fastBuy'?Colors.appLightGreen:Colors.appWhite}
         borderRadius={15}
         size={13}
         marginLeft={-3}
         fontweight={'bold'}
         />
      <Button width={29} 
        height={3.5} 
        text={'Bucket Buy'} color={Colors.appWhite}
        verticalAlignment={'center'}
         horizontalAlignment={'center'} 
         backgroundColor={Colors.appLightGreen}
         borderRadius={15}
         fontweight={'bold'}
         size={13}
         />    
    
    </Container>
    <Container
    width={100} 
        height={6} 
         marginTop={4}
        verticalAlignment={'center'}
         horizontalAlignment={'space-between'} 
         backgroundColor={Colors.appWhite}
         direction={'row'}
    >
       <Container
    height={5}
    width={35}
    backgroundColor={Colors.appWhite}
    direction={'row'}
    verticalAlignment={'center'}
    horizontalAlignment={'space-evenly'} 
    borderWidth={3}
    borderColor={Colors.appInnerborderGrey}
    borderRadius={9}
    marginLeft={4}
    >
      <H1 color={Colors.appUniquegrey} size={7}> Select Categoty</H1>   
    <MaterialIcons
                  name="keyboard-arrow-down"
                  color={ Colors.appTextGrey
                  }
                  size={25}
                  
                /> 
                
    </Container>
    <Container
    height={4}
    width={10}
    borderColor={Colors.appInnerborderGrey}
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

   <Egusi/>
  

<Container
    height={10}
    width={90}
    backgroundColor={Colors.appExoticyellow}
    verticalAlignment={'center'}
    horizontalAlignment={'space-around'}
      direction={'row'}
   marginLeft={5}
    borderRadius={9}
    

>
<TouchWrap>
<Container
 height={8}
    width={45}
    backgroundColor={Colors.appExoticyellow}
    verticalAlignment={'center'}
    horizontalAlignment={'space-between'}
    direction={'row'}
    marginLeft={3} 
>
   <P Color={Colors.appTextGrey} size={10} >Egusi, Ugu, Stock Fish, Palm Oil, Beef, Smoke Fish, Locust Bean</P>  

  
</Container>
</TouchWrap>
<Container
 height={8}
    width={30}
    backgroundColor={Colors.appExoticyellow}
    verticalAlignment={'center'}
    horizontalAlignment={'space-between'}
   
    marginRight={2.5} 
>
   <Container
 height={4}
    width={30}
    backgroundColor={Colors.appExoticyellow}
    verticalAlignment={'center'}
    horizontalAlignment={'space-evenly'}
    direction={'row'}
   >
<TouchWrap>
<Container
 height={3}
 width={8}
 backgroundColor={Colors.appExoticyellow}
 verticalAlignment={'center'}
 horizontalAlignment={'center'}

 >
<EvilIcons
               name="heart"
               color={ Colors.appRed
               }
               size={20}
               
             /> 
 </Container> 
 </TouchWrap>
 <TouchWrap>
 <Container
 height={3}
 width={8}
 backgroundColor={Colors.appExoticyellow}
 verticalAlignment={'center'}
 horizontalAlignment={'center'}
 marginRight={3}
 >
<AntDesign
               name="phone"
               color={ Colors.appGreen
               }
               size={20}
               
             /> 
 </Container>
 </TouchWrap>
</Container>
<TouchWrap>
<Container
 height={4}
    width={30}
    backgroundColor={Colors.appExoticyellow}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
   >
   <P Color={Colors.appGreen} size={15} >Buy Now</P>   
   </Container>
   </TouchWrap>
</Container>

</Container>
<Egusi/>
 
<Container
    height={10}
    width={90}
    backgroundColor={Colors.appExoticyellow}
    verticalAlignment={'center'}
    horizontalAlignment={'space-around'}
      direction={'row'}
   marginLeft={5}
    borderRadius={9}
    

>
<TouchWrap>
<Container
 height={8}
    width={45}
    backgroundColor={Colors.appExoticyellow}
    verticalAlignment={'center'}
    horizontalAlignment={'space-between'}
    direction={'row'}
    marginLeft={3} 
>
   <P Color={Colors.appTextGrey} size={10} >Egusi, Ugu, Stock Fish, Palm Oil, Beef, Smoke Fish, Locust Bean</P>  

  
</Container>
</TouchWrap>
<Container
 height={8}
    width={30}
    backgroundColor={Colors.appExoticyellow}
    verticalAlignment={'center'}
    horizontalAlignment={'space-between'}
   
    marginRight={2.5} 
>
   <Container
 height={4}
    width={30}
    backgroundColor={Colors.appExoticyellow}
    verticalAlignment={'center'}
    horizontalAlignment={'space-evenly'}
    direction={'row'}
   >
<TouchWrap>
<Container
 height={3}
 width={8}
 backgroundColor={Colors.appExoticyellow}
 verticalAlignment={'center'}
 horizontalAlignment={'center'}

 >
<EvilIcons
               name="heart"
               color={ Colors.appRed
               }
               size={20}
               
             /> 
 </Container> 
 </TouchWrap>
 <TouchWrap>
 <Container
 height={3}
 width={8}
 backgroundColor={Colors.appExoticyellow}
 verticalAlignment={'center'}
 horizontalAlignment={'center'}
 marginRight={3}
 >
<AntDesign
               name="phone"
               color={ Colors.appGreen
               }
               size={20}
               
             /> 
 </Container>
 </TouchWrap>
</Container>
<TouchWrap>
<Container
 height={4}
    width={30}
    backgroundColor={Colors.appExoticyellow}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
   >
   <P Color={Colors.appGreen} size={15} >Buy Now</P>   
   </Container>
   </TouchWrap>
</Container>

</Container>
  </ScrollView>
    </Container>
    
  
  );
};

export default Bucketbuy;
