import axios from 'axios';
import {endPoint} from './baseUrl';
import {getData} from './storage';

export const axiosCalls = async (path, method, data = null) => {
  console.log(global.token);

  const token = await getData('token');
  const parsedUser = JSON.parse(token);
  console.warn('userData', parsedUser);

  try {
    console.warn('path', path, method);
    console.warn('path>>>>>>>', `${endPoint}${path}`);
    let res = await axios({
      method: method,
      url: `${endPoint}${path}`,
      data: data,
      headers: {Authorization: `Bearer ${parsedUser}`},
    });
    if (res) {
      return res;
    }
  } catch (err) {
    console.log('call err', err.response.data);

    return {er: err.response.data};
  }

  // if (data) {
  //   console.log(path, method, data);
  // }
  // try {
  //   let res = await axios({
  //     method,
  //     url: path,
  //     data,
  //     headers: {Authorization: global.token},
  //   });
  //   if (res) {
  //     // console.log("call res", res.data);

  //     return res.data;
  //   }
  // } catch (err) {
  //   console.log('call err', err.response.data);

  //   return {er: err.response.data};
  // }
};
export const axiosCallsNoAuth = async (path, method, data = null) => {
  try {
    console.warn('path', path, method);
    console.warn('path>>>>>>>', `${endPoint}${path}`);
    let res = await axios({
      method: method,
      url: `${endPoint}${path}`,
      data: data,
    });
    if (res) {
      return res;
    }
  } catch (err) {
    console.log('call err', err.response.data);

    return {er: err.response.data};
  }
};
