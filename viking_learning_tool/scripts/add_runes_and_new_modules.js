const fs = require('fs');
const path = require('path');

const runicData = {
    fr: {
        runes: [
            {
                name: "Eihwaz",
                symbol: "ᛇ",
                meaning: "Mort, initiation, transformation, l'If",
                element: "Terre",
                lore: "Eihwaz représente l'If (Yew), arbre sacré européen réputé pour sa longévité exceptionnelle. Il symbolise le cycle de la vie éternelle, possédant à la fois le pouvoir de la mort (ses aiguilles et graines étant hautement toxiques) et de la régénération. De par sa forme en double crochet, elle forme un pont reliant le monde d'en haut avec celui d'en bas. Eihwaz enseigne la nécessité des transformations initiatiques et de la mort symbolique pour accéder à un plan supérieur de conscience. C'est la rune du passage nécessaire et des remises en question profondes.",
                link: "https://fr.wikipedia.org/wiki/Eihwaz"
            },
            {
                name: "Perthro",
                symbol: "ᛈ",
                meaning: "Destin, hasard, mystère, divination",
                element: "Eau",
                lore: "Perthro symbolise historiquement le cornet à dés ou le récipient utilisé pour jeter les runes, incarnant ainsi les forces du hasard, du jeu et de la destinée. C'est la rune des mystères non révélés et des secrets de l'univers. Elle rappelle que chacun de nos choix s'inscrit dans la trame complexe du destin (le Wyrd), tissé par les Nornes. Perthro apporte une clarté ésotérique, aiguise l'intuition et favorise la résolution des problèmes complexes en dévoilant ce qui était caché.",
                link: "https://fr.wikipedia.org/wiki/Perthro"
            },
            {
                name: "Elhaz",
                symbol: "ᛉ",
                meaning: "Protection, vigilance, connexion divine",
                element: "Air",
                lore: "Elhaz (ou Algiz) représente les cornes protectrices de l'élan ou la posture d'un être humain tendant les mains vers le ciel en signe d'invocation sacrée. C'est une puissante rune de défense active et de protection spirituelle contre les menaces extérieures. Elle symbolise également le lien indestructible reliant les hommes aux divinités et aux Valkyries. Elhaz invite à la vigilance sereine et à l'élévation de l'esprit pour bénéficier d'une protection naturelle et cosmique.",
                link: "https://fr.wikipedia.org/wiki/Algiz"
            },
            {
                name: "Sowilo",
                symbol: "ᛊ",
                meaning: "Soleil, lumière, victoire, accomplissement",
                element: "Feu",
                lore: "Sowilo représente le soleil dans toute sa splendeur et sa puissance créatrice. Elle symbolise la victoire de la lumière sur l'obscurité, l'illumination spirituelle, la réussite et l'énergie vitale. Sa forme évoque la foudre, apportant une force dynamique instantanée pour surmonter les obstacles et réaliser ses ambitions. C'est la rune des guides spirituels et des enseignants qui apportent la clarté mentale et dissipent les doutes.",
                link: "https://fr.wikipedia.org/wiki/Sowilo"
            },
            {
                name: "Tiwaz",
                symbol: "ᛏ",
                meaning: "Justice, courage, responsabilité, le dieu Tyr",
                element: "Air",
                lore: "Tiwaz est directement consacrée au dieu Tyr, le dieu de la guerre juste, de l'ordre social et du droit. Sa forme de flèche pointée vers le haut symbolise la droiture morale, le courage héroïque et la victoire dans les combats menés pour des causes nobles. Elle est intimement liée au sacrifice personnel et à la responsabilité, rappelant comment Tyr offrit courageusement sa main droite pour enchaîner le loup Fenrir et préserver l'équilibre cosmique.",
                link: "https://fr.wikipedia.org/wiki/Tiwaz"
            },
            {
                name: "Berkano",
                symbol: "ᛒ",
                meaning: "Naissance, régénération, fertilité, déesse mère",
                element: "Terre",
                lore: "Berkano signifie le bouleau, un arbre pionnier réputé pour sa résilience et sa capacité de régénération rapide. Elle incarne le pouvoir féminin de la déesse mère, symbolisant la fertilité, la maternité et toutes les naissances physiques ou spirituelles. Sa forme évoque la poitrine d'une femme enceinte, apportant une protection bienveillante aux nouveaux départs, à la guérison et à l'éclosion des idées créatrices.",
                link: "https://fr.wikipedia.org/wiki/Berkano"
            },
            {
                name: "Ehwaz",
                symbol: "ᛖ",
                meaning: "Cheval, mouvement, voyage, harmonie",
                element: "Terre",
                lore: "Ehwaz représente le cheval, animal sacré et compagnon indispensable des Vikings, symbolisant le mouvement ordonné, le voyage physique ou spirituel et la découverte. Sa forme suggère l'harmonie parfaite et la confiance mutuelle entre le cavalier et sa monture. C'est la rune de la transition fluide, reliant également le monde des vivants à celui des morts par le transport des âmes.",
                link: "https://fr.wikipedia.org/wiki/Ehwaz"
            },
            {
                name: "Mannaz",
                symbol: "ᛗ",
                meaning: "Humain, société, conscience, harmonie",
                element: "Air",
                lore: "Mannaz signifie l'homme au sens d'être humain et d'humanité. Elle représente l'intégration sociale, la coopération, la solidarité au sein du clan et la conscience spirituelle collective. C'est la rune qui relie l'esprit humain aux forces cosmiques et divines. Mannaz enseigne l'importance de vivre en équilibre parfait avec soi-même et avec son environnement.",
                link: "https://fr.wikipedia.org/wiki/Mannaz"
            },
            {
                name: "Laguz",
                symbol: "ᛚ",
                meaning: "Eau, intuition, force vitale, écoulement",
                element: "Eau",
                lore: "Laguz représente l'eau sous toutes ses formes : la mer, les lacs ou les rivières tumultueuses. Sa forme de vague symbolise l'écoulement naturel de la vie, la vitalité biologique et la croissance végétale. C'est la rune des émotions profondes, de l'intuition chamanique, de la clairvoyance et de la capacité à se laisser porter par le rythme de l'univers pour opérer des changements majeurs.",
                link: "https://fr.wikipedia.org/wiki/Laguz"
            },
            {
                name: "Ingwaz",
                symbol: "ᛜ",
                meaning: "Fécondité, potentiel, protection du foyer, le dieu Ing",
                element: "Terre",
                lore: "Ingwaz représente l'œuf ou la graine fermée, abritant en son sein tout le potentiel nécessaire à l'éclosion d'une nouvelle vie. Consacrée au dieu Ing (Frey), elle symbolise la fécondité, la gestation créatrice et la concentration d'énergie avant l'action. Sa forme de losange fermé agit également comme un puissant talisman de protection pour le foyer et les projets en cours de maturation.",
                link: "https://fr.wikipedia.org/wiki/Ingwaz"
            },
            {
                name: "Othalaz",
                symbol: "ᛟ",
                meaning: "Ancêtres, patrimoine, héritage spirituel",
                element: "Terre",
                lore: "Othalaz représente le domaine familial sacré et la propriété foncière héritée des ancêtres. C'est la rune de la lignée, du patrimoine spirituel, matériel et culturel accumulé au fil des générations. Elle enseigne l'importance d'intégrer l'héritage du passé dans notre présent pour parfaire notre cheminement initiatique. Sa forme protège la cellule familiale et renforce la cohésion du groupe.",
                link: "https://fr.wikipedia.org/wiki/Othalaz"
            },
            {
                name: "Dagaz",
                symbol: "ᛞ",
                meaning: "Jour, éveil, lumière finale, transformation",
                element: "Feu",
                lore: "Dagaz est la vingt-quatrième et dernière rune du Futhark, marquant l'achèvement et l'accomplissement du chemin initiatique. Elle signifie le jour, le lever de l'aurore et la lumière triomphante de l'éveil spirituel. Sa forme de sablier ou d'infini symbolise l'équilibre parfait des contraires, l'alliance de la lumière et de l'ombre, et le début d'un nouveau cycle de vie plus lumineux.",
                link: "https://fr.wikipedia.org/wiki/Dagaz"
            }
        ],
        history: {
            topic: "Théories et Logistique de la Navigation",
            description: "L'art technologique et stratégique qui permit l'hégémonie maritime scandinave.",
            lore: "<p>La suprématie viking ne reposait pas uniquement sur le courage de ses guerriers, mais sur des technologies et une logistique maritime d'une sophistication inégalée pour l'époque.</p><h4 class='codex-section-title'><i class='fas fa-anchor'></i> 1. La Navigation Céleste & La Pierre de Soleil</h4><p>Pour traverser l'Atlantique Nord sans repères terrestres, les navigateurs scandinaves utilisaient la <strong>pierre de soleil</strong> (<em>sólsteinn</em>), un cristal de spath d'Islande capable de dépolariser la lumière. Même par temps extrêmement brumeux ou après le coucher du soleil, ce cristal révélait la position exacte du soleil dans le ciel, permettant de calibrer précisément leur cadran solaire de navigation.</p><h4 class='codex-section-title'><i class='fas fa-truck-ramp-box'></i> 2. La Logistique Fluviale et le Portage</h4><p>Sur la Route de l'Est (les fleuves russes), les Vikings suédois (les Rus') ont fait face à des obstacles titanesques : les rapides du Dniepr. Ne pouvant les franchir en bateau, ils pratiquaient le <strong>portage</strong>. Les navires étaient tirés hors de l'eau, placés sur des rondins de bois, puis traînés sur des kilomètres à la force des bras à travers des steppes hostiles contrôlées par des tribus nomades, avant d'être remis à l'eau.</p><h4 class='codex-section-title'><i class='fas fa-ship'></i> 3. Des Navires à Double Usage</h4><p>Grâce à leur faible tirant d'eau (environ 1 mètre), les drakkars (<em>langskip</em>) pouvaient remonter des fleuves très peu profonds pour surprendre les villes à l'intérieur des terres, tout en conservant une flexibilité exceptionnelle en haute mer pour résister aux vagues de l'Atlantique. Cette polyvalence unique a redéfini la géographie militaire médiévale.</p>",
            image: "assets/drakkar.png",
            link: "https://fr.wikipedia.org/wiki/Navigation_viking"
        },
        legacy: {
            title: "Origines Mythologiques des Jours",
            description: "Comment les dieux nordiques ont marqué notre calendrier hebdomadaire.",
            lore: "<p>L'empreinte des dieux scandinaves sur notre vie quotidienne est bien plus profonde qu'on ne l'imagine. Si le français a conservé des racines romaines (Lundi pour la Lune, Mardi pour Mars, etc.), les langues germaniques comme l'anglais et l'allemand ont directement traduit ces concepts pour honorer les divinités du panthéon nordique.</p><h4 class='codex-section-title'><i class='fas fa-calendar-alt'></i> Les correspondances majeures</h4><ul><li><strong>Mardi (Tuesday) :</strong> Dérivé du vieux norrois <em>Týsdagr</em>, le jour du dieu <strong>Týr</strong>, le dieu manchot de la guerre, de la justice et du sacrifice héroïque. Il correspond au dieu romain Mars.</li><li><strong>Mercredi (Wednesday) :</strong> Issu de <em>Óðinsdagr</em>, le jour d'<strong>Odin</strong>. Souverain suprême d'Asgard, dieu de la sagesse, de la magie et de la poésie, il correspond à Mercure pour son rôle de voyageur entre les mondes.</li><li><strong>Jeudi (Thursday) :</strong> Dérivé de <em>Þórsdagr</em>, le jour du puissant <strong>Thor</strong>, dieu du tonnerre et protecteur de l'humanité. Il correspond à Jupiter, le foudroyeur romain.</li><li><strong>Vendredi (Friday) :</strong> Issu de <em>Fríjadagr</em>, le jour de la déesse <strong>Frigg</strong> (souvent associée ou confondue avec <strong>Freyja</strong>), déesse de l'amour, du foyer et de la fertilité. Elle correspond à la déesse romaine Vénus.</li></ul><p>Cette survivance linguistique prouve que malgré la christianisation de l'Europe du Nord, les anciens dieux continuent d'habiter le cœur même de notre repère temporel le plus fondamental : la semaine.</p>",
            image: "assets/cosmic_clock.png",
            imageClass: "pattern-bg"
        }
    },
    en: {
        runes: [
            {
                name: "Eihwaz",
                symbol: "ᛇ",
                meaning: "Death, initiation, transformation, Yew tree",
                element: "Earth",
                lore: "Eihwaz represents the Yew (tree), a sacred European tree known for its exceptional longevity. It symbolises the cycle of eternal life, possessing both the power of death (its needles and seeds are highly toxic) and regeneration. By its double hook shape, it forms a bridge connecting the world above with the world below. Eihwaz teaches the necessity of initiatory transformations and symbolic death to access a higher plane of consciousness. It is the rune of necessary passage and deep self-questioning.",
                link: "https://en.wikipedia.org/wiki/Eihwaz"
            },
            {
                name: "Perthro",
                symbol: "ᛈ",
                meaning: "Destiny, chance, mystery, divination",
                element: "Water",
                lore: "Perthro historically symbolises the dice cup or the vessel used to cast the runes, thus embodying the forces of chance, play, and destiny. It is the rune of unrevealed mysteries and the secrets of the universe. It reminds us that each of our choices fits into the complex web of fate (Wyrd), woven by the Norns. Perthro brings esoteric clarity, sharpens intuition, and favors the resolution of complex problems by unveiling what was hidden.",
                link: "https://en.wikipedia.org/wiki/Perthro"
            },
            {
                name: "Elhaz",
                symbol: "ᛉ",
                meaning: "Protection, vigilance, divine connection",
                element: "Air",
                lore: "Elhaz (or Algiz) represents the protective horns of the elk or the posture of a human being reaching out to the sky in a sign of sacred invocation. It is a powerful rune of active defense and spiritual protection against external threats. It also symbolises the indestructible link connecting humans to the deities and the Valkyries. Elhaz invites serene vigilance and the elevation of the spirit to benefit from natural and cosmic protection.",
                link: "https://en.wikipedia.org/wiki/Algiz"
            },
            {
                name: "Sowilo",
                symbol: "ᛊ",
                meaning: "Sun, light, victory, achievement",
                element: "Fire",
                lore: "Sowilo represents the sun in all its splendor and creative power. It symbolises the victory of light over darkness, spiritual illumination, success, and vital energy. Its shape evokes lightning, bringing instantaneous dynamic strength to overcome obstacles and realize one's ambitions. It is the rune of spiritual guides and teachers who bring mental clarity and dispel doubts.",
                link: "https://en.wikipedia.org/wiki/Sowilo"
            },
            {
                name: "Tiwaz",
                symbol: "ᛏ",
                meaning: "Justice, courage, responsibility, the god Tyr",
                element: "Air",
                lore: "Tiwaz is directly dedicated to the god Tyr, the god of just war, social order, and law. Its upward-pointing arrow shape symbolises moral righteousness, heroic courage, and victory in battles fought for noble causes. It is intimately linked to personal sacrifice and responsibility, recalling how Tyr courageously offered his right hand to chain the wolf Fenrir and preserve the cosmic balance.",
                link: "https://en.wikipedia.org/wiki/Tiwaz"
            },
            {
                name: "Berkano",
                symbol: "ᛒ",
                meaning: "Birth, regeneration, fertility, mother goddess",
                element: "Earth",
                lore: "Berkano means the birch, a pioneer tree renowned for its resilience and capacity for rapid regeneration. It embodies the feminine power of the mother goddess, symbolising fertility, motherhood, and all physical or spiritual births. Its shape evokes the breast of a pregnant woman, bringing benevolent protection to new beginnings, healing, and the blossoming of creative ideas.",
                link: "https://en.wikipedia.org/wiki/Berkano"
            },
            {
                name: "Ehwaz",
                symbol: "ᛖ",
                meaning: "Horse, movement, journey, harmony",
                element: "Earth",
                lore: "Ehwaz represents the horse, a sacred animal and indispensable companion of the Vikings, symbolising orderly movement, physical or spiritual travel, and discovery. Its shape suggests perfect harmony and mutual trust between rider and mount. It is the rune of fluid transition, also connecting the world of the living to that of the dead by carrying souls.",
                link: "https://en.wikipedia.org/wiki/Ehwaz"
            },
            {
                name: "Mannaz",
                symbol: "ᛗ",
                meaning: "Human, society, consciousness, harmony",
                element: "Air",
                lore: "Mannaz means man in the sense of human being and humanity. It represents social integration, cooperation, solidarity within the clan, and collective spiritual consciousness. It is the rune that connects the human mind to cosmic and divine forces. Mannaz teaches the importance of living in perfect balance with oneself and one's environment.",
                link: "https://en.wikipedia.org/wiki/Mannaz"
            },
            {
                name: "Laguz",
                symbol: "ᛚ",
                meaning: "Water, intuition, vital force, flow",
                element: "Water",
                lore: "Laguz represents water in all its forms: the sea, lakes, or rushing rivers. Its wave shape symbolises the natural flow of life, biological vitality, and plant growth. It is the rune of deep emotions, shamanic intuition, clairvoyance, and the capacity to let oneself be carried by the rhythm of the universe to bring about major changes.",
                link: "https://en.wikipedia.org/wiki/Laguz"
            },
            {
                name: "Ingwaz",
                symbol: "ᛜ",
                meaning: "Fertility, potential, home protection, the god Ing",
                element: "Earth",
                lore: "Ingwaz represents the egg or the closed seed, sheltering within it all the potential necessary for the blossoming of a new life. Dedicated to the god Ing (Freyr), it symbolises fertility, creative gestation, and concentration of energy before action. Its closed diamond shape also acts as a powerful protective talisman for the home and ongoing projects.",
                link: "https://en.wikipedia.org/wiki/Ingwaz"
            },
            {
                name: "Othalaz",
                symbol: "ᛟ",
                meaning: "Ancestors, patrimony, spiritual heritage",
                element: "Earth",
                lore: "Othalaz represents the sacred family domain and land inherited from ancestors. It is the rune of lineage, and the spiritual, material, and cultural heritage accumulated over generations. It teaches the importance of integrating the legacy of the past into our present to complete our initiatory journey. Its shape protects the family unit and strengthens group cohesion.",
                link: "https://en.wikipedia.org/wiki/Othalaz"
            },
            {
                name: "Dagaz",
                symbol: "ᛞ",
                meaning: "Day, awakening, final light, transformation",
                element: "Fire",
                lore: "Dagaz is the twenty-fourth and last rune of the Futhark, marking the completion and fulfillment of the initiatory journey. It means the day, the dawn, and the triumphant light of spiritual awakening. Its hourglass or infinity shape symbolises the perfect balance of opposites, the alliance of light and shadow, and the beginning of a new, brighter cycle of life.",
                link: "https://en.wikipedia.org/wiki/Dagaz"
            }
        ],
        history: {
            topic: "Navigation Theories and Logistics",
            description: "The technological and strategic art that enabled Scandinavian maritime hegemony.",
            lore: "<p>Viking supremacy was not built solely on the courage of its warriors, but on maritime technologies and logistics of an sophistication unequaled for the time.</p><h4 class='codex-section-title'><i class='fas fa-anchor'></i> 1. Celestial Navigation & The Sunstone</h4><p>To cross the North Atlantic without land landmarks, Scandinavian navigators used the <strong>sunstone</strong> (<em>sólsteinn</em>), an Iceland spar crystal capable of depolarizing light. Even in extremely foggy weather or after sunset, this crystal revealed the exact position of the sun in the sky, allowing them to precisely calibrate their solar navigation dial.</p><h4 class='codex-section-title'><i class='fas fa-truck-ramp-box'></i> 2. River Logistics and Portage</h4><p>On the Eastern Route (the Russian rivers), the Swedish Vikings (the Rus') faced monumental obstacles: the rapids of the Dnieper. Unable to cross them by boat, they practiced <strong>portage</strong>. The ships were pulled out of the water, placed on wooden logs, and dragged for miles by arm strength across hostile steppes controlled by nomadic tribes, before being returned to the water.</p><h4 class='codex-section-title'><i class='fas fa-ship'></i> 3. Dual-Use Vessels</h4><p>Thanks to their shallow draft (about 1 meter), longships (<em>langskip</em>) could navigate very shallow rivers to surprise inland cities, while retaining exceptional flexibility on the high seas to withstand Atlantic waves. This unique versatility redefined medieval military geography.</p>",
            image: "assets/drakkar.png",
            link: "https://en.wikipedia.org/wiki/Viking_navigation"
        },
        legacy: {
            title: "Mythological Origins of Weekdays",
            description: "How Norse deities permanently shaped the days of our modern weekly calendar.",
            lore: "<p>The imprint of Scandinavian deities on our daily lives is far deeper than we realize. While Romance languages like French preserved Latin roots, Germanic languages like English and German directly translated these concepts to honor the gods of the Norse pantheon.</p><h4 class='codex-section-title'><i class='fas fa-calendar-alt'></i> Major Correspondences</h4><ul><li><strong>Tuesday :</strong> Derived from Old Norse <em>Týsdagr</em>, the day of the god <strong>Týr</strong>, the one-handed deity of war, justice, and heroic sacrifice. He corresponds to the Roman god Mars.</li><li><strong>Wednesday :</strong> Coming from <em>Óðinsdagr</em>, the day of <strong>Odin</strong>. The supreme ruler of Asgard, god of wisdom, magic, and poetry, he corresponds to Mercury for his role as a traveler between worlds.</li><li><strong>Thursday :</strong> Derived from <em>Þórsdagr</em>, the day of the mighty <strong>Thor</strong>, god of thunder and protector of humanity. He corresponds to Jupiter, the Roman thunderer.</li><li><strong>Friday :</strong> Stemming from <em>Fríjadagr</em>, the day of the goddess <strong>Frigg</strong> (often associated or blended with <strong>Freyja</strong>), goddess of love, home, and fertility. She corresponds to the Roman goddess Venus.</li></ul><p>This linguistic legacy proves that despite the Christianization of Northern Europe, the ancient gods continue to dwell in the very heart of our most fundamental division of time: the week.</p>",
            image: "assets/cosmic_clock.png",
            imageClass: "pattern-bg"
        }
    },
    is: {
        runes: [
            {
                name: "Eihwaz",
                symbol: "ᛇ",
                meaning: "Dauði, vígsla, umbreyting, ýviður",
                element: "Törð",
                lore: "Eihwaz táknar ýviðinn (ý), heilagt evrópskt tré sem er þekkt fyrir sérstakan lífaldur sinn. Hún táknar hringrás eilífs lífs, og hefur bæði mátt dauðans (barrið og fræin eru mjög eitruð) og endurnýjunar. Vegna tvöfalda krókaformsins myndar hún brú sem tengir efri og neðri heima. Eihwaz kennir nauðsyn vígslubreytinga og táknræns dauða til að ná æðra meðvitundarstigi. Þetta er rún nauðsynlegrar yfirfærslu og djúprar sjálfsskoðunar.",
                link: "https://is.wikipedia.org/wiki/%C3%9Dr_(r%C3%BAn)"
            },
            {
                name: "Perthro",
                symbol: "ᛈ",
                meaning: "Örlög, tilviljun, leyndardómur, spádómur",
                element: "Vatn",
                lore: "Perthro táknar sögulega teningabikarinn eða ílátið sem notað var til að kasta rúnunum, og felur þannig í sér krafta tilviljunar, leiks og örlaga. Þetta er rún óupplýstra leyndardóma og leyndarmála alheimsins. Hún minnir okkur á að hvert val okkar passar inn í flókinn vef örlaganna (Wyrd), sem Nornirnar vefa. Perthro veitir dulspekilegan skýrleika, skerpir innsæi og hjálpar við lausn flókinna vandamála með því að afhjúpa það sem var falið.",
                link: "https://en.wikipedia.org/wiki/Perthro"
            },
            {
                name: "Elhaz",
                symbol: "ᛉ",
                meaning: "Vernd, vökulsemi, guðleg tenging",
                element: "Loft",
                lore: "Elhaz (eða Algiz) táknar verndarhorn elgsins eða líkamsstöðu manneskju sem teygir sig til himins í táknrænni ákalli. Þetta er öflug rún virkra varna og andlegrar verndar gegn ytri ógnum. Hún táknar einnig óbrjótandi tengsl manna við goðin og valkyrjurnar. Elhaz býður upp á rólega vökulsemi og upplyfting andans til að njóta góðs af náttúrulegri og kosmískri vernd.",
                link: "https://en.wikipedia.org/wiki/Algiz"
            },
            {
                name: "Sowilo",
                symbol: "ᛊ",
                meaning: "Sól, ljós, sigur, árangur",
                element: "Eldur",
                lore: "Sowilo táknar sólina í allri sinni dýrð og sköpunarmætti. Hún táknar sigur ljóssins yfir myrkrinu, andlega upplýsingu, árangur og lífsorku. Form hennar minnir á eldingu, sem færir tafarlausan dýnamískan styrk til að yfirstíga hindranir og láta metnað sinn rætast. Þetta er rún andlegra leiðbeinenda og kennara sem færa andlegan skýrleika og eyða efasemdum.",
                link: "https://is.wikipedia.org/wiki/S%C3%B3l_(r%C3%BAn)"
            },
            {
                name: "Tiwaz",
                symbol: "ᛏ",
                meaning: "Réttlæti, hugrekki, ábyrgð, guðinn Týr",
                element: "Loft",
                lore: "Tiwaz er beint tileinkuð guðinum Tý, guði réttláts stríðs, samfélagsreglu og laga. Örvarform hennar sem vísar upp á við táknar siðferðilegan réttlæti, hetjulegt hugrekki og sigur í orrustum sem barist er fyrir göfugum málefnum. Hún er nátengd persónulegri fórn og ábyrgð, og minnir á hvernig Týr fórnaði hægri hendi sinni til að fjötra Fenrisúlfinn og varðveita kosmískt jafnvægi.",
                link: "https://is.wikipedia.org/wiki/T%C3%BDr_(r%C3%BAn)"
            },
            {
                name: "Berkano",
                symbol: "ᛒ",
                meaning: "Fæðing, endurnýjun, frjósemi, móðurgyðja",
                element: "Törð",
                lore: "Berkano þýðir björk, brautryðjendatré sem er frægt fyrir seiglu sína og getu til hraðrar endurnýjunar. Hún felur í sér kvenlegan mátt móðurgyðjunnar, táknar frjósemi, móðurhlutverk og allar líkamlegar eða andlegar fæðingar. Form hennar minnir á brjóst ófrískrar konu, og færir góðviljaða vernd fyrir nýtt upphaf, lækningu og blómstrun skapandi hugmynda.",
                link: "https://is.wikipedia.org/wiki/Bjarkan"
            },
            {
                name: "Ehwaz",
                symbol: "ᛖ",
                meaning: "Hestur, hreyfing, ferðalag, sátt",
                element: "Törð",
                lore: "Ehwaz táknar hestinn, heilagt dýr og ómissandi félaga víkinga, sem táknar skipulega hreyfingu, líkamlegt eða andlegt ferðalag og uppgötvun. Form hennar bendir til fullkominnar sáttar og gagnkvæms trausts milli knapa og hests. Þetta er rún flæðandi umskipta, sem einnig tengir heim lifenda við heim dauðra með því að flytja sálir.",
                link: "https://is.wikipedia.org/wiki/Ehwaz"
            },
            {
                name: "Mannaz",
                symbol: "ᛗ",
                meaning: "Maður, samfélag, meðvitund, sátt",
                element: "Loft",
                lore: "Mannaz þýðir maður í skilningi manneskju og mannkyns. Hún táknar samfélagslega aðlögun, samvinnu, samstöðu innan ættarinnar og sameiginlega andlega meðvitund. Þetta er rúnin sem tengir hugann við kosmíska og guðlega krafta. Mannaz kennir mikilvægi þess að lifa í fullkomnu jafnvægi við sjálfan sig og umhverfi sitt.",
                link: "https://is.wikipedia.org/wiki/Ma%C3%B0ur_(r%C3%BAn)"
            },
            {
                name: "Laguz",
                symbol: "ᛚ",
                meaning: "Vatn, innsæi, lífsorku, flæði",
                element: "Vatn",
                lore: "Laguz táknar vatn í öllum sínum myndum: sjóinn, vötn eða straumharðar ár. Bylgjuform hennar táknar náttúrulegt flæði lífsins, líffræðilegan lífsþrótt og vöxt plantna. Þetta er rún djúpra tilfinninga, innsæis, skyggnigáfu og getu til að láta sig berast með takti alheimsins til að koma á meiriháttar breytingum.",
                link: "https://is.wikipedia.org/wiki/L%C3%B6gur_(r%C3%BAn)"
            },
            {
                name: "Ingwaz",
                symbol: "ᛜ",
                meaning: "Frjósemi, möguleikar, heimilisvernd, guðinn Yngvi",
                element: "Törð",
                lore: "Ingwaz táknar eggið eða lokaða fræið, sem geymir í sér alla þá möguleika sem nauðsynlegir eru til að nýtt líf blómstri. Hún er tileinkuð guðinum Yngva (Frey) og táknar frjósemi, skapandi meðgöngu og samþjöppun orku fyrir aðgerðir. Lokað tígullaga form hennar virkar einnig sem öflugur verndargripur fyrir heimilið og yfirstandandi verkefni.",
                link: "https://is.wikipedia.org/wiki/Ingwaz"
            },
            {
                name: "Othalaz",
                symbol: "ᛟ",
                meaning: "Forfeður, óðal, andlegur arfur",
                element: "Törð",
                lore: "Othalaz táknar hið heilaga fjölskylduóðal og land sem er numið frá forfeðrum. Þetta er rún ættarinnar, og hins andlega, efnislega og menningarlega arfs sem safnast hefur upp í gegnum kynslóðir. Hún kennir mikilvægi þess að samþætta arfleifð fortíðarinnar í nútíð okkar til að ljúka andlegu ferðalagi okkar. Form hennar verndar fjölskylduna og styrkir samstöðu hópsins.",
                link: "https://is.wikipedia.org/wiki/%C3%93%C3%B0al_(r%C3%BAn)"
            },
            {
                name: "Dagaz",
                symbol: "ᛞ",
                meaning: "Dagur, vakning, loka ljós, umbreyting",
                element: "Eldur",
                lore: "Dagaz er tuttugasta og fjórða og síðasta rún Futharksins, og markar lok og uppfyllingu andlega ferðalagsins. Hún þýðir dagurinn, dögunin og hinn sigursæli ljómi andlegrar vakningar. Stundaglas- eða óendanleikaform hennar táknar fullkomið jafnvægi andstæðna, bandalag ljóss og skugga, og upphaf nýs, bjartari lífsferils.",
                link: "https://is.wikipedia.org/wiki/Dagur_(r%C3%BAn)"
            }
        ],
        history: {
            topic: "Kenningar og tækni í siglingum",
            description: "Hin tæknilega og hernaðarlega list sem tryggði yfirráð norrænna manna á höfunum.",
            lore: "<p>Yfirburðir víkinga byggðust ekki eingöngu á hugrekki stríðsmanna þeirra, heldur á siglingatækni og skipulagningu sem var einstaklega háþróuð á þeim tíma.</p><h4 class='codex-section-title'><i class='fas fa-anchor'></i> 1. Stjörnusiglingar og sólsteinar</h4><p>Til að sigla yfir Norður-Atlantshafið án þess að sjá land notuðu norrænir siglingamenn <strong>sólstein</strong> (<em>sólsteinn</em>), sem er silfurbergskristall sem getur greint skautað ljós. Jafnvel í mikilli þoku eða eftir sólsetur sýndi þessi kristall nákvæma staðsetningu sólarinnar á himninum, sem gerði þeim kleift að stilla sólskífuna sína nákvæmlega.</p><h4 class='codex-section-title'><i class='fas fa-truck-ramp-box'></i> 2. Fljótasiglingar og dragferðir</h4><p>Á austurveginum (rússnesku fljótunum) stóðu sænskir víkingar (Svíar eða Garðar) frammi fyrir gríðarlegum hindrunum: flúðunum í Dnjepr. Þar sem ekki var hægt að sigla yfir þær drógu þeir skipin á land, settu þau á trérúllur og drógu þau kílómetrum saman með handafli yfir fjandsamlegar sléttur áður en þeim var hleypt aftur á flot.</p><h4 class='codex-section-title'><i class='fas fa-ship'></i> 3. Fjölhæf skip</h4><p>Vegna þess hve skipin (<em>langskip</em>) ristu grunnt (um 1 metra) gátu víkingar siglt upp mjög grunnar ár til að koma borgum á óvart inni í landi, en skipin héldu samt einstökum sveigjanleika á opnu hafi til að standast Atlantshafsöldurnar. Þessi fjölhæfni breytti hernaðarsögu miðalda.</p>",
            image: "assets/drakkar.png",
            link: "https://is.wikipedia.org/wiki/Kn%C3%B6rrur"
        },
        legacy: {
            title: "Goðsögulegur uppruni vikudaganna",
            description: "Hvernig norræn goð settu varanlegt svip sinn á daga nútíma dagatalsins okkar.",
            lore: "<p>Áhrif norrænna goða á daglegt líf okkar eru miklu dýpri en við gerum okkur grein fyrir. Þótt rómönsk tungumál eins og franska hafi varðveitt latneskar rætur (t.d. Mardi fyrir Mars), þá þýddu germönsk tungumál eins og enska og þýska þessi hugtök beint til að heiðra goðin í norrænni goðafræði.</p><h4 class='codex-section-title'><i class='fas fa-calendar-alt'></i> Helstu samsvaranir</h4><ul><li><strong>Þriðjudagur (Tuesday) :</strong> Dregið af norræna heitinu <em>Týsdagr</em>, dagur guðsins <strong>Týs</strong>, hins einhenda guðs stríðs, réttlætis og hetjulegrar fórnar. Hann samsvarar rómverska guðinum Mars.</li><li><strong>Miðvikudagur (Wednesday) :</strong> Á ensku tengt <em>Óðinsdagr</em>, dagur <strong>Óðins</strong>. Æðsti guð Ásgarðs, guð vísinda, galdra og skáldskapar, hann samsvarar Merkúríusi vegna hlutverks síns sem ferðalangur milli heima.</li><li><strong>Fimmtudagur (Thursday) :</strong> Dregið af <em>Þórsdagr</em>, dagur hins öfluga <strong>Þórs</strong>, þrumuguðs og verndara mannkyns. Hann samsvarar Júpíter, rómverska þrumuguðinum.</li><li><strong>Föstudagur (Friday) :</strong> Kemur af <em>Fríjadagr</em>, dagur gyðjunnar <strong>Friggjar</strong> (oft tengd eða blönduð við <strong>Freyju</strong>), gyðju ástar, heimilis og frjósemi. Hún samsvarar rómversku gyðjunni Venus.</li></ul><p>Þessi málvísindalegi arfur sýnir að þrátt fyrir kristnun Norður-Evrópu halda hin fornu goð áfram að búa í sjálfu hjarta okkar grundvallar tímaskiptingar: vikunni.</p>",
            image: "assets/cosmic_clock.png",
            imageClass: "pattern-bg"
        }
    },
    da: {
        runes: [
            {
                name: "Eihwaz",
                symbol: "ᛇ",
                meaning: "Død, indvielse, transformation, taks",
                element: "Jord",
                lore: "Eihwaz repræsenterer takstræet (Yew), et helligt europæisk træ kendt for sin ekstraordinære levetid. Det symboliserer det evige livs cyklus, der besidder både dødens kraft (dens nåle og frø er yderst giftige) og regenerering. Med sin dobbelte krogform danner den en bro, der forbinder verdenen ovenover med verdenen nedenunder. Eihwaz lærer nødvendigheden af indvielsestransformationer og symbolsk død for at få adgang til et højere bevidsthedsniveau. Det er runen for nødvendig overgang og dyb selvransagelse.",
                link: "https://da.wikipedia.org/wiki/Eihwaz"
            },
            {
                name: "Perthro",
                symbol: "ᛈ",
                meaning: "Skæbne, tilfældighed, mysterium, divination",
                element: "Vand",
                lore: "Perthro symboliserer historisk set det raflebæger eller den beholder, der bruges til at kaste runerne, og inkarnerer dermed kræfterne bag tilfældighed, spil og skæbne. Det er runen for uåbnede mysterier og universets hemmeligheder. Den minder os om, at hvert af vores valg passer ind i skæbnens komplekse spind (Wyrd), vævet af nornerne. Perthro bringer esoterisk klarhed, skærper intuitionen og fremmer løsningen af komplekse problemer ved at afsløre det skjulte.",
                link: "https://en.wikipedia.org/wiki/Perthro"
            },
            {
                name: "Elhaz",
                symbol: "ᛉ",
                meaning: "Beskyttelse, årvågenhed, guddommelig forbindelse",
                element: "Luft",
                lore: "Elhaz (eller Algiz) repræsenterer elgens beskyttende horn eller holdningen hos et menneske, der rækker ud mod himlen i et tegn på hellig påkaldelse. Det er en kraftfuld rune til aktivt forsvar og åndelig beskyttelse mod ydre trusler. Den symboliserer også det uforgængelige link, der forbinder mennesker med guderne og valkyrierne. Elhaz inviterer til rolig årvågenhed og højnelse af ånden for at drage fordel af naturlig og kosmisk beskyttelse.",
                link: "https://da.wikipedia.org/wiki/Algiz"
            },
            {
                name: "Sowilo",
                symbol: "ᛊ",
                meaning: "Sol, lys, sejr, præstation",
                element: "Ild",
                lore: "Sowilo repræsenterer solen i al sin pragt og kreative kraft. Den symboliserer lysets sejr over mørket, åndelig oplysning, succes og vital energi. Dens form minder om lynet, der bringer øjeblikkelig dynamisk styrke til at overvinde forhindringer og realisere sine ambitioner. Det er runen for åndelige vejledere og lærere, der bringer mental klarhed og fjerner tvivl.",
                link: "https://da.wikipedia.org/wiki/Sowilo"
            },
            {
                name: "Tiwaz",
                symbol: "ᛏ",
                meaning: "Retfærdighed, mod, ansvar, guden Tyr",
                element: "Luft",
                lore: "Tiwaz er direkte dedikeret til guden Tyr, guden for retfærdig krig, social orden og lov. Dens opadpegende pilform symboliserer moralsk retfærdighed, heltemodigt mod og sejr i kampe udkæmpet for ædle sager. Den er tæt forbundet med personligt offer og ansvar, idet den minder om, hvordan Tyr modigt tilbød sin højre hånd for at lænke Fenrisulven og bevare den kosmiske balance.",
                link: "https://da.wikipedia.org/wiki/Tiwaz"
            },
            {
                name: "Berkano",
                symbol: "ᛒ",
                meaning: "Fødsel, regenerering, fertilitet, modergudinde",
                element: "Jord",
                lore: "Berkano betyder birken, et pionertræ kendt for sin modstandskraft og kapacitet til hurtig regenerering. Den inkarnerer modergudindens feminine kraft, som symboliserer fertilitet, moderskab og alle fysiske eller åndelige fødsler. Dens form minder om brystet på en gravid kvinde, hvilket bringer kærlig beskyttelse til nye begyndelser, helbredelse og blomstring af kreative ideer.",
                link: "https://da.wikipedia.org/wiki/Berkano"
            },
            {
                name: "Ehwaz",
                symbol: "ᛖ",
                meaning: "Hest, bevægelse, rejse, harmoni",
                element: "Jord",
                lore: "Ehwaz repræsenterer hesten, et helligt dyr og uundværlig ledsager for vikingerne, der symboliserer velordnet bevægelse, fysisk eller åndelig rejse og opdagelse. Dens form antyder perfekt harmoni og gensidig tillid mellem rytter og hest. Det er runen for flydende overgang, der også forbinder de levendes verden med de dødes ved at transportere sjæle.",
                link: "https://da.wikipedia.org/wiki/Ehwaz"
            },
            {
                name: "Mannaz",
                symbol: "ᛗ",
                meaning: "Menneske, samfund, bevidsthed, harmoni",
                element: "Luft",
                lore: "Mannaz betyder mand i betydningen menneske og menneskehed. Den repræsenterer social integration, samarbejde, solidaritet inden for klanen og kollektiv åndelig bevidsthed. Det er runen, der forbinder det menneskelige sind med kosmiske og guddommelige kræfter. Mannaz lærer vigtigheden af at leve i perfekt balance med sig selv og sine omgivelser.",
                link: "https://da.wikipedia.org/wiki/Mannaz"
            },
            {
                name: "Laguz",
                symbol: "ᛚ",
                meaning: "Vand, intuition, livskraft, strøm",
                element: "Vand",
                lore: "Laguz repræsenterer vand i alle dets former: havet, søer eller brusende floder. Dens bølgeform symboliserer livets naturlige strøm, biologisk vitalitet og plantevækst. Det er runen for dybe følelser, shamanistisk intuition, klarsyn og evnen til at lade sig rive med af universets rytme for at skabe store ændringer.",
                link: "https://da.wikipedia.org/wiki/Laguz"
            },
            {
                name: "Ingwaz",
                symbol: "ᛜ",
                meaning: "Fertilitet, potentiale, beskyttelse af hjemmet, guden Ing",
                element: "Jord",
                lore: "Ingwaz repræsenterer ægget eller det lukkede frø, der i sit indre rummer alt det potentiale, der er nødvendigt for blomstringen af et nyt liv. Dedikeret til guden Ing (Freyr) symboliserer den fertilitet, kreativ drægtighed og koncentration af energi før handling. Dens lukkede diamantform fungerer også som en kraftfuld beskyttende talisman for hjemmet og igangværende projekter.",
                link: "https://da.wikipedia.org/wiki/Ingwaz"
            },
            {
                name: "Othalaz",
                symbol: "ᛟ",
                meaning: "Forfædre, arv, åndelig kulturarv",
                element: "Jord",
                lore: "Othalaz repræsenterer det hellige familieterritorium og den jord, der er arvet fra forfædrene. Det er runen for slægt og den åndelige, materielle og kulturelle arv, der er akkumuleret gennem generationer. Den lærer vigtigheden af at integrere fortidens arv i vores nutid for at fuldende vores indvielsesrejse. Dens form beskytter familien og styrker gruppens sammenhold.",
                link: "https://da.wikipedia.org/wiki/Odal"
            },
            {
                name: "Dagaz",
                symbol: "ᛞ",
                meaning: "Dag, opvågning, det endelige lys, transformation",
                element: "Ild",
                lore: "Dagaz er den fireogtyvende og sidste rune i Futharken, og markerer afslutningen og opfyldelsen af den indviede rejse. Den betyder dagen, daggryet og det triumferende lys af åndelig opvågning. Dens timeglas- eller uendelighedsform symboliserer den perfekte balance mellem modsætninger, alliancen mellem lys og skygge og begyndelsen på en ny, lysere livscyklus.",
                link: "https://da.wikipedia.org/wiki/Dagaz"
            }
        ],
        history: {
            topic: "Navigationsteorier og logistik",
            description: "Den teknologiske og strategiske kunst, der muliggjorde det skandinaviske maritime hegemoni.",
            lore: "<p>Vikingernes overlegenhed byggede ikke udelukkende på krigernes mod, men på maritime teknologier og logistik af en sofistikeret karakter, der var enestående for sin tid.</p><h4 class='codex-section-title'><i class='fas fa-anchor'></i> 1. Himmelnavigation & Solstenen</h4><p>For at krydse Nordatlanten uden landmærker brugte skandinaviske navigatører <strong>solstenen</strong> (<em>sólsteinn</em>), en islandsk dobbeltspatkrystal, der er i stand til at afpolarisere lys. Selv i ekstremt tåget vejr eller efter solnedgang afslørede denne krystal solens præcise position på himlen, hvilket gjorde det muligt for dem at kalibrere deres solnavigationsskive nøjagtigt.</p><h4 class='codex-section-title'><i class='fas fa-truck-ramp-box'></i> 2. Flodlogistik og portage</h4><p>På den østlige rute (de russiske floder) mødte de svenske vikinger (Rus') monumentale forhindringer: flokken i Dnieper. Da de ikke kunne krydse dem med båd, praktiserede de <strong>portage</strong>. Skibene blev trukket op af vandet, placeret på træruller og slæbt i milevis med håndkraft over fjendtlige stepper, før de blev sat tilbage i vandet.</p><h4 class='codex-section-title'><i class='fas fa-ship'></i> 3. Skibe med dobbelt anvendelse</h4><p>Takket være deres lave dybgang (ca. 1 meter) kunne langskibe (<em>langskip</em>) navigere på meget lave floder for at overraske byer i det indre land, mens de bevarede en enestående fleksibilitet på åbent hav til at modstå Atlanterhavets bølger. Denne unikke alsidighed omdefinerede middelalderens militære geografi.</p>",
            image: "assets/drakkar.png",
            link: "https://da.wikipedia.org/wiki/Vikingeskib"
        },
        legacy: {
            title: "Ugedagenes mytologiske oprindelse",
            description: "Hvordan de nordiske guder satte et permanent præg på dagene i vores moderne ugekalender.",
            lore: "<p>De skandinaviske guders aftryk på vores dagligdag er langt dybere, end vi indser. Mens romanske sprog som fransk har bevaret de latinske rødder (f.eks. Mardi for Mars), har germanske sprog som engelsk og tysk direkte oversat disse begreber for at ære guderne i det nordiske pantheon.</p><h4 class='codex-section-title'><i class='fas fa-calendar-alt'></i> Vigtige overensstemmelser</h4><ul><li><strong>Tirsdag (Tuesday) :</strong> Afledt af oldnordisk <em>Týsdagr</em>, dagen for guden <strong>Tyr</strong>, den enarmede gud for krig, retfærdighed og heltemodigt offer. Han samsvarer med den romerske gud Mars.</li><li><strong>Onsdag (Wednesday) :</strong> Kommer af <em>Óðinsdagr</em>, dagen for <strong>Odin</strong>. Asgårds øverste hersker, gud for visdom, magi og poesi, han svarer til Merkur for sin rolle som rejsende mellem verdener.</li><li><strong>Torsdag (Thursday) :</strong> Afledt af <em>Þórsdagr</em>, dagen for den mægtige <strong>Thor</strong>, tordengud og menneskehedens beskytter. Han svarer til Jupiter, den romerske tordengud.</li><li><strong>Fredag (Friday) :</strong> Stammer fra <em>Fríjadagr</em>, dagen for gudinden <strong>Frigg</strong> (ofte forbundet med eller forvekslet med <strong>Freyja</strong>), gudinde for kærlighed, hjem og frugtbarhed. Hun svarer til den romerske gudinde Venus.</li></ul><p>Denne sproglige arv beviser, at de gamle guder fortsat lever i selve hjertet af vores mest fundamentale tidsinddeling: ugen.</p>",
            image: "assets/cosmic_clock.png",
            imageClass: "pattern-bg"
        }
    },
    es: {
        runes: [
            {
                name: "Eihwaz",
                symbol: "ᛇ",
                meaning: "Muerte, iniciación, transformación, el Tejo",
                element: "Tierra",
                lore: "Eihwaz representa el Tejo (Yew), un árbol sagrado europeo conocido por su excepcional longevidad. Simboliza el ciclo de la vida eterna, poseyendo tanto el poder de la muerte (sus agujas y semillas son altamente tóxicas) como el de la regeneración. Por su forma de doble gancho, forma un puente que conecta el mundo de arriba con el mundo de abajo. Eihwaz enseña la necesidad de las transformaciones iniciáticas y de la muerte simbólica para acceder a un plano superior de conciencia. Es la runa del paso necesario y de los cuestionamientos profundos.",
                link: "https://es.wikipedia.org/wiki/Eihwaz"
            },
            {
                name: "Perthro",
                symbol: "ᛈ",
                meaning: "Destino, azar, misterio, adivinación",
                element: "Agua",
                lore: "Perthro simboliza históricamente el cubilete de dados o el recipiente utilizado para lanzar las runas, encarnando así las fuerzas del azar, el juego y el destino. Es la runa de los misterios no revelados y de los secretos del universo. Nos recuerda que cada una de nuestras elecciones encaja en la compleja trama del destino (el Wyrd), tejida por las Nornas. Perthro aporta claridad esotérica, agudiza la intuición y favorece la resolución de problemas complejos al desvelar lo que estaba oculto.",
                link: "https://es.wikipedia.org/wiki/Perthro"
            },
            {
                name: "Elhaz",
                symbol: "ᛉ",
                meaning: "Protección, vigilancia, conexión divina",
                element: "Aire",
                lore: "Elhaz (o Algiz) representa los cuernos protectores del alce o la postura de un ser humano que extiende sus manos hacia el cielo en señal de invocación sagrada. Es una poderosa runa de defensa activa y protección espiritual contra las amenazas externas. También simboliza el vínculo indestructible que conecta a los humanos con las divinidades y las valquirias. Elhaz invita a la vigilancia serena y a la elevación del espíritu para beneficiarse de una protección natural y cósmica.",
                link: "https://es.wikipedia.org/wiki/Algiz"
            },
            {
                name: "Sowilo",
                symbol: "ᛊ",
                meaning: "Sol, luz, victoria, logro",
                element: "Fuego",
                lore: "Sowilo representa al sol en todo su esplendor y poder creativo. Simboliza la victoria de la luz sobre la oscuridad, la iluminación espiritual, el éxito y la energía vital. Su forma evoca el rayo, aportando una fuerza dinámica instantánea para superar obstáculos y alcanzar ambiciones. Es la runa de los guías espirituales y maestros que aportan claridad mental y disipan dudas.",
                link: "https://es.wikipedia.org/wiki/Sowilo"
            },
            {
                name: "Tiwaz",
                symbol: "ᛏ",
                meaning: "Justicia, coraje, responsabilidad, el dios Tyr",
                element: "Aire",
                lore: "Tiwaz está directamente dedicada al dios Tyr, el dios de la guerra justa, del orden social y de la ley. Su forma de flecha apuntando hacia arriba simboliza la rectitud moral, el coraje heroico y la victoria en los combates librados por causas nobles. Está íntimamente ligada al sacrificio personal y a la responsabilidad, recordando cómo Tyr ofreció valientemente su mano derecha para encadenar al lobo Fenrir y preservar el equilibrio cósmico.",
                link: "https://es.wikipedia.org/wiki/Tiwaz"
            },
            {
                name: "Berkano",
                symbol: "ᛒ",
                meaning: "Nacimiento, regeneración, fertilidad, diosa madre",
                element: "Tierra",
                lore: "Berkano significa el abedul, un árbol pionero conocido por su resiliencia y su capacidad de regeneración rápida. Encarna el poder femenino de la diosa madre, simbolizando la fertilidad, la maternidad y todos los nacimientos físicos o espirituales. Su forma evoca el pecho de una mujer embarazada, aportando una protección benevolente a los nuevos comienzos, a la curación y a la eclosión de ideas creadoras.",
                link: "https://es.wikipedia.org/wiki/Berkano"
            },
            {
                name: "Ehwaz",
                symbol: "ᛖ",
                meaning: "Caballo, movimiento, viaje, armonía",
                element: "Tierra",
                lore: "Ehwaz representa al caballo, animal sagrado y compañero indispensable de los vikingos, simbolizando el movimiento ordenado, el viaje físico o espiritual y el descubrimiento. Su forma sugiere la perfecta armonía y la confianza mutua entre el jinete y su montura. Es la runa de la transición fluida, conectando también el mundo de los vivos con el de los muertos al transportar las almas.",
                link: "https://es.wikipedia.org/wiki/Ehwaz"
            },
            {
                name: "Mannaz",
                symbol: "ᛗ",
                meaning: "Humano, sociedad, conciencia, armonía",
                element: "Aire",
                lore: "Mannaz significa el hombre en el sentido de ser humano y humanidad. Representa la integración social, la cooperación, la solidaridad dentro del clan y la conciencia espiritual colectiva. Es la runa que conecta la mente humana con las fuerzas cósmicas y divinas. Mannaz enseña la importancia de vivir en equilibrio perfecto con uno mismo y con su entorno.",
                link: "https://es.wikipedia.org/wiki/Mannaz"
            },
            {
                name: "Laguz",
                symbol: "ᛚ",
                meaning: "Agua, intuición, fuerza vital, flujo",
                element: "Agua",
                lore: "Laguz representa al agua en todas sus formas: el mar, los lagos o los ríos tumultuosos. Su forma de ola simboliza el flujo natural de la vida, la vitalidad biológica y el crecimiento vegetal. Es la runa de las emociones profundas, de la intuición chamánica, de la clarividencia y de la capacidad de dejarse llevar por el ritmo del universo para operar cambios mayores.",
                link: "https://es.wikipedia.org/wiki/Laguz"
            },
            {
                name: "Ingwaz",
                symbol: "ᛜ",
                meaning: "Fecundidad, potencial, protección del hogar, el dios Ing",
                element: "Tierra",
                lore: "Ingwaz representa el huevo o la semilla cerrada, que alberga en su interior todo el potencial necesario para la eclosión de una nueva vida. Consagrada al dios Ing (Freyr), simboliza la fecundidad, la gestación creadora y la concentración de energía antes de la acción. Su forma de rombo cerrado actúa también como un potente talismán de protección para el hogar y los proyectos en curso.",
                link: "https://es.wikipedia.org/wiki/Ingwaz"
            },
            {
                name: "Othalaz",
                symbol: "ᛟ",
                meaning: "Ancestros, patrimonio, herencia espiritual",
                element: "Tierra",
                lore: "Othalaz representa el dominio familiar sagrado y la propiedad de la tierra heredada de los ancestros. Es la runa del linaje y del patrimonio espiritual, material y cultural acumulado a lo largo de las generaciones. Enseña la importancia de integrar el legado del pasado en nuestro presente para completar nuestro viaje iniciático. Su forma protege a la familia y refuerza la cohesión del grupo.",
                link: "https://es.wikipedia.org/wiki/Odal"
            },
            {
                name: "Dagaz",
                symbol: "ᛞ",
                meaning: "Día, despertar, luz final, transformación",
                element: "Fuego",
                lore: "Dagaz es la vigesimocuarta y última runa del Futhark, marcando la culminación y el cumplimiento del viaje iniciático. Significa el día, el amanecer y la luz triunfante del despertar espiritual. Su forma de reloj de arena o infinito simboliza el equilibrio perfecto de los opuestos, la alianza de la luz y la sombra, y el comienzo de un nuevo ciclo de vida más brillante.",
                link: "https://es.wikipedia.org/wiki/Dagaz"
            }
        ],
        history: {
            topic: "Teorías y Logística de la Navegación",
            description: "El arte tecnológico y estratégico que permitió la hegemonía marítima escandinava.",
            lore: "<p>La supremacía vikinga no se basaba únicamente en el coraje de sus guerreros, sino en tecnologías y una logística marítima de una sofisticación inigualable para la época.</p><h4 class='codex-section-title'><i class='fas fa-anchor'></i> 1. Navegación Celestial y la Piedra de Sol</h4><p>Para cruzar el Atlántico Norte sin puntos de referencia terrestres, los navegantes escandinavos utilizaban la <strong>piedra de sol</strong> (<em>sólsteinn</em>), un cristal de espato de Islandia capaz de despolarizar la luz. Incluso con niebla extrema o después del atardecer, este cristal revelaba la posición exacta del sol en el cielo, permitiéndoles calibrar con precisión su cuadrante solar de navegación.</p><h4 class='codex-section-title'><i class='fas fa-truck-ramp-box'></i> 2. Logística Fluvial y Porte</h4><p>En la Ruta del Este (los ríos rusos), los vikingos suecos (los Rus) se enfrentaron a obstáculos gigantescos: los rápidos del Dniéper. Al no poder cruzarlos en barco, practicaban el <strong>porte</strong>. Los barcos eran sacados del agua, colocados sobre troncos de madera y arrastrados durante kilómetros a fuerza de brazos a través de estepas hostiles controladas por tribus nómadas, antes de volver al agua.</p><h4 class='codex-section-title'><i class='fas fa-ship'></i> 3. Barcos de Doble Uso</h4><p>Gracias a su calado poco profundo (aproximadamente 1 metro), los drakkars (<em>langskip</em>) podían navegar por ríos muy poco profundos para sorprender a las ciudades del interior, al tiempo que conservaban una flexibilidad excepcional en alta mar para resistir las olas del Atlántico. Esta versatilidad única redefinió la geografía militar medieval.</p>",
            image: "assets/drakkar.png",
            link: "https://es.wikipedia.org/wiki/Barco_vikingo"
        },
        legacy: {
            title: "Orígenes Mitológicos de los Días",
            description: "Cómo los dioses nórdicos marcaron permanentemente los días de nuestra semana.",
            lore: "<p>La huella de los dioses escandinavos en nuestra vida cotidiana es mucho más profunda de lo que imaginamos. Mientras que las lenguas romances como el español conservaron las raíces latinas (ej. Martes por Marte), las lenguas germánicas como el inglés y el alemán tradujeron directamente estos conceptos para honrar a las divinidades del panteón nórdico.</p><h4 class='codex-section-title'><i class='fas fa-calendar-alt'></i> Las Principales Correspondencias</h4><ul><li><strong>Martes (Tuesday) :</strong> Derivado del nórdico antiguo <em>Týsdagr</em>, el día del dios <strong>Týr</strong>, el dios manco de la guerra, de la justicia y del sacrificio heroico. Corresponde al dios romano Marte.</li><li><strong>Miércoles (Wednesday) :</strong> Proveniente de <em>Óðinsdagr</em>, el día de <strong>Odín</strong>. Soberano supremo de Asgard, dios de la sabiduría, la magia y la poesía, corresponde a Mercurio por su papel de viajero entre mundos.</li><li><strong>Jueves (Thursday) :</strong> Derivado de <em>Þórsdagr</em>, el día del poderoso <strong>Thor</strong>, dios del trueno y protector de la humanidad. Corresponde a Júpiter, el dios romano del trueno.</li><li><strong>Viernes (Friday) :</strong> Proveniente de <em>Fríjadagr</em>, el día de la diosa <strong>Frigg</strong> (a menudo asociada o confundida con <strong>Freyja</strong>), diosa del amor, el hogar y la fertilidad. Corresponde a la diosa romana Venus.</li></ul><p>Esta supervivencia lingüística demuestra que, a pesar de la cristianización de Europa del Norte, los antiguos dioses siguen habitando en el corazón de nuestra división temporal más fundamental: la semana.</p>",
            image: "assets/cosmic_clock.png",
            imageClass: "pattern-bg"
        }
    },
    de: {
        runes: [
            {
                name: "Eihwaz",
                symbol: "ᛇ",
                meaning: "Tod, Einweihung, Transformation, die Eibe",
                element: "Erde",
                lore: "Eihwaz repräsentiert die Eibe (Yew), einen heiligen europäischen Baum, der für seine außergewöhnliche Langlebigkeit bekannt ist. Er symbolisiert den Zyklus des ewigen Lebens und besitzt sowohl die Macht des Todes (seine Nadeln und Samen sind hochgiftig) als auch der Regeneration. Durch seine Doppelhakenform bildet er eine Brücke, die die Welt oben mit der Welt unten verbindet. Eihwaz lehrt die Notwendigkeit von Einweihungstransformationen und symbolischem Tod, um eine höhere Bewusstseinsebene zu erreichen. Es ist die Rune des notwendigen Übergangs und tiefer Selbsthinterfragung.",
                link: "https://de.wikipedia.org/wiki/Eihwaz"
            },
            {
                name: "Perthro",
                symbol: "ᛈ",
                meaning: "Schicksal, Zufall, Geheimnis, Wahrsagung",
                element: "Wasser",
                lore: "Perthro symbolisiert historisch gesehen den Würfelbecher oder das Gefäß, mit dem die Runen geworfen wurden, und verkörpert so die Kräfte des Zufalls, des Spiels und des Schicksals. Es ist die Rune der ungelüfteten Geheimnisse und der Geheimnisse des Universums. Sie erinnert uns daran, dass jede unserer Entscheidungen in das komplexe Netz des Schicksals (Wyrd) passt, das von den Nornen gewebt wird. Perthro bringt esoterische Klarheit, schärft die Intuition und begünstigt die Lösung komplexer Probleme, indem sie das Verborgene enthüllt.",
                link: "https://de.wikipedia.org/wiki/Perthro"
            },
            {
                name: "Elhaz",
                symbol: "ᛉ",
                meaning: "Schutz, Wachsamkeit, göttliche Verbindung",
                element: "Luft",
                lore: "Elhaz (oder Algiz) repräsentiert die schützenden Hörner des Elchs oder die Haltung eines Menschen, der in einem Zeichen heiliger Anrufung die Hände zum Himmel streckt. Es ist eine kraftvolle Rune der aktiven Verteidigung und des spirituellen Schutzes gegen äußere Bedrohungen. Sie symbolisiert auch das unzerstörbare Band, das Menschen mit den Gottheiten und den Walküren verbindet. Elhaz lädt zu heiterer Wachsamkeit und Erhebung des Geistes ein, um von natürlichem und kosmischem Schutz zu profitieren.",
                link: "https://de.wikipedia.org/wiki/Algiz"
            },
            {
                name: "Sowilo",
                symbol: "ᛊ",
                meaning: "Sonne, Licht, Sieg, Vollendung",
                element: "Feuer",
                lore: "Sowilo repräsentiert die Sonne in all ihrer Pracht und schöpferischen Kraft. Sie symbolisiert den Sieg des Lichts über die Dunkelheit, spirituelle Erleuchtung, Erfolg und Lebensenergie. Ihre Form erinnert an den Blitz, der augenblicklich dynamische Kraft bringt, um Hindernisse zu überwinden und Ambitionen zu verwirklichen. Es ist die Rune spiritueller Führer und Lehrer, die geistige Klarheit bringen und Zweifel zerstreuen.",
                link: "https://de.wikipedia.org/wiki/Sowilo"
            },
            {
                name: "Tiwaz",
                symbol: "ᛏ",
                meaning: "Gerechtigkeit, Mut, Verantwortung, der Gott Tyr",
                element: "Luft",
                lore: "Tiwaz ist direkt dem Gott Tyr gewidmet, dem Gott des gerechten Krieges, der gesellschaftlichen Ordnung und des Gesetzes. Ihre nach oben zeigende Pfeilform symbolisiert moralische Rechtschaffenheit, heroischen Mut und Sieg in Kämpfen für edle Sache. Sie ist eng mit persönlichem Opfer und Verantwortung verbunden und erinnert daran, wie Tyr mutig seine rechte Hand opferte, um den Fenriswolf zu fesseln und das kosmische Gleichgewicht zu wahren.",
                link: "https://de.wikipedia.org/wiki/Tiwaz"
            },
            {
                name: "Berkano",
                symbol: "ᛒ",
                meaning: "Geburt, Regeneration, Fruchtbarkeit, Muttergöttin",
                element: "Erde",
                lore: "Berkano bedeutet die Birke, ein Pionierbaum, der für seine Widerstandsfähigkeit und seine Fähigkeit zur schnellen Regeneration bekannt ist. Sie verkörpert die weibliche Kraft der Muttergöttin und symbolisiert Fruchtbarkeit, Mutterschaft und alle physischen oder spirituellen Geburten. Ihre Form erinnert an die Brust einer schwangeren Frau und bringt wohlwollenden Schutz für Neuanfänge, Heilung und das Aufblühen kreativer Ideen.",
                link: "https://de.wikipedia.org/wiki/Berkano"
            },
            {
                name: "Ehwaz",
                symbol: "ᛖ",
                meaning: "Pferd, Bewegung, Reise, Harmonie",
                element: "Erde",
                lore: "Ehwaz repräsentiert das Pferd, ein heiliges Tier und unentbehrlichen Begleiter der Wikinger, das für geordnete Bewegung, physische oder spirituelle Reisen und Entdeckungen steht. Ihre Form deutet auf perfekte Harmonie und gegenseitiges Vertrauen zwischen Reiter und Pferd hin. Es ist die Rune des fließenden Übergangs, die durch den Seelentransport auch die Welt der Lebenden mit der der Toten verbindet.",
                link: "https://de.wikipedia.org/wiki/Ehwaz"
            },
            {
                name: "Mannaz",
                symbol: "ᛗ",
                meaning: "Mensch, Gesellschaft, Bewusstsein, Harmonie",
                element: "Luft",
                lore: "Mannaz bedeutet Mann im Sinne von Mensch und Menschheit. Sie steht für soziale Integration, Kooperation, Solidarität innerhalb des Clans und kollektives spirituelles Bewusstsein. Es ist die Rune, die den menschlichen Geist mit kosmischen und göttlichen Kräften verbindet. Mannaz lehrt die Wichtigkeit, in perfektem Gleichgewicht mit sich selbst und seiner Umwelt zu leben.",
                link: "https://de.wikipedia.org/wiki/Mannaz"
            },
            {
                name: "Laguz",
                symbol: "ᛚ",
                meaning: "Wasser, Intuition, Lebenskraft, Fluss",
                element: "Wasser",
                lore: "Laguz repräsentiert das Wasser in all seinen Formen: das Meer, Seen oder reißende Flüsse. Ihre Wellenform symbolisiert den natürlichen Fluss des Lebens, die biologische Vitalität und das Pflanzenwachstum. Es ist die Rune tiefer Emotionen, schamanischer Intuition, Hellsichtigkeit und der Fähigkeit, sich vom Rhythmus des Universums tragen zu lassen, um tiefgreifende Veränderungen herbeizuführen.",
                link: "https://de.wikipedia.org/wiki/Laguz"
            },
            {
                name: "Ingwaz",
                symbol: "ᛜ",
                meaning: "Fruchtbarkeit, Potenzial, Schutz des Heims, der Gott Ing",
                element: "Erde",
                lore: "Ingwaz repräsentiert das Ei oder den geschlossenen Samen, der in seinem Inneren das gesamte Potenzial birgt, das für das Aufblühen eines neuen Lebens notwendig ist. Dem Gott Ing (Freyr) gewidmet, symbolisiert sie Fruchtbarkeit, schöpferische Reifung und Konzentration von Energie vor dem Handeln. Ihre geschlossene Rautenform fungiert auch als mächtiges Schutztalisman für das Heim und laufende Projekte.",
                link: "https://de.wikipedia.org/wiki/Ingwaz"
            },
            {
                name: "Othalaz",
                symbol: "ᛟ",
                meaning: "Ahnen, Erbe, spirituelles Erbe",
                element: "Erde",
                lore: "Othalaz repräsentiert das heilige Familienland und den Besitz, der von den Ahnen geerbt wurde. Es ist die Rune der Ahnenlinie und des spirituellen, materiellen und kulturellen Erbes, das über Generationen hinweg angesammelt wurde. Sie lehrt die Wichtigkeit, das Erbe der Vergangenheit in unsere Gegenwart zu integrieren, um unsere Einweihungsreise zu vollenden. Ihre Form schützt die Familie und stärkt den Zusammenhalt der Gruppe.",
                link: "https://de.wikipedia.org/wiki/Odal"
            },
            {
                name: "Dagaz",
                symbol: "ᛞ",
                meaning: "Tag, Erwachen, das letzte Licht, Transformation",
                element: "Feuer",
                lore: "Dagaz ist die vierundzwanzigste und letzte Rune des Futharks und markiert den Abschluss und die Erfüllung der Einweihungsreise. Sie bedeutet den Tag, die Dämmerung und das triumphierende Licht des spirituellen Erwachens. Ihre Sanduhr- oder Unendlichkeitsform symbolisiert das perfekte Gleichgewicht der Gegensätze, das Bündnis von Licht und Schatten und den Beginn eines neuen, helleren Lebenszyklus.",
                link: "https://de.wikipedia.org/wiki/Dagaz"
            }
        ],
        history: {
            topic: "Navigationstheorien und Logistik",
            description: "Die technologische und strategische Kunst, die die skandinavische maritime Vormachtstellung ermöglichte.",
            lore: "<p>Die Vormachtstellung der Wikinger beruhte nicht nur auf dem Mut ihrer Krieger, sondern auf maritimen Technologien und einer Logistik von einer für die damalige Zeit beispiellosen Raffinesse.</p><h4 class='codex-section-title'><i class='fas fa-anchor'></i> 1. Himmelsnavigation & Der Sonnenstein</h4><p>Um den Nordatlantik ohne Landmarken zu überqueren, nutzten skandinavische Seefahrer den <strong>Sonnenstein</strong> (<em>sólsteinn</em>), einen Doppelspatkristall aus Island, der Licht depolarisieren kann. Selbst bei extremem Nebel oder nach Sonnenuntergang verriet dieser Kristall die genaue Position der Sonne am Himmel, sodass sie ihre Solarnavigationsscheibe präzise kalibrieren konnten.</p><h4 class='codex-section-title'><i class='fas fa-truck-ramp-box'></i> 2. Flusslogistik und Portage</h4><p>Auf dem Ostweg (den russischen Flüssen) stießen die schwedischen Wikinger (die Rus) auf monumentale Hindernisse: die Stromschnellen des Dnjepr. Da sie diese nicht mit dem Boot überqueren konnten, praktizierten sie <strong>Portage</strong>. Die Schiffe wurden aus dem Wasser gezogen, auf Holzstämme gelegt und kilometerweit mit Muskelkraft über feindselige, von Nomadenstämmen kontrollierte Steppen geschleppt, bevor sie wieder ins Wasser gelassen wurden.</p><h4 class='codex-section-title'><i class='fas fa-ship'></i> 3. Schiffe mit doppeltem Verwendungszweck</h4><p>Dank ihres geringen Tiefgangs (ca. 1 Meter) konnten Langschiffe (<em>langskip</em>) sehr flache Flüsse befahren, um Städte im Landesinneren zu überraschen, während sie gleichzeitig eine außergewöhnliche Flexibilität auf hoher See behielten, um den Wellen des Atlantiks standzuhalten. Diese einzigartige Vielseitigkeit definierte die mittelalterliche Militärgeographie neu.</p>",
            image: "assets/drakkar.png",
            link: "https://de.wikipedia.org/wiki/Wikingerzeit#Seefahrt_und_Schiffbau"
        },
        legacy: {
            title: "Mythologischer Ursprung der Wochentage",
            description: "Wie nordische Götter die Tage unseres modernen Wochenkalenders dauerhaft geprägt haben.",
            lore: "<p>Die Spuren der skandinavischen Götter in unserem täglichen Leben sind viel tiefer, als wir ahnen. Während romanische Sprachen wie das Französische lateinische Wurzeln bewahrt haben, übersetzten germanische Sprachen wie Englisch und Deutsch diese Konzepte direkt, um die Götter des nordischen Pantheons zu ehren.</p><h4 class='codex-section-title'><i class='fas fa-calendar-alt'></i> Wichtige Entsprechungen</h4><ul><li><strong>Dienstag (Tuesday) :</strong> Abgeleitet vom altnordischen <em>Týsdagr</em>, dem Tag des Gottes <strong>Tyr</strong>, dem einhändigen Gott des Krieges, der Gerechtigkeit und des heroischen Opfers. Er entspricht dem römischen Gott Mars.</li><li><strong>Mittwoch (Wednesday/Wodanstag) :</strong> Ursprünglich der Tag des <strong>Odin</strong> (Woden). Als oberster Herrscher von Asgard, Gott der Weisheit, Magie und Poesie entspricht er Merkur für seine Rolle als Wanderer zwischen den Welten.</li><li><strong>Donnerstag (Thursday) :</strong> Abgeleitet von <em>Þórsdagr</em>, dem Tag des mächtigen <strong>Thor</strong>, Gott des Donners und Beschützer der Menschheit. Er entspricht Jupiter, dem römischen Donnergott.</li><li><strong>Freitag (Friday) :</strong> Stammt von <em>Fríjadagr</em>, dem Tag der Göttin <strong>Frigg</strong> (oft mit <strong>Freyja</strong> assoziiert oder verwechselt), Göttin der Liebe, des Heims und der Fruchtbarkeit. Sie entspricht der römischen Göttin Venus.</li></ul><p>Dieses sprachliche Erbe beweist, dass die alten Götter trotz der Christianisierung Nordeuropas weiterhin im Herzen unserer fundamentalsten Zeiteinteilung leben: der Woche.</p>",
            image: "assets/cosmic_clock.png",
            imageClass: "pattern-bg"
        }
    },
    uk: {
        runes: [
            {
                name: "Ейваз",
                symbol: "ᛇ",
                meaning: "Смерть, ініціація, трансформація, Тис",
                element: "Земля",
                lore: "Ейваз представляє Тис (Yew), священне європейське дерево, відоме своїм винятковим довголіттям. Вона символізує цикл вічного життя, володіючи як силою смерті (її хвоя та насіння є високотоксичними), так і регенерацією. Завдяки своїй формі подвійного гачка вона утворює міст, що з'єднує світ нагорі зі світом внизу. Ейваз вчить необхідності ініціаційних трансформацій та символічної смерті для доступу до вищого плану свідомості. Це руна необхідного переходу та глибокого самопереосмислення.",
                link: "https://uk.wikipedia.org/wiki/%D0%95%D0%B9%D0%B2%D0%B0%D0%B7"
            },
            {
                name: "Пертро",
                symbol: "ᛈ",
                meaning: "Доля, випадок, таємниця, ворожіння",
                element: "Вода",
                lore: "Пертро історично символізує склянку для гральних кісток або посудину, яка використовувалася для метання рун, уособлюючи сили випадку, гри та долі. Це руна нерозкритих таємниць та секретів всесвіту. Вона нагадує нам, що кожен наш вибір вписується в складне мереживо долі (Wyrd), виткане Норнами. Пертро приносить езотеричну ясність, загострює інтуїцію та допомагає вирішувати складні проблеми, відкриваючи те, що було приховано.",
                link: "https://uk.wikipedia.org/wiki/%D0%9F%D0%B5%D1%80%D1%82"
            },
            {
                name: "Ельхаз",
                symbol: "ᛉ",
                meaning: "Захист, пильність, божественний зв'язок",
                element: "Air",
                lore: "Ельхаз (або Альґіз) представляє захисні роги лося або позу людини, яка простягає руки до неба на знак священного призивання. Це потужна руна активної оборони та духовного захисту від зовнішніх загроз. Вона також символізує непорушний зв'язок, що з'єднує людей з божествами та Валькіріями. Ельхаз закликає до спокійної пильності та піднесення духу, щоб скористатися природним і космічним захистом.",
                link: "https://uk.wikipedia.org/wiki/%D0%90%D0%BB%D1%8C%D2%90%D1%96%D0%B7"
            },
            {
                name: "Совіло",
                symbol: "ᛊ",
                meaning: "Сонце, світло, перемога, звершення",
                element: "Feu",
                lore: "Совіло представляє сонце в усій його величі та творчій силі. Вона символізує перемогу світла над темрявою, духовне осяяння, успіх та життєву енергію. Її форма нагадує блискавку, приносячи миттєву динамічну силу для подолання перешкод та реалізації амбіцій. Це руна духовних провідників та вчителів, які приносять розумову ясність та розсіюють сумніви.",
                link: "https://uk.wikipedia.org/wiki/%D0%A1%D0%BE%D0%B2%D1%96%D0%BB%D0%BE"
            },
            {
                name: "Тіваз",
                symbol: "ᛏ",
                meaning: "Справедливість, мужність, відповідальність, бог Тюр",
                element: "Air",
                lore: "Тіваз безпосередньо присвячена богу Тюру, богу справедливої війни, суспільного порядку та закону. Її форма стріли, спрямованої вгору, символізує моральну праведність, героїчну мужність та перемогу в битвах, що ведуться за благородні цілі. Вона тісно пов'язана з особистою жертвою та відповідальністю, нагадуючи про те, як Тюр мужньо віддав свою праву руку, щоб скувати вовка Фенріра та зберегти космічний баланс.",
                link: "https://uk.wikipedia.org/wiki/%D0%A2%D1%96%D0%B2%D0%B0%D0%B7"
            },
            {
                name: "Беркано",
                symbol: "ᛒ",
                meaning: "Народження, регенерація, родючість, богиня-мати",
                element: "Земля",
                lore: "Беркано означає березу, дерево-піонер, відоме своєю стійкістю та здатністю до швидкої регенерації. Вона втілює жіночу силу богині-матері, символізуючи родючість, материнство та всі фізичні чи духовні народження. Її форма нагадує груди вагітної жінки, приносячи доброзичливий захист новим починанням, зціленню та розквіту творчих ідей.",
                link: "https://uk.wikipedia.org/wiki/%D0%91%D0%B5%D1%80%D0%BA%D0%B0%D0%BD%D0%B0"
            },
            {
                name: "Еваз",
                symbol: "ᛖ",
                meaning: "Кінь, рух, подорож, гармонія",
                element: "Земля",
                lore: "Еваз представляє коня, священну тварину та незамінного супутника вікінгів, що символізує впорядкований рух, фізичні чи духовні подорожі та відкриття. Її форма свідчить про повну гармонію та взаємну довіру між вершником та конем. Це руна плавного переходу, яка також пов'язує світ живих зі світом мертвих, переносячи душі.",
                link: "https://uk.wikipedia.org/wiki/%D0%95%D0%B2%D0%B0%D0%B7"
            },
            {
                name: "Манназ",
                symbol: "ᛗ",
                meaning: "Людина, суспільство, свідомість, гармонія",
                element: "Air",
                lore: "Манназ означає людину в сенсі людської істоти та людства. Вона представляє соціальну інтеграцію, співпрацю, солідарність у клані та колективну духовну свідомість. Це руна, яка пов'язує людський розум з космічними та божественними силами. Манназ вчить важливості життя в повній гармонії з собою та навколишнім середовищем.",
                link: "https://uk.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D0%BD%D0%B0%D0%B7"
            },
            {
                name: "Лагуз",
                symbol: "ᛚ",
                meaning: "Вода, інтуїція, життєва сила, течія",
                element: "Вода",
                lore: "Лагуз представляє воду в усіх її проявах: море, озера або бурхливі річки. Її хвилеподібна форма символізує природну течію життя, біологічну життєдіяльність та ріст рослин. Це руна глибоких емоцій, шаманської інтуїції, ясновидіння та здатності віддаватися ритму всесвіту для здійснення серйозних змін.",
                link: "https://uk.wikipedia.org/wiki/%D0%9B%D0%B0%D0%B3%D1%83%D0%B7"
            },
            {
                name: "Інґваз",
                symbol: "ᛜ",
                meaning: "Родючість, потенціал, захист дому, бог Інґві",
                element: "Земля",
                lore: "Інґваз представляє яйце або закрите насіння, що містить у собі весь потенціал, необхідний для розквіту нового життя. Присвячена богу Інґві (Фрейру), вона символізує родючість, творче дозрівання та концентрацію енергії перед дією. Її закрита форма ромба також діє як потужний захисний талісман для дому та поточних проєктів.",
                link: "https://uk.wikipedia.org/wiki/%D0%86%D0%BD%D2%91%D0%B2%D0%B0%D0%B7"
            },
            {
                name: "Отала",
                symbol: "ᛟ",
                meaning: "Предки, спадщина, духовний спадок",
                element: "Земля",
                lore: "Отала представляє священне сімейне володіння та землю, успадковану від предків. Це руна роду та духовного, матеріального й культурного спадку, накопиченого поколіннями. Вона вчить важливості інтеграції спадщини минулого в наше сьогодення для завершення нашої ініціаційної подорожі. Її форма захищає сім'ю та зміцнює згуртованість групи.",
                link: "https://uk.wikipedia.org/wiki/%D0%9E%D1%82%D0%B0%D0%BB%D0%B0"
            },
            {
                name: "Даґаз",
                symbol: "ᛞ",
                meaning: "День, пробудження, фінальне світло, трансформація",
                element: "Feu",
                lore: "Даґаз — двадцять четверта і остання руна Футарка, що знаменує завершення та виконання ініціаційної подорожі. Вона означає день, світанок і переможне світло духовного пробудження. Її форма пісочного годинника або нескінченності символізує ідеальний баланс протилежностей, союз світла й тіні та початок нового, яскравішого життєвого циклу.",
                link: "https://uk.wikipedia.org/wiki/%D0%94%D0%B0%D0%B3%D0%B0%D0%B7"
            }
        ],
        history: {
            topic: "Теорії та логістика навігації",
            description: "Технологічне та стратегічне мистецтво, яке забезпечило морську гегемонію скандинавів.",
            lore: "<p>Вікінгське панування базувалося не лише на мужності воїнів, але й на морських технологіях та логістиці, які були надзвичайно складними для свого часу.</p><h4 class='codex-section-title'><i class='fas fa-anchor'></i> 1. Астронавігація та сонячний камінь</h4><p>Для перетину Північної Атлантики без орієнтирів на суші скандинавські мореплавці використовували <strong>сонячний камінь</strong> (<em>sólsteinn</em>), ісландський шпат, здатний деполяризувати світло. Навіть у густому тумані або після заходу сонця цей кристал показував точне положення сонця на небі, дозволяючи їм калібрувати свій сонячний навігаційний диск.</p><h4 class='codex-section-title'><i class='fas fa-truck-ramp-box'></i> 2. Річкова логістика та волок</h4><p>На Східному шляху (руських річках) шведські вікінги (руси) стикалися з гігантськими перешкодами: порогами Дніпра. Не маючи змоги пройти їх на човнах, вони практикували <strong>волок</strong>. Кораблі витягували з води, ставили на дерев'яні колоди і волокли кілометрами силою рук через ворожі степи, які контролювали кочові племена, перед тим як знову спустити на воду.</p><h4 class='codex-section-title'><i class='fas fa-ship'></i> 3. Кораблі подвійного призначення</h4><p>Завдяки малій осадці (близько 1 метра) драккари (<em>langskip</em>) могли ходити по мілководних річках, щоб зненацька захоплювати міста в глибині суходолу, зберігаючи при цьому виняткову гнучкість у відкритому морі для протистояння океанським хвилям. Ця унікальна універсальність змінила середньовічну військову географію.</p>",
            image: "assets/drakkar.png",
            link: "https://uk.wikipedia.org/wiki/%D0%94%D1%80%D0%B0%D0%BA%D0%BA%D0%B0%D1%80"
        },
        legacy: {
            title: "Міфологічне походження днів тижня",
            description: "Як скандинавські боги назавжди закарбувалися в днях нашого сучасного тижневого календаря.",
            lore: "<p>Слід скандинавських богів у нашому повсякденному житті набагато глибший, ніж ми думаємо. Тоді як романські мови зберегли латинські корені (наприклад, Mardi від Mars), германські мови, такі як англійська та німецька, безпосередньо переклали ці поняття на честь богів скандинавського пантеону.</p><h4 class='codex-section-title'><i class='fas fa-calendar-alt'></i> Основні відповідності</h4><ul><li><strong>Вівторок (Tuesday) :</strong> Походить від давньоскандинавського <em>Týsdagr</em>, дня бога <strong>Тюра</strong>, однорукого бога війни, справедливості та героїчної жертви. Він відповідає римському богу Марсу.</li><li><strong>Середа (Wednesday) :</strong> Походить від <em>Óðinsdagr</em>, дня <strong>Одіна</strong>. Верховний правитель Асґарда, бог мудрості, магії та поезії відповідає Меркурію за свою роль мандрівника між світами.</li><li><strong>Четвер (Thursday) :</strong> Походить від <em>Þórsdagr</em>, дня могутнього <strong>Тора</strong>, бога грому та захисника людства. Він відповідає Юпітеру, римському громовержцю.</li><li><strong>П'ятниця (Friday) :</strong> Походить від <em>Fríjadagr</em>, дня богині <strong>Фрігг</strong> (часто асоційованої або змішуваної з <strong>Фрейєю</strong>), богині кохання, дому та родючості. Вона відповідає римській богині Венері.</li></ul><p>Ця мовна спадщина доводить, що, незважаючи на християнізацію Північної Європи, стародавні боги продовжують жити в самому серці нашого найфундаментальнішого поділу часу: тижня.</p>",
            image: "assets/cosmic_clock.png",
            imageClass: "pattern-bg"
        }
    }
};

const languages = ['fr', 'en', 'is', 'da', 'es', 'de', 'uk'];

// Helper to format an item
const formatItem = (item, indent = '        ') => {
    let str = indent + '{\n';
    const keys = Object.keys(item);
    keys.forEach((key, idx) => {
        let val = item[key];
        if (typeof val === 'string') {
            if (val.includes("'") && !val.includes('"')) {
                val = `"${val}"`;
            } else if (val.includes('"') && !val.includes("'")) {
                val = `'${val}'`;
            } else if (val.includes('"') && val.includes("'")) {
                val = `\`${val}\``;
            } else {
                val = `'${val}'`;
            }
        }
        str += `${indent}    ${key}: ${val}${idx < keys.length - 1 ? ',' : ''}\n`;
    });
    str += indent + '}';
    return str;
};

languages.forEach(lang => {
    const filePath = path.join(__dirname, `viking_data_${lang}.js`);
    if (!fs.existsSync(filePath)) {
        console.error(`File not found: ${filePath}`);
        return;
    }
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // 1. Inject Runes: Find the runes block and append our new 12 runes to the end of runes array
    const runesInject = ',\n' + runicData[lang].runes.map(item => formatItem(item)).join(',\n');
    
    // We match the runes array: runes: [ ... ]
    // Using a regex to find the closing bracket of the runes array
    const runesRegex = /(runes:\s*\[([\s\S]*?)\])/;
    content = content.replace(runesRegex, (match, runesBlock, runesContent) => {
        // Append our new runes before the closing bracket
        return `runes: [${runesContent}${runesInject}]`;
    });
    
    // 2. Inject History: Find the history block and append our new navigation item
    const historyInject = ',\n' + formatItem(runicData[lang].history);
    const historyRegex = /(history:\s*\[([\s\S]*?)\])/;
    content = content.replace(historyRegex, (match, historyBlock, historyContent) => {
        return `history: [${historyContent}${historyInject}]`;
    });
    
    // 3. Inject Legacy: Find the legacy block and append our new weekday origins item
    const legacyInject = ',\n' + formatItem(runicData[lang].legacy);
    const legacyRegex = /(legacy:\s*\[([\s\S]*?)\])/;
    content = content.replace(legacyRegex, (match, legacyBlock, legacyContent) => {
        return `legacy: [${legacyContent}${legacyInject}]`;
    });
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Successfully appended 12 Runes, Navigation and Weekdays to: viking_data_${lang}.js`);
});
