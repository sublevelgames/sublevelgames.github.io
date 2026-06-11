#!/usr/bin/env ruby

require 'yaml'

# Create platform directory if it doesn't exist
Dir.mkdir('_platforms') unless Dir.exist?('_platforms')

# Get all platforms from posts
all_platforms = []
Dir.glob('_posts/*').each do |post_file|
  front_matter = File.read(post_file).split('---')[1]
  if front_matter
    yaml = YAML.safe_load(front_matter)
    if yaml['platform']
      platforms = yaml['platform']
      all_platforms.concat(platforms)
    end
  end
end

all_platforms.uniq.each do |platform|
  # 첫 글자(이모지)를 제외한 플랫폼 텍스트 추출
  platform_without_emoji = platform[1..-1]
  # 플랫폼 슬러그 생성
  platform_slug = platform_without_emoji.strip.gsub(/\s+/, '-').gsub(/[^\w\-]/, '').downcase
  
  # Create platform page if it doesn't exist
  platform_file = "_platforms/#{platform_slug}.md"
  
  unless File.exist?(platform_file)
    File.open(platform_file, 'w') do |file|
      file.write("---\nlayout: platform\nplatform: \"#{platform}\"\npermalink: /platforms/#{platform_slug}/\n---\n")
    end
    puts "Created platform page for: #{platform} (slug: #{platform_slug})"
  end
end