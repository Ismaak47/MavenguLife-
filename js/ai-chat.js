/* AI Chat Simulation for MavenguLife - Advanced Role & Identity Version */

const AIChat = {
    userProfile: null,
    chatContainer: null,
    inputField: null,
    history: [],
    lastTopic: null,
    continuationIndex: 0,

    // Internal Knowledge Structure
    knowledgeBase: {
        world: ['laws_of_nature', 'cycles_and_time', 'balance_and_chaos'],
        human: ['consciousness', 'emotions', 'life_stages', 'purpose'],
        harmonics: ['vibration', 'resonance', 'harmony', 'energy_patterns'],
        astrology: ['zodiac', 'planetary', 'archetypes'],
        numerology: ['life_path', 'destiny', 'cycles']
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

        // --- INTENT DEFINITIONS ---
        const intents = {
            consciousness: ['maana ya maisha', 'kwanini nipo', 'tofauti', 'mzunguko uleule', 'nafasi yangu', 'kujitambua', 'roho', 'nafsi'],
            world: ['asili', 'muda', 'wakati', 'usawa', 'fujo', 'chaos', 'sheria za asili'],
            harmonics: ['vibration', 'frequency', 'mtetemo', 'resonance', 'hali', 'sauti', 'harmonic'],
            astrology: ['zodiac', 'nyota', 'astrologia', 'element', 'sayari'],
            numerology: ['life path', 'namba yangu', 'namba', 'destiny'],
            success: ['sifanikiwi', 'kwama', 'shida', 'vikwazo', 'mafanikio', 'pesa', 'kazi'],
            relationships: ['ndoa', 'mapenzi', 'uhusiano', 'mke', 'mume', 'love'],
            continuation: ['endelea', 'niambie zaidi', 'ndio', 'sawa', 'hapo sawa'],
            clarification: ['sijaelewa', 'sielewi', 'fafanua', 'rudia']
        };

        let detectedTopic = null;
        for (const [topic, keywords] of Object.entries(intents)) {
            if (keywords.some(kw => lowerInput.includes(kw))) {
                detectedTopic = topic;
                break;
            }
        }

        // Handle Special Intents
        if (detectedTopic === 'clarification') {
            return "Inaweza kueleweka kama mchakato wa 'alignment'. Namaanisha kuwa maisha yako yanaongozwa na rhythm fulani. Kama vile wimbo unavyohitaji mpangilio, maisha yako yanahitaji usawa kati ya kile unachokiwaza na kile unachokifanya. Je, ungependa nikupe mfano rahisi?";
        }

        if (detectedTopic === 'continuation') {
            const topics = ['consciousness', 'world', 'harmonics', 'astrology', 'numerology', 'success'];
            this.continuationIndex = (this.continuationIndex + 1) % topics.length;
            detectedTopic = topics[this.continuationIndex];
        }

        if (detectedTopic) {
            this.lastTopic = detectedTopic;
            return this.constructResponse(detectedTopic);
        }

        // Guardrails
        if (lowerInput.includes('afya') || lowerInput.includes('ugonjwa') || lowerInput.includes('daktari')) {
            return "Kama kiongozi wako, naweza kukusaidia kuona mifumo ya kiroho ya mwili wako, lakini kwa masuala ya kitabibu, ni muhimu sana kuonana na daktari aliyefuzu. Afya yako ni mfumo wa thamani unaohitaji utaalamu wa kisayansi na kiroho kwa pamoja.";
        }

        // Default Fallback (Wise Tone)
        return `Umeuliza kuhusu "${input}", jambo ambalo linaweza kuonekana kama sehemu ya frequency yako ya ${p.sunFreq}. Katika mifumo mingi ya maarifa, hakuna kinachotokea bila sababu. Je, ungependa tuchunguze jinsi hili linavyohusiana na Soul Mission yako: **${p.soulMission}**?`;
    },

    constructResponse: function (topic) {
        const p = this.userProfile;
        const data = this.getLibraryData(topic, p);

        return `
**1. Ufafanuzi wa Dhana**
${data.concept}

**2. Mtazamo wa Kisayansi / Kimfumo**
${data.systemic}

**3. Mtazamo wa Kiroho / Fahamu**
${data.spiritual}

**4. Tafakari ya Vitendo**
${data.practical}
        `.trim();
    },

    getLibraryData: function (topic, p) {
        const numMeaning = window.Numerology.getMeaning(p.lifePath, 'lifePath');

        const library = {
            consciousness: {
                concept: "Ufahamu (Consciousness) ni uwezo wa nafsi kujitambua na kutambua uhusiano wake na ulimwengu.",
                systemic: "Kihisia na kisaikolojia, ufahamu hufanya kazi kama mfumo wa 'feedback loop' ambapo uzoefu wako unajenga ramani ya ndani ya ukweli.",
                spiritual: "Kiroho, wewe ni microcosm ya ulimwengu. Confusion unayohisi ni sehemu ya ukuaji wa frequency yako kuelekea resonance ya juu.",
                practical: "Tafakari: Ni mara ngapi unaruhusu ukimya uwe mwalimu wako badala ya kelele za nje?"
            },
            world: {
                concept: "Ulimwengu unaongozwa na sheria za asili ambazo ni thabiti na zenye rhythm.",
                systemic: "Kila kitu kina mzunguko (cycle). Kama vile usiku unavyofuata mchana, maisha yako yana vipindi vya 'expansion' na 'contraction'.",
                spiritual: "Sheria ya 'Cause and Effect' inamaanisha kuwa nishati unayotoa ndiyo inayotengeneza mazingira yako ya baadaye.",
                practical: "Tafakari: Je, unapingana na mzunguko wa sasa wa maisha yako au unatiririka nao?"
            },
            harmonics: {
                concept: "Harmonics ni sayansi ya jinsi frequency zinavyoingiliana kutengeneza usawa au fujo.",
                systemic: "Frequency yako ya ${p.sunFreq} inawakilisha 'base note' ya mfumo wako wa nishati. Resonance hutokea pale unapoishi kulingana na asili yako.",
                spiritual: "Dissonance (kukwama) hutokea pale unapoacha kufuata wimbo wa nafsi yako. Kila changamoto ni fursa ya 're-tuning'.",
                practical: "Tafakari: Ni mambo gani katika maisha yako yanayoharibu resonance yako ya asili?"
            },
            astrology: {
                concept: "Astrology ni lugha ya archetypes inayoelezea jinsi nishati ya ulimwengu inavyojidhihirisha kupitia wewe.",
                systemic: "Nyota yako ya ${p.zodiac.name} na element ya ${p.zodiac.element} ni kama 'blueprint' ya kibaolojia na kisaikolojia ya tabia zako.",
                spiritual: "Sayari hazilazimishi hatima yako, bali zinaashiria fursa za ukuaji wa roho yako katika mzunguko huu.",
                practical: "Tafakari: Unawezaje kutumia sifa za ${p.zodiac.element} kuleta usawa katika siku yako ya leo?"
            },
            numerology: {
                concept: "Numerology ni sayansi ya frequency zilizojificha katika namba, ambapo kila namba ina maana ya kipekee.",
                systemic: "Life Path ${p.lifePath} inawakilisha mwelekeo wa kimantiki wa safari yako. Ni kama 'operating system' ya maisha yako.",
                spiritual: "Namba 4 (Mjenzi) inamaanisha kuwa roho yako ilichagua kuja kujenga misingi imara na kuleta mpangilio duniani.",
                practical: "Tafakari: Ni misingi gani unaijenga leo inayoweza kudumu kwa vizazi vijavyo?"
            },
            success: {
                concept: "Mafanikio ni hali ya kuwa katika alignment kamili na kusudi lako la asili.",
                systemic: "Kukwama mara nyingi ni ishara ya 'system error' ambapo unatumia nishati nyingi kwenye mambo yasiyo ya asili yako.",
                spiritual: "Mafanikio ya kweli yanakuja pale unapokubali Shadow Work yako: **${p.shadowWork}** na kuigeuza kuwa nguvu.",
                practical: "Tafakari: Je, unakimbiza mafanikio ya wengine au unajenga mafanikio yanayoendana na Life Path ${p.lifePath} yako?"
            },
            relationships: {
                concept: "Uhusiano ni kioo kinachoonyesha jinsi unavyohusiana na nafsi yako mwenyewe.",
                systemic: "Katika mifumo ya kibinadamu, tunavuta watu ambao frequency zao zinaendana na 'unresolved patterns' zetu.",
                spiritual: "Ndoa na mapenzi ni maabara ya kiroho ambapo tunajifunza upendo usio na masharti na usawa wa nishati.",
                practical: "Tafakari: Ni sehemu gani ya nafsi yako unayoiona ikijitokeza katika watu wanaokuzunguka?"
            }
        };

        return library[topic] || library.consciousness;
    }
};

window.AIChat = AIChat;
