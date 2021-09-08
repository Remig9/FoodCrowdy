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
import History from './history';
import Processing from './processing';
import Boxegusi from '../component/boxegusi';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export const MyOders = props => {
  const [active , setActive]=useState("Ordered")

  return (
    <ScrollView>
    <Container flex={1} backgroundColor={Colors.appBackground} paddingLeft={5}>
   <Container
    height={5}
      width={90}
      backgroundColor={Colors.appBackground}
      verticalAlignment={'center'}
   
      direction={'row'}
      marginTop={6}   
   >
   {active=='Ordered'?(<H2 size={15} color={Colors.appTextGrey}>Items you have bought</H2>):null}
  </Container>
  <Container
    c
  >
 <Button
  height={3.3}
width={25}
backgroundColor={active=='Ordered'?Colors.appLightGreen:Colors.appWhite}
text={'Ordered'}color={active=='Ordered'?Colors.appWhite:Colors.appTextGrey}
size={15} 
borderRadius={15}
onPress={()=> setActive('Ordered')} 
  />
   <Button
  height={3.3}
width={25}
backgroundColor={active=='History'?Colors.appLightGreen:Colors.appWhite}
text={'History'} color={active=='History'?Colors.appWhite:Colors.appTextGrey}
size={15} 
borderRadius={15}
onPress={()=> setActive('History')}
 
  />
   <Button
  height={3.3}
width={25}
backgroundColor={active=='Processing'?Colors.appLightGreen:Colors.appWhite}
text={'Processing'} color={active=='Processing'?Colors.appWhite:Colors.appTextGrey}
size={15} 
borderRadius={15} 
onPress={()=> setActive('Processing')}
  />
  </Container>

 

    </Container>
    {active=='Ordered'?(<Container paddingLeft={5}>
      <Container
   height={35}
width={100}
backgroundColor={Colors.appBackground} 
 horizontalAlignment={'space-evenly'} 
 verticalAlignment={'center'}
 direction={'row'}
 marginLeft={-5}
 paddingRight={3}
  >
    <PepperContent/>
    <PepperContent/>
  </Container>
  <Container
   height={3}
width={100}
backgroundColor={Colors.appBackground} 
 horizontalAlignment={'center'} 
 verticalAlignment={'center'}
 direction={'row'}
 marginLeft={-5}
 marginTop={-1}
 >
  <Spacebar/>
  </Container>
  <Container
    height={17}
    width={95}
    backgroundColor={Colors.appbanner}
    marginTop={-0}
    verticalAlignment={'center'}
    horizontalAlignment={'space-around'}
    direction={'row'}
    marginLeft={6}
   
    >
    <Container
     height={7}
    width={30}

    marginLeft={-12}
    verticalAlignment={'center'}
    horizontalAlignment={'flex-start'}
  
    
    
    
    >
   <Container
    height={5}
    width={25}
    marginLeft={-4}
    verticalAlignment={'flex-end'}
    horizontalAlignment={'center'}
    >
     <H1 color={Colors.appTextGrey}  size={14}  >EGUSI SOUP</H1>   
    </Container>
    <Container
    height={5}
    width={25}
  
    verticalAlignment={'flex-start'}
    horizontalAlignment={'center'}
    marginLeft={-7}
    >
     <P color={Colors.appTextGrey} size={12}  >Bucket list</P>       
    </Container>

    </Container>
     <ImageWrap
            source={AppIcons. egusi}
            height={33}
            width={33}
            fit={'contain'}
          />
    </Container>
    <Container
    height={10}
    width={93}
    backgroundColor={Colors.appExoticyellow}
    verticalAlignment={'center'}
    horizontalAlignment={'space-around'}
      direction={'row'}
   marginLeft={-2}
    borderRadius={9}
    

>
<TouchWrap>
<Container
 height={8}
    width={45}
    backgroundColor={Colors.appExoticyellow}
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
  
    marginLeft={3} 
>
 <Container
 height={3}
    width={45}
    backgroundColor={Colors.appExoticyellow}
    verticalAlignment={'center'}
    horizontalAlignment={'flex-start'}
    direction={'row'}
     >
      <P Color={Colors.appTextGrey} size={10}>Egusi, Ugu, Stock Fish, Palm Oil, </P>  
</Container> 
    <Container
 height={3}
    width={45}
    backgroundColor={Colors.appExoticyellow}
    verticalAlignment={'center'}
    horizontalAlignment={'flex-start'}
    direction={'row'}
    marginLeft={-1}
     > 
     <P Color={Colors.appTextGrey} size={10}> Beef, Smoke Fish, Locust Bean</P>  
</Container> 
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
    horizontalAlignment={'space-between'}
    direction={'row'}
   
   >
<TouchWrap>
<Container
 height={3}
 width={8}
 backgroundColor={Colors.appExoticyellow}
 verticalAlignment={'center'}
 horizontalAlignment={'center'}
 marginLeft={7.3}
 >
<EvilIcons
               name="heart"
               color={ Colors.appRed
               }
               size={24}
               
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
    
    verticalAlignment={'center'}
    horizontalAlignment={'center'}
 paddingLeft={6}
   >
   <H1 Color={Colors.appGreen} size={16} >Buy Now</H1>   
   </Container>
   </TouchWrap>
</Container>

</Container>
   <Container
   height={35}
width={100}
backgroundColor={Colors.appBackground} 
 horizontalAlignment={'space-evenly'} 
 verticalAlignment={'center'}
 direction={'row'}
 marginLeft={-5}
 paddingRight={3}
  >
    <PepperContent/>
    <PepperContent/>
  </Container>
    </Container>):null} 


    {active=='History'? (<Container >
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
height={3}
backgroundColor={Colors.appWhite}
horizontalAlignment={'flex-end'}
verticalAlignment={'center'}

>
<P color={Colors.appTextGrey} size={16} fontWeight={'bold'}>19</P>
</Container>
<Container
width={19}
height={3.5}
backgroundColor={Colors.appWhite}
horizontalAlignment={'flex-end'}
verticalAlignment={'center'}

>
<P color={Colors.appTextGrey} size={16} > Aug</P>
</Container>
<Container
width={19}
height={2.5}
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
height={8}
backgroundColor={Colors.appWhite}
horizontalAlignment={'center'}
verticalAlignment={'center'}
marginLeft={5}
>
<Container
width={19}
height={3}

horizontalAlignment={'flex-end'}
verticalAlignment={'center'}

>
<P color={Colors.appTextGrey} size={16} fontWeight={'bold'}>19</P>
</Container>
<Container
width={19}
height={3}

horizontalAlignment={'flex-end'}
verticalAlignment={'center'}

>
<P color={Colors.appTextGrey} size={16} > Aug</P>
</Container>
<Container
width={19}
height={4}
paddingBottom={2}
horizontalAlignment={'flex-end'}

verticalAlignment={'center'}

>
<P color={Colors.appTextGrey} size={10} >12:10pm</P>
</Container>
</Container>
   </Container> 
    </Container>
  
    </Container>):null}


    {active=='Processing'? (<Container >
     
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
 <H1 color={Colors.appUniqueorange} fontWeight={'bold'} size={13}>Processing</H1>
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
verticalAlignment={'center'}
marginLeft={5}
>
 <H1 color={Colors.appUniqueorange} fontWeight={'bold'} size={13}>Packaging</H1>
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
verticalAlignment={'center'}
marginLeft={5}
>
 <H1 color={Colors.appUniqueorange} fontWeight={'bold'} size={13}>Delivery</H1>
</Container>
   </Container> 
    </Container>
    </Container>):null}
</ScrollView>   
  
  );
};

export default MyOders;
