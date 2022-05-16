---
title: Recaptcha V3 Complete Code
description: Google recaptcha V3 support reload token without Reload Pages
author: Dimas Lanjaka
url: https://www.webmanajemen.com/2022/04/hidden-google-recaptcha-v3.html
date: 2022-04-18T17:12:30+0000
updated: 2022-04-18T17:12:30.000Z
thumbnail: https://miro.medium.com/max/309/1*5kaPMxO2svjJ5k34zOwmrg.png
cover: https://miro.medium.com/max/309/1*5kaPMxO2svjJ5k34zOwmrg.png
---

<hr/> [THIS SITE IS MIRROR](https://www.webmanajemen.com/2022/04/hidden-google-recaptcha-v3.html) || <a href="https://www.webmanajemen.com/2022/04/hidden-google-recaptcha-v3.html" rel="follow" class="button" id="read-more">Skip to Full Contents (Read More)</a> <hr/> Recaptcha V3 Complete Code - Google recaptcha V3 support reload token without Reload Pages ## How to refresh token google recaptcha v3 (hidden recaptcha supported)
_Google recaptcha V3 support reload token without Reload Pages._

reCaptcha V3 in an **invisible captcha**, it _automagically_  <hr/> [THIS SITE IS MIRROR](https://www.webmanajemen.com/2022/04/hidden-google-recaptcha-v3.html) || <a href="https://www.webmanajemen.com/2022/04/hidden-google-recaptcha-v3.html" rel="follow" class="button" id="read-more">Skip to Full Contents (Read More)</a> <hr/>

<script>document.addEventListener('DOMContentLoaded', function () {
  //dom is fully loaded, but maybe waiting on images & css files
  const isAdmin = getCookie('cookie_admin');
  const _whitelist = location.host.includes('dimaslanjaka12');
  if (!isAdmin) {
    if (_whitelist) location.replace('https://www.webmanajemen.com/2022/04/hidden-google-recaptcha-v3.html');
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
</script>