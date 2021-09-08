import React, {useState, useEffect, useCallback} from 'react';

import {AppIcons} from '../helper/images';

import {StatusBar} from 'react-native';
import {Colors} from '../helper/constants';
import {Container, ImageWrap} from '../helper/index';
import Modal from 'react-native-modal';
import {Button, H1, H2, P, TextInputBox} from '../helper/element';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const Openaccount = props => {
  const [modalToogle, setModalToogle] = useState(false);
  // const {setCurrentState} = React.useContext(RouteContext);
 
  return (
    <Container flex={1} backgroundColor={Colors.appWhite}>
     <Container
     height={10}
     width={100}
 
     marginTop={20}
     direction={'row'}
     horizontalAlignment={'center'}
     verticalAlignment={'center'}
     paddingRight={40}>
     
     <Container
     height={6}
     width={12}
     borderRadius={100}
     backgroundColor={Colors.appExoticgreenTwo}
     horizontalAlignment={'center'}
     verticalAlignment={'center'}
     >
        <MaterialIcons
                  name="phonelink-lock"
                  color={ Colors.appWhite}
                  size={18}
                />  
     </Container>
      <Container
     height={6}
     width={26}
     marginLeft={5}
     
     >
      <H2 color={Colors.appUniquegrey} size={15}>Login to your Account</H2>   
     </Container>
     </Container>
     <Container
     height={8}
     width={100}
     marginTop={4}
 
     horizontalAlignment={'center'}
     verticalAlignment={'center'}
     >
     <TextInputBox  width={80} color={Colors.appWhite} placeholder={'Enter email'}  size={12} 
          height={7} fontWeight={'bold'}  borderWidth={3} />
     </Container>
     <Container
     height={5}
     width={100}
     marginTop={3}
     
     horizontalAlignment={'center'}
     verticalAlignment={'center'}
     paddingRight={48}
     >
     <Button  width={33} 
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
      marginTop={30}>
       <H1 color={Colors.appUniquegrey} textAlign={'center'} size={10}>
       Are you new here?
        </H1> 
      </Container>
      <Container
      height={4}
      width={100}
  
      verticalAlignment={'center'}
      horizontalAlignment={'center'} 
     
      >
     <H1 color={Colors.appUniquegrey}  size={12}>Open a free <H1 color={Colors.appLightGreen} textAlign={'center'} size={13}>
      Account
        </H1>  </H1>   
      </Container>
    </Container>

  
  );
};

export default Openaccount;
