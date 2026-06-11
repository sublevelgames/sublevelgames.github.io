---
layout: page
title: Platforms
permalink: /platforms/
redirect_from: /publishers/
---

<div class="platforms-container">
{% assign all_platforms = site.platforms | sort: 'platform' %}
{% assign platform_data = "" | split: "," %}

{% for platform_page in all_platforms %}
  {% assign platform = platform_page.platform %}
  {% assign platform_without_emoji = platform | slice: 1, platform.size %}
  
  {% assign post_count = 0 %}
  {% for post in site.posts %}
    {% if post.platform %}
      {% for post_platform in post.platform %}
        {% assign post_platform_without_emoji = post_platform | slice: 1, post_platform.size %}
        {% if post_platform_without_emoji == platform_without_emoji %}
          {% assign post_count = post_count | plus: 1 %}
        {% endif %}
      {% endfor %}
    {% endif %}
  {% endfor %}
  
  {% assign platform_info = platform | append: "#" | append: platform_without_emoji | append: "#" | append: post_count %}
  {% assign platform_data = platform_data | push: platform_info %}
{% endfor %}

{% assign highest_count = 0 %}
{% for platform_info in platform_data %}
  {% assign parts = platform_info | split: "#" %}
  {% assign count = parts[2] | plus: 0 %}
  {% if count > highest_count %}
    {% assign highest_count = count %}
  {% endif %}
{% endfor %}

{% for i in (1..1000) %}
  {% assign current_count = highest_count | minus: i | plus: 1 %}
  {% if current_count <= 0 %}
    {% break %}
  {% endif %}
  
  {% for platform_info in platform_data %}
    {% assign parts = platform_info | split: "#" %}
    {% assign platform = parts[0] %}
    {% assign platform_without_emoji = parts[1] %}
    {% assign count = parts[2] | plus: 0 %}
    {% assign platform_slug = platform_without_emoji | slugify %}
    
    {% if count == current_count %}
      <a href="{{ site.baseurl }}/platforms/{{ platform_slug }}/" class="platform-card">
        <div class="platform-name {{ platform_slug }}-platform">{{ platform }}</div>
        <div class="platform-count">{{ count }}</div>
      </a>
    {% endif %}
  {% endfor %}
{% endfor %}
</div>