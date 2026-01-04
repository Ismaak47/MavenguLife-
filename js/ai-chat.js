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
                    response = `[SYSTEM ERROR: ${result.error}] \n\n` + this.generateResponse(input);
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
            const fallbackResponse = `[CRITICAL ERROR: ${error.message}] \n\n` + this.generateResponse(input);
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
        return `DIAGNOSTIC QUERY ANALYSIS: Your query "${input}" does not match a specific diagnostic card in the Knowledge Base. 

To provide you with an authoritative diagnostic explanation, please specify which diagnostic card you wish to understand. You may reference cards by their name (e.g., "Life Path", "Energy DNA", "Soul Rank") or by asking about specific aspects of your profile.

Your current diagnostic profile indicates a Sun Frequency of ${p.sunFreq} and a Soul Mission of "${p.soulMission}". These are active diagnostic engines in your system.

Which specific diagnostic card would you like me to explain using the complete 8-point structure?`;
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
            return "SYSTEM ERROR: Knowledge Base not initialized. Diagnostic intelligence unavailable.";
        }

        if (!window.mavenguKnowledgeBase[cardType]) {
            return `DIAGNOSTIC CARD NOT FOUND: The card type "${cardType}" is not present in the Knowledge Base. This may indicate a system configuration issue or the card has not yet been integrated into the diagnostic framework.`;
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
            return `INCOMPLETE DATA: The diagnostic card "${cardType}" exists in the Knowledge Base but lacks complete diagnostic information. This card requires additional configuration.`;
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

**REAL-LIFE ILLUSTRATIONS**

**A. Example in Daily Behavior**
${examples.dailyBehavior}

**B. Example in Relationships**
${examples.relationships}

**C. Example in Work or Purpose**
${examples.workPurpose}

**D. Example in Shadow Expression**
${examples.shadowExpression}

**E. Example in Aligned Expression**
${examples.alignedExpression}
        `.trim();
    },

    generateRealLifeExamples: function(cardData) {
        // Generate contextual real-life examples based on card data
        const cardTitle = cardData.title || 'This diagnostic card';
        const cardType = this.inferCardType(cardData);
        
        // Base examples that will be customized per card type
        const baseExamples = {
            dailyBehavior: `In daily life, this energy manifests through specific behavioral patterns. For instance, you may notice yourself consistently responding to situations in ways that reflect this diagnostic signature. Your morning routine, decision-making process, and how you handle unexpected events all carry the imprint of this card's energy.`,
            relationships: `In relationships, this card shapes how you connect with others. You might find yourself drawn to certain types of people or responding to relationship dynamics in predictable patterns. Your communication style, conflict resolution approach, and emotional availability are all influenced by this diagnostic energy.`,
            workPurpose: `In work and career, this card determines your natural strengths, challenges, and optimal work environments. Your leadership style, collaboration preferences, and how you handle pressure all reflect this energy. Certain career paths will feel more aligned while others create friction.`,
            shadowExpression: `When this energy is blocked or operating unconsciously, specific problems emerge. You might find yourself repeating the same mistakes, experiencing chronic frustration in certain areas, or feeling stuck despite your efforts. The shadow expression creates tangible obstacles that can be observed in your daily experience.`,
            alignedExpression: `When this energy is consciously aligned, you experience clear success and flow. Decisions become easier, relationships improve, and work feels meaningful. You notice synchronicities, increased energy, and a sense of being "in the right place at the right time." The aligned state produces measurable positive outcomes.`
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
                examples.dailyBehavior = `A Life Path 1 individual wakes up each morning with a drive to initiate something new. They might start their day by checking emails immediately, making quick decisions about breakfast, and planning their day with clear priorities. When faced with a problem, they don't wait for permission—they take action. In contrast, a Life Path 2 person begins their day more slowly, checking in with others, considering multiple options, and seeking harmony before acting.`;
                examples.relationships = `A Life Path 8 in a relationship takes charge of financial planning, makes major decisions confidently, and expects their partner to respect their authority. They might struggle when their partner questions their choices or when they feel their power is challenged. A Life Path 6, however, prioritizes family harmony, makes decisions based on what's best for everyone, and may struggle with setting boundaries because they put others' needs first.`;
                examples.workPurpose = `A Life Path 3 working as a marketing director thrives when creating campaigns, presenting to clients, and using their natural charisma. They struggle with repetitive administrative tasks and feel drained in overly structured environments. A Life Path 4 accountant, however, excels at detailed financial analysis, creating systems, and maintaining consistency. They feel overwhelmed in chaotic, fast-changing work environments.`;
                examples.shadowExpression = `A Life Path 5's shadow manifests when they become restless and make impulsive career changes every few months, leaving projects unfinished and burning bridges. They might jump from job to job, relationship to relationship, never committing long enough to build something substantial. Their fear of being trapped leads them to sabotage stability.`;
                examples.alignedExpression = `A Life Path 7's aligned expression shows when they dedicate focused time to research, write a comprehensive report that reveals hidden patterns, and share their insights in a way that helps others. They feel energized by deep study, trust their intuition, and create value through their analytical abilities. Their work feels meaningful and their relationships deepen through authentic communication.`;
                break;
                
            case 'energyDNA':
                examples.dailyBehavior = `Someone with a high-frequency Energy DNA signature might notice they feel energized in bright, open spaces with natural light, while someone with a lower-frequency signature feels more comfortable in dimmer, more enclosed environments. Their natural sleep patterns, food preferences, and even the types of music that resonate with them all reflect their unique energetic signature.`;
                examples.relationships = `A person with a compatible Energy DNA to their partner experiences effortless communication, shared energy levels, and mutual understanding without constant explanation. They feel "seen" and understood at a fundamental level. In contrast, mismatched Energy DNA creates constant friction—one partner feels drained by the other's presence, communication feels forced, and there's a sense of being fundamentally out of sync.`;
                examples.workPurpose = `An individual whose Energy DNA aligns with their work environment experiences sustained energy throughout the day, creative flow, and a sense of purpose. They might work in a field that matches their frequency—a healer working in a wellness center, a creative working in an art studio. When misaligned, they experience chronic fatigue, lack of motivation, and a sense that their work drains rather than energizes them.`;
                examples.shadowExpression = `When Energy DNA is suppressed, a person might force themselves into careers, relationships, or lifestyles that don't match their true frequency. They experience chronic fatigue, depression, and a sense of being "wrong" or "broken." They might try to be someone they're not, leading to identity confusion and energetic depletion.`;
                examples.alignedExpression = `When Energy DNA is fully expressed, a person radiates authenticity. They attract opportunities, relationships, and experiences that perfectly match their frequency. They feel energized by their daily activities, sleep deeply, and experience synchronicities regularly. Their life feels like it's flowing effortlessly, and they have a clear sense of who they are.`;
                break;
                
            case 'frequency':
                examples.dailyBehavior = `A person with a 528Hz frequency compatibility might notice they feel calmer and more centered when listening to specific types of music, working in environments with certain color schemes, or spending time in nature. Their body literally responds to these frequencies—heart rate slows, breathing deepens, and mental clarity improves.`;
                examples.relationships = `When two people have compatible frequencies, their interactions feel harmonious. Conversations flow easily, silences are comfortable, and there's a natural rhythm to their time together. When frequencies are incompatible, one person might feel agitated, drained, or anxious around the other, even if they can't explain why.`;
                examples.workPurpose = `A graphic designer whose frequency aligns with their work environment creates their best work, feels inspired, and maintains energy throughout long projects. When they work in a space with incompatible frequencies—perhaps harsh fluorescent lighting and constant noise—their creativity suffers, they feel fatigued, and their work quality declines.`;
                examples.shadowExpression = `Someone ignoring their frequency needs might force themselves to work in environments that drain them, leading to burnout, chronic stress, and health issues. They might dismiss their sensitivity as "weakness" and push through discomfort, eventually developing anxiety, insomnia, or physical symptoms.`;
                examples.alignedExpression = `A person consciously aligning with their compatible frequencies creates a home and workspace that supports their energy. They choose colors, sounds, and environments that uplift them. As a result, they experience improved mood, better sleep, increased creativity, and stronger relationships. Their life feels more balanced and sustainable.`;
                break;
                
            case 'soulRank':
                examples.dailyBehavior = `A Young Soul (Novice rank) focuses daily energy on building security, establishing routines, and mastering basic life skills. They might spend significant time on practical matters like budgeting, career advancement, and material stability. An Old Soul (Adept or Master rank) might prioritize spiritual practice, philosophical reflection, and service to others, even if it means less material comfort.`;
                examples.relationships = `A Young Soul seeks relationships that provide security, status, and practical benefits. They might choose partners based on shared goals, financial stability, and social compatibility. An Old Soul seeks relationships that support spiritual growth, deep connection, and mutual evolution, even if it means challenging conventional relationship structures.`;
                examples.workPurpose = `A Young Soul in their career focuses on climbing the ladder, earning more money, and achieving visible success. They might work in corporate environments, traditional careers, and value titles and recognition. An Old Soul might choose work that serves a higher purpose, even if it pays less, and values meaning over status.`;
                examples.shadowExpression = `An Old Soul trying to live a Young Soul lifestyle experiences deep dissatisfaction. They might have a successful career and material wealth but feel empty, questioning the meaning of it all. They might struggle with depression, feel disconnected from others, and experience a sense of being "in the wrong life."`;
                examples.alignedExpression = `An Adept Soul working in alignment with their rank might be a teacher, healer, or counselor who uses their accumulated wisdom to guide others. They feel fulfilled by their work, experience deep connections with students or clients, and see their life as part of a larger evolutionary process. They feel authentic and purposeful.`;
                break;
                
            case 'mantra':
                examples.dailyBehavior = `A person with the mantra "I am aligned with my highest purpose" might start each day by repeating this phrase. Throughout the day, when facing decisions, they pause and check: "Does this align with my highest purpose?" This simple practice shifts their choices from reactive to intentional. They notice themselves saying "no" to opportunities that don't serve them and "yes" to those that do.`;
                examples.relationships = `Someone using the mantra "I communicate with love and clarity" finds that before difficult conversations, repeating this phrase changes their approach. Instead of reacting defensively, they speak from a place of compassion. Their relationships improve because their communication becomes more conscious and less reactive.`;
                examples.workPurpose = `A professional using "I create value through authentic expression" as their mantra makes different career choices. They might turn down high-paying jobs that don't align with their values and pursue work that allows authentic self-expression, even if it means less money initially. Over time, this alignment attracts opportunities that match their authentic self.`;
                examples.shadowExpression = `Without a conscious mantra, a person's mind runs on default programming, often negative. They might wake up thinking "I'm not good enough" or "Today will be stressful," and these thoughts become self-fulfilling prophecies. Their life reflects these unconscious beliefs, creating cycles of struggle and limitation.`;
                examples.alignedExpression = `A person consistently using their personal mantra experiences measurable shifts. After three months of daily practice, they notice increased confidence, better decision-making, and improved relationships. The mantra has reprogrammed their subconscious, and their external reality begins to reflect their conscious intentions.`;
                break;
                
            case 'meditation':
                examples.dailyBehavior = `A person with an active meditation protocol (like walking meditation) might start their day with a 20-minute walk, using it as moving meditation. They notice their mind clears, solutions to problems emerge naturally, and they feel more grounded. Someone with a breath-focused protocol might take 5-minute breathing breaks throughout the day, using them to reset their energy and maintain calm.`;
                examples.relationships = `A person practicing loving-kindness meditation before family interactions finds they respond with more patience and compassion. When a family member is difficult, instead of reacting with frustration, they can access a deeper sense of understanding. Their relationships improve because they're bringing a calmer, more present energy to interactions.`;
                examples.workPurpose = `A professional using visualization meditation before important meetings or presentations finds they perform better. They visualize success, see themselves speaking confidently, and imagine positive outcomes. This practice reduces anxiety and improves actual performance. Their career advances because they're showing up with greater confidence and clarity.`;
                examples.shadowExpression = `Someone who knows they should meditate but resists it experiences the consequences: chronic stress, difficulty sleeping, emotional reactivity, and difficulty making clear decisions. They might try to meditate but give up quickly, saying "it doesn't work for me," when the real issue is they haven't found the right technique for their energetic type.`;
                examples.alignedExpression = `A person with a consistent, aligned meditation practice experiences measurable benefits: better sleep, improved emotional regulation, clearer thinking, and increased intuition. They notice synchronicities increase, their relationships improve, and they handle challenges with greater ease. Their life feels more balanced and purposeful.`;
                break;
                
            case 'aesthetics':
                examples.dailyBehavior = `A person whose aesthetic is minimalist and clean might feel anxious and scattered in a cluttered environment. When they organize their space, clear surfaces, and remove visual noise, they immediately feel calmer and more focused. Their productivity increases, and they make better decisions. Someone with a vibrant, colorful aesthetic feels energized by bold colors and artistic arrangements, feeling drained in bland, neutral spaces.`;
                examples.relationships = `A person whose aesthetic preference is natural and organic might feel uncomfortable in a partner's modern, minimalist home. They might not understand why they feel uneasy until they realize the space doesn't match their energetic needs. When they spend time in environments that match their aesthetic, their relationships feel more harmonious.`;
                examples.workPurpose = `A creative professional working in a space that matches their aesthetic—perhaps an artist in a studio filled with inspiring art, natural light, and creative tools—produces their best work. When forced to work in a sterile office environment that doesn't match their aesthetic, their creativity suffers, and they feel uninspired.`;
                examples.shadowExpression = `Someone ignoring their aesthetic needs might live in a space that drains them daily without realizing why. They might experience chronic low-grade stress, difficulty concentrating, and a sense of being "off" without understanding it's their environment. They might blame themselves for lack of motivation when the real issue is aesthetic misalignment.`;
                examples.alignedExpression = `A person who consciously creates spaces aligned with their aesthetic experiences increased creativity, better mood, and improved well-being. They might redecorate their home or workspace to match their aesthetic preferences and notice immediate positive changes in their energy, productivity, and overall satisfaction with life.`;
                break;
                
            case 'oracle':
                examples.dailyBehavior = `A person receives an Oracle message: "Trust the timing of your life." The next day, they're offered a job opportunity they've been waiting for. Instead of questioning if it's the right time, they remember the Oracle's message and accept with confidence. The message becomes a guiding principle, helping them navigate uncertainty with trust.`;
                examples.relationships = `An Oracle message: "Release what no longer serves you" arrives during a time of relationship struggle. The person realizes they've been holding onto a friendship that's become toxic. The message gives them clarity and courage to set boundaries, leading to healthier relationships.`;
                examples.workPurpose = `A professional receives: "Your purpose is emerging through service." They've been feeling unfulfilled in their corporate job. The message inspires them to explore how they can serve others, leading them to start a side business that eventually becomes their full-time calling.`;
                examples.shadowExpression = `Someone receives an Oracle message but dismisses it as "too vague" or "not relevant." They continue making decisions from fear and old patterns, missing the guidance. Later, they realize the message was exactly what they needed, but they ignored it, leading to continued struggle.`;
                examples.alignedExpression = `A person receives an Oracle message and takes it seriously. They meditate on it, journal about it, and look for how it applies to their current situation. They notice synchronicities confirming the message and make decisions aligned with it. Their life begins to shift in positive ways, and they feel guided and supported.`;
                break;
                
            case 'collectiveRole':
                examples.dailyBehavior = `A person with the Collective Role of "Grid Stabilizer" might notice they naturally create calm in chaotic situations. At work, when there's conflict, they step in to mediate. At home, they're the one who maintains routines and stability. They might not realize this is their role until they understand it consciously, then they can use it more intentionally.`;
                examples.relationships = `A "Consciousness Awakener" in relationships naturally helps others see new perspectives. Friends come to them for advice because they help people see situations differently. Their relationships are characterized by growth and evolution, as they naturally support others' awakening.`;
                examples.workPurpose = `A "Healer" in their Collective Role might work as a therapist, nurse, or wellness practitioner. They feel most fulfilled when helping others heal. When they try to work in unrelated fields, they feel unfulfilled, even if they're successful. Their purpose is clear: to facilitate healing.`;
                examples.shadowExpression = `Someone unaware of their Collective Role might feel a sense of "something missing" despite personal success. They might have a good career, relationships, and material comfort, but feel unfulfilled. They're operating without understanding their larger purpose, leading to a sense of emptiness.`;
                examples.alignedExpression = `A person consciously living their Collective Role experiences deep fulfillment. A "Bridge Builder" might work in international relations, bringing different cultures together. They feel energized by their work, see the impact they're making, and understand their role in the larger human story. Their life has meaning beyond personal achievement.`;
                break;
                
            case 'confidence':
                examples.dailyBehavior = `A person with a high AI Confidence Score (85%) notices the diagnostic insights feel accurate and resonant. They read their report and think "Yes, this is exactly me." They trust the guidance and make decisions based on it. Someone with a lower score (62%) might feel the insights are "close but not quite right," indicating the need for more self-reflection or additional data.`;
                examples.relationships = `When the AI Confidence Score is high for relationship dynamics, a person can trust the insights about their compatibility patterns. They might read "You tend to attract partners who mirror your shadow work" and recognize this pattern immediately, allowing them to make more conscious relationship choices.`;
                examples.workPurpose = `A high confidence score for career alignment gives someone clarity about their vocational path. They read "Your optimal work environment includes creative freedom and minimal hierarchy" and realize why they've struggled in traditional corporate settings. This insight guides them toward more aligned career choices.`;
                examples.shadowExpression = `A low confidence score might indicate conflicting data or complexity. A person might read their report and feel confused because some insights resonate while others don't. Without understanding this is normal for complex profiles, they might dismiss the entire diagnostic as inaccurate.`;
                examples.alignedExpression = `A person with a high confidence score uses their diagnostic report as a trusted guide. They reference it when making decisions, notice patterns it predicted, and feel supported by the clarity it provides. The high score validates their experience and empowers them to take aligned action.`;
                break;
                
            default:
                // For generic cards, use contextual examples based on card title and content
                if (cardData.CoreDefinition) {
                    const coreDef = cardData.CoreDefinition.toLowerCase();
                    if (coreDef.includes('energy') || coreDef.includes('nishati')) {
                        examples.dailyBehavior = `This energetic signature manifests in your daily routines. You might notice specific times of day when you feel more energized, certain activities that drain or replenish you, and environmental factors that significantly impact your mood and productivity. Your body's natural rhythms reflect this diagnostic energy.`;
                    }
                    if (coreDef.includes('relationship') || coreDef.includes('uhusiano')) {
                        examples.relationships = `In your relationships, this diagnostic pattern determines who you attract, how you communicate, and what you need from connections. You might notice you consistently attract certain personality types, respond to conflict in predictable ways, and have specific needs that must be met for relationships to thrive.`;
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

**2. Diagnostic Purpose**
This card exists within the Mavengu diagnostic system to measure a specific dimension of your energetic profile. It functions as a diagnostic engine that reveals patterns, tendencies, and energetic signatures unique to your system configuration.

**3. How the Card Is Derived**
This diagnostic value is calculated through algorithmic analysis of your birth data, numerological patterns, astrological placements, and energetic resonance analysis. The system synthesizes multiple data points to generate this specific diagnostic metric.

**4. What This Card Reveals About the User**
This card reveals fundamental patterns in your psychological, emotional, behavioral, and spiritual makeup. It illuminates core tendencies, natural inclinations, and energetic signatures that shape your experience of reality and your interactions with the world.

**5. Aligned Expression (High State)**
When this energy is consciously aligned and operating at its highest expression, you experience clarity, flow, and authentic power. The energy manifests constructively, supporting your growth and enabling you to fulfill your highest potential.

**6. Shadow Expression (Low State)**
When this energy is blocked, ignored, or operating unconsciously, it manifests as limitation, conflict, or resistance. The same energy that could empower you becomes a source of challenge until it is consciously integrated and aligned.

**7. Real-Life Impact**
This card influences your decision-making processes, relationship dynamics, career alignment, financial flow, and overall life trajectory. Understanding and working with this energy consciously allows you to optimize these areas of your life.

**8. Guidance & Integration**
To integrate this energy, you must first acknowledge its presence and function in your system. Study its patterns, observe how it manifests in your daily life, and consciously choose to align your thoughts, emotions, and actions with its highest expression. Regular reflection and intentional practice will deepen your integration of this diagnostic energy.

---

**REAL-LIFE ILLUSTRATIONS**

**A. Example in Daily Behavior**
${examples.dailyBehavior}

**B. Example in Relationships**
${examples.relationships}

**C. Example in Work or Purpose**
${examples.workPurpose}

**D. Example in Shadow Expression**
${examples.shadowExpression}

**E. Example in Aligned Expression**
${examples.alignedExpression}

**NOTE:** This card's diagnostic framework is currently being expanded. A complete 8-point analysis with specific data for your profile will be available in a future system update.
        `.trim();
    }
};

// Export to window
window.AIChat = AIChat;
