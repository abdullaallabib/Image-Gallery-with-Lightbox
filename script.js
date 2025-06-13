document.addEventListener('DOMContentLoaded', () => {
    const galleryThumbnails = document.querySelectorAll('.gallery-thumbnail');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeButton = document.querySelector('.close-button');


    function openLightbox(thumbnail) {
        const fullImageUrl = thumbnail.dataset.full; 
        const altText = thumbnail.alt;
        lightboxImg.src = fullImageUrl;
        lightboxCaption.textContent = altText;
        lightbox.style.display = 'flex'; 
    }

   
    function closeLightbox() {
        lightbox.style.display = 'none'; 
    }

    galleryThumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            openLightbox(thumbnail);
        });
    });

    closeButton.addEventListener('click', closeLightbox);

    lightbox.addEventListener('click', (event) => {
        if (event.target === lightbox) { 
            closeLightbox();
        }
    });

 
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && lightbox.style.display === 'flex') {
            closeLightbox();
        }
    });
});