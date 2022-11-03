import Cookie from 'js-cookie';
const SetCookie = (cookieName, ObjeckFile) => {
  Cookie.set(cookieName, ObjeckFile, {
    expires: 2,
    path: '/',
    Secure: true,
    sameSite: 'Strict',
  });
};
export default SetCookie;
