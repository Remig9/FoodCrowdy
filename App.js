import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Splash from './onboarding/splash';
import Splash2 from './onboarding/splash2';
import Login from './onboarding/login';
import Openaccount from './onboarding/openaccount';
import Verify from './onboarding/verify';

import Market from './onboarding/market';
import Page from './component/Page';
import Register from './onboarding/register';
import Bucketbuy from './onboarding/bucketbuy';
import Payment from './onboarding/payment';

import MyOders from './onboarding/MyOders';
import Support from './onboarding/support';
import History from './onboarding/history'
import Processing  from './onboarding/processing';
import Openticket from './onboarding/openticket';
import Newticket from './onboarding/newticket';

//import {RouteContext} from './helper/route_context'

const App = () => {

  const Stack = createStackNavigator();

  const AuthStack = () => (
    <Stack.Navigator headerMode={null}>
     
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Splash2" component={Splash2} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Openaccount" component={Openaccount} />
      <Stack.Screen name="Verify" component={Verify} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Page" component={Page} />
      <Stack.Screen name=" Bucketbuy" component={ Bucketbuy} />
   
      <Stack.Screen name=" MyOders" component={ MyOders} />
      <Stack.Screen name=" Support" component={  Support} />
      <Stack.Screen name="History" component={History} />
      <Stack.Screen name="Processing" component={Processing} />
      <Stack.Screen name="Openticket" component={Openticket} />
      <Stack.Screen name="Newticket" component={Newticket} />
    </Stack.Navigator>
  );

  return (
    <NavigationContainer>s
      <AuthStack />
    </NavigationContainer>
  );
};
export default App;
