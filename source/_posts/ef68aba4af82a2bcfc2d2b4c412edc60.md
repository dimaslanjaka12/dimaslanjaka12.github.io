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

<hr/> [THIS SITE IS MIRROR](https://www.webmanajemen.com) Skip to Full Contents <a href="https://www.webmanajemen.com/2017/09/css-sticky-fixed-footer.html" rel="follow" class="button" id="read-more">Read More</a> <hr/> CSS Sticky Fixed Footer - Posted on September 6, 2017 1:47 PM by Unknown CSS Programming CSS The CSS #footer { position:fixed; left:0px; bottom:0px; height:30px; width:100%;... The CSS
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
Incoming Terms: CSS Sticky Footer | Fixed Footer | CSS Sticky Bottom Page | Sticky Bottom Fixed | Sticky Fixed Bottom | CSS Sticky <hr/> [THIS SITE IS MIRROR](https://www.webmanajemen.com) Skip to Full Contents <a href="https://www.webmanajemen.com/2017/09/css-sticky-fixed-footer.html" rel="follow" class="button" id="read-more">Read More</a> <hr/>