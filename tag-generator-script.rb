#!/usr/bin/env ruby

require 'yaml'

# Create tag directory if it doesn't exist
Dir.mkdir('_tags') unless Dir.exist?('_tags')

# Get all tags from posts
all_tags = []
Dir.glob('_posts/*').each do |post_file|
  front_matter = File.read(post_file).split('---')[1]
  if front_matter
    yaml = YAML.safe_load(front_matter)
    if yaml['tags']
      tags = yaml['tags']
      all_tags.concat(tags)
    end
  end
end

all_tags.uniq.each do |tag|
  # 첫 글자(이모지)를 제외한 태그 텍스트 추출
  tag_without_emoji = tag[1..-1]
  # 태그 슬러그 생성
  tag_slug = tag_without_emoji.strip.gsub(/\s+/, '-').gsub(/[^\w\-]/, '').downcase
  
  # Create tag page if it doesn't exist
  tag_file = "_tags/#{tag_slug}.md"
  
  unless File.exist?(tag_file)
    File.open(tag_file, 'w') do |file|
      file.write("---\nlayout: tag\ntag: \"#{tag}\"\npermalink: /tags/#{tag_slug}/\n---\n")
    end
    puts "Created tag page for: #{tag} (slug: #{tag_slug})"
  end
end