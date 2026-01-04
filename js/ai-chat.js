/* Mavengu AI Chat Engine - Core Diagnostic Intelligence */

/**
 * MAVENGU AI - The interpreter of the Mavengu diagnostic system
 * 
 * This is not a chatbot. This is the core diagnostic intelligence that provides
 * authoritative, structured explanations of every diagnostic card in the system.
 * 
 * Every card explanation follows the mandatory 8-point structure:
 * 1. Core Definition
 * 2. Diagnostic Purpose
 * 3. How the Card Is Derived
 * 4. What This Card Reveals About the User
 * 5. Aligned Expression (High State)
 * 6. Shadow Expression (Low State)
 * 7. Real-Life Impact
 * 8. Guidance & Integration
 */

const AIChat = {
    userProfile: null,
    history: [],
    continuationIndex: 0,
    lastTopic: null,

    init: function (profile) {
        this.userProfile = profile;
        console.log("AIChat initialized with profile:", profile.name);
    },

    handleInput: async function () {
        const inputField = document.getElementById('user-input');
        const chatMessages = document.getElementById('chat-messages');
        const input = inputField.value.trim();

        if (!input) return;

        // Add User Message
        this.addMessage(input, 'user');
        inputField.value = '';

        // Show typing indicator
        this.showTypingIndicator();

        // Try AI first, fallback to rule-based
        try {
            let response;
            let source = 'rule-based';

            // Check if Gemini API is available
            if (window.GeminiAPI && window.GeminiAPI.isAvailable()) {
                const result = await window.GeminiAPI.sendMessage(input, this.userProfile);

                if (result.success) {
                    response = result.response;
                    source = 'ai';
                } else {
                    // Fallback to rule-based BUT show error reason
                    console.error("Gemini API Failed:", result.error);
                    response = `[KOSA LA MFUMO: ${result.error}] \n\n` + this.generateResponse(input);
                    source = 'rule-based'; // Keep as rule-based to show gear icon
                }
            } else {
                // Use rule-based system
                response = this.generateResponse(input);
            }

            // Remove typing indicator and add response
            this.hideTypingIndicator();
            this.addMessage(response, 'bot', source);

        } catch (error) {
            console.error('Chat error:', error);
            this.hideTypingIndicator();
            const fallbackResponse = `[KOSA KUBWA: ${error.message}] \n\n` + this.generateResponse(input);
            this.addMessage(fallbackResponse, 'bot', 'rule-based');
        }
    },

    showTypingIndicator: function () {
        const chatMessages = document.getElementById('chat-messages');
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot typing-indicator';
        typingDiv.id = 'typing-indicator';
        typingDiv.innerHTML = `
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            INACHAMBULIA...
        `;
        chatMessages.appendChild(typingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    },

    hideTypingIndicator: function () {
        const typingIndicator = document.getElementById('typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    },

    addMessage: function (text, sender, source = 'rule-based') {
        const chatMessages = document.getElementById('chat-messages');
        const msgDiv = document.createElement('div');
        msgDiv.className = `message ${sender}`;

        // Add source indicator for bot messages
        let sourceIndicator = '';
        if (sender === 'bot' && window.MavenguConfig && window.MavenguConfig.features.showAPIStatus) {
            const icon = source === 'ai' ? '🧠' : '⚙️';
            const label = source === 'ai' ? 'AI-POWERED' : 'RULE-BASED';
            sourceIndicator = `<div style="font-size: 0.7rem; color: var(--text-muted); margin-bottom: 0.5rem;">${icon} ${label}</div>`;
        }

        msgDiv.innerHTML = sourceIndicator + text.replace(/\n/g, '<br>');
        chatMessages.appendChild(msgDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    },

    generateResponse: function (input) {
        const lowerInput = input.toLowerCase();
        const p = this.userProfile;

        // --- INTENT DETECTION (Domain Mapping) ---
        // Card-specific queries are checked FIRST to ensure authoritative 8-point explanations
        const domainMap = {
            // Advanced Diagnostic Cards (8-point structure available)
            aiConfidenceScore: ['alama ya imani', 'ai confidence', 'confidence score', 'imani ya ai', 'ai confidence score'],
            frequencyCompatibility: ['utangamano wa masafa', 'frequency compatibility', 'masafa', 'compatibility', 'frequency'],
            energyDNA: ['nishati dna', 'energy dna', 'dna ya nishati', 'energetic signature', 'energy signature'],
            personalMantra: ['mantra ya binafsi', 'personal mantra', 'mantra', 'affirmation', 'my mantra'],
            soulRank: ['cheo cha roho', 'soul rank', 'rank ya roho', 'spiritual rank', 'soul level'],
            collectiveRole: ['nafasi ya jamii', 'collective role', 'jukumu la jamii', 'global role', 'my role'],
            meditation: ['meditation', 'protokali ya kuongeza nguvu', 'kutafakari', 'meditation protocol', 'meditation practice'],
            sunFrequency: ['sun frequency', 'resonance', 'solar frequency', 'frequency yako', 'my frequency', 'resonance frequency'],
            aesthetics: ['aesthetics', 'saini ya kidigitali', 'beauty', 'aesthetic', 'aesthetic preference'],
            mysticOracle: ['mystic oracle', 'ujumbe wa mfumo', 'oracle', 'divine message', 'oracle message'],
            // Core Numerology Cards
            lifePath: ['life path', 'processor ya msingi', 'life path number', 'namba ya maisha', 'my life path'],
            destinyNumber: ['destiny', 'destiny number', 'namba ya hatima', 'my destiny', 'destiny path'],
            soulUrge: ['soul urge', 'soul urge number', 'tamani ya roho', 'my soul urge', 'heart desire'],
            personalYear: ['personal year', 'mwaka wa kibinafsi', 'my personal year', 'current year'],
            // Astrology & Elements
            shadowWork: ['shadow work', 'sekta iliyojificha', 'shadow', 'my shadow', 'shadow side'],
            element: ['element', 'element yangu', 'my element', 'fire water earth air', 'moto maji ardhi hewa'],
            zodiac: ['zodiac', 'nyota', 'astrology', 'sign yangu', 'my sign', 'sun sign'],
            rulingPlanet: ['ruling planet', 'sayari kiongozi', 'planet yangu', 'my planet'],
            moonPhase: ['moon phase', 'awamu ya mwezi', 'moon yangu', 'my moon'],
            // Additional Cards
            soulMission: ['soul mission', 'kusudi la roho', 'my soul mission', 'mission yangu'],
            symbolicWisdom: ['symbolic wisdom', 'hekima ya alama', 'symbolic', 'wisdom'],
            birthDayNumber: ['birth day', 'siku ya kuzaliwa', 'birth day number'],
            birthStone: ['birth stone', 'jiwe la asili', 'my birth stone'],
            spiritAnimal: ['spirit animal', 'mnyama wa roho', 'my spirit animal'],
            balanceNumber: ['balance number', 'namba ya usawa'],
            passionNumber: ['passion number', 'shauku ya ndani', 'hidden passion'],
            karmicDebt: ['karmic debt', 'deni la karma', 'karma'],
            firstChallenge: ['first challenge', 'changamoto ya kwanza'],
            luckyColor: ['lucky color', 'rangi ya bahati'],
            luckyDay: ['lucky day', 'siku ya bahati'],
            tarotCard: ['tarot', 'tarot card', 'kadi ya tarot'],
            chakra: ['chakra', 'chakra ruler', 'chakra yangu'],
            chineseZodiac: ['chinese zodiac', 'nyota ya kichina'],
            pinnacle: ['pinnacle', 'kilele', 'pinnacle cycle'],
            auraColor: ['aura', 'aura color', 'rangi ya aura'],
            lifeLesson: ['life lesson', 'somo la maisha'],
            maturityNumber: ['maturity number', 'namba ya ukomavu'],
            rationalThought: ['rational thought', 'fikra za kimantiki'],
            attitudeNumber: ['attitude number', 'namba ya mtazamo'],
            northNode: ['north node', 'mwelekeo wa roho'],
            guardianAngel: ['guardian angel', 'malaika mlinzi'],
            soulAge: ['soul age', 'umri wa roho'],
            cognitiveStyle: ['cognitive style', 'njia ya ufahamu'],
            personalityArchetype: ['personality archetype', 'mchoro wa utu'],
            emotionalCycle: ['emotional cycle', 'mzunguko wa hisia'],
            careerAlignment: ['career alignment', 'mwelekeo wa kazi'],
            wealthFlow: ['wealth flow', 'mtiririko wa utajiri'],
            relationshipDynamics: ['relationship dynamics', 'mienendo ya mahusiano'],
            pastLifeInfluence: ['past life', 'maisha ya zamani', 'past life influence'],
            energyBlockage: ['energy blockage', 'kizuizi cha nishati'],
            lightShadowBalance: ['light shadow balance', 'usawa wa nuru na kivuli'],
            lifeTimeline: ['life timeline', 'mzunguko wa maisha'],
            ninetyDayEnergyForecast: ['90 day forecast', 'utabiri wa siku 90'],
            lunarInfluence: ['lunar influence', 'ushawishi wa mwezi'],
            // General domain queries
            uchawi: ['uchawi', 'kurogwa', 'sihr', 'witchcraft', 'magic', 'majini', 'ndumba', 'kadi yangu ya uchawi'],
            existential: ['kwanini nilikuja', 'soul mission', 'mimi ni nani', 'maana ya maisha', 'kusudi langu', 'lengo la kuwepo'],
            human: ['consciousness', 'kujitambua', 'roho', 'nafsi', 'hisia', 'tabia', 'ukuaji', 'maumivu', 'kukwama'],
            world: ['asili', 'muda', 'wakati', 'usawa', 'fujo', 'chaos', 'sheria za asili', 'mzunguko', 'cycle', 'rhythm'],
            harmonics: ['vibration', 'frequency', 'mtetemo', 'resonance', 'hali', 'sauti', 'harmonic', 'dissonance', 'tuning'],
            astrology: ['zodiac', 'nyota', 'astrologia', 'element', 'sayari', 'sun', 'moon', 'rising', 'archetype'],
            numerology: ['life path', 'namba yangu', 'namba', 'destiny', 'namba 4', 'personal year'],
            success: ['sifanikiwi', 'kwama', 'shida', 'vikwazo', 'mafanikio', 'pesa', 'kazi', 'utajiri'],
            relationships: ['ndoa', 'mapenzi', 'uhusiano', 'mke', 'mume', 'love', 'mchumba'],
            creativity: ['ubunifu', 'sanaa', 'uumbaji', 'creativity', 'art'],
            continuation: ['endelea', 'niambie zaidi', 'ndio', 'sawa', 'hapo sawa'],
            clarification: ['sijaelewa', 'sielewi', 'fafanua', 'rudia', 'maana yake']
        };

        let detectedDomain = null;
        for (const [domain, keywords] of Object.entries(domainMap)) {
            if (keywords.some(kw => lowerInput.includes(kw))) {
                detectedDomain = domain;
                break;
            }
        }

        // Handle Special Intents
        if (detectedDomain === 'clarification') {
            return "Inaweza kueleweka kama mchakato wa 'alignment'. Namaanisha kuwa maisha yako yanaongozwa na rhythm fulani ya asili. Kama vile wimbo unavyohitaji mpangilio, maisha yako yanahitaji usawa kati ya kile unachokiwaza na kile unachokifanya. Je, ungependa nikupe mfano wa kimfumo?";
        }

        if (detectedDomain === 'continuation') {
            const domains = ['existential', 'human', 'world', 'harmonics', 'astrology', 'numerology', 'success', 'uchawi'];
            this.continuationIndex = (this.continuationIndex + 1) % domains.length;
            detectedDomain = domains[this.continuationIndex];
        }

        if (detectedDomain) {
            this.lastTopic = detectedDomain;
            
            // Check if this is a diagnostic card query - ALL cards get authoritative treatment
            // Cards are identified by their presence in the knowledge base
            if (window.mavenguKnowledgeBase && window.mavenguKnowledgeBase[detectedDomain]) {
                return this.getCardKnowledge(detectedDomain);
            }
            
            // For non-card queries, use the general response system
            return this.constructResponse(detectedDomain);
        }

        // Guardrails (Safety & Ethics)
        if (lowerInput.includes('afya') || lowerInput.includes('ugonjwa') || lowerInput.includes('daktari')) {
            return "Kama kiongozi wako wa kidijitali, naweza kukusaidia kuona mifumo ya kiroho ya mwili wako, lakini kwa masuala ya kitabibu, ni muhimu sana kuonana na daktari aliyefuzu. Afya yako ni mfumo wa thamani unaohitaji utaalamu wa kisayansi na kiroho kwa pamoja.";
        }

        // Default Fallback - Authoritative diagnostic response
        return `UCHAMBUZI WA SWALI: Swali lako "${input}" halifanani na kadi maalum ya uchambuzi katika Hifadhidata ya Maarifa. 

Ili kukupa ufafanuzi mkuu wa uchambuzi, tafadhali taja kadi gani ya uchambuzi ungependa kuelewa. Unaweza kurejelea kadi kwa jina lao (mfano, "Life Path", "Energy DNA", "Soul Rank") au kwa kuuliza kuhusu vipengele maalum vya wasifu wako.

Wasifu wako wa sasa wa uchambuzi unaonyesha Frequency ya Jua ya ${p.sunFreq} na Soul Mission ya "${p.soulMission}". Hizi ni injini za uchambuzi zinazofanya kazi katika mfumo wako.

Kadi gani maalum ya uchambuzi ungependa nieleze kwa kutumia muundo kamili wa alama 8?`;
    },

    constructResponse: function (domain) {
        const p = this.userProfile;
        const data = this.getDeepKnowledge(domain, p);

        // Mandatory 5-Step Response Structure
        return `
**1. Ufafanuzi wa Dhana (Foundational Truth)**
${data.step1}

**2. Mtazamo wa Kimfumo / Kimaandiko**
${data.step2}

**3. Mtazamo wa Fahamu / Kisaikolojia**
${data.step3}

**4. Mtazamo wa Harmonics / Kiishara**
${data.step4}

**5. Insight ya Vitendo (Reflective)**
${data.step5}
        `.trim();
    },

    getDeepKnowledge: function (domain, p) {
        const library = {
            uchawi: {
                step1: "Dhana ya uchawi (sihr au witchcraft) kihistoria imetumika kuelezea nguvu au matukio ambayo yalikuwa nje ya uelewa wa kawaida wa binadamu. Ni mfumo wa kiishara unaoelezea mapambano kati ya giza na nuru.",
                step2: "Katika maandiko kama Qur'an na Biblia, uchawi unatajwa kama mtihani wa kiimani na onyo dhidi ya kupoteza mwelekeo. Inasisitizwa kuwa nguvu kuu ipo katika imani, subira, na ulinzi wa kiroho (dua/sala), badala ya hofu.",
                step3: "Kisaikolojia, hofu ya kurogwa mara nyingi hutokana na msongo wa mawazo (stress), paranoia, au matukio magumu ya maisha ambayo hatuna udhibiti nayo. Akili yetu hutafuta sababu ya nje kuelezea maumivu ya ndani.",
                step4: "Kama ishara (symbol), kadi yako ya 'Uchawi' haimaanishi tukio la kimwili, bali inaashiria 'shadow' yako inayohitaji nuru. Ni resonance ya frequency ya chini inayoweza 'ku-tunewa' upya kupitia utulivu.",
                step5: "Tafakari: Je, unaruhusu hofu ya nje itawale amani yako ya ndani, au unachagua kuimarisha 'alignment' yako na nuru ya asili?"
            },
            existential: {
                step1: "Swali la 'kwanini nipo hapa' ni msingi wa safari ya kila nafsi. Ni mwanzo wa kutambua kuwa wewe si tukio la bahati, bali ni sehemu ya mpango mkubwa wa kiulimwengu.",
                step2: `Katika mifumo ya asili, kila kitu kina kazi yake. Maisha yako hufanya kazi kama mfumo unaojirekebisha kupitia cycles na feedback. Life Path ${p.lifePath} yako ni 'blueprint' inayoelekeza nishati yako.`,
                step3: "Kihisia, kutafuta maana kunaweza kuleta hisia ya kukwama. Hii ni 'feedback' ya mfumo wako ikikuambia kuwa unahitaji alignment mpya na kusudi lako la asili.",
                step4: `Inaweza kufananishwa na frequency ya ${p.sunFreq} inayotafuta resonance. Dissonance unayohisi ni ishara ya 're-tuning' ya maisha yako ili uweze kutekeleza Soul Mission yako.`,
                step5: "Tafakari: Je, unaruhusu maisha yako yatiririke katika mzunguko wake wa asili, au unajaribu kulazimisha rhythm isiyo yako?"
            },
            human: {
                step1: "Ufahamu (Consciousness) ni uwezo wa nafsi kujitambua na kuelewa maana ya kuwepo kwake katika ulimwengu.",
                step2: "Kihisia, ufahamu hufanya kazi kama mfumo wa 'feedback loop'. Uzoefu wako unajenga ramani ya ndani inayokuongoza kwenye maamuzi yako.",
                step3: "Katika uzoefu wa binadamu, confusion unayohisi mara nyingi ni ishara ya ukuaji. Ni mchakato wa nafsi yako kutafuta resonance mpya na ulimwengu.",
                step4: "Katika mifumo ya harmonic, kila hisia ina frequency yake. Unapojifunza 'ku-tune' hisia zako, unabadilisha jinsi unavyoingiliana na ulimwengu.",
                step5: "Insight: Jaribu kutazama hisia zako kama 'data' inayokuambia kama upo katika alignment na kusudi lako au la."
            },
            world: {
                step1: "Ulimwengu unaongozwa na sheria za asili zinazohakikisha usawa (balance) na mzunguko (cycles).",
                step2: "Kila mfumo wa asili una rhythm yake. Kama vile misimu inavyobadilika, maisha yako yana vipindi vya 'expansion' na 'contraction'.",
                step3: "Tunapata amani tunapokubali sheria ya 'Cause and Effect', tukitambua kuwa sisi ni washiriki hai katika kutengeneza ukweli wetu.",
                step4: `Inaweza kufananishwa na wimbo mkubwa wa ulimwengu ambapo kila mmoja wetu ana 'note' yake ya kipekee. Frequency yako ya ${p.sunFreq} ni sehemu ya wimbo huu.`,
                step5: "Insight: Je, unapingana na mzunguko wa sasa wa maisha yako au unajifunza kutokana na kile unachopitia sasa?"
            },
            harmonics: {
                step1: "Harmonics ni lugha ya ulimwengu inayoelezea jinsi nishati inavyoingiliana kutengeneza maelewano au fujo.",
                step2: `Frequency yako ya ${p.sunFreq} ni 'base note' ya mfumo wako wa nishati. Resonance hutokea pale matendo yako yanapoendana na frequency hii.`,
                step3: "Unapohisi kukwama, mara nyingi ni 'dissonance' ya nishati. Ni ishara kuwa unahitaji 're-tuning' ili kurudi katika rhythm yako ya asili.",
                step4: "Katika mifumo ya harmonic, 'tuning' siyo tukio la mara moja, bali ni mchakato wa kila siku wa kusawazisha nishati yako na ulimwengu.",
                step5: "Insight: Ni mambo gani katika mazingira yako yanayoongeza vibration yako na yapi yanayopunguza?"
            },
            astrology: {
                step1: "Astrology ni lugha ya archetypes inayoelezea mifumo ya nishati ya ulimwengu inavyojidhihirisha kupitia binadamu.",
                step2: `Nyota yako ya ${p.zodiac.name} na element ya ${p.zodiac.element} ni kama 'blueprint' ya kisaikolojia inayoelezea tabia na msukumo wako wa asili.`,
                step3: `Kihisia, kuelewa nyota yako kukusaidia kukubali 'shadow' yako (kama ${p.shadowWork}) na kuitumia kama nguvu ya mabadiliko.`,
                step4: "Kila sayari ina frequency yake inayopiga resonance na nishati yako. Kuelewa hili ni kuelewa jinsi ya kucheza wimbo wako vizuri.",
                step5: `Insight: Je, unatumia sifa za asili za ${p.zodiac.name} kujenga maisha yako, au unazitumia kama kisingizio cha kutopiga hatua?`
            },
            numerology: {
                step1: "Namba ni lugha ya kimahesabu ya ulimwengu. Kila namba ina mtetemo wake unaobeba maana na kusudi.",
                step2: `Life Path ${p.lifePath} yako ni namba ya mwelekeo. Inawakilisha mfumo wa nishati uliokuja nao duniani ili kuukamilisha.`,
                step3: "Kihisia, namba zako zinaonyesha 'comfort zone' yako na maeneo ambayo unahitaji kujisukuma ili kukua.",
                step4: "Namba hufanya kazi kama 'harmonics' za maisha. Unapoelewa namba zako, unaanza kuona mifumo inayojirudia katika maisha yako.",
                step5: `Insight: Je, namba yako ya Destiny (${p.destiny}) inakuongoza kuelekea wapi leo?`
            },
            success: {
                step1: "Mafanikio si tukio la bahati, bali ni matokeo ya 'alignment' kati ya nishati yako na fursa za ulimwengu.",
                step2: "Kihisia na kimfumo, vikwazo unavyokutana navyo ni 'feedback' ya mfumo ikikuambia kuwa kuna sehemu ya nishati yako haijakaa sawa.",
                step3: "Hofu ya kushindwa mara nyingi ni 'dissonance' inayoziba uwezo wako wa kuona fursa. Mafanikio yanahitaji utulivu wa ndani.",
                step4: "Inaweza kufananishwa na 'tuning' ya chombo cha muziki. Ili upate mafanikio, lazima u-tune matendo yako na frequency ya wingi (abundance).",
                step5: "Insight: Je, unatafuta mafanikio nje yako, au unajenga mazingira ya ndani yanayovutia mafanikio?"
            },
            relationships: {
                step1: "Uhusiano ni kioo cha nafsi. Watu tunaowavuta katika maisha yetu wanaonyesha sehemu zetu ambazo zinahitaji uponyaji au sifa.",
                step2: "Kimfumo, uhusiano hufanya kazi kama 'resonance'. Uhusiano wenye afya ni ule ambapo frequency za watu wawili zinatengeneza 'harmony'.",
                step3: "Migogoro mara nyingi ni 'dissonance' inayotokea pale tunapojaribu kulazimisha resonance na mtu ambaye hayupo katika alignment yetu.",
                step4: "Katika harmonics, upendo ni frequency ya juu zaidi. Unapopenda, unainua vibration ya mfumo wako mzima.",
                step5: "Insight: Je, uhusiano wako wa sasa unakusaidia kukua au unakurudisha nyuma katika mifumo ya zamani?"
            },
            creativity: {
                step1: "Ubunifu ni uwezo wa kuunganisha vitu vilivyopo katika njia mpya na ya kipekee.",
                step2: "Katika mifumo ya asili, ubunifu ni nguvu inayoendesha mageuzi (evolution).",
                step3: "Kisaikolojia, ubunifu unahitaji hali ya akili iliyo wazi na isiyo na hofu ya kufanya makosa.",
                step4: "Kila wazo jipya lina frequency yake. Unapokuwa mbunifu, unaingia katika resonance na uwezekano mpya.",
                step5: "Tafakari: Je, unajipa ruhusa ya kucheza na mawazo mapya bila kujihukumu?"
            }
        };

        return library[domain] || library.human;
    },

    getCardKnowledge: function(cardType) {
        // Access the global knowledge base - this is the authoritative source
        if (!window.mavenguKnowledgeBase) {
            return "KOSA LA MFUMO: Hifadhidata ya Maarifa haijaanzishwa. Uchambuzi wa akili haupo.";
        }

        if (!window.mavenguKnowledgeBase[cardType]) {
            return `KADI HAIPATIKANI: Aina ya kadi "${cardType}" haipo katika Hifadhidata ya Maarifa. Hii inaweza kuashiria tatizo la usanidi wa mfumo au kadi bado haijaunganishwa katika mfumo wa uchambuzi.`;
        }

        // Retrieve card data - check for 8-point structure first
        let cardData = null;
        const cardEntry = window.mavenguKnowledgeBase[cardType];
        
        // For cards with 8-point structure (new format)
        if (cardEntry.default && cardEntry.default.CoreDefinition) {
            cardData = cardEntry.default;
        }
        // For cards with profile-specific data (e.g., lifePath[1], lifePath[2])
        else if (this.userProfile) {
            const lookupKey = this.getCardLookupKey(cardType, this.userProfile);
            if (cardEntry[lookupKey]) {
                cardData = cardEntry[lookupKey];
            } else if (cardEntry.default) {
                cardData = cardEntry.default;
            }
        } else if (cardEntry.default) {
            cardData = cardEntry.default;
        }

        if (!cardData) {
            return `TAARIFA HAZIJAKAMILIKA: Kadi ya uchambuzi "${cardType}" ipo katika Hifadhidata ya Maarifa lakini haina taarifa kamili za uchambuzi. Kadi hii inahitaji usanidi wa ziada.`;
        }

        // If card has full 8-point structure, use it
        if (cardData.CoreDefinition) {
            return this.formatEightPointExplanation(cardData);
        }

        // For cards without 8-point structure, construct authoritative explanation from available data
        return this.constructAuthoritativeExplanation(cardType, cardData);
    },

    getCardLookupKey: function(cardType, profile) {
        // Map card types to profile properties for lookup
        const lookupMap = {
            'lifePath': profile.lifePath,
            'destinyNumber': profile.destiny,
            'soulUrge': profile.soulUrge,
            'personalYear': profile.personalYear,
            'shadowWork': profile.zodiac?.name,
            'element': profile.zodiac?.element
        };
        return lookupMap[cardType] || 'default';
    },

    formatEightPointExplanation: function(cardData) {
        // Mandatory 8-point structure with mandatory real-life examples
        const examples = this.generateRealLifeExamples(cardData);
        
        return `
**${cardData.title}**

**1. Core Definition**
${cardData.CoreDefinition}

**2. Diagnostic Purpose**
${cardData.DiagnosticPurpose}

**3. How the Card Is Derived**
${cardData.HowDerived}

**4. What This Card Reveals About the User**
${cardData.RevealsAboutUser}

**5. Aligned Expression (High State)**
${cardData.AlignedExpression}

**6. Shadow Expression (Low State)**
${cardData.ShadowExpression}

**7. Real-Life Impact**
${cardData.RealLifeImpact}

**8. Guidance & Integration**
${cardData.GuidanceIntegration}

---

**MIFANO YA MAISHA HALISI**

**A. Mfano katika Tabia ya Kila Siku**
${examples.dailyBehavior}

**B. Mfano katika Mahusiano**
${examples.relationships}

**C. Mfano katika Kazi au Kusudi**
${examples.workPurpose}

**D. Mfano katika Kivuli (Shadow Expression)**
${examples.shadowExpression}

**E. Mfano katika Hali ya Ulinganifu (Aligned Expression)**
${examples.alignedExpression}
        `.trim();
    },

    generateRealLifeExamples: function(cardData) {
        // Generate contextual real-life examples based on card data
        const cardTitle = cardData.title || 'This diagnostic card';
        const cardType = this.inferCardType(cardData);
        
        // Base examples that will be customized per card type
        const baseExamples = {
            dailyBehavior: `Katika maisha ya kila siku, nishati hii hujidhihirisha kupitia mifumo maalum ya tabia. Kwa mfano, unaweza kujigundua unajibu hali kwa njia zinazoonyesha saini hii ya uchambuzi. Mpangilio wako wa asubuhi, mchakato wako wa kufanya maamuzi, na jinsi unavyoshughulikia matukio yasiyotarajiwa yote hubeba alama ya nishati ya kadi hii.`,
            relationships: `Katika mahusiano, kadi hii huamua jinsi unavyoungana na wengine. Unaweza kujikuta unavutiwa na aina fulani za watu au kujibu mienendo ya mahusiano kwa mifumo inayoweza kutabiriwa. Mtindo wako wa mawasiliano, mbinu yako ya kutatua migogoro, na uwezo wako wa kihisia wote huathiriwa na nishati hii ya uchambuzi.`,
            workPurpose: `Katika kazi na taaluma, kadi hii huamua nguvu zako za asili, changamoto, na mazingira bora ya kazi. Mtindo wako wa uongozi, mapendeleo yako ya ushirikiano, na jinsi unavyoshughulikia msongo wote huakisi nishati hii. Njia fulani za taaluma zitaonekana zaidi zinalingana wakati zingine zinaunda msuguano.`,
            shadowExpression: `Wakati nishati hii imezuiwa au inafanya kazi bila ufahamu, matatizo maalum hutokea. Unaweza kujikuta unarudia makosa sawa, unakumbana na kuchukizwa mara kwa mara katika maeneo fulani, au unajisikia umekwama licha ya juhudi zako. Kivuli huunda vikwazo halisi ambavyo vinaweza kuonekana katika uzoefu wako wa kila siku.`,
            alignedExpression: `Wakati nishati hii imeunganishwa kwa ufahamu, unakumbana na mafanikio wazi na mtiririko. Maamuzi huwa rahisi zaidi, mahusiano yanaboresha, na kazi inaonekana na maana. Unagundua mifumo ya bahati, nishati iliyoongezeka, na hisia ya kuwa "mahali sahihi wakati sahihi." Hali ya ulinganifu hutoa matokeo chanya yanayoweza kupimika.`
        };

        // Customize examples based on card type
        return this.customizeExamplesForCard(cardType, cardData, baseExamples);
    },

    inferCardType: function(cardData) {
        const title = (cardData.title || '').toLowerCase();
        if (title.includes('life path') || title.includes('processor')) return 'lifePath';
        if (title.includes('energy dna') || title.includes('nishati dna')) return 'energyDNA';
        if (title.includes('soul rank') || title.includes('cheo cha roho')) return 'soulRank';
        if (title.includes('frequency') || title.includes('masafa')) return 'frequency';
        if (title.includes('mantra')) return 'mantra';
        if (title.includes('meditation')) return 'meditation';
        if (title.includes('aesthetics')) return 'aesthetics';
        if (title.includes('oracle')) return 'oracle';
        if (title.includes('collective role')) return 'collectiveRole';
        if (title.includes('confidence')) return 'confidence';
        return 'generic';
    },

    customizeExamplesForCard: function(cardType, cardData, baseExamples) {
        const examples = { ...baseExamples };
        const title = cardData.title || '';
        
        switch(cardType) {
            case 'lifePath':
                examples.dailyBehavior = `Mtu wa Life Path 1 huaamka kila asubuhi na hamu ya kuanzisha kitu kipya. Anaweza kuanza siku yake kwa kuangalia barua pepe mara moja, kufanya maamuzi ya haraka kuhusu kiamsha kinywa, na kupanga siku yake kwa vipaumbele wazi. Anapokutana na tatizo, hawaiti ruhusa—anachukua hatua. Kinyume chake, mtu wa Life Path 2 huanza siku yake polepole zaidi, akijuliana na wengine, akizingatia chaguzi nyingi, na akitafuta maelewano kabla ya kutenda.`;
                examples.relationships = `Life Path 8 katika uhusiano huchukua jukumu la kupanga kifedha, hufanya maamuzi makuu kwa ujasiri, na anatarajia mpenzi wake amheshimu mamlaka yake. Anaweza kukumbana na changamoto wakati mpenzi wake anauliza chaguzi zake au anapojisikia nguvu yake inashindwa. Life Path 6, hata hivyo, hupendelea maelewano ya familia, hufanya maamuzi kulingana na kile bora kwa kila mtu, na anaweza kukumbana na kuweka mipaka kwa sababu anaweka mahitaji ya wengine kwanza.`;
                examples.workPurpose = `Life Path 3 anayefanya kazi kama mkurugenzi wa masoko hufanikiwa anapounda kampeni, akitoa maelezo kwa wateja, na kutumia ukarimu wake wa asili. Anakumbana na kazi za kurudiarudia za utawala na anajisikia amekwama katika mazingira yaliyopangwa sana. Mhasibu wa Life Path 4, hata hivyo, hushinda katika uchambuzi wa kina wa kifedha, kuunda mifumo, na kudumisha uthabiti. Anajisikia amezidiwa katika mazingira ya kazi yaliyofujifuji, yanayobadilika haraka.`;
                examples.shadowExpression = `Kivuli cha Life Path 5 hujidhihirisha wanapokuwa wasitulivu na kufanya mabadiliko ya taaluma ya ghafla kila baada ya miezi michache, wakiacha miradi isiyokamilika na kuchoma madaraja. Wanaweza kuruka kutoka kazi hadi kazi, uhusiano hadi uhusiano, kamwe hawajitoa muda wa kutosha kujenga kitu cha maana. Hofu yao ya kukwama inawasababisha kuharibu utulivu.`;
                examples.alignedExpression = `Uthibitishaji wa Life Path 7 unaonyesha wanapojitolea muda wa kuzingatia utafiti, kuandika ripoti kamili inayofunua mifumo iliyofichika, na kushiriki maarifa yao kwa njia inayosaidia wengine. Wanaona nguvu kutokana na masomo ya kina, wanaamini ufahamu wao wa ndani, na huunda thamani kupitia uwezo wao wa uchambuzi. Kazi yao inaonekana na maana na mahusiano yao yanazidi kupitia mawasiliano halisi.`;
                break;
                
            case 'energyDNA':
                examples.dailyBehavior = `Mtu aliye na saini ya Energy DNA ya masafa ya juu anaweza kugundua anajisikia ana nguvu katika nafasi zenye mwanga, wazi zenye mwanga wa asili, wakati mtu aliye na saini ya masafa ya chini anajisikia raha zaidi katika mazingira yenye giza zaidi, yaliyofungwa zaidi. Mzunguko wao wa asili wa usingizi, mapendeleo yao ya chakula, na hata aina za muziki zinazowasikiliza zote huakisi saini yao ya kipekee ya nishati.`;
                examples.relationships = `Mtu aliye na Energy DNA inayolingana na mpenzi wake hukumbana na mawasiliano rahisi, viwango vya nishati vilivyoshirikiwa, na uelewano wa pande zote bila maelezo ya mara kwa mara. Wanaona "wameonekana" na kueleweka katika kiwango cha msingi. Kinyume chake, Energy DNA isiyolingana huunda msuguano wa mara kwa mara—mpenzi mmoja anajisikia amekwama na uwepo wa mwingine, mawasiliano yanaonekana yamelazimishwa, na kuna hisia ya kuwa kimsingi hawako katika mzunguko sawa.`;
                examples.workPurpose = `Mtu ambaye Energy DNA yake inalingana na mazingira yake ya kazi hukumbana na nishati endelevu siku nzima, mtiririko wa ubunifu, na hisia ya kusudi. Anaweza kufanya kazi katika uwanja unaolingana na masafa yake—mganga anayefanya kazi katika kituo cha afya, mtu mwenye ubunifu anayefanya kazi katika studio ya sanaa. Wanapokuwa hawako katika mzunguko sawa, wanakumbana na uchovu wa mara kwa mara, ukosefu wa motisha, na hisia kwamba kazi yao inawapunguza nguvu badala ya kuwapa nishati.`;
                examples.shadowExpression = `Wakati Energy DNA imezuiwa, mtu anaweza kujilazimisha kuingia katika taaluma, mahusiano, au mitindo ya maisha ambayo hailingani na masafa yake ya kweli. Wanakumbana na uchovu wa mara kwa mara, unyogovu, na hisia ya kuwa "si sahihi" au "imevunjika." Wanaweza kujaribu kuwa mtu si yeye, ikisababisha mkanganyiko wa utambulisho na upungufu wa nishati.`;
                examples.alignedExpression = `Wakati Energy DNA imeonyeshwa kikamilifu, mtu huangaza uhalisi. Wanavutia fursa, mahusiano, na uzoefu ambao unalingana kikamilifu na masafa yao. Wanajisikia wana nishati kutokana na shughuli zao za kila siku, wanalala vizuri, na wanakumbana na mifumo ya bahati mara kwa mara. Maisha yao yanaonekana yanapita kwa urahisi, na wana hisia wazi ya ni nani.`;
                break;
                
            case 'frequency':
                examples.dailyBehavior = `Mtu aliye na utangamano wa masafa ya 528Hz anaweza kugundua anajisikia amepoa zaidi na amekaa katikati anaposikiliza aina maalum za muziki, anapofanya kazi katika mazingira yenye mpangilio maalum wa rangi, au anapotumia muda katika asili. Mwili wake unajibu kwa masafa haya—kiwango cha moyo hupungua, pumzi inazidi, na uwazi wa kiakili unaboresha.`;
                examples.relationships = `Wakati watu wawili wana masafa yanayolingana, mwingiliano wao unaonekana wa maelewano. Mazungumzo yanapita kwa urahisi, ukimya unaonekana rahisi, na kuna rhythm ya asili kwa wakati wao pamoja. Wakati masafa hayalingani, mtu mmoja anaweza kujisikia amekasirika, amekwama, au ana wasiwasi karibu na mwingine, hata kama hawezi kueleza kwa nini.`;
                examples.workPurpose = `Mchoraji wa picha ambaye masafa yake yanalingana na mazingira yake ya kazi huunda kazi yake bora, anajisikia amehamasishwa, na hudumisha nishati katika miradi mirefu. Anapofanya kazi katika nafasi yenye masafa yasiyolingana—labda taa kali za fluorescent na kelele ya mara kwa mara—ubunifu wake unakumbana, anajisikia amechoka, na ubora wa kazi yake unapungua.`;
                examples.shadowExpression = `Mtu anayepuuzia mahitaji yake ya masafa anaweza kujilazimisha kufanya kazi katika mazingira yanayomwondoa nguvu, ikisababisha kuchoka, msongo wa mara kwa mara, na matatizo ya afya. Anaweza kupuuzia uelekevu wake kama "udhaifu" na kusukuma kupitia usumbufu, hatimaye akikua na wasiwasi, usingizi usio na raha, au dalili za kimwili.`;
                examples.alignedExpression = `Mtu anayeunganisha kwa ufahamu na masafa yake yanayolingana huunda nyumba na nafasi ya kazi inayosaidia nishati yake. Wanachagua rangi, sauti, na mazingira yanayowainua. Kwa matokeo, wanakumbana na hali ya moyo iliyoboreshwa, usingizi bora, ubunifu ulioongezeka, na mahusiano yenye nguvu zaidi. Maisha yao yanaonekana yamewiana zaidi na yanaendelea.`;
                break;
                
            case 'soulRank':
                examples.dailyBehavior = `Roho Mchanga (Cheo cha Mwanzo) huzingatia nishati ya kila siku kujenga usalama, kuunda mifumo, na kujua ujuzi wa msingi wa maisha. Wanaweza kutumia muda muhimu katika mambo ya vitendo kama bajeti, maendeleo ya taaluma, na utulivu wa vitu. Roho Mzee (Cheo cha Mtaalamu au Mwalimu) anaweza kuweka kipaumbele mazoezi ya kiroho, tafakari ya kifalsafa, na huduma kwa wengine, hata kama inamaanisha faraja ya chini ya vitu.`;
                examples.relationships = `Roho Mchanga hutafuta mahusiano yanayotoa usalama, hadhi, na faida za vitendo. Wanaweza kuchagua wapenzi kulingana na malengo yaliyoshirikiwa, utulivu wa kifedha, na ulinganifu wa kijamii. Roho Mzee hutafuta mahusiano yanayosaidia ukuaji wa kiroho, uhusiano wa kina, na mageuzi ya pande zote, hata kama inamaanisha kushindana na miundo ya kawaida ya mahusiano.`;
                examples.workPurpose = `Roho Mchanga katika taaluma yake huzingatia kupanda ngazi, kupata pesa zaidi, na kufikia mafanikio yanayoonekana. Wanaweza kufanya kazi katika mazingira ya kampuni, taaluma za jadi, na kuthamini majina na kutambuliwa. Roho Mzee anaweza kuchagua kazi inayotumikia kusudi la juu, hata kama inalipa chini, na kuthamini maana zaidi ya hadhi.`;
                examples.shadowExpression = `Roho Mzee anayejaribu kuishi maisha ya Roho Mchanga hukumbana na kuridhika kwa kina. Wanaweza kuwa na taaluma ya mafanikio na utajiri wa vitu lakini wanaona wazi, wakiuliza maana ya yote. Wanaweza kukumbana na unyogovu, kujisikia hawana uhusiano na wengine, na kukumbana na hisia ya kuwa "katika maisha yasiyo sahihi."`;
                examples.alignedExpression = `Roho Mtaalamu anayefanya kazi katika ulinganifu na cheo chake anaweza kuwa mwalimu, mganga, au mshauri anayetumia hekima yake iliyokusanywa kuongoza wengine. Wanajisikia wametimia na kazi yao, wanakumbana na uhusiano wa kina na wanafunzi au wateja, na wanaona maisha yao kama sehemu ya mchakato mkubwa wa mageuzi. Wanaona halisi na wenye kusudi.`;
                break;
                
            case 'mantra':
                examples.dailyBehavior = `Mtu aliye na mantra "Nimeunganishwa na kusudi langu la juu" anaweza kuanza kila siku kwa kurudia sentensi hii. Katika siku nzima, anapokutana na maamuzi, anasimama na kuangalia: "Hii inalingana na kusudi langu la juu?" Mazoezi haya rahisi hubadilisha chaguzi zao kutoka kujibu hadi kwa makusudi. Wanajigundua wakisema "hapana" kwa fursa zisizowasaidia na "ndio" kwa zile zinazowasaidia.`;
                examples.relationships = `Mtu anayetumia mantra "Nawasiliana kwa upendo na uwazi" hupata kwamba kabla ya mazungumzo magumu, kurudia sentensi hii hubadilisha mbinu yake. Badala ya kujibu kwa ulinzi, wanasema kutoka mahali pa huruma. Mahusiano yao yanaboresha kwa sababu mawasiliano yao yanakuwa ya ufahamu zaidi na yanajibu kidogo.`;
                examples.workPurpose = `Mtaalamu anayetumia "Ninaunda thamani kupitia kujidhihirisha halisi" kama mantra yake hufanya chaguzi tofauti za taaluma. Anaweza kukataa kazi zenye malipo makubwa zisizolingana na maadili yake na kufuata kazi inayoruhusu kujidhihirisha halisi, hata kama inamaanisha pesa chini mwanzoni. Baada ya muda, ulinganifu huu huvutia fursa zinazolingana na yeye halisi.`;
                examples.shadowExpression = `Bila mantra ya ufahamu, akili ya mtu inaendesha programu ya kawaida, mara nyingi hasi. Wanaweza kuamka wakifikiria "Sio mzuri wa kutosha" au "Leo itakuwa na msongo," na mawazo haya hukua unabii unaojitimia. Maisha yao huakisi imani hizi zisizo na ufahamu, zikiunda mizunguko ya mapambano na kikomo.`;
                examples.alignedExpression = `Mtu anayetumia mantra yake ya kibinafsi mara kwa mara hukumbana na mabadiliko yanayoweza kupimika. Baada ya miezi mitatu ya mazoezi ya kila siku, wanagundua ujasiri ulioongezeka, kufanya maamuzi bora, na mahusiano yaliyoboreshwa. Mantra imerekebisha tena fahamu yao ya chini, na ukweli wao wa nje unaanza kuakisi nia zao za ufahamu.`;
                break;
                
            case 'meditation':
                examples.dailyBehavior = `Mtu aliye na itifaki ya kutafakari hai (kama kutafakari kwa kutembea) anaweza kuanza siku yake kwa kutembea kwa dakika 20, akitumia kama kutafakari kwa kusonga. Wanagundua akili yao inasafuka, suluhisho la matatizo linajitokeza kiasili, na wanajisikia wamegundua zaidi. Mtu aliye na itifaki inayozingatia pumzi anaweza kuchukua mapumziko ya dakika 5 ya kupumua siku nzima, akitumia kurekebisha tena nishati yake na kudumisha utulivu.`;
                examples.relationships = `Mtu anayejifunza kutafakari kwa upendo na huruma kabla ya mwingiliano na familia hupata wanajibu kwa subira zaidi na huruma. Wakati mwanafamilia ni mgumu, badala ya kujibu kwa kuchukizwa, wanaweza kufikia hisia ya kina ya uelewano. Mahusiano yao yanaboresha kwa sababu wanaleta nishati ya utulivu zaidi, ya sasa kwa mwingiliano.`;
                examples.workPurpose = `Mtaalamu anayetumia kutafakari kwa kuona kabla ya mikutano muhimu au mawasilisho hupata wanafanya vizuri zaidi. Wanaona mafanikio, wanaona wenyewe wakisema kwa ujasiri, na wanafikiria matokeo chanya. Mazoezi haya hupunguza wasiwasi na huboresha utendaji halisi. Taaluma yao inaendelea kwa sababu wanaonekana na ujasiri mkubwa na uwazi.`;
                examples.shadowExpression = `Mtu anayejua anapaswa kutafakari lakini anapinga hukumbana na matokeo: msongo wa mara kwa mara, ugumu wa kulala, kujibu kihisia, na ugumu wa kufanya maamuzi wazi. Wanaweza kujaribu kutafakari lakini kuacha haraka, wakisema "haifanyi kazi kwangu," wakati tatizo halisi ni hawajapata mbinu sahihi kwa aina yao ya nishati.`;
                examples.alignedExpression = `Mtu aliye na mazoezi ya mara kwa mara, yaliyounganishwa ya kutafakari hukumbana na faida zinazoweza kupimika: usingizi bora, udhibiti ulioboreshwa wa kihisia, kufikiri wazi zaidi, na ufahamu ulioongezeka. Wanagundua mifumo ya bahati inaongezeka, mahusiano yao yanaboresha, na wanashughulikia changamoto kwa urahisi zaidi. Maisha yao yanaonekana yamewiana zaidi na yenye kusudi.`;
                break;
                
            case 'aesthetics':
                examples.dailyBehavior = `Mtu ambaye saini yake ya kidigitali ni ya chini na safi anaweza kujisikia na wasiwasi na kusambaa katika mazingira yaliyojaa vitu. Wanapopanga nafasi yao, kusafisha uso, na kuondoa kelele ya kuona, mara moja wanajisikia wamepoa zaidi na wamezingatia zaidi. Uzalishaji wao unaongezeka, na wanafanya maamuzi bora. Mtu aliye na saini ya kidigitali ya nguvu na rangi anajisikia ana nishati kutokana na rangi za ujasiri na mpangilio wa kisanaa, akijisikia amekwama katika nafasi zisizo na rangi, zisizo na upande.`;
                examples.relationships = `Mtu ambaye mapendeleo yake ya kidigitali ni ya asili na ya kikaboni anaweza kujisikia hawezi katika nyumba ya kisasa, ya chini ya mpenzi wake. Wanaweza kushindwa kuelewa kwa nini wanajisikia wasiwasi hadi wanapogundua nafasi hailingani na mahitaji yao ya nishati. Wanapotumia muda katika mazingira yanayolingana na saini yao ya kidigitali, mahusiano yao yanaonekana ya maelewano zaidi.`;
                examples.workPurpose = `Mtaalamu mwenye ubunifu anayefanya kazi katika nafasi inayolingana na saini yake ya kidigitali—labda msanii katika studio iliyojazwa na sanaa ya kuhamasisha, mwanga wa asili, na zana za ubunifu—huunda kazi yake bora. Wanapolazimishwa kufanya kazi katika mazingira ya ofisi yasiyo na bakteria yasiyolingana na saini yao ya kidigitali, ubunifu wao unakumbana, na wanajisikia hawajahamasishwa.`;
                examples.shadowExpression = `Mtu anayepuuzia mahitaji yake ya kidigitali anaweza kuishi katika nafasi inayomwondoa nguvu kila siku bila kujua kwa nini. Wanaweza kukumbana na msongo wa mara kwa mara wa kiwango cha chini, ugumu wa kuzingatia, na hisia ya kuwa "si sahihi" bila kuelewa ni mazingira yao. Wanaweza kujilaumu kwa ukosefu wa motisha wakati tatizo halisi ni kutokuwiana kwa kidigitali.`;
                examples.alignedExpression = `Mtu anayeunda kwa ufahamu nafasi zilizounganishwa na saini yake ya kidigitali hukumbana na ubunifu ulioongezeka, hali ya moyo bora, na ustawi ulioboreshwa. Wanaweza kuandaa tena nyumba yao au nafasi ya kazi ili kufanana na mapendeleo yao ya kidigitali na kugundua mabadiliko chanya ya mara moja katika nishati yao, uzalishaji, na kuridhika kwa jumla na maisha.`;
                break;
                
            case 'oracle':
                examples.dailyBehavior = `Mtu hupokea ujumbe wa Oracle: "Amini wakati wa maisha yako." Siku inayofuata, wanapewa fursa ya kazi waliyoikungojea. Badala ya kuuliza kama ni wakati sahihi, wanakumbuka ujumbe wa Oracle na wakakubali kwa ujasiri. Ujumbe unakuwa kanuni ya kuongoza, ikisaidia kusafiri kutokuwa na uhakika kwa imani.`;
                examples.relationships = `Ujumbe wa Oracle: "Achana na kile kisichokutumikia tena" hufika wakati wa mapambano ya mahusiano. Mtu anagundua wamekuwa wakishikilia urafiki ambao umekua sumu. Ujumbe unawapa uwazi na ujasiri wa kuweka mipaka, ikisababisha mahusiano bora ya afya.`;
                examples.workPurpose = `Mtaalamu hupokea: "Kusudi lako linajitokeza kupitia huduma." Wamekuwa wakijisikia hawajatimia katika kazi yao ya kampuni. Ujumbe unawahamasisha kuchunguza jinsi wanaweza kutumikia wengine, ikisababisha kuanza biashara ya ziada ambayo hatimaye inakuwa wito wao wa wakati wote.`;
                examples.shadowExpression = `Mtu hupokea ujumbe wa Oracle lakini anaupuuzia kama "si wazi sana" au "si muhimu." Wanaendelea kufanya maamuzi kutoka hofu na mifumo ya zamani, wakikosa mwongozo. Baadaye, wanagundua ujumbe ulikuwa hasa kile walichohitaji, lakini waliupuuza, ikisababisha mapambano yaliyoendelea.`;
                examples.alignedExpression = `Mtu hupokea ujumbe wa Oracle na anauchukulia kwa uzito. Wanatafakari juu yake, wanaandika kuhusu hilo, na wanatafuta jinsi linavyotumika kwa hali yao ya sasa. Wanagundua mifumo ya bahati inayothibitisha ujumbe na wanafanya maamuzi yaliyounganishwa nalo. Maisha yao yanaanza kubadilika kwa njia chanya, na wanajisikia wameongozwa na wamekusudiwa.`;
                break;
                
            case 'collectiveRole':
                examples.dailyBehavior = `Mtu aliye na Jukumu la Jamii la "Mstabilizaji wa Gridi" anaweza kugundua kiasili huunda utulivu katika hali za fujo. Kazini, wakati kuna mgogoro, wanajitolea kutatua. Nyumbani, ndiye anayedumisha mifumo na utulivu. Wanaweza kushindwa kugundua hili ni jukumu lao hadi wanapolielewa kwa ufahamu, kisha wanaweza kuitumia kwa makusudi zaidi.`;
                examples.relationships = `"Mfufua Fahamu" katika mahusiano kiasili husaidia wengine kuona mtazamo mpya. Marafiki wanakuja kwa nasaha kwa sababu husaidia watu kuona hali tofauti. Mahusiano yao yana sifa ya ukuaji na mageuzi, kwa sababu kiasili wanasaidia ufufuo wa wengine.`;
                examples.workPurpose = `"Mganga" katika Jukumu lao la Jamii anaweza kufanya kazi kama mtaalamu wa akili, muuguzi, au mtaalamu wa afya. Wanaona wametimia zaidi wanaposaidia wengine kupona. Wanapojaribu kufanya kazi katika uwanja usiohusiana, wanajisikia hawajatimia, hata kama wamefanikiwa. Kusudi lao ni wazi: kuwezesha uponyaji.`;
                examples.shadowExpression = `Mtu asiyekijua Jukumu lao la Jamii anaweza kujisikia na hisia ya "kitu kinakosa" licha ya mafanikio ya kibinafsi. Wanaweza kuwa na taaluma nzuri, mahusiano, na faraja ya vitu, lakini wanajisikia hawajatimia. Wanafanya kazi bila kuelewa kusudi lao kubwa, ikisababisha hisia ya utupu.`;
                examples.alignedExpression = `Mtu anayeishi kwa ufahamu Jukumu lao la Jamii hukumbana na kuridhika kwa kina. "Mjenga Daraja" anaweza kufanya kazi katika uhusiano wa kimataifa, akileta tamaduni tofauti pamoja. Wanajisikia wana nishati kutokana na kazi yao, wanaona athari wanayoifanya, na wanaelewa jukumu lao katika hadithi kubwa ya binadamu. Maisha yao yana maana zaidi ya mafanikio ya kibinafsi.`;
                break;
                
            case 'confidence':
                examples.dailyBehavior = `Mtu aliye na Alama ya Imani ya AI ya juu (85%) anagundua maarifa ya uchambuzi yanaonekana sahihi na yanawasikiliza. Wanasoma ripoti yao na wanafikiria "Ndio, hii ni mimi hasa." Wanaamini mwongozo na wanafanya maamuzi kulingana nalo. Mtu aliye na alama ya chini (62%) anaweza kujisikia maarifa ni "karibu lakini si sahihi kabisa," ikionyesha hitaji la kutafakari zaidi au data ya ziada.`;
                examples.relationships = `Wakati Alama ya Imani ya AI ni ya juu kwa mienendo ya mahusiano, mtu anaweza kuamini maarifa kuhusu mifumo yao ya ulinganifu. Wanaweza kusoma "Huwa unavutia wapenzi ambao huakisi kazi yako ya kivuli" na wanatambua mfumo huu mara moja, ikiruhusu kufanya chaguzi za mahusiano za ufahamu zaidi.`;
                examples.workPurpose = `Alama ya juu ya imani kwa ulinganifu wa taaluma inampa mtu uwazi kuhusu njia yao ya taaluma. Wanasoma "Mazingira yako bora ya kazi yanajumuisha uhuru wa ubunifu na uongozi mdogo" na wanagundua kwa nini wamekumbana katika mazingira ya jadi ya kampuni. Maarifa haya yanawaongoza kuelekea chaguzi za taaluma zilizounganishwa zaidi.`;
                examples.shadowExpression = `Alama ya chini ya imani inaweza kuonyesha data zinazokinzana au ugumu. Mtu anaweza kusoma ripoti yao na kujisikia amekanganyika kwa sababu maarifa mengine yanawasikiliza wakati mengine hayawasikilizi. Bila kuelewa hii ni kawaida kwa wasifu magumu, wanaweza kupuuzia uchambuzi wote kama usio sahihi.`;
                examples.alignedExpression = `Mtu aliye na alama ya juu ya imani anatumia ripoti yao ya uchambuzi kama mwongozo unaoaminika. Wanarejelea wakati wa kufanya maamuzi, wanagundua mifumo iliyotabiriwa, na wanajisikia wamekusudiwa na uwazi unaoitoa. Alama ya juu inathibitisha uzoefu wao na inawapa nguvu kuchukua hatua zilizounganishwa.`;
                break;
                
            default:
                // For generic cards, use contextual examples based on card title and content
                if (cardData.CoreDefinition) {
                    const coreDef = cardData.CoreDefinition.toLowerCase();
                    if (coreDef.includes('energy') || coreDef.includes('nishati')) {
                        examples.dailyBehavior = `Saini hii ya nishati hujidhihirisha katika mifumo yako ya kila siku. Unaweza kugundua nyakati maalum za siku unapojisikia una nishati zaidi, shughuli fulani zinazokupunguza nguvu au kukujaza, na mambo ya mazingira yanayoathiri sana hali yako ya moyo na uzalishaji. Mzunguko wa asili wa mwili wako huakisi nishati hii ya uchambuzi.`;
                    }
                    if (coreDef.includes('relationship') || coreDef.includes('uhusiano')) {
                        examples.relationships = `Katika mahusiano yako, mfumo huu wa uchambuzi huamua nani unavutia, jinsi unavyowasiliana, na unachohitaji kutoka uhusiano. Unaweza kugundua unavutia mara kwa mara aina fulani za utu, unajibu mgogoro kwa njia zinazoweza kutabiriwa, na una mahitaji maalum ambayo lazima yatimizwe ili mahusiano yastawi.`;
                    }
                }
        }
        
        return examples;
    },

    constructAuthoritativeExplanation: function(cardType, cardData) {
        // For cards without full 8-point structure, construct authoritative explanation with mandatory examples
        const title = cardData.title || cardType;
        const description = cardData.description || cardData.metaphor || 'No description available.';
        const examples = this.generateRealLifeExamples(cardData);
        
        return `
**${title}**

**1. Core Definition**
${description}

**2. Kusudi la Uchambuzi**
Kadi hii ipo katika mfumo wa uchambuzi wa Mavengu kupima kipimo maalum cha wasifu wako wa nishati. Inafanya kazi kama injini ya uchambuzi inayofunua mifumo, mienendo, na saini za nishati za kipekee za usanidi wako wa mfumo.

**3. Kadi Hii Inapatikana Vipi**
Thamani hii ya uchambuzi huhesabiwa kupitia uchambuzi wa algoriti ya data yako ya kuzaliwa, mifumo ya namba, uwekaji wa nyota, na uchambuzi wa resonance ya nishati. Mfumo hujumuisha alama nyingi za data ili kutoa kipimo hiki maalum cha uchambuzi.

**4. Kadi Hii Inafunua Nini Kuhusu Mtumiaji**
Kadi hii inafunua mifumo ya msingi katika muundo wako wa kisaikolojia, kihisia, kitabia, na kiroho. Inaangaza mienendo ya msingi, mwelekeo wa asili, na saini za nishati zinazounda uzoefu wako wa ukweli na mwingiliano wako na ulimwengu.

**5. Uthibitishaji wa Ulinganifu (Hali ya Juu)**
Wakati nishati hii imeunganishwa kwa ufahamu na inafanya kazi kwa kujidhihirisha kwa kiwango cha juu, unakumbana na uwazi, mtiririko, na nguvu halisi. Nishati hujidhihirisha kwa njia ya kujenga, ikisaidia ukuaji wako na kukuwezesha kutimiza uwezo wako wa juu.

**6. Kivuli (Hali ya Chini)**
Wakati nishati hii imezuiwa, imepuuzwa, au inafanya kazi bila ufahamu, hujidhihirisha kama kikomo, mgogoro, au upinzani. Nishati ile ile ambayo inaweza kukupa nguvu inakuwa chanzo cha changamoto hadi itakapojumuishwa kwa ufahamu na kuunganishwa.

**7. Athari ya Maisha Halisi**
Kadi hii huathiri michakato yako ya kufanya maamuzi, mienendo ya mahusiano, ulinganifu wa taaluma, mtiririko wa kifedha, na mwelekeo wako wa jumla wa maisha. Kuelewa na kufanya kazi na nishati hii kwa ufahamu kunakuruhusu kuongeza maeneo haya ya maisha yako.

**8. Mwongozo na Ujumuishaji**
Ili kujumuishisha nishati hii, lazima kwanza ukikubali uwepo wake na kazi yake katika mfumo wako. Chunguza mifumo yake, angalia jinsi inavyojidhihirisha katika maisha yako ya kila siku, na kwa ufahamu chagua kuunganisha mawazo yako, hisia, na matendo na kujidhihirisha kwa kiwango cha juu. Kutafakari mara kwa mara na mazoezi ya makusudi kutazidi ujumuishaji wako wa nishati hii ya uchambuzi.

---

**MIFANO YA MAISHA HALISI**

**A. Mfano katika Tabia ya Kila Siku**
${examples.dailyBehavior}

**B. Mfano katika Mahusiano**
${examples.relationships}

**C. Mfano katika Kazi au Kusudi**
${examples.workPurpose}

**D. Mfano katika Kivuli (Shadow Expression)**
${examples.shadowExpression}

**E. Mfano katika Hali ya Ulinganifu (Aligned Expression)**
${examples.alignedExpression}

**KUMBUKA:** Mfumo wa uchambuzi wa kadi hii unaendelea kupanuliwa. Uchambuzi kamili wa alama 8 na data maalum ya wasifu wako utapatikana katika sasisho la mfumo linalofuata.
        `.trim();
    }
};

// Export to window
window.AIChat = AIChat;
