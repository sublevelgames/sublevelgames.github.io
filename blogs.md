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
                      <span class="post-views-card">
                        <i class="view-icon">👁</i> 
                        <span id="views-{{ post.id }}">0</span>
                      </span>
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
                  <span class="category-views">(<span id="cat-views-{{ post.id }}">0</span> views)</span>
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
                  <span class="category-views">(<span id="cat-views-{{ post.id }}">0</span> views)</span>
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
                  <span class="category-views">(<span id="cat-views-{{ post.id }}">0</span> views)</span>
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

<!-- Firebase 조회수 스크립트 -->
<script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-database-compat.js"></script>
<script src="{{ site.baseurl }}/js/firebase-config.js"></script>
<script src="{{ site.baseurl }}/js/blog-view-counter.js"></script>

<script>
document.addEventListener('DOMContentLoaded', async function() {
    // 모든 포스트 정보 수집
    const posts = [
        {% for post in site.blog_posts %}
        {% if post.id %}
        { 
            id: '{{ post.id }}', 
            title: {{ post.title | jsonify }},
            url: '{{ post.url | prepend: site.baseurl }}',
            date: '{{ post.date | date: "%b %-d, %Y" }}',
            excerpt: {{ post.excerpt | strip_html | strip_newlines | truncate: 80 | jsonify }}
        }{% unless forloop.last %},{% endunless %}
        {% endif %}
        {% endfor %}
    ];
    
    // 조회수 표시를 위한 요소 ID 매핑
    const viewElements = [];
    {% for post in site.blog_posts %}
    {% if post.id %}
    viewElements.push({ id: '{{ post.id }}', elementId: 'views-{{ post.id }}' });
    // 카테고리 섹션의 조회수도 추가
    viewElements.push({ id: '{{ post.id }}', elementId: 'cat-views-{{ post.id }}' });
    {% endif %}
    {% endfor %}
    
    // 조회수 표시
    if (typeof blogViewCounter !== 'undefined' && viewElements.length > 0) {
        await blogViewCounter.displayMultiplePostViews(viewElements);
        
        // 인기 포스트 표시
        displayPopularPosts(posts);
    }
});

async function displayPopularPosts(allPosts) {
    if (typeof blogViewCounter === 'undefined') return;
    
    const popularPosts = await blogViewCounter.getPopularPosts(5);
    const listElement = document.getElementById('popular-posts-list');
    
    if (!listElement || popularPosts.length === 0) return;
    
    // ID로 포스트 정보 찾기
    const postMap = {};
    allPosts.forEach(post => {
        postMap[post.id] = post;
    });
    
    listElement.innerHTML = popularPosts.map((post, index) => {
        const postInfo = postMap[post.id];
        if (!postInfo) return '';
        
        return `
            <div class="popular-post-item">
                <span class="popular-rank">${index + 1}</span>
                <div class="popular-post-content">
                    <h4><a href="${postInfo.url}">${postInfo.title}</a></h4>
                    <p class="popular-post-meta">
                        <small>${postInfo.date} • ${post.views.toLocaleString()} views</small>
                    </p>
                    <p class="popular-post-excerpt">${postInfo.excerpt}</p>
                </div>
            </div>
        `;
    }).join('');
}
</script>

<style>
/* 조회수 스타일 */
.post-views-card {
    margin-left: 10px;
    color: #666;
}

.category-views {
    color: #999;
    font-size: 0.85em;
    margin-left: 5px;
}

/* 인기 포스트 스타일 */
.popular-posts-section {
    background: #f8f9fa;
    padding: 20px;
    border-radius: 10px;
    margin: 20px 0;
}

.popular-posts-grid {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.popular-post-item {
    display: flex;
    gap: 15px;
    padding: 15px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    transition: transform 0.2s;
}

.popular-post-item:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.15);
}

.popular-rank {
    font-size: 1.5em;
    font-weight: bold;
    color: #ff6b6b;
    min-width: 30px;
}

.popular-post-content {
    flex: 1;
}

.popular-post-content h4 {
    margin: 0 0 5px 0;
    font-size: 1.1em;
}

.popular-post-content h4 a {
    color: #333;
    text-decoration: none;
}

.popular-post-content h4 a:hover {
    color: #0066cc;
}

.popular-post-meta {
    color: #666;
    margin-bottom: 5px;
}

.popular-post-excerpt {
    color: #555;
    font-size: 0.9em;
    margin: 0;
}
</style>