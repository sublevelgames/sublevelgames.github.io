#!/usr/bin/env ruby

require 'yaml'

# Create tag directory if it doesn't exist
Dir.mkdir('tags') unless Dir.exist?('tags')

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
  # Create tag page if it doesn't exist
  tag_filename = tag.gsub(/[^\w]/, '-').downcase
  tag_file = "tags/#{tag_filename}.md"
  
  unless File.exist?(tag_file)
    File.open(tag_file, 'w') do |file|
      file.write("---\nlayout: tag\ntag: #{tag}\npermalink: /tags/#{tag_filename}/\n---\n")
    end
    puts "Created tag page for: #{tag}"
  end
end
