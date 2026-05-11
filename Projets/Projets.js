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

    // ── Données projets ──────────────────────────────────────────────────────────
    const projects = [
        {
            year: 'Web · 2025',
            status: 'Terminé',
            title: 'BST 79 — Site web vitrine WordPress',
            subtitle: 'Développement d\'un site web vitrine à l\'aide du CMS WordPress afin de présenter l\'activité et les produits de l\'entreprise BST 79, une entreprise de chaudronnerie.',
            url: '',
            urlLabel: '',
            apercu: 'Ce projet est un site vitrine présentant les produits et services de la chaudronnerie BST 79. Il devait être réalisé avec WordPress pour permettre au chef d\'entreprise de maîtriser le contenu de son site sans difficultés ni connaissances en développement. Le projet étant réalisé par 2 équipes, seuls l\'API Google Map et le carousel de notre projet ont été conservés dans le site final de BST79.',
            img: "../Images/Projets/bst79.jpg",
            features: [
                { name: 'Présentation de l\'entreprise', desc: 'Pages présentant l\'entreprise, ses produits, ses services et les moyens de la contacter.' },
                { name: 'API Google Map', desc: 'Intégration d\'une API Google Map pour localiser l\'entreprise.' },
                { name: 'Carousel d\'images', desc: 'Présentation des produits vendus avec une suite d\'images accompagnées de leur description.' },
                { name: 'Suivi du référencement', desc: 'Plugin Wincher pour suivre l\'indexation et le référencement SEO.' },
            ],
            challenges: [
                { name: 'Prise en main WordPress', solution: 'Maniabilité du CMS peu évidente au départ et perte de liberté par rapport à du code. Solution : tests, vidéos, tutos et documentations.' },
            ],
            techs: ['WordPress', 'WP Carousel', 'Wincher', 'API Google Map'],
            stats: [
                { label: 'Durée', value: '6 jours' },
                { label: 'Équipe', value: '4 personnes' },
                { label: 'Complexité', value: '2 / 5' },
            ],
            links: [
                { label: 'Site bst79', href: '' },
                { label: 'Documentation', href: 'https://docs.google.com/document/d/1WT-jngmFZmYqH6-r0lC0As1Rb-dmF8w0WBw9jeGjWIY/edit?usp=sharing' },
            ],
            skills: [
                { name: 'Maîtrise de WordPress', href: '#' },
                { name: 'Intégration des plugins', href: '#' },
                { name: 'Gestion de Projet', href: '#' },
            ],
        },
        {
            year: 'Web · 2025',
            status: 'Terminé',
            title: 'Toutou Relax — Application web de gestion de réservations',
            subtitle: 'Conception et développement d\'une application web de gestion de réservations en ligne de box dans une pension canine pour faire garder son animal de compagnie.',
            apercu: 'Ce projet est un site de réservation en ligne de box pour chiens qui présente l\'entreprise et permet de gérer ses chiens et ses réservations. Le site offre la possibilité de réserver un box pour un ou plusieurs chiens sur une période déterminée et de contacter le gestionnaire en cas de besoin.',
            img: "../Images/Projets/toutou.png",
            features: [
                { name: 'Inscription et authentification', desc: 'Création de compte avec mail de confirmation et authentification pour accéder à ses chiens et ses réservations.' },
                { name: 'Réservations de box', desc: 'Consultation du nombre de box encore disponible grâce à un calendrier, réservation d\'un box disponible pour un chien à une période donnée avec possibilité de gérer et de suivre l\'ensemble de ses réservations.' },
                { name: 'Formulaire de contact', desc: 'Contacter le gestionnaire en cas de problèmes de réservation ou dysfonctionnements par le biais du formulaire de contact en ligne.' },
            ],
            challenges: [
                { name: 'Traitement du formulaire de contact', solution: 'Permettre l\'envoi de mail et configuration du serveur SMTP. Solution : Utilisation de PHPMailer.' },
                { name: 'Respect des contraintes', solution: 'Lié à la réservation et la gestion des emplacements disponibles. Solution : Création de fonctions indépendantes pour gérer chaque contrainte.' },
            ],
            techs: ['PHP', 'MySQL', 'Looping', 'HTML - CSS - JS', 'PHP Mailer', 'Figma', 'Trello'],
            stats: [
                { label: 'Durée', value: '7 jours' },
                { label: 'Équipe', value: '4 personnes' },
                { label: 'Complexité', value: '3 / 5' },
            ],
            links: [
                { label: 'Documentation', href: 'https://docs.google.com/document/d/1mBSWB_loI3PrZ0Y2w48lxjTi5wCACgfel4nXehNSvow/edit?usp=drive_link' },
            ],
            skills: [
                { name: 'Mobile first', href: '#' },
                { name: 'Conception et maquettage', href: '#' },
                { name: 'Gestion de projet', href: '#' },
            ],
        },
        {
            year: 'Web · 2026',
            status: 'TERMINÉ',
            title: 'Escale — Application de gestion portuaire',
            subtitle: 'Conception et développement d\'une application web de gestion des escales de navires dans un port, permettant de gérer les navires, armateurs, demandes d\'escale, propositions et affectations du personnel.',
            apercu: 'Escale est une application web de gestion portuaire permettant à un port de gérer l\'ensemble du cycle de vie d\'une escale de navire : de la demande initiale jusqu\'au suivi en temps réel. L\'application couvre la gestion des navires, des armateurs, des infrastructures (quais et postes d\'accostage), des demandes d\'escale, des propositions associées, ainsi que l\'affectation des employés (pilotes, dockers, remorqueurs).',
            img: "../Images/Projets/escale.png",
            features: [
                { name: 'Gestion des navires & armateurs', desc: 'Consultation et gestion des fiches navires et armateurs, avec les navires associés à chaque armateur.' },
                { name: 'Demandes d\'escale', desc: 'Création, consultation et suivi des demandes d\'escale avec les propositions liées.' },
                { name: 'Gestion des propositions', desc: 'Création et suivi des propositions d\'accostage avec leur statut en temps réel.' },
                { name: 'Suivi des escales', desc: 'Vue complète des escales (prévisionnelles, en cours, terminées) avec poste attribué, type de fret, tonnage, dates réelles et affectations du personnel.' },
                { name: 'Gestion des infrastructures', desc: 'Administration des quais et postes d\'accostage avec les types de fret autorisés par poste.' },
                { name: 'Gestion des employés', desc: 'Liste et fiches employés (pilotes arrivée/sortie, dockers) avec les escales qu\'ils gèrent.' },
            ],
            challenges: [
                { name: 'Modélisation des données complexes', solution: 'Les relations entre navires, armateurs, escales, postes et employés sont nombreuses. Solution : conception d\'un MCD rigoureux en amont pour anticiper toutes les dépendances.' },
                { name: 'Gestion des statuts et contraintes d\'escale', solution: 'Assurer la cohérence des états (prévisionnelle → en cours → terminée) et des disponibilités de postes. Solution : fonctions dédiées à la vérification de chaque contrainte métier.' },
            ],
            techs: ['PHP', 'MySQL', 'HTML - CSS - JS', 'Bootstrap', 'Figma', 'Trello'],
            stats: [
                { label: 'Durée', value: '6 jours' },
                { label: 'Équipe', value: '4 personnes' },
                { label: 'Complexité', value: '3 / 5' },
            ],
            links: [
                { label: 'documentation', href: 'https://docs.google.com/document/d/1_1v91w7nKb1HjlxXXAdHua7CnLOaGC77LK91vETU5Jk/edit?usp=sharing' },
                { label: 'trello', href: 'https://trello.com/invite/b/68dfd1d3c6f13b901b991e3a/ATTIe24a19a7ca1b8f24e05c9d7b03e24da2ACE28815/port-la-rochelle' },
            ],
            skills: [
                { name: 'Modélisation MCD', href: '#' },
                { name: 'Conception et maquettage', href: '#' },
                { name: 'Gestion de projet', href: '#' },
            ],
        },
        {
            year: 'Application Web & Mobile · 2026',
            status: 'Terminé',
            title: 'Zoucolis — Application de livraison type Mondial Relay',
            subtitle: 'Développement d\'un applicatif complet de gestion de livraisons inspiré du fonctionnement d\'un service de type Mondial Relay, avec suivi en temps réel accessible sur web et mobile.',
            url: '',
            urlLabel: '',
            apercu: 'Zoucolis est une application complète de gestion de livraisons inspirée du fonctionnement d\'un service de type Mondial Relay. Le projet permet de gérer les expéditions de colis entre expéditeurs et destinataires, en passant par des transporteurs et des points relais, avec un suivi en temps réel accessible sur web et mobile. L\'architecture repose sur une API REST centralisée connectée à une base de données MySQL, avec plusieurs interfaces clientes (site web et application mobile).',
            img: "../Images/Projets/zoucolis.png",
            features: [
                { name: 'Back-office (administration)', desc: 'Gestion des transporteurs et des points relais via une interface dédiée.' },
                { name: 'Application mobile (destinataires)', desc: 'Suivi des livraisons en temps réel et consultation des informations liées aux colis.' },
                { name: 'Site web (expéditeurs)', desc: 'Création d\'envois, choix du transporteur et du point relais, et suivi des colis.' },
                { name: 'Interface transporteurs', desc: 'Consultation et suivi des demandes de livraison.' },
                { name: 'Architecture API REST', desc: 'Une API centralise les données et permet la communication entre le site web, l\'application mobile et le back-office.' },
            ],
            challenges: [
                { name: 'Architecture distribuée', solution: 'Gestion de plusieurs applications (web, mobile, back-office) connectées à une même API. Nécessite une conception rigoureuse des endpoints et de la gestion des droits.' },
                { name: 'Performance et latence', solution: 'Multiplication des requêtes côté mobile nécessitant une optimisation des échanges avec l\'API afin de réduire la latence réseau.' },
                { name: 'Modélisation complexe', solution: 'Gestion des relations entre colis, utilisateurs, transporteurs et points relais. Solution : conception d\'un MCD détaillé et de diagrammes de classes en amont.' },
                { name: 'Travail en équipe', solution: 'Coordination entre les différents membres sur des parties techniques variées (API, mobile, web). Suivi via Trello / Jira / Tuleap avec méthodologie Agile.' },
            ],
            techs: ['Symfony 7', 'Java (Android Studio)', 'API REST', 'MySQL', 'Trello / Jira / Tuleap'],
            stats: [
                { label: 'Durée', value: '8 jours' },
                { label: 'Équipe', value: '4 personnes' },
                { label: 'Complexité', value: '4 / 5' },
            ],
            links: [
                { label: 'documentation', href: 'https://docs.google.com/document/d/1CSebrWlR3LU0Wr6yTH7XotyTyTQ3Udiq/edit?usp=sharing&ouid=112271265250770008044&rtpof=true&sd=true' },
                { label: 'trello', href: 'https://trello.com/invite/b/6932d17feb63aafbacc8e6e3/ATTIb81866d7001079a699cabc4e296e5d0cF57896F3/zoucolis' },
            ],
            skills: [
                { name: 'Développement d\'API REST', href: '#' },
                { name: 'Développement mobile Android', href: '#' },
                { name: 'Framework Symfony', href: '#' },
                { name: 'Conception de bases de données', href: '#' },
                { name: 'Architecture multi-applications', href: '#' },
                { name: 'Gestion de projet Agile', href: '#' },
                { name: 'Rédaction de documentation technique', href: '#' },
            ],
        },
        {
            year: 'Stage BTS SIO · 2025',
            status: 'Terminé',
            title: 'Stage Wibaie — Applicatif de gestion des contrats fournisseurs',
            subtitle: 'Développement d\'un module intégré à l\'ERP Diapason permettant de créer, modifier, visualiser et suivre les contrats fournisseurs au sein de l\'entreprise Wibaie, afin d\'automatiser et sécuriser la gestion administrative.',
            url: '',
            urlLabel: '',
            apercu: 'Dans le cadre de mon stage de 1ère année de BTS SIO chez Wibaie, j\'ai développé un applicatif complet intégré à l\'ERP Diapason pour gérer les contrats fournisseurs (locations de matériel informatique, maintenances d\'engins de manutention…). Le projet couvre la création d\'un formulaire de saisie avec validations, un système d\'incrémentation automatique des identifiants (CF0001, CF0002…), des listes paramétrées, un couplage liste/formulaire, l\'export vers Excel, l\'archivage dans Therefore (GED) et la rédaction de la documentation utilisateur. J\'ai également réalisé un second projet pour l\'entreprise Corallium : une page de critères de filtrage permettant d\'extraire des données de réceptions.',
            img: '../Images/Projets/wibaie.png',
            features: [
                { name: 'Formulaire de gestion des contrats', desc: 'Création d\'un formulaire complet avec variables VSD, champs obligatoires, validations (date fin > date début, durée < 5 ans), listes d\'aide et incrémentation automatique des identifiants au format CF0001, CF0002…' },
                { name: 'Listes paramétrées et module de couplage', desc: 'Création de listes paramétrées (LPA) affichant les contrats selon des critères définis, couplées à la fiche formulaire (FMO) pour une navigation intuitive. Lien automatique entre les deux listes selon la ligne sélectionnée.' },
                { name: 'Calcul automatique des montants', desc: 'Calcul au prorata des montants mensuels selon la date de début du contrat, gestion du premier mois partiel et contrôle de validité des budgets selon le type de contrat (location, maintenance ou les deux).' },
                { name: 'Export Excel et archivage GED', desc: 'Création d\'un tableur dynamique pour extraire et analyser les contrats actifs sous Excel (contrats résiliés et expirés exclus). Archivage automatique des contrats validés dans Therefore (GED) via un outil de liaison avec Diapason.' },
                { name: 'Traçabilité et duplication', desc: 'Ajout de champs de suivi (date, heure et auteur de modification), bouton de duplication pour créer un contrat depuis un formulaire pré-rempli, et champs origine/résiliation du contrat.' },
                { name: 'Projet Corallium — PSD critère', desc: 'Création d\'une page de critères (PSD) permettant de filtrer et d\'extraire des données de réceptions depuis Diapason vers Excel, avec requête REB et fonctions de recherche dans les tables fournisseurs et articles.' },
            ],
            challenges: [
                { name: 'Absence d\'actualisation native dans Diapason', solution: 'Diapason ne rafraîchit pas automatiquement les listes paramétrées lors d\'une modification. Solution : mise en place d\'un mécanisme de mise à jour forcée des LPA à chaque changement de périodicité ou de période de facturation.' },
                { name: 'Calcul prorata du premier mois', solution: 'Lorsqu\'un contrat débute en cours de mois, le montant doit être ajusté proportionnellement. Solution : développement d\'une logique conditionnelle calculant le nombre de jours restants dans le mois pour appliquer le bon prorata.' },
                { name: 'Export vers Excel avec filtres métier', solution: 'Exclure les contrats résiliés ou dont la date de fin est dépassée sans fonction native dans Diapason. Solution : ajout de conditions dans le tableur dynamique pour filtrer ces entrées avant génération du fichier.' },
                { name: 'Liaison Diapason / Therefore (GED)', solution: 'Les deux systèmes ne communiquent pas directement. Solution : utilisation d\'un outil intermédiaire de liaison pour transférer et archiver chaque contrat validé dans Therefore de manière fiable.' },
            ],
            techs: ['ERP Diapason', 'VSD / FMO / PSD', 'Tables physiques & valeurs', 'LPA (Listes paramétrées)', 'REB (Requête extraction)', 'Excel (tableur dynamique)', 'Therefore (GED)', 'Power BI'],
            stats: [
                { label: 'Durée', value: '7 semaines' },
                { label: 'Équipe', value: 'Seul' },
                { label: 'Complexité', value: '3 / 5' },
            ],
            links: [
                { label: 'site wibaie', href: 'https://www.wibaie.fr/' },
            ],
            skills: [
                { name: 'Développement sur ERP Diapason', href: '#' },
                { name: 'Modélisation et gestion de bases de données', href: '#' },
                { name: 'Analyse des besoins métier', href: '#' },
                { name: 'Intégration et export de données (Excel, GED)', href: '#' },
                { name: 'Rédaction de documentation utilisateur', href: '#' },
                { name: 'Gestion de projet en autonomie', href: '#' },
            ],
        },
        {
            year: 'Stage BTS SIO · 2026',
            status: 'Terminé',
            title: 'Stage Kelio — API de Health Check pour KodTool',
            subtitle: 'Développement d\'un système de supervision applicative intégré à KodTool, exposant des endpoints REST (/health, /readiness, /liveness, /status) pour vérifier en temps réel l\'état de l\'application et de ses dépendances.',
            url: '',
            urlLabel: '',
            apercu: 'Dans le cadre de mon stage de 2ème année de BTS SIO chez Kelio, j\'ai développé un système de health check complet pour l\'application KodTool (ERP RH). L\'objectif était de centraliser les vérifications de santé de l\'application via une API REST, afin de permettre à des outils de monitoring ou des orchestrateurs (comme Kubernetes) de contrôler à tout moment la disponibilité et le bon fonctionnement du système. J\'ai développé quatre endpoints sous /health, exposant des réponses JSON structurées couvrant la disponibilité (readiness), la vitalité (liveness) et l\'état détaillé de chaque service dépendant (status). Le projet a été livré avec des tests unitaires (JUnit + mocks), une documentation technique et une présentation à l\'équipe SaaS à l\'origine de la demande.',
            img: '../Images/Projets/kelio.png',
            features: [
                { name: 'Endpoint /health/readiness', desc: 'Indique si l\'application est prête à recevoir du trafic. Retourne un statut OK lorsque l\'application est correctement démarrée, typiquement utilisé par des orchestrateurs comme Kubernetes pour décider de rediriger les utilisateurs.' },
                { name: 'Endpoint /health/liveness', desc: 'Vérifie que l\'application fonctionne toujours correctement dans le temps, notamment via un test de connexion à la base de données PostgreSQL avec timeout. Retourne OK si la base répond, ou une erreur adaptée (503 / SQL error) selon le cas.' },
                { name: 'Endpoint /health/status', desc: 'Endpoint avancé retournant un DTO structuré (HealthStatusDTO) avec l\'état complet du système : base de données, Keycloak, agent nodes (nombre total, UP, DOWN, URLs concernées), agent Postgre, Reverse Proxy et Active Directory.' },
                { name: 'Gestion fine des erreurs et timeouts', desc: 'Différenciation entre un simple ralentissement et une vraie panne : timeout de 10s sur la base de données, retour 503 si dépassé, gestion des exceptions SQL séparée. Chaque service expose son temps de connexion pour un diagnostic précis.' },
                { name: 'Tests unitaires (JUnit + Mocks)', desc: 'Écriture de tests unitaires structurés en sections Given / When / Then, avec utilisation de mocks pour isoler les composants, conformément aux standards existants du projet KodTool.' },
                { name: 'Documentation et présentation équipe', desc: 'Rédaction d\'une documentation technique complète, présentation du projet à l\'équipe BO et à l\'équipe SaaS (à l\'origine de la demande), puis livraison via merge Git avec création d\'un schéma de synthèse.' },
            ],
            challenges: [
                { name: 'Structuration propre des réponses JSON', solution: 'Les réponses devaient être lisibles et exploitables par des outils externes. Solution : mise en place d\'un DTO dédié (HealthStatusDTO) avec une Map Enum retournant OK/DOWN au lieu de true/false, séparation des classes dans des fichiers distincts pour supprimer les attributs static.' },
                { name: 'Rendre le code dynamique et maintenable', solution: 'Les valeurs en dur (nombre d\'agents, URLs, identifiants) rendaient le code fragile. Solution : récupération des données via le repository, requêtes SQL dynamiques centralisées, services injectés à la place des instanciations manuelles (new).' },
                { name: 'Adapter l\'endpoint liveness au reverse proxy', solution: 'Le statut DOWN devant être géré par le reverse proxy si l\'application ne répond pas, l\'endpoint readiness a été simplifié pour retourner 200 en dur. La logique de vérification de la base a été isolée dans un service dédié pour faciliter les tests.' },
                { name: 'Répondre aux besoins métier de l\'équipe SaaS', solution: 'Après présentation du projet, l\'équipe SaaS a demandé des ajustements sur l\'interface JSON du status et l\'ajout du temps de connexion par service. Solution : refonte de la structure JSON et ajout des métriques de performance pour chaque composant supervisé.' },
            ],
            techs: ['Java', 'Spring Boot', 'API REST', 'PostgreSQL', 'JUnit', 'Mockito', 'Postman', 'Keycloak', 'Git / GitLab', 'IntelliJ IDEA', 'DBeaver'],
            stats: [
                { label: 'Durée', value: '6 semaines' },
                { label: 'Équipe', value: 'Seul' },
                { label: 'Complexité', value: '4.5 / 5' },
            ],
            links: [
                { label: 'site kelio', href: 'https://www.kelio.com/fr' },
            ],
            skills: [
                { name: 'Développement d\'API REST en Java / Spring Boot', href: '#' },
                { name: 'Gestion des erreurs et des timeouts', href: '#' },
                { name: 'Tests unitaires (JUnit + Mocks)', href: '#' },
                { name: 'Structuration et documentation technique', href: '#' },
                { name: 'Travail en équipe et méthode Agile (Scrum)', href: '#' },
                { name: 'Supervision applicative et monitoring', href: '#' },
            ],
        },
    ];

    // ── Logique Modal ────────────────────────────────────────────────────────────
    const overlay  = document.getElementById('projModal');
    const btnCloseModal = document.getElementById('modalClose');

    function openModal(idx) {
        const p = projects[idx];
        if (!p) return;

        document.getElementById('mYear').textContent    = p.year;
        document.getElementById('mStatus').textContent  = p.status;
        document.getElementById('mTitle').textContent   = p.title;
        document.getElementById('mSubtitle').textContent = p.subtitle;
        document.getElementById('mApercu').textContent  = p.apercu;
        document.getElementById('mIMG').src  = p.img;


        const urlEl = document.getElementById('mUrl');
        if (p.url) {
            urlEl.textContent = p.urlLabel || p.url;
            urlEl.href = p.url;
            urlEl.style.display = 'inline';
        } else {
            urlEl.style.display = 'none';
        }

        // Features
        const featSection = document.getElementById('mFeatSection');
        const featEl = document.getElementById('mFeatures');
        if (p.features.length) {
            featEl.innerHTML = p.features.map(f =>
                `<div class="modal-feature-card">
                    <div class="modal-feature-name">${f.name}</div>
                    <div class="modal-feature-desc">${f.desc}</div>
                </div>`
            ).join('');
            featSection.style.display = '';
        } else {
            featSection.style.display = 'none';
        }

        // Challenges
        const chalSection = document.getElementById('mChalSection');
        const chalEl = document.getElementById('mChallenges');
        if (p.challenges.length) {
            chalEl.innerHTML = p.challenges.map(c =>
                `<div class="modal-challenge">
                    <div class="modal-challenge-bar"></div>
                    <div class="modal-challenge-body">
                        <div class="modal-challenge-name">${c.name}</div>
                        <div class="modal-challenge-solution">${c.solution}</div>
                    </div>
                </div>`
            ).join('');
            chalSection.style.display = '';
        } else {
            chalSection.style.display = 'none';
        }

        // Techs
        document.getElementById('mTechs').innerHTML = p.techs.map(t =>
            `<span class="modal-tech-tag">${t}</span>`
        ).join('');

        // Stats
        document.getElementById('mStats').innerHTML = p.stats.map(s =>
            `<div class="modal-stat">
                <span class="modal-stat-label">${s.label}</span>
                <span class="modal-stat-value">${s.value}</span>
            </div>`
        ).join('');

        // Links
        document.getElementById('mLinks').innerHTML = p.links.length
            ? p.links.map(l => `<a class="modal-link" href="${l.href}" target="_blank">${l.label}</a>`).join('')
            : '<span style="font-size:0.8rem;color:var(--muted);font-weight:300;">Aucun lien disponible</span>';

        // Skills
        document.getElementById('mSkills').innerHTML = p.skills.length
            ? p.skills.map(s =>
                `<div class="modal-skill">
                    <span class="modal-skill-name">${s.name}</span>
                </div>`
            ).join('')
            : '<span style="font-size:0.8rem;color:var(--muted);font-weight:300;">À venir</span>';

        overlay.classList.add('is-open');
        document.body.classList.add('modal-open-lock');
    }

    function closeModal() {
        overlay.classList.remove('is-open');
        document.body.classList.remove('modal-open-lock');
    }

    document.querySelectorAll('.open-modal').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            openModal(parseInt(btn.dataset.project));
        });
    });

    document.querySelectorAll('.proj-card').forEach(card => {
        card.addEventListener('click', () => {
            const idx = parseInt(card.dataset.project);
            if (!isNaN(idx)) openModal(idx);
        });
    });

    btnCloseModal.addEventListener('click', closeModal);

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
});
