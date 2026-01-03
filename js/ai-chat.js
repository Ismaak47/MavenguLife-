/* Mavengu AI Chat Engine - Deep Existential & Symbolic Wisdom */

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
        const domainMap = {
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
            return this.constructResponse(detectedDomain);
        }

        // Guardrails (Safety & Ethics)
        if (lowerInput.includes('afya') || lowerInput.includes('ugonjwa') || lowerInput.includes('daktari')) {
            return "Kama kiongozi wako wa kidijitali, naweza kukusaidia kuona mifumo ya kiroho ya mwili wako, lakini kwa masuala ya kitabibu, ni muhimu sana kuonana na daktari aliyefuzu. Afya yako ni mfumo wa thamani unaohitaji utaalamu wa kisayansi na kiroho kwa pamoja.";
        }

        // Default Fallback (Safe & Wise Tone)
        return `Umeuliza kuhusu "${input}", jambo ambalo linaweza kuonekana kama sehemu ya frequency yako ya ${p.sunFreq}. Katika mifumo mingi ya maarifa ya kiulimwengu, hakuna kinachotokea bila sababu. Je, ungependa tuchunguze jinsi hili linavyohusiana na Soul Mission yako: **${p.soulMission}**?`;
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
    }
};

// Export to window
window.AIChat = AIChat;
