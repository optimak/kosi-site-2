// Gallery filtering functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded: Starting initialization');
    
    // Wait for ImageManager to be available
    const checkImageManager = () => {
        if (typeof ImageManager !== 'undefined') {
            console.log('ImageManager is available, populating grids');
            // Populate artwork grid dynamically
            populateArtworkGrid();
            populateGalleryGrid();
            // populateAboutImages(); // Disabled - using direct HTML image
        } else {
            console.log('ImageManager not available yet, retrying...');
            setTimeout(checkImageManager, 100);
        }
    };
    
    checkImageManager();
    
    // Gallery filter functionality
    const filterBtns = document.querySelectorAll('.filter-btn');
    const artworkItems = document.querySelectorAll('.artwork-item');

    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');
                
                const filter = btn.getAttribute('data-filter');
                
                artworkItems.forEach(item => {
                    if (filter === 'all' || item.getAttribute('data-category') === filter) {
                        item.style.display = 'block';
                        // Add fade-in animation
                        item.style.opacity = '0';
                        setTimeout(() => {
                            item.style.opacity = '1';
                        }, 50);
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    // Mobile menu toggle
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenu.classList.remove('active');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenu.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Basic validation
            if (!data.name || !data.email || !data.subject || !data.message) {
                alert('Please fill in all required fields.');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                alert('Please enter a valid email address.');
                return;
            }

            // Simulate form submission (replace with actual form handling)
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            // Simulate API call
            setTimeout(() => {
                alert('Thank you for your message! I\'ll get back to you within 24-48 hours.');
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1000);
        });
    }

    // Newsletter signup form
    const notifyForm = document.querySelector('.notify-form');
    if (notifyForm) {
        notifyForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            
            if (!email) {
                alert('Please enter your email address.');
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            // Simulate signup
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Signing up...';
            submitBtn.disabled = true;

            setTimeout(() => {
                alert('Thank you! You\'ll be notified when the shop launches.');
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1000);
        });
    }

    // Minimal scroll handling - only essential functionality
    let lastScrollTop = 0;
    let ticking = false;
    const navbar = document.querySelector('nav');
    
    function handleScroll() {
        if (!ticking) {
            requestAnimationFrame(() => {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                
                // Only update navbar if scroll direction changed significantly
                if (Math.abs(scrollTop - lastScrollTop) > 5) {
                    if (scrollTop > lastScrollTop && scrollTop > 100) {
                        navbar.style.transform = 'translateY(-100%)';
                    } else {
                        navbar.style.transform = 'translateY(0)';
                    }
                    
                    // Update navbar background
                    // if (scrollTop > 50) {
                    //     navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                    //     navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
                    // } else {
                    //     navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                    //     navbar.style.boxShadow = 'none';
                    // }
                    
                    lastScrollTop = scrollTop;
                }
                
                ticking = false;
            });
            ticking = true;
        }
    }
    
    // Throttled scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Add loading states to buttons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            if (this.classList.contains('loading')) {
                e.preventDefault();
                return;
            }
            
            // Add subtle loading animation for external links
            if (this.href && this.href.startsWith('http') && !this.href.includes(window.location.hostname)) {
                this.style.opacity = '0.7';
                setTimeout(() => {
                    this.style.opacity = '1';
                }, 200);
            }
        });
    });

    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // ESC key to close mobile menu
        if (e.key === 'Escape' && navLinks && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            mobileMenu.classList.remove('active');
        }
    });

    console.log('Portfolio site loaded successfully!');
    console.log('Browser info:', navigator.userAgent);
    console.log('Viewport size:', window.innerWidth, 'x', window.innerHeight);
});

// Progressive loading variables
let currentlyLoaded = 0;
let isLoading = false;
let allArtworks = [];
const portfolioPortraitsActive = Boolean(
    document.body && document.body.classList.contains('portfolio-portraits')
);
let portfolioViewerItems = [];
let portfolioViewerIndexMap = {};

// Get initial load count based on screen size
function getInitialLoadCount() {
    return window.innerWidth <= 768 ? 8 : 16;
}

// Progressive artwork grid population
function populateArtworkGrid() {
    const artworkGrid = document.querySelector('.artwork-grid');
    if (!artworkGrid || typeof ImageManager === 'undefined') {
        return;
    }

    // Get all artworks once
    if (allArtworks.length === 0) {
        allArtworks = ImageManager.getAllArtwork();
    }
    if (portfolioPortraitsActive) {
        ensurePortfolioViewerData();
    }

    // Load initial batch
    const initialCount = getInitialLoadCount();
    loadMoreArtworks(initialCount);

    // Set up intersection observer for automatic loading
    setupInfiniteScroll();
}

// Load more artworks function
function loadMoreArtworks(count = 8) {
    if (isLoading || currentlyLoaded >= allArtworks.length) {
        return;
    }

    isLoading = true;
    const artworkGrid = document.querySelector('.artwork-grid');
    const fragment = document.createDocumentFragment();

    // Calculate how many to actually load
    const remainingItems = allArtworks.length - currentlyLoaded;
    const itemsToLoad = Math.min(count, remainingItems);

    for (let i = 0; i < itemsToLoad; i++) {
        const artwork = allArtworks[currentlyLoaded + i];
        const artworkId = Object.keys(IMAGES.artwork).find(key => IMAGES.artwork[key] === artwork);
        
        const link = document.createElement('a');
        link.href = `artwork.html?id=${artworkId}`;
        link.className = 'artwork-link';
        if (portfolioPortraitsActive && typeof FullscreenViewer !== 'undefined') {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                openPortfolioViewer(artworkId);
            });
        }
        
        const img = document.createElement('img');
        img.src = artwork.image;
        img.alt = artwork.alt;
        // Use lazy loading for all but the first batch
        img.loading = currentlyLoaded === 0 ? 'eager' : 'lazy';
        img.decoding = 'async';
        // Set explicit dimensions to prevent layout shift
        img.style.width = '100%';
        img.style.height = '300px';
        img.style.objectFit = 'cover';
        
        const overlay = document.createElement('div');
        overlay.className = 'artwork-overlay';
        const small = document.createElement('small');
        small.textContent = artwork.title;
        overlay.appendChild(small);
        
        link.appendChild(img);
        link.appendChild(overlay);
        fragment.appendChild(link);
    }

    artworkGrid.appendChild(fragment);
    currentlyLoaded += itemsToLoad;
    isLoading = false;

    console.log(`Loaded ${itemsToLoad} more artworks. Total: ${currentlyLoaded}/${allArtworks.length}`);
}

// Set up intersection observer for infinite scroll
function setupInfiniteScroll() {
    // Create a sentinel element at the bottom
    const artworkGrid = document.querySelector('.artwork-grid');
    const sentinel = document.createElement('div');
    sentinel.className = 'scroll-sentinel';
    sentinel.style.height = '1px';
    artworkGrid.parentNode.insertBefore(sentinel, artworkGrid.nextSibling);

    // Set up intersection observer
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && currentlyLoaded < allArtworks.length) {
                    // Load 8 more when sentinel comes into view
                    loadMoreArtworks(8);
                }
            });
        },
        {
            rootMargin: '200px' // Start loading 200px before sentinel is visible
        }
    );

    observer.observe(sentinel);
}

// Populate gallery grid dynamically (unchanged for gallery page)
function populateGalleryGrid() {
    const galleryGrid = document.querySelector('#gallery-grid');
    if (!galleryGrid || typeof ImageManager === 'undefined') return;

    const allImages = ImageManager.getGalleryImages('all');
    
    galleryGrid.innerHTML = allImages.map(image => {
        const category = getCategoryForImage(image.id);
        return `
            <div class="artwork-item" data-category="${category}">
                <a href="artwork-detail.html?id=${image.id}">
                    <img src="${image.image}" alt="${image.alt}" loading="lazy" decoding="async" style="width:100%;height:300px;object-fit:cover;">
                    <div class="artwork-overlay">
                        <div class="artwork-info">
                            <h3>${image.title}</h3>
                            <p>${image.description}</p>
                        </div>
                    </div>
                </a>
            </div>
        `;
    }).join('');
}

// Helper function to determine category for gallery images
function getCategoryForImage(imageId) {
    if (imageId.includes('cover')) return 'covers';
    if (imageId.includes('portrait') || imageId.includes('character') || imageId.includes('rider')) return 'portraits';
    if (imageId.includes('watercolor') || imageId.includes('charcoal') || imageId.includes('mixed') || imageId.includes('oil')) return 'traditional';
    return 'all';
}

// Populate about page images
function populateAboutImages() {
    if (typeof ImageManager === 'undefined') {
        return;
    }
    
    const aboutImages = ImageManager.getAboutImages();
    const artistPhoto = document.getElementById('artist-photo');
    
    if (artistPhoto && aboutImages.artistPhoto) {
        // Only update if the image source is different
        if (artistPhoto.src !== window.location.origin + '/' + aboutImages.artistPhoto.image) {
            artistPhoto.src = aboutImages.artistPhoto.image;
            artistPhoto.alt = aboutImages.artistPhoto.alt;
        }
    }
}

function ensurePortfolioViewerData() {
    if (
        !portfolioPortraitsActive ||
        portfolioViewerItems.length > 0 ||
        typeof IMAGES === 'undefined'
    ) {
        return;
    }

    const entries = Object.entries(IMAGES.artwork || {});
    portfolioViewerItems = entries.map(([id, data]) => ({
        id,
        title: data.title,
        alt: data.alt,
        image: data.image,
        fullImage: data.fullImage || data.image
    }));
    portfolioViewerIndexMap = entries.reduce((acc, [id], index) => {
        acc[id] = index;
        return acc;
    }, {});
}

function openPortfolioViewer(artworkId) {
    if (!portfolioPortraitsActive || typeof FullscreenViewer === 'undefined') {
        window.location.href = `artwork.html?id=${artworkId}`;
        return;
    }

    ensurePortfolioViewerData();
    const index = portfolioViewerIndexMap[artworkId];
    if (typeof index === 'number') {
        FullscreenViewer.open(portfolioViewerItems, index);
    } else {
        window.location.href = `artwork.html?id=${artworkId}`;
    }
}
