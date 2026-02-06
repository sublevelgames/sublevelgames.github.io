#!/usr/bin/env ruby

require 'yaml'

# Create publisher directory if it doesn't exist
Dir.mkdir('_publishers') unless Dir.exist?('_publishers')

# Get all publishers from posts
all_publishers = []
Dir.glob('_posts/*').each do |post_file|
  front_matter = File.read(post_file).split('---')[1]
  if front_matter
    yaml = YAML.safe_load(front_matter)
    if yaml['publisher']
      publishers = yaml['publisher']
      all_publishers.concat(publishers)
    end
  end
end

all_publishers.uniq.each do |publisher|
  # 첫 글자(이모지)를 제외한 퍼블리셔 텍스트 추출
  publisher_without_emoji = publisher[1..-1]
  # 퍼블리셔 슬러그 생성
  publisher_slug = publisher_without_emoji.strip.gsub(/\s+/, '-').gsub(/[^\w\-]/, '').downcase
  
  # Create publisher page if it doesn't exist
  publisher_file = "_publishers/#{publisher_slug}.md"
  
  unless File.exist?(publisher_file)
    File.open(publisher_file, 'w') do |file|
      file.write("---\nlayout: publisher\npublisher: \"#{publisher}\"\npermalink: /publishers/#{publisher_slug}/\n---\n")
    end
    puts "Created publisher page for: #{publisher} (slug: #{publisher_slug})"
  end
end