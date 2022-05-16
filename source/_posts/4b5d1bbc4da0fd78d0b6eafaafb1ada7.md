---
title: Cara ping mesin pencari dengan curl
description: Ketika Anda menambahkan cerita baru atau memperbarui yang sudah
  ada, mungkin perlu beberapa minggu bagi bot mesin pencari untuk mengindeks
  ulang situs...
author: Unknown
url: https://www.webmanajemen.com/2017/07/cara-ping-mesin-pencari-dengan-curl.html
date: 2017-07-24T12:54:00+07:00
updated: 2017-07-24T05:54:00.000Z
thumbnail: https://res.cloudinary.com/dimaslanjaka/image/fetch/https://lh6.googleusercontent.com/proxy/tYpoSEj-W-8XcUJyBsi4Tq7Q8AaMtVNwK9CTgxcg1ZbZ0u5lHPzUcRDhOo6VJKysWUEe768ddx0ckD0uobENOvlY1GdhblF6n_NvZDSk3EaJecDY6XiWVSiz65Pe2tKGr0oo9Wgf12ea98aNcA55vNFXbYQKLLcdvyQ8YOEZotzbww=w350-h200-nc
cover: https://res.cloudinary.com/dimaslanjaka/image/fetch/https://lh6.googleusercontent.com/proxy/tYpoSEj-W-8XcUJyBsi4Tq7Q8AaMtVNwK9CTgxcg1ZbZ0u5lHPzUcRDhOo6VJKysWUEe768ddx0ckD0uobENOvlY1GdhblF6n_NvZDSk3EaJecDY6XiWVSiz65Pe2tKGr0oo9Wgf12ea98aNcA55vNFXbYQKLLcdvyQ8YOEZotzbww=w350-h200-nc
---

<hr/> [THIS SITE IS MIRROR](https://www.webmanajemen.com) Skip to Full Contents <a href="https://www.webmanajemen.com/2017/07/cara-ping-mesin-pencari-dengan-curl.html" rel="follow" class="button" id="read-more">Read More</a> <hr/> Cara ping mesin pencari dengan curl - Ketika Anda menambahkan cerita baru atau memperbarui yang sudah ada, mungkin perlu beberapa minggu bagi bot mesin pencari untuk mengindeks ulang situs... Ketika Anda menambahkan cerita baru atau memperbarui yang sudah ada, mungkin perlu beberapa minggu bagi bot mesin pencari untuk mengindeks ulang situs Anda, namun saya mengetahui bahwa beberapa situs mendapatkan indeks ulang sangat lama setelah menambahkan atau memperbarui konten di situs web mereka, Yang membuatku berpikir bagaimana mereka melakukannya? Jawabannya mereka ping search engine kapanpun ada perubahan yang menginformasikan bot search engine ada perubahan dan membaca sitemap situs lagi proses ini biasanya dilakukan dalam beberapa menit setelah mengirimkan ping.

Saya menulis naskah kecil dengan membuat proses otomatis tutorial ini akan menunjukkan caranya.
Pertama buat fungsi yang akan memiliki dua parameter yang pertama ($ sitemap) adalah path sitemap dan ($ service) yang merupakan mesin pencari untuk melakukan ping.
function pingSE($sitemap,$service){ 
Pemindaian berikutnya melalui variabel $ service jika ada kecocokan maka buat variabel lain dengan jalur ping mesin pencari beserta jalur sitemap ditambahkan sampai akhir. Jika tidak ada kecocokan yang ditemukan, fungsinya tidak akan mengembalikan apapun, dengan kata lain berhenti.

switch ($service) {
        case 'bing':
            $ping = "http://www.bing.com/webmaster/ping.aspx?siteMap=$sitemap";
            break;
        case 'ask':
            $ping = "http://submissions.ask.com/ping?sitemap=$sitemap";
            break;
        case 'google':
            $ping = "http://www.google.com/webmasters/sitemaps/ping?sitemap=$sitemap";
            break;
        case 'moreover':
            $ping = "http://api.moreover.com/ping?sitemap=$sitemap";
            break;
        default:
               return false;
    }
 
Selanjutnya buat handle yang curl lalu menginisialisasi itu.
$curl_handle=curl_init(); 
Atur waktu panggilan akan berjalan untuk menghentikan penundaan jika layanan sedang down mengatur hal ini ke nomor rendah seperti 2.
curl_setopt($curl_handle,CURLOPT_CONNECTTIMEOUT,2); 
Selanjutnya atur kembali tranfer untuk mengecek apakah berhasil atau tidak.
curl_setopt($curl_handle,CURLOPT_RETURNTRANSFER,1); 
Selanjutnya jalankan perintah yang tersimpan dan tutup koneksi menjadi curl.

$buffer = curl_exec($curl_handle);
    curl_close($curl_handle);
 
Jika Anda ingin memeriksa apakah ping berhasil atau tidak cukup periksa apakah buffer $ kosong sebagai perintah exec curl yang ditugaskan ke $ buffer.

 
if (empty($buffer))
    {
        echo "<p>Sorry, submission failed for $service.<p>";
    }
    else
    {
        echo "<p>$service success</p>";
    }
 
Untuk memanggil fungsi pass it jalan ke sitemap dan layanan untuk melakukan ping. 

pingSE('http://www.domain.com/sitemap.xml','bing');
pingSE('http://www.domain.com/sitemap.xml','ask');
pingSE('http://www.domain.com/sitemap.xml','google');
pingSE('http://www.domain.com/sitemap.xml','moreover');
 
Inilah naskah lengkapnya: 

function pingSE($sitemap,$service){
    switch ($service) {
        case 'bing':
            $ping = "http://www.bing.com/webmaster/ping.aspx?siteMap=$sitemap";
            break;
        case 'ask':
            $ping = "http://submissions.ask.com/ping?sitemap=$sitemap";
            break;
        case 'google':
            $ping = "http://www.google.com/webmasters/sitemaps/ping?sitemap=$sitemap";
            break;
        case 'moreover':
            $ping = "http://api.moreover.com/ping?sitemap=$sitemap";
            break;
        default:
               return false;
    }
    $curl_handle=curl_init();
    curl_setopt($curl_handle,CURLOPT_URL,$ping);
    curl_setopt($curl_handle,CURLOPT_CONNECTTIMEOUT,2);
    curl_setopt($curl_handle,CURLOPT_RETURNTRANSFER,1);
    $buffer = curl_exec($curl_handle);
    curl_close($curl_handle);
    if (empty($buffer))
    {
        echo "<p>Sorry, submission failed for $service.<p>";
    }
    else
    {
        echo "<p>$service success</p>";
    }
}
 
Update
Bagi mereka yang tidak memiliki curl terinstal di server mereka, Anda dapat menggunakan fungsi yang disebut file_get_contents (), bukan di sini adalah fungsi alternatif dengan menggunakan file_get_contents () 

function pingSE($sitemap,$service){
    switch ($service) {
        case 'bing':
            $ping = "http://www.bing.com/webmaster/ping.aspx?siteMap=$sitemap";
            break;
        case 'ask':
            $ping = "http://submissions.ask.com/ping?sitemap=$sitemap";
            break;
        case 'google':
            $ping = "http://www.google.com/webmasters/sitemaps/ping?sitemap=$sitemap";
            break;
        case 'moreover':
            $ping = "http://api.moreover.com/ping?sitemap=$sitemap";
            break;
        default:
               return false;
    }
    $success = file_get_contents($ping);
    if (empty($success))
    {
        echo "<p>Sorry, submission failed for $service.<p>";
    }
    else
    {
        echo "<p>$service success</p>";
    }
} <hr/> [THIS SITE IS MIRROR](https://www.webmanajemen.com) Skip to Full Contents <a href="https://www.webmanajemen.com/2017/07/cara-ping-mesin-pencari-dengan-curl.html" rel="follow" class="button" id="read-more">Read More</a> <hr/>