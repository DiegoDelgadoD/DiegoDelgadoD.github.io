---
layout: archive
title: "Other Research"
permalink: /gallery/
author_profile: true
---
With my amazing coauthor <a href="https://raulsedano2410.github.io/portfolio/">Raul Sedano</a>, we have created 
scrapers for different webpages using Selenium and Biutiful Soup libraries in Python.

{% include base_path %}


{% for post in site.portfolio %}
  {% include archive-single.html %}
{% endfor %}