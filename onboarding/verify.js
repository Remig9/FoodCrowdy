import React, {useState, useEffect, useCallback} from 'react';

import {AppIcons} from '../helper/images';

import {StatusBar} from 'react-native';
import {Colors} from '../helper/constants';
import {Container, ImageWrap} from '../helper/index';
import Modal from 'react-native-modal';
import {Button, H1, H2, P, TextInputBox} from '../helper/element';
import Foundation from 'react-native-vector-icons/Foundation';
import CodeInput from 'react-native-confirmation-code-input';
import { colors } from 'react-native-elements';

export const Verify = props => {
  const onFulfill = async (code) => {

    props.navigation.navigate('Login') ,console.warn(code)};
  return (
    <Container flex={1} backgroundColor={Colors.appWhite}>
    <Container
     height={8}
     width={100}
     backgroundColor={Colors.appWhite}
     marginTop={20}
     direction={'row'}
     horizontalAlignment={'center'}
     verticalAlignment={'center'}
     paddingRight={40}>
     
     <Container
     height={6}
     width={12}
     borderRadius={100}
     backgroundColor={Colors.appWhite}
     horizontalAlignment={'center'}
     verticalAlignment={'center'}
     marginLeft={7}
     >
     <Foundation
              name="shield"
              color={Colors.appExoticgreenTwo}
              size={35}
            />
     </Container>
      <Container
     height={5}
     width={26}
     marginLeft={5}
     backgroundColor={Colors.appWhite}
     horizontalAlignment={'center'}
     verticalAlignment={'center'}
     >
      <H2 color={Colors.appTextGrey} size={15}>Are you real?</H2>   
     </Container>
     </Container>
     <Container
     height={6}
     width={86}
     marginTop={4}
     backgroundColor={Colors.appWhite}
     marginLeft={7}
     >
    <H2 color={Colors.appUniquegrey} size={15}>
    Let’s verify you. Check your email for the code to verify proceed.
   </H2> 

     </Container>
     <Container
      height={9}
     width={86}
     marginTop={3}
     backgroundColor={Colors.appWhite}
     marginLeft={7}
 
     verticalAlignment={'center'}
     direction={'row'}
     >
      <Container marginTop={-5}>
       <CodeInput
          //ref="codeInputRef2"
          secureTextEntry
          className={'border-box'}
          keyboardType="numeric"
          //compareWithCode='AsDW2'
          activeColor={Colors.appExoticgreenTwo}
          inactiveColor={Colors.appTextGrey}
         
          autoFocus={false}
          codeLength={5}
          inputPosition="center"
          size={50}
          onFulfill={(code) => onFulfill(code)}
          codeInputStyle={{borderBottomWidth: 2.5}}
          cellBorderWidth={0}
        />
    </Container>  
     
       
  
    </Container>
    <Container
      height={6}
     width={60}
     marginTop={2}
     backgroundColor={Colors.appWhite}
     marginLeft={8}
     horizontalAlignment={'flex-start'}
     verticalAlignment={'center'}
    >
    <Button height={4}
     width={33}
     text={'Verify'}
     color={Colors.appWhite}
     backgroundColor={Colors.appBlue}
     verticalAlignment={'center'}                              
    horizontalAlignment={'center'}
    borderRadius={2}
     size={13} 
     onPress={()=> props.navigation.navigate ('Page')}
     />
     
    </Container>
    <Container
      height={4}
      width={100}
      backgroundColor={Colors.appWhite}
      verticalAlignment={'center'}
      horizontalAlignment={'center'} 
      marginTop={8}
     
      >
     <H1 color={Colors.appUniquegrey}  size={9}>Alaye!<P color={Colors.appUniquegrey}  size={9}>I didn’t see any code. <H1 color={Colors.appExoticgreenTwo} textAlign={'center'} size={9}>
     RESEND
        </H1>  </P>  </H1> 
      </Container>
    </Container>

  
  );
};

export default Verify;
