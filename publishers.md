---
layout: page
title: Publishers
permalink: /publishers/
---

<div class="home py-4 py-md-5">
  <h1 class="page-title">All Publishers</h1>
  
  <div class="row">
    {% assign sorted_publishers = site.publishers | sort: 'publisher' %}
    {% for pub in sorted_publishers %}
      <div class="col-6 col-md-4 col-lg-3 mb-3">
        <a href="{{ pub.url | relative_url }}" class="btn btn-outline-primary btn-block">
          {{ pub.publisher }}
        </a>
      </div>
    {% endfor %}
  </div>
</div>