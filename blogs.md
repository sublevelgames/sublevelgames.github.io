---
layout: default
title: Blogs
permalink: /blogs/
---

<div class="container-fluid">
  <div class="row">
    <div class="col-12">
      <h1>📝 Blog Posts</h1>

      <div class="blog-header">
        <p class="blog-description">A collection of articles about game development and data analysis insights.</p>
      </div>

      <div class="blog-posts">
        <div class="row">
          {% for post in site.blog_posts %}   
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
                  <img src="{{post.image | relative_url}}" alt="{{post.title}}" class="card-img-top">
                  {% endif %}
                  <div class="card-body">
                    <h2 class="panel-title">{{ post.title | truncate: 50 }}</h2>
                    <p class="post-meta">
                      <small>{{ post.date | date: "%b %-d, %Y" }}</small>
                      {% if post.id %}
                      {% assign clean_id = post.id | replace: '/blogs/', '' | replace: '/', '-' %}
                      <span class="post-views-card">
                        <i class="view-icon">👁</i> 
                        <span id="views-{{ clean_id }}" data-post-id="{{ clean_id }}">0</span>
                      </span>
                      {% endif %}
                      {% if site.disqus-shortname and site.disqus == 'yes' %}
                      <span class="comments"> | 💬 <a href="{{ post.url }}#disqus_thread">Comments</a></span>
                      {% endif %}
                    </p>
                    <div class="tag-container">
                      {% if post.tags %}
                        {% for tag in post.tags %}
                          {% assign tag_text = tag | slice: 1, tag.size %}
                          {% assign tag_slug = tag_text | slugify %}
                          <a href="{{ site.baseurl }}/tags/{{ tag_slug }}/" class="tag-link">
                            <span class="badge badge-{{ post.colors[forloop.index0] }}">{{ tag }}</span>
                          </a>
                        {% endfor %}
                      {% endif %}
                    </div>
                    <p class="post-excerpt">{{ post.excerpt | strip_html | strip_newlines | truncate: 120 }}</p>
                  </div>
                </div>
              </div>
            </a>
            </div>
          {% endfor %}
          
          {% if site.blog_posts.size == 0 %}
            <div class="col-12">
              <div class="blog-empty-state">
                <div class="alert alert-info" role="alert">
                  <h4 class="alert-heading">📝 No Blog Posts Yet</h4>
                  <p>Blog posts will appear here once they are published.</p>
                  <p class="mb-0">Check back soon for updates!</p>
                </div>
              </div>
            </div>
          {% endif %}
        </div>
      </div>

      <hr>

      <h2>📋 Posts by Category</h2>

      <div class="blog-categories">
        {% assign blog_posts = site.blog_posts %}
        {% assign categories = blog_posts | map: "tags" | join: "," | split: "," | uniq | sort %}

        {% if categories.size > 0 %}
          <h3>🎮 Game Development</h3>
          <ul>
            {% for post in blog_posts %}
              {% if post.tags contains "🎮Game" %}
                <li>
                  <a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
                  {% if post.id %}
                  {% assign clean_id = post.id | replace: '/blogs/', '' | replace: '/', '-' %}
                  <span class="category-views">(<span id="cat-views-{{ clean_id }}" data-post-id="{{ clean_id }}">0</span> views)</span>
                  {% endif %}
                </li>
              {% endif %}
            {% endfor %}
          </ul>

          <h3>📊 Data Analysis</h3>
          <ul>
            {% for post in blog_posts %}
              {% if post.tags contains "📊Data" %}
                <li>
                  <a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
                  {% if post.id %}
                  {% assign clean_id = post.id | replace: '/blogs/', '' | replace: '/', '-' %}
                  <span class="category-views">(<span id="cat-views-{{ clean_id }}" data-post-id="{{ clean_id }}">0</span> views)</span>
                  {% endif %}
                </li>
              {% endif %}
            {% endfor %}
          </ul>

          <h3>🔧 Development Diary</h3>
          <ul>
            {% for post in blog_posts %}
              {% if post.tags contains "🔧Development" %}
                <li>
                  <a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
                  {% if post.id %}
                  {% assign clean_id = post.id | replace: '/blogs/', '' | replace: '/', '-' %}
                  <span class="category-views">(<span id="cat-views-{{ clean_id }}" data-post-id="{{ clean_id }}">0</span> views)</span>
                  {% endif %}
                </li>
              {% endif %}
            {% endfor %}
          </ul>
        {% else %}
          <p><em>Categories will appear here once blog posts are published.</em></p>
        {% endif %}
      </div>

      <hr>

      <!-- 인기 포스트 섹션 추가 -->
      <h2>🔥 Popular Posts</h2>
      <div class="popular-posts-section">
        <div id="popular-posts-list" class="popular-posts-grid">
          <!-- JavaScript로 동적 생성 -->
        </div>
      </div>

      <!-- 인기 포스트를 위한 데이터 저장 -->
      <div id="posts-data" style="display:none;">
        {% for post in site.blog_posts %}
        {% if post.id %}
        {% assign clean_id = post.id | replace: '/blogs/', '' | replace: '/', '-' %}
        <div data-post-info="{{ clean_id }}" 
            data-title="{{ post.title | escape }}" 
            data-url="{{ post.url | prepend: site.baseurl }}"
            data-date="{{ post.date | date: "%b %-d, %Y" }}"
            data-excerpt="{{ post.excerpt | strip_html | strip_newlines | truncate: 80 | escape }}">
        </div>
        {% endif %}
        {% endfor %}
      </div>

      <hr>

      <h2>🏷️ Tags</h2>

      <div class="blog-tags">
        {% assign blog_posts = site.blog_posts %}
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
      </div>

      <hr>

      <div class="blog-about">
        <h4 class="alert-heading">💡 About This Blog</h4>
        <p>This blog is a space for sharing personal insights about game development experiences, data analysis, and market trends.</p>
        <hr>
        <p class="mb-0">New posts will be updated and available here regularly.</p>
      </div>

    </div>
  </div>
</div>

{% include firebase-scripts.html %}