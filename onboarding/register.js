import React, {useState, useEffect, useCallback} from 'react';

import {AppIcons} from '../helper/images';

import {StatusBar} from 'react-native';
import {Colors} from '../helper/constants';
import {Container, ImageWrap} from '../helper/index';
import Modal from 'react-native-modal';
import {Button, H1, H2, P, TextInputBox} from '../helper/element';


export const Register = props => {
  const [modalToogle, setModalToogle] = useState(false);
  // const {setCurrentState} = React.useContext(RouteContext);
 
  return (
    <Container flex={1} backgroundColor={Colors.appWhite}>
     
      <Container
      height={5}
      width={100}
      marginTop={20}
      backgroundColor={Colors.appWhite}
      verticalAlignment={'center'}
      horizontalAlignment={'flex-start'} 
      paddingLeft={5}
      > 
        <H1 color={Colors.appLightGreen} textAlign={'center'}   fontWeight={'bold'}
         size={15}>
        Create a Free Account
        </H1>  
      </Container> 
      <Container
       height={43}
      width={100}
      backgroundColor={Colors.appWhite}
      verticalAlignment={'center'}
      horizontalAlignment={'center'} >
      <Container  height={10}
      width={95}
     
      verticalAlignment={'center'}
      horizontalAlignment={'center'}
      marginTop={-13}
      >
      <TextInputBox placeholder={'What’s your full name?'}  color={Colors.appUniquegrey} size={12} 
      height={7} fontWeight={'bold'}  borderWidth={2}
       />
      </Container>
      <Container  height={10}
      width={95}
     
      verticalAlignment={'center'}
      horizontalAlignment={'center'}
      >
      <TextInputBox placeholder={'Enter email'} color={Colors.appUniquegrey} size={12}
          height={7}fontWeight={'bold'} borderWidth={2}
      />
      </Container>
      <Container  height={10}
      width={95}
      
      verticalAlignment={'center'}
      horizontalAlignment={'center'}
      >
      <TextInputBox placeholder={'Phone number'}  color={Colors.appUniquegrey} size={12} 
          height={7} fontWeight={'bold'}  borderWidth={2}
      />
      </Container>
      </Container> 
      <Container
      height={5}
      width={100}
     
      verticalAlignment={'center'}
      horizontalAlignment={'center'}
      marginTop={-8}
      >
        <H1 color={Colors.appUniquegrey} textAlign={'center'} size={12}>
        By clicking Register, you accept our <H1 color={Colors.appBlack} size={12} >Terms & Conditions</H1>
        </H1>  

      </Container>
      <Container
       height={6}
      width={100}
     
      verticalAlignment={'center'}
      horizontalAlignment={'flex-start'}
      paddingLeft={7}
      marginTop={2}

      >
     <Button width={33} 
        height={4} 
        text={'Register'} color={Colors.appWhite}
        verticalAlignment={'center'}
         horizontalAlignment={'center'} 
         backgroundColor={Colors.appBlue}
         borderRadius={2}
         size={13}
        onPress={()=> props.navigation.navigate ('Verify')}
         />

      </Container>
      <Container
      height={2}
      width={100}
   
      verticalAlignment={'center'}
      horizontalAlignment={'center'} 
      marginTop={3}>
       <H1 color={Colors.appUniquegrey} textAlign={'center'} size={12}>
       I have an Account?
        </H1> 
      </Container>
      <Container
      height={4}
      width={100}

      verticalAlignment={'center'}
      horizontalAlignment={'center'} 
     
      >
      <H1 color={Colors.appUniquegreen} textAlign={'center'} size={16}>
      Login
        </H1>     
      </Container>
      </Container>

  
  );
};

export default Register;
