---
title: Cookie Manager
date: 2022-05-17
updated: 2022-05-17
cover: https://store-images.s-microsoft.com/image/apps.28872.8dd4ed34-c7e6-4db8-98a0-8cd9e20d9591.0411b632-2a2b-4261-ade2-cefaa5df77f9.df01a2ac-e2bd-4805-a4e3-58375d1ee1df
---

<link rel="stylesheet" href="https://rawcdn.githack.com/dimaslanjaka/Web-Manajemen/4d9a447b85532706cee3f4a47e8c6c7a07fee607/css/bootstrap-4.5-wrapper.css" />
<div class="container h-100 m-5" id="bootstrap-wrapper">
  <div class="row mb-2">
    <pre id="allcookies" class=""></pre>
  </div>
  <div class="row h-100 justify-content-center align-items-center">
    <form action="#create" id="create" class="form-inline col-12">
      <div class="form-group mb-2">
        <input type="text" class="form-control" placeholder="cookie name" value="myCookieName" name="name" id="cookie-name">
      </div>
      <div class="form-group mx-sm-3 mb-2">
        <input type="text" class="form-control" placeholder="cookie value" value="myCookieValue" name="value" id="cookie-value">
      </div>
      <div class="btn-group mx-sm-3 mb-2">
        <button class="btn btn-primary" type="submit">Create</button>
        <button class="btn btn-danger" type="button" id="deleteAllCookie">Delete</button>
      </div>
    </form>
  </div>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://raw.githack.com/dimaslanjaka/smartform/master/dist/release/bundle.js"></script>
<script src="cookie.js"></script>