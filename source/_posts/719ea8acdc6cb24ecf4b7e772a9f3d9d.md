---
title: How to Multiple Delete With CodeIgniter
description: Posted on August 29, 2017 8:38 PM by Unknown Wordpress CodeIgniter
  Uncategorized In this tutorial I will discuss about how to create Multiple
  Delete With...
author: Unknown
url: https://www.webmanajemen.com/2017/08/how-to-multiple-delete-with-codeigniter.html
date: 2017-08-29T20:38:03+07:00
updated: 2017-08-29T13:38:00.000Z
thumbnail: https://www.tutorial-webdesign.com/wp-content/uploads/2015/01/12.png
cover: https://www.tutorial-webdesign.com/wp-content/uploads/2015/01/12.png
---

<hr/> [THIS SITE IS MIRROR](https://www.webmanajemen.com) Skip to Full Contents <a href="https://www.webmanajemen.com/2017/08/how-to-multiple-delete-with-codeigniter.html" rel="follow" class="button" id="read-more">Read More</a> <hr/> How to Multiple Delete With CodeIgniter - Posted on August 29, 2017 8:38 PM by Unknown Wordpress CodeIgniter Uncategorized In this tutorial I will discuss about how to create Multiple Delete With... In this tutorial I will discuss about how to create    Multiple Delete With CodeIgniter , If you guys often use     wordpress definitely friends will know, because wordpress apply this in     their system. 
First prepare your codeigniter folder named    delete_multiple, Here I assume friends already know how to     setup             initial CodeIgniter         like config.php, autoload.php dll, database.php. We will use the Controller     welcome.php default is Codeigniter or at least have followed             the basic tutorial of the use of Codeigniter         . 
Read Also:            CRUD Tutorial (Create, Read, Update and Delete) With CodeIgniter - Part         1         &             Part 2     
Next create a database codeigniter_crud , create a    student table like the following conditions below sqlnya: 

-- -- Database: `codeigniter_crud` -- -- -------------------------------------------------------- -- -- Table structure for table `siswa` -- CREATE TABLE IF NOT EXISTS `siswa` ( `nis` bigint(11) NOT NULL, `nama` varchar(30) NOT NULL, `jurusan` varchar(10) NOT NULL, `alamat` text NOT NULL ) ENGINE=InnoDB AUTO_INCREMENT=998765336 DEFAULT CHARSET=latin1; -- -- Dumping data for table `siswa` -- INSERT INTO `siswa` (`nis`, `nama`, `jurusan`, `alamat`) VALUES (998765122, 'Yusuf Hamdani', 'RPL', 'Jln. Cipaku Haji Rt.02/07 No.15 Kel.Cipaku Kec.Bogor Selatan'), (998765335, 'Rahmayanti', 'Multimedia', 'Jln. Muarasari, Kel.Gunung Batu Kec.Bogor Barat'); -- -- Indexes for dumped tables -- 
Codeigniter_crud.sql     
Open Controller welcome.php then edit as below: 

<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed'); class Welcome extends CI_Controller { /** * Index Page for this controller. * * Maps to the following URL * http://example.com/index.php/welcome * - or - * http://example.com/index.php/welcome/index * - or - * Since this controller is set as the default controller in * config/routes.php, it's displayed at http://example.com/ * * So any other public methods not prefixed with an underscore will * map to /index.php/welcome/<method_name> * @see http://codeigniter.com/user_guide/general/urls.html */ public function index() { $this->load->model('msiswa'); $data['hasilsiswa'] = $this->msiswa->ambildata(); $this->load->view('index', $data); } function delete_multiple() { $this->load->model('msiswa'); $this->msiswa->remove_checked_siswa(); redirect('welcome/index'); } } /* End of file welcome.php */ /* Location: ./application/controllers/welcome.php */ 
Welcome.php     
Create a new file in the Models folder where    msiswa.php : 

<?php class Msiswa extends CI_Model { function ambildata() { $ambildata = $this->db->get('siswa'); if ($ambildata->num_rows() > 0) { foreach ($ambildata->result() as $data) { $hasilsiswa[] = $data; } return $hasilsiswa; } } function remove_checked_siswa() { $action = $this->input->post('action'); if ($action == "delete") { $delete = $this->input->post('msg'); for ($i=0; $i < count($delete) ; $i++) { $this->db->where('nis', $delete[$i]); $this->db->delete('siswa'); } } } } ?> 
Msiswa.php     
The snippet of this image describes the coding to display the existing data     in the databasecodeigniter_crud student    table :


            
This is for the process when the data will be deleted: 
            
Then create a new file in the Views folder named    index.php : 

<!DOCTYPE html> <html> <head> <title>AZZURA Media | Membuat Multiple Delete Dengan CodeIgniter</title> <script type="text/javascript" src="<?php echo base_url(''); ?>assets/js/jquery-1.5.2.min.js"></script> <script type="text/javascript"> $(document).ready(function() { $("input[name='checkAll']").click(function() { var checked = $(this).attr("checked"); $("#myTable tr td input:checkbox").attr("checked", checked); }); }); </script> </head> <body> <h1>Multiple Delete Dengan CodeIgniter</h1> <form action="<?php echo site_url('welcome/delete_multiple'); ?>" method="post"> <select name="action"> <option value="null">Bulk Action</option> <option value="delete">Delete</option> </select> <input type="submit" name="submit" value="Action"> <p></p> <table border="1" id="myTable"> <thead> <tr> <th><input type="checkbox" id="checkAll" name="checkAll"></th> <th>NIS</th> <th>Nama</th> <th>Jurusan</th> <th>Alamat</th> </tr> </thead> <tbody> <?php if (count($hasilsiswa)>0) { foreach ($hasilsiswa as $data): ?> <tr> <td><input type="checkbox" name="msg[]" value="<?php echo $data->nis; ?>"></td> <td><?php echo $data->nis; ?></td> <td><?php echo $data->nama; ?></td> <td><?php echo $data->jurusan; ?></td> <td><?php echo $data->alamat; ?></td> </tr> <?php endforeach; } else { echo "<tr><td colspan=5>DATA KOSONG!!</td></tr>"; } ?> </tbody> </table> </form> </body> </html> 
Index.php     
Description in the index.php file , you    must first download             JQuery Docs: Selectors / checked         then input jquery script to checkAll below: 

<script type="text/javascript"> $(document).ready(function() { $("input[name='checkAll']").click(function() { var checked = $(this).attr("checked"); $("#myTable tr td input:checkbox").attr("checked", checked); }); }); </script> 

            
Read Also:            Tutorial Making Check & Uncheck All Checkboxs with Jquery     
In the table script snippet you enter the id to call the javascript     function that we apply: 
            
Named the checkbox id like this, intended to call the javascript function     we created, when the checkbox is clicked fed automate all checkAll: 
            
For the post method submitted by the input checkbox we created, we named     the checkbox mgs [], to create the array when the data is deleted,     following the script snippet: 
            
After completing all the above discussion, you can directly try the program     that friend made earlier, if it is correct it will appear as below, so when     checkbox next door clicked to eat data will check all, and to delete data     Sahabat must choose Select Bulk Action Changed to Delete option then press     Action button: 
            
            
            
Okay, so my tutorial this time about Multiple Delete With Codeigniter.     
Hope can increase knowledge of Friends: D: D 
Download Tutorial <hr/> [THIS SITE IS MIRROR](https://www.webmanajemen.com) Skip to Full Contents <a href="https://www.webmanajemen.com/2017/08/how-to-multiple-delete-with-codeigniter.html" rel="follow" class="button" id="read-more">Read More</a> <hr/>