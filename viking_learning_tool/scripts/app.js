document.addEventListener('DOMContentLoaded', () => {
    // --- MOTEUR DE TRADUCTION i18n ---
    let currentLang = localStorage.getItem('lang') || 'fr';
    
    // Custom Dropdown logic
    const langBtn = document.getElementById('lang-btn');
    const langMenu = document.getElementById('lang-menu');
    
    if (langBtn && langMenu) {
        // Initial button state
        const updateLangBtn = (lang) => {
            const selectedOption = langMenu.querySelector(`li[data-value="${lang}"]`);
            if (selectedOption) {
                langBtn.innerHTML = `${selectedOption.innerHTML} <i class="fas fa-chevron-down"></i>`;
            }
        };
        
        updateLangBtn(currentLang);
        
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langMenu.classList.toggle('hidden');
        });
        
        langMenu.querySelectorAll('li').forEach(item => {
            item.addEventListener('click', () => {
                const selectedLang = item.getAttribute('data-value');
                setLanguage(selectedLang);
                updateLangBtn(selectedLang);
                langMenu.classList.add('hidden');
            });
        });
        
        window.addEventListener('click', () => {
            langMenu.classList.add('hidden');
        });
    }

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('lang', currentLang);
        document.documentElement.lang = currentLang;

        // Mise à jour des textes statiques via data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (i18n[currentLang] && i18n[currentLang][key]) {
                el.textContent = i18n[currentLang][key];
            }
        });

        // Régénérer les grilles avec les données de la bonne langue
        renderGrids();
        
        // Si le codex est ouvert, on doit aussi mettre à jour les textes hardcodés de la fiche
        if (!document.getElementById('codex-modal').classList.contains('hidden')) {
            renderCodexItem();
        }
    }

    // Navigation Logique (Onglets)
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.view-section');

    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update buttons
            navButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Update sections
            const targetId = btn.getAttribute('data-target');
            sections.forEach(sec => {
                if(sec.id === targetId) {
                    sec.classList.remove('hidden');
                    sec.classList.add('fade-in');
                } else {
                    sec.classList.add('hidden');
                    sec.classList.remove('fade-in');
                }
            });
        });
    });

    // Modal Unique du Grand Codex
    const codexModal = document.getElementById('codex-modal');

    // Variables de navigation active du Codex
    let codexActiveArray = [];
    let codexActiveIndex = 0;
    let codexActiveSubtitle = '';
    let codexActiveType = '';

    // Gestion de la fermeture globale de la modale
    const closeButtons = document.querySelectorAll('.close-btn');
    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            codexModal.classList.add('hidden');
        });
    });

    window.addEventListener('click', (e) => {
        if (e.target === codexModal) {
            codexModal.classList.add('hidden');
        }
    });

    // Fonction unifiée d'ouverture du Codex
    function openCodex(array, index, subtitle, type = 'generic') {
        codexActiveArray = array;
        codexActiveIndex = index;
        codexActiveSubtitle = subtitle;
        codexActiveType = type;

        renderCodexItem();
        
        // Affichage de la modale
        codexModal.classList.remove('hidden');
    }

    // Rendu de l'élément de codex actif
    function renderCodexItem() {
        const item = codexActiveArray[codexActiveIndex];
        const mediaContainer = document.getElementById('codex-media-container');
        const factSheet = document.getElementById('codex-fact-sheet');
        const titleEl = document.getElementById('codex-title');
        const subtitleEl = document.getElementById('codex-subtitle');
        const loreEl = document.getElementById('codex-lore');
        const pageIndicator = document.getElementById('codex-page-indicator');

        // Réinitialisation
        mediaContainer.innerHTML = '';
        factSheet.innerHTML = '';

        // 1. Définition du Titre et du Sous-titre
        titleEl.textContent = item.title || item.name || item.topic;
        subtitleEl.textContent = codexActiveSubtitle;

        // Mise à jour de l'indicateur de page
        pageIndicator.textContent = `${codexActiveIndex + 1} / ${codexActiveArray.length}`;

        // 2. Définition du Média (Gauche)
        if (codexActiveType === 'rune') {
            mediaContainer.innerHTML = `<div class="codex-rune-media">${item.symbol}</div>`;
            
            // Fiche technique de la Rune
            factSheet.innerHTML = `
                <div class="fact-row">
                    <span class="fact-label">${i18n[currentLang].fact_category || 'Type'}</span>
                    <span class="fact-value">Rune Futhark</span>
                </div>
                <div class="fact-row">
                    <span class="fact-label">${i18n[currentLang].fact_nature || 'Élément'}</span>
                    <span class="fact-value">${item.element}</span>
                </div>
                <div class="fact-row">
                    <span class="fact-label">${i18n[currentLang].fact_note || 'Signification'}</span>
                    <span class="fact-value">${item.meaning}</span>
                </div>
            `;
        } else {
            if (item.image) {
                const extraClass = item.imageClass ? ` ${item.imageClass}` : '';
                mediaContainer.innerHTML = `<div class="codex-media${extraClass}" style="background-image: url('${item.image}')" role="img" aria-label="Illustration de ${item.title || item.name || item.topic}"></div>`;
            } else {
                // Par défaut, un motif avec une rune mystique
                mediaContainer.innerHTML = `<div class="codex-rune-media" role="img" aria-label="Symbole runique sacré">ᛦ</div>`;
            }

            // Fiche technique des figures / récits
            let facts = '';
            if (codexActiveType === 'mythology') {
                facts += `
                    <div class="fact-row">
                        <span class="fact-label">${i18n[currentLang].fact_domain}</span>
                        <span class="fact-value">${i18n[currentLang].cat_mythology}</span>
                    </div>
                `;
            } else if (codexActiveType === 'character') {
                facts += `
                    <div class="fact-row">
                        <span class="fact-label">${i18n[currentLang].fact_category}</span>
                        <span class="fact-value">${item.role || i18n[currentLang].cat_characters}</span>
                    </div>
                `;
            } else if (codexActiveType === 'custom') {
                facts += `
                    <div class="fact-row">
                        <span class="fact-label">${i18n[currentLang].fact_category}</span>
                        <span class="fact-value">${i18n[currentLang].cat_customs}</span>
                    </div>
                `;
            } else if (codexActiveType === 'history') {
                facts += `
                    <div class="fact-row">
                        <span class="fact-label">${i18n[currentLang].fact_category}</span>
                        <span class="fact-value">${i18n[currentLang].cat_history}</span>
                    </div>
                `;
            } else if (codexActiveType === 'gallery') {
                facts += `
                    <div class="fact-row">
                        <span class="fact-label">${i18n[currentLang].fact_nature}</span>
                        <span class="fact-value">${i18n[currentLang].cat_gallery}</span>
                    </div>
                `;
            } else if (codexActiveType === 'legacy') {
                facts += `
                    <div class="fact-row">
                        <span class="fact-label">${i18n[currentLang].fact_domain}</span>
                        <span class="fact-value">${i18n[currentLang].cat_legacy}</span>
                    </div>
                `;
            }

            if (item.description || item.bio) {
                facts += `
                    <div class="fact-row">
                        <span class="fact-label">${i18n[currentLang].fact_note}</span>
                        <span class="fact-value" style="font-size: 0.8rem; font-style: italic;">${item.description || item.bio}</span>
                    </div>
                `;
            }
            factSheet.innerHTML = facts;
        }

        // 3. Remplissage du Récit (Droite)
        if (item.lore.trim().startsWith('<')) {
            loreEl.innerHTML = item.lore;
        } else {
            const paragraphs = item.lore.split('\n\n').map(para => `<p>${para.trim()}</p>`).join('');
            loreEl.innerHTML = paragraphs;
        }

        // Remettre le défilement du récit au début à chaque changement de page
        document.querySelector('.codex-body').scrollTop = 0;
    }

    // Gestion du clic sur les boutons Précédent et Suivant du Codex
    document.getElementById('codex-prev-btn').addEventListener('click', () => {
        codexActiveIndex--;
        if (codexActiveIndex < 0) {
            codexActiveIndex = codexActiveArray.length - 1;
        }
        renderCodexItem();
    });

    document.getElementById('codex-next-btn').addEventListener('click', () => {
        codexActiveIndex++;
        if (codexActiveIndex >= codexActiveArray.length) {
            codexActiveIndex = 0;
        }
        renderCodexItem();
    });

    // Support des touches directionnelles (Flèches Gauche/Droite) et Échap pour naviguer au clavier
    window.addEventListener('keydown', (e) => {
        if (!codexModal.classList.contains('hidden')) {
            if (e.key === 'ArrowLeft') {
                codexActiveIndex--;
                if (codexActiveIndex < 0) {
                    codexActiveIndex = codexActiveArray.length - 1;
                }
                renderCodexItem();
            } else if (e.key === 'ArrowRight') {
                codexActiveIndex++;
                if (codexActiveIndex >= codexActiveArray.length) {
                    codexActiveIndex = 0;
                }
                renderCodexItem();
            } else if (e.key === 'Escape') {
                const lightbox = document.getElementById('image-lightbox');
                if (lightbox && !lightbox.classList.contains('hidden')) {
                    lightbox.classList.add('hidden');
                } else {
                    codexModal.classList.add('hidden');
                }
            }
        } else {
            // Si la modale du codex est fermée mais que la lightbox est ouverte
            if (e.key === 'Escape') {
                const lightbox = document.getElementById('image-lightbox');
                if (lightbox && !lightbox.classList.contains('hidden')) {
                    lightbox.classList.add('hidden');
                }
            }
        }
    });

    // Fonction pour générer toutes les grilles
    function renderGrids() {
        const langData = vikingData[currentLang] || vikingData.fr; // fallback FR

        // Vider les conteneurs
        const runesGrid = document.getElementById('runes-grid');
        runesGrid.innerHTML = '';
        
        // Générer les Runes
        langData.runes.forEach((rune, index) => {
            const card = document.createElement('div');
            card.className = 'rune-card fade-in';
            card.innerHTML = `
                <div class="rune-symbol">${rune.symbol}</div>
                <div class="rune-name">${rune.name}</div>
            `;
            
            card.addEventListener('click', () => {
                openCodex(langData.runes, index, i18n[currentLang].cat_runes, 'rune');
            });
            runesGrid.appendChild(card);
        });

        // Générer Mythologie
        const mythList = document.getElementById('mythology-list');
        mythList.innerHTML = '';
        langData.mythology.forEach((myth, index) => {
            const card = document.createElement('div');
            card.className = 'info-card cliquable fade-in';
            card.innerHTML = createInfoCardHtml(myth);
            card.addEventListener('click', () => {
                openCodex(langData.mythology, index, i18n[currentLang].cat_mythology, 'mythology');
            });
            mythList.appendChild(card);
        });

        // Générer Personnages
        const charList = document.getElementById('characters-list');
        charList.innerHTML = '';
        langData.characters.forEach((char, index) => {
            const card = document.createElement('div');
            card.className = 'info-card cliquable fade-in';
            card.innerHTML = createInfoCardHtml(char);
            card.addEventListener('click', () => {
                openCodex(langData.characters, index, char.role || i18n[currentLang].cat_characters, 'character');
            });
            charList.appendChild(card);
        });

        // Générer Coutumes
        const customsList = document.getElementById('customs-list');
        customsList.innerHTML = '';
        langData.customs.forEach((custom, index) => {
            const card = document.createElement('div');
            card.className = 'info-card cliquable fade-in';
            card.innerHTML = createInfoCardHtml(custom);
            card.addEventListener('click', () => {
                openCodex(langData.customs, index, i18n[currentLang].cat_customs, 'custom');
            });
            customsList.appendChild(card);
        });

        // Générer Histoire & Expansions
        const historyList = document.getElementById('history-list');
        historyList.innerHTML = '';
        if (langData.history) {
            langData.history.forEach((hist, index) => {
                const card = document.createElement('div');
                card.className = 'info-card cliquable fade-in';
                card.innerHTML = createInfoCardHtml(hist);
                card.addEventListener('click', () => {
                    openCodex(langData.history, index, i18n[currentLang].cat_history, 'history');
                });
                historyList.appendChild(card);
            });
        }

        // Générer Galerie
        const galleryGrid = document.getElementById('gallery-grid');
        galleryGrid.innerHTML = '';
        if (langData.gallery) {
            langData.gallery.forEach((item, index) => {
                const card = document.createElement('div');
                card.className = 'info-card cliquable fade-in';
                card.innerHTML = createInfoCardHtml(item);
                card.addEventListener('click', () => {
                    openCodex(langData.gallery, index, i18n[currentLang].cat_gallery, 'gallery');
                });
                galleryGrid.appendChild(card);
            });
        }

        // Générer Héritage Linguistique
        const legacyGrid = document.getElementById('legacy-grid');
        if (legacyGrid) {
            legacyGrid.innerHTML = '';
            if (langData.legacy) {
                langData.legacy.forEach((item, index) => {
                    const card = document.createElement('div');
                    card.className = 'info-card cliquable fade-in';
                    card.innerHTML = createInfoCardHtml(item);
                    card.addEventListener('click', () => {
                        openCodex(langData.legacy, index, i18n[currentLang].cat_legacy, 'legacy');
                    });
                    legacyGrid.appendChild(card);
                });
            }
        }
    } // Fin renderGrids()

    // Fonction pour générer le contenu html d'une carte info (Déplacée ici)
    function createInfoCardHtml(item) {
        let imageHeader = '';
        if (item.image) {
            const extraClass = item.imageClass ? ` ${item.imageClass}` : '';
            imageHeader = `<div class="card-image-header${extraClass}" style="background-image: url('${item.image}')" role="img" aria-label="Illustration de ${item.title || item.name || item.topic}"></div>`;
        } else {
            imageHeader = `<div class="card-image-header pattern-bg" role="img" aria-label="Motif décoratif nordique"></div>`;
        }
        return `
            ${imageHeader}
            <div class="card-info-content">
                <h3>${item.title || item.name || item.topic}</h3>
                ${item.role ? `<h4>${item.role}</h4>` : ''}
                <p>${item.description || item.bio || item.topic}</p>
                <span class="read-more">${i18n[currentLang].card_read_more} <i class="fas fa-chevron-right"></i></span>
            </div>
        `;
    }

    // Initialisation du contenu au démarrage
    setLanguage(currentLang);

    // ==========================================
    // LOGIQUE DE LA VISIONNEUSE LIGHTBOX (PLEINE GRANDEUR)
    // ==========================================
    const lightbox = document.getElementById('image-lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.querySelector('.lightbox-close');

    function openLightbox(src, captionText) {
        lightboxImg.src = src;
        lightboxCaption.textContent = captionText;
        lightbox.classList.remove('hidden');
    }

    function closeLightbox() {
        lightbox.classList.add('hidden');
        setTimeout(() => {
            lightboxImg.src = '';
            lightboxCaption.textContent = '';
        }, 300); // attend la transition de fade-out
    }

    // Fermeture par le bouton close ou clic à l'extérieur ou clic sur l'image
    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target === lightboxImg) {
            closeLightbox();
        }
    });

    // Clic sur l'image de la barre latérale du Codex pour l'ouvrir en grand
    const codexMediaContainer = document.getElementById('codex-media-container');
    const codexTitleEl = document.getElementById('codex-title');
    codexMediaContainer.addEventListener('click', (e) => {
        const mediaEl = e.target.closest('.codex-media');
        if (mediaEl) {
            const bgImg = mediaEl.style.backgroundImage;
            if (bgImg) {
                const src = bgImg.slice(4, -1).replace(/"/g, "");
                openLightbox(src, codexTitleEl.textContent);
            }
        }
    });

    // Enregistrement du Service Worker (PWA / Offline Support)
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./sw.js')
                .then((registration) => {
                    console.log('ServiceWorker enregistré avec succès: ', registration.scope);
                })
                .catch((error) => {
                    console.log('Échec de l\'enregistrement du ServiceWorker: ', error);
                });
        });
    }
});
