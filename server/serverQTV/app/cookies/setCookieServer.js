const SetCookieServer = (res, cookieName, ObjeckFile) => {
  res.cookie(cookieName, ObjeckFile, {
    httpOnly: true,
    secure: true,
    path: '/',
    sameSite: 'strict',
    maxAge: 23 * 60 * 60 * 1000,
  });
};
module.exports = SetCookieServer;
