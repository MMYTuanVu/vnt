function RemoveCookie(res, name1, name2, name3, name4, name5) {
  if (name1) {
    res.clearCookie(name1, { path: '/' });
  }
  if (name2) {
    res.clearCookie(name2, { path: '/' });
  }
  if (name3) {
    res.clearCookie(name3, { path: '/' });
  }
  if (name4) {
    res.clearCookie(name4, { path: '/' });
  }
  if (name5) {
    res.clearCookie(name5, { path: '/' });
  }
}
module.exports = RemoveCookie;
