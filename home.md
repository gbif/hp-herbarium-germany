---
lang-ref: home
layout: home
title: Virtual Herbarium Germany
description: <span style="color: white">A showcase for the hidden treasures of German herbaria.</span>
background: /assets/images/gin1.jpg
imageLicense: |
  Photo by Katja Hiendlmayer
height: 75vh
overlayColor: "#63748855"
cta:
  - text: Start exploring
    href: /data
    isPrimary: true
  - text: About
    href: /about
permalink: /
composition:
  - type: heroImage # the block type
  - data: home.stats
    type: stats
  - type: latestPosts
    data: we_do_not_want_any_header # weird hack as the block layout looks for a data element and falls back to the page if none is present
---
