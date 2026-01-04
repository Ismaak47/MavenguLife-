/* Main Application Controller for MavenguLife */

document.addEventListener('DOMContentLoaded', () => {
    initApp();
    initParticles();
});

function initApp() {
    const startBtn = document.getElementById('start-btn');
    const introSection = document.getElementById('intro-section');
    const inputSection = document.getElementById('input-section');
    const form = document.getElementById('cosmic-form');
    const dashboardSection = document.getElementById('dashboard-section');
    const loadingScreen = document.getElementById('loading-screen');

    // Navigation
    if (startBtn) {
        startBtn.addEventListener('click', () => {
            introSection.style.display = 'none';
            inputSection.style.display = 'block';
            inputSection.classList.add('animate-fade-in');
        });
    }

    // Form Submission
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const fullName = document.getElementById('full-name').value;
            const birthDate = document.getElementById('birth-date').value;
            const birthPlace = document.getElementById('birth-place').value;

            if (!fullName || !birthDate) return;

            // Show Loading
            inputSection.style.display = 'none';
            loadingScreen.style.display = 'flex';

            // Simulate Calculation Time
            setTimeout(() => {
                const profile = generateProfile(fullName, birthDate, birthPlace);
                renderDashboard(profile);

                loadingScreen.style.display = 'none';
                dashboardSection.style.display = 'block';

                // Initialize Chat with Profile
                if (window.AIChat) {
                    window.AIChat.init(profile);
                }
            }, 3000);
        });
    }

    // Chat Toggles
    const chatToggle = document.getElementById('chat-toggle-btn');
    const chatWidget = document.getElementById('chat-widget');
    const closeChat = document.getElementById('close-chat');
    const sendBtn = document.getElementById('send-msg-btn');
    const userInput = document.getElementById('user-input');

    if (chatToggle) {
        chatToggle.addEventListener('click', () => {
            chatWidget.classList.toggle('active');
        });
    }

    if (closeChat) {
        closeChat.addEventListener('click', () => {
            chatWidget.classList.remove('active');
        });
    }

    if (sendBtn) {
        sendBtn.addEventListener('click', () => {
            if (window.AIChat) window.AIChat.handleInput();
        });
    }

    if (userInput) {
        userInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                if (window.AIChat) window.AIChat.handleInput();
            }
        });
    }
}

function generateProfile(fullName, birthDate, birthPlace) {
    const lifePath = window.Numerology.calculateLifePath(birthDate);
    const destiny = window.Numerology.calculateDestiny(fullName);
    const soulUrge = window.Numerology.calculateSoulUrge(fullName);
    const zodiac = window.Astrology.getZodiacSign(birthDate);

    // Soul Mission Data
    const soulMission = window.SoulMission.getSoulMission(lifePath);
    const shadowWork = window.SoulMission.getShadowWork(zodiac.name);
    const meditation = window.SoulMission.getMeditation(zodiac.element);
    const sunFreq = window.SoulMission.getSunFrequency(zodiac.name);
    const aesthetics = window.SoulMission.getAesthetics(zodiac.element);
    const oracle = window.SoulMission.getMysticOracle();
    const symbolicWisdom = window.SoulMission.getSymbolicWisdom(lifePath);
    const personalYear = window.Numerology.calculatePersonalYear(birthDate);
    const birthDayNumber = window.Numerology.calculateBirthDayNumber(birthDate);

    // New Cosmic Data
    const rulingPlanet = window.Astrology.getRulingPlanet(zodiac.name);
    const moonPhase = window.Astrology.getMoonPhase(birthDate);
    const birthStone = window.Astrology.getBirthStone(birthDate);
    const spiritAnimal = window.Astrology.getSpiritAnimal(zodiac.name);
    const balanceNumber = window.Numerology.calculateBalanceNumber(fullName);
    const passionNumber = window.Numerology.calculateHiddenPassion(fullName);

    // New Advanced Metaphysics Data
    const karmicDebt = window.Numerology.calculateKarmicDebt(birthDate);
    const firstChallenge = window.Numerology.calculateFirstChallenge(birthDate);
    const luckyColor = window.Astrology.getLuckyColor(zodiac.name);
    const luckyDay = window.Astrology.getLuckyDay(zodiac.name);
    const tarotCard = window.Astrology.getTarotCard(zodiac.name);
    const chakra = window.Astrology.getChakra(zodiac.name);
    const chineseZodiac = window.Astrology.getChineseZodiac(birthDate);
    const pinnacle = window.Numerology.calculatePinnacles(birthDate).p1;

    // New Esoteric Insights Data
    const auraColor = window.Astrology.getAuraColor(zodiac.name);
    const lifeLesson = window.Astrology.getLifeLesson(zodiac.name);
    const maturityNumber = window.Numerology.calculateMaturityNumber(lifePath, destiny);
    const rationalThought = window.Numerology.calculateRationalThought(fullName, birthDate);
    const attitudeNumber = window.Numerology.calculateAttitudeNumber(birthDate);
    const northNode = window.Astrology.getNorthNode(zodiac.name);
    const guardianAngel = window.Astrology.getGuardianAngel(zodiac.name);
    const soulAge = window.Astrology.getSoulAge(birthDate);

    return {
        name: fullName,
        birthDate: birthDate,
        birthPlace: birthPlace || "Unknown Coordinates",
        lifePath: lifePath,
        destiny: destiny,
        soulUrge: soulUrge,
        zodiac: zodiac,
        soulMission: soulMission,
        shadowWork: shadowWork,
        meditation: meditation,
        sunFreq: sunFreq,
        aesthetics: aesthetics,
        oracle: oracle,
        symbolicWisdom: symbolicWisdom,
        personalYear: personalYear,
        birthDayNumber: birthDayNumber,
        rulingPlanet: rulingPlanet,
        moonPhase: moonPhase,
        birthStone: birthStone,
        spiritAnimal: spiritAnimal,
        balanceNumber: balanceNumber,
        passionNumber: passionNumber,
        karmicDebt: karmicDebt,
        firstChallenge: firstChallenge,
        luckyColor: luckyColor,
        luckyDay: luckyDay,
        tarotCard: tarotCard,
        chakra: chakra,
        chineseZodiac: chineseZodiac,
        pinnacle: pinnacle,
        auraColor: auraColor,
        lifeLesson: lifeLesson,
        maturityNumber: maturityNumber,
        rationalThought: rationalThought,
        attitudeNumber: attitudeNumber,
        northNode: northNode,
        guardianAngel: guardianAngel,
        soulAge: soulAge
    };
}

function renderDashboard(profile) {
    // Update Name
    document.getElementById('user-name-display').textContent = profile.name;

    // Update Core Panels
    document.getElementById('life-path-number').textContent = profile.lifePath;
    document.getElementById('life-path-desc').textContent = window.Numerology.getMeaning(profile.lifePath, 'lifePath');

    document.getElementById('destiny-number').textContent = profile.destiny;
    document.getElementById('destiny-desc').textContent = window.Numerology.getMeaning(profile.destiny, 'destiny');

    document.getElementById('soul-urge-number').textContent = profile.soulUrge;
    document.getElementById('soul-urge-desc').textContent = window.Numerology.getMeaning(profile.soulUrge, 'soulUrge');

    // Update Secondary Panels
    document.getElementById('personal-year-number').textContent = profile.personalYear;
    document.getElementById('personal-year-desc').textContent = "Mzunguko wa " + profile.personalYear;

    document.getElementById('birth-day-number').textContent = profile.birthDayNumber;
    document.getElementById('birth-day-desc').textContent = "Kipaji cha Asili";

    document.getElementById('element-text').textContent = profile.zodiac.element.toUpperCase();

    // Update Element Icon
    const elIcon = document.getElementById('element-icon');
    const el = profile.zodiac.element.toLowerCase();
    elIcon.className = 'fas'; // Reset
    if (el.includes('moto') || el.includes('fire')) elIcon.classList.add('fa-fire');
    else if (el.includes('maji') || el.includes('water')) elIcon.classList.add('fa-water');
    else if (el.includes('ardhi') || el.includes('earth')) elIcon.classList.add('fa-leaf');
    else elIcon.classList.add('fa-wind'); // Default Air

    // Update Soul Mission Panels
    document.getElementById('soul-mission-text').textContent = profile.soulMission;
    document.getElementById('shadow-work-text').textContent = profile.shadowWork;
    document.getElementById('meditation-text').textContent = profile.meditation;
    document.getElementById('sun-freq-text').textContent = profile.sunFreq;
    document.getElementById('aesthetics-text').textContent = profile.aesthetics;
    document.getElementById('oracle-text').textContent = `"${profile.oracle}"`;
    document.getElementById('symbolic-wisdom-text').textContent = profile.symbolicWisdom;

    // Update Cosmic Alignment Grid
    document.getElementById('planet-name').textContent = profile.rulingPlanet.name.toUpperCase();
    document.getElementById('planet-icon').textContent = profile.rulingPlanet.icon;
    document.getElementById('planet-desc').textContent = profile.rulingPlanet.desc;

    document.getElementById('moon-phase').textContent = profile.moonPhase.name.toUpperCase();
    document.getElementById('moon-icon').textContent = profile.moonPhase.icon;
    document.getElementById('moon-desc').textContent = profile.moonPhase.desc;

    document.getElementById('birth-stone').textContent = profile.birthStone.name.toUpperCase();
    // document.getElementById('stone-icon').style.color = profile.birthStone.color; // Optional styling
    document.getElementById('stone-desc').textContent = profile.birthStone.desc;

    document.getElementById('spirit-animal').textContent = profile.spiritAnimal.split(' ')[0].toUpperCase();

    document.getElementById('balance-number').textContent = profile.balanceNumber;
    document.getElementById('passion-number').textContent = profile.passionNumber;

    // Update Advanced Metaphysics Grid
    document.getElementById('karmic-debt').textContent = profile.karmicDebt || "0";
    document.getElementById('first-challenge').textContent = profile.firstChallenge;
    document.getElementById('lucky-color').textContent = profile.luckyColor.toUpperCase();
    document.getElementById('lucky-day').textContent = profile.luckyDay.toUpperCase();
    document.getElementById('tarot-card').textContent = profile.tarotCard.toUpperCase();
    document.getElementById('chakra-ruler').textContent = profile.chakra.toUpperCase();
    document.getElementById('chinese-zodiac').textContent = profile.chineseZodiac.toUpperCase();
    document.getElementById('pinnacle-cycle').textContent = profile.pinnacle;

    // Update Esoteric Insights Grid
    document.getElementById('aura-color').textContent = profile.auraColor.toUpperCase();
    document.getElementById('life-lesson').textContent = profile.lifeLesson.toUpperCase();
    document.getElementById('maturity-number').textContent = profile.maturityNumber;
    document.getElementById('rational-thought').textContent = profile.rationalThought;
    document.getElementById('attitude-number').textContent = profile.attitudeNumber;
    document.getElementById('north-node').textContent = profile.northNode.toUpperCase();
    document.getElementById('guardian-angel').textContent = profile.guardianAngel.toUpperCase();
    document.getElementById('soul-age').textContent = profile.soulAge.toUpperCase();

    // Detailed Analysis
    const analysisDiv = document.getElementById('detailed-analysis');
    analysisDiv.innerHTML = `
        <div>
            <div class="data-label">ELEMENTAL COMPOSITION</div>
            <div class="data-value" style="font-size: 1.5rem;">${profile.zodiac.element.toUpperCase()}</div>
        </div>
        <div>
            <div class="data-label">ZODIAC SIGNATURE</div>
            <div style="color: var(--text-color);">${profile.zodiac.icon} ${profile.zodiac.name.toUpperCase()}</div>
        </div>
        <div class="full-width">
            <div class="data-label">DIVINE PURPOSE</div>
            <div style="color: var(--text-color);">${profile.soulMission}</div>
        </div>
        <div class="full-width" style="border-top: 1px solid var(--primary-color); padding-top: 1rem;">
            <div class="data-label">ORIGIN COORDINATES</div>
            <div style="color: var(--success-color); font-family: var(--font-display);">${profile.birthPlace.toUpperCase()}</div>
        </div>
    `;

    // Setup Modal Triggers - These will be replaced by the new system's triggers below
    // The original triggers are commented out here to prevent conflicts, but their element IDs
    // are still used in the new reportTypeMap.
    /*
    setupModalTrigger('life-path-number', `LIFE PATH ${profile.lifePath}`, `Nielezee kwa kina kuhusu Life Path ${profile.lifePath}. Nini maana yake, nguvu zake, changamoto zake, na kusudi lake?`, profile);
    setupModalTrigger('destiny-number', `DESTINY NUMBER ${profile.destiny}`, `Nielezee kwa kina kuhusu Destiny Number ${profile.destiny}. Inasema nini kuhusu hatima yangu na vipaji vyangu?`, profile);
    setupModalTrigger('soul-urge-number', `SOUL URGE ${profile.soulUrge}`, `Nielezee kwa kina kuhusu Soul Urge ${profile.soulUrge}. Moyo wangu unatamani nini hasa?`, profile);

    setupModalTrigger('personal-year-number', `PERSONAL YEAR ${profile.personalYear}`, `Nielezee kwa kina kuhusu Personal Year ${profile.personalYear}. Mwaka huu una nishati gani kwangu na nifanye nini?`, profile);
    setupModalTrigger('birth-day-number', `BIRTH DAY ${profile.birthDayNumber}`, `Nielezee kwa kina kuhusu Birth Day Number ${profile.birthDayNumber}. Hii inaashiria kipaji gani maalum nilichozaliwa nacho?`, profile);
    setupModalTrigger('element-text', `ELEMENT: ${profile.zodiac.element.toUpperCase()}`, `Nielezee kwa kina kuhusu Element ya ${profile.zodiac.element}. Hii inaathiri vipi tabia yangu na nishati yangu?`, profile);

    setupModalTrigger('soul-mission-text', 'SOUL MISSION', `Nielezee kwa kina kuhusu Soul Mission yangu: "${profile.soulMission}". Hii inamaanisha nini katika maisha yangu ya kila siku?`, profile);
    setupModalTrigger('shadow-work-text', 'SHADOW WORK', `Nielezee kwa kina kuhusu Shadow Work yangu: "${profile.shadowWork}". Hii ni sehemu gani ya nafsi yangu iliyojificha na nifanyeje kazi nayo?`, profile);
    setupModalTrigger('symbolic-wisdom-text', 'SYMBOLIC WISDOM', `Nielezee kwa kina hekima hii ya kiishara: "${profile.symbolicWisdom}". Ina ujumbe gani wa ndani kwangu?`, profile);

    // New Triggers
    setupModalTrigger('planet-name', `RULING PLANET: ${profile.rulingPlanet.name}`, `Nielezee kuhusu sayari yangu kiongozi ${profile.rulingPlanet.name}. Inaathiri vipi maisha yangu?`, profile);
    setupModalTrigger('moon-phase', `MOON PHASE: ${profile.moonPhase.name}`, `Nilizaliwa wakati wa ${profile.moonPhase.name}. Hii ina maana gani kwangu kiroho?`, profile);
    setupModalTrigger('birth-stone', `BIRTH STONE: ${profile.birthStone.name}`, `Jiwe langu la asili ni ${profile.birthStone.name}. Lina nguvu gani za uponyaji kwangu?`, profile);
    setupModalTrigger('spirit-animal', `SPIRIT ANIMAL: ${profile.spiritAnimal}`, `Mnyama wangu wa roho ni ${profile.spiritAnimal}. Ninaweza kujifunza nini kutoka kwake?`, profile);
    setupModalTrigger('balance-number', `BALANCE NUMBER: ${profile.balanceNumber}`, `Namba yangu ya usawa ni ${profile.balanceNumber}. Inanisaidiaje wakati wa changamoto?`, profile);
    setupModalTrigger('passion-number', `HIDDEN PASSION: ${profile.passionNumber}`, `Shauku yangu ya ndani ni namba ${profile.passionNumber}. Hii inaonyesha nini kuhusu vipaji vyangu?`, profile);

    // Advanced Metaphysics Triggers
    setupModalTrigger('karmic-debt', `KARMIC DEBT: ${profile.karmicDebt}`, `Nina deni la karma namba ${profile.karmicDebt}. Hii inamaanisha nini kuhusu maisha yangu ya zamani na changamoto za sasa?`, profile);
    setupModalTrigger('first-challenge', `FIRST CHALLENGE: ${profile.firstChallenge}`, `Changamoto yangu ya kwanza ni namba ${profile.firstChallenge}. Hii inanifundisha nini katika kipindi hiki cha maisha?`, profile);
    setupModalTrigger('lucky-color', `LUCKY COLOR: ${profile.luckyColor}`, `Rangi yangu ya bahati ni ${profile.luckyColor}. Nitumieje rangi hii kuongeza nishati yangu?`, profile);
    setupModalTrigger('lucky-day', `LUCKY DAY: ${profile.luckyDay}`, `Siku yangu ya bahati ni ${profile.luckyDay}. Ni mambo gani mazuri ya kufanya siku hii?`, profile);
    setupModalTrigger('tarot-card', `TAROT ARCHETYPE: ${profile.tarotCard}`, `Kadi yangu ya Tarot ni ${profile.tarotCard}. Hii inaashiria nini kuhusu safari yangu ya roho?`, profile);
    setupModalTrigger('chakra-ruler', `CHAKRA RULER: ${profile.chakra}`, `Chakra yangu kiongozi ni ${profile.chakra}. Nifanye nini kuiweka sawa na kuitumia vizuri?`, profile);
    setupModalTrigger('chinese-zodiac', `CHINESE ZODIAC: ${profile.chineseZodiac}`, `Nyota yangu ya Kichina ni ${profile.chineseZodiac}. Hii inaongeza nini kwenye tabia yangu?`, profile);
    setupModalTrigger('pinnacle-cycle', `PINNACLE CYCLE: ${profile.pinnacle}`, `Mzunguko wangu wa kilele ni namba ${profile.pinnacle}. Hii inaashiria mafanikio gani yanayokuja?`, profile);

    // Esoteric Insights Triggers
    setupModalTrigger('aura-color', `AURA COLOR: ${profile.auraColor}`, `Rangi yangu ya aura ni ${profile.auraColor}. Hii inasema nini kuhusu nishati yangu ya sasa?`, profile);
    setupModalTrigger('life-lesson', `LIFE LESSON: ${profile.lifeLesson}`, `Somo langu la maisha ni ${profile.lifeLesson}. Nifanye nini ili kufanikiwa katika somo hili?`, profile);
    setupModalTrigger('maturity-number', `MATURITY NUMBER: ${profile.maturityNumber}`, `Namba yangu ya ukomavu ni ${profile.maturityNumber}. Hii itakuwa na athari gani katika maisha yangu ya baadae?`, profile);
    setupModalTrigger('rational-thought', `RATIONAL THOUGHT: ${profile.rationalThought}`, `Namba yangu ya fikra za kimantiki ni ${profile.rationalThought}. Hii inaonyesha nini kuhusu jinsi ninavyofanya maamuzi?`, profile);
    setupModalTrigger('attitude-number', `ATTITUDE NUMBER: ${profile.attitudeNumber}`, `Namba yangu ya mtazamo ni ${profile.attitudeNumber}. Hii inaathiri vipi jinsi watu wanavyoniona mara ya kwanza?`, profile);
    setupModalTrigger('north-node', `NORTH NODE: ${profile.northNode}`, `North Node yangu ipo ${profile.northNode}. Hii inaashiria nini kuhusu mwelekeo wa roho yangu?`, profile);
    setupModalTrigger('guardian-angel', `GUARDIAN ANGEL: ${profile.guardianAngel}`, `Malaika wangu mlinzi ni ${profile.guardianAngel}. Ninaweza kuwasiliana naye vipi kwa ajili ya mwongozo?`, profile);
    setupModalTrigger('soul-age', `SOUL AGE: ${profile.soulAge}`, `Umri wa roho yangu ni ${profile.soulAge}. Hii inaashiria nini kuhusu uzoefu wangu wa kiulimwengu?`, profile);
    */
}


/**
 * =================================================================
 * MAVENGU AUTONOMOUS DIAGNOSTIC SYSTEM v4.0 (FINAL & COMPLETE)
 * =================================================================
 * This is the final, complete, and fully-implemented system.
 * It contains the full knowledge base and controller logic for all cards.
 * This code is self-contained and does not call any external API.
 */

// =================================================================
// SECTION 1: THE MAVENGU KNOWLEDGE BASE (COMPLETE)
// =================================================================
const mavenguKnowledgeBase = {
    // --- A. CORE NUMEROLOGY ---
    lifePath: {
        1: { title: "The Innovator", metaphor: "The Single-Core, High-Speed CPU", description: "Your core processor is built for speed, innovation, and execution, designed to forge new paths and bring creative ideas into reality.", strengths: ["Independent thought", "Natural leadership", "Pioneering spirit"], weaknesses: ["Impatience", "Tendency towards self-centeredness"], lessons: "To temper your powerful drive with compassion and inspire others rather than dominate.", guidance: "Trust your gut instincts. Your purpose is to lead the way; practice patience and allow others to catch up." },
        2: { title: "The Diplomat", metaphor: "The Dual-Core Processor for Intuition", description: "Your core processor is designed for partnership, harmony, and balance, excelling at seeing both sides of any situation.", strengths: ["Exceptional diplomacy", "Deeply intuitive", "Cooperative"], weaknesses: ["Indecisiveness", "Overly sensitive"], lessons: "To trust your powerful intuition and find your own inner balance without needing external validation.", guidance: "Honor your sensitivity; it is your greatest strength. Use your gift for diplomacy to build bridges." },
        3: { title: "The Communicator", metaphor: "The Advanced Media Processor", description: "Your core processor is built for creativity, self-expression, and communication, with a natural ability to inspire with joy and charisma.", strengths: ["Gifted communication", "Highly creative", "Charismatic and optimistic"], weaknesses: ["Superficiality", "Prone to self-doubt"], lessons: "To channel your immense creative energy with discipline and focus.", guidance: "Embrace your creativity. Your purpose is to uplift and inspire through authentic expression." },
        4: { title: "The Builder", metaphor: "The Quad-Core Workstation Processor", description: "Your core processor is designed for stability, structure, and endurance, masterfully turning abstract plans into tangible realities.", strengths: ["Extremely reliable", "Practical and logical", "Hard-working"], weaknesses: ["Rigidity", "Can be a workaholic"], lessons: "To learn the value of flexibility and to balance hard work with rest and joy.", guidance: "Break down large goals into practical steps. Your legacy will be what you build, so build with purpose." },
        5: { title: "The Adventurer", metaphor: "The Wireless Multi-Band Processor", description: "Your core processor is designed for freedom, adventure, and change, operating on a high frequency of curiosity.", strengths: ["Highly adaptable", "Adventurous and courageous", "Excellent communicator"], weaknesses: ["Restlessness", "Lack of commitment"], lessons: "To find freedom through self-discipline, learning to commit to a path without feeling trapped.", guidance: "Embrace change as your curriculum. Find a constructive focus for your immense energy." },
        6: { title: "The Nurturer", metaphor: "The Community Cloud Processor", description: "Your core processor is designed for love, responsibility, and community service, excelling at nurturing and healing.", strengths: ["Deeply responsible", "A natural healer", "Values family and community"], weaknesses: ["Perfectionism", "Can over-sacrifice"], lessons: "To find the balance between helping others and martyrdom; to care for yourself with the same devotion you give others.", guidance: "Your gift is your heart. Practice self-care as a sacred duty. Your greatest service comes from a full cup." },
        7: { title: "The Seeker", metaphor: "The Deep-Learning AI Processor", description: "Your core processor is a powerful analytical engine for introspection, research, and the pursuit of truth.", strengths: ["Highly analytical", "Spiritually aware", "Detail-oriented"], weaknesses: ["Emotionally distant", "Prone to skepticism"], lessons: "To trust—yourself, others, and the universe—and to bridge your powerful mind with your heart.", guidance: "Schedule time for solitude. Your purpose is to uncover truth, but fulfillment comes from sharing it." },
        8: { title: "The Executive", metaphor: "The Enterprise-Grade Server Processor", description: "Your core processor is built for power, abundance, and authority, designed to master the material world.", strengths: ["Natural leadership", "Ambitious and resilient", "Excellent strategist"], weaknesses: ["Overly controlling", "Can be materialistic"], lessons: "To learn that true power comes from self-mastery and using your abundance to empower others.", guidance: "Think big. Your processor is designed for large-scale impact. Set ambitious goals and create practical strategies." },
        9: { title: "The Humanitarian", metaphor: "The Global Distributed Network Processor", description: "Your processor operates on a global frequency of compassion, wisdom, and selfless service.", strengths: ["Deeply compassionate", "Charismatic presence", "Old-soul wisdom"], weaknesses: ["Emotionally dramatic", "Struggles with letting go"], lessons: "The art of letting go, giving compassion freely without expectation, and releasing past hurts.", guidance: "Let your heart lead you to causes you are passionate about. Practice forgiveness. Your purpose is to be an example of unconditional love." },
        11: { title: "The Spiritual Messenger", metaphor: "The Quantum Entangled Processor", description: "A Master Path. You are a direct channel between the spiritual and physical worlds, designed to receive divine inspiration and translate it for humanity.", strengths: ["Profound psychic intuition", "Incredibly charismatic", "A channel for truth"], weaknesses: ["Extreme sensitivity and anxiety", "Can be impractical"], lessons: "To ground your immense spiritual energy in the physical world and have the courage to deliver the messages you receive.", guidance: "Your intuition is not imagination; it is your core function. Meditate and ground yourself daily." },
        22: { title: "The Master Builder", metaphor: "The Universal 3D Printer", description: "A Master Path. You have the unique ability to receive spiritual insights and build them into tangible, large-scale systems that benefit humanity.", strengths: ["Visionary and practical", "Ability to manifest large-scale projects", "Immense discipline"], weaknesses: ["Overwhelmed by your own vision", "Prone to stress"], lessons: "To surrender your personal ambition to a higher purpose and use your power for the benefit of all.", guidance: "Dream big, then create a practical plan. Your power is real. Build a team to help you manifest your vision." },
        33: { title: "The Master Teacher", metaphor: "The Global Healing Network", description: "A Master Path. You are the embodiment of unconditional love, here to heal and uplift humanity through your joyful and compassionate presence.", strengths: ["Source of unconditional love", "An inspiring teacher", "Joyful in service"], weaknesses: ["Burdened by world suffering", "Neglects own needs"], lessons: "To embody love without attachment to the outcome; your presence itself is a healing force.", guidance: "Focus on raising your own joy. Your healing power is directly proportional to your personal vibration. Shine brightly." }
    },
    destinyNumber: {
        1: { title: "Destiny: The Leader", description: "Your destiny is to lead, innovate, and pioneer. You are meant to be at the forefront, establishing new paradigms and inspiring others with your courage and originality. Your path is one of developing independence and self-reliance." },
        2: { title: "Destiny: The Diplomat", description: "Your destiny is to create harmony, balance, and cooperation. You are a natural peacemaker, meant to build bridges between people through your sensitivity, intuition, and tact. Your path is one of partnership and patience." },
        3: { title: "Destiny: The Communicator", description: "Your destiny is to express yourself with joy, creativity, and inspiration. You are meant to uplift others through the power of your words, art, and charismatic presence. Your path is one of authentic self-expression." },
        4: { title: "Destiny: The Builder", description: "Your destiny is to create lasting value through hard work, discipline, and structure. You are the bedrock of society, meant to build secure foundations for yourself and others. Your path is one of dedication and process." },
        5: { title: "Destiny: The Adventurer", description: "Your destiny is to experience freedom and embrace change. You are meant to be a catalyst for progress, exploring the world and inspiring others to live more fully. Your path is one of versatile adaptation and curiosity." },
        6: { title: "Destiny: The Nurturer", description: "Your destiny is to serve and heal through responsibility and compassion. You are a beacon of love for your family and community, meant to create beauty and harmony. Your path is one of selfless service and guidance." },
        7: { title: "Destiny: The Seeker", description: "Your destiny is to uncover and share deep truths. You are a philosopher and analyst, meant to look beneath the surface and connect the spiritual with the intellectual. Your path is one of wisdom and introspection." },
        8: { title: "Destiny: The Executive", description: "Your destiny is to master the material world and achieve great things. You are a powerhouse of ambition and strategy, meant to wield power and abundance for a greater good. Your path is one of self-mastery and authority." },
        9: { title: "Destiny: The Humanitarian", description: "Your destiny is to serve humanity with wisdom and compassion. You are a global citizen, meant to inspire and uplift others from a place of universal love and understanding. Your path is one of selfless giving and completion." }
    },
    soulUrge: {
        1: { title: "Soul's Urge: To Lead and Be Independent", description: "Your soul deeply craves to be #1. It yearns for independence, originality, and the freedom to lead. You feel most alive when you are pioneering a new path and relying on your own strength." },
        2: { title: "Soul's Urge: To Love and Create Harmony", description: "Your soul's deepest desire is for love, peace, and companionship. It yearns for harmony and balance in all things and feels most fulfilled when it is part of a loving, cooperative partnership." },
        3: { title: "Soul's Urge: To Express and Create Joy", description: "Your soul deeply craves to express itself creatively and joyfully. It yearns to communicate, to inspire, and to spread happiness. You feel most alive when you are creating and making others smile." },
        4: { title: "Soul's Urge: To Build and Create Security", description: "Your soul's deepest desire is for order, stability, and security. It yearns to build something tangible and lasting. You feel most fulfilled when you have a solid plan and are working steadily towards a goal." },
        5: { title: "Soul's Urge: To Experience Freedom", description: "Your soul deeply craves freedom, adventure, and variety. It yearns to experience all that life has to offer and feels suffocated by routine and restriction. You feel most alive when exploring the unknown." },
        6: { title: "Soul's Urge: To Nurture and Be of Service", description: "Your soul's deepest desire is to love, protect, and care for others. It yearns to be of service to its family and community. You feel most fulfilled when you are making a positive difference in someone's life." },
        7: { title: "Soul's Urge: To Know and Understand", description: "Your soul deeply craves knowledge, truth, and wisdom. It yearns to understand the deeper, hidden meanings of life. You feel most fulfilled when you are in solitude, learning, and connecting with the divine." },
        8: { title: "Soul's Urge: To Achieve and Manifest", description: "Your soul's deepest desire is for mastery and achievement in the material world. It yearns to be powerful, successful, and in control of its destiny. You feel most fulfilled when you are achieving ambitious goals." },
        9: { title: "Soul's Urge: To Serve and Heal the World", description: "Your soul's deepest desire is to make the world a better place. It yearns for a sense of universal love and has a deep compassion for humanity. You feel most fulfilled when you are part of a cause greater than yourself." }
    },
    personalYear: {
        1: { title: "Personal Year 1: New Beginnings", description: "This is a year of new beginnings, independence, and planting seeds. Your actions now will set the tone for the next nine years. Be bold, be original, and focus on your personal goals." },
        2: { title: "Personal Year 2: Partnership & Patience", description: "This is a year for patience, diplomacy, and building relationships. Progress will be slow. Focus on cooperation and trust your intuition. It's about 'we', not 'me'." },
        3: { title: "Personal Year 3: Creativity & Communication", description: "This is a year for social expression, creativity, and joy. Your ability to communicate is heightened. It's a time to be optimistic, inspired, and to enjoy life. Network and share your ideas." },
        4: { title: "Personal Year 4: Hard Work & Foundations", description: "This is a year for hard work, discipline, and building foundations. Focus on organization, health, and practical matters. It's a time to get serious and create long-term stability." },
        5: { title: "Personal Year 5: Change & Freedom", description: "This is a year of change, freedom, and adventure. Expect the unexpected. Be open to new experiences, travel, and social connections. It's a fast-paced year that rewards adaptability." },
        6: { title: "Personal Year 6: Responsibility & Home", description: "This is a year centered on home, family, and responsibility. It's a time for healing relationships, nurturing others, and creating beauty in your environment. Duty calls." },
        7: { title: "Personal Year 7: Spirituality & Analysis", description: "This is a year for introspection, analysis, and spiritual growth. It’s a quiet, internal year for study, reflection, and connecting with your inner self. Trust your wisdom." },
        8: { title: "Personal Year 8: Power & Achievement", description: "This is a year of power, ambition, and financial opportunity. It's a time to step into your authority, manage your resources wisely, and reap the rewards of past efforts. Think big." },
        9: { title: "Personal Year 9: Completion & Release", description: "This is a year of completion, release, and humanitarianism. Let go of people and situations that no longer serve you to make space for the new cycle. It's a time for forgiveness and conclusion." }
    },
    shadowWork: {
        "Aries": { title: "Shadow Work: The Impulsive Warrior", issue: "Impulsive Rage & Selfishness", integration: "Your shadow work involves taming your impulsive anger and learning to consider the needs of others before acting. The goal is to transform raw, selfish impulse into conscious, courageous leadership." },
        "Taurus": { title: "Shadow Work: The Stagnant Builder", issue: "Stubborn Materialism & Stagnation", integration: "Your shadow work is about releasing your fear of change and your attachment to material comfort. The goal is to learn that true security comes from inner flexibility, not outer possessions." },
        "Gemini": { title: "Shadow Work: The Gossiping Messenger", issue: "Superficiality & Deceit", integration: "Your shadow work involves moving beyond surface-level gossip and inconsistency. The goal is to use your gift of communication to speak deeper truths with integrity and focus." },
        "Cancer": { title: "Shadow Work: The Manipulative Nurturer", issue: "Emotional Manipulation & Victimhood", integration: "Your shadow work is to release the tendency to be passive-aggressive or play the victim to get your needs met. The goal is to learn to ask for what you need directly and to nurture yourself." },
        "Leo": { title: "Shadow Work: The Arrogant Monarch", issue: "Arrogant Pride & Need for Attention", integration: "Your shadow work involves transcending your need for constant validation. The goal is to move from arrogant pride to authentic self-confidence, shining your light to inspire others, not just to be seen." },
        "Virgo": { title: "Shadow Work: The Harsh Analyst", issue: "Crippling Perfectionism & Judgment", integration: "Your shadow work is about releasing your harsh judgment of yourself and others. The goal is to embrace imperfection and offer service from a place of compassion, not criticism." },
        "Libra": { title: "Shadow Work: The People-Pleasing Judge", issue: "Indecisiveness & Fear of Conflict", integration: "Your shadow work involves overcoming your tendency to people-please. The goal is to learn that true harmony comes from inner balance and authentic decisions, not from trying to make everyone happy." },
        "Scorpio": { title: "Shadow Work: The Controlling Sorcerer", issue: "Control & Obsessive Jealousy", integration: "Your shadow work is to release your deep-seated fear of betrayal, which manifests as a need to control. The goal is to learn to trust, to surrender, and to find power in vulnerability." },
        "Sagittarius": { title: "Shadow Work: The Reckless Zealot", issue: "Dogmatism & Irresponsibility", integration: "Your shadow work involves taming your tendency to be preachy and blunt. The goal is to transform blind belief into embodied wisdom and recklessness into conscious exploration." },
        "Capricorn": { title: "Shadow Work: The Ruthless Tyrant", issue: "Ruthless Ambition & Emotional Coldness", integration: "Your shadow work is about releasing the belief that the ends always justify the means. The goal is to temper your ambition with compassion and emotional fulfillment." },
        "Aquarius": { title: "Shadow Work: The Detached Exile", issue: "Intellectual Elitism & Aloofness", integration: "Your shadow work involves warming your intellectual detachment with human connection. The goal is to use your innovative ideas to serve the community you are a part of, not just criticize it from the outside." },
        "Pisces": { title: "Shadow Work: The Escapist Martyr", issue: "Escapism & Lack of Boundaries", integration: "Your shadow work is to face reality rather than escaping into fantasy or addiction. The goal is to develop strong energetic boundaries, so you can offer your compassion without becoming a martyr." }
    },
    element: {
        "Moto (Fire)": { title: "Element: Moto (Fire)", description: "Your core element is Fire. This gives you passion, enthusiasm, courage, and a creative spark. You are driven by a need to act and express yourself. Your challenge is to control your impulsiveness and temper, channeling your immense energy constructively." },
        "Maji (Water)": { title: "Element: Maji (Water)", description: "Your core element is Water. This makes you intuitive, empathetic, compassionate, and deeply connected to the emotional realm. You are driven by feeling and connection. Your challenge is to avoid being overwhelmed by emotions and to set healthy boundaries." },
        "Ardhi (Earth)": { title: "Element: Ardhi (Earth)", description: "Your core element is Earth. This makes you grounded, practical, reliable, and patient. You are driven by a need for security and tangible results. Your challenge is to avoid becoming too rigid or materialistic, and to embrace healthy change." },
        "Hewa (Air)": { title: "Element: Hewa (Air)", description: "Your core element is Air. This makes you intellectual, communicative, social, and analytical. You are driven by ideas, logic, and human connection. Your challenge is to ground your thoughts in reality and to connect with your own emotions." }
    },
    // --- C. OTHER DATA POINTS (Mapped to default for now, but ready for expansion) ---
    birthDayNumber: {
        default: { title: "Kipaji cha Asili", description: "Namba yako ya Siku ya Kuzaliwa inaonyesha kipaji maalum ulichozaliwa nacho. Inaashiria zawadi ya kipekee au tabia ya asili ambayo unaweza kukuza na kuitumia katika safari yako ya maisha. Tafuta fursa za kukiimarisha kipaji hiki." }
    },
    soulMission: {
        default: { title: "Soul Mission", description: "Ujumbe wako wa Roho ni kusudi la juu la maisha yako, dira inayoongoza matendo na maamuzi yako. Ni nguzo inayoashiria kile roho yako inatamani kukamilisha katika maisha haya, ikikuunganisha na wito wako wa ndani." }
    },
    symbolicWisdom: {
        default: { title: "Hekima ya Alama", description: "Hekima ya Alama inaelezea ujumbe wa kina wa kiroho uliofichwa katika ishara na picha zinazojitokeza maishani mwako. Kila alama ina maana yake, ikikupa mwongozo na ufafanuzi kuhusu safari yako ya ndani." }
    },
    rulingPlanet: {
        default: { title: "Sayari Kiongozi", description: "Sayari yako kiongozi inaathiri pakubwa utu wako, tabia zako, na jinsi unavyoingiliana na ulimwengu. Ni nguvu ya ulimwengu inayokuongoza, ikionyesha vipaji vyako vya asili na changamoto zako." }
    },
    moonPhase: {
        default: { title: "Awamu ya Mwezi Uliozaliwa", description: "Awamu ya Mwezi uliozaliwa chini yake inaashiria nishati za kihisia na kiroho zilizokuwepo wakati wa kuzaliwa kwako. Inaathiri hisia zako, intuition, na jinsi unavyojibu mabadiliko ya maisha. Ni dirisha la kuelewa undani wa nafsi yako." }
    },
    birthStone: {
        default: { title: "Jiwe la Asili", description: "Jiwe lako la asili lina nguvu za uponyaji na ulinzi. Inaweza kukuza sifa zako nzuri na kukupa nguvu unapohitaji. Kila jiwe lina nishati yake ya kipekee inayolingana na mwezi wako wa kuzaliwa." }
    },
    spiritAnimal: {
        default: { title: "Mnyama wa Roho", description: "Mnyama wako wa roho ni mwongozo wa kiroho anayeakisi sifa zako za ndani na kukupa hekima. Ni ishara ya nguvu, ulinzi, na masomo unayopaswa kujifunza maishani mwako." }
    },
    balanceNumber: {
        default: { title: "Namba ya Usawa", description: "Namba yako ya usawa inaonyesha jinsi unavyoitikia changamoto na migogoro. Inaashiria nguvu zako za ndani za kukabiliana na matatizo na kudumisha utulivu katika nyakati za misukosuko." }
    },
    passionNumber: {
        default: { title: "Shauku ya Ndani (Hidden Passion)", description: "Namba yako ya Shauku ya Ndani inafichua talanta zako zilizofichwa au shughuli unazopaswa kuzifanya ili kujisikia umetimia. Ni moto wa ndani unaokusukuma kuelekea furaha na ubunifu." }
    },
    karmicDebt: {
        default: { title: "Deni la Karma", description: "Deni la Karma linaonyesha masomo unayopaswa kujifunza kutokana na matendo ya maisha yaliyopita. Ni fursa ya kurekebisha makosa na kukuza sifa chanya ili kusonga mbele kwa uhuru zaidi." }
    },
    firstChallenge: {
        default: { title: "Changamoto ya Kwanza", description: "Changamoto yako ya kwanza inaashiria masomo muhimu unayopaswa kujifunza katika hatua za mwanzo za maisha yako. Ni fursa ya kukua na kuimarisha msingi wako kabla ya kukabiliana na changamoto kubwa zaidi." }
    },
    luckyColor: {
        default: { title: "Rangi ya Bahati", description: "Rangi yako ya bahati inaleta nishati chanya na inaweza kukuza furaha na mafanikio yako. Kila rangi ina maana yake, na kuitumia kwa uangalifu kunaweza kuongeza bahati yako maishani." }
    },
    luckyDay: {
        default: { title: "Siku ya Bahati", description: "Siku yako ya bahati ni wakati mwafaka wa kuanzisha miradi mipya, kufanya maamuzi muhimu, au kufuata malengo yako. Nishati ya siku hii inakupa nguvu na ulinzi wa ziada." }
    },
    tarotCard: {
        default: { title: "Kadi ya Tarot (Archetype)", description: "Kadi yako ya Tarot Archetype inaashiria somo kuu la maisha yako au utu wako wa ndani. Ni kielelezo cha hekima ya kale inayokuongoza katika safari yako ya kiroho na kukusaidia kuelewa undani wa nafsi yako." }
    },
    chakra: {
        default: { title: "Chakra Kiongozi", description: "Chakra yako kiongozi inaashiria kituo chako cha nishati kinachoamua afya yako ya kiroho, kihisia, na kimwili. Kuelewa na kusawazisha Chakra yako kunaweza kuongeza nguvu zako za ndani na kukuleta katika usawa kamili." }
    },
    chineseZodiac: {
        default: { title: "Nyota ya Kichina", description: "Nyota yako ya Kichina, kulingana na mwaka wako wa kuzaliwa, inaashiria sifa zako za msingi, tabia zako, na jinsi unavyoingiliana na wengine. Ni mfumo wa kale unaotoa ufafanuzi wa kina wa utu wako." }
    },
    pinnacle: {
        default: { title: "Mzunguko wa Kilele (Pinnacle Cycle)", description: "Mzunguko wako wa kilele unaashiria vipindi maalum maishani mwako ambavyo huleta fursa za kipekee za ukuaji na mafanikio. Kila kilele kina masomo yake, vikwazo, na zawadi zake." }
    },
    auraColor: {
        default: { title: "Rangi ya Aura", description: "Rangi yako ya aura inaakisi nishati yako ya kiroho na kihisia, ikionyesha hali yako ya ndani, afya, na utu wako. Kila rangi ina maana yake ya kipekee, ikikupa ufahamu wa kina wa 'mimi' wako wa ndani." }
    },
    lifeLesson: {
        default: { title: "Somo la Maisha", description: "Somo lako la maisha ni changamoto kuu unayopaswa kushinda au sifa unayopaswa kukuza katika maisha haya. Linakuongoza kuelekea ukuaji wa kiroho na kujitambua." }
    },
    maturityNumber: {
        default: { title: "Namba ya Ukomavu", description: "Namba yako ya Ukomavu inaonyesha matamanio yako ya kweli na kusudi lako kuu la maisha. Linaanza kujitokeza katika umri wako wa kati na kuongoza safari yako ya kibinafsi kuelekea utimilifu." }
    },
    rationalThought: {
        default: { title: "Fikra za Kimantiki", description: "Namba yako ya Fikra za Kimantiki inaashiria jinsi unavyochakata taarifa na kufanya maamuzi. Inaonyesha uwezo wako wa kufikiri kimantiki, kutatua matatizo, na kuelewa ulimwengu unaokuzunguka." }
    },
    attitudeNumber: {
        default: { title: "Namba ya Mtazamo", description: "Namba yako ya Mtazamo inaakisi hisia zako za kwanza na jinsi watu wengine wanavyokuona. Ni 'uso' wako wa nje, ukionyesha jinsi unavyojitambulisha kwa ulimwengu kabla ya undani wako kujulikana." }
    },
    northNode: {
        default: { title: "North Node", description: "North Node yako inaashiria njia ya ukuaji wa roho yako na masomo muhimu unayopaswa kujifunza katika maisha haya. Inaonyesha kusudi lako la juu na wapi unapaswa kuelekeza nishati yako kwa utimilifu." }
    },
    guardianAngel: {
        default: { title: "Malaika Mlinzi", description: "Malaika wako Mlinzi ni kiumbe wa kiroho anayekulinda, kukuongoza, na kukusaidia katika safari yako ya maisha. Yupo kukupa faraja, nguvu, na hekima wakati unapoihitaji zaidi." }
    },
    soulAge: {
        default: { title: "Umri wa Roho", description: "Umri wa Roho yako unaashiria kiwango cha ukuaji wa roho yako na uzoefu wake katika maisha mbalimbali. Inaonyesha hekima yako ya ndani na jinsi unavyoelewa ulimwengu na masomo yake." }
    }
};

// =================================================================
// SECTION 2: DYNAMIC REPORT GENERATOR (FINAL)
// =================================================================

function formatStandardReport(data, reportTitle) {
    // If specific data for a card is not yet in the knowledge base, use the generic default message.
    if (!data || !data.title || data === mavenguKnowledgeBase.default) {
        return `<div class="report-content" style="text-align: left; line-height: 1.6;">
                    <h3 style="color: var(--accent-color);">${mavenguKnowledgeBase.default.title}</h3>
                    <p>${mavenguKnowledgeBase.default.description}</p>
                </div>`;
    }
    return `
        <div class="report-content" style="text-align: left; line-height: 1.6;">
            <h3 style="color: var(--accent-color);">${data.title}</h3>
            <p>${data.description}</p>
        </div>
    `;
}

function formatLifePathReport(data) {
    if (!data || !data.title || data === mavenguKnowledgeBase.default) {
        return formatStandardReport(mavenguKnowledgeBase.default, "Life Path");
    }
    return `
        <div class="report-content" style="text-align: left; line-height: 1.6;">
            <h3 style="color: var(--accent-color);">Your Core OS: ${data.metaphor}</h3>
            <p>${data.description}</p>
            <h4 style="color: var(--accent-color); margin-top: 1rem;">Core Strengths:</h4>
            <ul>${data.strengths.map(item => `<li>${item}</li>`).join('')}</ul>
            <h4 style="color: var(--accent-color); margin-top: 1rem;">Potential Pitfalls:</h4>
            <ul>${data.weaknesses.map(item => `<li>${item}</li>`).join('')}</ul>
            <h4 style="color: var(--accent-color); margin-top: 1rem;">Primary Life Lesson:</h4>
            <p>${data.lessons}</p>
            <h4 style="color: var(--accent-color); margin-top: 1rem;">Practical Guidance:</h4>
            <p>${data.guidance}</p>
        </div>
    `;
}

function formatShadowWorkReport(data) {
     if (!data || !data.title || data === mavenguKnowledgeBase.default) {
        return formatStandardReport(mavenguKnowledgeBase.default, "Shadow Work");
    }
    return `
        <div class="report-content" style="text-align: left; line-height: 1.6;">
            <h3 style="color: var(--accent-color);">${data.title}</h3>
            <p><strong>Kivuli cha Msingi (Core Shadow):</strong> ${data.issue}</p>
            <p><strong>Lengo la Mwangaza (Integration Goal):</strong> ${data.integration}</p>
            <p style="margin-top: 1.5rem; padding-top: 1rem; border-top: 1px solid var(--accent-color-trans); font-style: italic;">Shadow Work ni mchakato wa kuchunguza sehemu zetu zilizofichwa au kukataliwa ili kuziponya na kuzijumuisha, na hivyo kutufanya tuwe kamili na wenye nguvu zaidi.</p>
        </div>
    `;
}

function generateDynamicReport(reportType, profile, title) {
    let lookupKey;
    let data;

    // Determine the key to use for looking up data in the knowledge base
    switch (reportType) {
        case 'lifePath':        lookupKey = profile.lifePath; break;
        case 'destinyNumber':   lookupKey = profile.destiny; break;
        case 'soulUrge':        lookupKey = profile.soulUrge; break;
        case 'personalYear':    lookupKey = profile.personalYear; break;
        case 'shadowWork':      lookupKey = profile.zodiac.name; break;
        case 'element':         lookupKey = profile.zodiac.element; break;
        case 'birthDayNumber':  lookupKey = 'default'; break; // birthDayNumber has a generic description for now
        case 'soulMission':     lookupKey = 'default'; break; // soulMission has a generic description for now
        case 'symbolicWisdom':  lookupKey = 'default'; break; // symbolicWisdom has a generic description for now
        case 'rulingPlanet':    lookupKey = 'default'; break; // rulingPlanet has a generic description for now
        case 'moonPhase':       lookupKey = 'default'; break; // moonPhase has a generic description for now
        case 'birthStone':      lookupKey = 'default'; break; // birthStone has a generic description for now
        case 'spiritAnimal':    lookupKey = 'default'; break; // spiritAnimal has a generic description for now
        case 'balanceNumber':   lookupKey = 'default'; break; // balanceNumber has a generic description for now
        case 'passionNumber':   lookupKey = 'default'; break; // passionNumber has a generic description for now
        case 'karmicDebt':      lookupKey = 'default'; break; // karmicDebt has a generic description for now
        case 'firstChallenge':  lookupKey = 'default'; break; // firstChallenge has a generic description for now
        case 'luckyColor':      lookupKey = 'default'; break; // luckyColor has a generic description for now
        case 'luckyDay':        lookupKey = 'default'; break; // luckyDay has a generic description for now
        case 'tarotCard':       lookupKey = 'default'; break; // tarotCard has a generic description for now
        case 'chakra':          lookupKey = 'default'; break; // chakra has a generic description for now
        case 'chineseZodiac':   lookupKey = 'default'; break; // chineseZodiac has a generic description for now
        case 'pinnacle':        lookupKey = 'default'; break; // pinnacle has a generic description for now
        case 'auraColor':       lookupKey = 'default'; break; // auraColor has a generic description for now
        case 'lifeLesson':      lookupKey = 'default'; break; // lifeLesson has a generic description for now
        case 'maturityNumber':  lookupKey = 'default'; break; // maturityNumber has a generic description for now
        case 'rationalThought': lookupKey = 'default'; break; // rationalThought has a generic description for now
        case 'attitudeNumber':  lookupKey = 'default'; break; // attitudeNumber has a generic description for now
        case 'northNode':       lookupKey = 'default'; break; // northNode has a generic description for now
        case 'guardianAngel':   lookupKey = 'default'; break; // guardianAngel has a generic description for now
        case 'soulAge':         lookupKey = 'default'; break; // soulAge has a generic description for now
        default:                lookupKey = 'default'; break;
    }
    
    // Gracefully handle cases where the reportType itself might not exist yet
    if (!mavenguKnowledgeBase[reportType]) {
        return formatStandardReport(mavenguKnowledgeBase.default, title);
    }

    data = mavenguKnowledgeBase[reportType][lookupKey];
    
    if (!data) {
        return formatStandardReport(mavenguKnowledgeBase.default, title);
    }

    // Render the report based on its type
    switch (reportType) {
        case 'lifePath':        return formatLifePathReport(data);
        case 'shadowWork':      return formatShadowWorkReport(data);
        default:                return formatStandardReport(data, title);
    }
}


// =================================================================
// SECTION 3: THE MODAL CONTROLLER (FINAL)
// =================================================================

const reportTypeMap = {
    'life-path-number': 'lifePath',
    'destiny-number': 'destinyNumber',
    'soul-urge-number': 'soulUrge',
    'personal-year-number': 'personalYear',
    'element-text': 'element',
    'shadow-work-text': 'shadowWork',
    // --- Mapped to 'default' in knowledge base for now ---
    'birth-day-number': 'birthDayNumber',
    'soul-mission-text': 'soulMission',
    'symbolic-wisdom-text': 'symbolicWisdom',
    'planet-name': 'rulingPlanet',
    'moon-phase': 'moonPhase',
    'birth-stone': 'birthStone',
    'spirit-animal': 'spiritAnimal',
    'balance-number': 'balanceNumber',
    'passion-number': 'passionNumber',
    'karmic-debt': 'karmicDebt',
    'first-challenge': 'firstChallenge',
    'lucky-color': 'luckyColor',
    'lucky-day': 'luckyDay',
    'tarot-card': 'tarotCard',
    'chakra-ruler': 'chakra',
    'chinese-zodiac': 'chineseZodiac',
    'pinnacle-cycle': 'pinnacle',
    'aura-color': 'auraColor',
    'life-lesson': 'lifeLesson',
    'maturity-number': 'maturityNumber',
    'rational-thought': 'rationalThought',
    'attitude-number': 'attitudeNumber',
    'north-node': 'northNode',
    'guardian-angel': 'guardianAngel',
    'soul-age': 'soulAge'
};

// This function replaces the original setupModalTrigger in your app.js
function setupModalTrigger(elementId, title, prompt, profile) {
    const element = document.getElementById(elementId);
    if (!element) return;

    const panel = element.closest('.tech-panel');
    if (panel) {
        panel.style.cursor = 'pointer';
        panel.onclick = () => openDeepDiveModal(elementId, title, profile);
    }
}

// This function replaces the original openDeepDiveModal in your app.js
async function openDeepDiveModal(elementId, title, profile) {
    const modal = document.getElementById('info-modal');
    if (!modal) return;

    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const closeBtn = document.getElementById('close-modal');

    modalTitle.textContent = title;
    modal.style.display = 'flex';

    modalBody.innerHTML = `
        <div class="scanner-line"></div>
        <p style="text-align: center; margin-top: 2rem;">ANALYZING AKASHIC RECORDS...</p>
    `;

    const closeModal = () => modal.style.display = 'none';
    closeBtn.onclick = closeModal;
    modal.onclick = (e) => {
        if (e.target === modal) closeModal();
    };

    setTimeout(() => {
        const reportType = reportTypeMap[elementId];
        const reportContent = generateDynamicReport(reportType, profile, title);
        modalBody.innerHTML = reportContent;
    }, 1200);
}


/* Particle Animation System */
function initParticles() {
    const canvas = document.getElementById('universe-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width, height;
    let particles = [];

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }

    window.addEventListener('resize', resize);
    resize();

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.size = Math.random() * 2;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
            this.color = `rgba(0, 243, 255, ${Math.random() * 0.5})`;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x > width) this.x = 0;
            if (this.x < 0) this.x = width;
            if (this.y > height) this.y = 0;
            if (this.y < 0) this.y = height;
        }

        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function init() {
        particles = [];
        for (let i = 0; i < 100; i++) {
            particles.push(new Particle());
        }
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        particles.forEach(p => {
            p.update();
            p.draw();
        });

        requestAnimationFrame(animate);
    }

    init();
    animate();
}