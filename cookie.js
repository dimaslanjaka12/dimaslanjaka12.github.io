/* eslint-disable no-undef */
(function () {
  console.clear();
  formsaver();
})();

$('#create').on('submit', function (e) {
  e.preventDefault();
  //var form = $(this);
  //var url = form.attr('action');
  var data = $(this).serialize().split('&');
  //console.log(data);
  var obj = {};
  for (var key in data) {
    console.log(data[key]);
    obj[data[key].split('=')[0]] = data[key].split('=')[1];
  }
  setCookie(`cookie_${obj.name}`, obj.value, 60);
  //console.log(obj);
});
$('#deleteAllCookie').on('click', function (e) {
  e.preventDefault();
  deleteAllCookies();
});

console.clear();
var browserData = {};
$.get('https://www.cloudflare.com/cdn-cgi/trace', function (data) {
  const object1 = data.split('\n');
  object1.forEach((element) => {
    var key = element.split('=')[0];
    var value = element.split('=')[1];
    //console.log(key, value);
    browserData[key] = value;
  });
  //console.log(browserData);
});

setInterval(() => {
  var tobeprinted = getCookies();
  tobeprinted.localStorageAvailable = localStorageAvailable();
  tobeprinted.userAgent = navigator.userAgent;
  tobeprinted.ip = browserData.ip;
  $('#allcookies').text(JSON.stringify(tobeprinted, null, 4));
}, 1000);

function getCookies() {
  const unescape = window.unescape || window.decodeURI;
  const pairs = document.cookie.split(';');
  const cookies = {};
  for (var i = 0; i < pairs.length; i++) {
    const pair = pairs[i].split('=');
    cookies[(pair[0] + '').trim()] = unescape(pair.slice(1).join('='));
  }
  return cookies;
}

function setCookie(cname, cvalue, minutes) {
  var d = new Date();
  d.setTime(d.getTime() + minutes * 60 * 1000);
  var expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}

function localStorageAvailable() {
  var test = 'test';
  try {
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
}

function deleteAllCookies() {
  var cookies = document.cookie.split(';');

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf('=');
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
  }
}
