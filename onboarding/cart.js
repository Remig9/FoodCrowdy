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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {Spacebar} from '../component/spacebar';
import {Banner} from '../component/banner';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Fruits} from '../component/fruits';
import {PepperContent} from '../component/pepperContent';
import {Egusi} from '../component/egusi';
import Bucketbuy from './bucketbuy';
import CheckBox from '@react-native-community/checkbox';
import Boxegusi from '../component/boxegusi';


export const Cart = props => {
  
  let data = [{
    value: 'Banana',
  }, {
    value: 'Mango',
  }, {
    value: 'Pear',
  }];
  
  const [selectedValue, setSelectedvalue] =useState(0)
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  return (
    
    <Container flex={1} backgroundColor={Colors.appWhite} paddingLeft={5}>
   <Container
    height={6}
      width={90}
      backgroundColor={Colors.appWhite}
      verticalAlignment={'center'}
      horizontalAlignment={'space-between'}
      direction={'row'}
      marginTop={5}
      
   >
    <Container
    height={5}
      width={20}
      backgroundColor={Colors.appWhite}
      verticalAlignment={'center'}
      horizontalAlignment={'center'} 
      marginLeft={-3}
   >
    <H1 size={15}>My Cart</H1>   
   </Container>  
   <Container
    height={5}
      width={30}
      backgroundColor={Colors.appRed}
      verticalAlignment={'center'}
      horizontalAlignment={'center'}
      direction={'row'}
 
   >
   <Container
    height={5}
      width={20}
      backgroundColor={Colors.appWhite}
      verticalAlignment={'center'}
      horizontalAlignment={'center'}
     
   >
    <H2 size={14} color={Colors.appTextGrey}>Cart items</H2>   
   </Container>
    <Container
    height={5}
      width={10}
      backgroundColor={Colors.appWhite}
      verticalAlignment={'center'}
      horizontalAlignment={'center'}
   
   >
   <Button
   height={2.8}
   width={8}
   backgroundColor={Colors.appRed}
   marginTop={4}
   text={'10'}
   />
   </Container>
   </Container>
    </Container>
    <Container
    height={5}
    width={90}
    backgroundColor={Colors.appGreenlinear}
    direction={'row'}
    marginTop={2}
    horizontalAlignment={'space-between'}
    verticalAlignment={'center'}
    borderRadius={10}
   >
  <Container
    height={4}
    width={18}
    backgroundColor={Colors.appGreenlinear}
    horizontalAlignment={'center'}
    verticalAlignment={'center'}
    marginLeft={3}
    >
   
    <P size={16} color={Colors.appWhite}>Total</P>    
    </Container>
    <Container
    height={5}
    width={18}
    backgroundColor={Colors.appGreenlinear}
     direction={'row'}
     horizontalAlignment={'center'}
    verticalAlignment={'center'}
    marginRight={3}
   >
   <MaterialCommunityIcons
                  name="currency-ngn"
                  color={ Colors.appWhite
                  }
                  size={18}
                  
                /> 
   <H1 color={Colors.appWhite} size={18}>700</H1>      
   </Container>
   </Container>
   <Container
     height={4}
    width={29}
    backgroundColor={Colors.appWhite} 
    horizontalAlignment={'flex-start'}
    verticalAlignment={'center'}
    marginBottom={3}
   >
   <H2 size={14} color={Colors.appTextGrey}>Egusi Fast Buy</H2>
   </Container>
   <Container
   height={56}
   width={95}
   
   horizontalAlignment={'center'} 
   verticalAlignment={'center'}
   >
   <Container
   height={7}
   width={100}
   marginTop={-8}
   horizontalAlignment={'space-evenly'} 
   verticalAlignment={'center'}
   direction={'row'}

   marginLeft={-6}

   
   >
    <Container 
    width={8} 
    height={4}
  
    marginLeft={3}
    >
    <CheckBox
    disabled={false}
    value={toggleCheckBox}
    onValueChange={(newValue) => setToggleCheckBox(newValue)}
  />
</Container>
<Container>
<Container marginLeft={-3}>
<Boxegusi/>
</Container>
</Container>
<Container
  width={28} 
    height={8}
    backgroundColor={Colors.appWhite} 
    horizontalAlignment={'center'}
    verticalAlignment={'center'}
    marginLeft={4}
>
<Container
  width={27} 
    height={4}
    backgroundColor={Colors.appWhite} 
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    
>
   <H1 size={15}>EGUSI SOUP</H1>
</Container>
<Container
  width={27} 
    height={4}
    backgroundColor={Colors.appWhite} 
    horizontalAlignment={'flex-start'}
    verticalAlignment={'center'}
    direction={'row'}
   
>
<Container
 width={14} 
    height={4}
    backgroundColor={Colors.appWhite} 
    horizontalAlignment={'center'}
    
    direction={'row'}> 
                
   <H1 color={Colors.appExoticgreenthree} size={13}>{'\u20A6'}500</H1> 
   </Container>
   <Container  width={13} 
    height={4}
    backgroundColor={Colors.appWhite}
    horizontalAlignment={'center'} 
  
    direction={'row'}  >
   
                <H1 color={Colors.appExoticgreenthree} size={13}>x2</H1> 
                </Container>  
</Container>
</Container>
<Container 
 width={40}
height={6} 
direction={'row'}

verticalAlignment={'flex-end'}
>
<Container
width={25}
height={4.4}

horizontalAlignment={'center'}
verticalAlignment={'center'}
direction={'row'}
borderRadius={7}
marginRight={1}
borderWidth={1.5}
borderColor={Colors.appDropdown}
marginLeft={8}
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

horizontalAlignment={'center'}
verticalAlignment={'center'}

>
 <P size={14}>2</P>  
</Container>
<TouchWrap>
<Container
width={8}
height={3.5}

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
<TouchWrap>
<Container
width={7}
height={4}

horizontalAlignment={'center'}
verticalAlignment={'center'}
marginLeft={-0.3}
>
 <FontAwesome
                  name="times"
                  color={ Colors.appRed
                  }
                  size={13}
                  
                />  
</Container>
</TouchWrap>
</Container>
   </Container> 
   <Container
   height={7}
   width={100}
   
   horizontalAlignment={'space-evenly'} 
   verticalAlignment={'center'}
   direction={'row'}

   marginLeft={-6}

   
   >
    <Container 
    width={8} 
    height={4}
  
    marginLeft={3}
    >
    <CheckBox
    disabled={false}
    value={toggleCheckBox}
    onValueChange={(newValue) => setToggleCheckBox(newValue)}
  />
</Container>
<Container>
<Container marginLeft={-3}>
<Boxegusi/>
</Container>
</Container>
<Container
  width={28} 
    height={8}
    backgroundColor={Colors.appWhite} 
    horizontalAlignment={'center'}
    verticalAlignment={'center'}
    marginLeft={4}
>
<Container
  width={27} 
    height={4}
    backgroundColor={Colors.appWhite} 
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    
>
   <H1 size={15}>EGUSI SOUP</H1>
</Container>
<Container
  width={27} 
    height={4}
    backgroundColor={Colors.appWhite} 
    horizontalAlignment={'flex-start'}
    verticalAlignment={'center'}
    direction={'row'}
   
>
<Container
 width={14} 
    height={4}
    backgroundColor={Colors.appWhite} 
    horizontalAlignment={'center'}
    
    direction={'row'}> 
                
   <H1 color={Colors.appExoticgreenthree} size={13}>{'\u20A6'}500</H1> 
   </Container>
   <Container  width={13} 
    height={4}
    backgroundColor={Colors.appWhite}
    horizontalAlignment={'center'} 
  
    direction={'row'}  >
   
                <H1 color={Colors.appExoticgreenthree} size={13}>x2</H1> 
                </Container>  
</Container>
</Container>
<Container 
 width={40}
height={6} 
direction={'row'}

verticalAlignment={'flex-end'}
>
<Container
width={25}
height={4.4}

horizontalAlignment={'center'}
verticalAlignment={'center'}
direction={'row'}
borderRadius={7}
marginRight={1}
borderWidth={1.5}
borderColor={Colors.appDropdown}
marginLeft={8}
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

horizontalAlignment={'center'}
verticalAlignment={'center'}

>
 <P size={14}>2</P>  
</Container>
<TouchWrap>
<Container
width={8}
height={3.5}

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
<TouchWrap>
<Container
width={7}
height={4}

horizontalAlignment={'center'}
verticalAlignment={'center'}
marginLeft={-0.3}
>
 <FontAwesome
                  name="times"
                  color={ Colors.appRed
                  }
                  size={13}
                  
                />  
</Container>
</TouchWrap>
</Container>
   </Container> 
   <Container
   height={7}
   width={100}
   
   horizontalAlignment={'space-evenly'} 
   verticalAlignment={'center'}
   direction={'row'}

   marginLeft={-6}

   
   >
    <Container 
    width={8} 
    height={4}
  
    marginLeft={3}
    >
    <CheckBox
    disabled={false}
    value={toggleCheckBox}
    onValueChange={(newValue) => setToggleCheckBox(newValue)}
  />
</Container>
<Container>
<Container marginLeft={-3}>
<Boxegusi/>
</Container>
</Container>
<Container
  width={28} 
    height={8}
    backgroundColor={Colors.appWhite} 
    horizontalAlignment={'center'}
    verticalAlignment={'center'}
    marginLeft={4}
>
<Container
  width={27} 
    height={4}
    backgroundColor={Colors.appWhite} 
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    
>
   <H1 size={15}>EGUSI SOUP</H1>
</Container>
<Container
  width={27} 
    height={4}
    backgroundColor={Colors.appWhite} 
    horizontalAlignment={'flex-start'}
    verticalAlignment={'center'}
    direction={'row'}
   
>
<Container
 width={14} 
    height={4}
    backgroundColor={Colors.appWhite} 
    horizontalAlignment={'center'}
    
    direction={'row'}> 
                
   <H1 color={Colors.appExoticgreenthree} size={13}>{'\u20A6'}500</H1> 
   </Container>
   <Container  width={13} 
    height={4}
    backgroundColor={Colors.appWhite}
    horizontalAlignment={'center'} 
  
    direction={'row'}  >
   
                <H1 color={Colors.appExoticgreenthree} size={13}>x2</H1> 
                </Container>  
</Container>
</Container>
<Container 
 width={40}
height={6} 
direction={'row'}

verticalAlignment={'flex-end'}
>
<Container
width={25}
height={4.4}

horizontalAlignment={'center'}
verticalAlignment={'center'}
direction={'row'}
borderRadius={7}
marginRight={1}
borderWidth={1.5}
borderColor={Colors.appDropdown}
marginLeft={8}
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

horizontalAlignment={'center'}
verticalAlignment={'center'}

>
 <P size={14}>2</P>  
</Container>
<TouchWrap>
<Container
width={8}
height={3.5}

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
<TouchWrap>
<Container
width={7}
height={4}

horizontalAlignment={'center'}
verticalAlignment={'center'}
marginLeft={-0.3}
>
 <FontAwesome
                  name="times"
                  color={ Colors.appRed
                  }
                  size={13}
                  
                />  
</Container>
</TouchWrap>
</Container>
   </Container> 
   <Container
   height={7}
   width={100}
   
   horizontalAlignment={'space-evenly'} 
   verticalAlignment={'center'}
   direction={'row'}

   marginLeft={-6}

   
   >
    <Container 
    width={8} 
    height={4}
  
    marginLeft={3}
    >
    <CheckBox
    disabled={false}
    value={toggleCheckBox}
    onValueChange={(newValue) => setToggleCheckBox(newValue)}
  />
</Container>
<Container>
<Container marginLeft={-3}>
<Boxegusi/>
</Container>
</Container>
<Container
  width={28} 
    height={8}
    backgroundColor={Colors.appWhite} 
    horizontalAlignment={'center'}
    verticalAlignment={'center'}
    marginLeft={4}
>
<Container
  width={27} 
    height={4}
    backgroundColor={Colors.appWhite} 
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    
>
   <H1 size={15}>EGUSI SOUP</H1>
</Container>
<Container
  width={27} 
    height={4}
    backgroundColor={Colors.appWhite} 
    horizontalAlignment={'flex-start'}
    verticalAlignment={'center'}
    direction={'row'}
   
>
<Container
 width={14} 
    height={4}
    backgroundColor={Colors.appWhite} 
    horizontalAlignment={'center'}
    
    direction={'row'}> 
                
   <H1 color={Colors.appExoticgreenthree} size={13}>{'\u20A6'}500</H1> 
   </Container>
   <Container  width={13} 
    height={4}
    backgroundColor={Colors.appWhite}
    horizontalAlignment={'center'} 
  
    direction={'row'}  >
   
                <H1 color={Colors.appExoticgreenthree} size={13}>x2</H1> 
                </Container>  
</Container>
</Container>
<Container 
 width={40}
height={6} 
direction={'row'}

verticalAlignment={'flex-end'}
>
<Container
width={25}
height={4.4}

horizontalAlignment={'center'}
verticalAlignment={'center'}
direction={'row'}
borderRadius={7}
marginRight={1}
borderWidth={1.5}
borderColor={Colors.appDropdown}
marginLeft={8}
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

horizontalAlignment={'center'}
verticalAlignment={'center'}

>
 <P size={14}>2</P>  
</Container>
<TouchWrap>
<Container
width={8}
height={3.5}

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
<TouchWrap>
<Container
width={7}
height={4}

horizontalAlignment={'center'}
verticalAlignment={'center'}
marginLeft={-0.3}
>
 <FontAwesome
                  name="times"
                  color={ Colors.appRed
                  }
                  size={13}
                  
                />  
</Container>
</TouchWrap>
</Container>
   </Container> 
   <Container
   height={7}
   width={100}
   
   horizontalAlignment={'space-evenly'} 
   verticalAlignment={'center'}
   direction={'row'}

   marginLeft={-6}

   
   >
    <Container 
    width={8} 
    height={4}
  
    marginLeft={3}
    >
    <CheckBox
    disabled={false}
    value={toggleCheckBox}
    onValueChange={(newValue) => setToggleCheckBox(newValue)}
  />
</Container>
<Container>
<Container marginLeft={-3}>
<Boxegusi/>
</Container>
</Container>
<Container
  width={28} 
    height={8}
    backgroundColor={Colors.appWhite} 
    horizontalAlignment={'center'}
    verticalAlignment={'center'}
    marginLeft={4}
>
<Container
  width={27} 
    height={4}
    backgroundColor={Colors.appWhite} 
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    
>
   <H1 size={15}>EGUSI SOUP</H1>
</Container>
<Container
  width={27} 
    height={4}
    backgroundColor={Colors.appWhite} 
    horizontalAlignment={'flex-start'}
    verticalAlignment={'center'}
    direction={'row'}
   
>
<Container
 width={14} 
    height={4}
    backgroundColor={Colors.appWhite} 
    horizontalAlignment={'center'}
    
    direction={'row'}> 
                
   <H1 color={Colors.appExoticgreenthree} size={13}>{'\u20A6'}500</H1> 
   </Container>
   <Container  width={13} 
    height={4}
    backgroundColor={Colors.appWhite}
    horizontalAlignment={'center'} 
  
    direction={'row'}  >
   
                <H1 color={Colors.appExoticgreenthree} size={13}>x2</H1> 
                </Container>  
</Container>
</Container>
<Container 
 width={40}
height={6} 
direction={'row'}

verticalAlignment={'flex-end'}
>
<Container
width={25}
height={4.4}

horizontalAlignment={'center'}
verticalAlignment={'center'}
direction={'row'}
borderRadius={7}
marginRight={1}
borderWidth={1.5}
borderColor={Colors.appDropdown}
marginLeft={8}
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

horizontalAlignment={'center'}
verticalAlignment={'center'}

>
 <P size={14}>2</P>  
</Container>
<TouchWrap>
<Container
width={8}
height={3.5}

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
<TouchWrap>
<Container
width={7}
height={4}

horizontalAlignment={'center'}
verticalAlignment={'center'}
marginLeft={-0.3}
>
 <FontAwesome
                  name="times"
                  color={ Colors.appRed
                  }
                  size={13}
                  
                />  
</Container>
</TouchWrap>
</Container>
   </Container> 

   <Container
   width={90}
height={2.5}
backgroundColor={Colors.appWhite}
horizontalAlignment={'flex-start'}
verticalAlignment={'center'}
marginBottom={1}
   >
   <P size={15} color={Colors.appTextGrey}>Others</P>  
   </Container>
   <Container
   height={7}
   width={100}
   
   horizontalAlignment={'space-evenly'} 
   verticalAlignment={'center'}
   direction={'row'}

   marginLeft={-6}

   
   >
    <Container 
    width={8} 
    height={4}
  
    marginLeft={3}
    >
    <CheckBox
    disabled={false}
    value={toggleCheckBox}
    onValueChange={(newValue) => setToggleCheckBox(newValue)}
  />
</Container>
<Container>
<Container marginLeft={-3}>
<Boxegusi/>
</Container>
</Container>
<Container
  width={28} 
    height={8}
    backgroundColor={Colors.appWhite} 
    horizontalAlignment={'center'}
    verticalAlignment={'center'}
    marginLeft={4}
>
<Container
  width={27} 
    height={4}
    backgroundColor={Colors.appWhite} 
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    
>
   <H1 size={15}>EGUSI SOUP</H1>
</Container>
<Container
  width={27} 
    height={4}
    backgroundColor={Colors.appWhite} 
    horizontalAlignment={'flex-start'}
    verticalAlignment={'center'}
    direction={'row'}
   
>
<Container
 width={14} 
    height={4}
    backgroundColor={Colors.appWhite} 
    horizontalAlignment={'center'}
    
    direction={'row'}> 
                
   <H1 color={Colors.appExoticgreenthree} size={13}>{'\u20A6'}500</H1> 
   </Container>
   <Container  width={13} 
    height={4}
    backgroundColor={Colors.appWhite}
    horizontalAlignment={'center'} 
  
    direction={'row'}  >
   
                <H1 color={Colors.appExoticgreenthree} size={13}>x2</H1> 
                </Container>  
</Container>
</Container>
<Container 
 width={40}
height={6} 
direction={'row'}

verticalAlignment={'flex-end'}
>
<Container
width={25}
height={4.4}

horizontalAlignment={'center'}
verticalAlignment={'center'}
direction={'row'}
borderRadius={7}
marginRight={1}
borderWidth={1.5}
borderColor={Colors.appDropdown}
marginLeft={8}
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

horizontalAlignment={'center'}
verticalAlignment={'center'}

>
 <P size={14}>2</P>  
</Container>
<TouchWrap>
<Container
width={8}
height={3.5}

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
<TouchWrap>
<Container
width={7}
height={4}

horizontalAlignment={'center'}
verticalAlignment={'center'}
marginLeft={-0.3}
>
 <FontAwesome
                  name="times"
                  color={ Colors.appRed
                  }
                  size={14}
                  
                />  
</Container>
</TouchWrap>
</Container>
   </Container> 
   <Container
   height={7}
   width={100}
   
   horizontalAlignment={'space-evenly'} 
   verticalAlignment={'center'}
   direction={'row'}

   marginLeft={-6}

   
   >
    <Container 
    width={8} 
    height={4}
  
    marginLeft={3}
    >
    <CheckBox
    disabled={false}
    value={toggleCheckBox}
    onValueChange={(newValue) => setToggleCheckBox(newValue)}
  />
</Container>
<Container>
<Container marginLeft={-3}>
<Boxegusi/>
</Container>
</Container>
<Container
  width={28} 
    height={8}
    backgroundColor={Colors.appWhite} 
    horizontalAlignment={'center'}
    verticalAlignment={'center'}
    marginLeft={4}
>
<Container
  width={27} 
    height={4}
    backgroundColor={Colors.appWhite} 
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
    
>
   <H1 size={15}>EGUSI SOUP</H1>
</Container>
<Container
  width={27} 
    height={4}
    backgroundColor={Colors.appWhite} 
    horizontalAlignment={'flex-start'}
    verticalAlignment={'center'}
    direction={'row'}
   
>
<Container
 width={14} 
    height={4}
    backgroundColor={Colors.appWhite} 
    horizontalAlignment={'center'}
    
    direction={'row'}> 
                
   <H1 color={Colors.appExoticgreenthree} size={13}>{'\u20A6'}500</H1> 
   </Container>
   <Container  width={13} 
    height={4}
    backgroundColor={Colors.appWhite}
    horizontalAlignment={'center'} 
  
    direction={'row'}  >
   
                <H1 color={Colors.appExoticgreenthree} size={13}>x2</H1> 
                </Container>  
</Container>
</Container>
<Container 
 width={40}
height={6} 
direction={'row'}

verticalAlignment={'flex-end'}
>
<Container
width={25}
height={4.4}

horizontalAlignment={'center'}
verticalAlignment={'center'}
direction={'row'}
borderRadius={7}
marginRight={1}
borderWidth={1.5}
borderColor={Colors.appDropdown}
marginLeft={8}
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

horizontalAlignment={'center'}
verticalAlignment={'center'}

>
 <P size={14}>2</P>  
</Container>
<TouchWrap>
<Container
width={8}
height={3.5}

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
<TouchWrap>
<Container
width={7}
height={4}

horizontalAlignment={'center'}
verticalAlignment={'center'}
marginLeft={-0.3}
>
 <FontAwesome
                  name="times"
                  color={ Colors.appRed
                  }
                  size={14}
                  
                />  
</Container>
</TouchWrap>
</Container>
   </Container> 
   
    
   </Container>
   <Container
   height={6}
    width={90}
 
     direction={'row'}
     horizontalAlignment={'space-between'}
    verticalAlignment={'center'}
    marginTop={-3}

  >
    <Container
   height={2}
    width={28}
    backgroundColor={Colors.appBackground}
     horizontalAlignment={'center'}
    verticalAlignment={'center'}
 
  >
   <H1 size={10}>Continue shopping </H1>   
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
    
  
  );
};

export default Cart;
