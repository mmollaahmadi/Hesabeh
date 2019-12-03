import { API_BASE_URL, POLL_LIST_SIZE, ACCESS_TOKEN } from "../constants/constants";
import {USERS} from '../constants/constants'

export function doesExistUser(emailOrUsernameOrPhoneNumber) {
    let flag = false;
  // eslint-disable-next-line array-callback-return
    USERS.map((u) => {
      if(u.username === emailOrUsernameOrPhoneNumber || u.email === emailOrUsernameOrPhoneNumber){
        flag = true;
      }
    });
    return flag;
}
export function isCorrectUser(emailOrUsernameOrPhoneNumber, password){
  let flag = false;
  // eslint-disable-next-line array-callback-return
  USERS.map((u) => {
    if((u.username === emailOrUsernameOrPhoneNumber || u.email === emailOrUsernameOrPhoneNumber) &&
  u.password === password){
      flag = true;
    }
  });
  return flag;
}





const request = options => {
  const headers = new Headers({
    "Content-Type": "application/json"
  });

  if (localStorage.getItem(ACCESS_TOKEN)) {
    headers.append(
      "Authorization",
      "Bearer " + localStorage.getItem(ACCESS_TOKEN)
    );
  }

  const defaults = { headers: headers };
  options = Object.assign({}, defaults, options);

  return fetch(options.url, options).then(response =>
    response.json().then(json => {
      if (!response.ok) {
        return Promise.reject(json);
      }
      return json;
    })
  );
};

export function login(loginRequest) {
  return request({
    url: API_BASE_URL + "/auth/login",
    method: "POST",
    body: JSON.stringify(loginRequest)
  });
}
export function resetPassword(resetPasswordRequest) {
  return request({
    url: API_BASE_URL + "/auth/reset-password",
    method: "POST",
    body: JSON.stringify(resetPasswordRequest)
  });
}
export function sendResetPasswordRequestLink(usernameOrEmail) {
  return request({
    url: API_BASE_URL + "/auth/reset-password-request?usernameOrEmail=" + usernameOrEmail,
    method: "POST",
  });
}

export function register(registerRequest) {
  return request({
    url: API_BASE_URL + "/auth/register",
    method: "POST",
    body: JSON.stringify(registerRequest)
  });
}

export function editProfile(editProfileRequest) {
  return request({
    url: API_BASE_URL + "/auth/edit-profile",
    method: "POST",
    body: JSON.stringify(editProfileRequest)
  });
}

export function changePassword(changePasswordRequest) {
  return request({
    url: API_BASE_URL + "/auth/change-password",
    method: "POST",
    body: JSON.stringify(changePasswordRequest)
  });
}

export function confirmAccount(token) {
  return request({
    url: API_BASE_URL + "/auth/confirm?token=" + token,
    method: "POST"
  });
}

export function checkUsernameAvailability(username) {
  return request({
    url: API_BASE_URL + "/user/checkUsernameAvailability?username=" + username,
    method: "GET"
  });
}

export function checkEmailAvailability(email) {
  return request({
    url: API_BASE_URL + "/user/checkEmailAvailability?email=" + email,
    method: "GET"
  });
}

export function getCurrentUser() {
  if (!localStorage.getItem(ACCESS_TOKEN)) {
    return Promise.reject("No access token set.");
  }

  return request({
    url: API_BASE_URL + "/user/me",
    method: "GET"
  });
}
