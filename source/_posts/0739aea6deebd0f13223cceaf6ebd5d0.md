---
title: How To Resize and Crop Image to fit Container div using CodeIgniter and jQuery
description: When we have a tendency to visit the gallery page of an internet
  site we primarily see there area unit varieties of image for a selected
author: Unknown
url: https://www.webmanajemen.com/2017/05/how-to-resize-and-crop-image-to-fit.html
date: 2017-05-25T06:52:12+07:00
updated: 2017-05-24T23:52:00.000Z
thumbnail: http://www.larnr.com/wp-content/uploads/2015/05/resize-crop-1024x535.jpg
cover: http://www.larnr.com/wp-content/uploads/2015/05/resize-crop-1024x535.jpg
---

<hr/> [THIS SITE IS MIRROR](https://www.webmanajemen.com/2017/05/how-to-resize-and-crop-image-to-fit.html) || <a href="https://www.webmanajemen.com/2017/05/how-to-resize-and-crop-image-to-fit.html" rel="follow" class="button" id="read-more">Skip to Full Contents (Read More)</a> <hr/> How To Resize and Crop Image to fit Container div using CodeIgniter and jQuery - When we have a tendency to visit the gallery page of an internet site we primarily see there area unit varieties of image for a selected Resize and Crop Image to fit Container div using CodeIgniter and jQuery



When we have a tendency to visit the gallery page of an internet site we primarily see there area unit 2 varieties of image for a selected show image of the gallery. One is that the thumbnail image that we will see on the page once it loaded on browser and therefore the alternative one is that the original image that we will see when clicking on thumbnail.
So here the user goes to transfer a picture for the gallery and our system is doing jobs because the following:

Creating a replica to make the thumbnail of the first image.

Resize the copy image which inserts closely into the fastened height and breadth of the instrumentation div of the thumbnail on gallery page, that additionally maintains the first image resolution quantitative relation.

Crop the image to make an ideal thumbnail for the image.

To achieve this good thumbnail we tend to ar attending to use CodeIgniter file uploading ,image manipulation libraries and jQuery image cropping plugin .

Workflow


1.Upload the image (Controller Function)





function do_upload()
{$config['upload_path'] = './uploads/gallery/';
$config['allowed_types'] = 'gif|jpg|png';
$config['max_size'] = '0';
$config['max_width'] = '0';
$config['max_height'] = '0';
$this->load->library('upload', $config);
if(!is_dir($config['upload_path']))
{mkdir($config['upload_path'], 0755, TRUE);
}if ( ! $this->upload->do_upload('gallery-photo'))
{$error = array('error' => $this->upload->display_errors());
print_r($error); //display errors
}else
{$upload_data = $this->upload->data();
$data['upload_data'] = $upload_data;
$source_img = $upload_data['full_path']; //Defining the Source Image
$new_img = $upload_data['file_path'] . $upload_data['raw_name'].'_thumb'.$upload_data['file_ext']; //Defining the Destination/New Image
$data['source_image'] = $new_img;
$this->create_thumb_gallery($upload_data, $source_img, $new_img, 250, 200); //Creating Thumbnail for Gallery which keeps the original
$this->load->view('crop-gallery', $data);
}}










Here, initially we tend to square measure uploading the initial image file. afterward we tend to square measure storing the uploaded file knowledge in “$upload_data” variable. additionally here we tend to outlined the name of the copy image and keep it to“$new_image” variable. Then we tend to invoke the “create_thumb_gallery” operate and that we have passed some price in it as parameter with the dimension (250) &amp; height (200) of the thumbnail to be produce. really we tend to square measure about to reach 227px X 180px thumbnail for our gallery, however here we've got created a replica with250px X 200px resolution, as a result of it'll provide America some further area basset once finally we tend to crop the image victimisation jQuery plugin.
2. Next, we will Copy the Original Image and then Resize it (Controller Function) 




/*--------------------------------------------------------
Create Thumbnail for Gallery which Keeps Original Image too
$upload_data variable keeps the data of the uploaded file
---------------------------------------------------------*/
function create_thumb_gallery($upload_data, $source_img, $new_img, $width, $height)
{//Copy Image Configuration
$config['image_library'] = 'gd2';
$config['source_image'] = $source_img;
$config['create_thumb'] = FALSE;
$config['new_image'] = $new_img;
$config['quality'] = '100%';
$this->load->library('image_lib');
$this->image_lib->initialize($config);
if ( ! $this->image_lib->resize() )
{echo $this->image_lib->display_errors();
}else
{//Images Copied
//Image Resizing Starts
$config['image_library'] = 'gd2';
$config['source_image'] = $source_img;
$config['create_thumb'] = FALSE;
$config['maintain_ratio'] = TRUE;
$config['quality'] = '100%';
$config['new_image'] = $source_img;
$config['overwrite'] = TRUE;
$config['width'] = $width;
$config['height'] = $height;
$dim = (intval($upload_data['image_width']) / intval($upload_data['image_height'])) - ($config['width'] / $config['height']);
$config['master_dim'] = ($dim > 0)? 'height' : 'width';
$this->image_lib->clear();
$this->image_lib->initialize($config);
if ( ! $this->image_lib->resize())
{echo $this->image_lib->display_errors();
}else
{//echo 'Thumnail Created';
return true;
}}
}








Explanation: Here, once uploading the image 1st we've created copy of the initial image by the worth of “$new_image”parameter that was set once referred to as our“create_thumb_gallery” operate from“do_upload” operate.
When we have a duplicate of original image, currently we will work with copy image to realize our good fingernail. to try and do thus 1st we'd like to size the copy image.
Before resizing, we'd like to grasp whether or not to use breadth or height edge because the hard-value. once the copy image has been resized, either the copy image width’s edge or the height’s edge are an equivalent because the desired width’s edge or the height’s edge severally, that we've given $width and $height parameter. The one that's same has the hard-value length. we have a tendency to confirm this victimisation calculation below:

Ratio = (Original Image Width / Original Image Height) – (Desired Width / Desired Height)

If the quantitative relation > zero, then original image has longer dimension than instrumentality dimension. Hence, we have a tendency to take the peak as hard-value because it has shorter height quantitative relation.
If the quantitative relation > zero, then original image has longer height than instrumentality height. Hence, we have a tendency to take dimension as hard-value because it has shorter dimension quantitative relation.
if quantitative relation = zero, each dimension or height may be the hard-value.
The purpose of doing this can be to make sure resized image is in a position to fill the specified resolution properly while not white areas.
See visual description below:


Above shows desired resolution and original image with totally different sizes.


To determine that edge to be used as hard-value, we have a tendency to overlap the required image resolution and also the original image. we are going to shrink the first image whereas keeping its magnitude relation. The arrow indicates the shrinking direction. the sting of the image that initial matches the required image resolution edge length are going to be the hard-value.

When either one in every of the sting matches the specified resolution edge, we tend to stop resizing. the sunshine inexperienced box represents the ultimate image.

Here, it's associate degree example of resized image.
Now, we want to crop the resized image. Here we'll use jQuery plugin to crop absolutely as our thumbnail instrumentality div.

View code after resizing and to crop image using jQuery jCrop Plugin




<!doctype html>



<html>

<head>



<meta charset='utf-8'>

<title>Crop Image</title>

<link rel='stylesheet' href='css/style.css' type='text/css' />

<link rel='stylesheet' href='css/jquery.Jcrop.css' type='text/css' />

<script src='js/jquery.min.js'></script>

<script src='js/jquery.Jcrop.js'></script>

</head>



<body>



<?php echo form_open('gallery/crop','onsubmit='return checkCoords();''); ?>



<img style='margin:0 auto;' src='<?php echo base_url().'uploads/gallery/'.$upload_data['raw_name'].'_thumb'.$upload_data['file_ext']; ?>' id='cropbox'>



<!-- This is the form that our event handler fills -->



<input type='hidden' id='x' name='x' />



<input type='hidden' id='y' name='y' />



<input type='hidden' id='w' name='w' />



<input type='hidden' id='h' name='h' />



<input type='hidden' id='source_image' name='source_image' value='<?php echo $source_image; ?>' />



<button class='btn btn-block' type='submit'>Crop Image</button>



<?php echo form_close(); >



<script type='text/javascript'>



$(function(){



$('#cropbox').Jcrop({



aspectRatio: 0,



minSize: [ 227, 180 ],



maxSize: [ 227, 180 ],



onSelect: updateCoords



});



});



function updateCoords(c)



{



$('#x').val(c.x);



$('#y').val(c.y);



$('#w').val(c.w);



$('#h').val(c.h);



};



function checkCoords()



{



if (parseInt($('#w').val())) return true;



alert('Please select a crop region then press submit.');

return false;

};

</script>

</body>

</html>





In this view we are utilizing jQuery jCrop module edit splendidly and characterizing x_axisand y_axis of trimming begin point. Here we have set the minSize andmaxSize both precisely same as thumbnail determination (227px X 180px), so the client is confined to trim the very same size of the picture which we need for our exhibition, yet this gives client the choice to pick correct territory of the picture to show as thumbnail.

3.Crop image Controller Function

















function crop()



{



if($this->input->post('x',TRUE))



{



$X = $this->input->post('x');



$Y = $this->input->post('y');



$W = $this->input->post('w');



$H = $this->input->post('h');



$source = $this->input->post('source_image');



echo $source;



$config['image_library'] = 'gd2';



$config['source_image'] = $source_img;



$config['new_image'] = $source_img;



$config['quality'] = '100%';



$config['maintain_ratio'] = FALSE;



$config['width'] = $width;



$config['height'] = $height;



$config['x_axis'] = $x_axis;



$config['y_axis'] = $y_axis;



$this->image_lib->clear();



$this->image_lib->initialize($config);



if (!$this->image_lib->crop())



{



echo $this->image_lib->display_errors();



}



else



{



echo 'Cropped Perfectly';



}



}



}



 
Thumbnail picture in the wake of editing the picture. 
Presently, you know how to edit a picture flawlessly for your exhibition. 
So. upbeat Coding.

.thumb-post{text-align:center;margin:0;padding:0;width:100%} .thumb-post amp-img{width:100%;max-width:100%;height:auto;min-height:450px;max-height:600px;margin:0} <hr/> [THIS SITE IS MIRROR](https://www.webmanajemen.com/2017/05/how-to-resize-and-crop-image-to-fit.html) || <a href="https://www.webmanajemen.com/2017/05/how-to-resize-and-crop-image-to-fit.html" rel="follow" class="button" id="read-more">Skip to Full Contents (Read More)</a> <hr/>