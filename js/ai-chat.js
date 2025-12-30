/* AI Chat Simulation for MavenguLife - Ultra-Deep Knowledge Version */

const AIChat = {
    userProfile: null,
    chatContainer: null,
    inputField: null,
    lastTopic: null,
    explanationLevel: 1,

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

        // --- SPECIAL INTENT: CONFUSION/SIMPLIFICATION ---
        if (lowerInput.includes('sijaelewa') || lowerInput.includes('sielewi') || lowerInput.includes('fafanua') || lowerInput.includes('rudia')) {
            if (this.lastTopic) return this.getKnowledge(this.lastTopic, true);
            return "Samahani kwa kutumia lugha nzito. Namaanisha kuwa maisha yako yanaongozwa na 'rhythm' fulani. Kama vile wimbo unavyohitaji mpangilio, maisha yako yanahitaji usawa kati ya kile unachokiwaza na kile unachokifanya. Je, ungependa nikupe mfano rahisi kuhusu Life Path yako?";
        }

        // --- SPECIAL INTENT: CONTINUATION ---
        if (lowerInput.includes('endelea') || lowerInput.includes('niambie zaidi') || lowerInput.includes('alafu') || lowerInput.includes('ndio')) {
            if (this.lastTopic) return this.getKnowledge(this.lastTopic, false, true);
            return "Tunaweza kuingia ndani zaidi kwenye 'Soul Mission' yako: **" + p.soulMission + "**. Hili ndilo lengo kuu la kuwepo kwako hapa duniani katika mzunguko huu. Ungependa kuelewa jinsi ya kulitekeleza?";
        }

        // --- TOPIC DETECTION ---

        // 1. Purpose / Why am I here? (Kwanini nipo duniani, kusudi langu, lengo langu)
        if (lowerInput.includes('kwanini') || lowerInput.includes('kusudi') || lowerInput.includes('lengo') || lowerInput.includes('duniani')) {
            this.lastTopic = 'purpose';
            return this.getKnowledge('purpose');
        }

        // 2. Marriage / Relationships (Ndoa, mapenzi, uhusiano, mke, mume)
        if (lowerInput.includes('ndoa') || lowerInput.includes('mapenzi') || lowerInput.includes('uhusiano') || lowerInput.includes('mke') || lowerInput.includes('mume') || lowerInput.includes('love')) {
            this.lastTopic = 'relationships';
            return this.getKnowledge('relationships');
        }

        // 3. Career / Money / Success (Kazi, pesa, mafanikio, biashara)
        if (lowerInput.includes('kazi') || lowerInput.includes('pesa') || lowerInput.includes('mafanikio') || lowerInput.includes('biashara') || lowerInput.includes('career')) {
            this.lastTopic = 'career';
            return this.getKnowledge('career');
        }

        // 4. Life Path Specific (Life path, namba yangu)
        if (lowerInput.includes('life path') || lowerInput.includes('namba yangu')) {
            this.lastTopic = 'numerology';
            return this.getKnowledge('numerology');
        }

        // 5. Vibration / Frequency
        if (lowerInput.includes('vibration') || lowerInput.includes('frequency') || lowerInput.includes('mtetemo') || lowerInput.includes('resonance')) {
            this.lastTopic = 'vibration';
            return this.getKnowledge('vibration');
        }

        // 6. Zodiac / Astrology
        if (lowerInput.includes('zodiac') || lowerInput.includes('nyota') || lowerInput.includes('astrologia')) {
            this.lastTopic = 'astrology';
            return this.getKnowledge('astrology');
        }

        // --- GUARDRAILS ---
        if (lowerInput.includes('afya') || lowerInput.includes('ugonjwa') || lowerInput.includes('daktari')) {
            return "Kama kiongozi wako, naweza kukusaidia kuona mifumo ya kiroho ya mwili wako, lakini kwa masuala ya kitabibu, ni muhimu sana kuonana na daktari aliyefuzu. Afya yako ni mfumo wa thamani unaohitaji utaalamu wa kisayansi na kiroho kwa pamoja.";
        }

        // --- DEFAULT INTELLIGENT FALLBACK ---
        const fallbacks = [
            `Umeuliza kuhusu "${input}", jambo ambalo linaungana na frequency yako ya ${p.sunFreq}. Katika ulimwengu huu, hakuna kinachotokea bila sababu. Je, ungependa tuchunguze jinsi hili linavyohusiana na Shadow Work yako: **${p.shadowWork}**?`,
            `Swali lako ni zito na linahitaji tafakari. Kama Life Path ${p.lifePath}, una uwezo mkubwa wa kuona mifumo ambayo wengine hawaioni. Ungependa nikupe siri moja kuhusu jinsi ya kutumia namba yako kufikia clarity?`,
            `Nishati ya ulimwengu inaniambia kuwa unatafuta maana zaidi. "${input}" ni mlango mmoja tu. Je, ungependa tuchunguze Soul Mission yako: **${p.soulMission}** ili kupata majibu ya ndani zaidi?`
        ];
        return fallbacks[Math.floor(Math.random() * fallbacks.length)];
    },

    getKnowledge: function (topic, simplified = false, deeper = false) {
        const p = this.userProfile;
        const numMeaning = window.Numerology.getMeaning(p.lifePath, 'lifePath');
        const zodiacTraits = window.Astrology.getTraits(p.zodiac.name);

        const library = {
            purpose: {
                normal: `**Kusudi la Kuwepo Kwako**\nKama Life Path ${p.lifePath}, kusudi lako kuu ni **${numMeaning}**. Ulimwengu haukukuleta hapa kwa bahati mbaya; ulikuja kudhihirisha nishati ya ${p.zodiac.element} kupitia uzoefu wa kibinadamu.\n\nLengo lako la kiroho (Soul Mission) ni: **${p.soulMission}**. Hii inamaanisha kuwa kila unachokifanya kinapaswa kuelekea kwenye mwelekeo huu ili upate amani ya kweli.`,
                simple: `**Kwa lugha rahisi:**\nWewe ni kama 'software' maalum iliyoundwa kufanya kazi fulani. Namba yako ${p.lifePath} inasema wewe ni **${numMeaning.split('.')[0]}**. Upo hapa ili kujifunza jinsi ya kutumia nguvu hiyo kusaidia ulimwengu na nafsi yako.`,
                deep: `**Uchambuzi wa Ndani:**\nKusudi lako limejificha kwenye Shadow Work yako: **${p.shadowWork}**. Mpaka utakapokabiliana na sehemu hii ya giza, kusudi lako litaonekana kuwa gumu kufikiwa. Frequency ya ${p.sunFreq} itakusaidia kuamsha uwezo wako wa ndani wa kutekeleza mission yako.`
            },
            relationships: {
                normal: `**Uhusiano na Ndoa**\nKatika masuala ya ndoa na mapenzi, nishati yako ya ${p.zodiac.name} inatafuta usawa. Kama Life Path ${p.lifePath}, wewe ni mtu unayethamini **${numMeaning.split('.')[0]}**. Hii inamaanisha unahitaji mwenzi anayeweza kuendana na frequency yako ya ${p.sunFreq}.\n\nChangamoto yako kubwa katika mahusiano ni **${p.shadowWork.split('.')[0]}**. Ukirekebisha hili, resonance katika mahusiano yako itaongezeka.`,
                simple: `**Kwa lugha rahisi:**\nKatika mapenzi, wewe ni kama sumaku. Unavuta watu kulingana na jinsi unavyojisikia ndani. Kama unataka ndoa yenye furaha, lazima kwanza upate amani (resonance) ndani yako. Namba yako ${p.lifePath} inasema unatafuta utulivu na uaminifu.`,
                deep: `**Uchambuzi wa Ndani:**\nSoul Urge yako ${p.soulUrge} inatafuta kutoshelezwa kupitia uhusiano wa kina. Usikubali mahusiano ya juu-juu. Tafuta mtu ambaye frequency yake inaendana na yako ili kutengeneza 'Harmonic Resonance' ya kudumu.`
            },
            career: {
                normal: `**Kazi na Mafanikio**\nMafanikio yako yamefungwa kwenye uwezo wako wa kutumia sifa za ${p.zodiac.name}. Destiny yako ni **${window.Numerology.getMeaning(p.destiny, 'destiny')}**. Hii inamaanisha kuwa ulimwengu unakuongoza kuelekea kwenye nafasi ya ushawishi na ujenzi.\n\nKama Life Path ${p.lifePath}, una uwezo wa kipekee wa kuleta mpangilio pale penye vurugu.`,
                simple: `**Kwa lugha rahisi:**\nKatika kazi, wewe ni mtu wa vitendo. Namba yako inasema unaweza kufanikiwa sana ukiwa na nidhamu. Usikimbilie pesa pekee, tafuta kazi inayokupa nafasi ya kuwa **${numMeaning.split('.')[0]}**.`,
                deep: `**Uchambuzi wa Ndani:**\nNishati ya ${p.zodiac.element} inakupa msukumo wa kufanikiwa. Lakini kuwa makini na Shadow Work yako: **${p.shadowWork}**. Hii inaweza kuwa kikwazo cha mafanikio yako ikiwa hutaifanyia kazi. Tumia frequency ya ${p.sunFreq} kusafisha njia yako ya mafanikio.`
            },
            numerology: {
                normal: `**Uchambuzi wa Life Path ${p.lifePath}**\nNamba 4 katika numerology inawakilisha 'Mjenzi' (The Builder). Hii ni frequency ya utulivu, nidhamu, na misingi imara. Wewe ni nguzo ambayo wengine wanaweza kuitegemea.\n\nMaana yake kwako: **${numMeaning}**.`,
                simple: `**Kwa lugha rahisi:**\nLife Path 4 inamaanisha wewe ni mtu wa misingi. Hupendi mambo ya kubahatisha. Unataka kujenga kitu cha kudumu. Wewe ni kama msingi wa nyumba—bila wewe, mambo hayawezi kusimama.`,
                deep: `**Uchambuzi wa Ndani:**\nNamba ${p.lifePath} inahusiana na frequency ya ${p.sunFreq}. Hii inakupa uwezo wa kuona ukweli uliopo nyuma ya mambo ya kimwili. Soul Mission yako ${p.soulMission} ndiyo dira yako ya kweli.`
            },
            vibration: {
                normal: `**Vibration & Resonance**\nFrequency yako ya sasa ni **${p.sunFreq}**. Hii ni sauti ya nafsi yako katika ulimwengu. Unapokuwa katika resonance, mambo yanatiririka kwa urahisi. Unapokuwa katika dissonance, unahisi kukwama.\n\nKama ${p.zodiac.name}, vibration yako inaathiriwa sana na mazingira yako.`,
                simple: `**Kwa lugha rahisi:**\nWazia wewe ni redio. Ili upate muziki mzuri, lazima uweke frequency sahihi. Frequency yako ${p.sunFreq} ndiyo 'station' yako ya asili. Ukikaa hapo, maisha yanakuwa matamu.`,
                deep: `**Uchambuzi wa Ndani:**\nDissonance unayopata inatokana na kutokubaliana na Shadow Work yako: **${p.shadowWork}**. Tumia meditation ya **${p.meditation}** ili kurudisha resonance na ulimwengu.`
            },
            astrology: {
                normal: `**Nyota yako ya ${p.zodiac.name}**\nNyota yako inatawaliwa na element ya **${p.zodiac.element}**. Hii inakupa sifa za: **${zodiacTraits}**.\n\nIcon yako ya kiulimwengu ni ${p.zodiac.icon}, inayowakilisha saini yako ya kipekee katika anga.`,
                simple: `**Kwa lugha rahisi:**\nNyota yako inasema wewe ni mtu wa **${p.zodiac.element}**. Hii inamaanisha una tabia fulani za asili ambazo huwezi kuzikimbia. Kuzielewa ni kuanza kujitawala.`,
                deep: `**Uchambuzi wa Ndani:**\nVisual Signature (Aesthetics) yako ni **${p.aesthetics}**. Hizi ni rangi na mitindo inayoongeza vibration yako. Unapozitumia, unavutia resonance zaidi kutoka kwa ulimwengu.`
            }
        };

        const content = library[topic];
        if (simplified) return content.simple;
        if (deeper) return content.deep;
        return content.normal;
    }
};

window.AIChat = AIChat;
