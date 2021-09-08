import React, {useEffect} from 'react';

import {AppIcons} from '../helper/images';

import {StatusBar} from 'react-native';
import {Colors} from '../helper/constants';
import {Container, ImageWrap} from '../helper/index';
import Modal from 'react-native-modal';
import {Button, H1, P} from '../helper/element';
import { color } from 'react-native-reanimated';
import Register from './register';
import Openaccount from './openaccount';
export const Splash2 = props => {
  // const {setCurrentState} = React.useContext(RouteContext);
  const init = () => {
    props.navigation.navigate('Login');
  };
  useEffect(() => {
    // setTimeout(() => init(), 5500);
  }, []);
  return (
    <Container flex={1} backgroundColor={Colors.appWhite}>
      <StatusBar
        translucent={true}
        backgroundColor={Colors.appWhite}
        barStyle={'light-content'}
      />
      <Container padding={15} marginTop={2}>
        <ImageWrap
          source={AppIcons.auth}
          height={35}
          width={70}
          fit={'contain'}
        />
      </Container>

      <Container
        width={50}
        marginLeft={25}
        verticalAlignment={'center'}
        horizontalAlignment={'center'}
        marginTop={-5}>
        <H1 color={Colors.appBlue}>Welcome to Foodcrowdy</H1>
      </Container>

      <Container
        width={60}
        marginLeft={20}
        marginTop={3}
        verticalAlignment={'center'}
        horizontalAlignment={'center'}>
        <P color={Colors.appTextGrey} textAlign={'center'}>
          Let get you started in less than 2 min to start making orders.
        </P>
      </Container>
      <Container 
       width={70}
        height={10}
        backgroundColor={Colors.appWhite}
        marginTop={7}
        marginLeft={17}
        verticalAlignment={'center'}
        horizontalAlignment={'space-evenly'}
        direction={'row'}
        
        >
        
        <Button width={25}
         height={4}
         text={'Register'} 
          verticalAlignment={'center'}
          horizontalAlignment={'center'} 
          backgroundColor={Colors.appUniquegreen}
          fontWeight={'bold'}
           size={14}
           onPress={()=> props.navigation.navigate('Register')}
          />
        <Button width={15} 
        height={4} 
        text={'Login'} color={Colors.appBlue}
        verticalAlignment={'center'}
         horizontalAlignment={'center'} 
         backgroundColor={Colors.appWhite}
         fontWeight={'bold'}
         size={14}
          onPress={()=> props.navigation.navigate('Openaccount')}
        />
      </Container>
    </Container>
  );
};

export default Splash2;
