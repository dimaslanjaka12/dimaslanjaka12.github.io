---
title: Cara Membuat Google AdSense Shortcodes Untuk WordPress
description: Membuat Google AdSense Shortcodes Untuk WordPress
author: Dimas Lanjaka Kumala Indra
url: https://www.webmanajemen.com/2017/10/cara-membuat-google-adsense-shortcodes.html
date: 2017-10-11T19:49:03+07:00
updated: 2017-10-11T12:49:00.000Z
thumbnail: http://botcrawl.com/wp-content/uploads/2012/04/toggle-arrow.png
cover: http://botcrawl.com/wp-content/uploads/2012/04/toggle-arrow.png
---

<hr/> [THIS SITE IS MIRROR](https://www.webmanajemen.com) Skip to Full Contents <a href="https://www.webmanajemen.com/2017/10/cara-membuat-google-adsense-shortcodes.html" rel="follow" class="button" id="read-more">Read More</a> <hr/> Cara Membuat Google AdSense Shortcodes Untuk WordPress - Membuat Google AdSense Shortcodes Untuk WordPress Membuat Google AdSense Shortcodes Untuk WordPress
Banyak blog dan situs WordPress menghasilkan keuntungan secara online dengan mengintegrasikan iklan yang menggunakan program Google AdSense. Iklan Adsense Google ditulis dalam naskah java dan dapat ditempatkan di lokasi manapun yang berbunyi HTML, seperti halaman WordPRess, posts, theme files, dan text capable widgets.
 Skrip di bawah ini adalah contoh dari iklan seharga 200 x 200 Google AdSense.

<script type="text/javascript"><!-- google_ad_client = "ca-pub-2336674635953969"; /* Advertisement Name */ google_ad_slot = "2720758527"; google_ad_width = 200; google_ad_height = 200; //--> </script> <script type="text/javascript" src="http://pageadd2.googlesyfndicgfion.com/pagead/showfdds.js"> </script>
Membuat Iklan "adSense"
Contoh Google AdSense
Jika Anda tidak mengetahui skrip iklan Google AdSense Anda dengan memori, juga tidak memilikinya di dekat copy dan paste ke blog atau situs WordPress Anda, penggunaan iklan AdSense Anda dengan mudah ke situs web WordPress Anda kapan saja Anda inginkan. belum ada. Tapi ada cara yang sangat mudah untuk menambahkan iklan Google AdSense Anda tanpa terus-menerus menyalin ulang kode java multi-line ke setiap sudut dan sudut pandang HTML yang siap.
Solusi sederhana adalah membuat shortcode pada file functions.php theme WordPress saat ini. Dengan cara ini iklan Google AdSense dapat dengan mudah ditampilkan setiap saat dengan membuat shortcode : [adsense]
Cara Membuat Kode Iklan Google AdSense
Berikut adalah kode fungsi PHP yang akan membuat shortcode untuk WordPress dan akan memungkinkan Anda menampilkan iklan Google AdSense. Skrip AdSense demo kami, yang kami tampilkan sekali di atas disorot dalam font abu-abu di bawah ini.
 Copy dan paste kode dibawah ini ke file functions.phpanda Ganti ADSENSE SCRIPT DISINI ke script java Google AdSense anda.

function adsenseads() {
    return '<div id="adsenseads"><ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-7975270895217217"
     data-ad-slot="7267894124"
     data-ad-format="auto"></ins></div>';
}add_shortcode('adsense', 'adsenseads');

Untuk menampilkan iklan Google Adsense gunakan shortcode: [adsense]
Untuk membuat beberapa shortcodes iklan Google AdSense di WordPress hanya mengubah kata 'adsense' di baris terakhir kode functions.php . Saran adalah memberi label kode pendek untuk berbagai iklan. Misalnya 'adsense1' dan 'adsense2' akan membuat shortcode [adsense1] dan [adsense2] . Anda bahkan bisa memberi nama shortcode setelah judul iklan AdSense Anda. Ini adalah cara terbaik untuk melacak iklan Google AdSense Anda di WordPress jika Anda selalu menulis dan perlu menempatkan iklan yang dikonfigurasi dengan benar di beberapa ruang tertentu. <hr/> [THIS SITE IS MIRROR](https://www.webmanajemen.com) Skip to Full Contents <a href="https://www.webmanajemen.com/2017/10/cara-membuat-google-adsense-shortcodes.html" rel="follow" class="button" id="read-more">Read More</a> <hr/>