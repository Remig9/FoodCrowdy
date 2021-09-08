import React from 'react';
import { Container, ImageWrap } from './helper';
import { Colors } from './helper/constants';
import Apps from './App'
import { H1, H2, P } from './helper/element';
import { AppIcons } from './helper/images';
export const LogIn=(Props)=>{

    return(
      <Container flex={1} backgroundColor={'white'} verticalAlignment={'center'} horizontalAlignment={'center'}>

<ImageWrap source={AppIcons.appLogo} height={60} width={60} fit={'contain'}/>

     </Container>
    )
}