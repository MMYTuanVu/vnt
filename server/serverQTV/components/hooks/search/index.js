const removeVietnameseTones = (str) => {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  str = str.replace(/đ/g, 'd');
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A');
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E');
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I');
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O');
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U');
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y');
  str = str.replace(/Đ/g, 'D');
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, '');
  str = str.replace(/\u02C6|\u0306|\u031B/g, '');
  str = str.replace(/ + /g, ' ');
  str = str.trim();
  str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, ' ');
  return str;
};
function stringChange(string) {
  let newText = '';
  removeVietnameseTones(string.toLowerCase().trim(' '))
    .split(' ')
    .map((init) => {
      if (init != ' ' && init != '') newText += init;
    });
  return newText;
}
const removeString = (strs) => {
  function removeRM(str, value) {
    let n = '';
    const s = str.split(value);
    s.map((i) => {
      if (i != '') {
        n += i;
      }
    });
    return n;
  }
  let str = stringChange(strs);
  str = removeVietnameseTones(str);
  str = removeRM(str, 'q');
  str = removeRM(str, 'w');
  str = removeRM(str, 'e');
  str = removeRM(str, 'r');
  str = removeRM(str, 't');
  str = removeRM(str, 'y');
  str = removeRM(str, 'u');
  str = removeRM(str, 'i');
  str = removeRM(str, 'o');
  str = removeRM(str, 'p');
  str = removeRM(str, 'a');
  str = removeRM(str, 's');
  str = removeRM(str, 'd');
  str = removeRM(str, 'f');
  str = removeRM(str, 'g');
  str = removeRM(str, 'h');
  str = removeRM(str, 'j');
  str = removeRM(str, 'k');
  str = removeRM(str, 'l');
  str = removeRM(str, 'z');
  str = removeRM(str, 'x');
  str = removeRM(str, 'c');
  str = removeRM(str, 'v');
  str = removeRM(str, 'b');
  str = removeRM(str, 'n');
  str = removeRM(str, 'm');
  str = removeRM(str, 'z');
  str = removeRM(str, 'z');
  str = removeRM(str, 'z');
  str = removeRM(str, 'z');
  str = removeRM(str, 'z');
  str = removeRM(str, 'z');
  str = removeRM(str, 'z');
  return str;
};
function changeDefault(string, value, defaul) {
  //changeDefault(string, str, 'Email-Gmail- - ')
  if (stringChange(value) === ' ' || stringChange(value) === '') {
    return -1;
  }
  const [Defaul1, Defaul2, Defaul3, Defaul4] = defaul.trim(' ').split('-');
  const Defaul = {
    vn: stringChange(Defaul1) + stringChange(Defaul3),
    en: stringChange(Defaul2) + stringChange(Defaul4),
    vnTitle: stringChange(Defaul1),
    enTitle: stringChange(Defaul2),
  };
  if (string.indexOf(value) > -1) {
    return string.indexOf(value);
  } else if (stringChange(value).indexOf(Defaul.vn) > -1) {
    return stringChange(string).indexOf(stringChange(value).replace(Defaul.vn, ''));
  } else if (stringChange(value).indexOf(Defaul.vnTitle) > -1) {
    return stringChange(string).indexOf(stringChange(value).replace(Defaul.vnTitle, ''));
  } else if (stringChange(value).indexOf(Defaul.en) > -1) {
    return stringChange(string).indexOf(stringChange(value).replace(Defaul.en, ''));
  } else if (stringChange(value).indexOf(Defaul.enTitle) > -1) {
    return stringChange(string).indexOf(stringChange(value).replace(Defaul.enTitle, ''));
  } else {
    let newValueNo = '';
    let newStringNo = '';
    string
      .trim(' ')
      .split(' ')
      .map((init) => {
        if (init != ' ' && init != '') newStringNo += init;
      });
    value
      .trim(' ')
      .split(' ')
      .map((init) => {
        if (init != ' ' && init != '') newValueNo += init;
      });
    let newValue = '';
    let newString = '';
    string
      .trim(' ')
      .split(' ')
      .map((init) => {
        if (init != ' ' && init != '') newString += init;
      });
    value
      .trim(' ')
      .split(' ')
      .map((init) => {
        if (init != ' ' && init != '') newValue += init;
      });
    if (newString.toLowerCase().indexOf(newValue.toLowerCase()) > -1) {
      return 1;
    } else {
      return stringChange(newString).indexOf(stringChange(newValue));
    }
  }
}
function changePrice(string, value, defaul, price) {
  const String = removeString(string);
  const Value = stringChange(value);
  const Price1 = stringChange(price.split('-')[0]);
  const Price2 = stringChange(price.split('-')[1]);
  const Default = stringChange(defaul.split('-')[0] + defaul.split('-')[1]);
  const DefaultOne = stringChange(defaul.split('-')[0]);
  if (string.indexOf(value) > -1) {
    return 1;
  } else if (Value.indexOf(Default) > -1) {
    let x = Value.replace(Default, '');
    if (x.indexOf(Price1) > -1) {
      const n = Number(x.split(Price1)[0] + '000');
      const nn = Number(Number(Number(x.split(Price1)[0]) + 20) + '000');
      const nstr = Number(String);
      if (n <= nstr && nstr < nn) {
        return 2;
      } else {
        return -1;
      }
    } else if (x.indexOf(Price2) > -1) {
      const m = Number(x.split(Price2)[0] + '000000');
      const mm = Number(Number(Number(x.split(Price2)[0]) + 0.2) + '000000');
      const mstr = Number(String);
      if (m <= mstr && mstr < mm) {
        return 2;
      } else {
        return -1;
      }
    }
  } else if (Value.indexOf(DefaultOne) > -1) {
    let x = Value.replace(DefaultOne, '');
    if (x.indexOf(Price1) > -1) {
      const n = Number(x.split(Price1)[0] + '000');
      const nn = Number(Number(Number(x.split(Price1)[0]) + 20) + '000');
      const nstr = Number(String);
      if (n <= nstr && nstr < nn) {
        return 3;
      } else {
        return -1;
      }
    } else if (x.indexOf(Price2) > -1) {
      const m = Number(x.split(Price2)[0] + '000000');
      const mm = Number(Number(Number(x.split(Price2)[0]) + 0.2) + '000000');
      const mstr = Number(String);
      if (m <= mstr && mstr < mm) {
        return 3;
      } else {
        return -1;
      }
    }
  }
}
const Searchs = {
  changeDefault,
  changePrice,
};
module.exports = Searchs;
