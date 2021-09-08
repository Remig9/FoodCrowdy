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
import Bucketbuy from './bucketbuy';
import Boxegusi from '../component/boxegusi';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const History = props => {


  return (
   
    <Container flex={1} backgroundColor={Colors.appBackground} paddingLeft={5}>
  <Container
   height={7}
   width={90}
   backgroundColor={Colors.appWhite} 
   horizontalAlignment={'space-evenly'} 
   verticalAlignment={'center'}
   direction={'row'}
   marginTop={3}
   
   >
    
<Container>
<Container marginLeft={-7}>
<Boxegusi/>
</Container>
</Container>
<Container
  width={22} 
    height={7}
    backgroundColor={Colors.appWhite} 
    horizontalAlignment={'center'}
    verticalAlignment={'center'}
    marginLeft={-3}
>
<Container
  width={21} 
    height={4}
    backgroundColor={Colors.appWhite} 
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
>
   <H1 size={13}>EGUSI SOUP</H1>
</Container>
<Container
  width={21} 
    height={2}
    backgroundColor={Colors.appWhite} 
    horizontalAlignment={'flex-start'}
    verticalAlignment={'center'}
    direction={'row'}
    marginTop={-1}
>
<Container marginTop={0.3}>
    <MaterialCommunityIcons
                  name="currency-ngn"
                  color={ Colors.appExoticgreenthree
                  }
                  size={15}
                  
                /> 
                </Container>
                <Container>
   <H1 color={Colors.appExoticgreenthree} size={14}>500</H1> 
   </Container>
   <Container marginTop={0.4} marginLeft={1.3}  >
   <FontAwesome
                  name="times"
                  color={ Colors.appExoticgreenthree
                  }
                  size={14}
                  
                />  
                </Container>  
                <H1 color={Colors.appExoticgreenthree} size={14}>2</H1> 
</Container>
</Container>
<Container
width={9}
height={3}
backgroundColor={Colors.appRed}
horizontalAlignment={'center'}
verticalAlignment={'center'}
direction={'row'}
borderRadius={7}
marginLeft={-5}
> 
<P color={Colors.appWhite}>10+</P>
</Container>
<Container
width={19}
height={7}
backgroundColor={Colors.appWhite}
horizontalAlignment={'flex-end'}
verticalAlignment={'flex-end'}
marginLeft={5}
>
 <P color={Colors.appTextGrey} fontWeight={'bold'} >Yesterday</P>
</Container>
   </Container> 
   <Container
   height={7}
   width={90}
   backgroundColor={Colors.appWhite} 
   horizontalAlignment={'space-evenly'} 
   verticalAlignment={'center'}
   direction={'row'}
   marginTop={3}
   
   >
    
<Container>
<Container marginLeft={-7}>
<Boxegusi/>
</Container>
</Container>
<Container
  width={22} 
    height={7}
    backgroundColor={Colors.appWhite} 
    horizontalAlignment={'center'}
    verticalAlignment={'center'}
    marginLeft={-3}
>
<Container
  width={21} 
    height={4}
    backgroundColor={Colors.appWhite} 
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
>
   <H1 size={13}>EGUSI SOUP</H1>
</Container>
<Container
  width={21} 
    height={2}
    backgroundColor={Colors.appWhite} 
    horizontalAlignment={'flex-start'}
    verticalAlignment={'center'}
    direction={'row'}
    marginTop={-1}
>
<Container marginTop={0.3}>
    <MaterialCommunityIcons
                  name="currency-ngn"
                  color={ Colors.appExoticgreenthree
                  }
                  size={15}
                  
                /> 
                </Container>
                <Container>
   <H1 color={Colors.appExoticgreenthree} size={14}>500</H1> 
   </Container>
   <Container marginTop={0.4} marginLeft={1.3}  >
   <FontAwesome
                  name="times"
                  color={ Colors.appExoticgreenthree
                  }
                  size={14}
                  
                />  
                </Container>  
                <H1 color={Colors.appExoticgreenthree} size={14}>2</H1> 
</Container>
</Container>
<Container
width={9}
height={3}
backgroundColor={Colors.appRed}
horizontalAlignment={'center'}
verticalAlignment={'center'}
direction={'row'}
borderRadius={7}
marginLeft={-5}
> 
<P color={Colors.appWhite}>10+</P>
</Container>
<Container
width={19}
height={7}
backgroundColor={Colors.appWhite}
horizontalAlignment={'center'}
verticalAlignment={'center'}
marginLeft={5}
>
<Container
width={19}
height={2.5}
backgroundColor={Colors.appWhite}
horizontalAlignment={'flex-end'}
verticalAlignment={'center'}

>
<P color={Colors.appTextGrey} size={17} fontWeight={'bold'}>19</P>
</Container>
<Container
width={19}
height={3}
backgroundColor={Colors.appWhite}
horizontalAlignment={'flex-end'}
verticalAlignment={'center'}

>
<P color={Colors.appTextGrey} size={17} > Aug</P>
</Container>
<Container
width={19}
height={2}
backgroundColor={Colors.appWhite}
horizontalAlignment={'flex-end'}
verticalAlignment={'center'}

>
<P color={Colors.appTextGrey} size={10} >12:10pm</P>
</Container>
</Container>
   </Container> 
   <Container
   height={7}
   width={90}
   backgroundColor={Colors.appWhite} 
   horizontalAlignment={'space-evenly'} 
   verticalAlignment={'center'}
   direction={'row'}
   marginTop={3}
   
   >
    
<Container>
<Container marginLeft={-7}>
<Boxegusi/>
</Container>
</Container>
<Container
  width={22} 
    height={7}
    backgroundColor={Colors.appWhite} 
    horizontalAlignment={'center'}
    verticalAlignment={'center'}
    marginLeft={-3}
>
<Container
  width={21} 
    height={4}
    backgroundColor={Colors.appWhite} 
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
>
   <H1 size={13}>EGUSI SOUP</H1>
</Container>
<Container
  width={21} 
    height={2}
    backgroundColor={Colors.appWhite} 
    horizontalAlignment={'flex-start'}
    verticalAlignment={'center'}
    direction={'row'}
    marginTop={-1}
>
<Container marginTop={0.3}>
    <MaterialCommunityIcons
                  name="currency-ngn"
                  color={ Colors.appExoticgreenthree
                  }
                  size={15}
                  
                /> 
                </Container>
                <Container>
   <H1 color={Colors.appExoticgreenthree} size={14}>500</H1> 
   </Container>
   <Container marginTop={0.4} marginLeft={1.3}  >
   <FontAwesome
                  name="times"
                  color={ Colors.appExoticgreenthree
                  }
                  size={14}
                  
                />  
                </Container>  
                <H1 color={Colors.appExoticgreenthree} size={14}>2</H1> 
</Container>
</Container>
<Container
width={9}
height={3}
backgroundColor={Colors.appRed}
horizontalAlignment={'center'}
verticalAlignment={'center'}
direction={'row'}
borderRadius={7}
marginLeft={-5}
> 
<P color={Colors.appWhite}>10+</P>
</Container>
<Container
width={19}
height={7}
backgroundColor={Colors.appWhite}
horizontalAlignment={'center'}
verticalAlignment={'center'}
marginLeft={5}
>
<Container
width={19}
height={2.5}
backgroundColor={Colors.appWhite}
horizontalAlignment={'flex-end'}
verticalAlignment={'center'}

>
<P color={Colors.appTextGrey} size={17} fontWeight={'bold'}>19</P>
</Container>
<Container
width={19}
height={3}
backgroundColor={Colors.appWhite}
horizontalAlignment={'flex-end'}
verticalAlignment={'center'}

>
<P color={Colors.appTextGrey} size={17} > Aug</P>
</Container>
<Container
width={19}
height={2}
backgroundColor={Colors.appWhite}
horizontalAlignment={'flex-end'}

verticalAlignment={'center'}

>
<P color={Colors.appTextGrey} size={10} >12:10pm</P>
</Container>
</Container>
   </Container> 
    </Container>
  
    
  
  );
};

export default History;
