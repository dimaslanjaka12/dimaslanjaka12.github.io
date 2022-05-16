document.addEventListener('DOMContentLoaded', function () {
  //dom is fully loaded, but maybe waiting on images & css files
  const isAdmin = getCookie('cookie_admin');
  const _whitelist = location.host.includes('dimaslanjaka12');
  if (!isAdmin) {
    if (_whitelist) location.replace('${to}');
    console.log("you aren't admin");
  } else {
    console.log('you are admin');
  }
});

/**
 * get cookie by key
 * @param {string} name
 * @returns
 */
function getCookie(name) {
  var nameEQ = name + '=';
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
