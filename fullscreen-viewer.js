(() => {
    const SWIPE_THRESHOLD = 60;

    const state = {
        overlay: null,
        imageElement: null,
        prevBtn: null,
        nextBtn: null,
        closeBtn: null,
        keyHandler: null,
        touchStartX: null,
        items: [],
        currentIndex: 0,
        isOpen: false
    };

    function ensureOverlay() {
        if (state.overlay) {
            return;
        }

        const overlay = document.createElement('div');
        overlay.className = 'artwork-detail-overlay';
        overlay.setAttribute('aria-hidden', 'true');
        overlay.innerHTML = `
            <div class="artwork-viewer">
                <div class="artwork-container">
                    <img src="" alt="" loading="eager" decoding="async">
                </div>
            </div>
            <button class="nav-arrow prev" type="button" aria-label="Previous artwork" data-overlay-prev>‹</button>
            <button class="nav-arrow next" type="button" aria-label="Next artwork" data-overlay-next>›</button>
            <button class="overlay-close" type="button" aria-label="Close artwork view">×</button>
        `;

        document.body.appendChild(overlay);

        state.overlay = overlay;
        state.imageElement = overlay.querySelector('.artwork-container img');
        state.prevBtn = overlay.querySelector('[data-overlay-prev]');
        state.nextBtn = overlay.querySelector('[data-overlay-next]');
        state.closeBtn = overlay.querySelector('.overlay-close');

        state.prevBtn.addEventListener('click', () => changeIndex(-1));
        state.nextBtn.addEventListener('click', () => changeIndex(1));
        state.closeBtn.addEventListener('click', close);
        overlay.addEventListener('click', (event) => {
            if (event.target === overlay) {
                close();
            }
        });
        overlay.addEventListener('touchstart', handleTouchStart, { passive: true });
        overlay.addEventListener('touchend', handleTouchEnd, { passive: true });
    }

    function updateContent() {
        if (!state.items.length || !state.imageElement) {
            return;
        }

        const item = state.items[state.currentIndex];
        state.imageElement.src = item.fullImage || item.image;
        state.imageElement.alt = item.alt || item.title || '';

        state.prevBtn.disabled = state.currentIndex === 0;
        state.nextBtn.disabled = state.currentIndex === state.items.length - 1;
    }

    function changeIndex(delta) {
        if (!state.items.length) return;
        const nextIndex = Math.min(
            state.items.length - 1,
            Math.max(0, state.currentIndex + delta)
        );
        if (nextIndex !== state.currentIndex) {
            state.currentIndex = nextIndex;
            updateContent();
        }
    }

    function open(items, index = 0) {
        if (!Array.isArray(items) || items.length === 0) {
            return;
        }

        ensureOverlay();
        state.items = items;
        state.currentIndex = Math.min(Math.max(index, 0), items.length - 1);
        updateContent();

        state.overlay.classList.add('is-visible');
        state.overlay.setAttribute('aria-hidden', 'false');
        document.body.classList.add('overlay-open');
        state.isOpen = true;

        state.keyHandler = (event) => {
            if (event.key === 'Escape') {
                close();
            } else if (event.key === 'ArrowLeft') {
                changeIndex(-1);
            } else if (event.key === 'ArrowRight') {
                changeIndex(1);
            }
        };

        document.addEventListener('keydown', state.keyHandler);
    }

    function close() {
        if (!state.overlay || !state.isOpen) {
            return;
        }

        state.overlay.classList.remove('is-visible');
        state.overlay.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('overlay-open');
        state.isOpen = false;

        if (state.keyHandler) {
            document.removeEventListener('keydown', state.keyHandler);
            state.keyHandler = null;
        }
    }

    function handleTouchStart(event) {
        if (!event.touches || event.touches.length === 0) {
            return;
        }
        state.touchStartX = event.touches[0].clientX;
    }

    function handleTouchEnd(event) {
        if (
            state.touchStartX === null ||
            !event.changedTouches ||
            event.changedTouches.length === 0
        ) {
            return;
        }

        const delta = event.changedTouches[0].clientX - state.touchStartX;
        state.touchStartX = null;

        if (Math.abs(delta) < SWIPE_THRESHOLD) {
            return;
        }

        if (delta > 0) {
            changeIndex(-1);
        } else {
            changeIndex(1);
        }
    }

    window.FullscreenViewer = {
        open,
        close
    };
})();
