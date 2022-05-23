---
lang-ref: home
layout: home
klass: home
title: Virtual Herbarium Germany
description: A showcase for the hidden treasures of German herbaria.
background: /assets/images/gin1.jpg
imageLicense: |
  Photo by Katja Hiendlmayer
height: 75vh
overlayColor: "#5f3d3d55"
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
