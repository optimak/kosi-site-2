const BASE_IMAGE_URL = 'https://res.cloudinary.com/dx8cmsjdw/image/upload';

const featuredPiecesRaw = [
    {
        title: 'Herald',
        subtitle: 'Symbolic Narrative',
        publicId: 'SGVyYWxk',
        version: 'v1758148561'
    },
    {
        title: 'Nirvana 2',
        subtitle: 'Human Condition',
        publicId: 'TmlydmFuYV8y',
        version: 'v1763227591'
    },
    {
        title: 'Mind Control 1',
        subtitle: 'Digital Portrait',
        publicId: 'TWluZF9Db250cm9sXzE=',
        version: 'v1758148548'
    },
    {
        title: 'Faces 2',
        subtitle: 'Symbolic Narrative',
        publicId: 'RmFjZXNfMg==',
        version: 'v1758148538'
    },
    {
        title: 'Flow State',
        subtitle: 'Motion Study',
        publicId: 'Rmxvd19zdGF0ZQ==',
        version: 'v1763227595'
    },
    {
        title: 'Rhythm',
        subtitle: 'Abstract Study',
        publicId: 'Umh5dGht',
        version: 'v1763226076'
    },
    {
        title: 'The Motions',
        subtitle: 'Digital Portrait',
        publicId: 'VGhlX01vdGlvbnNfZmx4amZn',
        version: 'v1758148544'
    },
    {
        title: 'Observatory',
        subtitle: 'Vibrant Chaos',
        publicId: 'T2JzZXJ2YXRvcnk=',
        version: 'v1758148549'
    },
    {
        title: 'Badlands',
        subtitle: 'Digital Portrait',
        publicId: 'QmFkbGFuZHM=',
        version: 'v1758148553'
    }
];

const decodePublicId = (payload) => {
    try {
        return atob(payload);
    } catch (error) {
        console.warn('Could not decode base64 asset ID; using raw value.', payload);
        return payload;
    }
};

const featuredPieces = featuredPiecesRaw.map((piece) => {
    const publicId = decodePublicId(piece.publicId);
    return {
        ...piece,
        alt: `KosiTheCreator artwork titled ${piece.title}`,
        image: `${BASE_IMAGE_URL}/w_1000,q_auto:good,f_auto/${piece.version}/${encodeURIComponent(
            publicId
        )}.jpg`,
        fullImage: `${BASE_IMAGE_URL}/w_960,q_auto:good,f_webp/${piece.version}/${encodeURIComponent(
            publicId
        )}.webp`,
        placeholder: `${BASE_IMAGE_URL}/w_80,q_1,e_blur:300,f_webp/${piece.version}/${encodeURIComponent(
            publicId
        )}.webp`,
        publicId
    };
});

document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('home-carousel-track');
    if (!track) {
        return;
    }

    track.innerHTML = featuredPieces
        .map(
            (piece) => `
            <article class="carousel-card" role="listitem">
                <img src="${piece.image}" alt="${piece.alt}" loading="lazy" decoding="async">
            </article>
        `
        )
        .join('');

    setupCarouselCards(track);

    const prevBtn = document.querySelector('[data-carousel-prev]');
    const nextBtn = document.querySelector('[data-carousel-next]');

    const updateControlStates = () => {
        if (!prevBtn || !nextBtn) {
            return;
        }

        const atStart = track.scrollLeft <= 10;
        const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 10;

        prevBtn.disabled = atStart;
        nextBtn.disabled = atEnd;
    };

    const getScrollAmount = () => {
        const card = track.querySelector('.carousel-card');
        const gap = parseFloat(getComputedStyle(track).gap || '0');
        const baseWidth = card ? card.offsetWidth : track.clientWidth * 0.8;
        return baseWidth + gap;
    };

    const scrollTrack = (direction) => {
        const amount = getScrollAmount() * direction;
        track.scrollBy({ left: amount, behavior: 'smooth' });
    };

    prevBtn?.addEventListener('click', () => scrollTrack(-1));
    nextBtn?.addEventListener('click', () => scrollTrack(1));

    let scrollFrame;
    const handleScroll = () => {
        if (scrollFrame) {
            cancelAnimationFrame(scrollFrame);
        }
        scrollFrame = requestAnimationFrame(updateControlStates);
    };

    track.addEventListener('scroll', handleScroll, { passive: true });
    updateControlStates();
});

function setupCarouselCards(track) {
    track.querySelectorAll('.carousel-card').forEach((card, index) => {
        card.addEventListener('click', (event) => {
            if (typeof FullscreenViewer === 'undefined') {
                return;
            }
            event.preventDefault();
            FullscreenViewer.open(featuredPieces, index);
        });
    });
}
