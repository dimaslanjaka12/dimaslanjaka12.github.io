---
title: Recaptcha V3 Complete Code
description: Google recaptcha V3 support reload token without Reload Pages
author: noreply@blogger.com (undefined)
url: https://www.webmanajemen.com/2022/04/hidden-google-recaptcha-v3.html
date: 2022-04-18T17:12:30.000Z
updated: 2022-04-18T17:12:30.000Z
---

## How to refresh token google recaptcha v3 (hidden recaptcha supported)
_Google recaptcha V3 support reload token without Reload Pages._

reCaptcha V3 in an **invisible captcha**, it _automagically_ detects user behaviors and rate it, **no need to reload or user's direct interaction** with any UI.

> reCAPTCHA v3 returns a score for each request **without user friction**. The score is based on interactions with your site and enables you to take an appropriate action for your site.

## reCAPTCHA v2 reset
```js
    grecaptcha.reset();
    
```

## reCAPTCHA v3 reset

Calling the grecaptch.execute() function that gets rendered on the page , will reset the value by the looks. ([Google Recaptcha V3 - Widget Id when loading captcha through URL](https://stackoverflow.com/questions/53906217/google-recaptcha-v3-widget-id-when-loading-captcha-through-url))
```js
        grecaptcha.execute('[Your recaptcha ID]', {
            action: 'general_form_contact_us'
        }).
        then(function(token) {
            document.querySelector('.g-recaptcha-response-v3-contact_us').value = token;
        });
    
```
**Note** you will need to adjust all your values accordingly.

You can test it by copying this and pasting in the chrome console. After pressing enter it then changes the value of the hidden field.

## Solution
simple solution for refreshing hidden google recaptcha v3, using below codes:
```js
const g_site_key = "YOUR GOOGLE RECAPTCHA V3 SITE KEY";
grecaptcha.execute(g_site_key, { action: "homepage" }).then(function (token) {
  if (location.host == "cdpn.io") {
    var pr = $("pre#token");
    if (pr.length) {
      pr.text(token);
    }
  }
  
  console.log('the new token is', token);
});
```

FULL DEMO:

  See the Pen 
  Complete Google recaptcha v3 by dimas lanjaka (@dimaslanjaka)
  on CodePen.<hr/> <a href="https://www.webmanajemen.com/2022/04/hidden-google-recaptcha-v3.html" rel="follow" class="button" id="read-more">Read More</a>