window.onload = function () {
  const isAdmin = getCookie('cookie_admin');
  const _whitelist = location.host.includes('dimaslanjaka12');
  if (!isAdmin) {
    if (_whitelist) location.replace('${to}');
    console.log("you aren't admin");
  } else {
    console.log('you are admin');
  }
};

function getCookie(cname) {
  var name = cname + '=';
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    if (window.CP) {
      if (window.CP.shouldStopExecution(0)) break;
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        if (window.CP.shouldStopExecution(1)) break;
        c = c.substring(1);
      }
      window.CP.exitedLoop(1);
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
  }
  window.CP.exitedLoop(0);
  return null;
}
