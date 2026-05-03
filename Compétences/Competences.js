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

    // ── Animation des barres de progression au scroll ───────────────────────
    // Les barres partent de width:0 et s'animent jusqu'à data-width via CSS transition.
    // On déclenche l'animation une seule fois quand la section entre dans le viewport.
    const animateSkillBars = () => {
        const fills = document.querySelectorAll('.skill-level-fill');
        fills.forEach((fill, index) => {
            const target = fill.getAttribute('data-width');
            if (!target) return;
            setTimeout(() => {
                fill.style.width = target + '%';
            }, 150 + index * 80); // délai progressif par barre
        });
    };

    const skillsSection = document.querySelector('.skills-section');
    if (skillsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkillBars();
                    observer.unobserve(entry.target); // ne déclencher qu'une fois
                }
            });
        }, { threshold: 0.15 });

        observer.observe(skillsSection);
    }
});