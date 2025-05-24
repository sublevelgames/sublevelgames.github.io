/**
 * Table of Contents Generator for Jekyll Blog
 * Waits for full page load and Jekyll rendering before generating TOC
 */

(function() {
  'use strict';
  
  // Configuration
  const config = {
    postContentSelector: '.post-content',
    tocListSelector: '#toc-list', 
    tocContainerSelector: '.blog-toc',
    headingSelectors: 'h1, h2, h3, h4, h5, h6',
    maxAttempts: 15,
    attemptInterval: 500,
    initialDelay: 300
  };
  
  let tocGenerated = false;
  let attempts = 0;
  
  /**
   * Main initialization function
   */
  function initTOC() {
    console.log('🚀 TOC Initialization starting...');
    
    // Wait for window load first
    if (document.readyState !== 'complete') {
      window.addEventListener('load', function() {
        setTimeout(startTOCGeneration, config.initialDelay);
      });
    } else {
      setTimeout(startTOCGeneration, config.initialDelay);
    }
    
    // Backup initialization
    document.addEventListener('DOMContentLoaded', function() {
      setTimeout(startTOCGeneration, 100);
    });
  }
  
  /**
   * Start the TOC generation process with retry logic
   */
  function startTOCGeneration() {
    if (tocGenerated) return;
    
    attempts = 0;
    attemptTOCGeneration();
  }
  
  /**
   * Attempt to generate TOC with retry logic
   */
  function attemptTOCGeneration() {
    attempts++;
    console.log(`🔍 TOC Generation Attempt ${attempts}/${config.maxAttempts}`);
    
    // Find required elements
    const postContent = document.querySelector(config.postContentSelector);
    const tocList = document.querySelector(config.tocListSelector);
    const tocContainer = document.querySelector(config.tocContainerSelector);
    
    // Check if all elements are present
    if (!postContent) {
      console.log('❌ Post content element not found:', config.postContentSelector);
      retryIfPossible();
      return;
    }
    
    if (!tocList) {
      console.log('❌ TOC list element not found:', config.tocListSelector);
      retryIfPossible();
      return;
    }
    
    if (!tocContainer) {
      console.log('❌ TOC container element not found:', config.tocContainerSelector);
      retryIfPossible();
      return;
    }
    
    console.log('✅ All required elements found');
    
    // Small delay to ensure content is fully rendered
    setTimeout(function() {
      generateTOC(postContent, tocList, tocContainer);
    }, 100);
  }
  
  /**
   * Retry generation if attempts remain
   */
  function retryIfPossible() {
    if (attempts < config.maxAttempts) {
      console.log(`⏳ Retrying in ${config.attemptInterval}ms...`);
      setTimeout(attemptTOCGeneration, config.attemptInterval);
    } else {
      console.log('❌ Max attempts reached. TOC generation failed.');
    }
  }
  
  /**
   * Generate the actual TOC
   */
  function generateTOC(postContent, tocList, tocContainer) {
    const headings = postContent.querySelectorAll(config.headingSelectors);
    console.log(`📋 Found ${headings.length} headings`);
    
    if (headings.length === 0) {
      console.log('ℹ️ No headings found, hiding TOC');
      tocContainer.style.display = 'none';
      tocGenerated = true;
      return;
    }
    
    // Clear existing TOC
    tocList.innerHTML = '';
    
    // Generate TOC items
    headings.forEach(function(heading, index) {
      createTOCItem(heading, index, tocList);
    });
    
    // Show TOC
    tocContainer.style.display = 'block';
    tocGenerated = true;
    
    console.log(`✅ TOC generated successfully with ${headings.length} items`);
    
    // Initialize scroll spy if desired
    initScrollSpy(headings);
  }
  
  /**
   * Create individual TOC item
   */
  function createTOCItem(heading, index, tocList) {
    // Ensure heading has ID
    if (!heading.id) {
      heading.id = generateHeadingId(heading.textContent, index);
    }
    
    const li = document.createElement('li');
    const a = document.createElement('a');
    
    a.href = '#' + heading.id;
    a.textContent = heading.textContent.trim();
    a.className = 'toc-link';
    a.setAttribute('data-heading-id', heading.id);
    
    // Style based on heading level
    const level = parseInt(heading.tagName.substring(1));
    styleTOCItem(li, a, level);
    
    // Add click handler
    a.addEventListener('click', function(e) {
      e.preventDefault();
      scrollToHeading(heading.id);
    });
    
    li.appendChild(a);
    tocList.appendChild(li);
  }
  
  /**
   * Generate clean ID for heading
   */
  function generateHeadingId(text, index) {
    const cleanText = text.trim()
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .substring(0, 50);
    
    return cleanText || ('heading-' + index);
  }
  
  /**
   * Style TOC item based on heading level
   */
  function styleTOCItem(li, a, level) {
    li.style.marginLeft = ((level - 1) * 0.8) + 'rem';
    li.style.marginBottom = '0.3rem';
    li.style.listStyle = 'none';
    
    a.style.textDecoration = 'none';
    a.style.fontSize = Math.max(0.85, 1.1 - (level * 0.08)) + 'rem';
    a.style.color = level <= 2 ? '#2c3e50' : '#5a6c7d';
    a.style.fontWeight = level <= 2 ? '600' : '400';
    a.style.display = 'block';
    a.style.padding = '0.2rem 0';
    a.style.borderRadius = '3px';
    a.style.transition = 'all 0.2s ease';
    
    // Add hover effects
    a.addEventListener('mouseenter', function() {
      this.style.backgroundColor = '#f8f9fa';
      this.style.color = '#007bff';
      this.style.paddingLeft = '0.5rem';
    });
    
    a.addEventListener('mouseleave', function() {
      this.style.backgroundColor = 'transparent';
      this.style.color = level <= 2 ? '#2c3e50' : '#5a6c7d';
      this.style.paddingLeft = '0';
    });
  }
  
  /**
   * Smooth scroll to heading
   */
  function scrollToHeading(headingId) {
    const target = document.getElementById(headingId);
    if (target) {
      target.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
      
      // Highlight effect
      target.style.backgroundColor = '#fff3cd';
      target.style.transition = 'background-color 0.3s ease';
      setTimeout(function() {
        target.style.backgroundColor = '';
      }, 1500);
    }
  }
  
  /**
   * Initialize scroll spy to highlight current section
   */
  function initScrollSpy(headings) {
    if (headings.length === 0) return;
    
    let ticking = false;
    
    function updateActiveLink() {
      if (!ticking) {
        requestAnimationFrame(function() {
          const scrollTop = window.pageYOffset;
          let activeHeading = null;
          
          // Find the current section
          for (let i = headings.length - 1; i >= 0; i--) {
            const heading = headings[i];
            if (heading.offsetTop <= scrollTop + 100) {
              activeHeading = heading;
              break;
            }
          }
          
          // Update active state
          const tocLinks = document.querySelectorAll('.toc-link');
          tocLinks.forEach(function(link) {
            link.classList.remove('active');
          });
          
          if (activeHeading) {
            const activeLink = document.querySelector(`[data-heading-id="${activeHeading.id}"]`);
            if (activeLink) {
              activeLink.classList.add('active');
            }
          }
          
          ticking = false;
        });
        ticking = true;
      }
    }
    
    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink(); // Initial call
  }
  
  /**
   * Debug function for troubleshooting
   */
  window.debugTOC = function() {
    console.log('=== TOC Debug Information ===');
    console.log('Generated:', tocGenerated);
    console.log('Attempts:', attempts);
    console.log('Post content element:', document.querySelector(config.postContentSelector));
    console.log('TOC list element:', document.querySelector(config.tocListSelector));
    console.log('TOC container element:', document.querySelector(config.tocContainerSelector));
    
    const postContent = document.querySelector(config.postContentSelector);
    if (postContent) {
      const headings = postContent.querySelectorAll(config.headingSelectors);
      console.log(`Headings found: ${headings.length}`);
      headings.forEach(function(h, i) {
        console.log(`${i + 1}. ${h.tagName}: "${h.textContent.trim()}" (ID: ${h.id || 'none'})`);
      });
    }
    
    // Force regeneration
    console.log('Forcing TOC regeneration...');
    tocGenerated = false;
    startTOCGeneration();
  };
  
  // Start initialization
  initTOC();
  
})();