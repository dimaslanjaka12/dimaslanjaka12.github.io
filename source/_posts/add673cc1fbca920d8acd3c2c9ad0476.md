---
title: How to Fix Structured Data Errors in Blogger
description: How to Fix Structured Data Errors in Blogger 100 Fix Use Schema
  Markup - Boost Your SEO Be it Google or the
author: noreply@blogger.com (Unknown)
url: https://www.webmanajemen.com/2017/05/how-to-fix-structured-data-errors-in-blogger.html
date: 2017-05-07T06:05:00.000Z
updated: 2017-05-07T06:05:00.000Z
---

How to Fix Structured Data Errors in Blogger: 100% Fix 



            
        Use Schema Markup - Boost Your SEO     
Be it Google or the other search engine, all of them need to know,         however your knowledge is organized. however it ought to be         categorised. Structured knowledge markup may be a universally shared         markup vocabulary that helps search engines higher perceive the net         contents and deliver the most effective relevant knowledge results for         user's question.     
Marketers will not afford to easily ignore structured knowledge as a         result of this Google tool can truly improve search ends up in major         search engines. made Snippets square measure Google's means of         reshaping however the search results square measure displayed. This         step enabled the search-pages get a full New Look. It additionally         helps users realize additional info on an outsized style of subjects,         concerning folks, reviews etc.     
        3 Steps to Fix Blogger Structured Data Errors     
        
Step 1: Find the Keyword position     
Step 2: Comment the Existing Markup. How to comment in HTML?     
Let consider we need to comment <meta         expr:content='data:blog.metaDescription' itemprop='description'/>.         Introduce <!-- --> to comment HTML. Eg: <!-- <meta         expr:content='data:blog.metaDescription' itemprop='description'/>         --> is commented.
Step 3: Paste the Proposed Markup below the commented code. Now         let’s start Fixing our Blog.     
        Add additional data to Blog Schema     
    
Step 1: CTRL+F →                     http://schema.org/Blog             
Step 2: Existing markup: To be commented     
<div itemscope='itemscope' itemtype='http://schema.org/Blog' style='display: none;'>
<meta expr:content='data:blog.title' itemprop='name'/>
<b:if cond='data:blog.metaDescription'>
<meta expr:content='data:blog.metaDescription' itemprop='description'/>
</b:if>
</div>
Step 3: Proposed markup: To be pasted     
<div itemscope='itemscope' itemtype='http://schema.org/Blog' style='display: none;'>
<meta expr:content='data:blog.title' itemprop='name'/>
<meta content='YOUR NAME' itemprop='creator'/>
<b:if cond='data:blog.metaDescription'>
<meta expr:content='data:blog.metaDescription' itemprop='description'/>
</b:if>
<meta content='LOGO URL' itemprop='image'/>
</div>
        Fix Blogger Blog ID, Post ID Errors in Structured Data     
            
Step 1: CTRL+F → data:blog.blogId     
You may find this keyword in 2 places. Do the following change in both         the places.     
Step 2: Existing markup: To be commented     
<meta expr:content='data:blog.blogId' itemprop='blogId'/>
<meta expr:content='data:post.id' itemprop='postId'/>
Step 3: Proposed markup: To be pasted     
<meta expr:content='data:blog.blogId'/>
<meta expr:content='data:post.id'/>
        Fix Headline Missing Blogger Structured Data Error     
    
Step 1: CTRL+F → post-title entry-title     
You may find this keyword in 2 places. Do the following change in both         the places.     
Step 2: Existing markup: To be commented     
<h3 class='post-title entry-title' itemprop='name'>
<b:if cond='data:post.link or (data:post.url and data:blog.url != data:post.url)'>
<a expr:href='data:post.link ? data:post.link : data:post.url'><data:post.title/></a>
<b:else/>
<data:post.title/>
</b:if>
</h3>
Step 3: Proposed markup: To be pasted     
<h1 class='post-title entry-title' itemprop='headline'>
<b:if cond='data:post.link or (data:post.url and data:blog.url != data:post.url)'>
<a expr:href='data:post.link ? data:post.link : data:post.url'><data:post.title/></a>
<b:else/>
<data:post.title/>
</b:if>
</h1>
        Fix main entity of page Missing and Required Structured Data Error     
            
                            Step 1: CTRL+F →                     http://schema.org/BlogPosting             
You may find this keyword in 2 places. Do the following change in both         the places.     
Step 2: Existing markup: To be commented     
<div class='post hentry uncustomized-post-template' itemscope='itemscope' itemtype='http://schema.org/BlogPosting'>
Step 3: Proposed markup: To be pasted     
<div class='post hentry uncustomized-post-template' itemprop='blogPost' itemscope='itemscope' itemtype='http://schema.org/BlogPosting'>
<meta expr:itemid='data:post.link' content= 'data:post.link : data:post.url' itemType='https://schema.org/WebPage' itemprop='mainEntityOfPage' itemscope='itemscope'/>
        Fix for Publisher Errors in Structured Data     
        
Step 1: CTRL+F → class='post-timestamp'     
You may find this keyword in 2 places. Do the following change in both         the places.     
Step 2: Existing markup: To be commented     
<span class='post-timestamp'>
Step 3: Proposed markup: To be pasted     
<div itemprop='publisher' itemscope='itemscope' itemtype='https://schema.org/Organization'>
<div itemprop='logo' itemscope='itemscope' itemtype='https://schema.org/ImageObject'>
<meta content='LOGO URL' itemprop='url'/>
<meta content='600' itemprop='width'/>
<meta content='60' itemprop='height'/>
</div>
<meta content='COMPANY NAME/BLOG NAME' itemprop='name'/>
</div>
<span class='post-timestamp'>

        Fix Blogger date Modified Recommended Structured Data Error     
    
Step 1: CTRL+F → abbr class='published'     
You may find this keyword in 2 places. Do the following change in both         the places.     
Step 2: Existing markup: To be commented     

<b:if cond='data:post.url'><meta expr:content='data:post.url.canonical' itemprop='url'/><a class='timestamp-link' expr:href='data:post.url' rel='bookmark' title='permanent link'><abbr class='published' expr:title='data:post.timestampISO8601' itemprop='datePublished'><data:post.timestamp/></abbr></a></b:if>
Step 3: Proposed markup: To be pasted     

<b:if cond='data:post.url'><meta expr:content='data:post.url.canonical' itemprop='url'/><a class='timestamp-link' expr:href='data:post.url' rel='bookmark' title='permanent link'><abbr class='published' expr:title='data:post.timestampISO8601' itemprop='datePublished'><data:post.timestamp/></abbr></a><meta expr:content='data:post.lastUpdatedISO8601' itemprop='dateModified'/></b:if>
    
        Fix Image Structured Data Blogger Error     
        
        
Step 1: CTRL+F → data:post.firstImageUrl             
Step 2: Existing markup: To be commented             
<b:if cond='data:post.firstImageUrl'>
<meta expr:content='data:post.firstImageUrl' itemprop='image_url'/>
</b:if>
Step 3: Proposed markup: To be pasted             
<div itemprop='image' itemscope='itemscope' itemtype='https://schema.org/ImageObject'>  <b:if cond='data:post.firstImageUrl'>    <meta expr:content='data:post.firstImageUrl' itemprop='url'/>    <b:else/>    <meta content='LOGO URL' itemprop='url'/>  </b:if>  <meta content='800' itemprop='width'/>  <meta content='800' itemprop='height'/></div>
        
-- And --             
        
Step 1: CTRL+F → data:post.thumbnailUrl             
Step 2: Existing markup: To be commented             
        
<b:if cond='data:post.thumbnailUrl'>  <meta expr:content='data:post.thumbnailUrl' itemprop='image_url'/></b:if>
        
Step 3: Proposed markup: To be pasted             
        
<div itemprop='image' itemscope='itemscope' itemtype='https://schema.org/ImageObject'>  <b:if cond='data:post.thumbnailUrl'>    <meta expr:content='data:post.thumbnailUrl' itemprop='url'/>    <b:else/>    <meta content='LOGO URL' itemprop='url'/>  </b:if>  <meta content='800' itemprop='width'/>  <meta content='800' itemprop='height'/></div>


    
        Fix Blogger date Published Format Structured Data Error     
        

            Exit the HTML Template Editor.         
            Go to"Settings"→Choose "Language and formatting".         
            Select Timestamp Format like "21/09/2016" (dd/mm/yyyy).         
            Click"Save"         
            Check                                         "Google Structured Data Testing Tool"<hr/> <a href="https://www.webmanajemen.com/2017/05/how-to-fix-structured-data-errors-in-blogger.html" rel="follow" class="button" id="read-more">Read More</a>