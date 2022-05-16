---
title: GitHub Workflow Events
description: Macam-macam events pada GitHub Workflows
author: Dimas Lanjaka
url: https://www.webmanajemen.com/GitHub/workflows-events.html
date: 2021-12-20T15:33:55+07:00
updated: 2021-11-21T16:00:00.000Z
thumbnail: https://www.webmanajemen.com/GitHub/workflows/events.png
cover: https://www.webmanajemen.com/GitHub/workflows/events.png
---

<hr/> [THIS SITE IS MIRROR](https://www.webmanajemen.com/GitHub/workflows-events.html) || <a href="https://www.webmanajemen.com/GitHub/workflows-events.html" rel="follow" class="button" id="read-more">Skip to Full Contents (Read More)</a> <hr/> GitHub Workflow Events - Macam-macam events pada GitHub Workflows # Events yang memicu Github Workflow
Anda dapat mengkonfigurasi alur kerja Anda untuk berjalan saat aktivitas tertentu di GitHub terjadi, pada waktu yang dijadwalkan, atau saat peristiwa di luar GitHub terjadi.

## Contoh Menggunakan single event
```yaml
# Memicu workflow pada event push atau pull request
on: [push, pull_request]
```
## Contoh Menggunakan beberapa events dengan jenis atau konfigurasi aktivitas
Jika Anda perlu menentukan jenis aktivitas atau konfigurasi untuk suatu peristiwa, Anda harus mengonfigurasi setiap peristiwa secara terpisah. Anda harus menambahkan titik dua (:) ke semua event, termasuk event tanpa konfigurasi.
```yaml
on:
  # Memicu workflow pada event push atau pull request,
  # tapi hanya untuk event `main` branch,
  # anda juga dapat menambahkan beberapa branch dibawah,
  # cukup tambahkan `- nama branch`
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
```

## Contoh Menggunakan workflow lain sebagai acuan untuk memicu workflow saat ini
Ini workflow yang akan di lihat (primary workflow)
```yaml
# workflow yang akan berjalan pertama kali
name: Primary Workflow
```
Ini workflow kedua yang akan jalan apabila workflow pertama sukses
```yaml
# apabila 'Primary Workflow' selesai, lanjutkan workflow ini
on:
  workflow_run:
    workflows: ["Primary Workflow"]
    # hanya akan jalan apabila 'Primary Workflow' sukses/tidak error
    types:
      - completed
```
Ini workflow ketiga yang akan jalan berdampingan dengan workflow pertama, apabila workflow tersebut diminta untuk jalan (terpicu)
```yaml
# apabila primary workflow dipicu, maka workflow ini juga akan jalan
on:
  workflow_run:
    workflows: ["Primary Workflow"]
    # hanya akan jalan apabila 'Primary Workflow' terpicu
    types:
      - requested
```

## Contoh Github workflow run after other workflow
[source idea](https://stackoverflow.com/a/67534920)
```yaml
 on:
   workflow_run:
     workflows: ["Other Workflow Name"]
     types:
      - completed

 jobs:
   on-success:
     runs-on: ubuntu-latest
     if: ${{ github.event.workflow_run.conclusion == 'success' }}
     steps:
       - run: echo "First workflow was a success"

   on-failure:
     runs-on: ubuntu-latest
     if: ${{ github.event.workflow_run.conclusion == 'failure' }}
     steps:
       - run: echo "First workflow was a failure"
```

Artikel ini hanya untuk mempermudah pengguna dalam memahami GitHub Workflow. <hr/> [THIS SITE IS MIRROR](https://www.webmanajemen.com/GitHub/workflows-events.html) || <a href="https://www.webmanajemen.com/GitHub/workflows-events.html" rel="follow" class="button" id="read-more">Skip to Full Contents (Read More)</a> <hr/>