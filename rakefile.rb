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

desc 'Generate platform pages'
task :generate_platforms do
  puts 'Generating platform pages...'
  
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

  # Process each unique platform
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
  
  puts 'Platform pages generated!'
end

desc 'Build site with tag pages'
task :build => [:generate_tags] do
  system 'bundle exec jekyll build'
end

desc 'Serve site with tag pages'
task :serve => [:generate_tags] do
  system 'bundle exec jekyll serve'
end