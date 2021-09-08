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
import Food from '../component/food';

export const Fastbuy = props => {
   const [toggleCheckBox, setToggleCheckBox] = useState(false)
   let data = [{
      value: 'Banana',
    }, {
      value: 'Mango',
    }, {
      value: 'Pear',
    }];
    
    const [selectedValue, setSelectedvalue] =useState(0)
    const [paymentModal, setPaymentmodal] =useState (false)
    const [active , setActive]=useState("fastBuy")
    
 
  return (
    <Container flex={1} backgroundColor={Colors.appWhitess}>

    <ScrollView>
    <Container
      height={6}
      width={100}
     
      verticalAlignment={'center'}
      horizontalAlignment={'center'}
      marginTop={5}
      direction={'row'}
    >
    <Button width={29} 
        height={3.5} 
        text={'Fast Buy'} color={active=='fastBuy'?Colors.appWhite:Colors.appTextGrey}
        verticalAlignment={'center'}
         horizontalAlignment={'center'} 
         backgroundColor={active=='fastBuy'?Colors.appLightGreen:Colors.appWhite}
         borderRadius={15}
         size={13}
         marginLeft={-3}
         fontweight={'bold'}
         onPress={()=> setActive('fastBuy')}
        />
      <Button width={29} 
        height={3.5} 
        text={'Bucket Buy'} color={active!='fastBuy'?Colors.appWhite:Colors.appTextGrey}
        verticalAlignment={'center'}
         horizontalAlignment={'center'} 
         backgroundColor={active!='fastBuy'?Colors.appLightGreen:Colors.appWhite}
         borderRadius={15}
         fontweight={'bold'}
         size={13}
         onPress={()=> setActive('bucketBuy')}
         />    
    
    </Container>
    <Container
    width={100} 
        height={6} 
         marginTop={4}
        verticalAlignment={'center'}
         horizontalAlignment={'space-between'} 
        
         direction={'row'}
    >
      <Container
width={20}
height={7}

horizontalAlignment={'center'}
verticalAlignment={'center'}
direction={'row'}
marginLeft={12}
>



<Dropdown
        label='Select category'
        data={data}
      containerStyle={{borderWidth:1.5, height:'55%',width:'170%',borderColor:'grey',
      justifyContent:'space-around',borderRadius:7,paddingLeft:'6%',paddingTop:'5%', fontweight:'bold'}}
      textColor={'black'}
      itemPadding={2}
      labelFontSize={1}
      itemPadding={6}
      dropdownOffset={	{ top: 6, left: 3 }}
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
                  size={20}
                  
                />          
     </Container>  
    
    </Container>

{active!='fastBuy'?(<Container><Container marginTop={-3}>
   <Egusi/>
   </Container>
<Container
 height={18}
    width={90}
   
    verticalAlignment={'center'}
    horizontalAlignment={'space-evenly'}
    direction={'row'}
    marginLeft={5}
>
    <Container
 height={17}
    width={20}
   
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
>
   <Container
 height={2.4}
    width={30}
 
    verticalAlignment={'center'}
    marginLeft={10}
   
>
<P  color={Colors.appUniquegrey} size={12}>Egusi</P>
</Container> 
 <Container
 height={2.4}
    width={25}

    verticalAlignment={'flex-start'}
    
   marginLeft={5}
>
<P  color={Colors.appUniquegrey}  size={12}>Ugu</P>
</Container> 
 <Container
 height={2.4}
    width={25}
 
    verticalAlignment={'flex-start'}
    
   marginLeft={5}
>
<P  color={Colors.appUniquegrey}  size={12}>Stock Fish </P>
</Container> 
 <Container
 height={2.4}
    width={23}
  
    verticalAlignment={'flex-start'}
   
   marginLeft={2}
>
<P  color={Colors.appUniquegrey}size={12}> Palm Oil</P>
</Container> 
 <Container
 height={2.4}
    width={23}

    verticalAlignment={'flex-start'}
   
   marginLeft={2}
>
<P  color={Colors.appUniquegrey}  size={12}> Beef</P>
</Container> 
 <Container
 height={2.4}
    width={27}
 
    verticalAlignment={'flex-start'}
  
   marginLeft={6}
>
<P  color={Colors.appUniquegrey}  size={12}> Smoke Fish</P>
</Container> 
 <Container
 height={2.4}
    width={28}
 
    verticalAlignment={'flex-start'}
  
   marginLeft={7}
>
<P  color={Colors.appUniquegrey}  size={12}> Locust Bean</P>
</Container> 
 
</Container>
  <Container
 height={15}
    width={29}
    backgroundColor={Colors.appUniqueyellow}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    borderRadius={60}
>
  <Container
 height={3}
    width={20}
    backgroundColor={Colors.appUniqueyellow}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    marginTop={3}
    direction={'row'}
>
   <MaterialCommunityIcons
                  name="currency-ngn"
                  color={ Colors.appWhite
                  }
                  size={17}
                  
                /> 
   <H1 color={Colors.appWhite} size={17}>500</H1>    
</Container>
 <Container
 height={2}
    width={13}
    backgroundColor={Colors.appUniqueyellow}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    direction={'row'}

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
 <Container
 height={5}
    width={10}
    backgroundColor={Colors.appUniqueyellow}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
   
>
     <AntDesign
                  name="shoppingcart"
                  color={ Colors.appWhite
                  }
                  size={30}
                  
                /> 
</Container>   
</Container>
  <Container
 height={17}
    width={20}
   
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
>
   <Container
 height={2.4}
    width={30}

    verticalAlignment={'center'}
    horizontalAlignment={'flex-end'}
  
   marginLeft={-10}
>
<P  color={Colors.appUniquegrey} size={12}>1 Peak tin</P>
</Container>
 <Container
 height={2.4}
    width={25}
   
    verticalAlignment={'flex-start'}
    horizontalAlignment={'flex-end'}
   
   marginLeft={-5}
>
<P  color={Colors.appUniquegrey}  size={12}>2 bunch</P>
</Container> 
<Container
 height={2.4}
    width={25}
   
    verticalAlignment={'flex-start'}
    horizontalAlignment={'flex-end'}
   
   marginLeft={-5}
>
<P  color={Colors.appUniquegrey}  size={12}> 1 bunch </P>
</Container> 
 <Container
 height={2.4}
    width={23}
 
    verticalAlignment={'flex-start'}
    horizontalAlignment={'flex-end'}
   
   marginLeft={-2}
>
<P  color={Colors.appUniquegrey}size={12}>100ml</P>
</Container> 
 <Container
 height={2.4}
    width={23}
   
    verticalAlignment={'flex-start'}
    horizontalAlignment={'flex-end'}
   
   marginLeft={-2}
>
<P  color={Colors.appUniquegrey}  size={12}>1kg</P>
</Container> 
 <Container
 height={2.4}
    width={27}

    verticalAlignment={'flex-start'}
    horizontalAlignment={'flex-end'}
   
   marginLeft={-6}
>
<P  color={Colors.appUniquegrey}  size={12}> 3pcs </P>
</Container> 
 <Container
 height={2.4}
    width={28}
    
    verticalAlignment={'flex-start'}
    horizontalAlignment={'flex-end'}
    marginLeft={-7}
>
<P  color={Colors.appUniquegrey}  size={12}> 2 table spoon</P>
</Container> 


</Container>
</Container>
  

    <Container
 height={7}
    width={90}
    backgroundColor={Colors.appWhite}
    verticalAlignment={'center'}
    horizontalAlignment={'space-evenly'} 
    marginLeft={'5'} 
    direction={'row'} 
    marginTop={3}
>
  
 <Button 
    height={4}
    width={24}
    backgroundColor={Colors.appUniqueyellow}
    verticalAlignment={'center'}
    horizontalAlignment={'center'} 
    marginRight={-5} 
    borderRadius={4} 
    text={'For two'}
    color={Colors.appWhite}
    size={12.5}
   onPress={()=>setPaymentmodal(true)} 
 />
 <Button 
    height={4}
    width={24}
    backgroundColor={Colors.appExoticgreen}
    verticalAlignment={'center'}
    horizontalAlignment={'center'} 
    marginRight={-5} 
    borderRadius={4}
    text={'For Four'}
    size={12.5} 
    color={Colors.appForfour}
  
 />
 <Button 
    height={4}
    width={24}
    backgroundColor={Colors.appExoticgreen}
    verticalAlignment={'center'}
    horizontalAlignment={'center'} 
    marginRight={-5} 
    borderRadius={4} 
    text={'For eight'} 
    size={12.5}
    color={Colors.appForfour}
 />
</Container> 
<Container
    height={6}
    width={90}
    backgroundColor={Colors.appExoticyellow}
    verticalAlignment={'center'}
    horizontalAlignment={'space-between'}
    direction={'row'} 
   marginLeft={5}
    borderRadius={9}

>
<TouchWrap>
 <Container
    height={5}
    width={35}
    backgroundColor={Colors.appExoticyellow}
    direction={'row'}
    verticalAlignment={'center'}
    horizontalAlignment={'space-evenly'} 
   
    borderColor={Colors.appInnerborderGrey}
   
    marginLeft={4}
    >
      <H1 color={Colors.appUniquegrey} size={12}>Close Details</H1>   
    <MaterialIcons
                  name="keyboard-arrow-up"
                  color={ Colors.appTextGrey
                  }
                  size={25}
                  
                /> 
                
    </Container>
    </TouchWrap>
   <Container
   height={5}
   width={30}
   backgroundColor={Colors.appExoticyellow}
   direction={'row'}
   verticalAlignment={'center'}
   horizontalAlignment={'space-between'}
   marginRight={5}

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
                  size={22}
                  
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
</Container>
 <Egusi/>
 <Container
    height={6}
    width={90}
    backgroundColor={Colors.appExoticyellow}
    verticalAlignment={'center'}
    horizontalAlignment={'space-between'}
    direction={'row'} 
   marginLeft={5}
    borderRadius={9}
    marginTop={1}
    marginBottom={8}

>
   <TouchWrap>
 <Container
    height={5}
    width={35}
    backgroundColor={Colors.appExoticyellow}
    direction={'row'}
    verticalAlignment={'center'}
    horizontalAlignment={'space-evenly'} 
   
    borderColor={Colors.appInnerborderGrey}

    marginLeft={4}
    >
      <H1 color={Colors.appUniquegrey} size={12}>View Details</H1>   
    <MaterialIcons
                  name="keyboard-arrow-down"
                  color={ Colors.appTextGrey
                  }
                  size={25}
                  
                /> 
                
    </Container>
    </TouchWrap>
   <Container
   height={5}
   width={30}
   backgroundColor={Colors.appExoticyellow}
   direction={'row'}
   verticalAlignment={'center'}
   horizontalAlignment={'space-between'}
   marginRight={5}

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
                  size={22}
                  
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
</Container></Container>):(<Container>
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
</Container>)}
  </ScrollView>
  <Modal isVisible={paymentModal}>
      
       <Container flex={1} >
       <Container
       height={80}
       width={90}
       backgroundColor={Colors.appWhite}
       borderRadius={8}
       >
     <TouchWrap  onPress={()=>setPaymentmodal(false)}> 
    <Container
      height={4}
      width={90}
      borderRadius={8}
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
    </TouchWrap> 
    <Container  marginTop={-3.3} marginLeft={-5.8}>
    <Egusi/>
    </Container>
   <Container
    height={60}
    width={90}
    backgroundColor={Colors.appWhite}
    
    horizontalAlignment={'center'}
    verticalAlignment={'center'}
    borderRadius={10}
   >
   <Container
   height={7}
   width={85}
   backgroundColor={Colors.appWhite}
   horizontalAlignment={'space-between'}
    verticalAlignment={'center'}
    direction={'row'}
    marginTop={-2}
   >
   <Container 
    width={8} 
    height={4}
    backgroundColor={Colors.appWhite}
    horizontalAlignment={'center'}
    verticalAlignment={'center'}
    marginTop={-1.2}
    >
    <CheckBox
    disabled={false}
    value={toggleCheckBox}
    onValueChange={(newValue) => setToggleCheckBox(newValue)}
  />
</Container>
<Container
  width={18} 
    height={7}
    backgroundColor={Colors.appWhite} 
    horizontalAlignment={'center'}
    verticalAlignment={'center'}
    marginLeft={-5}
>
<Container
  width={18} 
    height={3}
    backgroundColor={Colors.appWhite} 
    verticalAlignment={'center'}
    horizontalAlignment={'center'}

>
   <P color={Colors.appTextGrey} size={12}>Egusi</P>
</Container>
<Container
  width={14} 
    height={2.4}
    
    horizontalAlignment={'center'}
    verticalAlignment={'flex-end'}
    direction={'row'}
    marginTop={-0.2}
    paddingLeft={2}
>
    <Container marginLeft={-0.8}>          
   <H1 color={Colors.appExoticgreenthree} size={13}>{'\u20A6'}500</H1> 
   </Container>     
</Container>
</Container>
<Container
width={20}
height={7}
backgroundColor={Colors.appWhite}
horizontalAlignment={'center'}
verticalAlignment={'center'}
direction={'row'}
>



<Dropdown
        label='unit'
        data={data}
      containerStyle={{borderWidth:1.5, height:'60%',width:'90%',borderColor:'rgba(211, 213, 218, 1)',
      justifyContent:'space-around',borderRadius:7,paddingLeft:'15%',paddingTop:'9%'}}
      textColor={'black'}
      itemPadding={2}
      labelFontSize={5}
      dropdownMargins={{ min: 10, max: 9}}
      dropdownOffset={	{ top: 2, left: 3 }}
      itemPadding={7}
      dropdownPosition={-3}
      />
 
</Container>
<Container
width={25}
height={4.4}
backgroundColor={Colors.appWhite}
horizontalAlignment={'center'}
verticalAlignment={'center'}
direction={'row'}
borderRadius={7}
marginRight={1}
borderWidth={1.5}
borderColor={Colors.appDropdown}
> 
<TouchWrap>
<Container
width={8}
height={3.5}
backgroundColor={Colors.appWhite}
horizontalAlignment={'flex-start'}
verticalAlignment={'center'}

>
 <EvilIcons
                  name="minus"
                  color={ Colors.appBlack
                  }
                  size={25}
                  
                />   
</Container>
</TouchWrap>
<Container
width={7}
height={3.5}
backgroundColor={Colors.appWhite}
horizontalAlignment={'center'}
verticalAlignment={'center'}

>
 <P size={14}>1</P>  
</Container>
<TouchWrap>
<Container
width={8}
height={3.5}
backgroundColor={Colors.appWhite}
horizontalAlignment={'flex-end'}
verticalAlignment={'center'}
paddingRight={1}

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

   <Container
   height={7}
   width={85}
   backgroundColor={Colors.appWhite}
   horizontalAlignment={'space-between'}
    verticalAlignment={'center'}
    direction={'row'}
    marginTop={-1}
   >
   <Container 
    width={8} 
    height={4}
    backgroundColor={Colors.appWhite}
    marginTop={-1.2}
    >
    <CheckBox
    disabled={false}
    value={toggleCheckBox}
    onValueChange={(newValue) => setToggleCheckBox(newValue)}
  />
</Container>
<Container
  width={18} 
    height={7}
    backgroundColor={Colors.appWhite} 
    horizontalAlignment={'center'}
    verticalAlignment={'center'}
    marginLeft={-5}
>
<Container
  width={14} 
    height={3}
    backgroundColor={Colors.appWhite} 
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    paddingRight={3}
>
   <P color={Colors.appTextGrey} size={12}>Ugu</P>
</Container>
<Container
  width={14} 
  height={2.4}
    backgroundColor={Colors.appWhite} 
    horizontalAlignment={'center'}
    verticalAlignment={'flex-end'}
    direction={'row'}
    marginTop={-0.2}
    paddingLeft={1.6}
>
    <Container  marginLeft={-0.8}>            
   <H1 color={Colors.appExoticgreenthree} size={13}>{'\u20A6'}200</H1>
   </Container>    
</Container>
</Container>
<Container
width={20}
height={7}
backgroundColor={Colors.appWhite}
horizontalAlignment={'center'}
verticalAlignment={'center'}
direction={'row'}
>



<Dropdown
        label='unit'
        data={data}
      containerStyle={{borderWidth:1.5, height:'60%',width:'90%',borderColor:'rgba(211, 213, 218, 1)',
      justifyContent:'space-around',borderRadius:7,paddingLeft:'15%',paddingTop:'9%'}}
      textColor={'black'}
      itemPadding={2}
      labelFontSize={5}
      dropdownMargins={{ min: 10, max: 9}}
      dropdownOffset={	{ top: 2, left: 3 }}
      itemPadding={7}
      dropdownPosition={-3}
      />
 
</Container>
<Container
width={25}
height={4.4}
backgroundColor={Colors.appWhite}
horizontalAlignment={'center'}
verticalAlignment={'center'}
direction={'row'}
borderRadius={7}
marginRight={1}
borderWidth={1.5}
borderColor={Colors.appDropdown}
> 
<TouchWrap>
<Container
width={8}
height={3.5}
backgroundColor={Colors.appWhite}
horizontalAlignment={'flex-start'}
verticalAlignment={'center'}

>
 <EvilIcons
                  name="minus"
                  color={ Colors.appBlack
                  }
                  size={25}
                  
                />   
</Container>
</TouchWrap>
<Container
width={7}
height={3.5}
backgroundColor={Colors.appWhite}
horizontalAlignment={'center'}
verticalAlignment={'center'}

>
 <P size={14}>1</P>  
</Container>
<TouchWrap>
<Container
width={8}
height={3.5}
backgroundColor={Colors.appWhite}
horizontalAlignment={'flex-end'}
verticalAlignment={'center'}
paddingRight={1}

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
   <Container
   height={7}
   width={85}
   backgroundColor={Colors.appWhite}
   horizontalAlignment={'space-between'}
    verticalAlignment={'center'}
    direction={'row'}
    marginTop={-1}
   >
   <Container 
    width={8} 
    height={4}
    backgroundColor={Colors.appWhite}
    marginTop={-1.2}
    >
    <CheckBox
    disabled={false}
    value={toggleCheckBox}
    onValueChange={(newValue) => setToggleCheckBox(newValue)}
  />
</Container>
<Container
  width={18} 
    height={7}
    backgroundColor={Colors.appWhite} 
    horizontalAlignment={'center'}
    verticalAlignment={'center'}
    marginLeft={-5}
>
<Container
  width={20} 
    height={3}
    backgroundColor={Colors.appWhite} 
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
   marginLeft={6}
>
   <P color={Colors.appTextGrey} size={11}>Stock Fish</P>
</Container>
<Container
  width={14} 
  height={2.4}
    backgroundColor={Colors.appWhite} 
    horizontalAlignment={'center'}
    verticalAlignment={'flex-end'}
    direction={'row'}
    marginTop={-0.2}
    paddingLeft={2}
>
    <Container  marginLeft={-0.8}>             
   <H1 color={Colors.appExoticgreenthree} size={13}>{'\u20A6'}530</H1>  
   </Container>  
</Container>
</Container>
<Container
width={20}
height={7}
backgroundColor={Colors.appWhite}
horizontalAlignment={'center'}
verticalAlignment={'center'}
direction={'row'}
>



<Dropdown
        label='unit'
        data={data}
      containerStyle={{borderWidth:1.5, height:'60%',width:'90%',borderColor:'rgba(211, 213, 218, 1)',
      justifyContent:'space-around',borderRadius:7,paddingLeft:'15%',paddingTop:'9%'}}
      textColor={'black'}
      itemPadding={2}
      labelFontSize={5}
      dropdownMargins={{ min: 10, max: 9}}
      dropdownOffset={	{ top: 2, left: 3 }}
      itemPadding={7}
      dropdownPosition={-3}
      />
 
</Container>
<Container
width={25}
height={4.4}
backgroundColor={Colors.appWhite}
horizontalAlignment={'center'}
verticalAlignment={'center'}
direction={'row'}
borderRadius={7}
marginRight={1}
borderWidth={1.5}
borderColor={Colors.appDropdown}
> 
<TouchWrap>
<Container
width={8}
height={3.5}
backgroundColor={Colors.appWhite}
horizontalAlignment={'flex-start'}
verticalAlignment={'center'}

>
 <EvilIcons
                  name="minus"
                  color={ Colors.appBlack
                  }
                  size={25}
                  
                />   
</Container>
</TouchWrap>
<Container
width={7}
height={3.5}
backgroundColor={Colors.appWhite}
horizontalAlignment={'center'}
verticalAlignment={'center'}

>
 <P size={14}>1</P>  
</Container>
<TouchWrap>
<Container
width={8}
height={3.5}
backgroundColor={Colors.appWhite}
horizontalAlignment={'flex-end'}
verticalAlignment={'center'}
paddingRight={1}

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
   <Container
   height={7}
   width={85}
   backgroundColor={Colors.appWhite}
   horizontalAlignment={'space-between'}
    verticalAlignment={'center'}
    direction={'row'}
    marginTop={-1}
   >
   <Container 
    width={8} 
    height={4}
    backgroundColor={Colors.appWhite}
    marginTop={-1.2}
    >
    <CheckBox
    disabled={false}
    value={toggleCheckBox}
    onValueChange={(newValue) => setToggleCheckBox(newValue)}
  />
</Container>
<Container
  width={18} 
    height={7}
    backgroundColor={Colors.appWhite} 
    horizontalAlignment={'center'}
    verticalAlignment={'center'}
    marginLeft={-5}
>
<Container
  width={14} 
    height={3}
    backgroundColor={Colors.appWhite} 
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    marginLeft={3.5}
>
   <P color={Colors.appTextGrey} size={12}>Palm oil</P>
</Container>
<Container
  width={14} 
  height={2.4}
    backgroundColor={Colors.appWhite} 
    horizontalAlignment={'center'}
    verticalAlignment={'flex-end'}
    direction={'row'}
    marginTop={-0.2}
    paddingLeft={2.0}
>
    <Container  marginLeft={-0.8}>           
   <H1 color={Colors.appExoticgreenthree} size={13}>{'\u20A6'}100</H1> 
   </Container>    
</Container>
</Container>
<Container
width={20}
height={7}
backgroundColor={Colors.appWhite}
horizontalAlignment={'center'}
verticalAlignment={'center'}
direction={'row'}
>



<Dropdown
        label='unit'
        data={data}
      containerStyle={{borderWidth:1.5, height:'60%',width:'90%',borderColor:'rgba(211, 213, 218, 1)',
      justifyContent:'space-around',borderRadius:7,paddingLeft:'15%',paddingTop:'9%'}}
      textColor={'black'}
      itemPadding={2}
      labelFontSize={5}
      dropdownMargins={{ min: 10, max: 9}}
      dropdownOffset={	{ top: 2, left: 3 }}
      itemPadding={7}
      dropdownPosition={-3}
      />
 
</Container>
<Container
width={25}
height={4.4}
backgroundColor={Colors.appWhite}
horizontalAlignment={'center'}
verticalAlignment={'center'}
direction={'row'}
borderRadius={7}
marginRight={1}
borderWidth={1.5}
borderColor={Colors.appDropdown}
> 
<TouchWrap>
<Container
width={8}
height={3.5}
backgroundColor={Colors.appWhite}
horizontalAlignment={'flex-start'}
verticalAlignment={'center'}

>
 <EvilIcons
                  name="minus"
                  color={ Colors.appBlack
                  }
                  size={25}
                  
                />   
</Container>
</TouchWrap>
<Container
width={7}
height={3.5}
backgroundColor={Colors.appWhite}
horizontalAlignment={'center'}
verticalAlignment={'center'}

>
 <P size={14}>1</P>  
</Container>
<TouchWrap>
<Container
width={8}
height={3.5}
backgroundColor={Colors.appWhite}
horizontalAlignment={'flex-end'}
verticalAlignment={'center'}
paddingRight={1}

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
   <Container
   height={7}
   width={85}
   backgroundColor={Colors.appWhite}
   horizontalAlignment={'space-between'}
    verticalAlignment={'center'}
    direction={'row'}
    marginTop={-1}
   >
   <Container 
    width={8} 
    height={4}
    backgroundColor={Colors.appWhite}
    marginTop={-1.2}
    >
    <CheckBox
    disabled={false}
    value={toggleCheckBox}
    onValueChange={(newValue) => setToggleCheckBox(newValue)}
  />
</Container>
<Container
  width={18} 
    height={7}
    backgroundColor={Colors.appWhite} 
    horizontalAlignment={'center'}
    verticalAlignment={'center'}
    marginLeft={-5}
>
<Container
  width={14} 
    height={3}
    backgroundColor={Colors.appWhite} 
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    paddingRight={1}
>
   <P  color={Colors.appTextGrey} size={12}>Beef</P>
</Container>
<Container
  width={14} 
  height={2.4}
    backgroundColor={Colors.appWhite} 
    horizontalAlignment={'center'}
    verticalAlignment={'flex-end'}
    direction={'row'}
    marginTop={-0.2}
    paddingLeft={2}
>
    
    <Container  marginLeft={-0.8}>           
   <H1 color={Colors.appExoticgreenthree} size={13}>{'\u20A6'}600</H1>  
   </Container>    
</Container>
</Container>
<Container
width={20}
height={7}
backgroundColor={Colors.appWhite}
horizontalAlignment={'center'}
verticalAlignment={'center'}
direction={'row'}
>



<Dropdown
        label='unit'
        data={data}
      containerStyle={{borderWidth:1.5, height:'60%',width:'90%',borderColor:'rgba(211, 213, 218, 1)',
      justifyContent:'space-around',borderRadius:7,paddingLeft:'15%',paddingTop:'9%'}}
      textColor={'black'}
      itemPadding={2}
      labelFontSize={5}
      dropdownMargins={{ min: 10, max: 9}}
      dropdownOffset={	{ top: 2, left: 3 }}
      itemPadding={7}
      dropdownPosition={-3}
      />
 
</Container>
<Container
width={25}
height={4.4}
backgroundColor={Colors.appWhite}
horizontalAlignment={'center'}
verticalAlignment={'center'}
direction={'row'}
borderRadius={7}
marginRight={1}
borderWidth={1.5}
borderColor={Colors.appDropdown}
> 
<TouchWrap>
<Container
width={8}
height={3.5}
backgroundColor={Colors.appWhite}
horizontalAlignment={'flex-start'}
verticalAlignment={'center'}

>
 <EvilIcons
                  name="minus"
                  color={ Colors.appBlack
                  }
                  size={25}
                  
                />   
</Container>
</TouchWrap>
<Container
width={7}
height={3.5}
backgroundColor={Colors.appWhite}
horizontalAlignment={'center'}
verticalAlignment={'center'}

>
 <P size={14}>1</P>  
</Container>
<TouchWrap>
<Container
width={8}
height={3.5}
backgroundColor={Colors.appWhite}
horizontalAlignment={'flex-end'}
verticalAlignment={'center'}
paddingRight={1}

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
   <Container
   height={7}
   width={85}
   backgroundColor={Colors.appWhite}
   horizontalAlignment={'space-between'}
    verticalAlignment={'center'}
    direction={'row'}
    marginTop={-1}
   >
   <Container 
    width={8} 
    height={4}
    backgroundColor={Colors.appWhite}
    marginTop={-1.2}
    >
    <CheckBox
    disabled={false}
    value={toggleCheckBox}
    onValueChange={(newValue) => setToggleCheckBox(newValue)}
  />
</Container>
<Container
  width={18} 
    height={7}
    backgroundColor={Colors.appWhite} 
    horizontalAlignment={'center'}
    verticalAlignment={'center'}
    marginLeft={-5}
>
<Container
  width={20} 
    height={3}
    backgroundColor={Colors.appWhite} 
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    marginLeft={7}
>
   <P color={Colors.appTextGrey} size={11}>Smoke Fish</P>
</Container>
<Container
  width={14} 
  height={2.4}
    backgroundColor={Colors.appWhite} 
    horizontalAlignment={'center'}
    verticalAlignment={'flex-end'}
    direction={'row'}
    marginTop={-0.2}
    paddingLeft={1}
>
<Container  marginLeft={-0.8}>           
   <H1 color={Colors.appExoticgreenthree} size={13}>{'\u20A6'}430</H1>  
   </Container>   
</Container>
</Container>
<Container
width={20}
height={7}
backgroundColor={Colors.appWhite}
horizontalAlignment={'center'}
verticalAlignment={'center'}
direction={'row'}
>



<Dropdown
        label='unit'
        data={data}
      containerStyle={{borderWidth:1.5, height:'60%',width:'90%',borderColor:'rgba(211, 213, 218, 1)',
      justifyContent:'space-around',borderRadius:7,paddingLeft:'15%',paddingTop:'9%'}}
      textColor={'black'}
      itemPadding={2}
      labelFontSize={5}
      dropdownMargins={{ min: 10, max: 9}}
      dropdownOffset={	{ top: 2, left: 3 }}
      itemPadding={7}
      dropdownPosition={-3}
      />
 
</Container>
<Container
width={25}
height={4.4}
backgroundColor={Colors.appWhite}
horizontalAlignment={'center'}
verticalAlignment={'center'}
direction={'row'}
borderRadius={7}
marginRight={1}
borderWidth={1.5}
borderColor={Colors.appDropdown}
> 
<TouchWrap>
<Container
width={8}
height={3.5}
backgroundColor={Colors.appWhite}
horizontalAlignment={'flex-start'}
verticalAlignment={'center'}

>
 <EvilIcons
                  name="minus"
                  color={ Colors.appBlack
                  }
                  size={25}
                  
                />   
</Container>
</TouchWrap>
<Container
width={7}
height={3.5}
backgroundColor={Colors.appWhite}
horizontalAlignment={'center'}
verticalAlignment={'center'}

>
 <P size={14}>1</P>  
</Container>
<TouchWrap>
<Container
width={8}
height={3.5}
backgroundColor={Colors.appWhite}
horizontalAlignment={'flex-end'}
verticalAlignment={'center'}
paddingRight={1}

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
   <Container
   height={7}
   width={85}
   backgroundColor={Colors.appWhite}
   horizontalAlignment={'space-between'}
    verticalAlignment={'center'}
    direction={'row'}
    marginTop={-1}
   >
   <Container 
    width={8} 
    height={4}
    backgroundColor={Colors.appWhite}
    marginTop={-1.2}
    >
    <CheckBox
    disabled={false}
    value={toggleCheckBox}
    onValueChange={(newValue) => setToggleCheckBox(newValue)}
  />
</Container>
<Container
  width={18} 
    height={7}
    backgroundColor={Colors.appWhite} 
    horizontalAlignment={'center'}
    verticalAlignment={'center'}
    marginLeft={-5}
>
<Container
  width={20} 
    height={3}
    backgroundColor={Colors.appWhite} 
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    marginLeft={8}
>
   <P color={Colors.appTextGrey} size={11}>Locust Bean</P>
</Container>
<Container
  width={14} 
  height={2.4}
    backgroundColor={Colors.appWhite} 
    horizontalAlignment={'center'}
    verticalAlignment={'flex-end'}
    direction={'row'}
    marginTop={-0.2}
    paddingLeft={1}
>
    
   <Container marginLeft={-0.8}>             
   <H1 color={Colors.appExoticgreenthree} size={13}>{'\u20A6'}700</H1>
   </Container>     
</Container>
</Container>
<Container
width={20}
height={7}
backgroundColor={Colors.appWhite}
horizontalAlignment={'center'}
verticalAlignment={'center'}
direction={'row'}
>



<Dropdown
        label='unit'
        data={data}
      containerStyle={{borderWidth:1.5, height:'60%',width:'90%',borderColor:'rgba(211, 213, 218, 1)',
      justifyContent:'space-around',borderRadius:7,paddingLeft:'15%',paddingTop:'9%'}}
      textColor={'black'}
      itemPadding={2}
      labelFontSize={5}
      dropdownMargins={{ min: 10, max: 9}}
      dropdownOffset={	{ top: 2, left: 3 }}
      itemPadding={7}
      dropdownPosition={-3}
      />
 
</Container>
<Container
width={25}
height={4.4}
backgroundColor={Colors.appWhite}
horizontalAlignment={'center'}
verticalAlignment={'center'}
direction={'row'}
borderRadius={7}
marginRight={1}
borderWidth={1.5}
borderColor={Colors.appDropdown}
> 
<TouchWrap>
<Container
width={8}
height={3.5}
backgroundColor={Colors.appWhite}
horizontalAlignment={'flex-start'}
verticalAlignment={'center'}

>
 <EvilIcons
                  name="minus"
                  color={ Colors.appBlack
                  }
                  size={25}
                  
                />   
</Container>
</TouchWrap>
<Container
width={7}
height={3.5}
backgroundColor={Colors.appWhite}
horizontalAlignment={'center'}
verticalAlignment={'center'}

>
 <P size={14}>1</P>  
</Container>
<TouchWrap>
<Container
width={8}
height={3.5}
backgroundColor={Colors.appWhite}
horizontalAlignment={'flex-end'}
verticalAlignment={'center'}
paddingRight={1}

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


   <Container
    height={5}
    width={90}
    backgroundColor={Colors.appBanneregusi}
    direction={'row'}
    marginTop={2}
    horizontalAlignment={'space-between'}
    verticalAlignment={'center'}
   >
  <Container
    height={4}
    width={20}
   
    horizontalAlignment={'center'}
    verticalAlignment={'center'}
    >
   
    <P size={16}>Total</P>    
    </Container>
    <Container
    height={4}
    width={20}
    
     direction={'row'}
     horizontalAlignment={'center'}
    verticalAlignment={'center'}
    marginRight={7}
   >
   <MaterialCommunityIcons
                  name="currency-ngn"
                  color={ Colors.appExoticgreenthree
                  }
                  size={22}
                  
                /> 
   <H1 color={Colors.appExoticgreenthree} size={24}>700</H1>      
   </Container>
   </Container>
   <Container
   height={6}
    width={90}
    backgroundColor={Colors.appBackground}
     direction={'row'}
     horizontalAlignment={'space-between'}
    verticalAlignment={'center'}
    marginTop={3}
  >
    <Container
   height={5}
    width={20}
    backgroundColor={Colors.appBackground}
     horizontalAlignment={'center'}
    verticalAlignment={'center'}
    marginLeft={7}
   

 
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
  <Container marginRight={5}>
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
  
  
   
    </Container>
    </Container>
       
      </Modal>
    </Container>
    
  
  );
};

export default Fastbuy;
