---
title: How To Solve Duplicate Content On Blog
description: How To Solve Duplicate Content On Blog Duplicate content is to
  duplicate the title and description of the content in a blog which is
author: Unknown
url: https://www.webmanajemen.com/2017/04/how-to-solve-duplicate-content-on-blog.html
date: 2017-04-23T16:00:13+07:00
updated: 2017-04-23T09:00:00.000Z
thumbnail: https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQa1lm1EI1a4kQStyHaoRq2LTQ3iHdj3CuE8YfEqS3-jKcycvJfOP44cSUy_A
cover: https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQa1lm1EI1a4kQStyHaoRq2LTQ3iHdj3CuE8YfEqS3-jKcycvJfOP44cSUy_A
---

<hr/> [THIS SITE IS MIRROR](https://www.webmanajemen.com/2017/04/how-to-solve-duplicate-content-on-blog.html) || <a href="https://www.webmanajemen.com/2017/04/how-to-solve-duplicate-content-on-blog.html" rel="follow" class="button" id="read-more">Skip to Full Contents (Read More)</a> <hr/> How To Solve Duplicate Content On Blog - How To Solve Duplicate Content On Blog Duplicate content is to duplicate the title and description of the content in a blog which is How To Solve Duplicate Content On Blog 



Duplicate content is to duplicate the title and description of the content in a blog which is  caused by the emergence of two or more URLs, but leads to a page or the  same content. Duplicate content may also occur as a result of an article in  Copas from other blogs and published again, even though the URL is  different but the title and its contents remain the same without any  modification is said to duplicate it contains. Duplicate content should be  avoided as the scatter machines or engines really do not like pengandaan  content.  
Why Search Engines do not like duplicate content? 
Search Engines do not like duplicate content for Search Engine will be   difficult and confused select or specify which content should be in the   index and appear in search engines.  
And Duplicate Content How to Overcome itself? 
  
  One way to deal with duplicate content is not lazy to make the article, it  means do not copy and paste articles published people to return to your  blog because it was futile and extremely detrimental to those who make the  article itself.So make original content for the search engines love  articles that are original made your own.  
Another method that can be applied in your blog to avoid duplicate content  is as follows:  


   Duplicate content caused by the blog archives.   

examples from the archives blog url:  
http://yourblog.blogspot.com/2015_03_01_archive.html 
if the url is in the index, there will be duplicate contains.  
to fix this please put the meta tag below under the <head>  
<b: if cond = 'data: blog.pageType == & quot; archive &   quot;'> <meta content = "noindex, nofollow 'name =' robots '/>   <meta content =" noindex, nofollow' name = 'Googlebot' /> </   b: if>  
Or it could also activate custom robots header tags. 
how to open the "Settings"> "search preferences will" enable plainly  "Custom robots header tags" and menyetingnya like image below:
  
                      
    Custom robots header tags         
 

   Duplicate content caused by label blog   

examples of label blog url:  
http://yourblog.blogspot.com/search/label/blogging  
together with problems in the archives of the blog if the URL in the index  then there is duplicate content.  
how to overcome them by putting meta TEG below under the <head>  
<b: if cond = 'data: blog.pageType == & quot; index &   quot;'> <b: if cond = 'data: blog.searchLabel'> <meta   content = "noindex, nofollow 'name =' robots' /> <meta content =   "noindex, nofollow 'name =' googlebot '/> </ b: if> </ b:   if>  


   The last way is to put a meta tag below under the <head>   

<link expr: href = 'data: blog.url' rel = 'canonical' />  
goal to put the meta TEG is to instruct the only search engine to index a  page url that is uncharacteristic course.  


   Duplicate content caused by the blog page in the open from the    mobile version.   
To cope with robots.txt activate and store the code below in your  robots.txt.  
User-agent: Mediapartners-Google   
Disallow:   
User-agent: Googlebot   
Disallow: / search   
Disallow: /? M = 1   
Disallow: /? M = 0   
Disallow: / *? M = 1   
Disallow: / *? M = 0   
User-agent: *   
Disallow: / search   
Sitemap:   http://urlbloganda.blogspot.com/feeds/posts/default?orderby=UPDATED  
This method is very helpful in addressing duplicate content but you must be  careful or consider using this way because this way is not very mobile  friendly.  
robots.txt this section is not mobile-friendly:  
Disallow: /? M = 1  
Disallow: /? M = 0  
Disallow: / *? M = 1  
Disallow: / *? M = 0  
meaning your content will not be in the index in the mobile version that  causes a decrease in traffic to your blog.  
Those are some ways to cope with duplicate content on your blog. <hr/> [THIS SITE IS MIRROR](https://www.webmanajemen.com/2017/04/how-to-solve-duplicate-content-on-blog.html) || <a href="https://www.webmanajemen.com/2017/04/how-to-solve-duplicate-content-on-blog.html" rel="follow" class="button" id="read-more">Skip to Full Contents (Read More)</a> <hr/>