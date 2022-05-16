---
title: JQuery Tutorial Auto Hyperlinking Plaintext URL
description: Links are found in nearly all web pages. Links allow users to click
  their way from page to page.
author: Unknown
url: https://www.webmanajemen.com/2017/07/jquery-tutorial-auto-hyperlinking.html
date: 2019-07-22T03:23:17+07:00
updated: 2017-07-31T05:08:00.000Z
thumbnail: https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png
cover: https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png
---

<hr/> Skip to Full Contents <a href="https://www.webmanajemen.com/2017/07/jquery-tutorial-auto-hyperlinking.html" rel="follow" class="button" id="read-more">Read More</a> <hr/> JQuery Tutorial Auto Hyperlinking Plaintext URL - Links are found in nearly all web pages. Links allow users to click their way from page to page. Links are found in nearly all web pages. Links allow users to click their way from page to page.

HTML Links - Hyperlinks
HTML links are hyperlinks.
You can click on a link and jump to another document.
When you move the mouse over a link, the mouse arrow will turn into a little hand.

Note: A link does not have to be text. It can be an image or any other HTML element.

HTML Links - Syntax
In HTML, links are defined with the <a> tag:

<a href="url">link text</a>

Problem: How to Auto Convert Plaintext URL (http://example.net) to hyperlinked URL (<a href="http://example.net/">example.net</a>) Using jQuery/JavaScript ?
Let's begun:
now iam using this codes (jQuery):
// Auto Hyperlinker
$('#feed').ready(function(){ //parent container
    // Get each div
    $('.content').each(function(){ //contents container
        // Get the content
        var str = $(this).html();
        // Set the regex string
        var regex = /(https?:\/\/([-\w\.]+)+(:\d+)?(\/([\w\/_\.]*(\?\S+)?)?)?)/ig
        // Replace plain text links by hyperlinks
        var replaced_text = str.replace(regex, "<a href='$1' target='_blank'>$1</a>");
        // Echo link
        $(this).html(replaced_text);
    });
});

Description:
('#feed') = is an ID parent of contents container
Example:
<div id="feed">
<div class="content">
</div></div>
('.content') = is an class container of your contents.
Example:
<div class="content">
<p>hello world. This is an example of my article</p>
...
..
</div>

This Demonstration:

Hey visit us at http://www.laelitenetwork.com
Check out http://8elite.com and follow us
Look ma! no links http://en.8elite.com
// Check the main container is ready $('#feed').ready(function(){     // Get each div     $('.content').each(function(){         // Get the content         var str = $(this).html();         // Set the regex string         var regex = /(https?:\/\/([-\w\.]+)+(:\d+)?(\/([\w\/_\.]*(\?\S+)?)?)?)/ig         // Replace plain text links by hyperlinks         var replaced_text = str.replace(regex, "$1");         // Echo link         $(this).html(replaced_text);     }); }); 

Or See this full codes on: JsFiddle <hr/> Skip to Full Contents <a href="https://www.webmanajemen.com/2017/07/jquery-tutorial-auto-hyperlinking.html" rel="follow" class="button" id="read-more">Read More</a> <hr/>