---
title: Complete the External Link immediately with the Noopener Rail
description: If you add an external link in the template or in the post and use
  the target_blank attribute, then immediately complete the
author: Dimas Lanjaka Kumala Indra
url: https://www.webmanajemen.com/2019/12/complete-external-link-immediately-with.html
date: 2019-12-18T01:16:03+07:00
updated: 2019-12-17T18:16:00.000Z
thumbnail: https://imgcdn.000webhostapp.com/https/2.bp.blogspot.com/514cc0b2c6a504375873f242e193fc29.jpeg
cover: https://imgcdn.000webhostapp.com/https/2.bp.blogspot.com/514cc0b2c6a504375873f242e193fc29.jpeg
---

<hr/> [THIS SITE IS MIRROR](https://www.webmanajemen.com/2019/12/complete-external-link-immediately-with.html) || <a href="https://www.webmanajemen.com/2019/12/complete-external-link-immediately-with.html" rel="follow" class="button" id="read-more">Skip to Full Contents (Read More)</a> <hr/> Complete the External Link immediately with the Noopener Rail - If you add an external link in the template or in the post and use the target_blank attribute, then immediately complete the If you add an external link in the template or in the post and use the target="_blank" attribute, then immediately complete the rel="noopener" on the links. 
  Looks like this is still not much known by bloggers (including me who just found out hehehe ...). 
  When we link other web pages to our blog page using target="_blank" , the new page process that runs in the browser's new window is the same as our page process.  If the new page is executing heavy JavaScript, then the performance of our blog pages can also be affected.  Oops ... it turned out to be so impactful ... 
  The target="_blank" attribute on external links is also vulnerable.  The new page has access to the window object through window.opener , and can direct our page to a different URL using window.opener.location = newURL . 
  For that, please fix the external link that uses target="_blank" on your blog by adding the rel="noopener" like the following example: 

  <a href="http://www.domainLain.com/"  rel="noopener" target="_blank" title="Domain Lain">Domain Lain</a>

  If combined with rel="nofollow" the writing is as follows: 

  <a href="http://www.domainLain.com/" rel=" nofollow noopener" target="_blank" title="Domain Lain">Domain Lain</a>


  May be useful. <hr/> [THIS SITE IS MIRROR](https://www.webmanajemen.com/2019/12/complete-external-link-immediately-with.html) || <a href="https://www.webmanajemen.com/2019/12/complete-external-link-immediately-with.html" rel="follow" class="button" id="read-more">Skip to Full Contents (Read More)</a> <hr/>