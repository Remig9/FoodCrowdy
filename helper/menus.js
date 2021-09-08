import React, {useState, useEffect} from 'react';

import {TouchableOpacity} from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import {Avatar, Container, ImageWrap, TouchWrap} from '.';
import {Colors} from './constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {H1, P, Space, H2} from './element';

import {AppIcons} from '../helper/images';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Fonts} from './fontSize';
import {getData} from './storage';
import {RouteContext} from './route_context';
import {BackButton} from '../component/backButton';

export const DrawerMenu = props => {
  const {setCurrentState} = React.useContext(RouteContext);
  const [name, setName] = useState('');
  // const LogOut = async () => {
  //   await AsyncStorage.clear();
  //   setCurrentState('login');
  // };

  useEffect(() => {}, []);

  return (
    <Container>
      <Container
        height={10}
        width={77.5}
        direction={'row'}
        verticalAlignment={'center'}
        paddingHorizontal={5}
        horizontalAlignment={'space-between'}
        marginTop={5}>
        <BackButton />

        <Container height={7} width={13}>
          <ImageWrap source={AppIcons.barber2} flex={1} borderRadius={12} />
        </Container>
      </Container>
      <Container paddingLeft={5} marginTop={3}>
        <H1 size={Fonts.semiBig}>James Maddison</H1>
        <P size={Fonts.small}>Joined 3rd of Jan 2019</P>
      </Container>
      <Container height={2} direction={'row'}>
        <Container
          height={1.5}
          backgroundColor={Colors.appGreen}
          widthPercent={'50%'}></Container>
        <Container
          height={1.5}
          backgroundColor={Colors.appBlue}
          widthPercent={'50%'}></Container>
      </Container>

      <TouchWrap onPress={() => props.navigation.navigate('Profile')}>
        <Container height={5} direction={'row'} marginTop={3} marginLeft={5}>
          <Container
            height={8}
            width={15}
            verticalAlignment={'center'}
            horizontalAlignment={'center'}
            backgroundColor={'#F9F9F9'}
            borderRadius={15}>
            <Entypo name="user" size={Fonts.big} color={Colors.appPrimary} />
          </Container>
          <Container
            direction={'row'}
            verticalAlignment={'center'}
            width={29}
            marginTop={2}
            marginLeft={5}>
            <P color={Colors.appDeepBlue}>Profile</P>
          </Container>
        </Container>
      </TouchWrap>

      <TouchWrap>
        <Container height={5} direction={'row'} marginTop={5} marginLeft={5}>
          <Container
            height={8}
            width={15}
            verticalAlignment={'center'}
            horizontalAlignment={'center'}
            backgroundColor={'#F9F9F9'}
            borderRadius={15}>
            <MaterialCommunityIcons
              name="star-circle"
              size={Fonts.big}
              color={Colors.appPrimary}
            />
          </Container>
          <Container
            direction={'row'}
            verticalAlignment={'center'}
            width={29}
            marginTop={2}
            marginLeft={5}>
            <P color={Colors.appDeepBlue}>Reviews</P>
          </Container>
        </Container>
      </TouchWrap>

      <TouchWrap onPress={() => props.navigation.navigate('AddPayment')}>
        <Container height={5} direction={'row'} marginTop={5} marginLeft={5}>
          <Container
            height={8}
            width={15}
            verticalAlignment={'center'}
            horizontalAlignment={'center'}
            backgroundColor={'#F9F9F9'}
            borderRadius={15}>
            <MaterialIcons
              name="payment"
              size={Fonts.big}
              color={Colors.appPrimary}
            />
          </Container>
          <Container
            direction={'row'}
            verticalAlignment={'center'}
            width={29}
            marginTop={2}
            marginLeft={5}>
            <P color={Colors.appDeepBlue}>Payments</P>
          </Container>
        </Container>
      </TouchWrap>

      <TouchWrap>
        <Container height={5} direction={'row'} marginTop={5} marginLeft={5}>
          <Container
            height={8}
            width={15}
            verticalAlignment={'center'}
            horizontalAlignment={'center'}
            backgroundColor={'#F9F9F9'}
            borderRadius={15}>
            <Ionicons
              name="notifications"
              size={Fonts.big}
              color={Colors.appPrimary}
            />
          </Container>
          <Container
            direction={'row'}
            verticalAlignment={'center'}
            width={29}
            marginTop={2}
            marginLeft={5}>
            <P color={Colors.appDeepBlue}>Notifications</P>
          </Container>
        </Container>
      </TouchWrap>

      <TouchWrap onPress={() => props.navigation.navigate('Settings')}>
        <Container height={5} direction={'row'} marginTop={5} marginLeft={5}>
          <Container
            height={8}
            width={15}
            verticalAlignment={'center'}
            horizontalAlignment={'center'}
            backgroundColor={'#F9F9F9'}
            borderRadius={15}>
            <Ionicons
              name="settings"
              size={Fonts.big}
              color={Colors.appPrimary}
            />
          </Container>
          <Container
            direction={'row'}
            verticalAlignment={'center'}
            width={29}
            marginTop={2}
            marginLeft={5}>
            <P color={Colors.appDeepBlue}>Settings</P>
          </Container>
        </Container>
      </TouchWrap>

      <TouchWrap onPress={() => props.navigation.navigate('Privacy')}>
        <Container height={5} direction={'row'} marginTop={5} marginLeft={5}>
          <Container
            height={8}
            width={15}
            verticalAlignment={'center'}
            horizontalAlignment={'center'}
            backgroundColor={'#F9F9F9'}
            borderRadius={15}>
            <MaterialIcons
              name="privacy-tip"
              size={Fonts.big}
              color={Colors.appPrimary}
            />
          </Container>
          <Container
            direction={'row'}
            verticalAlignment={'center'}
            width={29}
            marginTop={2}
            marginLeft={5}>
            <P color={Colors.appDeepBlue}>Privacy</P>
          </Container>
        </Container>
      </TouchWrap>

      <Container height={14} width={72}></Container>
      <TouchWrap onPress={() => props.navigation.navigate('Login')}>
        <Container
          height={6.5}
          direction={'row'}
          widthPercent={'100%'}
          verticalAlignment={'center'}
          horizontalAlignment={'center'}
          backgroundColor={'#F9F9F9'}
          borderTopWidth={1}
          borderColor={Colors.appGrey}>
          <P>Sign out</P>
        </Container>
      </TouchWrap>
      {/* 
      <TouchWrap onPress={() => LogOut()}>
        <Container height={5} direction={'row'} marginTop={2}>
          <Container
            direction={'row'}
            verticalAlignment={'center'}
            horizontalAlignment={'center'}
            paddingLeft={10}
            width={30}>
            <Feather
              name="log-out"
              size={Fonts.big}
              color={Colors.appDeepBlue}
            />
          </Container>
          <Container direction={'row'} verticalAlignment={'center'} width={29}>
            <H2 color={Colors.appDeepBlue}>Logout</H2>
          </Container>
        </Container>
      </TouchWrap> */}
    </Container>
  );
};
