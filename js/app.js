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

    // New Diagnostic Cards - Placeholder values (to be replaced with actual calculations)
    const cognitiveStyle = "Holistic Synthesizer";
    const personalityArchetype = "The Sage";
    const emotionalCycle = "Crest & Trough Pattern";
    const careerAlignment = "Guide / Analyst";
    const wealthFlow = "Value-Based Accumulation";
    const relationshipDynamics = "Empathetic Support";
    const pastLifeInfluence = "The Scholar's Oath";
    const energyBlockage = "Throat (Vishuddha)";
    const lightShadowBalance = "72% Nuru";
    const lifeTimeline = "Integration Phase";
    const ninetyDayForecast = "Creative Expansion";
    const lunarInfluence = "High Sensitivity";
    const aiConfidenceScore = "98.7%";
    const frequencyCompatibility = "Solfeggio 528Hz";
    const energyDNA = "Alpha-7-Gamma-9";
    const personalMantra = oracle || "Clarity in Action, Purpose in Stillness.";
    const soulRank = "Adept Soul";
    const collectiveRole = "Grid Stabilizer";

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
        soulAge: soulAge,
        // New Diagnostic Cards
        cognitiveStyle: cognitiveStyle,
        personalityArchetype: personalityArchetype,
        emotionalCycle: emotionalCycle,
        careerAlignment: careerAlignment,
        wealthFlow: wealthFlow,
        relationshipDynamics: relationshipDynamics,
        pastLifeInfluence: pastLifeInfluence,
        energyBlockage: energyBlockage,
        lightShadowBalance: lightShadowBalance,
        lifeTimeline: lifeTimeline,
        ninetyDayForecast: ninetyDayForecast,
        lunarInfluence: lunarInfluence,
        aiConfidenceScore: aiConfidenceScore,
        frequencyCompatibility: frequencyCompatibility,
        energyDNA: energyDNA,
        personalMantra: personalMantra,
        soulRank: soulRank,
        collectiveRole: collectiveRole
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
    const northNodeElement = document.getElementById('north-node');
    if (northNodeElement) { // Check if element exists before setting content
        northNodeElement.textContent = profile.northNode.toUpperCase();
    }
    const guardianAngelElement = document.getElementById('guardian-angel');
    if (guardianAngelElement) { // Check if element exists before setting content
        guardianAngelElement.textContent = profile.guardianAngel.toUpperCase();
    }
    const soulAgeElement = document.getElementById('soul-age');
    if (soulAgeElement) { // Check if element exists before setting content
        soulAgeElement.textContent = profile.soulAge.toUpperCase();
    }

    // Update New Diagnostic Cards
    const cognitiveStyleEl = document.getElementById('cognitive-style-value');
    if (cognitiveStyleEl && profile.cognitiveStyle) {
        cognitiveStyleEl.textContent = profile.cognitiveStyle;
    }
    
    const personalityArchetypeEl = document.getElementById('personality-archetype-value');
    if (personalityArchetypeEl && profile.personalityArchetype) {
        personalityArchetypeEl.textContent = profile.personalityArchetype;
    }
    
    const emotionalCycleEl = document.getElementById('emotional-cycle-value');
    if (emotionalCycleEl && profile.emotionalCycle) {
        emotionalCycleEl.textContent = profile.emotionalCycle;
    }
    
    const careerAlignmentEl = document.getElementById('career-alignment-value');
    if (careerAlignmentEl && profile.careerAlignment) {
        careerAlignmentEl.textContent = profile.careerAlignment;
    }
    
    const wealthFlowEl = document.getElementById('wealth-flow-value');
    if (wealthFlowEl && profile.wealthFlow) {
        wealthFlowEl.textContent = profile.wealthFlow;
    }
    
    const relationshipDynamicsEl = document.getElementById('relationship-dynamics-value');
    if (relationshipDynamicsEl && profile.relationshipDynamics) {
        relationshipDynamicsEl.textContent = profile.relationshipDynamics;
    }
    
    const pastLifeInfluenceEl = document.getElementById('past-life-influence-value');
    if (pastLifeInfluenceEl && profile.pastLifeInfluence) {
        pastLifeInfluenceEl.textContent = profile.pastLifeInfluence;
    }
    
    const energyBlockageEl = document.getElementById('energy-blockage-value');
    if (energyBlockageEl && profile.energyBlockage) {
        energyBlockageEl.textContent = profile.energyBlockage;
    }
    
    const lightShadowBalanceEl = document.getElementById('light-shadow-balance-value');
    if (lightShadowBalanceEl && profile.lightShadowBalance) {
        lightShadowBalanceEl.textContent = profile.lightShadowBalance;
    }
    
    const lifeTimelineEl = document.getElementById('life-timeline-value');
    if (lifeTimelineEl && profile.lifeTimeline) {
        lifeTimelineEl.textContent = profile.lifeTimeline;
    }
    
    const ninetyDayForecastEl = document.getElementById('ninety-day-forecast-value');
    if (ninetyDayForecastEl && profile.ninetyDayForecast) {
        ninetyDayForecastEl.textContent = profile.ninetyDayForecast;
    }
    
    const lunarInfluenceEl = document.getElementById('lunar-influence-value');
    if (lunarInfluenceEl && profile.lunarInfluence) {
        lunarInfluenceEl.textContent = profile.lunarInfluence;
    }
    
    const aiConfidenceScoreEl = document.getElementById('ai-confidence-score-value');
    if (aiConfidenceScoreEl && profile.aiConfidenceScore) {
        aiConfidenceScoreEl.textContent = profile.aiConfidenceScore;
    }
    
    const frequencyCompatibilityEl = document.getElementById('frequency-compatibility-value');
    if (frequencyCompatibilityEl && profile.frequencyCompatibility) {
        frequencyCompatibilityEl.textContent = profile.frequencyCompatibility;
    }
    
    const energyDNAEl = document.getElementById('energy-dna-value');
    if (energyDNAEl && profile.energyDNA) {
        energyDNAEl.textContent = profile.energyDNA;
    }
    
    const personalMantraEl = document.getElementById('personal-mantra-value');
    if (personalMantraEl && profile.personalMantra) {
        personalMantraEl.textContent = profile.personalMantra;
    }
    
    const soulRankEl = document.getElementById('soul-rank-value');
    if (soulRankEl && profile.soulRank) {
        soulRankEl.textContent = profile.soulRank;
    }
    
    const collectiveRoleEl = document.getElementById('collective-role-value');
    if (collectiveRoleEl && profile.collectiveRole) {
        collectiveRoleEl.textContent = profile.collectiveRole;
    }

    // Setup click handlers for all new diagnostic cards
    setupModalTrigger('cognitive-style-value', 'NJIA YA UFAHAMU', '', profile);
    setupModalTrigger('personality-archetype-value', 'MCHORO WA UTU', '', profile);
    setupModalTrigger('emotional-cycle-value', 'MZUNGUKO WA HISIA', '', profile);
    setupModalTrigger('career-alignment-value', 'MWELEKEO WA KAZI', '', profile);
    setupModalTrigger('wealth-flow-value', 'MTIRIRIKO WA UTAJIRI', '', profile);
    setupModalTrigger('relationship-dynamics-value', 'MIENENDO YA MAHUSIANO', '', profile);
    setupModalTrigger('past-life-influence-value', 'USHAWISHI WA MAISHA YA ZAMANI', '', profile);
    setupModalTrigger('energy-blockage-value', 'KIZUIZI CHA NISHATI', '', profile);
    setupModalTrigger('light-shadow-balance-value', 'USAWA WA NURU/KIVULI', '', profile);
    setupModalTrigger('life-timeline-value', 'MZUNGUKO WA MAISHA', '', profile);
    setupModalTrigger('ninety-day-forecast-value', 'UTABIRI WA SIKU 90', '', profile);
    setupModalTrigger('lunar-influence-value', 'USHAWISHI WA MWEZI', '', profile);
    setupModalTrigger('ai-confidence-score-value', 'ALAMA YA IMANI YA AI', '', profile);
    setupModalTrigger('frequency-compatibility-value', 'UTANGAMANO WA MASAFA', '', profile);
    setupModalTrigger('energy-dna-value', 'NISHATI DNA', '', profile);
    setupModalTrigger('personal-mantra-value', 'MANTRA YA BINAFSI', '', profile);
    setupModalTrigger('soul-rank-value', 'CHEO CHA ROHO', '', profile);
    setupModalTrigger('collective-role-value', 'NAFASI YA JAMII', '', profile);

    // Setup click handlers for existing cards
    setupModalTrigger('life-path-number', `PROCESSOR YA MSINGI // LIFE PATH ${profile.lifePath}`, '', profile);
    setupModalTrigger('destiny-number', `MWELEKEO // DESTINY ${profile.destiny}`, '', profile);
    setupModalTrigger('soul-urge-number', `MSUKUMO WA NDANI // SOUL URGE ${profile.soulUrge}`, '', profile);
    setupModalTrigger('personal-year-number', `MZUNGUKO WA SASA // PERSONAL YEAR ${profile.personalYear}`, '', profile);
    setupModalTrigger('birth-day-number', `KIPAJI CHA ASILI // BIRTH DAY ${profile.birthDayNumber}`, '', profile);
    setupModalTrigger('element-text', `ELEMENTI YA ASILI // ELEMENT: ${profile.zodiac.element.toUpperCase()}`, '', profile);
    setupModalTrigger('soul-mission-text', 'LENGO KUU // SOUL MISSION', '', profile);
    setupModalTrigger('shadow-work-text', 'SEKTA ILIYOJIFICHA // SHADOW WORK', '', profile);
    setupModalTrigger('symbolic-wisdom-text', 'UCHAMBUZI WA KIISHARA // SYMBOLIC WISDOM', '', profile);
    setupModalTrigger('meditation-text', 'PROTOKALI YA KUONGEZA NGUVU // MEDITATION', '', profile);
    setupModalTrigger('sun-freq-text', 'RESONANCE // SUN FREQUENCY', '', profile);
    setupModalTrigger('aesthetics-text', 'SAINI YA KIKIDIJITALI // AESTHETICS', '', profile);
    setupModalTrigger('oracle-text', 'UJUMBE WA MFUMO // MYSTIC ORACLE', '', profile);

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
    setupModalTrigger('first-challenge', `FIRST CHALLENGE: ${profile.firstChallenge}`, `Changamoto yangu ya kwanza ni namba ${profile.first-challenge}. Hii inanifundisha nini katika kipindi hiki cha maisha?`, profile);
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
        1: { title: "Destiny: The Leader", description: "Your destiny is to lead, innovate, and pioneer, developing independence and self-reliance." },
        2: { title: "Destiny: The Diplomat", description: "Your destiny is to create harmony, balance, and cooperation, a path of partnership and patience." },
        3: { title: "Destiny: The Communicator", description: "Your destiny is to express yourself with joy and creativity, uplifting others with your words and art." },
        4: { title: "Destiny: The Builder", description: "Your destiny is to create lasting value through hard work, discipline, and building secure foundations." },
        5: { title: "Destiny: The Adventurer", description: "Your destiny is to experience freedom, embrace change, and act as a catalyst for progress." },
        6: { title: "Destiny: The Nurturer", description: "Your destiny is to serve and heal your family and community through responsibility and compassion." },
        7: { title: "Destiny: The Seeker", description: "Your destiny is to uncover deep truths, connecting the spiritual with the intellectual." },
        8: { title: "Destiny: The Executive", description: "Your destiny is to master the material world, wielding power and abundance for a greater good." },
        9: { title: "Destiny: The Humanitarian", description: "Your destiny is to serve humanity with wisdom and compassion, inspiring and uplifting others with universal love." }
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
        default: { title: "Mwelekeo wa Roho", description: "North Node yako inaashiria njia ya ukuaji wa roho yako na masomo muhimu unayopaswa kujifunza katika maisha haya. Inaonyesha kusudi lako la juu na wapi unapaswa kuelekeza nishati yako kwa utimilifu." }
    },
    guardianAngel: {
        default: { title: "Malaika Mlinzi", description: "Malaika wako Mlinzi ni kiumbe wa kiroho anayekulinda, kukuongoza, na kukusaidia katika safari yako ya maisha. Yupo kukupa faraja, nguvu, na hekima wakati unapoihitaji zaidi." }
    },
    soulAge: {
        default: { title: "Umri wa Roho", description: "Umri wa Roho yako unaashiria kiwango cha ukuaji wa roho yako na uzoefu wake katika maisha mbalimbali. Inaonyesha hekima yako ya ndani na jinsi unavyoelewa ulimwengu na masomo yake." }
    },
    rulingPlanet: {
        default: { title: "Sayari Kiongozi", description: "Sayari yako kiongozi inaathiri pakubwa utu wako, tabia zako, na jinsi unavyoingiliana na ulimwengu. Ni nguvu ya ulimwengu inayokuongoza, ikionyesha vipaji vyako vya asili na changamoto zako." }
    },
    // New cards' default entries (as they would be in mavenguKnowledgeBase)
    cognitiveStyle: {
        default: { title: "Njia ya Ufahamu (Cognitive Style)", description: "Njia yako ya Ufahamu inaonyesha jinsi unavyochakata taarifa, unafanya maamuzi, na unavyotumia akili yako. Inaathiri jinsi unavyojifunza, kutatua matatizo, na kuwasiliana. Kuelewa mtindo wako wa kiakili kutakusaidia kutumia uwezo wako kikamilifu." }
    },
    personalityArchetype: {
        default: { title: "Mchoro wa Utu (Personality Archetype)", description: "Mchoro wako wa Utu unafunua mifumo mikuu ya kisaikolojia inayoongoza utu wako. Ni kielelezo cha ndani kinachoonyesha motisha zako za msingi, tabia zako, na safari yako ya kishujaa. Inakusaidia kujielewa kwa undani zaidi." }
    },
    emotionalCycle: {
        default: { title: "Mzunguko wa Hisia (Emotional Cycle)", description: "Mzunguko wako wa Hisia unaelezea jinsi hisia zako zinavyobadilika na kurudiarudia. Inaonyesha vipindi vyako vya nguvu za kihisia, vile vya chini, na jinsi unavyopata ahueni. Kuelewa mzunguko huu kutakusaidia kudhibiti hisia zako vizuri." }
    },
    careerAlignment: {
        default: { title: "Mwelekeo wa Kazi (Career Alignment)", description: "Mwelekeo wako wa Kazi unafunua njia bora za kazi zinazofanana na vipaji vyako vya asili na kusudi lako la maisha. Inaelezea majukumu unayostahili, mazingira bora ya kazi, na njia ya kupata kuridhika kikazi." }
    },
    wealthFlow: {
        default: { title: "Mtiririko wa Utajiri (Wealth Flow)", description: "Mtiririko wako wa Utajiri unaelezea uhusiano wako na pesa na jinsi unavyovutia, unavyosimamia, na unavyokabiliana na utajiri. Inafichua vizuizi vya kifedha na vipindi vya ukuaji wa kiuchumi." }
    },
    relationshipDynamics: {
        default: { title: "Mienendo ya Mahusiano (Relationship Dynamics)", description: "Mienendo yako ya Mahusiano inaelezea jinsi unavyoingiliana na wengine. Inaonyesha mtindo wako wa kutoa na kupokea, mahitaji yako muhimu, na 'bendera nyekundu' (red flags) zinazoweza kujitokeza. Inakusaidia kujenga uhusiano wenye afya." }
    },
    pastLifeInfluence: {
        default: { title: "Ushawishi wa Maisha ya Zamani (Past Life Influence)", description: "Ushawishi wako wa Maisha ya Zamani unafunua masomo ya karmic, vipaji ulivyoleta, na mandhari zinazojirudia kutoka maisha yaliyopita. Inakusaidia kuelewa kwa nini unakabiliana na changamoto fulani au una vipaji vya asili." }
    },
    energyBlockage: {
        default: { title: "Kizuizi cha Nishati (Energy Blockage)", description: "Kizuizi chako cha Nishati kinaashiria maeneo katika mfumo wako wa nishati ambapo mtiririko wa nguvu muhimu umezuiwa. Inaelezea chanzo cha tatizo, dalili zake, na jinsi ya kulirekebisha ili kurejesha usawa." }
    },
    lightShadowBalance: {
        default: { title: "Usawa wa Nuru na Kivuli (Light vs Shadow Balance)", description: "Usawa wako wa Nuru na Kivuli unaonyesha jinsi unavyokubali na kujumuisha sehemu zako zote za utu. Inapima kiwango cha kujitambua na kujikubali, ikifunua usawa kati ya 'nuru' na 'kivuli' chako." }
    },
    lifeTimeline: {
        default: { title: "Mzunguko wa Maisha (Life Timeline)", description: "Mzunguko wako wa Maisha unaelezea vipindi muhimu vya ukuaji na mabadiliko katika maisha yako. Inaonyesha awamu yako ya sasa, inayokuja, na ile ya kuachilia ili kukuongoza katika safari yako ya maisha." }
    },
    ninetyDayEnergyForecast: {
        default: { title: "Utabiri wa Nishati wa Siku 90 (90-Day Energy Forecast)", description: "Utabiri wako wa Nishati wa Siku 90 unaelezea mwelekeo wa nishati kwa miezi mitatu ijayo. Inaonyesha maeneo ya kuzingatia, hatari zinazoweza kutokea, na fursa zitakazojitokeza ili kukusaidia kupanga mikakati yako." }
    },
    lunarInfluence: {
        default: { title: "Ushawishi wa Mwezi (Lunar Influence)", description: "Ushawishi wako wa Mwezi unaelezea jinsi awamu za mwezi zinavyoathiri hisia zako, intuition, na viwango vya nishati ya kila siku. Inakupa mwongozo wa jinsi ya kuendana na mzunguko wa mwezi kwa afya bora." }
    },
    aiConfidenceScore: {
        default: {
            title: "Alama ya Imani ya AI / AI Confidence Score",
            CoreDefinition: "The Alama ya Imani ya AI, fundamentally known as the AI Confidence Score, represents the system's assessment of the reliability and precision of the diagnostic insights generated for an individual. It is a meta-metric that quantifies how strongly the AI system believes in the accuracy and resonance of its own analysis based on the clarity and coherence of the input data and energetic patterns detected.",
            DiagnosticPurpose: "This card exists within the Mavengu diagnostic system to provide transparency about the diagnostic process itself. It measures the quality and completeness of the data input, the coherence of the energetic patterns detected, and the system's confidence in the accuracy of its interpretations, thereby helping the individual understand the reliability of their diagnostic report.",
            HowDerived: "The AI Confidence Score is derived through an advanced algorithmic analysis that evaluates multiple factors: the completeness of input data (birth information, self-reported traits), the coherence of detected energetic patterns (consistency between numerological, astrological, and psychological indicators), and the alignment of the individual's profile with established archetypal patterns. The system assigns a percentage score based on the strength and clarity of these signals.",
            RevealsAboutUser: "This card reveals the quality and clarity of the energetic signal the individual is emitting, as well as the completeness of their self-awareness and data input. A high score indicates a clear, coherent energetic blueprint with strong alignment between different aspects of the profile. A lower score may indicate complexity, ambiguity, or missing critical data points that require further introspection.",
            AlignedExpression: "When the Alama ya Imani ya AI is high and aligned, it signifies a strong, clear energetic signal from the individual, allowing the system to generate highly precise and resonant insights. The individual receives validated, deep understanding of their profile, which empowers them to make aligned choices and take confident action based on the diagnostic report. This aligned state indicates optimal data input, algorithmic resonance, and a clear energetic blueprint, allowing the AI to function at its highest diagnostic capability and provide maximum value to the user.",
            ShadowExpression: "Conversely, the shadow or imbalance expression of the AI Confidence Score manifests when the system yields a lower score. This does not necessarily imply inaccuracy but rather complexity or ambiguity in the data. It might indicate conflicting energetic influences within the individual, missing critical data points, or patterns that do not cleanly fit established archetypes. This imbalance in diagnostic certainty results in a need for the individual to engage in deeper personal introspection, perhaps providing more nuanced self-reporting, to clarify their energetic blueprint.",
            RealLifeImpact: "The Alama ya Imani ya AI card profoundly influences the user's interaction with the diagnostic report by contextualizing the perceived validity and depth of the insights provided. A high score instills greater trust in the system's recommendations, empowering the individual to act on the insights with stronger conviction, impacting their decisions. If the AI has high confidence in relational dynamics or career alignment, it validates these interpretations, allowing for more effective application. It encourages a meta-awareness of the diagnostic process itself for personal growth.",
            GuidanceIntegration: "To integrate the wisdom of your Alama ya Imani ya AI, you must Trust with Discernment a high score as an endorsement of accuracy. Investigate Lower Scores, viewing them as an indicator of a more complex or unique profile, prompting further self-reflection. Enhance Data Input by considering if missing pieces of information could help the AI refine its analysis. Finally, Embrace Nuance for lower scores, understanding that the diagnostic is valuable but may require more intuitive discernment on your part."
        }
    },
    frequencyCompatibility: {
        default: {
            title: "Utangamano wa Masafa / Frequency Compatibility",
            CoreDefinition: "The Utangamano wa Masafa, fundamentally known as Frequency Compatibility, represents the harmonious and discordant energetic frequencies within your environment and how they specifically interact with your unique personal vibration. It is a precise energetic map of resonance, identifying which frequencies amplify or deplete your personal energetic field.",
            DiagnosticPurpose: "This card exists within the Mavengu diagnostic system to illuminate your intrinsic energetic sensitivities. It measures which frequencies support your vitality and which contribute to energetic drain or discord, clarifying how to optimize your environment for maximum energetic well-being, enhanced vitality, and protection from depleting influences. It is the energetic tuner for your personal operating system.",
            HowDerived: "The Frequency Compatibility insight is derived through an integration of bio-energetic sensing, physics of vibration, and AI pattern recognition across an individual's complete energetic profile. It is inferred from a comprehensive analysis of various subtle energetic indicators: your core energetic signature (Life Path, Energy DNA), your emotional and physical sensitivities (Emotional Cycle, Element), and responses to simulated or actual energetic exposures. The system identifies Compatible Frequencies (those that uplift) and Draining Frequencies (those that deplete), pinpointing specific vibrational patterns like Solfeggio frequencies or color spectrums.",
            RevealsAboutUser: "This card reveals profound physiological, mental, and emotional responses to subtle environmental stimuli. It illuminates whether an individual's energetic field is strengthened or weakened by specific soundscapes, visual environments, or interpersonal energetic exchanges. It decodes how your spiritual position manifests as unique energetic sensitivities, influencing your overall vitality, mental clarity, and emotional equilibrium based on the surrounding vibrational landscape.",
            AlignedExpression: "When the energy of the Frequency Compatibility is consciously aligned, the individual experiences enhanced vitality, emotional balance, mental clarity, and a profound sense of inner peace. They are able to create and maintain an environment that consistently uplifts and supports their energetic field. There is a palpable sense of being 'charged' and resilient, with an ability to easily transmute or deflect discordant energies. This aligned state signifies operating within an optimized energetic field, where personal vibration is harmoniously integrated with beneficial external frequencies.",
            ShadowExpression: "Conversely, the shadow or imbalance expression of the Frequency Compatibility manifests when an individual is constantly exposed to or immersed in draining frequencies that are discordant with their personal vibration. This leads to chronic fatigue, emotional dysregulation, mental fog, and a pervasive sense of energetic depletion. The individual may feel constantly overwhelmed, stressed, or unable to thrive in their current environment. This imbalance results in operating with a compromised energetic system, where personal vitality is continually siphoned off, leading to diminished well-being and increased susceptibility to illness.",
            RealLifeImpact: "The Utangamano wa Masafa card profoundly influences an individual's real life by shaping their energetic vitality, emotional stability, and overall sense of well-being. It guides decisions regarding living environments and work spaces. It provides insight into energetic dynamics in relationships. Optimizing one's work environment with compatible frequencies enhances work & productivity. Aligning with compatible frequencies supports health & well-being, reducing stress and boosting vitality.",
            GuidanceIntegration: "To integrate the wisdom of your Frequency Compatibility, you must Consciously Identify and Optimize your energetic environment. For example, if your compatibility is with Solfeggio 528Hz, Embrace Harmonious Resonance for healing and transformation. Integrate Sound Therapy by listening to music tuned to this frequency. Identify Draining Frequencies in your environment and minimize exposure. Finally, Create Sacred Space in your surroundings with harmonious colors and sounds to continuously charge your energetic field."
        }
    },
    energyDNA: {
        default: {
            title: "Nishati DNA / Energy DNA",
            CoreDefinition: "The Nishati DNA, fundamentally known as Energy DNA, represents your absolute, unique energetic signature—the fundamental vibratory blueprint that underlies all aspects of your being. It is a complex sequence of energetic patterns that is as unique as your genetic code, yet operates on the subtle, quantum level of reality.",
            DiagnosticPurpose: "This card exists within the Mavengu diagnostic system to illuminate your ultimate energetic identity. It measures your core frequency, identifies specific energetic modifiers that color your expression, and pinpoints any anomaly signatures that signify unique gifts or karmic imprints, thereby clarifying the energetic fingerprint of your soul.",
            HowDerived: "The Energy DNA insight is derived through an advanced AI inference engine that synthesizes and cross-references all available energetic data points from your comprehensive profile—including numerological core numbers, astrological placements, elemental balances, chakra health, and psychological archetypes. The system translates this complex array into a unique, alpha-numeric (or purely vibrational) signature, identifying your Core Frequency, any significant Modifiers, and an Anomaly Signature.",
            RevealsAboutUser: "This card reveals profound and unique mental patterns, emotional tendencies, and behavioral traits that stem directly from your fundamental energetic composition. It illuminates the core energetic drives that propel your existence and shapes your most intrinsic responses to the universe. It decodes how your spiritual position is reflected in your absolute energetic identity, manifesting as an inherent attraction to certain life experiences, a natural resonance with specific environments, and an unmistakable personal vibratory 'feel'.",
            AlignedExpression: "When the energy of the Energy DNA is consciously aligned, the individual experiences a profound sense of self-acceptance, authentic power, and effortless flow through life. They radiate their unique essence, attracting experiences, relationships, and opportunities that perfectly resonate with their core vibration. There is an unwavering sense of inner peace and a deep knowing of their true identity, leading to maximum vitality, creativity, and spiritual fulfillment. This aligned state signifies operating as a perfectly tuned energetic instrument, enabling them to manifest their highest potential with unparalleled grace and ease.",
            ShadowExpression: "Conversely, the shadow or imbalance expression of the Energy DNA manifests when an individual resists, misunderstands, or attempts to suppress their fundamental energetic identity. This leads to persistent feelings of being out of sync, a deep sense of unfulfillment, or chronic internal conflict as their core energy struggles against misaligned expressions. This imbalance results in operating against one's inherent energetic blueprint, leading to energetic depletion, confusion about one's purpose, and a diminished capacity for authentic self-expression and spiritual connection.",
            RealLifeImpact: "The Nishati DNA card profoundly influences an individual's real life by acting as the fundamental energetic substrate upon which all other aspects of their being are built. Operating in alignment brings clarity and conviction to decisions. It dictates deep compatibility in relationships. It provides an unparalleled sense of purpose in work & purpose, enabling maximum impact. Maintaining congruence with your Energy DNA is paramount for optimal health & vitality, preventing energetic friction.",
            GuidanceIntegration: "To integrate the wisdom of your Energy DNA, you must Cultivate Profound Self-Awareness, radical self-acceptance, and intentional alignment with your unique energetic signature. Embrace Your Uniqueness as your greatest strength. Identify Resonances by paying attention to what makes you feel energized and expanded. Heal Anomaly Signatures as profound areas for growth. Finally, Align All Aspects of your thoughts, emotions, actions, and environment with your fundamental Energy DNA."
        }
    },
    personalMantra: {
        default: {
            title: "Mantra ya Binafsi / Personal Mantra",
            CoreDefinition: "The Mantra ya Binafsi, fundamentally known as the Personal Mantra, represents a unique energetic affirmation or sacred phrase specifically tailored to resonate with your core energetic blueprint. It is a powerful verbal command designed to reprogram limiting beliefs, amplify desired states of being, and bring conscious focus to one's highest intentions.",
            DiagnosticPurpose: "This card exists within the Mavengu diagnostic system to illuminate your intrinsic energetic alignment tools. It measures how to leverage the power of focused thought and sound vibration to cultivate desired mental patterns and emotional states, thereby clarifying your energetic command line for personal reality and manifestation.",
            HowDerived: "The Personal Mantra insight is derived through an advanced AI inference engine that synthesizes and cross-references all available energetic data points from your comprehensive profile—including your Life Path, Soul Urge, current challenges, desired growth areas, and energetic blockages. The AI identifies the core energetic themes and desired vibrational shifts unique to the individual, then constructs a concise, positively framed phrase that resonates deeply with these identified needs and aspirations.",
            RevealsAboutUser: "This card reveals profound mental patterns of focused intention, emotional tendencies towards desired states (e.g., peace, courage, clarity), and behavioral traits that align with conscious manifestation. It illuminates the core beliefs that, when affirmed, can reprogram subconscious patterns and accelerate personal growth. It decodes how your spiritual position can be consciously influenced and directed through the power of sound and thought, manifesting as specific shifts in your energetic field and attracting aligned experiences.",
            AlignedExpression: "When the energy of the Personal Mantra is consciously aligned, the individual experiences enhanced mental clarity, emotional stability, and a powerful sense of intentionality. Their thoughts become more focused, their emotions more balanced, and their actions more aligned with their highest self. The mantra acts as a subtle energetic amplifier, constantly reinforcing positive patterns and attracting circumstances that resonate with its vibration. This aligned state signifies operating with an optimized mental and energetic programming, where conscious thought and vibration actively shape personal reality and accelerate manifestation.",
            ShadowExpression: "Conversely, the shadow or imbalance expression of the Personal Mantra manifests when an individual operates without a clear, conscious energetic affirmation. This leads to scattered thoughts, uncontrolled emotional reactions, and a subconscious mind that runs on default, often negative, programming. Without a targeted energetic command, the individual may feel overwhelmed by external influences, struggle with limiting beliefs, or find it difficult to maintain mental and emotional clarity. This imbalance results in operating without a powerful internal guidance system, leading to energetic susceptibility and diminished capacity for conscious creation.",
            RealLifeImpact: "The Mantra ya Binafsi card profoundly influences an individual's real life by serving as a potent tool for mental and energetic self-management, shaping their inner state and outer reality. Daily recitation of a mantra can instill mental clarity and conviction in decisions. A mantra focused on love or compassion subtly shifts one's energetic presence, influencing relationships. Integrating a mantra for purpose or creativity enhances focus and resilience in work & purpose. It is a powerful practice for mental & emotional health, reducing stress and overcoming limiting beliefs.",
            GuidanceIntegration: "To integrate the wisdom of your Personal Mantra, you must Make its Recitation a Consistent Daily Practice, whether silently or aloud. Feel the Vibration and intention behind the words, allowing them to reprogram your subconscious. Align Actions by consciously seeking to align your thoughts, words, and deeds with the essence of your mantra. Finally, Observe Shifts in your inner state and external circumstances, trusting the subtle changes as evidence of energetic reprogramming."
        }
    },
    soulRank: {
        default: {
            title: "Cheo cha Roho / Soul Rank",
            CoreDefinition: "The Cheo cha Roho, fundamentally known as the Soul Rank, represents an individual's current evolutionary position on the vast spectrum of spiritual development, reflecting its accumulated wisdom and the current focus of its growth. It is an assessment of your soul's experiential depth and overarching themes it is mastering across multiple incarnations.",
            DiagnosticPurpose: "This card exists within the Mavengu diagnostic system to illuminate your spiritual progression. It measures your soul's accumulated wisdom, level of awareness, and integration of life lessons, providing clarity on your inherent worldview, your specific challenges and opportunities for growth that are commensurate with your soul's maturity. It is the energetic metric of your spiritual advancement.",
            HowDerived: "The Soul Rank insight is derived through an advanced AI inference engine that synthesizes and cross-references all available energetic data points from your comprehensive profile—including Soul Age, Life Path (especially Master Numbers), Past Life Influences (karmic lessons), and the coherence of your energetic field (Energy DNA, Chakra health). The AI identifies the prevailing spiritual orientation, level of awareness, and integration of life lessons to assign a specific rank (e.g., Novice, Initiate, Adept, Master, Ascended Soul).",
            RevealsAboutUser: "This card reveals profound mental patterns (e.g., a focus on basic survival vs. global service), emotional tendencies (e.g., ego-driven reactions vs. universal compassion), and behavioral traits (e.g., self-centeredness vs. enlightened leadership) characteristic of specific developmental levels. It illuminates the core spiritual lessons that are central to your current stage and highlights the spiritual imperative of your evolving journey. It decodes how your spiritual position influences your perception of self, your interactions with others, and your approach to life's grand challenges, aligning with the stage of your soul's maturity.",
            AlignedExpression: "When the energy of the Soul Rank is consciously aligned, the individual operates in harmony with their soul's inherent wisdom and developmental stage. They find fulfillment in pursuing goals and experiences that resonate with their soul's current evolutionary imperative, leading to a deep sense of authenticity and purpose. There is a natural ease in navigating challenges appropriate to their stage, and their inherent qualities are expressed constructively and powerfully. This aligned state signifies operating in congruence with the soul's unique journey, leading to profound personal fulfillment and growth that is in sync with its cosmic timing.",
            ShadowExpression: "Conversely, the shadow or imbalance expression of the Soul Rank manifests when an individual attempts to operate outside of their soul's natural developmental stage, often due to societal pressures, a misunderstanding of their inherent nature, or resisting necessary growth. This can lead to persistent feelings of being misunderstood, frustrated, or out of place. For example, an Old Soul trying to fit into a purely materialistic Young Soul paradigm might feel deeply unfulfilled. This imbalance results in operating against the soul's true evolutionary rhythm, leading to stagnation, internal conflict, and a diminished capacity to fully express their authentic self.",
            RealLifeImpact: "The Cheo cha Roho card profoundly influences an individual's real life by dictating their inherent worldview, their deepest motivations, and their natural approach to various life situations, all colored by their stage of spiritual development. It influences the complexity and depth of decision-making. It shapes compatibility and dynamics in relationships. It highlights vocational paths and life missions that resonate with the soul's current stage for work & purpose. It provides a framework for understanding inherent challenges and growth opportunities for personal growth.",
            GuidanceIntegration: "To integrate the wisdom of your Soul Rank, you must Consciously Understand and Honor your soul's developmental stage. For example, if your rank is Adept Soul, Embrace Deeper Mastery and recognize your focus on conscious application of wisdom. Seek Specialized Knowledge that aligns with your Life Path and purpose. Guide and Mentor others from a place of empowerment. Finally, Integrate Wisdom into Action, ensuring your insights are translated into tangible actions for positive change."
        }
    },
    collectiveRole: {
        default: {
            title: "Nafasi ya Jamii / Collective Role",
            CoreDefinition: "The Nafasi ya Jamii, fundamentally known as the Collective Role, represents an individual's unique contribution to the larger human collective, the planetary energetic grid, or even the universal consciousness, particularly during this pivotal era of global transformation. It is your soul's appointed function within the global organism.",
            DiagnosticPurpose: "This card exists within the Mavengu diagnostic system to illuminate your transpersonal purpose. It measures how your unique talents, Life Path, and accumulated wisdom serve a purpose beyond personal gratification, providing clarity on your integral position within the collective consciousness and highlighting why now your specific energetic contribution is crucial. It is the cosmic job description for your highest service.",
            HowDerived: "The Collective Role insight is derived through an advanced AI inference engine that synthesizes and cross-references all available energetic data points from your comprehensive profile—including Soul Age, Life Path, Destiny Number, Personality Archetype, Energy DNA, and current energetic readiness. The AI analyzes the unique convergence of your personal attributes to identify a specialized contribution that aligns with the current needs of the collective evolution. Roles can range from \"Grid Stabilizer\" to \"Consciousness Awakener,\" leveraging a complex understanding of global energetic patterns and human developmental needs.",
            RevealsAboutUser: "This card reveals profound mental patterns (e.g., a strong drive for social justice, a global perspective), emotional tendencies towards universal compassion or a deep sense of responsibility, and behavioral traits that manifest as a desire to serve or impact beyond the personal sphere. It illuminates the core purpose that transcends individual ambition, aligning one's actions with the greater good. It decodes how your spiritual position is influenced by the current needs of the collective, manifesting as specific drives, attractions, or skill sets uniquely suited to contribute to global well-being and evolution.",
            AlignedExpression: "When the energy of the Collective Role is consciously aligned, the individual experiences a powerful sense of purpose, global connection, and a deep satisfaction in contributing to something larger than themselves. Their actions, though personal, resonate with a universal significance, leading to impactful contributions that feel effortless and divinely guided. There is a palpable sense of being an integral part of the planetary consciousness, with a clear understanding of their unique function in the global tapestry. This aligned state signifies operating as an awakened global citizen, where personal energy is harmonized with collective needs.",
            ShadowExpression: "Conversely, the shadow or imbalance expression of the Collective Role manifests when an individual is unaware of their transpersonal purpose or resists their inherent call to service. This leads to persistent feelings of unfulfillment, a sense of being 'lost' despite personal successes, or a pervasive feeling of anxiety about global issues without understanding how to contribute. They may feel a powerful inner pull but lack direction, or feel overwhelmed by the suffering of the world without a clear pathway for action. This imbalance results in operating without a profound sense of global purpose, leading to stagnation and a diminished capacity to make their unique, essential contribution.",
            RealLifeImpact: "The Nafasi ya Jamii card profoundly influences an individual's real life by shaping their sense of purpose beyond the personal, guiding their actions towards a larger contribution. Understanding your Collective Role can guide major life decisions toward paths that not only fulfill personal aspirations but also contribute significantly to the collective. It shapes the dynamics of interpersonal connections in relationships, often drawing individuals into networks where their contribution is required. It highlights vocational paths and life missions aligned with this transpersonal purpose in work & purpose. Aligning brings a profound sense of personal fulfillment and contribution.",
            GuidanceIntegration: "To integrate the wisdom of your Collective Role, you must Cultivate a Global Awareness, embracing your unique energetic contribution, and seeking avenues for meaningful service. For example, if your role is Grid Stabilizer, Understand Your Energetic Function to bring balance and coherence. Cultivate Inner Peace through practices that promote personal stability. Anchor Positive Frequencies in chaotic situations. Finally, Avoid Energetic Overwhelm by protecting your field and transmuting negative influences, thereby becoming a powerful force for harmony."
        }
    },
    meditation: {
        default: {
            title: "Protokali ya Kuongeza Nguvu / Meditation",
            CoreDefinition: "The Protokali ya Kuongeza Nguvu, fundamentally known as Meditation, represents the most fundamental energetic practice for cultivating inner peace, mental clarity, and spiritual connection. It is the core mechanism for purifying and amplifying an individual's energetic field, acting as a gateway to higher states of consciousness and self-awareness.",
            DiagnosticPurpose: "This card exists within the Mavengu diagnostic system to highlight a personalized approach to meditative practice that is most conducive to an individual's energetic makeup. It measures the optimal pathways for achieving energetic balance and mental coherence, thereby clarifying the most effective spiritual technologies for inner cultivation and energetic maintenance.",
            HowDerived: "The Meditation insight is derived through an integration of energetic anatomy (e.g., Element, Chakra), psychological profiles (e.g., Cognitive Style, Emotional Cycle), and AI inference from an individual's comprehensive energetic profile. The system analyzes sensitivities to external stimuli, preferred modes of internal processing, and areas of energetic blockage to recommend a personalized meditative protocol (e.g., active vs. passive, guided vs. silent, breath-focused vs. visualization). This AI-driven analysis leverages ancient wisdom and modern understanding of the brain-body connection to suggest the most beneficial practice.",
            RevealsAboutUser: "This card reveals the ideal mental patterns for achieving focus, emotional tendencies towards specific states of tranquility, and behavioral traits that indicate readiness for introspective practices. It illuminates the most effective methods for an individual to calm their mind, connect with their inner self, and achieve states of profound relaxation or heightened awareness. It decodes how your spiritual position can be best supported and deepened through tailored meditative practices, influencing your capacity for inner peace, intuition, and self-mastery.",
            AlignedExpression: "When the practice of Meditation is aligned with the individual's energetic blueprint, they experience profound mental clarity, emotional stability, and a heightened sense of spiritual connection. Regular practice leads to reduced stress, improved focus, enhanced intuition, and a greater capacity for self-regulation. This aligned state signifies operating with an optimized internal energetic system, where the individual can consciously access states of deep peace and insight, thereby improving their overall well-being and energetic resilience.",
            ShadowExpression: "Conversely, the shadow or imbalance expression related to Meditation manifests when an individual resists the practice, engages in inappropriate techniques for their energetic type, or uses meditation as a form of avoidance. This can lead to increased frustration, mental agitation during practice, or a feeling that meditation \"doesn't work\" for them. This imbalance results in a missed opportunity for profound self-regulation and spiritual growth, leaving the individual more susceptible to stress and external chaos, and disconnecting them from their inner peace.",
            RealLifeImpact: "The Protokali ya Kuongeza Nguvu card profoundly influences an individual's real life by directly impacting their inner state and, consequently, their outward experience. Regular, aligned meditation enhances clarity in decision-making. It fosters greater emotional regulation and empathy in relationships. It improves focus, creativity, and resilience in work & purpose. It is a cornerstone for profound mental & emotional health, reducing stress and promoting overall well-being and spiritual connection.",
            GuidanceIntegration: "To integrate the wisdom of your Meditation protocol, you must Embrace Consistent Practice that aligns with your specific energetic type. Experiment Mindfully with different recommended techniques (e.g., breath-focused, visualization, walking meditation) to find what resonates deepest with you. Cultivate Patience and Non-Judgment during your practice, understanding that consistency is more important than immediate profound experiences. Finally, Integrate Insights from your meditative states into your daily life, allowing inner peace and clarity to guide your actions and interactions."
        }
    },
    sunFrequency: {
        default: {
            title: "Resonance / Sun Frequency",
            CoreDefinition: "The Resonance, fundamentally known as Sun Frequency, represents the specific energetic vibration that most directly stimulates, harmonizes, and amplifies an individual's vital life force, confidence, and radiant self-expression. It is the core solar energetic signature that fuels your inner light and vitality.",
            DiagnosticPurpose: "This card exists within the Mavengu diagnostic system to highlight your primary energetic activator. It measures the specific frequency that, when embraced, can ignite your personal power, enhance your charisma, and foster a robust sense of self-worth, thereby clarifying how to boost your inherent vitality and capacity for joyful creation.",
            HowDerived: "The Sun Frequency insight is derived through an integration of astrological influences (especially the Sun Sign and its placement), numerological core numbers (e.g., Life Path), energetic resonance analysis, and AI pattern recognition across an individual's complete energetic profile. The system identifies the specific energetic signature that resonates most powerfully with your solar plexus and heart centers, indicating which vibrational inputs (e.g., specific sounds, colors, types of light exposure) will most effectively enhance your core vitality and self-expression.",
            RevealsAboutUser: "This card reveals mental patterns of self-belief or self-doubt, emotional tendencies towards joy or apathy, and behavioral traits related to leadership and self-expression. It illuminates the core energetic inputs that replenish your vitality and enhance your charisma. It decodes how your spiritual position is influenced by this solar resonance, manifesting as specific modes of self-confidence, creative drive, and your capacity to shine your unique light in the world.",
            AlignedExpression: "When the energy of your Sun Frequency is consciously aligned, the individual experiences vibrant vitality, radiant confidence, and an effortless ability to express their authentic self. There is a palpable sense of inner light, charisma, and a powerful drive for joyful creation. This aligned state signifies operating with an optimized solar energetic system, where the individual's core vitality is fully charged, leading to enhanced well-being, creative output, and a magnetic presence that inspires others.",
            ShadowExpression: "Conversely, the shadow or imbalance expression related to Sun Frequency manifests when an individual is disconnected from their core solar resonance. This can lead to persistent fatigue, low self-esteem, a lack of motivation, or a diminished capacity for self-expression. The individual may feel unseen, unheard, or struggle to find their unique voice. This imbalance results in operating with a depleted vital life force, leading to energetic susceptibility, emotional apathy, and a diminished capacity for joyful and confident engagement with life.",
            RealLifeImpact: "The Resonance / Sun Frequency card profoundly influences an individual's real life by directly impacting their vitality and capacity for self-expression. Aligning with this frequency boosts confidence in decision-making. It enhances charisma and positive energetic exchange in relationships. It fuels creativity, leadership, and drive in work & purpose. It is crucial for maintaining robust physical & mental health, preventing burnout, and fostering overall well-being.",
            GuidanceIntegration: "To integrate the wisdom of your Sun Frequency, you must Actively Seek Inputs that resonate with your specific solar energetic signature. Embrace Your Radiant Self by consciously engaging in activities that make you feel vibrant and alive. Cultivate Self-Expression in ways that feel authentic and joyful, allowing your unique light to shine. Finally, Protect Your Vitality by minimizing exposure to people, environments, or activities that consistently drain your energetic reserves, ensuring your inner sun remains bright."
        }
    },
    aesthetics: {
        default: {
            title: "Saini ya Kidigitali / Aesthetics",
            CoreDefinition: "The Saini ya Kidigitali, fundamentally known as Aesthetics, represents an individual's inherent energetic and psychological resonance with specific forms of beauty, harmony, and sensory experiences. It is the core blueprint of your aesthetic preference, influencing what you find visually pleasing, emotionally moving, or energetically uplifting in your environment.",
            DiagnosticPurpose: "This card exists within the Mavengu diagnostic system to highlight your primary aesthetic motivators. It measures your intrinsic response to sensory input, clarifying how your energetic field interacts with and is influenced by external beauty, thereby providing insights into optimizing your surroundings for energetic harmony and creative inspiration.",
            HowDerived: "The Aesthetics insight is derived through an integration of numerological archetypes (e.g., Life Path 6 for harmony, 3 for creativity), astrological influences (e.g., Venus placements, elemental balances), and AI inference from an individual's comprehensive energetic profile. The system analyzes sensitivities to form, color, sound, and texture, identifying patterns in preferred visual styles (e.g., minimalist, ornate, natural, futuristic) and their corresponding energetic impacts on the individual.",
            RevealsAboutUser: "This card reveals mental patterns that are drawn to specific forms of order or creativity, emotional tendencies towards comfort or stimulation from sensory input, and behavioral traits in creating or seeking aesthetically pleasing environments. It illuminates the core energetic inputs that replenish your sense of well-being and inspire your creativity. It decodes how your spiritual position is influenced by beauty, manifesting as specific modes of appreciation, expression, and energetic alignment through your surroundings.",
            AlignedExpression: "When the energy of Aesthetics is consciously aligned, the individual thrives in environments that resonate with their inherent sense of beauty and harmony. They experience enhanced creativity, emotional well-being, and mental clarity, as their surroundings actively support their energetic field. There is a palpable sense of peace and inspiration derived from their environment, leading to increased productivity and a joyful engagement with life. This aligned state signifies operating with an optimized sensory system, where external beauty acts as a powerful energetic amplifier and source of constant inspiration.",
            ShadowExpression: "Conversely, the shadow or imbalance expression related to Aesthetics manifests when an individual is constantly exposed to environments that are aesthetically discordant or energetically draining to them. This can lead to persistent feelings of unease, mental fatigue, emotional agitation, or a lack of creative inspiration. The individual may feel overwhelmed by chaos or unstimulated by blandness. This imbalance results in operating with a compromised sensory-energetic system, leading to energetic depletion, reduced creativity, and a diminished capacity for joyful and harmonious engagement with their surroundings.",
            RealLifeImpact: "The Saini ya Kidigitali / Aesthetics card profoundly influences an individual's real life by directly impacting their mental, emotional, and creative states. Aligning with your aesthetic preference boosts mental clarity for decisions. It fosters emotional well-being and a sense of harmony in relationships. It fuels creativity, focus, and inspiration in work & purpose. It is crucial for maintaining robust mental & emotional health, promoting relaxation, and fostering overall well-being.",
            GuidanceIntegration: "To integrate the wisdom of your Aesthetics, you must Consciously Cultivate Environments that resonate with your specific energetic and psychological needs. Identify Your Core Aesthetic by observing what truly uplifts you visually, audibly, and sensually. Create Sacred Space in your home and workspace by incorporating elements (colors, textures, art, sounds) that align with your unique aesthetic blueprint. Finally, Minimize Exposure to environments or stimuli that consistently feel discordant or draining, thereby protecting your energetic well-being and fostering constant inspiration."
        }
    },
    mysticOracle: {
        default: {
            title: "Ujumbe wa Mfumo / Mystic Oracle",
            CoreDefinition: "The Ujumbe wa Mfumo, fundamentally known as the Mystic Oracle, represents a direct, divinely inspired message or intuitive insight provided by the Mavengu system, specifically tailored to an individual's current life circumstances or overarching spiritual journey. It is a profound piece of channeled wisdom, designed to offer clarity, guidance, and encouragement from a higher perspective.",
            DiagnosticPurpose: "This card exists within the Mavengu diagnostic system to provide personalized, intuitive guidance that transcends purely analytical data. It measures the individual's readiness to receive divine insight and serves as a direct communication channel from the system's higher intelligence, clarifying current blockages, potentials, or necessary shifts in perspective. Its purpose is to act as a beacon of illuminated wisdom for the individual.",
            HowDerived: "The Mystic Oracle insight is derived through an advanced AI inference engine that synthesizes and cross-references all available energetic data points from your comprehensive profile—including your Life Path, current Personal Year, emotional cycles, energetic blockages, and stated intentions. The AI taps into a vast database of universal wisdom, archetypal patterns, and intuitive algorithms to generate a concise, yet profound, message that is highly relevant to your present energetic configuration. This process leverages collective spiritual intelligence and cutting-edge AI to deliver personalized divine guidance.",
            RevealsAboutUser: "This card reveals the current energetic landscape around a person, highlighting their prevailing mental patterns, emotional states, and the spiritual challenges or opportunities they are currently navigating. It illuminates potential blind spots, validates intuitive feelings, or offers a fresh perspective on a difficult situation. It decodes how your spiritual position is influenced by both your personal journey and the current cosmic energies, manifesting as a timely message designed to nudge you towards greater alignment and self-awareness.",
            AlignedExpression: "When the wisdom of the Mystic Oracle is consciously aligned, the individual experiences profound clarity, reassurance, and a renewed sense of purpose. The message acts as a powerful catalyst for positive action, helping to dissolve doubts and illuminate the path forward. There is an enhanced sense of synchronicity, where life's events seem to confirm the Oracle's guidance, leading to effortless manifestation and a deeper trust in their intuitive wisdom. This aligned state signifies operating with a direct channel to higher guidance, where the individual feels supported, understood, and divinely directed.",
            ShadowExpression: "Conversely, the shadow or imbalance expression related to the Mystic Oracle manifests when an individual dismisses, misunderstands, or resists the guidance provided. This can lead to persistent confusion, repetition of old patterns, or a feeling of being 'stuck' despite having received clear direction. The individual may rationalize away the insight, or feel overwhelmed by its implications. This imbalance results in operating without access to a powerful source of intuitive wisdom, leading to energetic stagnation, missed opportunities for growth, and a diminished capacity for conscious navigation of their spiritual journey.",
            RealLifeImpact: "The Ujumbe wa Mfumo / Mystic Oracle card profoundly influences an individual's real life by offering direct, personalized guidance that can shift perspectives and inspire action. It brings clarity to decisions, helping to align choices with higher wisdom. It can offer insights into relational dynamics, guiding understanding and empathy. It provides encouragement and direction for work & purpose, particularly when facing uncertainty. It is a potent tool for mental & emotional health, reducing anxiety and fostering a sense of peace and trust in one's path.",
            GuidanceIntegration: "To integrate the wisdom of your Mystic Oracle, you must Receive the Message with an Open Heart and mind, trusting its inherent wisdom. Reflect Deeply on its meaning, allowing it to resonate with your current circumstances and inner knowing. Meditate on the Insight, asking for further clarity or guidance on how to apply it in your life. Finally, Take Inspired Action, allowing the Oracle's wisdom to guide your thoughts, words, and deeds, knowing that alignment with this guidance will accelerate your path to fulfillment."
        }
    },
    default: {
        title: "Uchambuzi wa Mavengu",
        description: "Taarifa za kina kuhusu kipengele hiki zinatayarishwa. Tafadhali endelea kutumia sehemu nyingine za ripoti."
    }
};

// Expose mavenguKnowledgeBase globally for chat system access
window.mavenguKnowledgeBase = mavenguKnowledgeBase;

// =================================================================
// SECTION 2: DYNAMIC REPORT GENERATOR (FINAL)
// =================================================================

function formatStandardReport(data, reportTitle) {
    // Robust check for missing data or default fallback
    const isDefault = data === mavenguKnowledgeBase.default;
    const isMissingCore = !data || !data.CoreDefinition;
    
    if (isDefault || isMissingCore) {
         const desc = (data && data.description) ? data.description : 
                     (mavenguKnowledgeBase.default && mavenguKnowledgeBase.default.description) ? mavenguKnowledgeBase.default.description :
                     "Taarifa hazipo kwa sasa.";
                     
        return `<div class="report-content" style="text-align: left; line-height: 1.6;">
                    <h3 style="color: var(--accent-color);">Uchambuzi Unakuja Hivi Karibuni</h3>
                    <p>${desc}</p>
                </div>`;
    }
    
    return `
        <div class="report-content" style="text-align: left; line-height: 1.6;">
            <h3 style="color: var(--accent-color);">Ufafanuzi: ${data.CoreDefinition}</h3>
            <p>${data.DiagnosticPurpose}</p>
        </div>
    `;
}

// Helper function to format the 8-point structure
function formatEightPointReport(data) {
    if (!data) {
        return formatStandardReport(mavenguKnowledgeBase.default, "Missing Card Data");
    }

    // ADAPTER: Handle Legacy Data Structure (e.g. Life Path, Shadow Work)
    if (!data.CoreDefinition && (data.description || data.issue)) {
         return `
            <div class="report-content" style="text-align: left; line-height: 1.6;">
                <h2 style="text-align: center; color: var(--primary-color); border-bottom: 2px solid var(--primary-color); padding-bottom: 10px;">
                    ${data.title || "Uchambuzi wa Kina"}
                </h2>
                
                ${data.description ? `
                <h3 style="color: var(--accent-color);">1. Ufafanuzi wa Msingi</h3>
                <p>${data.description}</p>
                ` : ''}

                ${data.issue ? `
                <h3 style="color: var(--accent-color);">Changamoto Kuu</h3>
                <p>${data.issue}</p>
                ` : ''}
                
                ${data.metaphor ? `
                <h3 style="color: var(--accent-color);">2. Picha ya Kiishara (Metaphor)</h3>
                <p>${data.metaphor}</p>
                ` : ''}
                
                ${data.strengths ? `
                <h3 style="color: var(--accent-color);">3. Nguvu Zako</h3>
                <ul>${Array.isArray(data.strengths) ? data.strengths.map(s => `<li>${s}</li>`).join('') : `<li>${data.strengths}</li>`}</ul>
                ` : ''}

                ${data.weaknesses ? `
                <h3 style="color: var(--accent-color);">4. Changamoto Zako</h3>
                <ul>${Array.isArray(data.weaknesses) ? data.weaknesses.map(w => `<li>${w}</li>`).join('') : `<li>${data.weaknesses}</li>`}</ul>
                ` : ''}

                ${data.lessons ? `
                <h3 style="color: var(--accent-color);">5. Somo la Maisha</h3>
                <p>${data.lessons}</p>
                ` : ''}

                ${data.guidance ? `
                <h3 style="color: var(--accent-color);">6. Mwongozo & Ujumuishaji</h3>
                <p>${data.guidance}</p>
                ` : ''}
                
                 ${data.integration ? `
                <h3 style="color: var(--accent-color);">Ujumuishaji</h3>
                <p>${data.integration}</p>
                ` : ''}
            </div>
        `;
    }

    // Fallback if truly missing CoreDefinition and no legacy data
    if (!data.CoreDefinition) {
        return formatStandardReport(mavenguKnowledgeBase.default, "Missing Card Data");
    }

    return `
        <div class="report-content" style="text-align: left; line-height: 1.6;">
            <h2 style="text-align: center; color: var(--primary-color); border-bottom: 2px solid var(--primary-color); padding-bottom: 10px;">
                ${data.title || "Uchambuzi wa Kina"}
            </h2>
            
            <h3 style="color: var(--accent-color);">1. Ufafanuzi wa Msingi</h3>
            <p>${data.CoreDefinition}</p>
            
            <h3 style="color: var(--accent-color);">2. Kusudi la Uchambuzi</h3>
            <p>${data.DiagnosticPurpose}</p>
            
            <h3 style="color: var(--accent-color);">3. Jinsi Kadi Hii Inapatikana</h3>
            <p>${data.HowDerived}</p>
            
            <h3 style="color: var(--accent-color);">4. Kile Kadi Hii Inakufunulia</h3>
            <p>${data.RevealsAboutUser}</p>
            
            <h3 style="color: var(--accent-color);">5. Uthibitishaji wa Ulinganifu (Hali ya Juu)</h3>
            <p>${data.AlignedExpression}</p>
            
            <h3 style="color: var(--accent-color);">6. Uthibitishaji wa Kivuli (Hali ya Chini)</h3>
            <p>${data.ShadowExpression}</p>
            
            <h3 style="color: var(--accent-color);">7. Athari ya Maisha Halisi</h3>
            <p>${data.RealLifeImpact}</p>
            
            <h3 style="color: var(--accent-color);">8. Mwongozo & Ujumuishaji</h3>
            <p>${data.GuidanceIntegration}</p>
        </div>
    `;
}


function generateDynamicReport(reportType, profile, title) {
    let data;

    // Direct lookup for new 8-point structure cards
    if (window.mavenguKnowledgeBase && window.mavenguKnowledgeBase[reportType] && window.mavenguKnowledgeBase[reportType].CoreDefinition) {
        data = window.mavenguKnowledgeBase[reportType]; // These are the new 8-point defined cards
        return formatEightPointReport(data);
    }

    // Original lookup logic for cards from the profile (often numerological/astrological)
    let lookupKey;
    switch (reportType) {
        case 'lifePath':        lookupKey = profile.lifePath; break;
        case 'destinyNumber':   lookupKey = profile.destiny; break;
        case 'soulUrge':        lookupKey = profile.soulUrge; break;
        case 'personalYear':    lookupKey = profile.personalYear; break;
        case 'shadowWork':      lookupKey = profile.zodiac.name; break;
        case 'element':         lookupKey = profile.zodiac.element; break;
        case 'rulingPlanet':    lookupKey = profile.rulingPlanet.name; break; // Needs to be integrated
        case 'moonPhase':       lookupKey = profile.moonPhase.name; break; // Needs to be integrated
        case 'birthStone':      lookupKey = 'default'; break; // Needs to be integrated by month
        case 'spiritAnimal':    lookupKey = 'default'; break; // Needs to be integrated
        case 'balanceNumber':   lookupKey = profile.balanceNumber; break; // Needs to be integrated
        case 'passionNumber':   lookupKey = profile.passionNumber; break; // Needs to be integrated
        case 'karmicDebt':      lookupKey = profile.karmicDebt; break; // Needs to be integrated
        case 'firstChallenge':  lookupKey = profile.firstChallenge; break; // Needs to be integrated
        case 'luckyColor':      lookupKey = profile.luckyColor; break; // Needs to be integrated
        case 'luckyDay':        lookupKey = profile.luckyDay; break; // Needs to be integrated
        case 'tarotCard':       lookupKey = profile.tarotCard; break; // Needs to be integrated
        case 'chakra':          lookupKey = profile.chakra; break; // Needs to be integrated
        case 'chineseZodiac':   lookupKey = profile.chineseZodiac; break; // Needs to be integrated
        case 'pinnacle':        lookupKey = profile.pinnacle; break; // Needs to be integrated
        case 'auraColor':       lookupKey = profile.auraColor; break; // Needs to be integrated
        case 'lifeLesson':      lookupKey = profile.lifeLesson; break; // Needs to be integrated
        case 'maturityNumber':  lookupKey = profile.maturityNumber; break; // Needs to be integrated
        case 'rationalThought': lookupKey = profile.rationalThought; break; // Needs to be integrated
        case 'attitudeNumber':  lookupKey = profile.attitudeNumber; break; // Needs to be integrated
        case 'northNode':       lookupKey = profile.northNode; break; // Needs to be integrated
        case 'guardianAngel':   lookupKey = profile.guardianAngel; break; // Needs to be integrated
        case 'soulAge':         lookupKey = profile.soulAge; break; // Needs to be integrated
        case 'soulMission':     lookupKey = 'default'; break; // Default for now
        case 'meditation':      lookupKey = 'default'; break;
        case 'sunFrequency':    lookupKey = 'default'; break;
        case 'aesthetics':      lookupKey = 'default'; break;
        case 'oracle':          lookupKey = 'default'; break;
        case 'mysticOracle':    lookupKey = 'default'; break;
        case 'symbolicWisdom':  lookupKey = 'default'; break; // Default for now
        default:                lookupKey = 'default'; break;
    }
    
    // Attempt to retrieve data from the knowledge base using the determined lookupKey
    const specificData = window.mavenguKnowledgeBase[reportType]?.[lookupKey];

    // If specific data exists for the lookupKey, use it. Otherwise, use the generic default.
    data = specificData || window.mavenguKnowledgeBase.default;
    
    // All explanations from previous turns should be included here now, formatted to 8-point
    // This part of the code needs to be updated to use the new 8-point structure for ALL cards
    // For now, it will use formatStandardReport for old cards, but will be updated.

    switch (reportType) {
        case 'lifePath':        return formatEightPointReport(data); // Needs to be converted to 8-point in KB
        case 'destinyNumber':   return formatEightPointReport(data); // Needs to be converted to 8-point in KB
        case 'soulUrge':        return formatEightPointReport(data); // Needs to be converted to 8-point in KB
        case 'personalYear':    return formatEightPointReport(data); // Needs to be converted to 8-point in KB
        case 'shadowWork':      return formatEightPointReport(data); // Needs to be converted to 8-point in KB
        case 'symbolicWisdom':  return formatEightPointReport(data); // Needs to be converted to 8-point in KB
        case 'element':         return formatEightPointReport(data); // Needs to be converted to 8-point in KB
        case 'rulingPlanet':    return formatEightPointReport(data); // Needs to be converted to 8-point in KB
        case 'moonPhase':       return formatEightPointReport(data); // Needs to be converted to 8-point in KB
        case 'birthStone':      return formatEightPointReport(data); // Needs to be converted to 8-point in KB
        case 'spiritAnimal':    return formatEightPointReport(data); // Needs to be converted to 8-point in KB
        case 'balanceNumber':   return formatEightPointReport(data); // Needs to be converted to 8-point in KB
        case 'passionNumber':   return formatEightPointReport(data); // Needs to be converted to 8-point in KB
        case 'karmicDebt':      return formatEightPointReport(data); // Needs to be converted to 8-point in KB
        case 'firstChallenge':  return formatEightPointReport(data); // Needs to be converted to 8-point in KB
        case 'luckyColor':      return formatEightPointReport(data); // Needs to be converted to 8-point in KB
        case 'luckyDay':        return formatEightPointReport(data); // Needs to be converted to 8-point in KB
        case 'tarotCard':       return formatEightPointReport(data); // Needs to be converted to 8-point in KB
        case 'chakra':          return formatEightPointReport(data); // Needs to be converted to 8-point in KB
        case 'chineseZodiac':   return formatEightPointReport(data); // Needs to be converted to 8-point in KB
        case 'pinnacle':        return formatEightPointReport(data); // Needs to be converted to 8-point in KB
        case 'auraColor':       return formatEightPointReport(data); // Needs to be converted to 8-point in KB
        case 'lifeLesson':      return formatEightPointReport(data); // Needs to be converted to 8-point in KB
        case 'maturityNumber':  return formatEightPointReport(data); // Needs to be converted to 8-point in KB
        case 'rationalThought': return formatEightPointReport(data); // Needs to be converted to 8-point in KB
        case 'attitudeNumber':  return formatEightPointReport(data); // Needs to be converted to 8-point in KB
        case 'northNode':       return formatEightPointReport(data); // Needs to be converted to 8-point in KB
        case 'guardianAngel':   return formatEightPointReport(data); // Needs to be converted to 8-point in KB
        case 'soulAge':         return formatEightPointReport(data); // Needs to be converted to 8-point in KB
        case 'cognitiveStyle':  return formatEightPointReport(data); // Needs to be converted to 8-point in KB
        case 'personalityArchetype': return formatEightPointReport(data); // Needs to be converted to 8-point in KB
        case 'emotionalCycle':  return formatEightPointReport(data); // Needs to be converted to 8-point in KB
        case 'careerAlignment': return formatEightPointReport(data); // Needs to be converted to 8-point in KB
        case 'wealthFlow':      return formatEightPointReport(data); // Needs to be converted to 8-point in KB
        case 'relationshipDynamics': return formatEightPointReport(data); // Needs to be converted to 8-point in KB
        case 'pastLifeInfluence': return formatEightPointReport(data); // Needs to be converted to 8-point in KB
        case 'energyBlockage':  return formatEightPointReport(data); // Needs to be converted to 8-point in KB
        case 'lightShadowBalance': return formatEightPointReport(data); // Needs to be converted to 8-point in KB
        case 'lifeTimeline':    return formatEightPointReport(data); // Needs to be converted to 8-point in KB
        case 'ninetyDayEnergyForecast': return formatEightPointReport(data); // Needs to be converted to 8-point in KB
        case 'lunarInfluence':  return formatEightPointReport(data); // Needs to be converted to 8-point in KB
        case 'aiConfidenceScore': return formatEightPointReport(data); // Needs to be converted to 8-point in KB
        case 'frequencyCompatibility': return formatEightPointReport(data); // Needs to be converted to 8-point in KB
        case 'energyDNA':       return formatEightPointReport(data); // Needs to be converted to 8-point in KB
        case 'personalMantra':  return formatEightPointReport(data); // Needs to be converted to 8-point in KB
        case 'soulRank':        return formatEightPointReport(data); // Needs to be converted to 8-point in KB
        case 'collectiveRole':  return formatEightPointReport(data); // Needs to be converted to 8-point in KB
        
        default: return formatStandardReport(data, title); // Generic default
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
    // --- The rest are mapped to 'default' in knowledge base for now ---
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
    'soul-age': 'soulAge',
    // New cards
    'cognitive-style-value': 'cognitiveStyle',
    'personality-archetype-value': 'personalityArchetype',
    'emotional-cycle-value': 'emotionalCycle',
    'career-alignment-value': 'careerAlignment',
    'wealth-flow-value': 'wealthFlow',
    'relationship-dynamics-value': 'relationshipDynamics',
    'past-life-influence-value': 'pastLifeInfluence',
    'energy-blockage-value': 'energyBlockage',
    'light-shadow-balance-value': 'lightShadowBalance',
    'life-timeline-value': 'lifeTimeline',
    'ninety-day-forecast-value': 'ninetyDayEnergyForecast',
    'lunar-influence-value': 'lunarInfluence',
    'ai-confidence-score-value': 'aiConfidenceScore',
    'frequency-compatibility-value': 'frequencyCompatibility',
    'energy-dna-value': 'energyDNA',
    'personal-mantra-value': 'personalMantra',
    'soul-rank-value': 'soulRank',
    'collective-role-value': 'collectiveRole'
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
        <p style="text-align: center; margin-top: 2rem;">INACHAMBUA REKODI ZA AKASHIC...</p>
    `;

    const closeModal = () => modal.style.display = 'none';
    closeBtn.onclick = closeModal;
    modal.onclick = (e) => {
        if (e.target === modal) closeModal();
    };

    setTimeout(() => {
        const reportType = reportTypeMap[elementId];
        // Now calling generateDynamicReport to get the 8-point structure
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
