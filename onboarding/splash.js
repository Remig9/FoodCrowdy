import React, {useState, useEffect, useCallback} from 'react';

import {AppIcons} from '../helper/images';

import {StatusBar} from 'react-native';
import {Colors} from '../helper/constants';
import {Container, ImageWrap} from '../helper/index';
import Modal from 'react-native-modal';
import {H1} from '../helper/element';

export const Splash = props => {
  const [modalToogle, setModalToogle] = useState(false);
  // const {setCurrentState} = React.useContext(RouteContext);
  const init = () => {
    setModalToogle(true);
    setTimeout(() => init2(), 5500);
  };
  const init2 = () => {
    setModalToogle(false);
    console.warn('now');
    setTimeout(() => init3(), 5500);
  };
  const init3 = () => {
    props.navigation.navigate('Splash2');
  };

  useEffect(() => {
    init();
  }, []);
  return (
    <Container flex={1} backgroundColor={Colors.appWhite}>
      <StatusBar
        translucent={true}
        backgroundColor={Colors.appWhite}
        barStyle={'light-content'}
      />

      {/* <ImageWrap
        source={AppIcons.appLogo}
        height={35}
        width={35}
        fit={'contain'}
      /> */}
      <H1>{modalToogle}</H1>
      <Modal
        backdropOpacity={0}
        animationInTiming={5500}
        animationOut={'slideOutDown'}
        animationOutTiming={5500}
        isVisible={true}
        style={{
          margin: 0,
          backgroundColor: Colors.appWhite,
        }}>
        <Container
          flex={1}
          horizontalAlignment="center"
          verticalAlignment="center"
          backgroundColor={Colors.appWhite}
          
          >
          <ImageWrap
            source={AppIcons.appLogo}
            height={35}
            width={35}
            fit={'contain'}
           
          />
        </Container>
      </Modal>
    </Container>
  );
};

export default Splash;
