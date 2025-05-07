---
layout: page
title: Tags
permalink: /tags/
---

# All Tags

<div class="tags-container">
{% for tag_page in site.tags %}
  {% assign tag = tag_page.tag %}
  {% assign tag_without_emoji = tag | slice: 1, tag.size %}
  {% assign tag_slug = tag_without_emoji | slugify %}
  
  {% assign post_count = 0 %}
  {% for post in site.posts %}
    {% for post_tag in post.tags %}
      {% assign post_tag_without_emoji = post_tag | slice: 1, post_tag.size %}
      {% if post_tag_without_emoji == tag_without_emoji %}
        {% assign post_count = post_count | plus: 1 %}
      {% endif %}
    {% endfor %}
  {% endfor %}
  
  <a href="{{ site.baseurl }}/tags/{{ tag_slug }}/" class="tag-card">
    <div class="tag-name">{{ tag }}</div>
    <div class="tag-count">{{ post_count }}</div>
  </a>
{% endfor %}
</div>