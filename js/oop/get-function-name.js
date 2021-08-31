function requestWithLogging(eventName) {
  return new Promise((res) => {
    setTimeout(() => res('ok', eventName));
  });
}

class UserInfoService {
  constructor() {}

  async getUserInfo(eventName) {
    return await requestWithLogging(eventName);
  }
}

const userInfoService = new UserInfoService();

userInfoService
  .getUserInfo(userInfoService.constructor.name)
  .then((res) => console.log(res));
