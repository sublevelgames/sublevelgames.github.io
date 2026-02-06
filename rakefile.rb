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
  
  puts 'Tag pages generated!'
end

desc 'Generate publisher pages'
task :generate_publishers do
  puts 'Generating publisher pages...'
  
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

  # Process each unique publisher
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
  
  puts 'Publisher pages generated!'
end

desc 'Build site with tag pages'
task :build => [:generate_tags] do
  system 'bundle exec jekyll build'
end

desc 'Serve site with tag pages'
task :serve => [:generate_tags] do
  system 'bundle exec jekyll serve'
end