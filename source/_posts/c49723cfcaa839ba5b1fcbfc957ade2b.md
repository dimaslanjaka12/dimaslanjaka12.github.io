---
title: Cara Membuat Jalan pintas untuk Aplikasi UI Modern di Windows 8.1
description: Anda perlu menentukan nama dan ikon untuk pintasan aplikasi Modern
  karena nilai tersebut tidak diambil langsung dari folder
author: noreply@blogger.com (Dimas Lanjaka Kumala Indra)
url: https://www.webmanajemen.com/2017/10/cara-membuat-jalan-pintas-untuk.html
date: 2017-10-14T17:42:00.000Z
updated: 2017-10-14T17:42:00.000Z
---

cara untuk membuat shortcut untuk aplikasi Modern yang diinstal dengan     menggunakan nilai AppUserModelID (Application User Model ID). 
    Tangga 
Buka kotak dialog Run, ketik shell:AppsFolder , dan tekan     Enter. Ini akan membuka folder 'Applications' yang berisi daftar semua     aplikasi desktop dan modern yang terinstal di Windows. 
Dalam folder tekan F10 , pergi ke item menu 'View', dan klik 'Choose     details'. Pada dialog berikutnya, centang kotak 'AppUserModelId'. 
    Sekarang ubah tampilan folder menjadi "Details". Anda sekarang harus bisa     melihat kolom bernama 'AppUserModelId' - inilah yang akan kita gunakan     untuk membuat shortcut. 
Sekarang gulir ke aplikasi yang ingin Anda buat pintasannya, dan catat     nilai 'AppUserModelId'. Sebagai contoh, di sini saya akan membuat shortcut     untuk aplikasi Dropbox.     
    
Nilai aplikasi Dropbox adalah C27EB4BA.Dropbox_xbfy0k16fey96! App    - catat nilai untuk aplikasi Anda sendiri. 
Kiat:    Anda tidak dapat menyalin nilainya dari sini. Cara yang lebih mudah adalah     mengetik beberapa karakter pertama dari nilai AppUserModelId aplikasi yang     Anda pilih di bilah alamat. Istirahat disarankan secara otomatis.Salin dari     sana. 
Sekarang pergi ke desktop Anda, dan buat shortcut dengan yang berikut ini     sebagai target: explorer.exe shell:AppsFolder\ . Tambahkan     nilai apl. Sebagai contoh: 
  shell explorer.exe: AppsFolder \ C27EB4BA.Dropbox_xbfy0k16fey96! App 
    
Anda perlu menentukan nama dan ikon untuk pintasan aplikasi Modern         karena nilai tersebut tidak diambil langsung dari folder Applications.     
Itu dia! Anda dapat membuat banyak jalan pintas yang Anda inginkan         mengikuti metode yang sama, pin ke taskbar Anda, atau menambahkannya ke         folder Startup Anda.<hr/> <a href="https://www.webmanajemen.com/2017/10/cara-membuat-jalan-pintas-untuk.html" rel="follow" class="button" id="read-more">Read More</a>