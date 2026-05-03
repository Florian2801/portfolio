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
    // (géré en CSS, mais on garde le hover JS pour compatibilité)
    const navIcons = document.querySelectorAll('.div-reseau svg');
    navIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function () {
            this.setAttribute('fill', selectedColor);
        });
        icon.addEventListener('mouseleave', function () {
            this.setAttribute('fill', 'white');
        });
    });

    // ── IntersectionObserver partagé ────────────────────────────────────────
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // ── Animation des skill-cards ────────────────────────────────────────────
    document.querySelectorAll('.skill-card').forEach(card => observer.observe(card));

    // ── Animation du bouton "Voir plus" ──────────────────────────────────────
    const btnMore = document.querySelector('.btn-more');
    if (btnMore) observer.observe(btnMore);

    // ── Animation du texte "En savoir plus" (3 parties) ─────────────────────
    const paragraphe = document.querySelector('.col-texte .p-savoir-plus');
    if (paragraphe) {
        const html = paragraphe.innerHTML;

        // Découper aux deux marqueurs de fin de phrase
        const idx1 = html.indexOf('polyvalent.');
        const idx2 = html.indexOf('défis !');

        if (idx1 !== -1 && idx2 !== -1) {
            const partie1 = html.slice(0, idx1 + 'polyvalent.'.length);
            const partie2 = html.slice(idx1 + 'polyvalent.'.length, idx2 + 'défis !'.length);
            const partie3 = html.slice(idx2 + 'défis !'.length);

            paragraphe.innerHTML = `
                <span class="texte-partie texte-partie-1">${partie1}</span>
                <span class="texte-partie texte-partie-2">${partie2}</span>
                <span class="texte-partie texte-partie-3">${partie3}</span>
            `;

            // Observer chaque partie avec un seuil plus bas (texte inline)
            const textObs = new IntersectionObserver(function (entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

            paragraphe.querySelectorAll('.texte-partie').forEach(p => textObs.observe(p));
        }
    }
});