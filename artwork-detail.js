
// Artwork detail page functionality
document.addEventListener('DOMContentLoaded', function() {
    // Check if this is an artwork detail page
    if (!document.querySelector('.artwork-viewer')) {
        return; // Not an artwork detail page
    }

    // Wait for ImageManager to be available
    const checkImageManager = () => {
        if (typeof ImageManager !== 'undefined') {
            loadArtworkDetail();
        } else {
            setTimeout(checkImageManager, 100);
        }
    };
    
    checkImageManager();
});

function loadArtworkDetail() {
    // Get artwork ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const artworkId = urlParams.get('id');
    
    if (!artworkId) {
        console.error('No artwork ID provided');
        showErrorMessage('No artwork specified');
        return;
    }

    // Get artwork data
    const artwork = ImageManager.getArtwork(artworkId);
    
    if (!artwork) {
        console.error('Artwork not found:', artworkId);
        showErrorMessage('Artwork not found');
        return;
    }

    // Display the artwork
    displayArtwork(artwork, artworkId);
    
    // Set up navigation
    setupNavigation(artworkId);
    
    // Set page title
    document.title = `${artwork.title} - KosiTheCreator`;
}

function displayArtwork(artwork, artworkId) {
    const artworkContainer = document.querySelector('.artwork-container');
    const artworkViewer = document.querySelector('.artwork-viewer');
    
    if (!artworkContainer || !artworkViewer) {
        console.error('Required DOM elements not found');
        return;
    }

    // Create high-quality image element
    const img = document.createElement('img');
    
    // Use fullImage if available, fallback to regular image
    img.src = artwork.fullImage || artwork.image;
    img.alt = artwork.alt;
    img.loading = 'eager'; // Load immediately for detail view
    img.decoding = 'async';
    
    // Add loading state
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.3s ease';
    
    // Handle image load
    img.addEventListener('load', function() {
        this.style.opacity = '1';
        hideLoadingSpinner();
    });
    
    // Handle image error
    img.addEventListener('error', function() {
        console.error('Failed to load artwork image');
        showErrorMessage('Failed to load image');
        hideLoadingSpinner();
    });
    
    // Clear existing content and add new image
    artworkContainer.innerHTML = '';
    artworkContainer.appendChild(img);
    
    // Add artwork info if there's a container for it
    updateArtworkInfo(artwork);
    
    // Show loading spinner
    showLoadingSpinner();
}

function updateArtworkInfo(artwork) {
    // Update artwork title
    const titleElement = document.querySelector('.artwork-title');
    if (titleElement) {
        titleElement.textContent = artwork.title;
    }
    
    // Update artwork description/alt text
    const descriptionElement = document.querySelector('.artwork-description');
    if (descriptionElement) {
        descriptionElement.textContent = artwork.alt;
    }
    
    // Update any other artwork info elements
    const infoElements = document.querySelectorAll('[data-artwork-info]');
    infoElements.forEach(element => {
        const infoType = element.getAttribute('data-artwork-info');
        if (artwork[infoType]) {
            element.textContent = artwork[infoType];
        }
    });
}

function setupNavigation(currentArtworkId) {
    const allArtworks = ImageManager.getAllArtwork();
    const artworkIds = Object.keys(IMAGES.artwork);
    const currentIndex = artworkIds.indexOf(currentArtworkId);
    
    const prevBtn = document.querySelector('.nav-arrow.prev');
    const nextBtn = document.querySelector('.nav-arrow.next');
    
    if (!prevBtn || !nextBtn) {
        console.warn('Navigation buttons not found');
        return;
    }
    
    // Set up previous button
    if (currentIndex > 0) {
        const prevArtworkId = artworkIds[currentIndex - 1];
        prevBtn.disabled = false;
        prevBtn.onclick = () => {
            window.location.href = `artwork.html?id=${prevArtworkId}`;
        };
    } else {
        prevBtn.disabled = true;
        prevBtn.onclick = null;
    }
    
    // Set up next button
    if (currentIndex < artworkIds.length - 1) {
        const nextArtworkId = artworkIds[currentIndex + 1];
        nextBtn.disabled = false;
        nextBtn.onclick = () => {
            window.location.href = `artwork.html?id=${nextArtworkId}`;
        };
    } else {
        nextBtn.disabled = true;
        nextBtn.onclick = null;
    }
    
    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft' && !prevBtn.disabled) {
            prevBtn.click();
        } else if (e.key === 'ArrowRight' && !nextBtn.disabled) {
            nextBtn.click();
        } else if (e.key === 'Escape') {
            // Go back to main gallery
            window.location.href = 'index.html';
        }
    });
}

function showLoadingSpinner() {
    const existingSpinner = document.querySelector('.loading-spinner');
    if (existingSpinner) return;
    
    const spinner = document.createElement('div');
    spinner.className = 'loading-spinner';
    spinner.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 40px;
        height: 40px;
        border: 4px solid #f3f3f3;
        border-top: 4px solid #333;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        z-index: 1000;
    `;
    
    // Add CSS animation if not already present
    if (!document.querySelector('#spinner-style')) {
        const style = document.createElement('style');
        style.id = 'spinner-style';
        style.textContent = `
            @keyframes spin {
                0% { transform: translate(-50%, -50%) rotate(0deg); }
                100% { transform: translate(-50%, -50%) rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
    }
    
    const artworkViewer = document.querySelector('.artwork-viewer');
    if (artworkViewer) {
        artworkViewer.appendChild(spinner);
    }
}

function hideLoadingSpinner() {
    const spinner = document.querySelector('.loading-spinner');
    if (spinner) {
        spinner.remove();
    }
}

function showErrorMessage(message) {
    const artworkContainer = document.querySelector('.artwork-container');
    if (!artworkContainer) return;
    
    artworkContainer.innerHTML = `
        <div class="error-message" style="
            text-align: center;
            padding: 2rem;
            color: #666;
            font-size: 1.2rem;
        ">
            <p>${message}</p>
            <a href="index.html" style="
                display: inline-block;
                margin-top: 1rem;
                padding: 0.5rem 1rem;
                background: #333;
                color: white;
                text-decoration: none;
                border-radius: 4px;
            ">Return to Gallery</a>
        </div>
    `;
}

// Preload next and previous images for faster navigation
function preloadAdjacentImages(currentArtworkId) {
    const artworkIds = Object.keys(IMAGES.artwork);
    const currentIndex = artworkIds.indexOf(currentArtworkId);
    
    // Preload previous image
    if (currentIndex > 0) {
        const prevArtwork = ImageManager.getArtwork(artworkIds[currentIndex - 1]);
        if (prevArtwork) {
            const img = new Image();
            img.src = prevArtwork.fullImage || prevArtwork.image;
        }
    }
    
    // Preload next image
    if (currentIndex < artworkIds.length - 1) {
        const nextArtwork = ImageManager.getArtwork(artworkIds[currentIndex + 1]);
        if (nextArtwork) {
            const img = new Image();
            img.src = nextArtwork.fullImage || nextArtwork.image;
        }
    }
}

// Call preload after main image loads
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const artworkId = urlParams.get('id');
        if (artworkId) {
            preloadAdjacentImages(artworkId);
        }
    }, 1000); // Wait 1 second after page load
});