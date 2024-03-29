import {USERS} from '../constants/constants'

export function getLabelsOfUsers(userID) {
  let labels = [];
  USERS.forEach(user => {
    if(user.id === userID){
      labels = user.labels;
    }
  });
  return labels;
}
export function getPaymentsOfUsers(userID) {
  let payments = [];
  USERS.forEach(user => {
    if(user.id === userID){
      payments = user.payments;
    }
  });
  return payments;
}
export function getFinanceAccountOfUser(userID) {
  let financeAccount = null;
  USERS.forEach(user => {
    if(user.id === userID){
      financeAccount = user.financeAccount;
    }
  });
  return financeAccount;
}
export function getDefaultOrders(userID) {
  let defaultOrders = null;
  USERS.forEach(user => {
    if(user.id === userID){
      defaultOrders = user.defaultOrders;
    }
  });
  return defaultOrders;
}
export function getGroupsOfUsers(userID) {
  let groups = null;
  USERS.forEach(user => {
    if(user.id === userID){
      groups = user.groups;
    }
  });
  return groups;
}
export function getUser(userID) {
  let _user = null;
  USERS.forEach(user => {
    if(user.id === userID){
      _user = {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
      };
    }
  });
  return _user;
}