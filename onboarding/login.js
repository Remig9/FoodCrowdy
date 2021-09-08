import React, {useState, useEffect, useCallback} from 'react';

import {AppIcons} from '../helper/images';

import {StatusBar, TouchableOpacity} from 'react-native';
import {Colors} from '../helper/constants';
import {Container, ImageWrap} from '../helper/index';
import Modal from 'react-native-modal';
import {Button, H1, H2, P, TextInputBox} from '../helper/element';


export const Login = props => {
  const [modalToogle, setModalToogle] = useState(false);
  // const {setCurrentState} = React.useContext(RouteContext);
 
  return (
    <Container flex={1} backgroundColor={Colors.appWhite}>
     
      <Container
      height={5}
      width={100}
      marginTop={20}
      
      verticalAlignment={'center'}
      horizontalAlignment={'flex-start'} 
      paddingLeft={5}
      > 
        <H1 color={Colors.appLightGreen} textAlign={'center'}   fontWeight={'bold'}
         size={15}>
        Login
        </H1>  
      </Container> 
      <Container

      width={100}
   
      verticalAlignment={'center'}
      horizontalAlignment={'center'} >
     
      <Container 
      width={95}
     marginTop={5}
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
      <TextInputBox placeholder={'Password'}  color={Colors.appUniquegrey} size={12} 
          height={7} fontWeight={'bold'}  borderWidth={2}
      />
      </Container>
      </Container> 
  
      <Container
       height={6}
      width={100}
     
      verticalAlignment={'center'}
      horizontalAlignment={'flex-start'}
      paddingLeft={7}
      marginTop={6}

      >
     <Button width={33} 
        height={4} 
        text={'Login'} color={Colors.appWhite}
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
      Don't have an Account?
        </H1> 
      </Container>

      <TouchableOpacity onPress={()=>props.navigation.navigate('Register')}>
      <Container
      height={4}
      width={100}

      verticalAlignment={'center'}
      horizontalAlignment={'center'} 
     
      >
      <H1 color={Colors.appLightGreen} textAlign={'center'} size={16}>
      Register
        </H1>     
      </Container>
      </TouchableOpacity>
      </Container>

  
  );
};

export default Login;
