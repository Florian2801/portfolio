document.addEventListener('DOMContentLoaded', function () {

    const selectedColor = '#FFFF00';

    // Appliquer la variable CSS globale
    document.documentElement.style.setProperty('--selected-color', selectedColor);

    // ── Croix du menu offcanvas ──────────────────────────────────────────────
    const btnClose = document.querySelector('.offcanvas-header .btn-close');
    if (btnClose) {
        const encodedColor = encodeURIComponent(selectedColor);
        btnClose.style.backgroundImage = `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="${encodedColor}" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/></svg>')`;
        btnClose.style.backgroundRepeat = 'no-repeat';
        btnClose.style.backgroundPosition = 'center';
        btnClose.style.backgroundSize = '2rem';
        btnClose.style.width = '2.5rem';
        btnClose.style.height = '2.5rem';
    }

    // ── Hover couleur sur les icônes SVG de la navbar ───────────────────────
    const navIcons = document.querySelectorAll('.div-reseau svg');
    navIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function () {
            this.setAttribute('fill', selectedColor);
        });
        icon.addEventListener('mouseleave', function () {
            this.setAttribute('fill', 'white');
        });
    });

    // ── Ouverture / fermeture du CV en overlay ───────────────────────────────
    const cvPreview = document.getElementById('cvImaged');
    const cvOverlay = document.querySelector('.cvClick');
    const cvCloseBtn = document.querySelector('.cv-close');

    if (cvPreview && cvOverlay) {
        cvPreview.addEventListener('click', (e) => {
            e.stopPropagation();
            cvOverlay.style.visibility = 'visible';
            cvOverlay.style.pointerEvents = 'auto';
            document.body.style.overflow = 'hidden';
        });

        if (cvCloseBtn) {
            cvCloseBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                closeCV();
            });
        }

        cvOverlay.addEventListener('click', () => {
            closeCV();
        });

        function closeCV() {
            cvOverlay.style.visibility = 'hidden';
            cvOverlay.style.pointerEvents = 'none';
            document.body.style.overflow = '';
        }
    }

    // ── Modals veille ───────────────────────────────────────────────────────
    const vlCards = document.querySelectorAll('.vl-card');
    const vlModals = document.querySelectorAll('.vl-modal');

    function openModal(id) {
        const modal = document.getElementById(id);
        if (!modal) return;
        modal.classList.add('is-open');
        document.body.style.overflow = 'hidden';
    }

    function closeAllModals() {
        vlModals.forEach(m => m.classList.remove('is-open'));
        document.body.style.overflow = '';
    }

    vlCards.forEach(card => {
        card.addEventListener('click', () => {
            openModal(card.dataset.modal);
        });
    });

    vlModals.forEach(modal => {
        const closeBtn = modal.querySelector('.vl-modal-close');
        const backdrop = modal.querySelector('.vl-modal-backdrop');
        if (closeBtn) closeBtn.addEventListener('click', closeAllModals);
        if (backdrop) backdrop.addEventListener('click', closeAllModals);
    });

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeAllModals();
    });
});