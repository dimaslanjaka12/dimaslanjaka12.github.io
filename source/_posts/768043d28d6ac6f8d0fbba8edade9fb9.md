---
title: Get first post WORDPRESS tutorial
description: Edit your functions.php of your themes. This also work on amp
  plugin wp AMP ninja -gt; Edit on functions.php too. <br /><h3>Codes
author: Dimas Lanjaka Kumala Indra
url: https://www.webmanajemen.com/2017/10/get-first-post-wordpress-tutorial.html
date: 2017-10-04T23:36:03+07:00
updated: 2017-10-04T16:36:00.000Z
thumbnail: https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png
cover: https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png
---

<hr/> Skip to Full Contents <a href="https://www.webmanajemen.com/2017/10/get-first-post-wordpress-tutorial.html" rel="follow" class="button" id="read-more">Read More</a> <hr/> Get first post WORDPRESS tutorial - Edit your functions.php of your themes. This also work on amp plugin wp AMP ninja -gt; Edit on functions.php too. <br /><h3>Codes Edit your functions.php of your themes. This also work on amp plugin (wp AMP ninja) -> Edit on functions.php too. 
Codes 1:
<?php
 /*
These functions are great for WordPress sites with posts and media that have been imported. Some images are   featured images, some in the content itself, and of the content images, some are internal, others external. These images are grabbed to use at the correct size for archive/homepage thumbnails*/
  1) Look for featured image, show if present
  2) Otherwise look for the first image in the content (whether internal or external)
  3) Check for an attachment ID, if present, show image at correct dimensions
  4) Otherwise show image at normal URL
  $size = post thumbnail / custom image sizes
  $url = return a URL or full image tag
*/

  /*Find the image id from a URL*/
function url_get_image_id($image_url) {
    global $wpdb;
    $attachment = $wpdb->get_col($wpdb->prepare("SELECT ID FROM $wpdb->posts WHERE guid='%s';", $image_url )); 
    return $attachment[0]; 
}
/* determine whether post has a featured image, if not, find the first image inside the post content, $size passes the thumbnail size, $url determines whether to return a URL or a full image tag*/
function checkImageType($size, $type) {
  global $post;
 $content = $post->post_content;     
 $first_img = '';
 ob_start();
 ob_end_clean();
 $output = preg_match_all('/<img.+src=[\'"]([^\'"]+)[\'"].*>/i', $content, $matches);
 $first_img = $matches[1][0];
  /*If there's a featured image, show it*/
   
 if (get_the_post_thumbnail($post_id) != '' ) {
  if($type=='url') {
         the_post_thumbnail_url($size);
        } else {
         the_post_thumbnail($size);
        }
    } else {
     
     /*No featured image, so we get the first image inside the post content*/
     
     if ($first_img) {
      
      //let's get the correct image dimensions
    $image_id = url_get_image_id($first_img);
   $image_thumb = wp_get_attachment_image_src($image_id, $size);
   
   // if we've found an image ID, correctly display it
   
   if($image_thumb) { 
       if($type=='url') {
           echo $image_thumb[0];
          } else {
           
           echo '<img src="'.$image_thumb[0].'" alt="'.get_the_title().'"/>';
          }
      } else {
       
       //if no image (i.e. from an external source), echo the original URL
       
       if($type=='url') {
           echo $first_img;
          } else {
           
           echo '<img src="'.$first_img.'" alt="'.get_the_title().'"/>';
          }
              
      }
       }
    }
}
// Sample Uses
checkImageType('full', 'url'); 
// Returns: http://domain.com/image-url.jpg)
checkImageType('post-thumb');
// Returns: <img src="http://domain.com/image-url.jpg" alt="Alt text">
?>
Codes 2:
/*
 * Display Image from the_post_thumbnail or the first image of a post else display a default Image
 * Chose the size from "thumbnail", "medium", "large", "full" or your own defined size using filters.
 * USAGE: <?php echo my_image_display(); ?>
 */
function my_image_display($size = 'full') {
 if (has_post_thumbnail()) {
  $image_id = get_post_thumbnail_id();
  $image_url = wp_get_attachment_image_src($image_id, $size);
  $image_url = $image_url[0];
 } else {
  global $post, $posts;
  $image_url = '';
  ob_start();
  ob_end_clean();
  $output = preg_match_all('/<img.+src=[\'"]([^\'"]+)[\'"].*>/i', $post->post_content, $matches);
  $image_url = $matches [1] [0];
  
  //Defines a default image
  if(empty($image_url)){
   $image_url = get_bloginfo('template_url') . "/img/default.jpg";
  }
 }
 return $image_url;
}
so Get first post WORDPRESS tutorial, hopefully useful. <hr/> Skip to Full Contents <a href="https://www.webmanajemen.com/2017/10/get-first-post-wordpress-tutorial.html" rel="follow" class="button" id="read-more">Read More</a> <hr/>