import React, {useState, useEffect} from 'react';
import {Container, ImageWrap, TouchWrap} from '../helper';

import {Colors} from '../helper/constants';
import {H1, P} from '../helper/element';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import {Fonts} from '../helper/fontSize';
import {AppIcons} from '../helper/images';
export const BigCard = props => {
  return (
    <TouchWrap onPress={props.onPress}>
      <Container
        height={35}
        width={90}
        marginBottom={2}
        borderWidth={1}
        padding={5}
        borderRadius={13}
        backgroundColor={'#F9F9F9'}
        borderColor={Colors.appGrey}>
        <ImageWrap
          source={AppIcons.barber2}
          height={20}
          width={80}
          borderRadius={10}
        />
        <Container
          height={5}
          borderRadius={10}
          width={80}
          verticalAlignment={'center'}
          direction={'row'}
          marginTop={-19}>
          <Container
            height={4}
            paddingHorizontal={5}
            verticalAlignment={'center'}
            horizontalAlignment={'center'}
            borderRadius={15}
            marginLeft={5}
            backgroundColor={Colors.appWhite}>
            <P> Open (Closes at 10pm)</P>
          </Container>
          <Container marginLeft={25}>
            <Entypo
              name="bookmark"
              size={Fonts.semiBig}
              color={Colors.appWhite}
            />
          </Container>
        </Container>

        <Container
          marginTop={14}
          borderRadius={15}
          direction={'row'}
          width={80}>
          <Container
            width={40}
            direction={'row'}
            height={5}
            verticalAlignment={'center'}>
            <H1 size={Fonts.semiMedium}>Fantasia Place</H1>
          </Container>
          <Container
            width={40}
            height={5}
            verticalAlignment={'center'}
            direction={'row'}
            horizontalAlignment={'space-evenly'}>
            <Container marginLeft={15}>
              <H1 size={Fonts.semiMedium} color={Colors.appGrey}>
                (24)
              </H1>
            </Container>
            <Container marginLeft={1}>
              <H1 size={Fonts.semiMedium} color={Colors.appBlack}>
                4.5
              </H1>
            </Container>
            <Container>
              <FontAwesome
                name="star-o"
                size={Fonts.semiBig}
                color={Colors.appBlack}
              />
            </Container>
          </Container>
        </Container>

        <Container
          marginTop={-1}
          borderRadius={15}
          direction={'row'}
          width={80}
          height={15}>
          <Container marginTop={1.2} marginLeft={0}>
            <FontAwesome
              name="map-marker"
              size={Fonts.semiBig}
              color={Colors.appBlack}
            />
          </Container>
          <Container
            width={35}
            direction={'row'}
            height={5}
            marginLeft={2}
            verticalAlignment={'center'}>
            <P size={Fonts.small}>Yaba left, Lagos Street</P>
          </Container>
          <Container
            width={40}
            height={5}
            marginLeft={15}
            verticalAlignment={'center'}
            direction={'row'}>
            <P>from</P>
            <Container marginLeft={2}>
              <H1>N700</H1>
            </Container>
          </Container>
        </Container>
      </Container>
    </TouchWrap>
  );
};
