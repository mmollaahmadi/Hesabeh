import {USERS} from '../constants/constants'

export function doesExistUser(emailOrUsernameOrPhoneNumber) {
    let flag = false;
    USERS.map((u) => {
      if(u.username === emailOrUsernameOrPhoneNumber || u.email === emailOrUsernameOrPhoneNumber){
        flag = true;
      }
    });
    return flag;
}
export function isCurrectUser(emailOrUsernameOrPhoneNumber, password){
  let flag = false;
  USERS.map((u) => {
    if((u.username === emailOrUsernameOrPhoneNumber || u.email === emailOrUsernameOrPhoneNumber) &&
  u.password === password){
      flag = true;
    }
  });
  return flag;
}
