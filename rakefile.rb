require 'yaml'

desc 'Generate tag pages'
task :generate_tags do
  puts 'Generating tag pages...'
  
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

  # Process each unique tag
  all_tags.uniq.each do |tag|
    # Create tag page filename (slugify the tag)
    tag_slug = tag.gsub(/[^\w]/, '-').downcase.gsub(/-+/, '-').gsub(/^-|-$/, '')
    tag_file = "_tags/#{tag_slug}.md"
    
    # Create tag page if it doesn't exist
    unless File.exist?(tag_file)
      File.open(tag_file, 'w') do |file|
        file.write("---\nlayout: tag\ntag: \"#{tag}\"\npermalink: /tags/#{tag_slug}/\n---\n")
      end
      puts "Created tag page for: #{tag}"
    end
  end
  
  puts 'Tag pages generated!'
end

desc 'Build site with tag pages'
task :build => [:generate_tags] do
  system 'bundle exec jekyll build'
end

desc 'Serve site with tag pages'
task :serve => [:generate_tags] do
  system 'bundle exec jekyll serve'
end
