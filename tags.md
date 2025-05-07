---
layout: page
title: Tags
permalink: /tags/
---

## All Tags

<div class="tags-container">
{% assign all_tags = site.tags | sort: 'tag' %}
{% assign tag_counts = '' | split: '' %}

{% for tag_page in all_tags %}
  {% assign tag = tag_page.tag %}
  {% assign tag_without_emoji = tag | slice: 1, tag.size %}
  
  {% assign post_count = 0 %}
  {% for post in site.posts %}
    {% for post_tag in post.tags %}
      {% assign post_tag_without_emoji = post_tag | slice: 1, post_tag.size %}
      {% if post_tag_without_emoji == tag_without_emoji %}
        {% assign post_count = post_count | plus: 1 %}
      {% endif %}
    {% endfor %}
  {% endfor %}
  
  {% assign padded_count = '' %}
  {% if post_count < 10 %}
    {% assign padded_count = '000' | append: post_count %}
  {% elsif post_count < 100 %}
    {% assign padded_count = '00' | append: post_count %}
  {% elsif post_count < 1000 %}
    {% assign padded_count = '0' | append: post_count %}
  {% else %}
    {% assign padded_count = post_count %}
  {% endif %}
  
  {% capture tag_with_count %}{{ padded_count }}#{{ tag }}#{{ tag_without_emoji }}{% endcapture %}
  {% assign tag_counts = tag_counts | push: tag_with_count %}
{% endfor %}

{% assign sorted_tag_counts = tag_counts | sort | reverse %}

{% for tag_item in sorted_tag_counts %}
  {% assign tag_parts = tag_item | split: '#' %}
  {% assign padded_count = tag_parts[0] %}
  {% assign tag = tag_parts[1] %}
  {% assign tag_without_emoji = tag_parts[2] %}
  {% assign tag_slug = tag_without_emoji | slugify %}
  
  {% assign post_count = padded_count | plus: 0 %}
  
  <a href="{{ site.baseurl }}/tags/{{ tag_slug }}/" class="tag-card">
    <div class="tag-name">{{ tag }}</div>
    <div class="tag-count">{{ post_count }}</div>
  </a>
{% endfor %}
</div>