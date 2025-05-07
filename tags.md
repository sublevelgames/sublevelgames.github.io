---
layout: page
title: Tags
permalink: /tags/
---

# 모든 태그 목록

<div class="row">
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
  
  <div class="col-md-3 mb-3">
    <a href="{{ site.baseurl }}/tags/{{ tag_slug }}/" class="tag-link">
      <div class="card">
        <div class="card-body text-center">
          <span class="badge badge-primary">{{ tag }}</span>
          <span class="badge badge-secondary">{{ post_count }}</span>
        </div>
      </div>
    </a>
  </div>
{% endfor %}
</div>