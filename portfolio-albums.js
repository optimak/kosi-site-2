const ALBUM_COVERS = [
    { title: 'Lapis Lazuli', publicId: 'Lapis_Lazuli', version: 'v1763236156' },
    { title: 'Saekyi: Lost in America', publicId: 'Saekyi_Lost_in_America', version: 'v1763236160' },
    { title: 'Lapis Lazuli II', publicId: 'Lapis_Lazuli_1', version: 'v1763236170' },
    { title: 'Happy Monday', publicId: 'Happy_Monday', version: 'v1763236182' },
    { title: 'Gbe Tiyo Kay', publicId: 'Gbe_Tiyo_Kay', version: 'v1763236185' },
    { title: 'Chasing Time', publicId: 'Chasing_Time', version: 'v1763236191' },
    { title: 'Only Girls and Money', publicId: 'Only_Girls_and_Money', version: 'v1763236201' },
    { title: '1 More (Adonis Bosso)', publicId: '1_More._Adonis_Bosso', version: 'v1763236211' },
    { title: 'Back to Basics', publicId: 'Back_To_Basics_by_Udosopoetic', version: 'v1763236217' },
    { title: '4 Days by Magixx', publicId: '4_Days_by_Magixx', version: 'v1763236722' },
    { title: 'Myriad Of Blues', publicId: 'Myriad_Of_Blues', version: 'v1763236748' },
    { title: 'Peace Of Mind', publicId: 'Peace_Of_Mind', version: 'v1763236755' },
    { title: 'Legends Never Die', publicId: 'Legends_Never_Die', version: 'v1763236817' },
    { title: 'The Prey’s Prayer', publicId: 'The_Prey_s_Prayer', version: 'v1763236833' },
    { title: 'Too Mad', publicId: 'Too_Mad', version: 'v1763236849' },
    { title: 'Pinacolada London', publicId: 'Pinacolada_London', version: 'v1763236853' },
    { title: 'Untitled Artwork (VSCO)', publicId: 'Untitled_Artwork_VSCO', version: 'v1763236862' }
].map((cover) => {
    const base = 'https://res.cloudinary.com/dx8cmsjdw/image/upload';
    const path = `${cover.version}/${cover.publicId}`;
    return {
        ...cover,
        alt: `${cover.title} album cover by KosiTheCreator`,
        image: `${base}/w_600,q_auto:good,f_auto/${path}`,
        fullImage: `${base}/w_1400,q_auto:good,f_auto/${path}`
    };
});

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('album-covers-grid');
    if (!grid) {
        return;
    }

    const fragment = document.createDocumentFragment();

    ALBUM_COVERS.forEach((cover, index) => {
        const link = document.createElement('a');
        link.href = cover.fullImage;
        link.className = 'artwork-link';
        link.setAttribute('data-album-index', index);

        const img = document.createElement('img');
        img.src = cover.image;
        img.alt = cover.alt;
        img.loading = 'lazy';
        img.decoding = 'async';

        link.appendChild(img);

        if (typeof FullscreenViewer !== 'undefined') {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                const idx = Number(link.getAttribute('data-album-index')) || 0;
                FullscreenViewer.open(ALBUM_COVERS, idx);
            });
        }

        fragment.appendChild(link);
    });

    grid.appendChild(fragment);
});
