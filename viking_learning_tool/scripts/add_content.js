const fs = require('fs');
const path = require('path');

const newContent = {
    fr: {
        characters: [
            {
                name: "Harald à la Dent Bleue",
                role: "Roi unificateur et bâtisseur",
                bio: "Le légendaire roi qui unifia le Danemark et la Norvège et inspira le nom de la technologie Bluetooth.",
                lore: "Harald Gormsson, dit 'à la Dent Bleue' (Harald Blåtand), régna sur le Danemark de 958 à 986. Son surnom provient probablement d'une dent morte d'apparence bleuâtre. Son accomplissement majeur fut l'unification politique et religieuse des tribus danoises sous sa couronne et leur conversion progressive au christianisme, un jalon gravé sur la célèbre grande pierre runique de Jelling. Il fit également bâtir un réseau de forteresses circulaires fortifiées (Trelleborg) pour consolider son pouvoir. En 1997, les créateurs d'une nouvelle technologie sans fil unifiant les télécommunications s'inspirèrent de sa capacité d'unification pour la nommer 'Bluetooth', adoptant pour logo la superposition des deux runes de ses initiales : Hagall (ᚼ) et Berkanan (ᛒ).",
                image: "assets/harald_bluetooth.png",
                link: "https://fr.wikipedia.org/wiki/Harald_à_la_Dent_bleue"
            },
            {
                name: "Erik le Rouge",
                role: "Explorateur et colonisateur",
                bio: "Le fougueux chef viking qui, banni d'Islande pour meurtre, fonda les premières colonies permanentes au Groenland.",
                lore: "Erik Thorvaldsson, dit 'le Rouge' (Eiríkr rauði) en raison de sa chevelure flamboyante, naquit en Norvège. Après que son père eut été exilé pour meurtre, la famille s'établit en Islande. Fidèle au tempérament violent de son lignage, Erik fut à son tour banni d'Islande pour trois ans après une faide meurtrière. Il mit ce temps à profit pour explorer une vaste terre mystérieuse à l'ouest. Afin d'attirer des colons pour y bâtir des fermes, il la baptisa stratégiquement 'Groenland' (Terre Verte). En 985, il mena une flotte de 25 navires pour y fonder deux colonies prospères qui dureront plusieurs siècles. Il resta jusqu'à sa mort le chef respecté de ces colonies, conservant ses croyances païennes face à la christianisation menée par son propre fils, Leif Erikson.",
                image: "assets/erik_the_red.png",
                link: "https://fr.wikipedia.org/wiki/Erik_le_Rouge"
            },
            {
                name: "Floki Vilgerðarson",
                role: "Navigateur et pionnier",
                bio: "Le premier explorateur scandinave à avoir navigué volontairement vers l'Islande, guidé par ses trois corbeaux.",
                lore: "Hrafna-Flóki Vilgerðarson fut au IXe siècle l'un des premiers grands navigateurs scandinaves. Ayant entendu parler d'une île mystérieuse au nord, il décida de monter une expédition pour s'y établir. Pour s'orienter sur l'océan, il emporta trois corbeaux sacrés qu'il libéra au cours du voyage : le premier revint vers l'arrière, le second monta dans le ciel avant de revenir, mais le troisième vola vers l'avant, lui indiquant la direction de l'île. Il s'établit dans le nord-ouest, mais n'ayant pas préparé de fourrage pour le bétail durant le terrible hiver, toutes ses bêtes moururent. Découragé et observant les fjords remplis de glace flottante, il baptisa cette terre 'Ísland' (Terre de Glace). Malgré un retour initial amer en Norvège, il finit par y retourner plus tard pour s'y installer définitivement.",
                image: "assets/floki_vilgerdarson.png",
                link: "https://fr.wikipedia.org/wiki/Hrafna-Fl%C3%B3ki_Vilger%C3%B0arson"
            },
            {
                name: "Harald Hardrada",
                role: "Guerrier varègue et roi",
                bio: "Le redoutable chef de la Garde Varangienne à Byzance et roi de Norvège, dont la mort en 1066 marque la fin de l'ère viking.",
                lore: "Harald Sigurdsson, dit 'Hardrada' (l'Impitoyable), mena une existence digne d'une saga épique. Après la défaite de son demi-frère Olaf à Stiklestad en 1030, he s'enfuit en Rus' de Kiev puis rejoignit Constantinople. Il y devint le chef prestigieux de la Garde Varangienne, accumulant une richesse légendaire lors de campagnes de la Méditerranée à l'Asie Mineure. De retour en Norvège en 1046, il s'empara du trône. En 1066, il tenta de revendiquer la couronne d'Angleterre. Son invasion fut stoppée net à la bataille de Stamford Bridge où il fut tué d'une flèche à la gorge. Sa mort marque traditionnellement la fin de l'Âge des Vikings, fermant le cycle des grandes expéditions scandinaves.",
                image: "assets/harald_hardrada.png",
                link: "https://fr.wikipedia.org/wiki/Harald_Hardrada"
            }
        ],
        mythology: [
            {
                title: "Heimdall et le Bifröst",
                description: "Le gardien vigilant des dieux protégeant le pont arc-en-ciel menant à Asgard.",
                lore: "Heimdall est le dieu gardien vigilant d'Asgard. Fils de neuf mères différentes, il possède des facultés surhumaines exceptionnelles : il a besoin de moins de sommeil qu'un oiseau, peut voir à plus de cent lieues de jour comme de nuit, et son ouïe est si fine qu'il entend l'herbe pousser sur la terre et la laine sur le dos des moutons. Il réside dans sa halle Himinbjorg, située au sommet du pont Bifröst, le pont arc-en-ciel brûlant qui relie le monde des hommes (Midgard) à celui des dieux. Heimdall est armé de sa redoutable épée Hofund et possède la corne Gjallarhorn, dont le souffle puissant s'entend à travers les neuf mondes et résonnera pour sonner le rassemblement des dieux lors de l'ultime assaut du Ragnarök.",
                image: "assets/heimdall.png",
                link: "https://fr.wikipedia.org/wiki/Heimdall"
            },
            {
                title: "Balder, la lumière tragique",
                description: "Le dieu de la lumière et de la beauté dont la mort provoqua les prémices de la fin du monde.",
                lore: "Balder (Baldr) est le fils d'Odin et de Frigg. Dieu de la lumière, de la beauté, de la sagesse et de la justice, il est aimé de tous pour sa bienveillance absolue. Tourmenté par des rêves prophétiques annonçant sa mort, sa mère Frigg parcourut les neuf mondes pour faire jurer à chaque créature, plante et élément de ne jamais faire de mal à son fils. Seul le jeune et insignifiant gui fut jugé trop inoffensif pour prêter serment. Apprenant cette faille par ruse, Loki confectionna une flèche en bois de gui et incita Hod, le frère aveugle de Balder, à la lancer sur lui lors d'un jeu des dieux. La flèche transperça Balder, le tuant sur le coup. Cette tragédie plongea les dieux dans un deuil infini et brisa les lois de paix d'Asgard, scellant le destin du monde et déclenchant la chaîne d'événements menant inéluctablement au Ragnarök.",
                image: "assets/balder.png",
                link: "https://fr.wikipedia.org/wiki/Baldr"
            }
        ],
        customs: [
            {
                topic: "Le Holmgang",
                description: "Le combat rituel codifié pour régler les litiges d'honneur et de propriété.",
                lore: "Le Holmgang était la méthode légale et rituelle reconnue dans le monde scandinave pour résoudre des conflits d'honneur ou de propriété lorsqu'aucune sentence du Thing ne parvenait à satisfaire les parties. Contrairement à une simple rixe, le duel obéissait à des règles extrêmement strictes : les combattants se réunissaient sur une petite île (holm) ou une zone délimitée par des piquets de noisetier sur laquelle était étendue une peau de bête ou un manteau carré de trois mètres de côté. Chaque duelliste disposait de trois boucliers en bois ; lorsqu'un bouclier était brisé, il pouvait le remplacer, mais si les trois étaient détruits, il devait combattre sans défense. Le combat se terminait au premier sang versé ou par abandon, mais pouvait parfois être mortel. Refuser un Holmgang entraînait la perte irrémédiable de l'honneur et le statut social de lâche (nithing).",
                image: "assets/holmgang.png",
                link: "https://fr.wikipedia.org/wiki/Holmgang"
            },
            {
                topic: "Le Blót",
                description: "La cérémonie sacrée d'offrandes et de banquets honorant les divinités nordiques.",
                lore: "Le Blót était le rite religieux central de la foi scandinave, servant de pont sacré entre les humains et les dieux. Célébré à des moments clés de l'année (au solstice d'hiver pour Yule, au printemps pour la victoire, à l'automne pour les récoltes), il était dirigé par le chef de clan (Jarl) ou une prêtresse. Le rite impliquait le sacrifice rituel d'animaux sacrés (chevaux, porcs, bétail). Le sang des bêtes (hlaut) était recueilli dans des bols en bronze et aspergé à l'aide de rameaux sur les statues des dieux, les murs des temples et les participants pour conférer bénédiction et force. La viande était ensuite cuite dans de grands chaudrons pour un banquet communautaire où l'on buvait de la bière et de l'hydromel à la santé des dieux (Odin pour la victoire, Njord et Frey pour la fertilité). Ce repas sacré renforçait l'alliance spirituelle avec le divin et la cohésion sociale de la communauté.",
                image: "assets/blot_ritual.png",
                link: "https://fr.wikipedia.org/wiki/Blót"
            }
        ]
    },
    en: {
        characters: [
            {
                name: "Harald Bluetooth",
                role: "Unifying King and Builder",
                bio: "The legendary king who unified Denmark and Norway and inspired the name of modern Bluetooth technology.",
                lore: "Harald Gormsson, known as 'Bluetooth' (Harald Blåtand), ruled Denmark from 958 to 986. His nickname likely derived from a dead tooth that appeared dark blue. His greatest achievement was the political and religious unification of the Danish tribes under his crown and their gradual conversion to Christianity, a milestone carved on the famous large Jelling runestone. He also built a network of circular fortified fortresses (Trelleborgs) to consolidate his royal power. In 1997, creators of a new wireless technology unifying telecommunications drew inspiration from his unifying legacy to name it 'Bluetooth', choosing a logo that overlays his runic initials: Hagall (ᚼ) and Berkanan (ᛒ).",
                image: "assets/harald_bluetooth.png",
                link: "https://en.wikipedia.org/wiki/Harald_Bluetooth"
            },
            {
                name: "Erik the Red",
                role: "Explorer and Colonizer",
                bio: "The fiery Viking leader who, exiled from Iceland for murder, founded the first permanent Norse settlements in Greenland.",
                lore: "Erik Thorvaldsson, known as 'the Red' (Eiríkr rauði) due to his flaming red hair and beard, was born in Norway. After his father was exiled for manslaughter, the family settled in Iceland. True to his lineage's violent temperament, Erik was eventually outlawed and banished from Iceland for three years following a bloody feud. He spent his exile exploring a vast, mysterious icy land to the west. To attract settlers to establish farms there, he strategically named it 'Greenland'. In 985, he led a fleet of 25 ships to establish two prosperous colonies that endured for centuries. He remained the respected chieftain of these settlements until his death, holding onto his pagan beliefs despite his son Leif Erikson's efforts to spread Christianity.",
                image: "assets/erik_the_red.png",
                link: "https://en.wikipedia.org/wiki/Erik_the_Red"
            },
            {
                name: "Floki Vilgerðarson",
                role: "Navigator and Pioneer",
                bio: "The first Norse explorer to intentionally sail to Iceland, guided across the open ocean by his three ravens.",
                lore: "Hrafna-Flóki Vilgerðarson was a great 9th-century Norse navigator. Having heard tales of a mysterious island to the north, he set sail to settle there. To navigate the treacherous open ocean, he took three sacred ravens, releasing them during the journey: the first flew back, the second flew high and returned to the ship, but the third flew forward, guiding him directly to the island. He settled in the northwest, but failing to gather enough hay for his livestock during the harsh winter, all his animals perished. Disheartened, and seeing the fjords choked with drift ice, he named the land 'Ísland' (Iceland). Although he initially returned to Norway with bitter reports, he eventually went back to settle permanently.",
                image: "assets/floki_vilgerdarson.png",
                link: "https://en.wikipedia.org/wiki/Hrafna-Fl%C3%B3ki_Vilger%C3%B0arson"
            },
            {
                name: "Harald Hardrada",
                role: "Varangian Warrior and King",
                bio: "The fearsome leader of the Byzantine Varangian Guard and King of Norway, whose death in 1066 marks the end of the Viking Age.",
                lore: "Harald Sigurdsson, known as 'Hardrada' (the Ruthless), lived a life worthy of an epic saga. After his half-brother King Olaf was defeated at Stiklestad in 1030, he fled to Kyiv and then to Constantinople. There, he became the commander of the elite Byzantine Varangian Guard, accumulating legendary wealth during campaigns from the Mediterranean to Asia Minor. Returning to Norway in 1046, he claimed the throne. In 1066, he attempted to claim the English crown. His invasion was stopped at the Battle of Stamford Bridge, where he was killed by an arrow to the throat. His death traditionally marks the end of the Viking Age, closing the era of great Scandinavian expansions.",
                image: "assets/harald_hardrada.png",
                link: "https://en.wikipedia.org/wiki/Harald_Hardrada"
            }
        ],
        mythology: [
            {
                title: "Heimdall and Bifröst",
                description: "The vigilant guardian of the Aesir who watches over the burning rainbow bridge Bifröst.",
                lore: "Heimdall is the vigilant guardian deity of Asgard. Born of nine different mothers, he possesses extraordinary superhuman senses: he requires less sleep than a bird, can see for over a hundred leagues by day or night, and his hearing is so sharp that he can hear grass growing on the earth and wool growing on sheep. He resides in his hall Himinbjörg, situated where the burning rainbow bridge Bifröst connects the mortal realm of Midgard to Asgard. Heimdall is armed with his sword Höfuð and holds the legendary horn Gjallarhorn, whose blast can be heard throughout the nine worlds and will sound to assemble the gods for the final battle of Ragnarök.",
                image: "assets/heimdall.png",
                link: "https://en.wikipedia.org/wiki/Heimdall"
            },
            {
                title: "Balder, the Tragic Light",
                description: "The god of light, peace, and beauty whose tragic death marked the beginning of the end of the world.",
                lore: "Balder (Baldr) is the son of Odin and Frigg. The god of light, beauty, wisdom, and justice, he was loved by all for his absolute benevolence. Plagued by prophetic dreams of his death, his mother Frigg traveled the nine worlds, extracting oaths from every living creature, plant, and element to never harm her son. Only the young and insignificant mistletoe was deemed too harmless to swear. Learning of this flaw through trickery, Loki fashioned a dart from mistletoe and cajoled Balder's blind brother, Höðr, into throwing it at him during a game. The dart pierced Balder, killing him instantly. This tragedy threw the gods into deep mourning and broke the sacred peace of Asgard, triggering the chain of events leading inexorably to Ragnarök.",
                image: "assets/balder.png",
                link: "https://en.wikipedia.org/wiki/Baldr"
            }
        ],
        customs: [
            {
                topic: "The Holmgang",
                description: "The highly codified ritual combat used to settle disputes of honor and property.",
                lore: "The Holmgang was the legally recognized method in the Scandinavian world to settle disputes over honor, property, or insults when the Thing (assembly) could not reach a satisfactory verdict. Unlike a simple street fight, the duel followed extremely strict rules: combatants met on a small island (holm) or a square area marked by hazel poles, on which a cloak of about three meters wide was spread. Each duelist was allowed three wooden shields; if a shield was shattered, it could be replaced, but once all three were destroyed, they had to fight defenseless. The duel ended at first blood or surrender, though it could sometimes be fatal. Refusing a Holmgang resulted in the immediate and permanent loss of honor, branding the refuser a coward (nithing).",
                image: "assets/holmgang.png",
                link: "https://en.wikipedia.org/wiki/Holmgang"
            },
            {
                topic: "The Blót",
                description: "The sacred ceremony of animal sacrifices and communal feasts honoring the Norse gods.",
                lore: "The Blót was the central religious ritual of the Norse faith, serving as a sacred bridge between humans and the gods. Celebrated at key seasonal turning points (winter solstice for Yule, spring for victory, autumn for harvest), it was led by the chieftain (Jarl) or a priestess. The ritual involved the sacrifice of sacred animals (horses, pigs, cattle). Their blood (hlaut) was collected in bronze bowls and sprinkled using twigs onto the altars, temple walls, and participants to convey blessings and divine favor. The meat was then cooked in large cauldrons for a communal feast where ale and mead were drunk in honor of the gods (Odin for victory, Njord and Freyr for fertility and peace), reinforcing both spiritual bonds and social unity.",
                image: "assets/blot_ritual.png",
                link: "https://en.wikipedia.org/wiki/Bl%C3%B3t"
            }
        ]
    },
    is: {
        characters: [
            {
                name: "Haraldur blátönn",
                role: "Sameiningarkonungur og smiður",
                bio: "Hinn goðsagnakenndi konungur sem sameinaði Danmörku og Noreg og veitti nafninu á Bluetooth-tækninni innblástur.",
                lore: "Haraldur Gormsson, kallaður blátönn, ríkti yfir Danmörku frá 958 til 986. Viðurnefni hans stafaði líklega af dauðri tönn sem virtist dökkblá. Stærsta afrek hans var stjórnmálaleg og trúarleg sameining dönsku ættbálkanna undir krúnu hans og hægfara kristnun þeirra, sem er ritað á hinum fræga Jelling-rúnasteini. Hann byggði einnig net hringlaga virkja (Trelleborg) til að styrkja konungsvald sitt. Árið 1997 sóttu höfundar nýrrar þráðlausrar tækni innblástur í sameiningararf hans til að nefna hana „Bluetooth“ og völdu merki sem sameinar rúnastafi upphafsstafa hans: Hagall (ᚼ) og Berkanan (ᛒ).",
                image: "assets/harald_bluetooth.png",
                link: "https://is.wikipedia.org/wiki/Haraldur_bl%C3%A1t%C3%B6nn"
            },
            {
                name: "Eiríkur rauði",
                role: "Landkönnuður og landnámsmaður",
                bio: "Hinn skapstóri víkingahöfðingi sem, eftir að hafa verið gerður útlægur frá Íslandi fyrir víg, stofnaði fyrstu varanlegu norrænu byggðirnar á Grænlandi.",
                lore: "Eiríkur Þorvaldsson, kallaður hinn rauði vegna rauðs hárs og skeggs, fæddist í Noregi. Eftir að faðir hans var gerður útlægur fyrir víg settist fjölskyldan að á Íslandi. Eiríkur erfði ofbeldisfullt skapgerðarfar ættar sinnar og var á endanum dæmdur skógarmaður og gerður útlægur frá Íslandi í þrjú ár eftir blóðugar deilur. Hann varði útlegðinni í að kanna gríðarstórt, leyndardómsfullt land í vestri. Til að laða að landnámsmenn til að stofna þar búsetu nefndi hann landið „Grænland“. Árið 985 leiddi hann 25 skipa flota til að stofna tvær blómlegar nýlendur sem stóðu í aldir. Hann var virtur leiðtogi Grænlendinga til dauðadags og hélt fast í heiðna trú sína þrátt fyrir tilraunir sonar hans, Leifs heppna, til að breiða út kristni.",
                image: "assets/erik_the_red.png",
                link: "https://is.wikipedia.org/wiki/Eir%C3%ADkur_rau%C3%B0i"
            },
            {
                name: "Hrafna-Flóki Vilgerðarson",
                role: "Sjófarandi og landnámsmaður",
                bio: "Fyrsti norræni maðurinn sem sigldi viljandi til Íslands, stýrður yfir hafið af þremur hröfnum sínum.",
                lore: "Hrafna-Flóki Vilgerðarson var mikill landkönnuður á 9. öld. Eftir að hafa heyrt sögur af dularfullri eyju í norðri sigldi hann af stað til að setjast þar að. Til að rata yfir reginhaf notaði hann þrjá hrafna sem hann sleppti á leiðinni: sá fyrsti flaug aftur til baka, sá annar flaug hátt upp og sneri aftur til skips, en sá þriðji flaug fram á við og vísaði honum beint til landsins. Hann nam land á Barðaströnd, en vegna þess að hann hugaði ekki að heyskap fyrir búfénaðinn fyrir hinn harða vetur fórust allar skepnur hans. Vonsvikinn og horfandi yfir fjörðinn fullan af rekís nefndi hann landið „Ísland“. Þótt hann hafi fyrst horfið aftur til Noregs sneri hann síðar aftur og settist að til frambúðar.",
                image: "assets/floki_vilgerdarson.png",
                link: "https://is.wikipedia.org/wiki/Hrafna-Fl%C3%B3ki_Vilger%C3%B0arson"
            },
            {
                name: "Haraldur harðráði",
                role: "Væringi og konungur",
                bio: "Hinn ógnvekjandi leiðtogi Væringjasveitarinnar í Miklagarði og konungur Noregs, hvers fall árið 1066 markar lok víkingaaldar.",
                lore: "Haraldur Sigurðsson, kallaður harðráði, lifði lífi sem var verðugt hetjusagna. Eftir ósigur hálfbróður hans, Ólafs helga, á Stiklastöðum árið 1030, flýði hann til Garðaríkis og síðan til Miklagarðs. Þar varð hann foringi hinnar úrvals Væringjasveitar og safnaði gríðarlegum auði í herferðum frá Miðjarðarhafi til Litlu-Asíu. Hann sneri aftur til Noregs árið 1046 og tók við konungdómi. Árið 1066 gerði hann tilkall til ensku krúnunnar. Innrás hans var stöðvuð í orrustunni við Stamford-brú þar sem hann féll eftir að hafa fengið ör í kverkina. Fall hans markar jafnan lok víkingaaldar og lok hinna miklu landvinninga norrænna manna.",
                image: "assets/harald_hardrada.png",
                link: "https://is.wikipedia.org/wiki/Haraldur_har%C3%B0r%C3%A1%C3%B0i"
            }
        ],
        mythology: [
            {
                title: "Heimdallur og Bifröst",
                description: "Hinn vökuli vörður goðanna sem gætir hinnar brennandi regnbogabrúar Bifrastar.",
                lore: "Heimdallur er hinn vökuli vörður Ásgarðs. Hann er sonur níu mæðra og gæddur ótrúlegum yfirnáttúrulegum hæfileikum: hann þarf minni svefn en fugl, sér meira en hundrað mílur dags sem nætur, og heyrn hans er svo næm að hann heyrir grasið vaxa á jörðinni og ullina vaxa á kindum. Hann býr í Himinbjörgum við enda Bifrastar, brennandi regnbogabrúarinnar sem tengir Miðgarð við Ásgarð. Heimdallur á sverðið Höfuð og blæs í hornið Gjallarhorn þegar hætta steðjar að, en hljómur þess heyrist um alla níu heima og mun kalla goðin saman til hinstu orrustu við Ragnarök.",
                image: "assets/heimdall.png",
                link: "https://is.wikipedia.org/wiki/Heimdallur"
            },
            {
                title: "Baldur, hin harmræna ljós",
                description: "Guð ljóss, friðar og fegurðar, hvers harmrænt fall boðaði endalok heimsins.",
                lore: "Baldur er sonur Óðins og Friggjar. Hann er guð ljóssins, fegurðarinnar, viskunnar og réttlætisins og var elskaður af öllum fyrir gæsku sína. Þegar Baldur fór að dreyma feigðardrauma gekk Frigg móðir hans um alla heima og tók loforð af öllum lifandi verum, plöntum og frumefnum að skaða hann aldrei. Aðeins hinn ungi og ómerkilegi mistilteinn var talinn of skaðlaus til að vinna eið. Loki komst að þessu með slægð, bjó til pílu úr mistilteini og plataði hinn blinda bróður Baldurs, Höð, til að kasta henni að honum í leik goðanna. Pílan smaug í gegnum Baldur og varð honum að bana. Þessi harmleikur varð goðunum að gríðarlegri sorg og braut helgan frið Ásgarðs, sem leiddi óhjákvæmilega til Ragnaraka.",
                image: "assets/balder.png",
                link: "https://is.wikipedia.org/wiki/Baldur"
            }
        ],
        customs: [
            {
                topic: "Hólmganga",
                description: "Hinn strangt skilgreindi einvígisritúall til að útkljá deilur um heiður og eignir.",
                lore: "Hólmganga var lögleg og viðurkennd aðferð á norðurslóðum til að leysa úr deilum um heiður, eignir eða móðganir þegar ákvarðanir Þingsins nægðu ekki til að sætta aðila. Ólíkt venjulegum slagsmálum fylgdi hólmgangan ströngum reglum: keppendur mættust á hólmi eða afmörkuðu svæði sem var afmarkað með heslistöfum, þar sem breiddur var út feldur sem var um þrír metrar á hvern veg. Hvor tveggja mátti hafa þrjá skildi; ef skjöldur bilaði mátti skipta, en þegar allir þrír voru ónýtir varð að berjast án varnar. Einvíginu lauk við fyrsta blóð eða uppgjöf, en gat stundum orðið banvænt. Að neita hólmgöngu var mikil skömm og leiddi til þess að maður var kallaður níðingur.",
                image: "assets/holmgang.png",
                link: "https://is.wikipedia.org/wiki/H%C3%B3lmganga"
            },
            {
                topic: "Blót",
                description: "Hin heilaga fórnarathöfn og samkomufagnaður til að heiðra norræn goð.",
                lore: "Blót var miðlægur trúarlegur ritúall í norrænni trú, brú á milli manna og goða. Það var haldið við helgustu tímamót ársins (vetrarsólstöður fyrir jól, vorblót fyrir sigur, haustblót fyrir uppskeru) og stýrt af goða eða gýgju. Athöfnin fól í sér fórn á heilögum dýrum (hestum, svínum, nautgripum). Blóði dýranna (hlaut) var safnað í blótbolla og stökkt með hlautteinum á stalla, veggi og viðstadda til að flytja blessun og kraft goðanna. Kjöt dýranna var síðan soðið í stórum kötlum til blótveislunnar þar sem öl og mjöður var drukkið til heiðurs goðunum (Óðni fyrir sigur, Nirði og Frey fyrir ársæld og frið), sem styrkti samfélagsböndin.",
                image: "assets/blot_ritual.png",
                link: "https://is.wikipedia.org/wiki/Bl%C3%B3t"
            }
        ]
    },
    da: {
        characters: [
            {
                name: "Harald Blåtand",
                role: "Sameinende konge og bygherre",
                bio: "Den legendariske konge, der forenede Danmark og Norge og inspirerede navnet på moderne Bluetooth-teknologi.",
                lore: "Harald Gormsson, kendt som 'Blåtand', regerede Danmark fra 958 til 986. Hans tilnavn stammer sandsynligvis fra en død tand, der fremstod mørkeblå. Hans største bedrift var den politiske og religiøse forening af de danske stammer under hans krone samt deres gradvise omvendelse til kristendommen, en milepæl ridset på den berømte store Jellingsten. Han byggede også et netværk af cirkulære ringborge (Trelleborge) for at konsolidere sin kongelige magt. I 1997 søgte skaberne af en ny trådløs teknologi, der forener telekommunikation, inspiration i hans samlende arv til at navngive den 'Bluetooth', og valgte et logo, der overlejrer hans runebogstaver: Hagall (ᚼ) and Berkanan (ᛒ).",
                image: "assets/harald_bluetooth.png",
                link: "https://da.wikipedia.org/wiki/Harald_Bl%C3%A5tand"
            },
            {
                name: "Erik den Røde",
                role: "Opdagelsesrejsende og kolonisator",
                bio: "Den iltre vikingeleder, der blev forvist fra Island for mord og grundlagde de første permanente bosættelser på Grønland.",
                lore: "Erik Thorvaldsson, kendt som 'den Røde' (Eiríkr rauði) på grund af sit flammende røde hår og skæg, blev født i Norge. Efter hans far blev forvist for manddrab, slog familien sig ned på Island. Tro mod sin slægts voldsomme temperament blev Erik til sidst erklæret fredløs og forvist fra Island i tre år efter en blodig fejde. Han brugte sin udlandighed til at udforske et enormt, mystisk island mod vest. For at tiltrække nybyggere til at etablere gårde der, kaldte han det strategisk 'Grønland'. I 985 ledte han en flåde på 25 skibe for at etablere to blomstrende kolonier, der varede i århundreder. Han forblev den respekterede høvding over disse bosættelser indtil sin død, og holdt fast i sin hedenske tro trods sin søn Leif den Lykkeliges indsats for at udbrede kristendommen.",
                image: "assets/erik_the_red.png",
                link: "https://da.wikipedia.org/wiki/Erik_den_R%C3%B8de"
            },
            {
                name: "Floke Vilgerdsson",
                role: "Navigatør og pioner",
                bio: "Den første skandinaviske opdagelsesrejsende, der bevidst sejlede til Island, guidet over havet af sine tre ravne.",
                lore: "Hrafna-Flóki Vilgerðarson var en stor skandinavisk navigatør i det 9. århundrede. Efter at have hørt rygter om et mystisk land i nord, satte han sejl for at bosætte sig der. For at navigere over det åbne hav medbragte han tre hellige ravne, som han slap under rejsen: den første fløj tilbage, den anden fløj højt op og vendte tilbage til skibet, men den tredje fløj fremad og guidede ham direkte til øen. Han slog sig ned i det nordvestlige Island, men da han ikke nåede at samle nok hø til sit kvæg inden den hårde vinter, døde alle hans dyr. Modløs og skuende over fjorden fyldt med drivis, kaldte han landet 'Ísland' (Island). Selvom han oprindeligt vendte tilbage til Norge med bitre beretninger, rejste han senere tilbage for at bosætte sig permanent.",
                image: "assets/floki_vilgerdarson.png",
                link: "https://da.wikipedia.org/wiki/Floke_Vilgerdsson"
            },
            {
                name: "Harald Hårderåde",
                role: "Væringekriger og konge",
                bio: "Den frygtindgydende leder af den byzantinske væringegarde og konge af Norge, hvis død i 1066 markerer afslutningen på vikingetiden.",
                lore: "Harald Sigurdsson, kendt som 'Hårderåde' (den Hårde), levede et liv værdigt til en episk saga. Efter hans halvbror kong Olav den Hellige blev besejret ved Stiklestad i 1030, flygtede han til Kijev og derefter til Konstantinopel. Der blev han leder af den eliteprægede byzantinske væringegarde og samlede en legendarisk rigdom under kampagner fra Middelhavet til Lilleasien. Han vendte tilbage til Norge i 1046 og krævede tronen. I 1066 forsøgte han at erobre den engelske krone. Hans invasion blev stoppet ved slaget ved Stamford Bridge, hvor han blev dræbt af en pil i halsen. Hans død markerer traditionelt afslutningen på vikingetiden, og lukkede æraen for de store skandinaviske ekspansioner.",
                image: "assets/harald_hardrada.png",
                link: "https://da.wikipedia.org/wiki/Harald_H%C3%A5rder%C3%A5de"
            }
        ],
        mythology: [
            {
                title: "Heimdal og Bifrost",
                description: "Gudernes årvågne vogter, der beskytter den brændende regnbuebro Bifrost.",
                lore: "Heimdal er Asgårds årvågne vogtergud. Født af ni forskellige mødre besidder han ekstraordinære overnaturlige sanser: han behøver mindre søvn end en fugl, kan se over hundrede mil dag og nat, og hans hørelse er så skarp, at han kan høre græsset gro på jorden og ulden gro på fårene. Han bor i sin hal Himinbjørg, der ligger hvor den brændende regnbuebro Bifrost forbinder menneskenes verden Midgård med Asgård. Heimdal er bevæbnet med sit sværd Hofund og ejer det legendariske horn Gjallarhorn, hvis mægtige blæs kan høres i alle ni verdener og vil lyde for at samle guderne til den sidste kamp ved Ragnarok.",
                image: "assets/heimdall.png",
                link: "https://da.wikipedia.org/wiki/Heimdal"
            },
            {
                title: "Balder, det tragiske lys",
                description: "Guden for lys, fred og skønhed, hvis tragiske død markerede begyndelsen på verdens undergang.",
                lore: "Balder er søn af Odin og Frigg. Som gud for lys, skønhed, visdom og retfærdighed var han elsket af alle for sin absolutte godhed. Plaget af profetiske drømme om sin død rejste hans mor Frigg gennem alle ni verdener og tog ed af enhver levende skabning, plante og element om aldrig at skade hendes søn. Kun den unge og ubetydelige mistelten blev anset for at være for harmløs til at aflægge ed. Da Loke fandt ud af dette ved list, lavede han en pil af mistelten og lokkede Balders blinde bror, Høder, til at skyde den mod ham under gudernes leg. Pilen gennemborede Balder og dræbte ham på stedet. Denne tragedie kastede guderne ud i dyb sorg og brød Asgårds hellige fred, hvilket startede den kæde af begivenheder, der uundgåeligt førte til Ragnarok.",
                image: "assets/balder.png",
                link: "https://da.wikipedia.org/wiki/Balder"
            }
        ],
        customs: [
            {
                topic: "Holmgang",
                description: "Den strengt kodificerede rituelle kamp brugt til at løse æres- og ejendomstvister.",
                lore: "Holmgang var den juridisk anerkendte metode i den skandinaviske verden til at løse tvister om ære, ejendom eller fornærmelser, når Tinget ikke kunne nå frem til en tilfredsstillende dom. I modsætning til et simpelt slagsmål fulgte duellen ekstremt strenge regler: kombattanterne mødtes på en lille ø (holm) eller et afgrænset område markeret med hasselkæppe, hvorpå et tæppe på ca. tre meter var spredt. Hver duellant havde tre træskjolde til rådighed; hvis et skjold blev splintret, kunne det udskiftes, men når alle tre var ødelagt, måtte de kæmpe uden forsvar. Duellen sluttede ved første blod eller overgivelse, men kunne til tider være dødelig. At nægte en holmgang resulterede i øjeblikkeligt og permanent tab af ære, og man blev erklæret for nidding (olding).",
                image: "assets/holmgang.png",
                link: "https://da.wikipedia.org/wiki/Holmgang"
            },
            {
                topic: "Blot",
                description: "Den hellige ceremoni med dyreofringer og fællesgilder til ære for de nordiske guder.",
                lore: "Blot var det centrale religiøse ritual i den nordiske tro, der fungerede som en hellig bro mellem mennesker og guder. Det blev fejret ved vigtige årstidsbestemte vendepunkter (vintersolhverv for jul, forår for sejr, efterår for høst) og blev ledet af høvdingen (Jarlen) eller en præstinde. Ritualet involverede ofring af hellige dyr (heste, grise, kvæg). Deres blod (hlaut) blev opsamlet i bronzeskåle og stænket med grene på altrene, tempelvæggene og deltagerne for at overføre velsignelse og guddommelig styrke. Kødet blev derefter kogt i store kedler til et fælles gilde, hvor der blev drukket øl og mjød til gudernes ære (Odin for sejr, Njord og Freyr for frugtbarhed og fred), hvilket styrkede både åndelige og sociale bånd.",
                image: "assets/blot_ritual.png",
                link: "https://da.wikipedia.org/wiki/Blot"
            }
        ]
    },
    es: {
        characters: [
            {
                name: "Harald Diente Azul",
                role: "Rey unificador y constructor",
                bio: "El legendario rey que unificó Dinamarca y Noruega e inspiró el nombre de la tecnología inalámbrica Bluetooth.",
                lore: "Harald Gormsson, conocido como 'Diente Azul' (Harald Blåtand), gobernó Dinamarca de 958 a 986. Su apodo probablemente se debió a un diente muerto de coloración azulada. Su mayor logro fue la unificación política y religiosa de las tribus danesas bajo su corona y su gradual conversión al cristianismo, un hito grabado en la famosa gran piedra runa de Jelling. También construyó una red de fortalezas circulares fortificadas (Trelleborg) para consolidar su poder real. En 1997, los creadores de una nueva tecnología inalámbrica que unifica las telecomunicaciones se inspiraron en su capacidad de unificación para llamarla 'Bluetooth', eligiendo como logotipo la superposición de las dos runas de sus iniciales: Hagall (ᚼ) y Berkanan (ᛒ).",
                image: "assets/harald_bluetooth.png",
                link: "https://es.wikipedia.org/wiki/Harald_Bl%C3%A5tand"
            },
            {
                name: "Erik el Rojo",
                role: "Explorador y colonizador",
                bio: "El impetuoso líder vikingo que, desterrado de Islandia por asesinato, fundó los primeros asentamientos permanentes en Groenlandia.",
                lore: "Erik Thorvaldsson, llamado 'el Rojo' (Eiríkr rauði) debido a su cabello y barba de un rojo encendido, nació en Noruega. Después de que su padre fuera exiliado por homicidio, la familia se estableció en Islandia. Fiel al temperamento violento de su linaje, Erik fue finalmente proscrito y desterrado de Islandia por tres años tras una sangrienta disputa. Pasó su exilio explorando una vasta y misteriosa tierra helada al oeste. Para atraer colonos a establecer granjas allí, la bautizó estratégicamente como 'Groenlandia' (Tierra Verde). En 985, lideró una flota de 25 barcos para establecer dos colonias prósperas que perduraron durante siglos. Siguió siendo el respetado jefe de estos asentamientos hasta su muerte, aferrándose a sus creencias paganas a pesar de los esfuerzos de su hijo Leif Erikson por difundir el cristianismo.",
                image: "assets/erik_the_red.png",
                link: "https://es.wikipedia.org/wiki/Erik_el_Rojo"
            },
            {
                name: "Floki Vilgerðarson",
                role: "Navegante y pionero",
                bio: "El primer explorador escandinavo en navegar voluntariamente hacia Islandia, guiado a través del océano por sus tres cuervos.",
                lore: "Hrafna-Flóki Vilgerðarson fue un gran navegante escandinavo del siglo IX. Al escuchar relatos de una misteriosa isla al norte, decidió emprender una expedición para establecerse allí. Para orientarse en el océano abierto, llevó consigo tres cuervos sagrados que liberó durante el viaje: el primero voló hacia atrás, el segundo subió al cielo y regresó, pero el tercero voló hacia adelante, indicándole la dirección de la isla. Se estableció en el noroeste, pero al no preparar suficiente forraje para el ganado durante el terrible invierno, todos sus animales murieron. Desanimado y al ver los fiordos llenos de hielo flotante, bautizó la tierra como 'Ísland' (Tierra de Hielo). Aunque inicialmente regresó a Noruega con amargas quejas, finalmente volvió más tarde para establecerse de forma permanente.",
                image: "assets/floki_vilgerdarson.png",
                link: "https://es.wikipedia.org/wiki/Floki_Vilger%C3%B0arson"
            },
            {
                name: "Harald Hardrada",
                role: "Guerrero varego y rey",
                bio: "El temible líder de la Guardia Varega en Bizancio y rey de Noruega, cuya muerte en 1066 marca el fin de la era vikinga.",
                lore: "Harald Sigurdsson, conocido como 'Hardrada' (el Despiadado), llevó una vida digna de una saga épica. Tras la derrota de su medio hermano el rey Olaf en Stiklestad en 1030, huyó a la Rus de Kiev y luego a Constantinopla. Allí se convirtió en el comandante de la elite de la Guardia Varega bizantina, acumulando una riqueza legendaria en campañas desde el Mediterráneo hasta Asia Menor. Al regresar a Noruega en 1046, reclamó el trono. En 1066, intentó reclamar la corona de Inglaterra. Su invasión fue detenida en la batalla de Stamford Bridge, donde murió por una flecha en la garganta. Su muerte marca tradicionalmente el fin de la era vikinga, cerrando el ciclo de las grandes expediciones escandinavas.",
                image: "assets/harald_hardrada.png",
                link: "https://es.wikipedia.org/wiki/Harald_Hardrada"
            }
        ],
        mythology: [
            {
                title: "Heimdall y el Bifröst",
                description: "El guardián vigilante de los dioses que custodia el ardiente puente arcoíris Bifröst.",
                lore: "Heimdall es el dios guardián vigilante de Asgard. Hijo de nueve madres diferentes, posee facultades sobrehumanas excepcionales: requiere menos sueño que un pájaro, puede ver a más de cien leguas tanto de día como de noche, y su oído es tan fino que puede escuchar la hierba crecer en la tierra y la lana en el lomo de las ovejas. Reside en su gran salón Himinbjörg, situado en la cima del puente Bifröst, el puente arcoíris ardiente que conecta el reino mortal de Midgard con Asgard. Heimdall está armado con su espada Höfuð y posee el legendario cuerno Gjallarhorn, cuyo soplo potente se escucha a través de los nueve mundos y resonará para convocar a los dioses para la batalla final del Ragnarök.",
                image: "assets/heimdall.png",
                link: "https://es.wikipedia.org/wiki/Heimdal"
            },
            {
                title: "Balder, la luz trágica",
                description: "El dios de la luz y la belleza cuya trágica muerte marcó el principio del fin del mundo.",
                lore: "Balder (Baldr) es el hijo de Odín y Frigg. Dios de la luz, la belleza, la sabiduría y la justicia, era amado por todos por su absoluta benevolencia. Atormentado por sueños proféticos que anunciaban su muerte, su madre Frigg recorrió los nueve mundos para hacer jurar a cada criatura, planta y elemento que nunca dañarían a su hijo. Solo el joven e insignificante muérdago fue considerado demasiado inofensivo para prestar juramento. Al enterarse de esta falla mediante engaños, Loki fabricó un dardo con madera de muérdago e incitó al hermano ciego de Balder, Höðr, a lanzárselo durante un juego de los dioses. El dardo atravesó a Balder, matándolo al instante. Esta tragedia sumió a los dioses en un luto infinito y rompió las leyes de paz de Asgard, desencadenando la cadena de eventos que llevó inexorablemente al Ragnarök.",
                image: "assets/balder.png",
                link: "https://es.wikipedia.org/wiki/Balder"
            }
        ],
        customs: [
            {
                topic: "El Holmgang",
                description: "El combate ritual codificado para resolver disputas de honor y propiedad.",
                lore: "El Holmgang era el método legal y ritual reconocido en el mundo escandinavo para resolver conflictos de honor o propiedad cuando ninguna sentencia del Thing (asamblea) lograba satisfacer a las partes. A diferencia de una simple pelea, el duelo obedecía a reglas extremadamente estrictas: los combatientes se reunían en una pequeña isla (holm) o un área cuadrada delimitada por postes de avellano, sobre la cual se extendía una capa o manto de unos tres metros de lado. Cada duelista disponía de tres escudos de madera; cuando un escudo se rompía, podía reemplazarlo, pero una vez destruidos los tres, debía luchar indefenso. El combate terminaba al primer derrame de sangre o por rendición, aunque a veces podía ser mortal. Rechazar un Holmgang conllevaba la pérdida irreparable del honor, declarando al que rehusaba como un cobarde sin honor (nithing).",
                image: "assets/holmgang.png",
                link: "https://es.wikipedia.org/wiki/Holmgang"
            },
            {
                topic: "El Blót",
                description: "La ceremonia sagrada de sacrificios de animales y banquetes comunales en honor a los dioses.",
                lore: "El Blót era el ritual religioso central de la fe escandinava, sirviendo como un puente sagrado entre los humanos y los dioses. Celebrado en momentos clave del año (solsticio de invierno para Yule, primavera para la victoria, otoño para las cosechas), estaba dirigido por el jefe del clan (Jarl) o una sacerdotisa. El rito implicaba el sacrificio ritual de animales sagrados (caballos, cerdos, ganado). La sangre de las bestias (hlaut) se recogía en cuencos de bronce y se rociaba con ramas sobre los altares, las paredes de los templos y los participantes para conferir bendiciones y fuerza divina. La carne se cocinaba luego en grandes calderos para un banquete comunitario donde se bebía cerveza e hidromiel a la salud de los dioses (Odín para la victoria, Njord y Freyr para la fertilidad y la paz), reforzando tanto los lazos espirituales como la cohesión social.",
                image: "assets/blot_ritual.png",
                link: "https://es.wikipedia.org/wiki/Bl%C3%B3t"
            }
        ]
    },
    de: {
        characters: [
            {
                name: "Harald Blauzahn",
                role: "Einigender König und Baumeister",
                bio: "Der legendäre König, der Dänemark und Norwegen einigte und als Namensgeber für die moderne Bluetooth-Technologie diente.",
                lore: "Harald Gormsson, bekannt als 'Blauzahn' (Harald Blåtand), regierte Dänemark von 958 bis 986. Sein Beiname stammte wahrscheinlich von einem toten Zahn, der dunkelblau wirkte. Seine größte Leistung war die politische und religiöse Einigung der dänischen Stämme unter seiner Krone und deren schrittweise Bekehrung zum Christentum, ein Meilenstein, der auf dem berühmten großen Runenstein von Jelling eingemeißelt ist. Er errichtete auch ein Netzwerk von kreisförmigen Wikingerburgen (Trelleborgs), um seine königliche Macht zu konsolidieren. Im Jahr 1997 ließen sich die Entwickler einer neuen drahtlosen Technologie, die die Telekommunikation vereint, von seinem einigenden Erbe inspirieren, um sie 'Bluetooth' zu nennen, und wählten ein Logo, das seine Runeninitialen überlagert: Hagall (ᚼ) und Berkanan (ᛒ).",
                image: "assets/harald_bluetooth.png",
                link: "https://de.wikipedia.org/wiki/Harald_Blauzahn"
            },
            {
                name: "Erik der Rote",
                role: "Entdecker und Kolonisator",
                bio: "Der feurige Wikingerführer, der wegen Mordes aus Island verbannt wurde und die ersten dauerhaften nordischen Siedlungen auf Grönland gründete.",
                lore: "Erik Thorvaldsson, genannt 'der Rote' (Eiríkr rauði) aufgrund seiner flammend roten Haare und seines Bartes, wurde in Norwegen geboren. Nachdem sein Vater wegen Totschlags verbannt worden war, ließ sich die Familie in Island nieder. Getreu dem gewalttätigen Temperament seiner Abstammung wurde Erik schließlich nach einer blutigen Fehde für drei Jahre aus Island verbannt. Er verbrachte sein Exil damit, ein riesiges, geheimnisvolles eisiges Land im Westen zu erkunden. Um Siedler für den Aufbau von Farmen dorthin zu locken, nannte er es strategisch 'Grönland'. Im Jahr 985 führte er eine Flotte von 25 Schiffen an, um zwei prosperierende Kolonien zu gründen, die Jahrhunderte überdauerten. Er blieb bis zu seinem Tod der angesehene Häuptling dieser Siedlungen und hielt an seinem heidnischen Glauben fest, trotz der Bemühungen seines Sohnes Leif Eriksson, das Christentum zu verbreiten.",
                image: "assets/erik_the_red.png",
                link: "https://de.wikipedia.org/wiki/Erik_der_Rote"
            },
            {
                name: "Floki Vilgerðarson",
                role: "Navigator und Pionier",
                bio: "Der erste skandinavische Entdecker, der gezielt nach Island segelte, geführt über den offenen Ozean von seinen drei Raben.",
                lore: "Hrafna-Flóki Vilgerðarson war ein großer skandinavischer Navigator des 9. Jahrhunderts. Nachdem er von einer mysteriösen Insel im Norden gehört hatte, beschloss er, eine Expedition zu starten, um sich dort niederzulassen. Um auf dem offenen Ozean zu navigieren, nahm er drei heilige Raben mit, die er während der Reise freiließ: Der erste flog zurück, der zweite stieg in den Himmel und kehrte zurück, aber der dritte flog nach vorne und wies ihm den Weg zur Insel. Er ließ sich im Nordwesten nieder, aber da er für den harten Winter nicht genug Heu für sein Vieh gesammelt hatte, starben alle seine Tiere. Entmutigt und beim Anblick der mit Treibeis gefüllten Fjorde nannte er das Land 'Ísland' (Island). Obwohl er zunächst mit bitteren Berichten nach Norwegen zurückkehrte, kehrte er später zurück, um sich dauerhaft niederzulassen.",
                image: "assets/floki_vilgerdarson.png",
                link: "https://de.wikipedia.org/wiki/Flóki_Vilgerðarson"
            },
            {
                name: "Harald Hardrada",
                role: "Waräger-Krieger und König",
                bio: "Der furchterregende Führer der byzantinischen Warägergarde und König von Norwegen, dessen Tod im Jahr 1066 das Ende der Wikingerzeit markiert.",
                lore: "Harald Sigurdsson, bekannt als 'Hardrada' (der Harte), führte ein Leben, das einer epischen Saga würdig war. Nach der Niederlage seines Halbbruders König Olaf bei Stiklestad im Jahr 1030 floh er in die Kiewer Rus und dann nach Konstantinopel. Dort stieg er zum Kommandeur der elitären byzantinischen Warägergarde auf und sammelte bei Feldzügen vom Mittelmeer bis nach Kleinasien legendären Reichtum an. Nach seiner Rückkehr nach Norwegen im Jahr 1046 beanspruchte er den Thron. Im Jahr 1066 versuchte er, die englische Krone zu erobern. Seine Invasion wurde in der Schlacht von Stamford Bridge gestoppt, wo er durch einen Pfeil in den Hals getötet wurde. Sein Tod markiert traditionell das Ende der Wikingerzeit und schließt die Ära der großen skandinavischen Expansionen.",
                image: "assets/harald_hardrada.png",
                link: "https://de.wikipedia.org/wiki/Harald_III._(Norwegen)"
            }
        ],
        mythology: [
            {
                title: "Heimdall und Bifröst",
                description: "Der wachsame Wächter der Götter, der die brennende Regenbogenbrücke Bifröst bewacht.",
                lore: "Heimdall ist der wachsame Wächtergott von Asgard. Als Sohn von neun verschiedenen Müttern besitzt er außergewöhnliche übermenschliche Sinne: Er benötigt weniger Schlaf als ein Vogel, kann bei Tag und Nacht über hundert Meilen weit sehen, und sein Gehör ist so scharf, dass er das Gras auf der Erde und die Wolle auf den Schafen wachsen hören kann. Er wohnt in seiner Halle Himinbjörg, die sich dort befindet, wo die brennende Regenbogenbrücke Bifröst die Welt der Menschen (Midgard) mit Asgard verbindet. Heimdall ist mit seinem Schwert Höfuð bewaffnet und besitzt das legendäre Horn Gjallarhorn, dessen mächtiger Ton in allen neun Welten zu hören ist und ertönen wird, um die Götter zum letzten Kampf am Ragnarök zu versammeln.",
                image: "assets/heimdall.png",
                link: "https://de.wikipedia.org/wiki/Heimdall"
            },
            {
                title: "Balder, das tragische Licht",
                description: "Der Göttersohn des Lichts und der Schönheit, dessen tragischer Tod den Beginn des Weltuntergangs markierte.",
                lore: "Balder (Baldur) ist der Sohn von Odin und Frigg. Als Gott des Lichts, der Schönheit, der Weisheit und der Gerechtigkeit wurde er von allen für seine absolute Güte geliebt. Geplagt von prophetischen Träumen über seinen Tod, reiste seine Mutter Frigg durch die neun Welten und nahm jedem Lebewesen, jeder Pflanze und jedem Element den Eid ab, ihren Sohn niemals zu verletzen. Nur die junge und unbedeutende Mistel wurde als zu harmlos angesehen, um einen Eid zu schwören. Als Loki diese Schwachstelle durch eine List herausfand, fertigte er einen Pfeil aus Mistelholz an und brachte Balders blinden Bruder Höðr dazu, ihn bei einem Spiel der Götter auf ihn zu schießen. Der Pfeil durchbohrte Balder und tötete ihn auf der Stelle. Diese Tragödie stürzte die Götter in tiefe Trauer und brach den heiligen Frieden von Asgard, was die Kette von Ereignissen auslöste, die unweigerlich zum Ragnarök führten.",
                image: "assets/balder.png",
                link: "https://de.wikipedia.org/wiki/Baldr"
            }
        ],
        customs: [
            {
                topic: "Der Holmgang",
                description: "Der streng reglementierte rituelle Zweikampf zur Beilegung von Ehr- und Eigentumsstreitigkeiten.",
                lore: "Der Holmgang war die rechtlich anerkannte Methode in der skandinavischen Welt, um Streitigkeiten über Ehre, Eigentum oder Beleidigungen beizulegen, wenn das Thing (die Versammlung) kein zufriedenstellendes Urteil fällen konnte. Im Gegensatz zu einer einfachen Schlägerei folgte das Duell äußerst strengen Regeln: Die Kämpfer trafen sich auf einer kleinen Insel (Holm) oder einem durch Haselstäbe markierten quadratischen Bereich, auf dem eine Decke von etwa drei Metern Breite ausgebreitet war. Jeder Duellant hatte drei Holzschilde zur Verfügung; wenn ein Schild zersplitterte, konnte es ersetzt werden, aber sobald alle drei zerstört waren, mussten sie verteidigungslos kämpfen. Das Duell endete beim ersten vergossenen Blut oder bei Aufgabe, konnte jedoch manchmal tödlich verlaufen. Die Verweigerung eines Holmgangs führte zum sofortigen und dauerhaften Verlust der Ehre, was den Verweigerer als feigen Ehrlosen (nithing) brandmarkte.",
                image: "assets/holmgang.png",
                link: "https://de.wikipedia.org/wiki/Holmgang"
            },
            {
                topic: "Das Blót",
                description: "Die heilige Zeremonie der Tieropfer und Gemeinschaftsfeste zu Ehren der nordischen Götter.",
                lore: "Das Blót war das zentrale religiöse Ritual des nordischen Glaubens und diente als heilige Brücke zwischen den Menschen und den Göttern. Es wurde an wichtigen saisonalen Wendepunkten gefeiert (Wintersonnenwende für Julfest, Frühling für den Sieg, Herbst für die Ernte) und vom Häuptling (Jarl) oder einer Priesterin geleitet. Das Ritual beinhaltete das Opfer heiliger Tiere (Pferde, Schweine, Rinder). Ihr Blut (hlaut) wurde in Bronzeschalen gesammelt und mit Zweigen auf die Altäre, Tempelwände und Teilnehmer gesprengt, um Segen und göttliche Kraft zu übertragen. Das Fleisch wurde dann in großen Kesseln für ein Gemeinschaftsfest gekocht, bei dem Bier und Met auf das Wohl der Götter getrunken wurden (Odin für den Sieg, Njörd und Freyr für Fruchtbarkeit und Frieden), was sowohl die spirituellen Bindungen als auch den sozialen Zusammenhalt stärkte.",
                image: "assets/blot_ritual.png",
                link: "https://de.wikipedia.org/wiki/Opfer_(Religion)#Nordische_Religion"
            }
        ]
    },
    uk: {
        characters: [
            {
                name: "Гаральд Синьозубий",
                role: "Король-об'єднувач і будівничий",
                bio: "Легендарний король, який об'єднав Данію та Норвегію і надихнув назву сучасної технології Bluetooth.",
                lore: "Гаральд Гормссон, відомий як 'Синьозубий' (Harald Blåtand), правив Данією з 958 по 986 рік. Його прізвисько, ймовірно, походить від темного кольору мертвого зуба. Його головним досягненням стало політичне та релігійне об'єднання данських племен під своєю короною та їхнє поступове навернення до християнства, віха, висічена на знаменитому великому рунічному камені в Єллінгу. Він також побудував мережу круглих укріплених фортець (Треллеборгів) для консолідації королівської влади. У 1997 році творці нової технології бездротового зв'язку, що об'єднує телекомунікації, надихнулися його об'єднавчою спадщиною і назвали її 'Bluetooth', обравши логотипом накладення його рунічних ініціалів: Гаґалл (ᚼ) та Берканан (ᛒ).",
                image: "assets/harald_bluetooth.png",
                link: "https://uk.wikipedia.org/wiki/Харальд_I_Синьозубий"
            },
            {
                name: "Ерік Рудий",
                role: "Дослідник і колонізатор",
                bio: "Запальний лідер вікінгів, який, будучи вигнаним з Ісландії за вбивство, заснував перші постійні скандинавські поселення в Гренландії.",
                lore: "Ерік Торвальдссон, відомий як 'Рудий' (Eiríkr rauði) через своє вогненно-руде волосся та бороду, народився в Норвегії. Після того, як його батька вигнали за вбивство, родина оселилася в Ісландії. Вірний насильницькому темпераменту свого роду, Ерік зрештою був оголошений поза законом і вигнаний з Ісландії на три роки після кривавої ворожнечі. Він провів своє вигнання, досліджуючи величезну, таємничу крижану землю на заході. Щоб залучити поселенців для створення там ферм, він стратегічно назвав її 'Гренландією' (Зеленою землею). У 985 році він очолив флот із 25 кораблів, щоб заснувати дві процвітаючі колонії, які існували століттями. Він залишався шанованим вождем цих поселень до своєї смерті, тримаючись за свої язичницькі вірування, незважаючи на зусилля його сина Лейфа Еріксона щодо поширення християнства.",
                image: "assets/erik_the_red.png",
                link: "https://uk.wikipedia.org/wiki/Ерік_Рудий"
            },
            {
                name: "Флокі Вільгердарсон",
                role: "Мореплавець і піонер",
                bio: "Перший скандинавський дослідник, який навмисно відплив до Ісландії, керуючись у відкритому океані трьома своїми воронами.",
                lore: "Храфна-Флокі Вільгердарсон був видатним скандинавським мореплавцем IX століття. Почувши розповіді про таємничий острів на півночі, він вирішив організувати експедицію, щоб оселитися там. Для навігації у відкритому океані він взяв із собою трьох священних воронів, яких випускав під час подорожі: перший полетів назад, другий піднявся в небо і повернувся на корабель, а третій полетів уперед, вказавши йому напрямок до острова. Він оселився на північному заході, але, не підготувавши достатньо сіна для худоби на час суворої зими, втратив усіх своїх тварин. Розчарований і дивлячись на фіорди, забиті плавучим льодом, він назвав цю землю 'Ísland' (Земля льоду, Ісландія). Хоча спочатку він повернувся до Норвегії з гіркими новинами, згодом він знову повернувся туди, щоб оселитися назавжди.",
                image: "assets/floki_vilgerdarson.png",
                link: "https://uk.wikipedia.org/wiki/Флокі_Вільгердарсон"
            },
            {
                name: "Гаральд Суворий",
                role: "Воїн варязької гвардії та король",
                bio: "Грізний лідер візантійської Варязької гвардії та король Норвегії, чия смерть у 1066 році знаменує кінець епохи вікінгів.",
                lore: "Гаральд Сігурдссон, відомий як 'Суворий' (Hardrada), прожив життя, гідне епічної саги. Після поразки свого зведеного брата короля Олафа під Стіклістадом у 1030 році він втік до Київської Русі, а потім до Константинополя. Там він став командиром елітної візантійської Варязької гвардії, накопичивши легендарне багатство під час кампаній від Середземного моря до Малої Азії. Повернувшись до Норвегії в 1046 році, він захопив трон. У 1066 році він спробував заявити права на англійську корону. Його вторгнення було зупинено в битві при Стемфорд-Брідж, де він загинув від стріли в горло. Його смерть традиційно знаменує кінець епохи вікінгів, закриваючи цикл великих скандинавських експансій.",
                image: "assets/harald_hardrada.png",
                link: "https://uk.wikipedia.org/wiki/Харальд_III_Суворий"
            }
        ],
        mythology: [
            {
                title: "Геймдалль та міст Біфрьост",
                description: "Пильний вартовий богів, який охороняє палаючий міст-веселку Біфрьост.",
                lore: "Геймдалль — пильний бог-охоронець Асґарда. Син дев'яти різних матерів, він володіє винятковими надлюдськими здібностями: йому потрібно менше сну, ніж птаху, він може бачити на відстань понад сто ліг вдень і вночі, а його слух настільки тонкий, що він чує, як росте трава на землі та вовна на спинах овець. Він живе у своїй залі Гімінбйорг, розташованій на вершині мосту Біфрьост — палаючого мосту-веселки, що з'єднує світ людей (Мідґард) зі світом богів. Геймдалль озброєний своїм грізним мечем Гофунд і володіє легендарним рогом Г'ялларгорн, чий могутній звук чути у всіх дев'яти світах, і який пролунає, щоб зібрати богів на фінальну битву Раґнарьоку.",
                image: "assets/heimdall.png",
                link: "https://uk.wikipedia.org/wiki/Геймдалль"
            },
            {
                title: "Бальдр, трагічне світло",
                description: "Бог світла, миру та краси, чия трагічна смерть поклала початок кінцю світу.",
                lore: "Бальдр — син Одіна та Фрігг. Бог світла, краси, мудрості та справедливості, він був любимий усіма за свою абсолютну доброзичливість. Стурбована його пророчими снами про смерть, його мати Фрігг обійшла всі дев'ять світів, щоб змусити кожну істоту, рослину та елемент поклястися ніколи не завдавати шкоди її синові. Тільки молодий та незначний омела був визнаний занадто нешкідливим, щоб складати клятву. Дізнавшись про цю вразливість хитрощами, Локі змайстрував стрілу з омели і підмовив сліпого брата Бальдра, Хьода, кинути її в нього під час гри богів. Стріла пробила Бальдра, убивши його на місці. Ця трагедія занурила богів у нескінченну скорботу і порушила священний мир Асґарда, запустивши ланцюг подій, що неминуче призвели до Раґнарьоку.",
                image: "assets/balder.png",
                link: "https://uk.wikipedia.org/wiki/Бальдр"
            }
        ],
        customs: [
            {
                topic: "Гольмганг",
                description: "Суворо регламентований ритуальний двобій для вирішення спорів про честь та майно.",
                lore: "Гольмганг був юридично визнаним методом у скандинавському світі для вирішення конфліктів щодо честі, майна або образ, коли рішення Тингу не могло задовольнити сторони. На відміну від простої бійки, дуель підпорядковувалася надзвичайно суворим правилам: бійці зустрічалися на невеликому острові (гольмі) або квадратному майданчику, позначеному палицями з ліщини, на якому розстеляли плащ розміром приблизно три метри з кожного боку. Кожен дуелянт мав право на три дерев'яні щити; якщо щит розбивався, його можна було замінити, але коли всі три були знищені, доводилося битися без захисту. Бій закінчувався після першої крові або капітуляції, хоча іноді міг бути смертельним. Відмова від Гольмгангу призводила до безповоротної втрати честі, тавруючи людину як боягуза (нітінга).",
                image: "assets/holmgang.png",
                link: "https://uk.wikipedia.org/wiki/Хольмганг"
            },
            {
                topic: "Блот",
                description: "Священна церемонія жертвопринесення тварин та спільних бенкетів на честь богів.",
                lore: "Блот був центральним релігійним ритуалом скандинавської віри, що служив священним мостом між людьми та богами. Він святкувався у ключові сезонні моменти року (зимове сонцестояння для Йоля, весна для перемоги, осінь для врожаю) і проводився вождем (Ярлом) або жрицею. Ритуал передбачав ритуальне жертвопринесення священних тварин (коней, свиней, великої рогатої худоби). Кров тварин (hlaut) збирали в бронзові чаші та за допомогою гілок кропили вівтарі, стіни храмів та учасників, щоб передати благословення та божественну силу. Потім м'ясо варили у великих казанах для спільного бенкету, де пили пиво та мед за здоров'я богів (Одіна для перемоги, Ньйорда і Фрейра для родючості та миру), зміцнюючи як духовні зв'язки, так і соціальну єдність.",
                image: "assets/blot_ritual.png",
                link: "https://uk.wikipedia.org/wiki/Блот"
            }
        ]
    }
};

const languages = ['fr', 'en', 'is', 'da', 'es', 'de', 'uk'];

languages.forEach(lang => {
    const filePath = path.join(__dirname, `viking_data_${lang}.js`);
    if (!fs.existsSync(filePath)) {
        console.error(`File not found: ${filePath}`);
        return;
    }
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Helper to format an item
    const formatItem = (item, indent = '        ') => {
        let str = indent + '{\n';
        const keys = Object.keys(item);
        keys.forEach((key, idx) => {
            let val = item[key];
            if (typeof val === 'string') {
                // Escape single quotes inside if single quoted, or keep as templates
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
    
    // Inject characters at the start of characters array
    const charactersInject = newContent[lang].characters.map(item => formatItem(item)).join(',\n') + ',\n';
    content = content.replace('characters: [', `characters: [\n${charactersInject}`);
    
    // Inject mythology at the start of mythology array
    const mythologyInject = newContent[lang].mythology.map(item => formatItem(item)).join(',\n') + ',\n';
    content = content.replace('mythology: [', `mythology: [\n${mythologyInject}`);
    
    // Inject customs at the start of customs array
    const customsInject = newContent[lang].customs.map(item => formatItem(item)).join(',\n') + ',\n';
    content = content.replace('customs: [', `customs: [\n${customsInject}`);
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Successfully updated: viking_data_${lang}.js`);
});
