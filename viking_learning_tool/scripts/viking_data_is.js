const vikingData_is = {
    runes: [
        { 
            name: "Fehu", 
            symbol: "ᚠ", 
            meaning: "Auður, búfé, velmegun, lífsorka", 
            element: "Eldur",
            lore: "Fehu táknar sögulega búfénað, sem var helsti mælikvarðinn á auð í norrænu samfélagi. Hún táknar efnislega velmegun, fjárhagslegan ávinning og sameiginlegan lífskraft. Á andlega sviðinu minnir Fehu okkur á að auður verður að flæða til að gagnast, rétt eins og búfé verður að vera fóðrað og verslað með. Hún er tengd skapandi viðleitni og gnægð sem stafar af vinnusemi. Þetta er fyrsta rún Futharksins, sem markar upphaf og frummöguleika.",
            link: "https://is.wikipedia.org/wiki/F%C3%A9_(r%C3%BAn)"
        },
        { 
            name: "Uruz", 
            symbol: "ᚢ", 
            meaning: "Líkamlegur styrkur, heilsa, þrautseigja, hugrekki", 
            element: "Jörð",
            lore: "Uruz dregur nafn sitt af úruxan, risastóru villinauti sem nú er útdautt, sem táknaði fyrir forna víkinga ósigrandi hráan styrk, líkamlegan þrótt og hugrekki. Þessi rún táknar orku, góða heilsu, mótstöðu gegn andstreymi og hæfileikann til að sigrast á erfiðleikum með hreinum viljastyrk. Hún er líka rún lífsskipta og þess innri styrks sem þarf til að hefja breytingar. Hún kennir að sönnum styrk verði að stýra af visku.",
            link: "https://is.wikipedia.org/wiki/%C3%9Ar"
        },
        { 
            name: "Thurisaz", 
            symbol: "ᚦ", 
            meaning: "Vernd, viðbragðsafl, átök, guðinn Þór", 
            element: "Eldur",
            lore: "Thurisaz táknar þyrninn eða jötuninn (Thurs). Hún er rún virkrar varnar, galdraverndar og hrás styrks sem beint er gegn utanaðkomandi ógnum. Hún tengist sterklega hamri Þórs (Mjöllni) og táknar kraftinn til að brjóta niður hindranir og bægja frá glundroða. Hins vegar ræður hún til varúðar: þyrnirinn verndar en getur líka sært ef ekki er farið með hann af visku. Það er sá höggkraftur sem nauðsynlegur er til að viðhalda kosmískri reglu gegn eyðileggjandi jötnum.",
            link: "https://is.wikipedia.org/wiki/%C3%9Eurs_(r%C3%BAn)"
        },
        { 
            name: "Ansuz", 
            symbol: "ᚨ", 
            meaning: "Viska, samskipti, innblástur, guðinn Óðinn", 
            element: "Loft",
            lore: "Ansuz er rún munnsins, hins helga orðs, skáldlegs innblásturs og guðlegra samskipta. Hún er beintengd Óðni, Alföðurnum, sem uppgötvaði rúnirnar eftir að hafa fórnað sér á trénu Yggdrasil. Ansuz færir vitsmunalegan skýrleika, skarpskyggni, góð ráð og listræna sköpunargáfu. Hún hvetur til virkrar hlustunar, stöðugs náms og skýrrar tjáningar á grundvallarsannindum. Hún ríkir yfir hinu skapandi orði.",
            link: "https://is.wikipedia.org/wiki/%C3%81ss_(r%C3%BAn)"
        },
        { 
            name: "Raido", 
            symbol: "ᚱ", 
            meaning: "Ferðalag, hjól, réttlæti, hreyfing", 
            element: "Loft",
            lore: "Raido kallar fram líkamlegt ferðalag með vagni eða á hestbaki, en einnig andlegt ferðalag eða vegferð sálarinnar. Hún felur í sér skipulega hreyfingu, takt lífsins, siðferðilega uppbyggingu og félagslegt réttlæti (eins og það sem gert var á Þinginu). Raido kennir okkur að halda takt við náttúrulegan takt alheimsins, að virða skuldbindingar okkar og að stýra gjörðum okkar samkvæmt ströngum siðareglum um heiður. Hún táknar þá réttu leið sem maður velur að fara.",
            link: "https://is.wikipedia.org/wiki/Rei%C3%B0_(r%C3%BAn)"
        },
        { 
            name: "Kenaz", 
            symbol: "ᚲ", 
            meaning: "Ljós, þekking, sköpunargáfa, kyndill", 
            element: "Eldur",
            lore: "Kenaz þýðir kyndillinn eða ljósvitinn. Það er rún opinberunar, skýrleika hugans, vitsmunalegrar uppljómunar og innblásins handverks. Hún lýsir upp myrkur fáfræðinnar og gerir manni kleift að sjá hlutina í þeirra sanna ljósi. Kenaz er einnig tengd skapandi ástríðu, innri eldi metnaðar, tækniþekkingu og neistanum sem breytir hrárri hugmynd í meistaraverk. Hún táknar smiðjuna og umbreytingu efnisins.",
            link: "https://is.wikipedia.org/wiki/Kaun"
        },
        { 
            name: "Gebo", 
            symbol: "ᚷ", 
            meaning: "Gjöf, örlæti, samstarf, jafnvægi", 
            element: "Loft",
            lore: "Gebo táknar athöfnina að gefa og þiggja í fullkomnu samræmi. Meðal víkinga innsigluðu gjafaskipti bandalög og komu á nauðsynlegu gagnkvæmu trausti. Þessi rún táknar jafnvægi í samböndum, helga viðskiptasamninga, gagnkvæma ást og félagslegt samræmi. Hún minnir á að hver gjöf kallar á mótgjöf og að hið sanna jafnvægi lífsins felst í örlátri deilingu og gagnkvæmri virðingu.",
            link: "https://is.wikipedia.org/wiki/Gj%C3%B6f_(r%C3%BAn)"
        },
        { 
            name: "Wunjo", 
            symbol: "ᚹ", 
            meaning: "Gleði, samræmi, árangur, ættartengsl", 
            element: "Jörð",
            lore: "Wunjo felur í sér tilfinninguna fyrir hreinni gleði, vellíðan, bræðralagi og sigri eftir harða baráttu. Það er fáninn sem plantað er á fjallstindinum, friðurinn eftir storminn. Hún stuðlar að samræmi innan fjölskyldu og ættbálks, sjálfsbirtingu og ánægju af vel unnu verki. Wunjo færir hugarró og styrkir vináttu- og ástarbönd. Það er gleði án þjáningar.",
            link: "https://is.wikipedia.org/wiki/Wynn"
        },
        { 
            name: "Hagalaz", 
            symbol: "ᚺ", 
            meaning: "Náttúruleg eyðilegging, hagl, róttæk breyting", 
            element: "Vatn",
            lore: "Hagalaz táknar hagl, eyðileggingarafl náttúrunnar sem maðurinn getur ekkert gert gegn. Það er rún óvæntra kreppu, róttækra umbrota og prófrauna sem brjóta niður óbreytt ástand. Þó hún sé eyðileggjandi er Hagalaz nauðsynleg: hagl bráðnar og verður að vatni, sem gerir jörðinni kleift að blómstra á ný. Hún táknar uppbyggilega eyðileggingu, sem þvingar einstaklinginn til að byggja upp á nýtt á traustari grunni. Hún er vígsluþrautin.",
            link: "https://is.wikipedia.org/wiki/Hagall"
        },
        { 
            name: "Nauthiz", 
            symbol: "ᚾ", 
            meaning: "Þörf, viðnám, þol, lífsafkoma", 
            element: "Eldur",
            lore: "Nauthiz táknar nauðsyn, þvingun og þörf. Hún kallar fram hefðbundinn núningseld sem kveiktur er á neyðarstundum. Það er rún þolinmæði, óvirkrar mótstöðu og hæfileikans til að lifa af við erfiðar aðstæður. Nauthiz kennir þrautseigju, listina að mæta skorti með hugrekki og viskuna til að bera kennsl á sannar lífsnauðsynjar okkar gagnvart hreinum yfirborðslegum löngunum. Hún er bandamaður í neyð.",
            link: "https://is.wikipedia.org/wiki/Nau%C3%B0"
        },
        { 
            name: "Isa", 
            symbol: "ᛁ", 
            meaning: "Ís, stöðnun, einbeiting, stífla", 
            element: "Vatn",
            lore: "Isa þýðir ís. Hún táknar tímabundna stöðnun, frystingu verkefna og þörfina á að staldra við og fylgjast með. Það er rún innri kyrrðar, mikillar andlegrar einbeitingar og varðveislu orku. Þegar stormurinn geisar úti ráðleggur Isa að bíða þolinmóður eftir að vötnin lægi. Það er hinn kyrrláti styrkur sem styrkir grunninn áður en gripið er til aðgerða. Hún kristallar viljann.",
            link: "https://is.wikipedia.org/wiki/%C3%8Dss_(r%C3%BAn)"
        },
        { 
            name: "Jera", 
            symbol: "ᛃ", 
            meaning: "Uppskera, hringrás ársins, verðlaun, tími", 
            element: "Jörð",
            lore: "Jera táknar uppskeruna og eilífu hringrás árstíðanna. Hún minnir á að öll heiðarleg viðleitni skilar góðum ávöxtum á sínum tíma. Það er rún verðskuldaðs árangurs, uppskeru í landbúnaði, náttúrulegrar gnægðar og þess tíma sem þarf til að verkefni þroskist. Jera ráðleggur hljóða þrautseigju: maður getur ekki flýtt fyrir vexti hveitis; hvern náttúrulegan áfanga verður að virða til að fá ríkulega uppskeru.",
            link: "https://is.wikipedia.org/wiki/%C3%81r_(r%C3%BAn)"
        }
    ,
        {
            name: 'Eihwaz',
            symbol: 'ᛇ',
            meaning: 'Dauði, vígsla, umbreyting, ýviður',
            element: 'Törð',
            lore: 'Eihwaz táknar ýviðinn (ý), heilagt evrópskt tré sem er þekkt fyrir sérstakan lífaldur sinn. Hún táknar hringrás eilífs lífs, og hefur bæði mátt dauðans (barrið og fræin eru mjög eitruð) og endurnýjunar. Vegna tvöfalda krókaformsins myndar hún brú sem tengir efri og neðri heima. Eihwaz kennir nauðsyn vígslubreytinga og táknræns dauða til að ná æðra meðvitundarstigi. Þetta er rún nauðsynlegrar yfirfærslu og djúprar sjálfsskoðunar.',
            link: 'https://is.wikipedia.org/wiki/%C3%9Dr_(r%C3%BAn)'
        },
        {
            name: 'Perthro',
            symbol: 'ᛈ',
            meaning: 'Örlög, tilviljun, leyndardómur, spádómur',
            element: 'Vatn',
            lore: 'Perthro táknar sögulega teningabikarinn eða ílátið sem notað var til að kasta rúnunum, og felur þannig í sér krafta tilviljunar, leiks og örlaga. Þetta er rún óupplýstra leyndardóma og leyndarmála alheimsins. Hún minnir okkur á að hvert val okkar passar inn í flókinn vef örlaganna (Wyrd), sem Nornirnar vefa. Perthro veitir dulspekilegan skýrleika, skerpir innsæi og hjálpar við lausn flókinna vandamála með því að afhjúpa það sem var falið.',
            link: 'https://en.wikipedia.org/wiki/Perthro'
        },
        {
            name: 'Elhaz',
            symbol: 'ᛉ',
            meaning: 'Vernd, vökulsemi, guðleg tenging',
            element: 'Loft',
            lore: 'Elhaz (eða Algiz) táknar verndarhorn elgsins eða líkamsstöðu manneskju sem teygir sig til himins í táknrænni ákalli. Þetta er öflug rún virkra varna og andlegrar verndar gegn ytri ógnum. Hún táknar einnig óbrjótandi tengsl manna við goðin og valkyrjurnar. Elhaz býður upp á rólega vökulsemi og upplyfting andans til að njóta góðs af náttúrulegri og kosmískri vernd.',
            link: 'https://en.wikipedia.org/wiki/Algiz'
        },
        {
            name: 'Sowilo',
            symbol: 'ᛊ',
            meaning: 'Sól, ljós, sigur, árangur',
            element: 'Eldur',
            lore: 'Sowilo táknar sólina í allri sinni dýrð og sköpunarmætti. Hún táknar sigur ljóssins yfir myrkrinu, andlega upplýsingu, árangur og lífsorku. Form hennar minnir á eldingu, sem færir tafarlausan dýnamískan styrk til að yfirstíga hindranir og láta metnað sinn rætast. Þetta er rún andlegra leiðbeinenda og kennara sem færa andlegan skýrleika og eyða efasemdum.',
            link: 'https://is.wikipedia.org/wiki/S%C3%B3l_(r%C3%BAn)'
        },
        {
            name: 'Tiwaz',
            symbol: 'ᛏ',
            meaning: 'Réttlæti, hugrekki, ábyrgð, guðinn Týr',
            element: 'Loft',
            lore: 'Tiwaz er beint tileinkuð guðinum Tý, guði réttláts stríðs, samfélagsreglu og laga. Örvarform hennar sem vísar upp á við táknar siðferðilegan réttlæti, hetjulegt hugrekki og sigur í orrustum sem barist er fyrir göfugum málefnum. Hún er nátengd persónulegri fórn og ábyrgð, og minnir á hvernig Týr fórnaði hægri hendi sinni til að fjötra Fenrisúlfinn og varðveita kosmískt jafnvægi.',
            link: 'https://is.wikipedia.org/wiki/T%C3%BDr_(r%C3%BAn)'
        },
        {
            name: 'Berkano',
            symbol: 'ᛒ',
            meaning: 'Fæðing, endurnýjun, frjósemi, móðurgyðja',
            element: 'Törð',
            lore: 'Berkano þýðir björk, brautryðjendatré sem er frægt fyrir seiglu sína og getu til hraðrar endurnýjunar. Hún felur í sér kvenlegan mátt móðurgyðjunnar, táknar frjósemi, móðurhlutverk og allar líkamlegar eða andlegar fæðingar. Form hennar minnir á brjóst ófrískrar konu, og færir góðviljaða vernd fyrir nýtt upphaf, lækningu og blómstrun skapandi hugmynda.',
            link: 'https://is.wikipedia.org/wiki/Bjarkan'
        },
        {
            name: 'Ehwaz',
            symbol: 'ᛖ',
            meaning: 'Hestur, hreyfing, ferðalag, sátt',
            element: 'Törð',
            lore: 'Ehwaz táknar hestinn, heilagt dýr og ómissandi félaga víkinga, sem táknar skipulega hreyfingu, líkamlegt eða andlegt ferðalag og uppgötvun. Form hennar bendir til fullkominnar sáttar og gagnkvæms trausts milli knapa og hests. Þetta er rún flæðandi umskipta, sem einnig tengir heim lifenda við heim dauðra með því að flytja sálir.',
            link: 'https://is.wikipedia.org/wiki/Ehwaz'
        },
        {
            name: 'Mannaz',
            symbol: 'ᛗ',
            meaning: 'Maður, samfélag, meðvitund, sátt',
            element: 'Loft',
            lore: 'Mannaz þýðir maður í skilningi manneskju og mannkyns. Hún táknar samfélagslega aðlögun, samvinnu, samstöðu innan ættarinnar og sameiginlega andlega meðvitund. Þetta er rúnin sem tengir hugann við kosmíska og guðlega krafta. Mannaz kennir mikilvægi þess að lifa í fullkomnu jafnvægi við sjálfan sig og umhverfi sitt.',
            link: 'https://is.wikipedia.org/wiki/Ma%C3%B0ur_(r%C3%BAn)'
        },
        {
            name: 'Laguz',
            symbol: 'ᛚ',
            meaning: 'Vatn, innsæi, lífsorku, flæði',
            element: 'Vatn',
            lore: 'Laguz táknar vatn í öllum sínum myndum: sjóinn, vötn eða straumharðar ár. Bylgjuform hennar táknar náttúrulegt flæði lífsins, líffræðilegan lífsþrótt og vöxt plantna. Þetta er rún djúpra tilfinninga, innsæis, skyggnigáfu og getu til að láta sig berast með takti alheimsins til að koma á meiriháttar breytingum.',
            link: 'https://is.wikipedia.org/wiki/L%C3%B6gur_(r%C3%BAn)'
        },
        {
            name: 'Ingwaz',
            symbol: 'ᛜ',
            meaning: 'Frjósemi, möguleikar, heimilisvernd, guðinn Yngvi',
            element: 'Törð',
            lore: 'Ingwaz táknar eggið eða lokaða fræið, sem geymir í sér alla þá möguleika sem nauðsynlegir eru til að nýtt líf blómstri. Hún er tileinkuð guðinum Yngva (Frey) og táknar frjósemi, skapandi meðgöngu og samþjöppun orku fyrir aðgerðir. Lokað tígullaga form hennar virkar einnig sem öflugur verndargripur fyrir heimilið og yfirstandandi verkefni.',
            link: 'https://is.wikipedia.org/wiki/Ingwaz'
        },
        {
            name: 'Othalaz',
            symbol: 'ᛟ',
            meaning: 'Forfeður, óðal, andlegur arfur',
            element: 'Törð',
            lore: 'Othalaz táknar hið heilaga fjölskylduóðal og land sem er numið frá forfeðrum. Þetta er rún ættarinnar, og hins andlega, efnislega og menningarlega arfs sem safnast hefur upp í gegnum kynslóðir. Hún kennir mikilvægi þess að samþætta arfleifð fortíðarinnar í nútíð okkar til að ljúka andlegu ferðalagi okkar. Form hennar verndar fjölskylduna og styrkir samstöðu hópsins.',
            link: 'https://is.wikipedia.org/wiki/%C3%93%C3%B0al_(r%C3%BAn)'
        },
        {
            name: 'Dagaz',
            symbol: 'ᛞ',
            meaning: 'Dagur, vakning, loka ljós, umbreyting',
            element: 'Eldur',
            lore: 'Dagaz er tuttugasta og fjórða og síðasta rún Futharksins, og markar lok og uppfyllingu andlega ferðalagsins. Hún þýðir dagurinn, dögunin og hinn sigursæli ljómi andlegrar vakningar. Stundaglas- eða óendanleikaform hennar táknar fullkomið jafnvægi andstæðna, bandalag ljóss og skugga, og upphaf nýs, bjartari lífsferils.',
            link: 'https://is.wikipedia.org/wiki/Dagur_(r%C3%BAn)'
        }],
    mythology: [
        {
            title: 'Heimdallur og Bifröst',
            description: 'Hinn vökuli vörður goðanna sem gætir hinnar brennandi regnbogabrúar Bifrastar.',
            lore: 'Heimdallur er hinn vökuli vörður Ásgarðs. Hann er sonur níu mæðra og gæddur ótrúlegum yfirnáttúrulegum hæfileikum: hann þarf minni svefn en fugl, sér meira en hundrað mílur dags sem nætur, og heyrn hans er svo næm að hann heyrir grasið vaxa á jörðinni og ullina vaxa á kindum. Hann býr í Himinbjörgum við enda Bifrastar, brennandi regnbogabrúarinnar sem tengir Miðgarð við Ásgarð. Heimdallur á sverðið Höfuð og blæs í hornið Gjallarhorn þegar hætta steðjar að, en hljómur þess heyrist um alla níu heima og mun kalla goðin saman til hinstu orrustu við Ragnarök.',
            image: 'assets/heimdall.png',
            link: 'https://is.wikipedia.org/wiki/Heimdallur'
        },
        {
            title: 'Baldur, hin harmræna ljós',
            description: 'Guð ljóss, friðar og fegurðar, hvers harmrænt fall boðaði endalok heimsins.',
            lore: 'Baldur er sonur Óðins og Friggjar. Hann er guð ljóssins, fegurðarinnar, viskunnar og réttlætisins og var elskaður af öllum fyrir gæsku sína. Þegar Baldur fór að dreyma feigðardrauma gekk Frigg móðir hans um alla heima og tók loforð af öllum lifandi verum, plöntum og frumefnum að skaða hann aldrei. Aðeins hinn ungi og ómerkilegi mistilteinn var talinn of skaðlaus til að vinna eið. Loki komst að þessu með slægð, bjó til pílu úr mistilteini og plataði hinn blinda bróður Baldurs, Höð, til að kasta henni að honum í leik goðanna. Pílan smaug í gegnum Baldur og varð honum að bana. Þessi harmleikur varð goðunum að gríðarlegri sorg og braut helgan frið Ásgarðs, sem leiddi óhjákvæmilega til Ragnaraka.',
            image: 'assets/balder.png',
            link: 'https://is.wikipedia.org/wiki/Baldur'
        },

        { 
            title: "Yggdrasil", 
            description: "Hinn risastóri heimstré sem ber uppi níu heima norræns alheims.", 
            lore: "Yggdrasil er risastórt asktré en bygging þess skipuleggur norræna alheiminn með því að tengja saman níu heima (þar á meðal Ásgarð, ríki Ásanna, Miðgarð, land mannanna, og Niflheim, ríki ísanna). Á tindinum situr tignarlegur örn, en drekinn Níðhöggur nagar linnulaust djúpar rætur þess og skapar varanlega kosmíska spennu. Íkorninn Ratatoskr hleypur eftir stofninum til að bera móðgandi skilaboð á milli arnarins og drekans, tákn um ósætti og alhliða samskipti. Þetta er líka tréð þar sem Óðinn hékk sjálfur í níu daga og níu nætur, særður af sínu eigin spjóti Gungni, til að komast að leyndarmálum galdrarúnanna.",
            image: "assets/yggdrasil.png",
            link: "https://is.wikipedia.org/wiki/Yggdrasill"
        },
        { 
            title: "Óðinn", 
            description: "Alföðurnum, æðsti stjórnandi Ásgarðs, guð stríðs, visku og galdra.", 
            lore: "Óðinn ræður yfir Ásgarði frá hásæti sínu Hliðskjálf. Flókinn guð með óseðjandi þorsta í þekkingu, hann hikar ekki við að brjóta neinar siðferðilegar eða samfélagslegar reglur til að öðlast stefnumótandi forskot gagnvart örlögunum. Hann fórnaði öðru auga sínu við brunn Mímis fyrir einn sopa af visku, og hékk á Yggdrasil til að afhjúpa leyndarmál rúnanna. Þar að auki, upptekinn af kvíða fyrir Ragnarökum, þorði hann að fara yfir kynjamörk með því að biðja gyðjuna Freyju að kenna sér Seið (kvenlega galdra). Þetta brot færði honum opinberar móðganir frá Loka, sem kallaði hann kvenlegan (ergi) í kvæðinu Lokasennu. Óðinn er stöðugt í fylgd hrafna sinna Hugins og Munins, úlfa sinna Gera og Freka, og ríður átta fóta hestinum Sleipni. Hann safnar sálum hugrakkra stríðsmanna (Einherja) til Valhallar til undirbúnings hinum óhjákvæmilega heimsendi.",
            image: "assets/odin.png",
            link: "https://is.wikipedia.org/wiki/%C3%93%C3%B0inn"
        },
        { 
            title: "Þór", 
            description: "Þrumuguðinn, hrár styrkur og þrotlaus verndari mannkyns gegn jötnum.", 
            lore: "Elsti sonur Óðins og jarðargyðjunnar Jörð, Þór er sterkastur allra norrænna guða. Hann ferðast um himininn í logandi vagni sem dreginn er af tveimur töfrahöfrum hans, Tanngrisni og Tanngnjósti. Vopnaður goðsagnakenndum hamri sínum Mjöllni, smíðuðum af dvergunum Brokk og Eitri, hrekur hann miskunnarlaust til baka árásir hrímþursa Jötunheima. Ólíkt föður sínum Óðni, sem kýs frekar klæki og samsæri, er Þór beinskeytt persóna, verndari Miðgarðs (land mannanna), sem táknar frjósemi rigningarinnar og tafarlaust réttlæti. Í Ragnarökum mun hann mæta risaorminum Jörmungandi í títanískum einvígi, og takast að fella hann áður en hann lætur sjálfur undan eitri hans eftir að hafa tekið aðeins níu skref.",
            image: "assets/thor.png",
            link: "https://is.wikipedia.org/wiki/%C3%9E%C3%B3rr"
        },
        { 
            title: "Freyja", 
            description: "Gyðja fegurðar, ástar, frjósemi og upphafsmaður leynilegra galdra Seiðs.", 
            lore: "Gyðja úr ætt Vana, Freyja býr í hinni stórkostlegu höll Fólkvangi. Samkvæmt goðafræði hefur hún þau forréttindi að taka á móti í himneskan sal sinn, Sessrúmni, fyrri helmingi stríðsmanna sem deyja í bardaga, hinn helmingurinn fer til Valhallar Óðins. Drottning fegurðar og ástríðu, hún á töfrahálsmenið Brísingamen og skikkju úr fálkafjöðrum sem gerir henni kleift að fljúga á milli heima. Hún ferðast í vagni dregnum af tveimur risastórum bláum köttum. Freyja er einnig alger meistari Seiðs, öflugs shamanisks galdurs sem tengist stjórnun örlaga og spádómum, sem hún sjálf kenndi Óðni og innleiddi Ásana í þessa dulspekilegu iðkun sem eitt sinn var framandi ættbálki þeirra.",
            image: "assets/freyja.png",
            link: "https://is.wikipedia.org/wiki/Freyja"
        },
        { 
            title: "Loki", 
            description: "Kænslni og hamrammi guðinn, sáandi glundroða og faðir heimsendaskrímsla.", 
            lore: "Sonur jötunsins Fárbauta en bundinn Óðni blóðbræðrabandi, Loki er tvíræður og ófyrirsjáanlegur karakter. Með gýgnum Angrboðu gat hann af sér þrjár plágur alheimsins: risaúlfinn Fenri, Miðgarðsorminn Jörmungand, og Hel, drottningu dauðraríkisins. Eftir að hafa skipulagt morðið á guðinum Baldri af afbrýðisemi, var Loki fangaður og fjötraður af guðunum undir jörðinni með innyflum síns eigin sonar, og eiturormur lét drjúpa eitri á andlit hans. Krampaflog hans af sársauka valda jarðskjálftum í Miðgarði. Í Ragnarökum munu bönd hans slitna og hann mun taka við stjórn hins ógnvekjandi skips Naglfars, leiða her jötna og hinna fordæmdu gegn Ásgarði áður en hann og vörður guðanna Heimdallur drepa hvorn annan.",
            image: "assets/loki.png",
            link: "https://is.wikipedia.org/wiki/Loki"
        },
        { 
            title: "Úlfurinn Fenrir og Örlögin", 
            description: "Risastóri úlfurinn sem er fangi í Ásgarði, tákn um óhjákvæmileika örlaganna (Urður).", 
            lore: "Fenrir, voðalegur sonur Loka og Angrboðu, ólst upp meðal Ásanna í Ásgarði. Fljótlega var aðeins guðinn Týr sá eini sem hafði hugrekki til að gefa honum að borða vegna ógnvekjandi vaxtar hans og grimmdar. Hvers vegna drápu guðirnir hann ekki? Af tveimur grundvallarástæðum: Annars vegar heilagleiki Ásgarðs (Vé), óbrjótanlegs helgidóms sem var stranglega bannað að saurga með blóði úlfsins. Hins vegar alger trú á Örlögin: það var ómögulegt að drepa úlfinn því Nornirnar höfðu ákveðið að hann myndi lifa af til Ragnaröka. Guðirnir beittu því brögðum til að fjötra hann með Gleipni, töfrasilkiborða sem dvergarnir smíðuðu. Grunsamur, samþykkti Fenrir aðeins að láta binda sig ef einn guð myndi setja hönd sína í gin hans að veði; aðeins Týr bauð sig fram og missti úlnlið sinn. Fenrir mun vera fjötraður á einangraðri eyju til Ragnaröka, þegar hann mun brjóta bönd sín til að gleypa Óðin.",
            image: "assets/fenrir.png",
            link: "https://is.wikipedia.org/wiki/Fenrir"
        },
        { 
            title: "Rán og Helgafell", 
            description: "Aðrir heimar norræna handanlífsins fyrir drukknaða og forfeður.", 
            lore: "Handanlíf víkinga takmarkaðist ekki við tvíhyggjuna milli Valhallar og Heljar. Fyrir siðmenningu sem sneri að hafinu, var dauðinn á sjó stöðugt áhyggjuefni. Druknaðir sjómenn og stríðsmenn fóru hvorki til Óðins né Heljar; þeir voru fangaðir í gríðarstóru neti Ránar, sjávargyðjunnar, til að halda eilífa veislu í vatnahöll hennar. Önnur mjög sterk trú, sérstaklega áberandi í Íslendingasögunum, var trúin á Helgafell. Hinir látnu í sömu fjölskyldu fóru ekki til fjarlægs ríkis, heldur fóru þeir að búa friðsamlega saman inni í fjalli nálægt sögulegum bóndabæ sínum. Hinir lifandi gátu stundum horft í átt að fjallinu og ímyndað sér forfeður sína drekka og hlæja umhverfis stóran eld, og þannig festu þeir dauða sína beint í daglega landslagi hinna lifandi.",
            image: "assets/ran.png",
            link: "https://is.wikipedia.org/wiki/R%C3%A1n"
        },
        { 
            title: "Ragnarök", 
            description: "Heimsendaspádómurinn sem lýsir endalokum tímans og endurfæðingu hreins heims.", 
            lore: "Ragnarök hefjast með Fimbulvetri, þremur samfelldum vetrum algjörrar hörku án nokkurs sumars á milli, sem brýtur niður mannlegt siðgæði og steypir Miðgarði í bræðravíg. Úlfarnir Sköll og Hati munu gleypa sólina og tunglið og steypa alheiminum í myrkur. Fjötrar Loka og úlfsins Fenris munu brotna, ormurinn Jörmungandur mun spretta upp úr hafdjúpunum, og eldþursinn Surtur mun leiða her Múspellsheims til árásar á Ásgarð. Í lokaorrustunni á Vígríðarvelli mun Óðinn verða gleyptur af Fenri, Þór mun drepa Jörmungand áður en hann lætur undan eitri hans eftir níu skref, og Loki og Heimdallur munu drepa hvorn annan. Surtur mun kveikja í öllum alheiminum, eyða trénu Yggdrasil. En úr þessari eyðileggingu mun ný jörð fæðast, frjósöm og hrein, stíga upp úr vötnunum, þar sem eftirlifandi guðir og manneskjupar munu byggja upp nýja friðaröld.",
            image: "assets/ragnarok.png",
            link: "https://is.wikipedia.org/wiki/Ragnar%C3%B6k"
        },
        {
            title: "Kosmísk Landfræði",
            description: "Ríkin og Virkin sem tengja greinar Yggdrasils í þrívídd.",
            lore: "<p>Þar sem Yggdrasil og heimarnir níu tilheyra goðafræði og ekki mannkynssögu eða landfræði jarðarinnar, þá eru engar eiginlegar „borgir“ eða „dagsetningar“. Í staðinn er landfræði norrænnar goðafræði skipulögð eftir Heimstrénu.</p><p>Þó það séu engar manngerðar „borgir“, hýsa hinir ýmsu heimar risastór virki og tignarlega sali þar sem guðir og jötnar búa. Hér eru helstu staðir þessa alheims:</p>\n\n<table class=\"codex-table\">\n    <thead>\n        <tr>\n            <th>Ríki</th>\n            <th>Virki / Salur</th>\n            <th>Lýsing og Mikilvægi</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td><strong>Ásgarður</strong></td>\n            <td>Valhöll</td>\n            <td>Salur hinna sem féllu í orrustu, stjórnað af Óðni. Þak hennar er gert úr skjöldum og sperrur hennar úr spjótum.</td>\n        </tr>\n        <tr>\n            <td><strong>Ásgarður</strong></td>\n            <td>Bilskirnir</td>\n            <td>Risastórt höfðingjasetur guðsins Þórs, sem inniheldur 540 herbergi af gríðarlegri stærð.</td>\n        </tr>\n        <tr>\n            <td><strong>Miðgarður</strong></td>\n            <td>Mannheimar</td>\n            <td>Ríki mannanna, umkringt óyfirstíganlegu hafi þar sem ormurinn Jörmungandur sefur.</td>\n        </tr>\n        <tr>\n            <td><strong>Jötunheimar</strong></td>\n            <td>Útgarður</td>\n            <td>Risastórt virki hrímþursa, stjórnað af galdrakonunginum Útgarða-Loka. Veggir þess eru svo háir að ekki sér yfir þá.</td>\n        </tr>\n        <tr>\n            <td><strong>Jötunheimar</strong></td>\n            <td>Járnviður</td>\n            <td>„Járnskógurinn“, drungalegur skógur þar sem tröllkonur ala risastóra og skelfilega úlfa.</td>\n        </tr>\n        <tr>\n            <td><strong>Helheimur</strong></td>\n            <td>Éljúðnir</td>\n            <td>Köld höll gyðjunnar Heljar. Þangað er farið yfir brú sem lögð er glóandi gulli (Gjallarbrú) yfir ána Gjöll.</td>\n        </tr>\n    </tbody>\n</table>",
            image: "assets/cosmic_map.png",
            link: "https://is.wikipedia.org/wiki/N%C3%ADu_heimar"
        },
        {
            title: "Kosmísk Tímatal",
            description: "Hringrásir og aldir norræna goðafræðilega alheimsins.",
            lore: "<p>Tími í norrænni goðafræði er ekki mældur í árum, heldur í stórum kosmískum hringrásum sem leiða óhjákvæmilega að endalokum tímans og stöðugri endurnýjun.</p>\n\n<div class=\"codex-timeline\">\n    <div class=\"timeline-item\">\n        <div class=\"timeline-dot\"></div>\n        <div class=\"timeline-title\">Sköpunin upp úr Ginnungagapi <span class=\"timeline-era\">Uppruninn</span></div>\n        <div class=\"timeline-desc\">Í upphafi var aðeins tóm (Ginnungagap) milli elds Múspellsheims og íss Niflheims. Úr samruna þeirra varð til frumjötunninn Ýmir. Óðinn og bræður hans drepa Ými og nota lík hans til að móta Miðgarð (Jörðina), bein hans urðu að fjöllum og blóð hans að höfunum.</div>\n    </div>\n    <div class=\"timeline-item\">\n        <div class=\"timeline-dot\"></div>\n        <div class=\"timeline-title\">Stríð Guðanna og Gullöldin <span class=\"timeline-era\">Gullöldin</span></div>\n        <div class=\"timeline-desc\">Fyrsta stríð alheimsins brýst út á milli Ása (stríðsguða) og Vana (frjósemisguða). Því lýkur með friði og gíslaskiptum. Guðirnir byggja Ásgarð og njóta friðartíma þar sem þeir smíða fjársjóði úr gulli.</div>\n    </div>\n    <div class=\"timeline-item\">\n        <div class=\"timeline-dot\"></div>\n        <div class=\"timeline-title\">Sköpun Mannkyns <span class=\"timeline-era\">Öld Mannanna</span></div>\n        <div class=\"timeline-desc\">Meðan Óðinn, Vili og Vé gengu á strönd Miðgarðs, finna þeir tvo trjáboli sem höfðu rekið á land. Þeir gefa þeim líf, anda og mannlegt form og sköpuðu þannig Ask (asktréð, fyrsti maðurinn) og Emblu (álmurinn, fyrsta konan).</div>\n    </div>\n    <div class=\"timeline-item\">\n        <div class=\"timeline-dot\"></div>\n        <div class=\"timeline-title\">Banvænn Vetur (Fimbulvetur) <span class=\"timeline-era\">Rökkrið</span></div>\n        <div class=\"timeline-desc\">Þetta er fyrirboði endalokanna. Miskunnarlaus vetur skellur á Miðgarði í þrjú ár samfleytt, án nokkurs sumars á milli. Menn, knúnir áfram af hungri, drepa hver annan, brjóta öll helg tabú og blóðbönd.</div>\n    </div>\n    <div class=\"timeline-item\">\n        <div class=\"timeline-dot\"></div>\n        <div class=\"timeline-title\">Ragnarök <span class=\"timeline-era\">Endalok Tímans</span></div>\n        <div class=\"timeline-desc\">Töfraböndin slitna. Úlfurinn Fenrir, ormurinn Jörmungandur og her eldþursa ganga á Ásgarð. Í epískum einvígum, drepa nánast allir guðir (þar á meðal Óðinn og Þór) og skrímsli hvorn annan. Jötunninn Surtur kveikir í Heimstrénu og öllum alheiminum með logandi sverði sínu.</div>\n    </div>\n    <div class=\"timeline-item\">\n        <div class=\"timeline-dot\"></div>\n        <div class=\"timeline-title\">Endurnýjunin <span class=\"timeline-era\">Næsta Hringrás</span></div>\n        <div class=\"timeline-desc\">Logarnir slokkna og jörðin stígur upp aftur, græn og hrein. Lítill hópur ungra guða (þar á meðal Baldur og synir Þórs) komast af. Faldir inni í helgum viði Yggdrasils, hafa tvær manneskjur, Líf og Lífþrasir, lifað af heimsendinn og koma fram til að endurbyggja þennan nýja heim.</div>\n    </div>\n</div>",
            image: "assets/cosmic_clock.png",
            link: "https://is.wikipedia.org/wiki/Ragnar%C3%B6k"
        }
    ],
    characters: [
        {
            name: 'Haraldur blátönn',
            role: 'Sameiningarkonungur og smiður',
            bio: 'Hinn goðsagnakenndi konungur sem sameinaði Danmörku og Noreg og veitti nafninu á Bluetooth-tækninni innblástur.',
            lore: 'Haraldur Gormsson, kallaður blátönn, ríkti yfir Danmörku frá 958 til 986. Viðurnefni hans stafaði líklega af dauðri tönn sem virtist dökkblá. Stærsta afrek hans var stjórnmálaleg og trúarleg sameining dönsku ættbálkanna undir krúnu hans og hægfara kristnun þeirra, sem er ritað á hinum fræga Jelling-rúnasteini. Hann byggði einnig net hringlaga virkja (Trelleborg) til að styrkja konungsvald sitt. Árið 1997 sóttu höfundar nýrrar þráðlausrar tækni innblástur í sameiningararf hans til að nefna hana „Bluetooth“ og völdu merki sem sameinar rúnastafi upphafsstafa hans: Hagall (ᚼ) og Berkanan (ᛒ).',
            image: 'assets/harald_bluetooth.png',
            link: 'https://is.wikipedia.org/wiki/Haraldur_bl%C3%A1t%C3%B6nn'
        },
        {
            name: 'Eiríkur rauði',
            role: 'Landkönnuður og landnámsmaður',
            bio: 'Hinn skapstóri víkingahöfðingi sem, eftir að hafa verið gerður útlægur frá Íslandi fyrir víg, stofnaði fyrstu varanlegu norrænu byggðirnar á Grænlandi.',
            lore: 'Eiríkur Þorvaldsson, kallaður hinn rauði vegna rauðs hárs og skeggs, fæddist í Noregi. Eftir að faðir hans var gerður útlægur fyrir víg settist fjölskyldan að á Íslandi. Eiríkur erfði ofbeldisfullt skapgerðarfar ættar sinnar og var á endanum dæmdur skógarmaður og gerður útlægur frá Íslandi í þrjú ár eftir blóðugar deilur. Hann varði útlegðinni í að kanna gríðarstórt, leyndardómsfullt land í vestri. Til að laða að landnámsmenn til að stofna þar búsetu nefndi hann landið „Grænland“. Árið 985 leiddi hann 25 skipa flota til að stofna tvær blómlegar nýlendur sem stóðu í aldir. Hann var virtur leiðtogi Grænlendinga til dauðadags og hélt fast í heiðna trú sína þrátt fyrir tilraunir sonar hans, Leifs heppna, til að breiða út kristni.',
            image: 'assets/erik_the_red.png',
            link: 'https://is.wikipedia.org/wiki/Eir%C3%ADkur_rau%C3%B0i'
        },
        {
            name: 'Hrafna-Flóki Vilgerðarson',
            role: 'Sjófarandi og landnámsmaður',
            bio: 'Fyrsti norræni maðurinn sem sigldi viljandi til Íslands, stýrður yfir hafið af þremur hröfnum sínum.',
            lore: 'Hrafna-Flóki Vilgerðarson var mikill landkönnuður á 9. öld. Eftir að hafa heyrt sögur af dularfullri eyju í norðri sigldi hann af stað til að setjast þar að. Til að rata yfir reginhaf notaði hann þrjá hrafna sem hann sleppti á leiðinni: sá fyrsti flaug aftur til baka, sá annar flaug hátt upp og sneri aftur til skips, en sá þriðji flaug fram á við og vísaði honum beint til landsins. Hann nam land á Barðaströnd, en vegna þess að hann hugaði ekki að heyskap fyrir búfénaðinn fyrir hinn harða vetur fórust allar skepnur hans. Vonsvikinn og horfandi yfir fjörðinn fullan af rekís nefndi hann landið „Ísland“. Þótt hann hafi fyrst horfið aftur til Noregs sneri hann síðar aftur og settist að til frambúðar.',
            image: 'assets/floki_vilgerdarson.png',
            link: 'https://is.wikipedia.org/wiki/Hrafna-Fl%C3%B3ki_Vilger%C3%B0arson'
        },
        {
            name: 'Haraldur harðráði',
            role: 'Væringi og konungur',
            bio: 'Hinn ógnvekjandi leiðtogi Væringjasveitarinnar í Miklagarði og konungur Noregs, hvers fall árið 1066 markar lok víkingaaldar.',
            lore: 'Haraldur Sigurðsson, kallaður harðráði, lifði lífi sem var verðugt hetjusagna. Eftir ósigur hálfbróður hans, Ólafs helga, á Stiklastöðum árið 1030, flýði hann til Garðaríkis og síðan til Miklagarðs. Þar varð hann foringi hinnar úrvals Væringjasveitar og safnaði gríðarlegum auði í herferðum frá Miðjarðarhafi til Litlu-Asíu. Hann sneri aftur til Noregs árið 1046 og tók við konungdómi. Árið 1066 gerði hann tilkall til ensku krúnunnar. Innrás hans var stöðvuð í orrustunni við Stamford-brú þar sem hann féll eftir að hafa fengið ör í kverkina. Fall hans markar jafnan lok víkingaaldar og lok hinna miklu landvinninga norrænna manna.',
            image: 'assets/harald_hardrada.png',
            link: 'https://is.wikipedia.org/wiki/Haraldur_har%C3%B0r%C3%A1%C3%B0i'
        },

        { 
            name: "Ragnar Loðbrók", 
            role: "Goðsagnakenndur konungur og stríðsherra", 
            bio: "Norræn hetja sem varð fræg fyrir djarfar ránsferðir sínar og sorgleg endalok í snákagryfju.", 
            lore: "Ragnar Loðbrók er hálf-söguleg, hálf-goðsagnakennd persóna sem trónaði á toppi norrænu sagnanna á 9. öld. Þekktur fyrir djarfar hernaðaráætlanir sínar, skipulagði hann fjölmargar hrikalegar ránsferðir gegn Frakklandi (setti umsátur um París 845 og fékk gríðarlegt lausnargjald í silfri frá Karli Sköllótta) og Englandi. Endalok hans eru goðsagnakennd: fangaður af Aellu konungi af Norðymbralandi, var honum kastað lifandi í gryfju fulla af eitruðum snákum. Áður en hann dó, hélt hann hetjulega kveðjuræðu og spáði fyrir um að synir hans („smágrísirnir“) myndu koma til að hefna dauða hans með fordæmalausri reiði, sem leiddi beint til innrásar Mikla heiðingjahersins á Englandi.",
            image: "assets/ragnar.png",
            link: "https://is.wikipedia.org/wiki/Ragnar_lo%C3%B0br%C3%B3k"
        },
        { 
            name: "Stúlkan frá Birku (Bj 581)", 
            role: "Úrvals herforingi", 
            bio: "Óhrekjanlegar fornleifa- og erfðafræðilegar sannanir fyrir bardagahlutverki víkingakvenna.", 
            lore: "Grafhýsið „Bj 581“, sem uppgötvaðist 1889 í Birku í Svíþjóð, hefur lengi verið kynnt af sagnfræðingum sem dæmigerð gröf mikils karlkyns herforingja. Hún innihélt alhliða og glæsilegan herbúnað: sverð, öxi, spjót, brynbrjótandi örvar, tvo skjöldu, beinagrindur tveggja fórnarhesta og Hnefataflsborð (kænsku- og stefnumótunarleikurinn sem var frátekin fyrir herforingja). Hins vegar, árið 2017, sönnuðu beinagreining ásamt fornu DNA-rannsókn vísindalega að þessi beinagrind tilheyrði í raun líffræðilegri konu. Þessi byltingarkennda uppgötvun skók heim fornleifafræðinnar og neyddi sagnfræðinga til að endurmeta pólitískt og hernaðarlegt hlutverk kvenna í norrænu samfélagi, og staðfesti loks sögulegan raunveruleika hinna goðsagnakenndu skjaldmeyja sem sungið var um í Íslendingasögum.",
            image: "assets/shieldmaiden.png",
            link: "https://en.wikipedia.org/wiki/Birka_female_Viking_warrior"
        },
        { 
            name: "Leifur Eiríksson", 
            role: "Framúrskarandi sæfari og landkönnuður", 
            bio: "Sonur Eiríks rauða og fyrsti Evrópumaðurinn til að stíga fæti á Norður-Ameríku, næstum 500 árum á undan Kólumbusi.", 
            lore: "Fæddur á Íslandi og uppalinn á Grænlandi, erfaði Leifur Eiríksson ævintýraþrá föður síns Eiríks rauða. Um árið 1000, leiddur af frásögnum kaupmannsins Bjarna Herjólfssonar sem hafði séð ókunn lönd í vestri, fór Leifur í sögulegan leiðangur. Hann sigldi í vestur og uppgötvaði Helluland (land flatra steina, nú Baffinsland), Markland (land skóganna, Labrador), og loks Vínland (land vínviðarins), sem fornleifafræðingar hafa formlega staðfest á staðnum L'Anse aux Meadows á Nýfundnalandi. Hann byggði þar stöðugar búðir og eyddi vetrinum áður en hann sneri aftur til Grænlands hlaðinn dýrmætum viði og vínberjum.",
            image: "assets/leif_erikson.png",
            link: "https://is.wikipedia.org/wiki/Leifur_heppni"
        },
        { 
            name: "Ívar beinlausi", 
            role: "Hernaðarsnillingur og ógnvænlegur foringi", 
            bio: "Sonur Ragnars loðbrókar, frægur fyrir grimmd sína, hernaðarsnilli og sigur á engilsaxneskum konungsríkjum.", 
            lore: "Ívar Ragnarsson, kallaður „beinlausi“, fær viðurnefni sitt annaðhvort vegna ofurhreyfanleika liðamóta, beinsjúkdóms eða ótrúlegrar fimi í bardaga. Þegar hann frétti af dauða föður síns Ragnars af höndum Aellu konungs, settu Ívar og bræður hans saman Mikla heiðingjaherinn (bandalag þúsunda norrænna stríðsmanna). Vegna yfirburða hernaðarsýnar Ívars, tók hann Jórvík árið 866, lagði undir sig Norðymbraland, og tók Aellu konung af lífi með aðferð sem kallast Blóðörninn. Hann hélt áfram landvinningum sínum með því að taka Austur-Anglíu og pína Játmund konung til dauða, og staðfesti sig sem einn af ógnvænlegustu og snjöllustu leiðtogum víkingaaldar.",
            image: "assets/ivar.png",
            link: "https://is.wikipedia.org/wiki/%C3%8Dvar_beinlausi"
        },
        { 
            name: "Lagertha", 
            role: "Skjaldmær og Jarl", 
            bio: "Ókúfanleg stríðskona, fyrsta eiginkona Ragnars loðbrókar og virtur stjórnandi að eigin verðleikum.", 
            lore: "Lagertha er lýst af sagnfræðingnum Saxo Grammaticus í *Gesta Danorum* sem konu með fádæma hugrekki sem barðist í fremstu röðum herjanna. Ragnar loðbrók varð ástfanginn af henni eftir að hafa orðið vitni að hugrekki hennar í orrustu í Noregi gegn Frø konungi. Til að vinna hönd hennar varð Ragnar að drepa björn og stóran villihund sem gættu heimilis hennar. Þótt þau hafi að lokum skilið að, var Lagertha trúr bandamaður: hún kom Ragnari til hjálpar árum síðar með 120 skipa flota til að bjarga ríki hans. Síðan sneri hún aftur til Noregs þar sem hún drap ofbeldisfullan annan eiginmann sinn til að stjórna löndum sínum ein sem virtur Jarl, sem felur í sér sjálfstæði og vald víkingakvenna.",
            image: "assets/lagertha.png",
            link: "https://en.wikipedia.org/wiki/Lagertha"
        }
    ],
    customs: [
        {
            topic: 'Hólmganga',
            description: 'Hinn strangt skilgreindi einvígisritúall til að útkljá deilur um heiður og eignir.',
            lore: 'Hólmganga var lögleg og viðurkennd aðferð á norðurslóðum til að leysa úr deilum um heiður, eignir eða móðganir þegar ákvarðanir Þingsins nægðu ekki til að sætta aðila. Ólíkt venjulegum slagsmálum fylgdi hólmgangan ströngum reglum: keppendur mættust á hólmi eða afmörkuðu svæði sem var afmarkað með heslistöfum, þar sem breiddur var út feldur sem var um þrír metrar á hvern veg. Hvor tveggja mátti hafa þrjá skildi; ef skjöldur bilaði mátti skipta, en þegar allir þrír voru ónýtir varð að berjast án varnar. Einvíginu lauk við fyrsta blóð eða uppgjöf, en gat stundum orðið banvænt. Að neita hólmgöngu var mikil skömm og leiddi til þess að maður var kallaður níðingur.',
            image: 'assets/holmgang.png',
            link: 'https://is.wikipedia.org/wiki/H%C3%B3lmganga'
        },
        {
            topic: 'Blót',
            description: 'Hin heilaga fórnarathöfn og samkomufagnaður til að heiðra norræn goð.',
            lore: 'Blót var miðlægur trúarlegur ritúall í norrænni trú, brú á milli manna og goða. Það var haldið við helgustu tímamót ársins (vetrarsólstöður fyrir jól, vorblót fyrir sigur, haustblót fyrir uppskeru) og stýrt af goða eða gýgju. Athöfnin fól í sér fórn á heilögum dýrum (hestum, svínum, nautgripum). Blóði dýranna (hlaut) var safnað í blótbolla og stökkt með hlautteinum á stalla, veggi og viðstadda til að flytja blessun og kraft goðanna. Kjöt dýranna var síðan soðið í stórum kötlum til blótveislunnar þar sem öl og mjöður var drukkið til heiðurs goðunum (Óðni fyrir sigur, Nirði og Frey fyrir ársæld og frið), sem styrkti samfélagsböndin.',
            image: 'assets/blot_ritual.png',
            link: 'https://is.wikipedia.org/wiki/Bl%C3%B3t'
        },

        { 
            topic: "Langskipin (Drekaskip)", 
            description: "Tæknileg meistaraverk skipasmíði, lykillinn að útbreiðslu víkinga.", 
            lore: "Langskipið eða drekaskipið (frá orðinu *dreki*, tilvísun í útskornar stafnlíkneski sem ætlað var að hræða landvætti óvina) er tæknileg perla Norðurlandabúa. Þessi langskip voru súðbyrt (eikarfjalir sem skarast og negldar saman með járni), sem gaf skrokknum gríðarlegan sveigjanleika gagnvart öldum Norður-Atlantshafsins. Vegna þess hve grunnt þau ristu (um 1 metra), gátu þau siglt bæði á opnu hafi og farið upp grunnar ár langt inn í landið. Nútíma fornleifafræði hefur grafið upp skipsgrafir af einstakri stærðargráðu, eins og Gjellestad-skipið í Noregi sem uppgötvaðist árið 2018 með jarðsjá, eða hin frægu Oseberg og Gokstad skip sem innihéldu ótrúlegar fórnargjafir.",
            image: "assets/drakkar.png",
            link: "https://is.wikipedia.org/wiki/Langskip"
        },
        { 
            topic: "Útfararsiðir", 
            description: "Hin helga för til handanlífsins, á milli brennslu á langskipum og risastórra grafhýsa.", 
            lore: "Dauðinn í víkingamenningu var talinn umskipti til annarrar efnislegrar tilveru þar sem menn héldu áfram að drekka, borða og berjast. Elítan naut íburðarmikilla helgisiða: hinum látna var komið fyrir í alvöru rúmi í viðartjaldi sem byggt var beint á þilfari grafins skips, stutt með æðardúnspúðum og umvafinn litríkum frásagnarteppum. Þessar grafir innihéldu ofgnótt af gripum (katla, beinkamba, diska) og gríðarlegar dýrafórnir til að þjóna sem reiðskjótar eða veiðifélagar (12 hestar og 6 hundar á Gokstad, 15 hestar á Oseberg, og meira að segja ránfuglar eða páfugl innfluttur frá Austurlöndum). Helgisiðirnir aðlöguðust einnig landfræðinni: á Bretlandseyjum voru skipsgrafir (eins og á Ardnamurchan eða Balladoole) notaðar til að sýna yfirráð yfir sigruðum þjóðum, á meðan á Íslandi neyddi krónískur skortur á viði landnámsmenn til að hætta við líkbrennslu í þágu hefðbundinna greftrana, þar sem útlínur skips voru einfaldlega dregnar með steinum á jörðinni.",
            image: "assets/rituel_funeraire.png",
            link: "https://is.wikipedia.org/wiki/Kumbl"
        },
        { 
            topic: "Seiður (Shamaniskir galdrar)", 
            description: "Hinn óttalegi galdur dásvefns, anda og stjórnun örlaga.", 
            lore: "Seiður var öflugasti og óttalegasti galdurinn í norræna heiminum. Tengdur stjórnun örlaga (Urður) og samskiptum við anda, gyðjan Freyja kenndi guðunum hann. Til að stunda Seið þurfti að fara í dáleiðandi ástand (trance) á meðan spádómsathöfnum stóð sem kallaðar voru Spá. Völvan („sú sem ber völinn“) sat á upphækkuðum palli (seiðhjallur) á meðan kór kvenna söng seiðandi lög (varðlokkur). Sokkin í dásvefn, stundum hjálpað af eitruðum jurtum eins og bolmurt, lét Völvan anda sinn ferðast út úr líkamanum til að spyrja út í framtíðina. Seiður hafði líka eyðileggjandi hlið (töfrabindingar eða bölvanir). Vegna þess að þessi óvirki og móttækilegi galdur var talinn ósamrýmanlegur karlmannsheiðri, var hver maður sem stundaði hann sakaður um ergi (skammarlega kvenlega hegðun) og gerður útlægur, þótt Óðinn sjálfur hefði lært hann af hreinni þráhuigju eftir þekkingu.",
            image: "assets/volva.png",
            link: "https://is.wikipedia.org/wiki/Sei%C3%B0ur"
        },
        { 
            topic: "Engill Dauðans", 
            description: "Hin óttalega útfararprestkona sem stýrði blóðfórnum.", 
            lore: "Hugtakið „Engill Dauðans“ kemur úr hinni einstöku sögulegu frásögn Ahmad Ibn Fadlan, arabísks erindreka sem tók eftir sænskum víkingum (Rúsum) við Volgu árið 921. Þessi aldraða, stóra og dökka kona var útfararprestkona með algjört vald, ekki ósvipuð hinum voldugu Völvum. Hún stjórnaði tíu daga hátíðarhöldunum fyrir bálförina, undirbjó lík látna höfðingjans (sem lá tímabundið í jörðinni á meðan ríkulegu silkifötin hans voru saumuð), og sinnti dauðaþægindum skipsins. Hræðilegasta hlutverk hennar náði hámarki í helgisiðamorðinu á unga þrælnum sem hafði boðist til að fylgja höfðingjanum í handanlífið. Eftir að hafa steypt ungu stúlkunni í ofskynjunarástand með áfengi og plöntum, tók Engill Dauðans hana sjálf af lífi með því að stinga hana inni í tjaldi skipsins á meðan mennirnir börðu skjöldu sína til að kæfa öskrin, og virkaði þannig sem hinn opinberi ferjumaður sálna til andaheimsins.",
            image: "assets/ange_mort.png",
            link: "https://en.wikipedia.org/wiki/Ahmad_ibn_Fadlan"
        },
        { 
            topic: "Grafir hinna lítilmótlegu og þræla", 
            description: "Hinn hrái og naumhyggjulegi raunveruleiki útfara fyrir lægri stéttir.", 
            lore: "Þótt skipsgrafir yfirstéttarinnar grípi hugann, þá vörðuðu þær aðeins 1% af skandinavísku samfélagi. Fyrir frjálsa bændur (Karlana), var tekist á við dauðann með raunsæi: lík voru annaðhvort brennd á einföldum básum eða grafin í grunnum flötum gröfum í stórum samfélagslegum grafreitum eins og Lindholm Høje í Danmörku. Skorti fjármagn til að fórna raunverulegum herskipum úr tré, notuðu fjölskyldur steina á jörðinni til að draga upp táknrænt útlínur þess. Gröf var takmörkuð við lífsnauðsynjar: einfaldur járnhnífur og stundum snældusnúður. Fyrir þræla var raunveruleikinn grimmur: við dauða þeirra voru þeir án athafnar kastaðir í holur frá gömlum byggingum eða bóndaskurði. Margir voru einnig fórnaðir sem 'fylgifiskar' við útför húsbænda sinna, teknir af lífi með kyrkingu eða afhöfðun, og jarðneskum leifum þeirra fundnar bundnar og kastað fyrir fætur grafar ríku höfðingjanna.",
            image: "assets/lindholm_hoje.jpg",
            link: "https://is.wikipedia.org/wiki/%C3%9Er%C3%A6ll"
        },
        { 
            topic: "Þingið", 
            description: "Hið lýðræðislega réttar- og stjórnmálakerfi sem stjórnaði þingum frjálsra manna.", 
            lore: "Öfugt við þá algengu trú að samfélagið væri einungis stjórnað af ofbeldi, bjuggu víkingar við mjög skipulagt réttarkerfi. Þingið var reglulegur stjórnmála- og dómstólafundur þar sem allir frjálsir menn ættbálksins komu saman til að lýsa yfir nýjum lögum, leysa úr viðskipta- eða sakamálum, kjósa leiðtoga, og skipuleggja hjónabönd. Því var stjórnað af *Lögsögumanni*, sem þurfti að fara með þriðjung af lögum landsins utan að á hverju ári. Ef alvarlegur glæpur var framinn, gat sakborningurinn verið gerður útlægur úr samfélaginu (lýstur skógarmaður), sem þýddi að hver sem er gat drepið hann án ótta við lagahefnd. Óleysanleg ágreiningsmál gat verið leyst með *Hólmgöngu*, helgisiða einvígi á lítilli eyju eða afmörkuðu svæði.",
            image: "assets/pierre_runique.jpg",
            link: "https://is.wikipedia.org/wiki/%C3%9Eing"
        },
        { 
            topic: "Berserkir", 
            description: "Hinir ógnvekjandi úrvals stríðsmenn uppfylltir hinni helgu heilögu reiði Óðins.", 
            lore: "Berserkir (orð sem líklega þýðir 'bjarnarskyrta' eða 'berir án brynju') voru úrvals dýrstríðsmenn vígðir dýrkun Óðins. Fyrir bardaga fóru þeir í dulrænt og tryllingslegt ástand sem kallast *berserksgangur*. Í þessu ástandi stjórnlausrar reiði, urðu þeir ónæmir fyrir sársauka, gáfu frá sér villidýrsöskur, bitu í brúnir tréskjalda sinna og gerðu árás á óvininn í fremstu röð án málmbrynju, einfaldlega klæddir bjarndýrs- eða úlfaskinni (þeir síðarnefndu kölluðust *Úlfhéðnar*). Þetta dáleiðsluástand var kallað fram með sameiginlegri inntöku villtra jurtasoða, miklu magni af sterku miði, eða með sálrænum helgisiðum sameiginlegrar sjálfsdáleiðslu. Þeir voru óttaðir jafnt af óvinum sem eigin félögum vegna vanhæfni þeirra til að greina vini frá fjandmönnum þegar reiðin var leyst úr læðingi.",
            image: "assets/berserker.png",
            link: "https://is.wikipedia.org/wiki/Berserkur"
        }
    ],
    history: [
        {
            topic: "Söguleg Landfræði",
            description: "Landnám víkinga út yfir köld höf og stórar ár Evrópu.",
            lore: "<p>Landsvæði víkinga stækkaði langt út fyrir ísköld landamæri sín þökk sé framúrskarandi tökum þeirra á siglingum (hin frægu drekaskip, eða <em>langskip</em>).</p><blockquote>Útþensla víkinga fór fram í tvær megináttir: Danir og Norðmenn sigldu í vestur (Vestur-Evrópu, Norður-Atlantshaf), en Svíar (oft kallaðir Væringjar eða Rúsar) sigldu í austur, meðfram rússnesku fljótunum.</blockquote><p>Hér eru helstu miðstöðvar siðmenningar þeirra:</p>\n\n<table class=\"codex-table\">\n    <thead>\n        <tr>\n            <th>Landsvæði</th>\n            <th>Helstu Borgir / Kaupstaðir</th>\n            <th>Lýsing og Mikilvægi</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td><strong>Skandinavía (Heimalandið)</strong></td>\n            <td><strong>Heiðabær</strong> (Danmörk), <strong>Birka</strong> (Svíþjóð), <strong>Kaupangur</strong> (Noregur)</td>\n            <td>Þrjár stærstu verslunarmiðstöðvar víkingaaldar. Heiðabær var gríðarleg tengistöð milli Norðursjávar og Eystrasalts.</td>\n        </tr>\n        <tr>\n            <td><strong>Bretlandseyjar</strong></td>\n            <td><strong>Jórvík</strong> (York, England), <strong>Dyflinn</strong> (Írland)</td>\n            <td>Dyflinn var stofnuð af víkingum sem þrælamarkaður og vetrarhöfn. Jórvík varð höfuðborg Danalaga (enska landsvæðið undir dönskum lögum).</td>\n        </tr>\n        <tr>\n            <td><strong>Austur-Evrópa</strong></td>\n            <td><strong>Hólmgarður</strong> (Novgorod), <strong>Kænugarður</strong> (Kænugarður/Kiev)</td>\n            <td>Stofnuð eða tekin af sænskum víkingum (Rúsum) sem ferðuðust niður Volgu og Dnepr til að versla (og ræna) alla leið til Miklagarðs (Konstantínópel).</td>\n        </tr>\n        <tr>\n            <td><strong>Norður-Atlantshaf</strong></td>\n            <td><strong>Reykjavík</strong> (Ísland), <strong>Brattahlíð</strong> (Grænland)</td>\n            <td>Ósnortin lönd sem Norðmenn flýðu til undan miðstýringu valds. Reykjavík var stofnuð af Ingólfi Arnarsyni.</td>\n        </tr>\n    </tbody>\n</table>",
            image: "assets/invasion_map.png",
            link: "https://is.wikipedia.org/wiki/Víkingaöld"
        },
        {
            topic: "Austurvegurinn (Rúsarnir)",
            description: "Saga sænskra kaupmanna og málaliða eftir ám Evrópu til Miklagarðs.",
            lore: "<p>Sagan af víkingunum sem fóru Austurveginn er heillandi, enda í hrópandi mótsögn við ímyndina af blóðþyrstum ræningjum að ráðast á vestræn klaustur. <strong>Rúsarnir</strong> (aðallega frá núverandi Svíþjóð) voru fyrst og fremst árlandkönnuðir, metnaðarfullir kaupmenn og ógnvænlegir málaliðar.</p><p>Dirfska þeirra leiddi þá til ríkustu borgar hins þekkta heims: <strong>Konstantínópel</strong>, sem þeir kölluðu <em>Miklagarð</em>. Hér er hvernig þeir náðu til Býsans og því mikilvæga hlutverki sem þeir gegndu þar.</p>\n\n<h4 class=\"codex-section-title\"><i class=\"fas fa-compass\"></i> 1. Siglingar: Risavaxin flutninga á ám</h4>\n<p>Að komast til Miklagarðs frá Eystrasalti snerist ekki um úthafssiglingar, heldur áskorun um að ná valdi á ám Austur-Evrópu.</p>\n<ul>\n    <li><strong>Árkerfið:</strong> Rúsarnir byrjuðu frá Kirjálabotni og fóru upp fljótið Neva, síðan yfir stórvötnin Ladóga og Onega. Þaðan fóru þeir inn í miklu rússnesku fljótin, aðallega <strong>Volkhov</strong> og <strong>Dnepr</strong>.</li>\n    <li><strong>Siglt um flúðir:</strong> Sigling á Dnepr var stórhættuleg, einkum vegna röð flúða sem ekki var hægt að sigla í gegnum. Víkingarnir þurftu þá að grípa til þess að <strong>draga</strong> skip sín: þeir tóku skip sín upp úr vatninu, settu þau á trédrumba, og drógu þau nokkra kílómetra yfir land svæði stjórnað af fjandsamlegum hirðingjaættbálkum (Petsjenegum).</li>\n    <li><strong>Floti Svartahafs:</strong> Eftir að komið var niður Dnepr til Svartahafs, sigldu þeir meðfram ströndum (til að forðast storma) að Bosporussundi, þar sem Mikligarður stóð.</li>\n </ul>\n\n<h4 class=\"codex-section-title\"><i class=\"fas fa-coins\"></i> 2. Efnahagslegt hlutverk: Brú milli Norðurs og Austurs</h4>\n<p>Meginmarkmið þessarar leiðar (leiðin frá Væringjum til Grikkja) voru viðskipti. Rúsarnir leituðu eftir því sem Norðrið gat ekki framleitt, og buðu fram það sem Býsanska heimsveldið girntist.</p>\n<ul>\n    <li><strong>Útflutningur norðursins:</strong> Víkingarnir ferðuðust niður árnar með farma af rafi, hunangi, bývaxi, rostungstönnum, og dýrmætum skinnum (sable, refur, hreysiköttur). Þeir stunduðu einnig mjög arðbæra þrælaverslun, tekin í ránsferðum.</li>\n    <li><strong>Innflutningur auðæfa:</strong> Í Miklagarði skiptu þeir á þessum vörum fyrir hrá silki, krydd, vín, lúxusgler, og umfram allt, <strong>silfur</strong>. Hið mikla magn íslamskra silfurdirhama sem fundist hafa í Svíþjóð eru sönnun þess.</li>\n</ul>\n\n<h4 class=\"codex-section-title\"><i class=\"fas fa-shield-halved\"></i> 3. Hernaðarlegt hlutverk þeirra: Væringjaherinn</h4>\n<p>Samskipti milli Rúsa og Býsanska heimsveldisins byrjuðu í ofbeldi. Árið 860, síðan árið 907 og 941, réðust víkingaflotar á Miklagarð. Þótt þeir gætu aldrei brotið risavaxna múra keisarans Theodosiusar, vakti grimmd þeirra athygli Býsansku keisaranna.</p>\n<ul>\n    <li><strong>Stofnun hersins:</strong> Árið 988, sendi furstinn af Kænugarði (Vladimír I, afkomandi Rúsa) 6.000 af sínum bestu víkingastríðsmönnum til Býsanska keisarans Basil II. Þessir málaliðar mynduðu kjarna <strong>Væringjahersins</strong>.</li>\n    <li><strong>Úrvalsstaðan:</strong> Þessi lífvörður keisarans varð óttalegasta og best launaða herdeild heimsveldisins. Þeir voru þekktir fyrir notkun þeirra á miklu tvíhandar öxinni (Býsansmenn kölluðu þá \"öxuberandi villimennina\") og, ofar öllu, fyrir óspillanlega tryggð sína við hásætið.</li>\n</ul>\n<blockquote><strong>Rúnaristurnar í Hagia Sophia</strong><br>Eitt áhrifamesta sannnunargagn um viðveru víkinga í Miklagarði finnst á annarri hæð í Hagia Sophia kirkjunni. Væringi, líklega leiður á löngum trúarathöfnum, reist rúnir í marmarann á handriði. Það má enn lesa þar í dag: <em>\"Hálfdan reist rúnar þessar\"</em>. Þetta er miðaldajafngildið á \"Hálfdan var hér\".</blockquote>",
            image: 'assets/route_est.jpg',
            link: "https://is.wikipedia.org/wiki/V%C3%A6ringjar"
        },
        {
            topic: "Sögulegt Tímatal",
            description: "Helstu tímamót og landvinningar Víkingaaldar (793 - 1066).",
            lore: "<p>Tímabilið sem sagnfræðingar kalla \"Víkingaöld\" nær formlega frá lok 8. aldar til miðrar 11. aldar. Hér er tímaröð þeirra eftirminnilegustu landafunda og landvinninga:</p>\n\n<div class=\"codex-timeline\">\n    <div class=\"timeline-item\">\n        <div class=\"timeline-dot\"></div>\n        <div class=\"timeline-title\">Árásin á Lindisfarne <span class=\"timeline-era\">793</span></div>\n        <div class=\"timeline-desc\">Þetta er opinber upphafsdagsetning Víkingaaldar. Ránið á varnarlausu klaustri á norðausturströnd Englands sláir kristna Evrópu djúpt.</div>\n    </div>\n    <div class=\"timeline-item\">\n        <div class=\"timeline-dot\"></div>\n        <div class=\"timeline-title\">Umsátrið um París <span class=\"timeline-era\">845</span></div>\n        <div class=\"timeline-desc\">Floti 120 langskipa undir forystu hins goðsagnakennda höfðingja Ragnars loðbrókar ferðast upp Signu, rænir borgina, og fer aðeins eftir greiðslu þungrar skatts (Danagjalds) upp á 7.000 pund af silfri.</div>\n    </div>\n    <div class=\"timeline-item\">\n        <div class=\"timeline-dot\"></div>\n        <div class=\"timeline-title\">Mikli Heiðingjaherinn <span class=\"timeline-era\">865</span></div>\n        <div class=\"timeline-desc\">Víkingarnir eru ekki lengur sáttir við sumarárasir. Risastórt bandalag ræðst á England til að sigra og setjast að, sem leiðir til stofnunar Danalaga (svæðið undir danskri stjórn).</div>\n    </div>\n    <div class=\"timeline-item\">\n        <div class=\"timeline-dot\"></div>\n        <div class=\"timeline-title\">Landnám Íslands <span class=\"timeline-era\">874</span></div>\n        <div class=\"timeline-desc\">Ingólfur Arnarson kastar öndvegissúlum sínum í hafið og sest að þar sem þær reka á land. Hann stofnar Reykjavík, byrjun landnáms eyjarinnar.</div>\n    </div>\n    <div class=\"timeline-item\">\n        <div class=\"timeline-dot\"></div>\n        <div class=\"timeline-title\">Fæðing Normandí <span class=\"timeline-era\">911</span></div>\n        <div class=\"timeline-desc\">Konungur Frakklands, Karl hinn Einfaldi, lætur af hendi landsvæði til víkingahöfðingjans Hrólfs (Saint-Clair-sur-Epte sáttmálinn) í skiptum fyrir kristnitöku hans og vernd hans gegn öðrum árásum. Þetta er uppruni Normanna (\"Norðmanna\").</div>\n    </div>\n    <div class=\"timeline-item\">\n        <div class=\"timeline-dot\"></div>\n        <div class=\"timeline-title\">Fundur Grænlands <span class=\"timeline-era\">982</span></div>\n        <div class=\"timeline-desc\">Eiríkur rauði var rekinn burt frá Íslandi fyrir morð, siglir í vestur og uppgötvar stórt jöklaland. Til að laða að landnema þangað kallar hann það beinlínis Grænland.</div>\n    </div>\n    <div class=\"timeline-item\">\n        <div class=\"timeline-dot\"></div>\n        <div class=\"timeline-title\">Leiðangur til Vínlands (Ameríku) <span class=\"timeline-era\">1000</span></div>\n        <div class=\"timeline-desc\">Leifur Eiríksson (sonur Eiríks rauða) nær til stranda núverandi austur-Kanada. Hann stofnar þar skammlífar vetrarbúðir sem hann nefnir Vínland.</div>\n    </div>\n    <div class=\"timeline-item\">\n        <div class=\"timeline-dot\"></div>\n        <div class=\"timeline-title\">Endalok Víkingaaldar <span class=\"timeline-era\">1066</span></div>\n        <div class=\"timeline-desc\">Konungur Noregs, Haraldur Harðráði (talinn síðasti mikli víkingakonungurinn), reynir að ráðast á England en er drepinn í orrustunni við Stafnfurðubryggju. Nokkrum vikum síðar tekst Vilhjálmi Bastarði (afkomanda víkingsins Hrólfs) þar sem Haraldi mistókst.</div>\n    </div>\n</div>",
            image: 'assets/viking_timeline.png',
            link: "https://is.wikipedia.org/wiki/Víkingaöld"
        }
    ,
        {
            topic: 'Kenningar og tækni í siglingum',
            description: 'Hin tæknilega og hernaðarlega list sem tryggði yfirráð norrænna manna á höfunum.',
            lore: "<p>Yfirburðir víkinga byggðust ekki eingöngu á hugrekki stríðsmanna þeirra, heldur á siglingatækni og skipulagningu sem var einstaklega háþróuð á þeim tíma.</p><h4 class='codex-section-title'><i class='fas fa-anchor'></i> 1. Stjörnusiglingar og sólsteinar</h4><p>Til að sigla yfir Norður-Atlantshafið án þess að sjá land notuðu norrænir siglingamenn <strong>sólstein</strong> (<em>sólsteinn</em>), sem er silfurbergskristall sem getur greint skautað ljós. Jafnvel í mikilli þoku eða eftir sólsetur sýndi þessi kristall nákvæma staðsetningu sólarinnar á himninum, sem gerði þeim kleift að stilla sólskífuna sína nákvæmlega.</p><h4 class='codex-section-title'><i class='fas fa-truck-ramp-box'></i> 2. Fljótasiglingar og dragferðir</h4><p>Á austurveginum (rússnesku fljótunum) stóðu sænskir víkingar (Svíar eða Garðar) frammi fyrir gríðarlegum hindrunum: flúðunum í Dnjepr. Þar sem ekki var hægt að sigla yfir þær drógu þeir skipin á land, settu þau á trérúllur og drógu þau kílómetrum saman með handafli yfir fjandsamlegar sléttur áður en þeim var hleypt aftur á flot.</p><h4 class='codex-section-title'><i class='fas fa-ship'></i> 3. Fjölhæf skip</h4><p>Vegna þess hve skipin (<em>langskip</em>) ristu grunnt (um 1 metra) gátu víkingar siglt upp mjög grunnar ár til að koma borgum á óvart inni í landi, en skipin héldu samt einstökum sveigjanleika á opnu hafi til að standast Atlantshafsöldurnar. Þessi fjölhæfni breytti hernaðarsögu miðalda.</p>",
            image: 'assets/viking_navigation.png',
            link: 'https://is.wikipedia.org/wiki/Kn%C3%B6rrur'
        }],
    gallery: [
        {
            title: "Hnefatafl (Leikur Konungs)",
            description: "Endurgerð ósamhverfa borðspilsins sem var vinsælast meðal víkingastéttarinnar.",
            lore: "Hnefatafl var miklu meira en bara afþreying. Þessi leikur fannst í fjölmörgum greftrum aðalsmanna (þar á meðal kvenkyns stríðsmanna eins og í Birku), og táknaði sálræna og stjórnmálalega hæfileika hins látna. Konungurinn, staðsettur í miðju borðsins, verður að reyna að sleppa út í hornin á meðan varnarmenn hans berjast gegn árásarhernum, tvöfalt fjölmennari, sem umkringja hann. Það er sýnidæmi um skandinavíska taktíska yfirburði.",
            image: "assets/hnefatafl.jpg",
            link: "https://is.wikipedia.org/wiki/Hnefatafl"
        },
        {
            title: "Grafreiturinn í Lindholm Høje",
            description: "Frægasti grafreitur Danmerkur með skipslaga gröfum sínum útlistuðum með steinum.",
            lore: "Lindholm Høje, staðsettur nálægt Álaborg í Danmörku, hýsir hundruð grafa sem eru frá járnöld og víkingaöld. Vantaði fjárhagslega burði til að fórna raunverulegum herskipum úr viði (mjög mikilvægar auðlindir), raðaði miðstétt frjálsra manna (Karlanna) stórum steinum til að teikna útlínur skips um grafirnar, sem táknuðu andlega ferð hins látna til norræns himins.",
            image: "assets/lindholm_hoje.jpg",
            link: "https://en.wikipedia.org/wiki/Lindholm_H%C3%B8je"
        },
        {
            title: "Völir (Galdrastafir)",
            description: "Ómissandi töfrasprotar úr járni fyrir dulspekilega iðkun Seiðs.",
            lore: "Þessir ríkulega smíðuðu sprotar úr járni eða bronsi hafa fundist í greftrunum háttsettra kvenna í Skandinavíu (eins og í Fyrkat). Þeir tákna töfrastafinn (völur), tákn um æðsta vald Völvunnar (spákonunnar). Við helgisiði notaði hún hann til að stjórna andlegum ferðalögum sínum yfir heimana og spyrja framtíðina. Það er þessi sproti sem gaf prestkonunni nafn hennar (völva þýðir 'sú sem ber völinn').",
            image: "assets/volr_baguette.jpg",
            link: "https://is.wikipedia.org/wiki/V%C3%B6lva"
        },
        {
            title: "Dæmigerður Rúnasteinn",
            description: "Útfarar- og sögulegur minnisvarði höggvinn til eilífðar í skandinavískum bergi.",
            lore: "Rúnasteinar voru reistir til minningar um fallna kappa eða kaupmenn, til að lýsa verkum þeirra á sjó eða erlendis. Grafnir með rúnagaldri af meistarahandverksmönnum kölluðum rúnasmiðum, þeir voru málaðir í skærum litum (blóðrauðum, okkar, svörtum) og voru með fínar rúmfræðilegar flækjur sem oft mynduðu líkama goðsagnakenndra dreka eða orma.",
            image: "assets/pierre_runique.jpg",
            link: "https://is.wikipedia.org/wiki/R%C3%BAnasteinn"
        },
        {
            title: "Óðinn og Fenrir",
            description: "Dramatísk mynd af dauða Óðins þar sem úlfurinn Fenrir gleypir hann í Ragnarökum.",
            lore: "Þetta verk táknar hápunkt Ragnaröka: hið afdrifaríka einvígi Alföðurs og hans kosmíska erkifjanda. Þrátt fyrir fullkomna visku hans og himneska her hans af Einherjum úr Valhöll, veit Óðinn fyrirfram að hann er dauðadæmdur að tapa þessari baráttu. Úlfurinn Fenrir, sem opnir kjaftar snerta bæði himin og jörð, mun gleypa æðsta leiðtoga Ásgarðs áður en Víðar, sonur Óðins, fellir hann að sama skapi.",
            image: "assets/odin_fenrir.jpg",
            link: "https://is.wikipedia.org/wiki/Ragnar%C3%B6k"
        },
        {
            title: "Fenrir fjötraður",
            description: "Söguleg miðalda mynd úr 17. aldar íslensku handriti.",
            lore: "Þessi sögulega handritamynd sýnir augnablikið þegar Fenrir var fjötraður. Við sjáum guðinn Týr leggja djarflega hægri hönd sína í gapandi gin úlfsins sem sönnun á góðum ásetningi, á meðan hinir guðirnir binda Gleipni, töfraband sem dvergarnir ofu. Um leið og úlfurinn áttaði sig á því að hann væri fangaður, sleit hann af úlnlið Týs með einu biti, og innsiglaði þannig hetjulega fórn réttlætisguðsins.",
            image: "assets/fenrir_manuscrit.jpg",
            link: "https://is.wikipedia.org/wiki/Fenrir"
        },
        {
            title: "L'Anse aux Meadows (Kanada)",
            description: "Búðir á Nýfundnalandi sem staðfesta landkönnun víkinga í Norður-Ameríku 500 árum á undan Kólumbusi.",
            lore: "<p>Nútíma fornleifafræði hefur sannað að Íslendingasögurnar voru ekki bara goðsagnir. Fótspor víkinga hefur fundist langt utan Evrópu.</p><p><strong>L'Anse aux Meadows (Nýfundnaland, Kanada):</strong> Óhrekjanleg sönnun þess að víkingar náðu til Norður-Ameríku 500 árum á undan Kristófer Kólumbusi. Árið 1960 uppgötvuðu fornleifafræðingar undirstöður átta torfbygginga, skipshnoð, og snældusnúð, sem sannar nærveru kvenna í leiðangrinum.</p>\n\n<h4 class=\"codex-section-title\"><i class=\"fas fa-gem\"></i> Aðrar mikilvægar Fornleifasannanir</h4>\n<ul>\n    <li><strong>Rúnasteinar:</strong> Þúsundir finnast, aðallega í Svíþjóð. Þessir stóru standsteinar minnast ferða, þeirra sem dóu í bardaga og bandalaga. Jalangurssteinninn (Danmörku) er meira að segja talinn vera \"fæðingarvottorð Danmerkur\".</li>\n    <li><strong>Risastórir faldir fjársjóðir:</strong> Víkingarnir færðu heim auðæfi alls staðar að úr heiminum. Spillings-fjársjóðurinn, sem fannst á sænsku eyjunni Gotlandi árið 1999, innihélt yfir 14.000 hreinar silfurmyntir íslamskar, sem sannar kraft viðskiptanets þeirra alla leið til Mið-Austurlanda.</li>\n</ul>",
            image: "assets/anse_aux_meadows.jpg",
            link: "https://en.wikipedia.org/wiki/L%27Anse_aux_Meadows"
        }
    ],
    legacy: [
        {
            title: "Fornnorræna",
            description: "Móðurmál víkingaaldar og þróun þess á Norðurlöndum.",
            lore: "<p>Fornnorræna, tungumál víkinganna, er ekki lengur töluð í dag. Hins vegar þróaðist hún og gaf af sér nútíma Norðurlandamál, þar sem íslenska og færeyska eru nánustu og trúustu afkomendurnir.</p><p>Víkingamálunum er skipt í tvær megingreinar í dag:</p><h4 class='codex-section-title'>1. Vestræna greinin</h4><ul><li><strong>Íslenska:</strong> Það er það nútímamál sem stendur fornnorrænu næst. Vegna einangrunar hefur hún þróast mjög lítið, sem gerir mælendum kleift að lesa næstum þúsund ára gamlar sögur án mikilla erfiðleika.</li><li><strong>Færeyska:</strong> Töluð í Færeyjum, þetta tungumál er mjög líkt íslensku og deilir sömu vestrænu norrænu rótunum.</li></ul><h4 class='codex-section-title'>2. Austræn grein</h4><ul><li><strong>Norska:</strong> Skiptist í tvö opinber ritmál (Bókmál og Nýnorsku).</li><li><strong>Sænska og danska:</strong> Þessi tungumál hafa fjarlægst meira í gegnum aldirnar, einfaldað málfræði sína miðað við fornnorrænu, á meðan þau eru enn mjög auðskilin Norðmönnum.</li></ul><h4 class='codex-section-title'>Tungumálaarfleifð</h4><p>Þó fornnorræna sé útdautt tungumál lifir áhrif hennar í mörgum enskum orðum (eins og sky eða window) og í þúsundum örnefna í Evrópu, sérstaklega á Bretlandseyjum og í Normandí.</p>",
            image: "assets/Vieux-norrois.jpg",
        },
        {
            title: "Áhrifin á Ensku",
            description: "Hvernig víkingar mótuðu hversdagslegan orðaforða ensku.",
            lore: "Áhrif víkingainnrása á England (Danelögin) breyttu ensku tungumálinu djúpt og varanlega. Skandinavarnir rændu ekki bara; þeir settust að, stunduðu landbúnað og áttu viðskipti við Engilsaxa. Þessi sambúð leiddi til gríðarlegrar tungumálablöndunar. Meira en 2.000 algeng orð í nútímaensku koma beint úr fornnorrænu. Grundvallar hversdagsorð eins og 'sky' (ský), 'window' (gluggi, af vind-auga), 'knife' (hnífur), 'husband' (eiginmaður, af hús-bóndi), 'egg', eða jafnvel fornöfnin 'they', 'their' og 'them' eru af víkingauppruna. Jafnvel vikudagarnir (Thursday = Þórsdagur, Friday = Friggjar/Freyjudagur) bera enn merki norrænu guðanna.",
            image: "assets/Viking_Words.jpg",
        }
    ,
        {
            title: 'Goðsögulegur uppruni vikudaganna',
            description: 'Hvernig norræn goð settu varanlegt svip sinn á daga nútíma dagatalsins okkar.',
            lore: "<p>Áhrif norrænna goða á daglegt líf okkar eru miklu dýpri en við gerum okkur grein fyrir. Þótt rómönsk tungumál eins og franska hafi varðveitt latneskar rætur (t.d. Mardi fyrir Mars), þá þýddu germönsk tungumál eins og enska og þýska þessi hugtök beint til að heiðra goðin í norrænni goðafræði.</p><h4 class='codex-section-title'><i class='fas fa-calendar-alt'></i> Helstu samsvaranir</h4><ul><li><strong>Þriðjudagur (Tuesday) :</strong> Dregið af norræna heitinu <em>Týsdagr</em>, dagur guðsins <strong>Týs</strong>, hins einhenda guðs stríðs, réttlætis og hetjulegrar fórnar. Hann samsvarar rómverska guðinum Mars.</li><li><strong>Miðvikudagur (Wednesday) :</strong> Á ensku tengt <em>Óðinsdagr</em>, dagur <strong>Óðins</strong>. Æðsti guð Ásgarðs, guð vísinda, galdra og skáldskapar, hann samsvarar Merkúríusi vegna hlutverks síns sem ferðalangur milli heima.</li><li><strong>Fimmtudagur (Thursday) :</strong> Dregið af <em>Þórsdagr</em>, dagur hins öfluga <strong>Þórs</strong>, þrumuguðs og verndara mannkyns. Hann samsvarar Júpíter, rómverska þrumuguðinum.</li><li><strong>Föstudagur (Friday) :</strong> Kemur af <em>Fríjadagr</em>, dagur gyðjunnar <strong>Friggjar</strong> (oft tengd eða blönduð við <strong>Freyju</strong>), gyðju ástar, heimilis og frjósemi. Hún samsvarar rómversku gyðjunni Venus.</li></ul><p>Þessi málvísindalegi arfur sýnir að þrátt fyrir kristnun Norður-Evrópu halda hin fornu goð áfram að búa í sjálfu hjarta okkar grundvallar tímaskiptingar: vikunni.</p>",
            image: 'assets/cosmic_clock.png',
        }]
};
