/* AI Chat Simulation for MavenguLife - Safe Knowledge Architecture Version */

const AIChat = {
    userProfile: null,
    chatContainer: null,
    inputField: null,
    history: [],
    lastTopic: null,
    continuationIndex: 0,

    // Logical Knowledge Base Reference (Conceptual Structure)
    // NOTE: These are NOT real files, but logical domains for reasoning.
    knowledgeDomains: {
        world: {
            path: '/knowledge-base/world.json',
            subdomains: ['laws_of_nature', 'cycles', 'systems_balance']
        },
        human: {
            path: '/knowledge-base/human.json',
            subdomains: ['consciousness', 'emotions_behavior', 'life_stages', 'meaning_purpose']
        },
        harmonics: {
            path: '/knowledge-base/harmonics.json',
            subdomains: ['vibration_frequency', 'resonance_dissonance', 'rhythm_balance']
        },
        astrology: {
            path: '/knowledge-base/astrology.json',
            subdomains: ['zodiac_signs', 'sun_moon_rising', 'archetypes_patterns']
        },
        numerology: {
            path: '/knowledge-base/numerology.json',
            subdomains: ['life_path_numbers', 'cycles_personal_years']
        }
    },

    init: function (profile) {
        this.userProfile = profile;
        this.chatContainer = document.getElementById('chat-messages');
        this.inputField = document.getElementById('user-input');

        if (this.chatContainer.children.length <= 1) {
            this.addMessage(`Karibu katika mzunguko wa maarifa, ${profile.name}. Mimi ni Mavengu. Nipo hapa kufafanua siri za ulimwengu zilizojificha katika frequency yako ya ${profile.sunFreq} na Life Path ${profile.lifePath}. Safari yako ya kujitambua inaanza na swali lolote ulilo nalo moyoni. Tunaweza kuanza na nini?`, 'bot');
        }
    },

    handleInput: function () {
        const message = this.inputField.value.trim();
        if (!message) return;

        this.addMessage(message, 'user');
        this.inputField.value = '';
        this.showTyping();

        setTimeout(() => {
            this.removeTyping();
            const response = this.generateResponse(message);
            this.addMessage(response, 'bot');
            this.history.push({ user: message, bot: response });
            if (this.history.length > 5) this.history.shift();
        }, 1500);
    },

    addMessage: function (text, sender) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `message ${sender} animate-fade-in`;
        const formattedText = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        msgDiv.innerHTML = formattedText.replace(/\n/g, '<br>');
        this.chatContainer.appendChild(msgDiv);
        this.chatContainer.scrollTop = this.chatContainer.scrollHeight;
    },

    showTyping: function () {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot typing-indicator';
        typingDiv.id = 'typing-indicator';
        typingDiv.textContent = 'Mavengu anachota maarifa ya kiulimwengu...';
        this.chatContainer.appendChild(typingDiv);
        this.chatContainer.scrollTop = this.chatContainer.scrollHeight;
    },

    removeTyping: function () {
        const typingDiv = document.getElementById('typing-indicator');
        if (typingDiv) typingDiv.remove();
    },

    generateResponse: function (input) {
        const lowerInput = input.toLowerCase();
        const p = this.userProfile;

        // --- INTENT DETECTION (Domain Mapping) ---
        const domainMap = {
            human: ['maana ya maisha', 'kwanini nipo', 'tofauti', 'mzunguko uleule', 'nafasi yangu', 'kujitambua', 'roho', 'nafsi', 'hisia', 'tabia'],
            world: ['asili', 'muda', 'wakati', 'usawa', 'fujo', 'chaos', 'sheria za asili', 'mzunguko', 'cycle'],
            harmonics: ['vibration', 'frequency', 'mtetemo', 'resonance', 'hali', 'sauti', 'harmonic', 'rhythm', 'dissonance'],
            astrology: ['zodiac', 'nyota', 'astrologia', 'element', 'sayari', 'sun', 'moon', 'rising', 'archetype'],
            numerology: ['life path', 'namba yangu', 'namba', 'destiny', 'namba 4', 'personal year'],
            success: ['sifanikiwi', 'kwama', 'shida', 'vikwazo', 'mafanikio', 'pesa', 'kazi', 'utajiri'],
            relationships: ['ndoa', 'mapenzi', 'uhusiano', 'mke', 'mume', 'love', 'mchumba'],
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
            const domains = ['human', 'world', 'harmonics', 'astrology', 'numerology', 'success'];
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
        const data = this.getSafeKnowledge(domain, p);

        // 4-Step Response Engine
        return `
**1. Ufafanuzi wa Dhana**
${data.concept}

**2. Mtazamo wa Kimfumo / Kisayansi**
${data.systemic}

**3. Mtazamo wa Fahamu / Experience ya Binadamu**
${data.spiritual}

**4. Tafakari au Insight ya Vitendo**
${data.practical}
        `.trim();
    },

    getSafeKnowledge: function (domain, p) {
        // Logical Knowledge Retrieval (Conceptual mapping)
        const library = {
            human: {
                concept: "Ufahamu (Consciousness) ni uwezo wa nafsi kujitambua na kuelewa maana ya kuwepo kwake katika ulimwengu.",
                systemic: "Kihisia, ufahamu hufanya kazi kama mfumo wa 'feedback loop'. Uzoefu wako unajenga ramani ya ndani inayokuongoza kwenye maamuzi yako.",
                spiritual: "Katika uzoefu wa binadamu, confusion unayohisi mara nyingi ni ishara ya ukuaji. Ni mchakato wa nafsi yako kutafuta resonance mpya na ulimwengu.",
                practical: "Insight: Jaribu kutazama hisia zako kama 'data' inayokuambia kama upo katika alignment na kusudi lako au la."
            },
            world: {
                concept: "Ulimwengu unaongozwa na sheria za asili zinazohakikisha usawa (balance) na mzunguko (cycles).",
                systemic: "Kila mfumo wa asili una rhythm yake. Kama vile misimu inavyobadilika, maisha yako yana vipindi vya 'expansion' (ukuaji) na 'contraction' (tafakari).",
                spiritual: "Kufahamu sheria ya 'Cause and Effect' (Sababu na Matokeo) kunakusaidia kuona kuwa wewe ni mshiriki hai katika kutengeneza ukweli wako.",
                practical: "Insight: Je, unapingana na mzunguko wa sasa wa maisha yako au unajifunza kutokana na kile unachopitia sasa?"
            },
            harmonics: {
                concept: "Harmonics ni sayansi ya frequency na jinsi zinavyoingiliana kutengeneza maelewano (harmony) au fujo (dissonance).",
                systemic: "Frequency yako ya ${p.sunFreq} ni 'base note' ya mfumo wako wa nishati. Resonance hutokea pale matendo yako yanapoendana na frequency hii.",
                spiritual: "Unapohisi kukwama, mara nyingi ni 'dissonance' ya nishati. Ni ishara kuwa unahitaji 're-tuning' ili kurudi katika rhythm yako ya asili.",
                practical: "Insight: Ni mambo gani katika mazingira yako yanayoongeza vibration yako na yapi yanayopunguza?"
            },
            astrology: {
                concept: "Astrology ni lugha ya archetypes inayoelezea mifumo ya nishati ya ulimwengu inavyojidhihirisha kupitia binadamu.",
                systemic: "Nyota yako ya ${p.zodiac.name} na element ya ${p.zodiac.element} ni kama 'blueprint' ya kisaikolojia inayoelezea tabia na msukumo wako wa asili.",
                spiritual: "Sayari haziamui hatima yako, bali zinaashiria fursa za ukuaji. Ni njia mojawapo ya kuona jinsi unavyoweza kutumia nishati ya macrocosm katika maisha yako.",
                practical: "Insight: Unawezaje kutumia sifa za ${p.zodiac.element} (kama vile utulivu au nguvu) kuleta usawa katika changamoto unayopitia?"
            },
            numerology: {
                concept: "Numerology ni sayansi ya frequency zilizojificha katika namba, ambapo kila namba inabeba vibration ya kipekee.",
                systemic: "Life Path ${p.lifePath} inawakilisha mfumo wa uendeshaji (operating system) wa safari yako. Inatoa mpangilio na mantiki katika uzoefu wako.",
                spiritual: "Namba 4 (Mjenzi) inamaanisha roho yako ilichagua kuja kudhihirisha utulivu na kujenga misingi imara kwa ajili ya wengine.",
                practical: "Insight: Ni misingi gani unaijenga leo katika maisha yako ambayo itakuwa na faida kwa vizazi vijavyo?"
            },
            success: {
                concept: "Mafanikio yanaweza kueleweka kama hali ya kuwa katika alignment kamili na frequency yako ya asili.",
                systemic: "Kukwama (failure) mara nyingi ni ishara ya 'system error' ambapo unatumia nishati nyingi kwenye mambo yasiyo ya asili yako.",
                spiritual: "Mafanikio ya kweli yanakuja pale unapokubali Shadow Work yako: **${p.shadowWork}** na kuitumia kama daraja la kuelekea kwenye nuru.",
                practical: "Insight: Je, unatafuta mafanikio kulingana na vigezo vya nje, au unajenga mafanikio yanayoendana na Life Path ${p.lifePath} yako?"
            },
            relationships: {
                concept: "Uhusiano ni kioo kinachoonyesha jinsi unavyohusiana na nafsi yako mwenyere na ulimwengu.",
                systemic: "Katika mifumo ya kijamii, tunavuta watu ambao frequency zao zinaendana na mifumo yetu ya ndani (resonance).",
                spiritual: "Ndoa na mapenzi ni nafasi ya kiroho ya kujifunza upendo, usawa, na jinsi ya kuunganisha nishati mbili tofauti kuwa moja.",
                practical: "Insight: Ni sifa gani unazoziona kwa wengine ambazo ni kioo cha kile unachohitaji kukifanyia kazi ndani yako?"
            }
        };

        return library[domain] || library.human;
    }
};

window.AIChat = AIChat;
