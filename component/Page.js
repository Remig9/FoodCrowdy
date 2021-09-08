import React, {useState, useEffect} from 'react';

import {Container, TouchWrap} from '../helper';
import {Colors} from '../helper/constants';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Fonts} from '../helper/fontSize';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {H2} from '../helper/element';

  import Market from '../onboarding/market';
import Fastbuy from '../onboarding/fastbuy';
import Cart from '../onboarding/cart';
import MyOders from '../onboarding/MyOders';
import Support from '../onboarding/support';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export const Page = props => {
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState('Market');

  return (
    <Container flex={1} backgroundColor={Colors.appWhite}>
      <Container heightPercent={'89%'} width={100} >
   
        {active == 'Market' ? <Market /> : null}
        {active == 'FastBuy' ? <Fastbuy /> : null}
        {active == 'Cart' ? <Cart /> : null}
        {active == 'MyOders' ? <MyOders /> : null}
        {active == 'Support' ? <Support /> : null}

      </Container>

      <Container
        heightPercent={'11%'}
        verticalAlignment={'flex-end'}
        width={100}
        paddingHorizontal={5}
        backgroundColor={Colors.appBottomtabColor}>
        <Container
          flex={1}
          marginBottom={1}
          backgroundColor={Colors.appShadow}
          verticalAlignment={'center'}
          width={90}
          direction={'row'}
          horizontalAlignment={'space-evenly'}
          borderRadius={20}>
          <TouchWrap onPress={() => setActive('Market')}>
            <Container
              height={7}
              verticalAlignment={'center'}
              horizontalAlignment={'center'}
              width={20}>
              <Container>
                <AntDesign
                  name="home"
                  size={Fonts.semiBig}
                  color={
                    active == 'Market' ? Colors.appYellow : Colors.appWhite
                  }
                />
              </Container>
              <Container>
                <H2
                  size={Fonts.semiMedium}
                  color={
                    active == 'Market' ? Colors.appYellow : Colors.appWhite
                  }>
                  Market
                </H2>
              </Container>
            </Container>
          </TouchWrap>

          <TouchWrap onPress={() => setActive('FastBuy')}>
            <Container
              height={7}
              verticalAlignment={'center'}
              horizontalAlignment={'center'}
              width={20}>
              <Container>
                <FontAwesome5 
                  name="bolt"
                  size={Fonts.semiBig}
                  color={
                    active == 'FastBuy' ? Colors.appYellow : Colors.appWhite
                  }
                />
              </Container>
              <Container>
                <H2
                  size={Fonts.semiMedium}
                  color={
                    active == 'FastBuy' ? Colors.appYellow : Colors.appWhite
                  }>
                FastBuy
                </H2>
              </Container>
            </Container>
          </TouchWrap>

          <TouchWrap onPress={() => setActive('Cart')}>
            <Container
              height={7}
              verticalAlignment={'center'}
              horizontalAlignment={'center'}
              width={20}>
              <Container>
                <AntDesign
                  name="shoppingcart"
                  size={Fonts.semiBig}
                  color={
                    active == 'Cart' ? Colors.appYellow : Colors.appWhite
                  }
                />
              </Container>
              <Container>
                <H2
                  size={Fonts.semiMedium}
                  color={
                    active == 'Cart' ? Colors.appYellow : Colors.appWhite
                  }>
                Cart
                </H2>
              </Container>
            </Container>
          </TouchWrap>

          <TouchWrap onPress={() => setActive('MyOders')}>
            <Container
              height={7}
              verticalAlignment={'center'}
              horizontalAlignment={'center'}
              width={20}>
              <Container>
                <Ionicons
                  name="md-basket-outline"
                  size={Fonts.semiBig}
                  color={
                    active == 'MyOders' ? Colors.appYellow : Colors.appWhite
                  }
                />
              </Container>
              <Container>
                <H2
                  size={Fonts.semiMedium}
                  color={
                    active == 'MyOders' ? Colors.appYellow : Colors.appWhite
                  }>
               MyOders
                </H2>
              </Container>
            </Container>
          </TouchWrap>

          <TouchWrap onPress={() => setActive('Support')}>
            <Container
              height={7}
              verticalAlignment={'center'}
              horizontalAlignment={'center'}
              width={20}>
              <Container>
                <SimpleLineIcons
                  name="earphones-alt"
                  size={Fonts.semiBig}
                  color={
                    active == 'Support' ? Colors.appYellow : Colors.appWhite
                  }
                />
              </Container>
              <Container>
                <H2
                  size={Fonts.semiMedium}
                  color={
                    active == 'Support' ? Colors.appYellow : Colors.appWhite
                  }>
             Support
                </H2>
              </Container>
            </Container>
          </TouchWrap>

          
        </Container>
      </Container>
    </Container>
  );
};

export default Page;
