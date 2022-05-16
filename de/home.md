---
lang-ref: home
layout: home
title: Virtuelles Herbarium Deutschland
description: Ein Blick in die Schatzkammern der deutschen Herbarien.
background: /assets/images/gin1.jpg
imageLicense: |
  Foto: Katja Hiendlmayer
height: 75vh
overlayColor: "#5f3d3d55"
cta:
  - text: Belege erkunden
    href: de/data
    isPrimary: true
  - text: Über das Projekt
    href: de/uber-das-projekt
permalink: /de/
composition:
  - type: heroImage # the block type
  - data: de.home.stats
    type: stats
  - type: latestPosts
    data: we_do_not_want_any_header # weird hack as the block layout looks for a data element and falls back to the page if none is present
---
