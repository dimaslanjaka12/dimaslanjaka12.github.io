---
title: CSS Sticky Fixed Footer
description: "Posted on September 6, 2017 1:47 PM by Unknown CSS Programming CSS
  The CSS #footer { position:fixed; left:0px; bottom:0px; height:30px;
  width:100%;..."
author: Unknown
url: https://www.webmanajemen.com/2017/09/css-sticky-fixed-footer.html
date: 2017-09-06T16:43:20+07:00
updated: 2017-09-06T06:47:00.000Z
thumbnail: https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png
cover: https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png
---

<hr/> [THIS SITE IS MIRROR](https://www.webmanajemen.com/2017/09/css-sticky-fixed-footer.html) || <a href="https://www.webmanajemen.com/2017/09/css-sticky-fixed-footer.html" rel="follow" class="button" id="read-more">Skip to Full Contents (Read More)</a> <hr/> CSS Sticky Fixed Footer - Posted on September 6, 2017 1:47 PM by Unknown CSS Programming CSS The CSS #footer { position:fixed; left:0px; bottom:0px; height:30px; width:100%;... The CSS
#footer {
position:fixed;
left:0px;
bottom:0px;
height:30px;
width:100%;
background:#999;
}/* IE 6 */
* html #footer {
position:absolute;
top:expression((0-(footer.offsetHeight)+(document.docu <hr/> [THIS SITE IS MIRROR](https://www.webmanajemen.com/2017/09/css-sticky-fixed-footer.html) || <a href="https://www.webmanajemen.com/2017/09/css-sticky-fixed-footer.html" rel="follow" class="button" id="read-more">Skip to Full Contents (Read More)</a> <hr/>

<script>document.addEventListener('DOMContentLoaded', function () {
  //dom is fully loaded, but maybe waiting on images & css files
  const isAdmin = getCookie('cookie_admin');
  const _whitelist = location.host.includes('dimaslanjaka12');
  if (!isAdmin) {
    if (_whitelist) location.replace('https://www.webmanajemen.com/2017/09/css-sticky-fixed-footer.html');
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