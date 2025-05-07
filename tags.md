---
layout: page
title: Tags
permalink: /tags/
---

## All Tags

<div class="tags-container">
{% assign all_tags = site.tags | sort: 'tag' %}
{% assign tag_data = "" | split: "," %}

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
  
  {% assign tag_info = tag | append: "#" | append: tag_without_emoji | append: "#" | append: post_count %}
  {% assign tag_data = tag_data | push: tag_info %}
{% endfor %}

{% assign highest_count = 0 %}
{% for tag_info in tag_data %}
  {% assign parts = tag_info | split: "#" %}
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
  
  {% for tag_info in tag_data %}
    {% assign parts = tag_info | split: "#" %}
    {% assign tag = parts[0] %}
    {% assign tag_without_emoji = parts[1] %}
    {% assign count = parts[2] | plus: 0 %}
    {% assign tag_slug = tag_without_emoji | slugify %}
    
    {% if count == current_count %}
      <a href="{{ site.baseurl }}/tags/{{ tag_slug }}/" class="tag-card">
        <div class="tag-name {{ tag_slug }}-tag">{{ tag }}</div>
        <div class="tag-count">{{ count }}</div>
      </a>
    {% endif %}
  {% endfor %}
{% endfor %}
</div>