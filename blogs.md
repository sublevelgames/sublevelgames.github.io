---
layout: page
title: Blogs
permalink: /blogs/
---

# 📝 Blog Posts

A collection of articles about game development and data analysis insights.

<div class="row">
  {% assign blog_posts = site.posts | where: "categories", "blog_post" %}
  {% for post in blog_posts %}   
    <div class="col-12 col-md-6 col-lg-4 mb-4">
     <a href="{{ post.url | prepend: site.baseurl }}" class="index-anchor">
      <div class="card rounded overflow-hidden">
        {% assign now = 'now' | date: '%s' %}
        {% assign two_weeks = 1209600 %}
        {% assign post_date = post.date | date: '%s' | plus: 0 %}
        {% assign date_diff = now | minus: post_date %}
        {% if date_diff < two_weeks %}
          <div class="new-badge">NEW</div>
        {% endif %}
        <div class="image">
          {% if post.image %}
          <img src="{{post.image | relative_url}}" alt="{{post.title}}">
          {% endif %}
          <div class="card-body">
            <h2 class="panel-title">{{ post.title | truncate: 25 }}</h2>
            <p class="p-0 my-1 mx-0"><span class="post-meta"><small>{{ post.date | date: "%b %-d, %Y" }}</small></span></p>
            {% if post.tags %}
              {% for tag in post.tags %}
                {% assign tag_text = tag | slice: 1, tag.size %}
                {% assign tag_slug = tag_text | slugify %}
                <a href="{{ site.baseurl }}/tags/{{ tag_slug }}/" class="tag-link">
                  <span class="badge badge-{{ post.colors[forloop.index0] }}">{{ tag }}</span>
                </a>
              {% endfor %}
            {% endif %}
            <p></p>
            <p>{{ post.excerpt | strip_html | strip_newlines | truncate: 150 }}</p>
          </div>
        </div>
      </div>
    </a>
    </div>
  {% endfor %}
  
  {% if blog_posts.size == 0 %}
    <div class="col-12">
      <div class="alert alert-info text-center" role="alert">
        <h4 class="alert-heading">📝 No Blog Posts Yet</h4>
        <p>Blog posts will appear here once they are published.</p>
        <p class="mb-0">Check back soon for updates!</p>
      </div>
    </div>
  {% endif %}
</div>

---

## 📋 Posts by Category

{% assign blog_posts = site.posts | where: "categories", "blog_post" %}
{% assign categories = blog_posts | map: "tags" | join: "," | split: "," | uniq | sort %}

{% if categories.size > 0 %}
  ### 🎮 Game Development
  <ul>
    {% for post in blog_posts %}
      {% if post.tags contains "🎮Game" %}
        <li><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></li>
      {% endif %}
    {% endfor %}
  </ul>

  ### 📊 Data Analysis
  <ul>
    {% for post in blog_posts %}
      {% if post.tags contains "📊Data" %}
        <li><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></li>
      {% endif %}
    {% endfor %}
  </ul>

  ### 🔧 Development Diary
  <ul>
    {% for post in blog_posts %}
      {% if post.tags contains "🔧Development" %}
        <li><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></li>
      {% endif %}
    {% endfor %}
  </ul>
{% else %}
  <p><em>Categories will appear here once blog posts are published.</em></p>
{% endif %}

---

## 🏷️ Tags

{% assign blog_posts = site.posts | where: "categories", "blog_post" %}
{% assign all_tags = blog_posts | map: "tags" | join: "," | split: "," | uniq | sort %}

<div class="row">
  {% if all_tags.size > 0 %}
    <div class="col-md-6">
      <ul class="list-unstyled">
        {% for tag in all_tags limit: 5 %}
          {% assign tag_posts = blog_posts | where: "tags", tag %}
          {% assign tag_text = tag | slice: 1, tag.size %}
          {% assign tag_slug = tag_text | slugify %}
          <li><a href="{{ site.baseurl }}/tags/{{ tag_slug }}/"><span class="badge badge-primary">{{ tag }}</span> ({{ tag_posts.size }})</a></li>
        {% endfor %}
      </ul>
    </div>
    {% if all_tags.size > 5 %}
      <div class="col-md-6">
        <ul class="list-unstyled">
          {% for tag in all_tags offset: 5 %}
            {% assign tag_posts = blog_posts | where: "tags", tag %}
            {% assign tag_text = tag | slice: 1, tag.size %}
            {% assign tag_slug = tag_text | slugify %}
            <li><a href="{{ site.baseurl }}/tags/{{ tag_slug }}/"><span class="badge badge-info">{{ tag }}</span> ({{ tag_posts.size }})</a></li>
          {% endfor %}
        </ul>
      </div>
    {% endif %}
  {% else %}
    <div class="col-12">
      <p><em>Tags will appear here once blog posts are published.</em></p>
    </div>
  {% endif %}
</div>

---

<div class="alert alert-info" role="alert">
  <h4 class="alert-heading">💡 About This Blog</h4>
  <p>This blog is a space for sharing personal insights about game development experiences, data analysis, and market trends.</p>
  <hr>
  <p class="mb-0">New posts will be updated and available here regularly.</p>
</div>
