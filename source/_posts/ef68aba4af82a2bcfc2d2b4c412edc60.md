---
title: CSS Sticky Fixed Footer
description: Header
author: noreply@blogger.com (Unknown)
url: https://www.webmanajemen.com/2017/09/css-sticky-fixed-footer.html
date: 2017-09-06T06:47:00.000Z
updated: 2017-09-06T06:47:00.000Z
---

The CSS
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
top:expression((0-(footer.offsetHeight)+(document.documentElement.clientHeight
? document.documentElement.clientHeight :
document.body.clientHeight)+(ignoreMe =
document.documentElement.scrollTop ?
document.documentElement.scrollTop :
document.body.scrollTop))+'px');
}
Demo:
Check This Footer Page
#tall,.tall{height:50px;background:salmon} div#footer.example { position:fixed; left:0px; bottom:0px; height:30px; width:100%; background:#999; } /* IE 6 */ * html div#footer.example { position:absolute; top:expression((0-(footer.offsetHeight)+(document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.clientHeight)+(ignoreMe = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop))+'px'); } .translate,#translate{display:none} 
Header
Content
THE STICKY WILL BE APPEARED ON BOTTOM THIS PAGE
Footer Sticky
Additional Content
Done. I Hope this article (CSS sticky Fixed Footer) be help you
Incoming Terms: CSS Sticky Footer | Fixed Footer | CSS Sticky Bottom Page | Sticky Bottom Fixed | Sticky Fixed Bottom | CSS Sticky<hr/> <a href="https://www.webmanajemen.com/2017/09/css-sticky-fixed-footer.html" rel="follow" class="button" id="read-more">Read More</a>