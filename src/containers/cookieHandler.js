// method to set the cookie
export const setCookie = (name ,value, expiryMinutes) => {
    const date = new Date();
    date.setTime(date.getTime() + expiryMinutes * 60 * 1000);
    const expires = 'expires=' + date.toUTCString();
    document.cookie = name + '=' + value + ';' + expires + ';path=/';
  };
  
  // method to get the cookie
  export const getCookie = (searchName) => {
    const name = searchName + '=';
    const cookies = document.cookie.split(';');
    for (const indvCookie of cookies) {
      let cookie = indvCookie;
      while (cookie.charAt(0) === ' ') {
        cookie = indvCookie.substring(1);
      }
      if (cookie.indexOf(name) === 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }
    return '';
  };
  
  // method to check the cookie token is there or not 
  export const checkCookie = (searchName) => {
    const user = getCookie(searchName);
    if (user !== '') {
      return true;
    } else {
      return false;
    }
  };
  