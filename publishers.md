---
layout: page
title: Publishers
permalink: /publishers/
---

<div class="publishers-container">
{% assign all_publishers = site.publishers | sort: 'publisher' %}
{% assign publisher_data = "" | split: "," %}

{% for publisher_page in all_publishers %}
  {% assign publisher = publisher_page.publisher %}
  {% assign publisher_without_emoji = publisher | slice: 1, publisher.size %}
  
  {% assign post_count = 0 %}
  {% for post in site.posts %}
    {% if post.publisher %}
      {% for post_publisher in post.publisher %}
        {% assign post_publisher_without_emoji = post_publisher | slice: 1, post_publisher.size %}
        {% if post_publisher_without_emoji == publisher_without_emoji %}
          {% assign post_count = post_count | plus: 1 %}
        {% endif %}
      {% endfor %}
    {% endif %}
  {% endfor %}
  
  {% assign publisher_info = publisher | append: "#" | append: publisher_without_emoji | append: "#" | append: post_count %}
  {% assign publisher_data = publisher_data | push: publisher_info %}
{% endfor %}

{% assign highest_count = 0 %}
{% for publisher_info in publisher_data %}
  {% assign parts = publisher_info | split: "#" %}
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
  
  {% for publisher_info in publisher_data %}
    {% assign parts = publisher_info | split: "#" %}
    {% assign publisher = parts[0] %}
    {% assign publisher_without_emoji = parts[1] %}
    {% assign count = parts[2] | plus: 0 %}
    {% assign publisher_slug = publisher_without_emoji | slugify %}
    
    {% if count == current_count %}
      <a href="{{ site.baseurl }}/publishers/{{ publisher_slug }}/" class="publisher-card">
        <div class="publisher-name {{ publisher_slug }}-publisher">{{ publisher }}</div>
        <div class="publisher-count">{{ count }}</div>
      </a>
    {% endif %}
  {% endfor %}
{% endfor %}
</div>