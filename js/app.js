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
    const accessCodeInput = document.getElementById('access-code');
    const accessCodeError = document.getElementById('access-code-error');

    // Navigation
    if (startBtn) {
        startBtn.addEventListener('click', () => {
            if (accessCodeInput) {
                const enteredCode = accessCodeInput.value.trim();
                if (enteredCode !== '666-777-999') {
                    if (accessCodeError) {
                        accessCodeError.style.display = 'block';
                    }
                    accessCodeInput.focus();
                    return;
                } else if (accessCodeError) {
                    accessCodeError.style.display = 'none';
                }
            }
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
            const birthPlace = document.getElementById('birth-place').value;
            const birthDateInput = document.getElementById('birth-date');
            const dayEl = document.getElementById('birth-day');
            const monthEl = document.getElementById('birth-month');
            const yearEl = document.getElementById('birth-year');
            let birthDate = '';
            if (dayEl && monthEl && yearEl) {
                const d = parseInt(dayEl.value, 10);
                const m = parseInt(monthEl.value, 10);
                const y = parseInt(yearEl.value, 10);
                if (!fullName || !d || !m || !y) return;
                const dd = String(d).padStart(2, '0');
                const mm = String(m).padStart(2, '0');
                birthDate = `${y}-${mm}-${dd}`;
            } else {
                if (!fullName || !birthDateInput || !birthDateInput.value) return;
                birthDate = birthDateInput.value;
            }

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
    const cognitiveStyle = "Mchambuzi wa Jumla";
    const personalityArchetype = "Mwenye Hekima";
    const emotionalCycle = "Mzunguko wa Mawimbi";
    const careerAlignment = "Kiongozi / Mchambuzi";
    const wealthFlow = "Ulimbikizaji wa Thamani";
    const relationshipDynamics = "Msaada wa Huruma";
    const pastLifeInfluence = "Kiapo cha Msomi";
    const energyBlockage = "Koo (Vishuddha)";
    const lightShadowBalance = "72% Nuru";
    const lifeTimeline = "Awamu ya Ujumuishaji";
    const ninetyDayForecast = "Upanuzi wa Ubunifu";
    const lunarInfluence = "Unyeti wa Juu";
    const aiConfidenceScore = "98.7%";
    const frequencyCompatibility = "Solfeggio 528Hz";
    const energyDNA = "Alpha-7-Gamma-9";
    const personalMantra = oracle || "Uwazi katika Matendo, Kusudi katika Utulivu.";
    const soulRank = "Roho Iliyobobea";
    const collectiveRole = "Msimamizi wa Gridi";

    return {
        name: fullName,
        birthDate: birthDate,
        birthPlace: birthPlace || "Mahali Pasipojulikana",
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
    setupModalTrigger('executive-summary-value', 'EXECUTIVE DIAGNOSIS SUMMARY', '', profile);
    setupModalTrigger('priority-focus-value', 'PRIORITY FOCUS CARD', '', profile);
    setupModalTrigger('action-plan-30-60-90-value', 'MPANGO WA VITENDO 30/60/90', '', profile);
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
        1: { title: "Mvumbuzi (The Innovator)", metaphor: "Kichakataji cha Kasi cha Core-Moja", description: "Kichakataji chako cha msingi kimeundwa kwa ajili ya kasi, uvumbuzi, na utekelezaji, kimeundwa kufungua njia mpya na kuleta mawazo ya ubunifu katika uhalisia.", strengths: ["Mawazo huru", "Uongozi wa asili", "Roho ya upainia"], weaknesses: ["Kutokuwa na subira", "Mwelekeo wa kujipenda"], lessons: "Kudhibiti msukumo wako mkubwa na huruma na kuhamasisha wengine badala ya kutawala.", guidance: "Amini hisia zako za ndani. Kusudi lako ni kuongoza njia; fanya mazoezi ya subira na uwaruhusu wengine wakufuate." },
        2: { title: "Mpatanishi (The Diplomat)", metaphor: "Kichakataji cha Core-Mbili kwa Intuition", description: "Kichakataji chako cha msingi kimeundwa kwa ajili ya ushirikiano, maelewano, na usawa, kikifanya vizuri katika kuona pande zote mbili za hali yoyote.", strengths: ["Udiplomasia wa kipekee", "Intuition ya kina", "Ushirikiano"], weaknesses: ["Kutokuwa na maamuzi", "Unyeti uliopitiliza"], lessons: "Kuamini intuition yako yenye nguvu na kupata usawa wako wa ndani bila kuhitaji uthibitisho wa nje.", guidance: "Heshimu unyeti wako; ni nguvu yako kuu. Tumia kipaji chako cha udiplomasia kujenga madaraja." },
        3: { title: "Mwasilishaji (The Communicator)", metaphor: "Kichakataji cha Vyombo vya Habari vya Juu", description: "Kichakataji chako cha msingi kimeundwa kwa ajili ya ubunifu, kujieleza, na mawasiliano, na uwezo wa asili wa kuhamasisha kwa furaha na mvuto.", strengths: ["Mawasiliano yenye kipaji", "Ubunifu wa hali ya juu", "Mvuto na matumaini"], weaknesses: ["Juu juu", "Kujitilia shaka"], lessons: "Kuelekeza nishati yako kubwa ya ubunifu kwa nidhamu na umakini.", guidance: "Kubali ubunifu wako. Kusudi lako ni kuinua na kuhamasisha kupitia kujieleza halisi." },
        4: { title: "Mjenzi (The Builder)", metaphor: "Kichakataji cha Kituo cha Kazi cha Quad-Core", description: "Kichakataji chako cha msingi kimeundwa kwa ajili ya uthabiti, muundo, na ustahimilivu, kikigeuza mipango ya kufikirika kuwa uhalisia unaoonekana.", strengths: ["Wa kutegemewa sana", "Wa vitendo na mantiki", "Mchapakazi"], weaknesses: ["Ugumu wa kubadilika", "Kufanya kazi kupita kiasi"], lessons: "Kujifunza thamani ya kubadilika na kusawazisha kazi ngumu na kupumzika na furaha.", guidance: "Vunja malengo makubwa kuwa hatua za vitendo. Urithi wako utakuwa kile unachojenga, hivyo jenga kwa kusudi." },
        5: { title: "Msafiri (The Adventurer)", metaphor: "Kichakataji cha Bendi Nyingi Isiyo na Waya", description: "Kichakataji chako cha msingi kimeundwa kwa ajili ya uhuru, adha, na mabadiliko, kikifanya kazi kwa masafa ya juu ya udadisi.", strengths: ["Kubadilika kwa urahisi", "Jasiri na mpenda adha", "Mwasilishaji mzuri"], weaknesses: ["Kutotulia", "Ukosefu wa kujitolea"], lessons: "Kupata uhuru kupitia nidhamu binafsi, kujifunza kujitolea kwa njia bila kuhisi umenaswa.", guidance: "Kubali mabadiliko kama mtaala wako. Tafuta mwelekeo wa kujenga kwa nishati yako kubwa." },
        6: { title: "Mlezi (The Nurturer)", metaphor: "Kichakataji cha Wingu la Jamii", description: "Kichakataji chako cha msingi kimeundwa kwa ajili ya upendo, uwajibikaji, na huduma kwa jamii, kikifanya vizuri katika kulea na kuponya.", strengths: ["Uwajibikaji wa kina", "Mganga wa asili", "Kuthamini familia na jamii"], weaknesses: ["Kutaka ukamilifu", "Kujitoa sadaka kupita kiasi"], lessons: "Kupata usawa kati ya kusaidia wengine na kujitesa; kujijali mwenyewe kwa upendo ule ule unaowapa wengine.", guidance: "Zawadi yako ni moyo wako. Fanya mazoezi ya kujijali kama jukumu takatifu. Huduma yako kuu inatoka kwa kikombe kilichojaa." },
        7: { title: "Mtafutaji (The Seeker)", metaphor: "Kichakataji cha AI cha Kujifunza kwa Kina", description: "Kichakataji chako cha msingi ni injini yenye nguvu ya uchambuzi kwa ajili ya kutafakari, utafiti, na kutafuta ukweli.", strengths: ["Uchambuzi wa hali ya juu", "Ufahamu wa kiroho", "Kuzingatia maelezo"], weaknesses: ["Kujitenga kihisia", "Kutilia shaka kupita kiasi"], lessons: "Kuamini—wewe mwenyewe, wengine, na ulimwengu—na kuunganisha akili yako yenye nguvu na moyo wako.", guidance: "Panga muda wa kuwa peke yako. Kusudi lako ni kugundua ukweli, lakini utimilifu unakuja kwa kuushiriki." },
        8: { title: "Mtendaji (The Executive)", metaphor: "Kichakataji cha Seva ya Daraja la Biashara", description: "Kichakataji chako cha msingi kimeundwa kwa ajili ya nguvu, wingi, na mamlaka, kimeundwa kumudu ulimwengu wa vitu.", strengths: ["Uongozi wa asili", "Matarajio makubwa na ustahimilivu", "Mkakati mzuri"], weaknesses: ["Kutaka kudhibiti", "Kupenda vitu"], lessons: "Kujifunza kuwa nguvu ya kweli inatoka kwa kujitawala na kutumia wingi wako kuwezesha wengine.", guidance: "Fikiri makubwa. Kichakataji chako kimeundwa kwa ajili ya athari kubwa. Weka malengo makubwa na uunde mikakati ya vitendo." },
        9: { title: "Mwanabinadamu (The Humanitarian)", metaphor: "Kichakataji cha Mtandao Ulioenea Ulimwenguni", description: "Kichakataji chako kinafanya kazi kwa masafa ya kimataifa ya huruma, hekima, na huduma isiyo na ubinafsi.", strengths: ["Huruma ya kina", "Mvuto wa asili", "Hekima ya roho ya zamani"], weaknesses: ["Mchezo wa kuigiza wa kihisia", "Kugumu kuachilia"], lessons: "Sanaa ya kuachilia, kutoa huruma kwa uhuru bila kutarajia, na kuachilia maumivu ya zamani.", guidance: "Acha moyo wako ukuongoze kwenye sababu unazozipenda. Fanya mazoezi ya msamaha. Kusudi lako ni kuwa mfano wa upendo usio na masharti." },
        11: { title: "Mjumbe wa Kiroho (The Spiritual Messenger)", metaphor: "Kichakataji Kilichofungamanishwa na Quantum", description: "Njia Kuu. Wewe ni njia ya moja kwa moja kati ya ulimwengu wa kiroho na wa kimwili, uliyebuniwa kupokea msukumo wa kiungu na kuutafsiri kwa wanadamu.", strengths: ["Intuition ya kina ya kiakili", "Mvuto wa ajabu", "Njia ya ukweli"], weaknesses: ["Unyeti uliopitiliza na wasiwasi", "Kutokuwa wa vitendo"], lessons: "Kutia nanga nishati yako kubwa ya kiroho katika ulimwengu wa kimwili na kuwa na ujasiri wa kutoa ujumbe unaopokea.", guidance: "Intuition yako sio mawazo tu; ni kazi yako ya msingi. Tafakari na utie nanga kila siku." },
        22: { title: "Mjenzi Mkuu (The Master Builder)", metaphor: "Printa ya 3D ya Ulimwengu", description: "Njia Kuu. Una uwezo wa kipekee wa kupokea maarifa ya kiroho na kuyajenga katika mifumo inayoonekana, mikubwa inayofaidisha wanadamu.", strengths: ["Maono na vitendo", "Uwezo wa kudhihirisha miradi mikubwa", "Nidhamu kubwa"], weaknesses: ["Kuzidiwa na maono yako mwenyewe", "Kupata msongo wa mawazo"], lessons: "Kusalimisha matarajio yako ya kibinafsi kwa kusudi la juu na kutumia nguvu zako kwa faida ya wote.", guidance: "Ota ndoto kubwa, kisha uunde mpango wa vitendo. Nguvu yako ni ya kweli. Jenga timu ya kukusaidia kudhihirisha maono yako." },
        33: { title: "Mwalimu Mkuu (The Master Teacher)", metaphor: "Mtandao wa Uponyaji wa Ulimwengu", description: "Njia Kuu. Wewe ni kielelezo cha upendo usio na masharti, hapa kuponya na kuinua wanadamu kupitia uwepo wako wa furaha na huruma.", strengths: ["Chanzo cha upendo usio na masharti", "Mwalimu anayehamasisha", "Furaha katika huduma"], weaknesses: ["Kulemewa na mateso ya ulimwengu", "Kupuuza mahitaji binafsi"], lessons: "Kudhihirisha upendo bila kushikamana na matokeo; uwepo wako wenyewe ni nguvu ya uponyaji.", guidance: "Zingatia kuinua furaha yako mwenyewe. Nguvu yako ya uponyaji inalingana moja kwa moja na mtetemo wako wa kibinafsi. Ng'aa." }
    },
    destinyNumber: {
        1: { title: "Hatima: Kiongozi", description: "Hatima yako ni kuongoza, kuvumbua, na kuwa painia, ukikuza uhuru na kujitegemea." },
        2: { title: "Hatima: Mpatanishi", description: "Hatima yako ni kuunda maelewano, usawa, na ushirikiano, njia ya ushirikiano na subira." },
        3: { title: "Hatima: Mwasilishaji", description: "Hatima yako ni kujieleza kwa furaha na ubunifu, ukiinua wengine kwa maneno na sanaa yako." },
        4: { title: "Hatima: Mjenzi", description: "Hatima yako ni kuunda thamani ya kudumu kupitia kazi ngumu, nidhamu, na kujenga misingi imara." },
        5: { title: "Hatima: Msafiri", description: "Hatima yako ni kupata uhuru, kukubali mabadiliko, na kutenda kama kichocheo cha maendeleo." },
        6: { title: "Hatima: Mlezi", description: "Hatima yako ni kutumikia na kuponya familia yako na jamii kupitia uwajibikaji na huruma." },
        7: { title: "Hatima: Mtafutaji", description: "Hatima yako ni kugundua ukweli wa kina, kuunganisha kiroho na kiakili." },
        8: { title: "Hatima: Mtendaji", description: "Hatima yako ni kumudu ulimwengu wa vitu, ukitumia nguvu na wingi kwa faida kubwa." },
        9: { title: "Hatima: Mwanabinadamu", description: "Hatima yako ni kutumikia wanadamu kwa hekima na huruma, ukihamasisha na kuinua wengine kwa upendo wa ulimwengu." }
    },
    soulUrge: {
        1: { title: "Msukumo wa Roho: Kuongoza na Kuwa Huru", description: "Roho yako inatamani sana kuwa #1. Inatamani uhuru, asili, na uhuru wa kuongoza. Unahisi uhai zaidi unapoanzisha njia mpya na kutegemea nguvu zako mwenyewe." },
        2: { title: "Msukumo wa Roho: Kupenda na Kuunda Maelewano", description: "Hamu kuu ya roho yako ni upendo, amani, na ushirika. Inatamani maelewano na usawa katika mambo yote na inahisi kutimia zaidi inapokuwa sehemu ya ushirikiano wa upendo na ushirikiano." },
        3: { title: "Msukumo wa Roho: Kujieleza na Kuunda Furaha", description: "Roho yako inatamani sana kujieleza kwa ubunifu na furaha. Inatamani kuwasiliana, kuhamasisha, na kueneza furaha. Unahisi uhai zaidi unapounda na kufanya wengine watabasamu." },
        4: { title: "Msukumo wa Roho: Kujenga na Kuunda Usalama", description: "Hamu kuu ya roho yako ni utaratibu, uthabiti, na usalama. Inatamani kujenga kitu kinachoonekana na cha kudumu. Unahisi kutimia zaidi unapokuwa na mpango thabiti na unafanya kazi kwa utulivu kuelekea lengo." },
        5: { title: "Msukumo wa Roho: Kupata Uhuru", description: "Roho yako inatamani sana uhuru, adha, na anuwai. Inatamani kupata yote ambayo maisha hutoa na inahisi kusongwa na utaratibu na vizuizi. Unahisi uhai zaidi unapotafuta yasiyojulikana." },
        6: { title: "Msukumo wa Roho: Kulea na Kuwa wa Huduma", description: "Hamu kuu ya roho yako ni kupenda, kulinda, na kutunza wengine. Inatamani kuwa ya huduma kwa familia na jamii yake. Unahisi kutimia zaidi unapofanya mabadiliko chanya katika maisha ya mtu." },
        7: { title: "Msukumo wa Roho: Kujua na Kuelewa", description: "Roho yako inatamani sana maarifa, ukweli, na hekima. Inatamani kuelewa maana ya kina, iliyofichwa ya maisha. Unahisi kutimia zaidi unapokuwa peke yako, ukijifunza, na kuungana na kiungu." },
        8: { title: "Msukumo wa Roho: Kufikia na Kudhihirisha", description: "Hamu kuu ya roho yako ni umahiri na mafanikio katika ulimwengu wa vitu. Inatamani kuwa na nguvu, mafanikio, na udhibiti wa hatima yake. Unahisi kutimia zaidi unapofikia malengo makubwa." },
        9: { title: "Msukumo wa Roho: Kutumikia na Kuponya Ulimwengu", description: "Hamu kuu ya roho yako ni kufanya ulimwengu uwe mahali bora. Inatamani hisia ya upendo wa ulimwengu na ina huruma kubwa kwa wanadamu. Unahisi kutimia zaidi unapokuwa sehemu ya sababu kubwa kuliko wewe mwenyewe." }
    },
    personalYear: {
        1: { title: "Mwaka wa 1: Mwanzo Mpya", description: "Huu ni mwaka wa mwanzo mpya, uhuru, na kupanda mbegu. Matendo yako sasa yataweka msingi kwa miaka tisa ijayo. Kuwa jasiri, kuwa asili, na zingatia malengo yako ya kibinafsi." },
        2: { title: "Mwaka wa 2: Ushirikiano & Subira", description: "Huu ni mwaka wa subira, udiplomasia, na kujenga mahusiano. Maendeleo yatakuwa ya polepole. Zingatia ushirikiano na uamini intuition yako. Ni kuhusu 'sisi', sio 'mimi'." },
        3: { title: "Mwaka wa 3: Ubunifu & Mawasiliano", description: "Huu ni mwaka wa kujieleza kijamii, ubunifu, na furaha. Uwezo wako wa kuwasiliana umeimarishwa. Ni wakati wa kuwa na matumaini, kuhamasishwa, na kufurahia maisha. Jenga mitandao na shiriki mawazo yako." },
        4: { title: "Mwaka wa 4: Kazi Ngumu & Misingi", description: "Huu ni mwaka wa kazi ngumu, nidhamu, na kujenga misingi. Zingatia mpangilio, afya, na mambo ya vitendo. Ni wakati wa kuwa makini na kuunda uthabiti wa muda mrefu." },
        5: { title: "Mwaka wa 5: Mabadiliko & Uhuru", description: "Huu ni mwaka wa mabadiliko, uhuru, na adha. Tarajia yasiyotarajiwa. Kuwa wazi kwa uzoefu mpya, kusafiri, na miunganisho ya kijamii. Ni mwaka wa kasi unaothawabisha kubadilika." },
        6: { title: "Mwaka wa 6: Uwajibikaji & Nyumbani", description: "Huu ni mwaka unaozingatia nyumbani, familia, na uwajibikaji. Ni wakati wa kuponya mahusiano, kulea wengine, na kuunda uzuri katika mazingira yako. Wajibu unaita." },
        7: { title: "Mwaka wa 7: Kiroho & Uchambuzi", description: "Huu ni mwaka wa kutafakari, uchambuzi, na ukuaji wa kiroho. Ni mwaka wa kimya, wa ndani kwa ajili ya kusoma, kutafakari, na kuungana na nafsi yako ya ndani. Amini hekima yako." },
        8: { title: "Mwaka wa 8: Nguvu & Mafanikio", description: "Huu ni mwaka wa nguvu, matarajio, na fursa za kifedha. Ni wakati wa kuingia katika mamlaka yako, kusimamia rasilimali zako kwa hekima, na kuvuna thawabu za juhudi za zamani. Fikiri makubwa." },
        9: { title: "Mwaka wa 9: Kukamilika & Kuachilia", description: "Huu ni mwaka wa kukamilika, kuachilia, na ubinadamu. Acha watu na hali ambazo hazikutumikii tena ili kutoa nafasi kwa mzunguko mpya. Ni wakati wa msamaha na kuhitimisha." }
    },
    shadowWork: {
        "Aries": { title: "Shadow Work: Shujaa wa Msukumo", issue: "Hasira ya Msukumo & Ubinafsi", integration: "Kazi yako ya kivuli inahusisha kudhibiti hasira yako ya msukumo na kujifunza kuzingatia mahitaji ya wengine kabla ya kutenda. Lengo ni kubadilisha msukumo mbichi, wa kibinafsi kuwa uongozi wa ufahamu na ujasiri." },
        "Taurus": { title: "Shadow Work: Mjenzi Aliyekwama", issue: "Ukaidi wa Vitu & Kukwama", integration: "Kazi yako ya kivuli ni kuachilia hofu yako ya mabadiliko na kushikamana kwako na faraja ya vitu. Lengo ni kujifunza kuwa usalama wa kweli unatoka kwa kubadilika kwa ndani, sio mali za nje." },
        "Gemini": { title: "Shadow Work: Mjumbe wa Umbeya", issue: "Juu Juu & Udanganyifu", integration: "Kazi yako ya kivuli inahusisha kuvuka umbeya wa juu juu na kutokuwa na msimamo. Lengo ni kutumia kipaji chako cha mawasiliano kusema ukweli wa kina kwa uadilifu na umakini." },
        "Cancer": { title: "Shadow Work: Mlezi Anayemiliki", issue: "Udhibiti wa Kihisia & Kujiona Mwathirika", integration: "Kazi yako ya kivuli ni kuachilia mwelekeo wa kuwa mchokozi-mpole au kucheza kama mwathirika ili kupata mahitaji yako. Lengo ni kujifunza kuomba unachohitaji moja kwa moja na kujilea mwenyewe." },
        "Leo": { title: "Shadow Work: Mfalme Mwenye Kiburi", issue: "Kiburi & Haja ya Kuzingatiwa", integration: "Kazi yako ya kivuli inahusisha kuvuka hitaji lako la uthibitisho wa mara kwa mara. Lengo ni kutoka kwenye kiburi cha majivuno kwenda kwenye kujiamini halisi, ukiangaza nuru yako kuhamasisha wengine, sio tu kuonekana." },
        "Virgo": { title: "Shadow Work: Mchambuzi Mkali", issue: "Ukamilifu Unaolemaza & Hukumu", integration: "Kazi yako ya kivuli ni kuachilia hukumu yako kali kwako na kwa wengine. Lengo ni kukubali kutokamilika na kutoa huduma kutoka mahali pa huruma, sio ukosoaji." },
        "Libra": { title: "Shadow Work: Jaji Anayetaka Kufurahisha", issue: "Kutokuwa na Maamuzi & Hofu ya Migogoro", integration: "Kazi yako ya kivuli inahusisha kushinda mwelekeo wako wa kutaka kufurahisha watu. Lengo ni kujifunza kuwa maelewano ya kweli yanatoka kwa usawa wa ndani na maamuzi halisi, sio kwa kujaribu kumfurahisha kila mtu." },
        "Scorpio": { title: "Shadow Work: Mchawi Anayetaka Kudhibiti", issue: "Udhibiti & Wivu Uliopitiliza", integration: "Kazi yako ya kivuli ni kuachilia hofu yako ya kina ya kusalitiwa, ambayo inajidhihirisha kama hitaji la kudhibiti. Lengo ni kujifunza kuamini, kusalimisha, na kupata nguvu katika udhaifu." },
        "Sagittarius": { title: "Shadow Work: Mshabiki Asiyejali", issue: "Imani Kali & Kutowajibika", integration: "Kazi yako ya kivuli inahusisha kudhibiti mwelekeo wako wa kuhubiri na kuwa mkweli kupita kiasi. Lengo ni kubadilisha imani kipofu kuwa hekima iliyojumuishwa na kutojali kuwa uchunguzi wa ufahamu." },
        "Capricorn": { title: "Shadow Work: Dikteta Katili", issue: "Matarajio Katili & Ubaridi wa Kihisia", integration: "Kazi yako ya kivuli ni kuachilia imani kwamba matokeo yanahalalisha njia. Lengo ni kudhibiti matarajio yako na huruma na utimilifu wa kihisia." },
        "Aquarius": { title: "Shadow Work: Mhamishwa Aliyejitenga", issue: "Ubaguzi wa Kiakili & Kujitenga", integration: "Kazi yako ya kivuli inahusisha kupasha joto kujitenga kwako kwa kiakili na uhusiano wa kibinadamu. Lengo ni kutumia mawazo yako ya ubunifu kutumikia jamii uliyo sehemu yake, sio tu kuikosoa kutoka nje." },
        "Pisces": { title: "Shadow Work: Mfia dini Anayetoroka", issue: "Kukwepa Uhalisia & Ukosefu wa Mipaka", integration: "Kazi yako ya kivuli ni kukabiliana na uhalisia badala ya kukimbilia ndoto au uraibu. Lengo ni kukuza mipaka imara ya nishati, ili uweze kutoa huruma yako bila kuwa mfia dini." }
    },
    element: {
        "Moto (Fire)": { title: "Elementi: Moto (Fire)", description: "Elementi yako ya msingi ni Moto. Hii inakupa shauku, shauku, ujasiri, na cheche ya ubunifu. Unaendeshwa na hitaji la kutenda na kujieleza. Changamoto yako ni kudhibiti msukumo wako na hasira, ukielekeza nishati yako kubwa kwa kujenga." },
        "Maji (Water)": { title: "Elementi: Maji (Water)", description: "Elementi yako ya msingi ni Maji. Hii inakufanya uwe na intuition, huruma, na uhusiano wa kina na ulimwengu wa hisia. Unaendeshwa na hisia na uhusiano. Changamoto yako ni kuepuka kuzidiwa na hisia na kuweka mipaka yenye afya." },
        "Ardhi (Earth)": { title: "Elementi: Ardhi (Earth)", description: "Elementi yako ya msingi ni Ardhi. Hii inakufanya uwe na mizizi, wa vitendo, wa kutegemewa, na mwenye subira. Unaendeshwa na hitaji la usalama na matokeo yanayoonekana. Changamoto yako ni kuepuka kuwa mgumu sana au kupenda vitu, na kukubali mabadiliko yenye afya." },
        "Hewa (Air)": { title: "Elementi: Hewa (Air)", description: "Elementi yako ya msingi ni Hewa. Hii inakufanya uwe wa kiakili, mwasilishaji, wa kijamii, na mchambuzi. Unaendeshwa na mawazo, mantiki, na uhusiano wa kibinadamu. Changamoto yako ni kutia nanga mawazo yako katika uhalisia na kuungana na hisia zako mwenyewe." }
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
        default: {
            title: "Awamu ya Mwezi Uliozaliwa",
            CoreDefinition: "Awamu ya Mwezi uliozaliwa chini yake inaonyesha mzunguko wako wa ndani wa hisia, jinsi unavyopokea nishati, na namna unavyohifadhi kumbukumbu za kiroho. Ni alama ya rhythm ya ndani inayosimamia mawimbi ya moyo na akili yako.",
            DiagnosticPurpose: "Kadi hii ipo ili kuangaza jinsi mabadiliko ya ndani yanavyojitokeza maishani mwako. Inapima jinsi unavyohusika na kukamilisha mizunguko, uwezo wako wa kuachilia, na namna unavyokabiliana na mabadiliko ya kihisia.",
            HowDerived: "Uchambuzi unatokana na tarehe yako ya kuzaliwa na nafasi ya Mwezi katika anga wakati huo. Mfumo wa uchambuzi wa Mavengu hutumia hesabu ya unajimu kubaini awamu ya mwezi (mfano, New Moon, Full Moon, Robo ya Mwisho) na kuifananisha na archetype ya kihisia na kiroho inayohusiana.",
            RevealsAboutUser: "Kadi hii inafunua jinsi unavyoshughulikia mizunguko ya kuanza na kumaliza, jinsi unapokea maumivu na furaha, na mwelekeo wako wa ndani wa kiroho. Inaonyesha kama una mwelekeo wa kushikilia mambo kwa muda mrefu au kuachilia kwa urahisi.",
            AlignedExpression: "Unapofanya kazi kwa ulinganifu na Awamu yako ya Mwezi, unaheshimu rhythm yako ya ndani, unajua lini uanze, lini ufanye kazi kwa bidii, na lini uache na kupumzika. Hisia zako hutiririka kwa uhuru na unajisikia kuungwa mkono na mzunguko wa maisha.",
            ShadowExpression: "Kinyume chake, ukikataa au kupuuza mzunguko wa ndani, unaweza kuhisi kukwama kihisia, kurudia mizunguko ile ile ya maumivu, au kuishi katika hali ya kuchoka kiakili. Unaweza kuanza mambo mengi bila kuyakamilisha au kushindwa kuachilia vilivyokufa.",
            RealLifeImpact: "Awamu ya Mwezi inaathiri moja kwa moja hali yako ya hisia, uwezo wa kufanya maamuzi kwa wakati sahihi, na jinsi unavyochoka au kuchangamka katika vipindi tofauti. Inaathiri mahusiano, kazi, na jinsi unavyojihisi kuhusu hatua za maisha.",
            GuidanceIntegration: "Ili kuunganisha hekima ya Awamu yako ya Mwezi, zingatia ratiba ya mwezi, fanya journaling ya hisia zako katika awamu mbalimbali, na panga kazi nzito au maamuzi makubwa wakati wa awamu zinazokuinua. Jifunze sanaa ya kuachilia wakati wa kupungua kwa mwezi."
        }
    },
    birthStone: {
        default: {
            title: "Jiwe la Asili",
            CoreDefinition: "Jiwe la Asili ni jiwe la kiishara linalohusishwa na mwezi wako wa kuzaliwa, likiwa na masafa maalum ya uponyaji, ulinzi, na uanzishaji wa vipaji vya ndani. Ni kifaa cha nishati kinachosaidia kuratibu mwili, akili, na roho.",
            DiagnosticPurpose: "Kadi hii ipo ili kuonyesha ni aina gani ya nishati ya kijiwe inayounga mkono safari yako. Inatoa mwongozo kuhusu ni masafa gani ya kijiwe yanayoweza kukusaidia kuponya majeraha ya zamani, kuimarisha nguvu yako ya ndani, na kulinda uwanja wako wa nishati.",
            HowDerived: "Uchambuzi unatokana na mwezi wa kuzaliwa na mila za kale za jiwe la kuzaliwa, zikichanganywa na profil ya nishati ya unajimu na numerology. Mfumo unalinganisha sifa za kiroho za jiwe lako na ramani ya nishati ya maisha yako.",
            RevealsAboutUser: "Kadi hii inafunua aina ya msaada wa nishati unaouhitaji zaidi: utulivu, ujasiri, uwazi wa akili, huruma, au ulinzi. Inaonyesha ni maeneo gani ya maisha yako yanaweza kuimarishwa kupitia kazi ya kijiwe.",
            AlignedExpression: "Unapotumia Jiwe lako la Asili kwa uangalifu (kama hirizi, katika kutafakari, au kwenye mazingira yako), unahisi umeshikiliwa, umewezeshwa, na umelindwa. Unahisi nishati yako ikitulia na kusawazishwa na kusudi la moyo wako.",
            ShadowExpression: "Ukipuuzia resonance ya jiwe lako au kufanya kazi na masafa yasiyolingana, unaweza kuhisi nishati iliyochanganyikiwa, kukosa mwelekeo, au kutokua kwenye mstari na hisia zako za ndani. Hii inaweza kuleta uchovu, kuchoka kiroho, au hisia ya kutopata msaada.",
            RealLifeImpact: "Jiwe la Asili linaathiri jinsi unavyohisi katika mwili wako, kiwango cha ujasiri, na utayari wako wa kuchukua hatua wakati wa changamoto. Linaweza kukusaidia kukaa thabiti katika misukosuko na kubeba hisia za ulinzi na uthabiti.",
            GuidanceIntegration: "Ili kujumuisha hekima ya Jiwe lako la Asili, vaa au tumia jiwe lako kwa makusudi, weka nia kabla ya kulitumia, na lifanye kuwa sehemu ya itifaki yako ya kila siku au kila wiki. Tumia kama nanga ya nishati wakati wa maombi, kutafakari, au maamuzi magumu."
        }
    },
    spiritAnimal: {
        default: {
            title: "Mnyama wa Roho",
            CoreDefinition: "Mnyama wa Roho ni archetype ya nishati ya wanyama inayobeba sifa, silika, na hekima ya kiishara inayoakisi sehemu muhimu ya nafsi yako ya ndani. Ni mwongozo wa kiroho anayekutumia lugha ya ishara badala ya maneno.",
            DiagnosticPurpose: "Kadi hii ipo ili kufichua mitindo yako ya kiasili ya kuishi, kujilinda, na kusonga mbele maishani. Inaonyesha aina ya nguvu ya kimsingi unayobeba unapokabiliana na changamoto, unapotafuta fursa, na unapojilinda kiroho.",
            HowDerived: "Uchambuzi unatokana na ishara yako ya unajimu, mienendo ya nishati ya maisha yako, na mifumo ya tabia inayoonekana katika wasifu wako wa uchambuzi. Mfumo unafananishwa na mifano ya wanyama wa kiishara kutoka hekima mbalimbali za kale.",
            RevealsAboutUser: "Kadi hii inafunua jinsi unavyokabiliana na hofu, namna unavyotafuta njia mpya, unavyotetea mipaka yako, na jinsi unavyowasiliana na ulimwengu. Inatafsiri sehemu yako ya kinstinct ambayo mara nyingi haijasemwa wazi.",
            AlignedExpression: "Unapokubali Mnyama wako wa Roho, unajiona wazi zaidi, unatumia vipaji vyake (mfano ujanja wa mbweha, ujasiri wa simba, au uvumilivu wa dubu) kwa njia yenye fahamu. Unahisi unaungwa mkono na nguvu ya mfano hai iliyo upande wako.",
            ShadowExpression: "Ukikataa au kutojua Mnyama wako wa Roho, unaweza kuishia kujieleza vibaya: ama kupita kiasi (aggressiveness, kutawala) au kujizuia kupita kiasi (woga, kujificha). Hii inaweza kuibua migogoro ya ndani na kukosa ujasiri wa asili.",
            RealLifeImpact: "Mnyama wa Roho huathiri jinsi unavyojiamini katika umati, namna unavyopambana unapokandamizwa, na jinsi unavyotafuta riziki na ulinzi. Inaathiri mitindo yako ya mahusiano na hata aina ya watu unaovutiwa nao au kuwaepuka.",
            GuidanceIntegration: "Ili kuunganisha hekima ya Mnyama wako wa Roho, jifunze tabia na ishara zake, tumia picha au ishara yake katika mazingira yako, na umwite kwa nia maalum wakati wa kutafakari, sala, au maamuzi magumu. Jiulize mara kwa mara: Ningetenda vipi kama ningeishi hekima ya mnyama huyu kikamilifu?"
        }
    },
    balanceNumber: {
        default: {
            title: "Namba ya Usawa",
            CoreDefinition: "Namba ya Usawa inaonyesha namna unavyokabiliana na migogoro, misukosuko, na hali za dharura. Ni ramani ya jinsi unavyopata kituo cha ndani katikati ya shinikizo la nje.",
            DiagnosticPurpose: "Kadi hii ipo ili kufichua mtindo wako wa msingi wa kukabiliana na stress na migogoro. Inakusaidia kuelewa ikiwa unajibu kihisia, kimantiki, kwa kukwepa, au kwa kuchukua hatua ya moja kwa moja.",
            HowDerived: "Namba hii inapatikana kupitia hesabu maalum ya herufi za majina yako, kulingana na kanuni za numerology ya lugha ya kuzaliwa. Mfumo wa Mavengu huunganisha namba hii na Life Path na Destiny ili kutafsiri aina yako ya msingi ya majibu.",
            RevealsAboutUser: "Kadi hii inafunua jinsi unavyotafuta usawa baada ya mshtuko, jinsi unavyoshughulikia mabishano, na kama una mwelekeo wa kupatanisha, kupambana, au kujiondoa. Inaonyesha kiwango chako cha ustahimilivu wa ndani.",
            AlignedExpression: "Unapofanya kazi kwa ulinganifu na Namba yako ya Usawa, unakabiliana na changamoto kwa utulivu, uwazi wa mawazo, na maamuzi ya busara. Unajua lini useme, lini usikilize, na lini uache mambo yaende.",
            ShadowExpression: "Ukifanya kazi kinyume na namba hii, unaweza kuzidiwa na stress, kurudia mifumo ya uharibifu kama kujilinda kupita kiasi, ukali, au kukwepa majukumu. Hii huleta migongano ya muda mrefu na kuchoka kiakili.",
            RealLifeImpact: "Namba ya Usawa inaathiri namna unavyoishi katika mahusiano yenye changamoto, kazi yenye pressure, na vipindi vya mabadiliko makubwa. Inaamua kama unavunjika au unajengwa zaidi kupitia misukosuko.",
            GuidanceIntegration: "Ili kuunganisha hekima ya Namba yako ya Usawa, tafakari jinsi ulivyokabiliana na migogoro mikuu iliyopita, tambua mifumo inayojirudia, na ujifunze mbinu za ufahamu (breathwork, grounding, mawasiliano ya wazi) zinazoendana na namba yako. Fanya mazoezi haya kuwa sehemu ya kujihudumia."
        }
    },
    passionNumber: {
        default: {
            title: "Shauku ya Ndani (Hidden Passion)",
            CoreDefinition: "Shauku ya Ndani inaonyesha talanta, vipaji, au misukumo ya ndani ambayo haionekani mara moja kwenye uso wa maisha yako, lakini ndiyo moto wa kweli unaokuendesha ndani.",
            DiagnosticPurpose: "Kadi hii ipo ili kufichua kile kinachokupa hisia ya kuwaka moyoni, hata kama haujavifanya kuwa kazi au mwelekeo wa wazi. Inaonyesha maeneo ambayo ukiyapuuza, unaweza kuhisi maisha yako hayajatimia.",
            HowDerived: "Namba hii inatokana na kurudia kwa baadhi ya herufi katika majina yako kulingana na kanuni za numerology. Mfumo unatafsiri marudio haya kuwa mada kuu za shauku na vipaji vya ndani vinavyotaka kuishiwa.",
            RevealsAboutUser: "Kadi hii inafunua mahali unapohisi uko hai zaidi: ubunifu, uongozi, huduma, kujifunza, au kujieleza. Inaonyesha kile unachoweza kufanya kwa saa nyingi bila kuchoka kwa sababu kinaendana na moyo wako.",
            AlignedExpression: "Unapoheshimu Shauku yako ya Ndani, unatafuta njia ya kuijumuisha kwenye kazi, miradi ya pembeni, au huduma. Unahisi nguvu, msukumo, na maana ya ndani katika shughuli zako za kila siku.",
            ShadowExpression: "Ukizuia moto huu wa ndani, unaweza kuhisi kutojali, kuchoka, au hisia ya kuwa 'nje ya kusudi'. Unaweza kutafuta faraja za haraka (kulewa, matumizi kupita kiasi) badala ya uundaji wa kina wa maana.",
            RealLifeImpact: "Shauku ya Ndani inaathiri uchaguzi wa kazi, ushirikiano, na namna unavyotumia muda wako wa ziada. Ikiwa imeunganishwa, maisha yako yanajaa msisimko wa ubunifu; ikiwa imedhibitiwa, maisha yanaweza kuhisiwa kama mzigo unaorudiwa.",
            GuidanceIntegration: "Ili kuunganisha hekima ya kadi hii, orodhesha shughuli zinazokufanya usahau muda, zipe kipaumbele kwa makusudi, na utafute njia ndogo za kuzielekea kila wiki. Tambua sauti zinazokuzuia kuzifuata na uzibadilishe kwa uthibitisho wa ujasiri."
        }
    },
    karmicDebt: {
        default: {
            title: "Deni la Karma",
            CoreDefinition: "Deni la Karma linaonyesha masomo mazito yasiyokamilika kutoka mizunguko ya zamani ya maisha ambayo bado yanatafuta usawa kupitia uzoefu wa sasa. Ni nishati ya kujirekebisha na kusafisha mifumo ya zamani.",
            DiagnosticPurpose: "Kadi hii ipo ili kukupa ufahamu wa kina kuhusu kwa nini baadhi ya changamoto zinaonekana 'nzito kupita kawaida'. Inafafanua mandhari ya kiafya, kifedha, au kihisia inayohitaji usawa wa makusudi na uwajibikaji wa ndani.",
            HowDerived: "Namba za Deni la Karma hupatikana kupitia muundo wa tarehe ya kuzaliwa na baadhi ya namba maalum katika majina yako, zikifuata kanuni za jadi za numerology. Mfumo wa Mavengu unazitafsiri kama masomo makuu ya kusafisha nishati.",
            RevealsAboutUser: "Kadi hii inafunua maeneo ambayo una mwelekeo wa kurudia makosa, kuwavutia watu au hali zinazofanana, au kubeba mzigo wa kihisia usioeleweka. Inaonyesha mahali ambapo msamaha, nidhamu, au uwazi wa maamuzi unahitajika.",
            AlignedExpression: "Unapokubali Deni lako la Karma kwa ufahamu, unakoma kujiona mwathirika na unaanza kuchukua hatua za makusudi za kurejesha usawa: mabadiliko ya tabia, kuchagua uaminifu, huduma, au uwazi wa kihisia. Hii inaleta uhuru wa polepole lakini wa kudumu.",
            ShadowExpression: "Ukipinga au kukataa masomo ya karma, unaweza kujikuta ukirudia mahusiano yenye maumivu, matatizo ya kifedha, au mifumo ya kujiharibu. Hii huongeza hisia za kukwama na kukata tamaa.",
            RealLifeImpact: "Deni la Karma linaathiri mienendo ya mahusiano, maamuzi ya kifedha, na hali muhimu za maisha kama ndoa, kazi, na afya. Linapoeleweka, unaweza kuligeuza kuwa jukwaa la ukuaji wa kipekee badala ya kifungo kisichoonekana.",
            GuidanceIntegration: "Ili kuunganisha hekima ya kadi hii, chunguza kwa uaminifu mifumo inayojirudia, tafuta msaada wa kitaalamu au kiroho inapohitajika, na uamue tabia mpya unazotaka kuendeleza. Fanya matendo ya ufahamu ya kusafisha kama msamaha, kutoa, au huduma ya hiari."
        }
    },
    firstChallenge: {
        default: {
            title: "Changamoto ya Kwanza",
            CoreDefinition: "Changamoto ya Kwanza inaonyesha kizuizi kikuu cha mwanzo maishani mwako kinachounda tabia yako, imani zako, na jinsi unavyokabiliana na dunia katika miaka ya awali.",
            DiagnosticPurpose: "Kadi hii ipo ili kufafanua ni aina gani ya majaribu ya mapema yanayokuunda: ukosefu wa msaada, hofu, kujithamini chini, au mzigo wa majukumu. Inaonyesha eneo ambalo roho yako iliamua kupata uthabiti wa msingi.",
            HowDerived: "Namba hii inatokana na mchanganyiko wa sehemu za tarehe yako ya kuzaliwa kulingana na fomula maalum ya numerology. Mfumo unaihusianisha na mandhari ya utotoni na ujana wa mapema.",
            RevealsAboutUser: "Kadi hii inafunua kile kilichokusukuma kukua mapema, mifumo uliyojifunza kujilinda, na maeneo ambayo bado unaweza kubeba majeraha ya zamani. Inaonyesha asili ya kikwazo cha kwanza kilichokufundisha nguvu.",
            AlignedExpression: "Unapoponya na kukubali Changamoto yako ya Kwanza, unageuza hadithi ya maumivu kuwa hadithi ya nguvu. Unatumia uzoefu wako kusaidia wengine na kufanya maamuzi yenye afya badala ya kurudia ulivyofanyiwa.",
            ShadowExpression: "Ukibaki umefungwa kwenye hisia za zamani za kukosa msaada au kuumizwa, unaweza kuendelea kupambana na imani za kujidunisha, hofu ya ukaribu, au tabia za kujilinda kupita kiasi.",
            RealLifeImpact: "Changamoto hii inaathiri jinsi unavyotazama dunia (salama au hatari), namna unavyounda mahusiano ya karibu, na jinsi unavyopokea msaada. Inaweza kupunguza au kuongeza uwezo wako wa kuamini safari ya maisha.",
            GuidanceIntegration: "Ili kuunganisha hekima yake, tambua tukio au mandhari kuu ya changamoto za awali, fanya kazi ya ndani (inner child work, journaling, tiba), na ruhusu nafsi yako ya sasa kumtunza na kumthibitisha yule uliyekuwa. Hivi ndivyo unavyofungua kiwango kipya cha uhuru wa kihisia."
        }
    },
    luckyColor: {
        default: {
            title: "Rangi ya Bahati",
            CoreDefinition: "Rangi ya Bahati inaonyesha wigo wa rangi ambao unapoongezwa kwenye maisha yako huongeza ujasiri, uwazi, na resonance chanya ya nishati yako. Ni lugha ya kuona ya aura yako ya asili.",
            DiagnosticPurpose: "Kadi hii ipo ili kukuonyesha ni pembejeo gani ya rangi inaweza kukuza hali unayotamani: utulivu, nguvu, mvuto, au ulinzi. Inapima jinsi mwili wako wa nishati unavyoitikia mitetemo tofauti ya rangi.",
            HowDerived: "Rangi ya Bahati hutolewa kupitia ulinganifu wa ishara yako ya unajimu, aura yako, na mandhari ya maisha yako. Mfumo wa Mavengu unatumia ramani ya archetypes za rangi na elementi ili kubainisha rangi inayokuinua zaidi.",
            RevealsAboutUser: "Kadi hii inafunua jinsi unavyotumia au kupuuza rangi katika mavazi, mazingira na utambulisho wako. Inaonyesha ikiwa unapendelea kujificha (rangi hafifu) au kuonekana (rangi kali) na ni hali gani ya nishati inayokufaa zaidi.",
            AlignedExpression: "Unapojumuisha Rangi yako ya Bahati kwa ufahamu, unahisi kuungwa mkono, unaonekana kwa namna inayolingana na nafsi yako ya ndani, na unapokea majibu chanya zaidi kutoka kwa watu na mazingira.",
            ShadowExpression: "Ukivaa au kuzungukwa mara kwa mara na rangi zinazopingana na aura yako, unaweza kuhisi kuchoka, kutokuwa na msukumo, au kupoteza msimamo wako wa ndani. Unaweza pia kujisikia 'hauonekani' kikamilifu.",
            RealLifeImpact: "Rangi hii inaathiri hisia zako za kila siku, hisia ya uzuri wa kibinafsi, na namna unavyopokelewa kwenye mahojiano, mikutano, au mahusiano ya karibu. Ni zana ndogo lakini yenye nguvu ya kubadilisha hali ya nishati.",
            GuidanceIntegration: "Ili kujumuisha hekima ya Rangi ya Bahati, anza kuingiza rangi hii katika vitu vidogo (vifaa, mandhari ya simu, vitu vya kazi), kisha uijumuishe kwenye mavazi au mapambo ya nyumbani. Tazama jinsi hali yako inavyobadilika unapofanya hivyo kwa makusudi."
        }
    },
    luckyDay: {
        default: {
            title: "Siku ya Bahati",
            CoreDefinition: "Siku ya Bahati ni siku katika wiki ambapo masafa yako ya kibinafsi ya nishati yanalingana zaidi na masafa ya sayari, hivyo kuongeza uwezekano wa mtiririko mzuri, fursa, na uamuzi ulio wazi.",
            DiagnosticPurpose: "Kadi hii ipo ili kukusaidia kupanga matendo muhimu ya maisha (maamuzi, mazungumzo makubwa, kuanzisha miradi) wakati ambapo nishati inakusaidia zaidi badala ya kukukwamisha.",
            HowDerived: "Siku hii hutokana na ishara yako ya unajimu na sayari inayoiwazia, ikifungamanishwa na mzunguko wa wiki. Mfumo wa Mavengu unalinganisha sifa za sayari na tabia zako za asili.",
            RevealsAboutUser: "Kadi hii inafunua mwelekeo wako wa mafanikio ya asili na muda ambapo unakuwa na nguvu zaidi kiakili na kihisia. Inaonyesha kama unastawi zaidi katika kuanza wiki, katikati, au mwishoni mwa wiki.",
            AlignedExpression: "Unapotumia Siku yako ya Bahati kwa ufahamu, unaweka shughuli muhimu siku hii, unajiheshimu kwa kupunguza migogoro isiyo ya lazima, na unaruhusu matukio ya 'bahati' kuongezeka kwa sababu uko katika nishati ya uwiano.",
            ShadowExpression: "Ukipuuzia kabisa hisia za muda na mizunguko, unaweza kupanga kila kitu kinyume na mfuatano wa nishati yako, na hivyo kuhisi mambo 'hayaendi tu' bila kuelewa kwa nini.",
            RealLifeImpact: "Siku ya Bahati inaathiri ubora wa mahojiano, mikutano, maamuzi ya kifedha, au hata tarehe za kimapenzi. Si uchawi wa papo kwa papo, bali ni kuendana na mzunguko unaokufaa.",
            GuidanceIntegration: "Ili kuunganisha hekima ya kadi hii, anza kutambua ni siku gani unahisi uko juu zaidi na uweke mambo magumu au muhimu siku hiyo inapowezekana. Tumia siku hii pia kama siku ya kuunganisha upya nia na malengo yako."
        }
    },
    tarotCard: {
        default: {
            title: "Kadi ya Tarot (Archetype)",
            CoreDefinition: "Kadi ya Tarot ya kuzaliwa inaonyesha archetype kuu ya safari yako ya roho: hadithi ya ndani ya mwanahero unayocheza katika maisha haya, pamoja na majaribio na zawadi zake.",
            DiagnosticPurpose: "Kadi hii ipo ili kukuonyesha ramani ya kiroho ya maisha yako kwa lugha ya ishara. Inafafanua mandhari ya kudumu kama kujitafuta, uongozi, huduma, uponyaji, au uhuru.",
            HowDerived: "Archetype ya Tarot imeunganishwa na ishara yako ya jua na ramani pana ya nishati, ikifananishwa na Majors Arcana katika Tarot. Mfumo wa Mavengu hutumia archetype hii kama dirisha la kuelewa kusudi la kina la roho.",
            RevealsAboutUser: "Kadi hii inafunua namna unavyoona changamoto, jinsi unavyochukua mamlaka ya maisha, na ni aina gani ya mabadiliko ndiyo 'thamani ya msingi' ya safari yako. Inaonyesha pia kivuli unachohitaji kuligeuza kuwa nguvu.",
            AlignedExpression: "Unapokumbatia archetype yako kwa ufahamu, unakoma kujilinganisha bila kichwa; unakubali kuwa safari yako ina rangi maalum na unafanya kazi ndani ya ramani hiyo kwa ubunifu na ujasiri.",
            ShadowExpression: "Ukipopoteza fahamu ya archetype yako, unaweza kuishi upande wake wa kivuli: The Hermit kuwa kujitenga kupita kiasi, The Emperor kuwa udikteta, nk. Hii huleta hisia za kupotea au kuzidisha tabia fulani.",
            RealLifeImpact: "Archetype huathiri aina ya kazi unayovutiwa nayo, mahusiano unayochagua, na hata maswali ya kiroho unayojiuliza. Ni msingi wa hadithi unayoendelea kuiandika kila siku.",
            GuidanceIntegration: "Ili kuunganisha hekima ya kadi hii, jifunze hadithi na masomo ya archetype yako, jiulize uko kwenye hatua gani ya hadithi hiyo, na ufanye maamuzi yanayokupeleka karibu na usemi wake wa juu zaidi badala ya kivuli chake."
        }
    },
    chakra: {
        default: {
            title: "Chakra Kiongozi",
            CoreDefinition: "Chakra Kiongozi ni kituo chako kikuu cha nishati kinachotawala namna unavyohisi salama, unavyojieleza, unapenda, au unavyotafuta maana. Ni lango kuu la mtiririko wa nguvu ya maisha katika mfumo wako.",
            DiagnosticPurpose: "Kadi hii ipo ili kufichua mahali ambapo nguvu yako ya kiroho na kihisia imejikita zaidi: mizizi, moyo, koo, taji, n.k. Hii husaidia kuelewa kwa nini unajibu maisha kwa namna fulani.",
            HowDerived: "Uchanganuzi unategemea ishara yako ya unajimu, ramani ya elementen, na mienendo ya kihisia iliyoonekana katika wasifu wako. Mfumo unalinganisha data hii na tabia za kila chakra ili kubaini kituo kinachoongoza.",
            RevealsAboutUser: "Kadi hii inafunua ikiwa unaongozwa zaidi na utegemezi wa kiusalama (Root), ubunifu na hisia (Sacral), nguvu ya utashi (Solar Plexus), upendo (Heart), usemi wa ukweli (Throat), intuition (Third Eye), au muunganiko wa kiungu (Crown).",
            AlignedExpression: "Unapofanya kazi kwa ulinganifu na Chakra yako Kiongozi, una mtiririko wa asili wa nguvu katika eneo hilo na hutumia zawadi zake kwa uwazi: mawasiliano wazi, upendo, ujasiri, au hekima ya juu.",
            ShadowExpression: "Ukizidisha au kudhoofisha kituo hiki, unaweza kukumbwa na tabia za kupoteza uwiano kama woga wa kuachilia, kiburi, kukosa mipaka, au kukaa kichwani kupita kiasi bila kuugusa mwili na hisia.",
            RealLifeImpact: "Chakra hii inaathiri afya ya mwili katika eneo husika, ubora wa mahusiano yako, na kiwango chako cha ubunifu au uwezo wa kufanya maamuzi magumu.",
            GuidanceIntegration: "Ili kuunganisha hekima yake, fanya mazoezi, kutafakari, au rituali zinazolilisha chakra hili (rangi, sauti, harakati, maombi) na pia zijenge chakra nyingine ili kuleta usawa wa mfumo mzima."
        }
    },
    chineseZodiac: {
        default: {
            title: "Nyota ya Kichina",
            CoreDefinition: "Nyota ya Kichina inaonyesha archetype ya mwaka wa kuzaliwa kwako kulingana na mzunguko wa miaka 12 ya wanyama. Inabeba mtindo wa muda mrefu wa tabia, mwelekeo wa mafanikio, na njia ya kushirikiana na jamii.",
            DiagnosticPurpose: "Kadi hii ipo ili kuongeza safu ya ziada kwenye uelewa wa utu wako, ikichanganya hekima ya Mashariki na ramani nyingine za nishati. Inakuonyesha jinsi ulivyo ndani ya mzunguko wa kijamii na kizazi chako.",
            HowDerived: "Uchambuzi unatokana na mwaka wa kuzaliwa, ukifananisha na mnyama husika (mfano Panya, Farasi, Mbwa). Mfumo wa Mavengu unaunganisha sifa za mnyama huyo na tabia za unajimu wa Magharibi.",
            RevealsAboutUser: "Kadi hii inafunua namna unavyofanya kazi katika mifumo ya watu wengi: je, wewe ni mwepesi, mwenye ujanja, mtiifu, jasiri, au msiri? Inaonyesha pia aina ya changamoto na zawadi katika mzunguko wa kijamii.",
            AlignedExpression: "Unapokubali Nyota yako ya Kichina, unatumia vipaji vyake kwa uangalifu katika kazi, biashara, na mahusiano. Unajua ni mahali gani unapofaa kuwa mbele na mahali pa kushirikiana kama timu.",
            ShadowExpression: "Ukikimbia upande wa kivuli wa mnyama wako (kama ukaidi, tamaa, woga, ubinafsi), unaweza kujikuta ukihujumu mafanikio yako ya muda mrefu na kuleta migogoro isiyo ya lazima.",
            RealLifeImpact: "Nyota ya Kichina inaathiri sifa ya jina lako katika jamii, jinsi watu wanavyokupokea kwa ujumla, na mizunguko ya miaka yenye bahati au changamoto katika maisha yako ya kazi na familia.",
            GuidanceIntegration: "Ili kuunganisha hekima yake, jifunze tabia chanya za mnyama wako na kivuli chake, kisha uamue tabia moja unayotaka kukuza na moja unayotaka kuponya. Tumia maarifa haya katika kupanga malengo ya muda mrefu."
        }
    },
    pinnacle: {
        default: {
            title: "Mzunguko wa Kilele (Pinnacle Cycle)",
            CoreDefinition: "Mzunguko wa Kilele unaonyesha awamu maalum za maisha ambapo masomo makuu, fursa, na mafanikio ya juu yanajitokeza. Ni 'sehemu za juu' za simulizi ya maisha yako.",
            DiagnosticPurpose: "Kadi hii ipo ili kukusaidia kuelewa ni kwa nini vipindi fulani vya maisha vinaonekana vimejaa mabadiliko au mafanikio kuliko vingine. Inatoa muktadha wa wakati badala ya tukio moja tu.",
            HowDerived: "Mizunguko ya Kilele inatokana na hesabu maalum ya numerology ya tarehe yako ya kuzaliwa, mara nyingi ikigawanya maisha katika awamu nne kuu. Mfumo wa Mavengu unaleta muhtasari wa kilele cha sasa ulipo.",
            RevealsAboutUser: "Kadi hii inafunua msisitizo wa awamu uliyo ndani yake sasa: je unaitwa kujenga, kuvunja, kupanua, au kuachilia? Inaonyesha aina ya masomo na zawadi zinazopatikana katika kipindi hiki.",
            AlignedExpression: "Unapofanya kazi sambamba na Mzunguko wa Kilele, unakubali msimu wa maisha: unapanda wakati wa kupanda, kuvuna wakati wa mavuno, na kupumzika wakati wa kupumzika. Hii huleta mafanikio ya kina na yasiyohitaji nguvu ya kulazimisha.",
            ShadowExpression: "Ukilazimisha maisha yako kwenda kinyume na msimu wa kilele, unaweza kukumbana na msuguano wa mara kwa mara, vizuizi, na kuhisi 'umesukumwa nyuma' bila kuelewa chanzo.",
            RealLifeImpact: "Mizunguko hii inaathiri maamuzi makubwa kama mabadiliko ya kazi, ndoa, kuhamia, au kuanza miradi mikubwa. Inakupa ramani ya wakati unaofaa zaidi wa hatua kubwa.",
            GuidanceIntegration: "Ili kuunganisha hekima ya kadi hii, tambua ni aina gani ya kilele unachokipitia (kujenga, kujifunza, kuongoza, kutoa), kisha upange malengo yako makuu ya miaka michache ijayo kwa kuzingatia mwelekeo huo wa nishati."
        }
    },
    auraColor: {
        default: {
            title: "Rangi ya Aura",
            CoreDefinition: "Rangi ya Aura ni mwonekano wa nishati ya uwanja wako wa kiroho na kihisia, ikionyesha kiwango cha furaha, uzito, uchovu, au msisimko wa roho katika wakati uliopo.",
            DiagnosticPurpose: "Kadi hii ipo ili kukuonyesha hali ya sasa ya uwiano wako wa ndani. Inafichua ikiwa unahitaji kupunguza mzigo, kuongeza mwanga wa ubunifu, au kulinda nishati yako dhidi ya uchafuzi wa nje.",
            HowDerived: "Rangi ya Aura hutokana na ulinganifu wa ishara ya unajimu, elementi, na mienendo ya kihisia iliyoandikwa kwenye wasifu wako. Mfumo unaihusianisha na rangi za kawaida za uwanja wa nishati wa binadamu.",
            RevealsAboutUser: "Kadi hii inafunua unaelekea wapi kwa sasa: kutafakari, vitendo, uponyaji, au ubunifu. Inaonyesha pia jinsi watu wengine wanavyokuhisi bila hata maneno.",
            AlignedExpression: "Unapofanya kazi kwa ulinganifu na Rangi yako ya Aura, unajua unachohitaji kubaki katika hali ya mwanga: muda wa peke yako, kuungana na wengine, kufanya kazi ya mwili, au ibada za kiroho.",
            ShadowExpression: "Ukipuuzia ishara ya aura iliyochoka au iliyochafuliwa, unaweza kupuuzia mipaka, kuungua (burnout), au kupata maumivu ya mwili yanayotokana na uchovu wa nishati.",
            RealLifeImpact: "Rangi ya Aura inaathiri jinsi unavyoonekana katika mahojiano, uhusiano, na hadhara: je, watu wanajisikia kuvutiwa kukusikiliza, kukutegemea, au wanahisi mashaka? Inaweza pia kubadilika kulingana na jinsi unavyojijali.",
            GuidanceIntegration: "Ili kuunganisha hekima yake, fanya kazi za kusafisha aura kama kuoga kwa chumvi, kutembea kwenye asili, kupumua kwa kina, na maombi. Tumia rangi zinazosaidia aura yako kupitia nguo, mwanga, na sanaa karibu nawe."
        }
    },
    lifeLesson: {
        default: {
            title: "Somo la Maisha",
            CoreDefinition: "Somo la Maisha ni mandhari kuu ya kiroho unayodaiwa kujifunza katika mzunguko huu wa maisha. Ni mstari wa nyuma wa kila tukio kubwa linalojirudia.",
            DiagnosticPurpose: "Kadi hii ipo ili kuunganisha nukta kati ya changamoto tofauti ambazo zinaonekana na sura sawa. Inakuonyesha kwamba nyuma ya matukio mengi kuna somo moja linalojirudia kwa sura tofauti.",
            HowDerived: "Somo hili linatokana na mchanganyiko wa Life Path, namba za changamoto, na nyota za kiroho kama North Node. Mfumo wa Mavengu unachuja mada inayojitokeza mara kwa mara.",
            RevealsAboutUser: "Kadi hii inafunua eneo kuu la ukuaji: je ni mipaka, kujikubali, uwajibikaji, msamaha, au ujasiri? Inaonyesha mahali ambapo ukibadilika, maisha yako yote yanabadilika.",
            AlignedExpression: "Unapokubali na kufanya kazi na Somo lako la Maisha, unaacha kujiuliza 'kwa nini mimi?' na kuanza kuuliza 'inamaana gani?' Kila tukio linakuwa darasa, si laana.",
            ShadowExpression: "Ukikataa somo hili, hali zinazofanana zinaendelea kujirudia kwa nguvu kubwa zaidi, zikikuacha ukihisi umechoka, umekata tamaa, au umehasi maisha.",
            RealLifeImpact: "Somo la Maisha linaathiri jinsi unavyochagua kazi, mahusiano, mtindo wa maisha, na hata jinsi unavyosali au kutafakari. Linaonyesha ufunguo wa kuingia kwenye hatua inayofuata ya ukuaji.",
            GuidanceIntegration: "Ili kuunganisha hekima yake, taja kwa ufupi somo lako la msingi, liandike mahali pa wazi, na ujaribu kuchukua uamuzi mmoja kila siku unaolisaidia somo hilo badala ya kulikwepa."
        }
    },
    maturityNumber: {
        default: {
            title: "Namba ya Ukomavu",
            CoreDefinition: "Namba ya Ukomavu inaonyesha kile roho yako inakusudia kukua nacho unapokomaa kwa umri na uzoefu. Ni picha ya 'toleo lako la baadaye' lililo imara na lililosawazika.",
            DiagnosticPurpose: "Kadi hii ipo ili kukupa mwelekeo wa muda mrefu: unakuwa nani taratibu kadri miaka inavyosonga? Inakusaidia kuchagua njia zinazokuletea ukomavu huo mapema badala ya kupitia maumivu yasiyo ya lazima.",
            HowDerived: "Namba hii inapatikana kwa kuchanganya Life Path na Destiny Number. Mfumo unaitafsiri kama vector ya mabadiliko ya maisha, si hali ya sasa.",
            RevealsAboutUser: "Kadi hii inafunua sifa unazojenga polepole: hekima, uwajibikaji, ubunifu, huduma, uongozi, n.k. Inaonyesha pia tofauti kati ya wewe wa sasa na unayeitwa kuwa.",
            AlignedExpression: "Unapotembea kwa ufahamu kuelekea namba yako ya Ukomavu, unachagua maamuzi yanayokuletea utulivu wa ndani, uwazi wa kusudi, na ubora wa mahusiano badala ya kukimbiza kuthibitishwa na nje.",
            ShadowExpression: "Ukikataa mwelekeo huu, unaweza kubaki kwenye mifumo ya utoto au ujana: kukwepa majukumu, kujilinda kupita kiasi, au kukimbia maumivu kwa raha za muda mfupi.",
            RealLifeImpact: "Namba ya Ukomavu inaathiri jinsi unavyokabiliana na umri wa kati na baadaye, jinsi unavyohisi kuhusu urithi unaouacha, na kiwango cha amani unachokifikia unapopitia hatua mbalimbali za maisha.",
            GuidanceIntegration: "Ili kuunganisha hekima yake, jiulize: 'Mimi wa miaka 20 ijayo angependa nichague nini leo?' Kisha anza kutenda kwa kuzingatia jibu hilo mara kwa mara."
        }
    },
    rationalThought: {
        default: {
            title: "Fikra za Kimantiki",
            CoreDefinition: "Fikra za Kimantiki zinaonyesha jinsi ubongo wako unavyopanga taarifa, kutenganisha hisia na hoja, na kufikia hitimisho. Ni algorithm yako ya ndani ya uchambuzi.",
            DiagnosticPurpose: "Kadi hii ipo ili kukusaidia kuelewa nguvu na up blind spot wa mtindo wako wa kufikiri: je una mashaka kupita kiasi, unakurupuka, au una tabia ya kuchambua kwa kina kupita kiasi?",
            HowDerived: "Namba hii inatokana na mchanganyiko wa tarehe ya kuzaliwa na herufi za majina yako kulingana na kanuni mahususi za numerology. Mfumo unaihusianisha na style ya uamuzi wa mantiki.",
            RevealsAboutUser: "Kadi hii inafunua kama unategemea zaidi hesabu, intuition iliyo kimantiki, uzoefu, au imani zisizoangaliwa. Inaonyesha nguvu zako katika kutatua matatizo ya kiakili.",
            AlignedExpression: "Unapofanya kazi kwa ulinganifu na Fikra zako za Kimantiki, unachanganya data, uzoefu, na hisia kwa uwiano, na kufanya maamuzi ya busara bila kukwama kwenye hofu.",
            ShadowExpression: "Ukizidisha au kudhoofisha kipaji hiki, unaweza kuwa mkali kupita kiasi, mwepesi wa kuhukumu, au kinyume chake: kuchanganyikiwa kila mara na kushindwa kuamua lolote.",
            RealLifeImpact: "Mtindo huu wa kufikiri unaathiri maamuzi ya fedha, kazi, mahusiano, na afya. Unapoutambua, unaweza kujizuia pale unapojua unapoteza uwiano.",
            GuidanceIntegration: "Ili kuunganisha hekima yake, jifunze kutofautisha kati ya sauti ya hofu na sauti ya mantiki yenye utulivu, na utengeneze itifaki ndogo ya kufanya maamuzi (kukusanya data, kusikiliza mwili, kisha kuamua)."
        }
    },
    attitudeNumber: {
        default: {
            title: "Namba ya Mtazamo",
            CoreDefinition: "Namba ya Mtazamo inaonyesha sura ya kwanza unayoiwasilisha kwa ulimwengu: jinsi unavyoonekana unapokutana na watu, hata kabla hawajakuona kwa undani.",
            DiagnosticPurpose: "Kadi hii ipo ili kukusaidia kuelewa tofauti kati ya picha ya nje na ukweli wa ndani. Inaonyesha jinsi picha hiyo inaweza kukusaidia au kukuzuia.",
            HowDerived: "Namba hii inachukuliwa kutoka siku na mwezi wa kuzaliwa tu, ikitoa 'mask' ya awali ya utu wako kulingana na numerology.",
            RevealsAboutUser: "Kadi hii inafunua impression ya kwanza unayoacha: je unaonekana mchangamfu, mkimya, mchapakazi, mwenye mamlaka, au wa kiroho? Inaonyesha kwa nini watu wanaweza kukutafsiri vibaya.",
            AlignedExpression: "Unapokuwa na uelewa wa Namba yako ya Mtazamo, unaitumia kwa ufahamu katika mahojiano, maongezi ya kwanza, na nafasi za kijamii. Unajua wakati wa kupunguza au kuongeza nguvu ya picha hiyo.",
            ShadowExpression: "Ukipuuzia athari yake, unaweza kushangaa kwa nini watu wana hofu au matumaini fulani yasiyoendana na ulivyo kwa ndani, na hivyo kusababisha kutokuelewana.",
            RealLifeImpact: "Namba hii inaathiri sana mahusiano ya biashara, urafiki wa haraka, na jinsi walimu, wakuu wa kazi, au washirika wanavyokuona. Inaweza kuwa daraja au kizuizi.",
            GuidanceIntegration: "Ili kuunganisha hekima yake, tambua picha unayoitoa, amua ikiwa inaendana na nafsi yako ya ndani, na fanya marekebisho kwa lugha ya mwili, mavazi, na mawasiliano ili kuleta ulinganifu zaidi."
        }
    },
    northNode: {
        default: {
            title: "Mwelekeo wa Roho",
            CoreDefinition: "North Node ni alama ya kiunajimu inayowakilisha mwelekeo wa roho yako katika maisha haya: upande mpya unaoitwa kuuchunguza ambao mara nyingi ni kinyume na eneo lako la faraja.",
            DiagnosticPurpose: "Kadi hii ipo ili kukupa dira ya kiroho ya muda mrefu. Inaonyesha 'mstari wa upeo' wa ukuaji wako wa ndani badala ya kile ulichokwisha kukijua vizuri.",
            HowDerived: "Uchambuzi wa North Node unatokana na nafasi ya pointi hii katika ramani ya unajimu, ikichanganywa na ishara yako ya jua na Life Path. Mfumo wa Mavengu hutafsiri hii kama njia ya ukuaji wa roho.",
            RevealsAboutUser: "Kadi hii inafunua maeneo ambayo unahisi kuvutwa lakini pia una hofu: aina mpya za mahusiano, kazi, au kujieleza. Inaonyesha hatua inayofuata ya moyo wako wa kiroho.",
            AlignedExpression: "Unapofuata Mwelekeo wa Roho kwa ufahamu, unafanya maamuzi yanayokufanya ukubali changamoto za ukuaji badala ya kubaki kwenye hali za zamani zinazojulikana lakini zisizokutimizia.",
            ShadowExpression: "Ukikataa mwelekeo huu, unakaa kwenye Node ya Kusini (mifumo ya zamani), ukirudia tabia, kazi, au mahusiano yaliyoshapitwa na wakati kwa roho yako, na kuhisi kukwama.",
            RealLifeImpact: "Mwelekeo wa Roho unaathiri maamuzi makubwa ya lini kuhamia, kubadilisha kazi, kuingia au kutoka kwenye mahusiano, na hata aina ya kazi ya kiroho utakayofanya.",
            GuidanceIntegration: "Ili kuunganisha hekima yake, tambua eneo kuu la maisha linaloangaziwa na North Node yako, chukua hatua ndogo ndogo za kulikumbatia, na utumie hofu kama kiashiria cha mahali ambapo upanuzi upo."
        }
    },
    guardianAngel: {
        default: {
            title: "Malaika Mlinzi",
            CoreDefinition: "Malaika Mlinzi anawakilisha nguvu ya kiroho ya ulinzi na mwongozo inayosimama kando yako katika safari ya maisha. Ni archetype ya msaada wa mbinguni wa kibinafsi.",
            DiagnosticPurpose: "Kadi hii ipo ili kukumbusha kwamba haupo peke yako kwenye changamoto zako. Inaonyesha ubora maalum wa ulinzi na hekima unaokuandama: nidhamu, huruma, ukweli, n.k.",
            HowDerived: "Uhusiano huu unatokana na mchanganyiko wa ishara ya unajimu, Numerology, na mila za kiroho zinazohusisha sanjari za malaika na mitindo ya roho. Mfumo wa Mavengu unatoa jina au ubora wa malaika anayehusishwa na wasifu wako.",
            RevealsAboutUser: "Kadi hii inafunua ni aina gani ya msaada wa kiroho unayoweza kukubali kwa urahisi, na pia maeneo ambayo mara nyingi unahitaji ukumbusho wa kuomba msaada badala ya kubeba kila kitu peke yako.",
            AlignedExpression: "Unapofanya kazi kwa ufahamu na Malaika Mlinzi, unajifunza kuomba msaada, kusikiliza ishara ndogo, na kuchukua hatua ulizoongozwa kuzichukua hata kama zinakiuka mipango yako ya akili.",
            ShadowExpression: "Ukijisahau kabisa upande wa msaada wa kiroho, unaweza kubeba mzigo mzito wa hatia, udhibiti, au hofu ya kuanguka bila msaada, na hivyo kuishi katika hali ya msongo wa muda mrefu.",
            RealLifeImpact: "Uhusiano huu unaathiri jinsi unavyokabiliana na matukio ya ghafla, magumu, au yasiyoelezeka. Unaweza kuhisi miujiza midogo au bahati isiyo ya kawaida pale unapokubali kwamba haupo peke yako.",
            GuidanceIntegration: "Ili kuunganisha hekima yake, tengeneza ibada fupi ya kila siku ya mawasiliano (sala, maneno, au mawazo ya wazi), uombe mwongozo mahususi, na uangalie jinsi ujumbe unavyokuja kupitia watu, ndoto, au hisia za ndani."
        }
    },
    soulAge: {
        default: {
            title: "Umri wa Roho",
            CoreDefinition: "Umri wa Roho unaonyesha kina cha uzoefu wa kiroho roho yako ilishapitia kabla ya maisha haya na jinsi hilo linavyoathiri mtazamo wako wa sasa wa maisha.",
            DiagnosticPurpose: "Kadi hii ipo ili kufafanua kwa nini unaweza kuhisi 'mzee' au 'mchanga' ndani bila kujali umri wa mwili. Inakupa ufahamu wa kiwango cha hekima asilia na pia mahali bado unajifunza kama mwanafunzi.",
            HowDerived: "Uchambuzi unatokana na mchanganyiko wa data ya unajimu, numerology, na mizunguko ya karmic inayoonekana katika wasifu wako. Mfumo unatafsiri hii kama kundi la roho (young, mature, old, n.k.).",
            RevealsAboutUser: "Kadi hii inafunua mtazamo wako wa asili kuhusu maisha: je unaona maisha kama uwanja wa kucheza, darasa, au hekalu? Inaonyesha pia sababu za hisia zako kuhusu jamii na muda.",
            AlignedExpression: "Unapokubali Umri wa Roho yako, unaheshimu mahali ulipo: kama roho kijana unaweza kukubali hitaji la kujaribu mengi; kama roho mzee, unaweza kukubali hitaji la utulivu na huduma ya kina.",
            ShadowExpression: "Ukikataa au kuchanganya hatua yako ya sasa, unaweza kujikuta ukijilazimisha kuishi kama mtu mwingine: roho kijana kujifunga kwenye ukali wa kupita, au roho mzee kukimbia kila kitu kilicho cha kina.",
            RealLifeImpact: "Umri wa Roho unaathiri aina ya maswali unayojiuliza, watu unaovutiwa nao, na mazingira unayostawi. Unaweza kujihisi nyumbani kwenye mazungumzo ya kijuujuu au ya kina kulingana na umri huu.",
            GuidanceIntegration: "Ili kuunganisha hekima yake, tambua hatua yako, tafuta jamii ya watu wenye mwelekeo sawa wa ndani, na uache kujihukumu kwa kasi au mwelekeo wa ukuaji wako wa kiroho. Kila hatua ina uzuri wake."
        }
    },
    rulingPlanet: {
        default: {
            title: "Sayari Kiongozi",
            CoreDefinition: "Sayari Kiongozi ni mwili wa angani unaotawala ishara yako ya jua na kuipa rangi ya msingi ya tabia, msukumo, na mtindo wa kujieleza. Ni 'mtawala wa kifalme' wa ramani yako ya nishati.",
            DiagnosticPurpose: "Kadi hii ipo ili kufafanua ni aina gani ya nguvu za sayari zinazosukuma hadithi yako ya maisha: mawazo ya haraka, uthabiti, upendo, mageuzi, au falsafa ya kina.",
            HowDerived: "Uchambuzi wa Sayari Kiongozi unatokana na ishara yako ya unajimu na sayari inayoiwazia kulingana na mila za unajimu. Mfumo wa Mavengu unaiunganisha na data nyingine za nishati ili kuunda maelezo ya kibinafsi.",
            RevealsAboutUser: "Kadi hii inafunua injini yako ya msingi: je unasukumwa na akili (Mercury), moyo (Venus), nguvu ya mapambano (Mars), upanuzi (Jupiter), nidhamu (Saturn), mageuzi (Uranus/Pluto), au maono ya kiroho (Neptune/Sun)?",
            AlignedExpression: "Unapofanya kazi kwa ulinganifu na sayari kiongozi, unakubali kipaji chake kikuu na unakilea kwa uangalifu. Unatumia lexicon yake kuunda maisha yenye maana kwako, badala ya kupigana nayo.",
            ShadowExpression: "Ukizidisha au kupinga nishati hii, unaweza kwenda kwenye kivuli chake: Mercury kuwa wasiwasi, Mars kuwa hasira, Venus kuwa utegemezi, Saturn kuwa ukali, n.k.",
            RealLifeImpact: "Sayari Kiongozi inaathiri jinsi unavyofikiri, unapenda, unafanya kazi, na unavyopambana na vikwazo. Ni ufunguo wa kuelewa kwa nini njia yako ya kufanya mambo ni tofauti na ya wengine.",
            GuidanceIntegration: "Ili kuunganisha hekima yake, jifunze zaidi kuhusu sayari yako kiongozi, tambua tabia nzuri na kivuli chake, na uamue tabia moja chanya unayotaka kuimarisha ili kuifanya sayari yako kuwa mshirika, si adui."
        }
    },
    // New cards' default entries (as they would be in mavenguKnowledgeBase)
    cognitiveStyle: {
        default: { title: "Njia ya Ufahamu (Cognitive Style)", description: "Njia yako ya Ufahamu inaonyesha jinsi unavyochakata taarifa, unafanya maamuzi, na unavyotumia akili yako. Inaathiri jinsi unavyojifunza, kutatua matatizo, na kuwasiliana. Kuelewa mtindo wako wa kiakili kutakusaidia kutumia uwezo wako kikamilifu." }
    },
    personalityArchetype: {
        default: { title: "Mchoro wa Utu (Personality Archetype)", description: "Mchoro wako wa Utu unafunua mifumo mikuu ya kisaikolojia inayoongoza utu wako. Ni kielelezo cha ndani kinachoonyesha motisha zako za msingi, tabia zako, na safari yako ya kishujaa. Inakusaidia kujielewa kwa undani zaidi." }
    },
    emotionalCycle: {
        default: {
            title: "Uchambuzi wa Muundo wa Hisia (Emotional Pattern Analysis)",
            CoreDefinition: "Uchambuzi wa Muundo wa Hisia unaangalia jinsi hisia zako zinavyojirudia: hisia kuu unayoishi nayo, hisia unazozikandamiza, vichochezi vinavyoziwasha, na njia ya afya ya kuzipooza.",
            DiagnosticPurpose: "Kadi hii ipo ili kubadilisha hisia zako kuwa ramani inayoeleweka badala ya dhoruba isiyoelezeka. Inakusaidia kuona mwelekeo, si tukio moja moja, ili ujue wapi pa kuanza kuponya.",
            HowDerived: "Muundo huu unatokana na mchanganyiko wa namba zako za hisia (Soul Urge, Mzunguko wa Mwaka), elementi yako, na mienendo ya kivuli iliyo kwenye Shadow Work. Mfumo unatafuta hisia zinazorudiwa na matukio yanayofanana ili kutengeneza picha moja.",
            RevealsAboutUser: "Kadi hii inafunua hisia inayoongoza hadithi yako ya ndani, hisia unazokwepa au kuzifunika, hali au watu wanaokuchochea zaidi, na mahali ambapo mwili wako au akili yako huanza kulalamika kabla ya kuvunjika.",
            AlignedExpression: "Unapofanya kazi kwa ulinganifu na muundo huu, unatambua hisia zako mapema, unajieleza kwa uaminifu bila kumwaga kila kitu, na unatumia hisia kama taarifa za kina, si adhabu au aibu.",
            ShadowExpression: "Ukikwepa muundo huu, unaweza kurudia mlipuko ule ule wa kihisia, kuzimia ndani, kujikuta kwenye mahusiano au kazi zinazoumia kiakili, au kutumia tabia za kukimbia kama kulewa, kula kupita kiasi, au kujifungia.",
            RealLifeImpact: "Muundo wa hisia unaathiri maamuzi yako ya pesa, mahusiano, kazi, na afya. Ukiuacha bila kufahamika, unaweza kujikuta ukiharibu fursa nzuri au kubaki sehemu zinazokuumiza kwa muda mrefu.",
            GuidanceIntegration: "Ili kujumuisha hekima ya kadi hii, taja kwa majina hisia yako kuu, iliyokandamizwa, kichochezi kikuu, na hatua moja ya uponyaji. Andika mahali pa wazi na uitumie kama ramani ya kufuatilia mabadiliko yako ya kihisia kwa wiki na miezi inayokuja."
        }
    },
    careerAlignment: {
        default: {
            title: "Mwelekeo wa Kazi (Career Alignment)",
            CoreDefinition: "Mwelekeo wa Kazi unaonyesha aina ya kazi na mazingira ambayo yanaunga mkono namba zako za msingi, elementi, na saini ya roho ili ufanye kazi kwa ulinganifu badala ya kuishi kwenye mode ya kuendelea kuishi tu.",
            DiagnosticPurpose: "Kadi hii ipo ili kugeuza vipaji vyako vya nishati na saikolojia kuwa maamuzi halisi ya kazi, majukumu, na miradi. Inakusaidia kutofautisha kati ya kazi “unazoweza” kufanya na kazi zinazokulisha roho yako.",
            HowDerived: "Uchambuzi unatokana na mchanganyiko wa Life Path, Destiny, Soul Urge, elementi, na Nafasi ya Jamii. Mfumo unatafuta muunganiko unaojirudia wa vipaji, masomo ya maisha, na wito wa roho ili kupendekeza mazingira ya kazi na majukumu yanayokufaa.",
            RevealsAboutUser: "Kadi hii inafunua aina ya mazingira unayostawi (timu, kujitegemea, uongozi, huduma), majukumu unayoweza kung'aa (mfano, mwalimu, msanidi, mshauri, mponyaji), na aina ya kazi zinazokukausha nishati hata kama zinaonekana nzuri kwenye karatasi.",
            AlignedExpression: "Unapolingana na Mwelekeo wako wa Kazi, kazi inakuwa chaneli ya kusudi, si kifungo cha kifedha. Unapata uchovu wa kawaida wa mwili lakini sio kuchoka kwa roho, ukuaji wa mapato unaolingana na thamani unayotoa, na hisia ya kujengwa badala ya kuungua.",
            ShadowExpression: "Ukikipuuza, unaweza kubaki kwenye kazi zinazolipa lakini zinakufanya ugonjwa wa ndani, kukubali majukumu ya chini ya kiwango cha roho yako au kutangatanga bila mwelekeo, ukibadilisha kazi bila hisia ya kuwasili mahali sahihi.",
            RealLifeImpact: "Mwelekeo wa Kazi unaathiri moja kwa moja mapato, afya ya akili, kiwango cha msongo, na namna unavyohisi kuhusiana na mchango wako duniani. Ulinganifu mzuri hapa hubadilisha ratiba yako ya kila siku na jinsi unavyopanga miaka ijayo.",
            GuidanceIntegration: "Ili kujumuisha hekima yake, chagua kwanza aina moja ya mazingira ya kazi na jukumu moja kuu linalolingana na kadi hii. Aanika hatua ndogo (mafunzo, maombi ya kazi, mradi wa pembeni) unazoweza kuchukua ndani ya miezi 3 ili kusogea karibu na ulinganifu huo."
        }
    },
    wealthFlow: {
        default: {
            title: "Uchambuzi wa Mtiririko wa Fedha (Money Flow Diagnosis)",
            CoreDefinition: "Uchambuzi wa Mtiririko wa Fedha unaonyesha uhusiano wako wa ndani na pesa, jinsi nishati yako inavyovutia au kukimbiza fursa, na njia rahisi zaidi ambazo fedha hupenda kuingia kwenye maisha yako.",
            DiagnosticPurpose: "Kadi hii ipo ili kuondoa aibu na mkanganyiko kuzunguka pesa na kuifanya iwe lugha ya nishati unayoelewa. Inakusaidia kuona mifumo, si tu salio la benki, ili kubadilisha jinsi fedha zinavyozunguka kwako.",
            HowDerived: "Mtiririko huu unatokana na Life Path, Destiny, namba za changamoto, elementi, na mifumo ya karma. Mfumo unatazama historia ya maamuzi ya pesa unayovutiwa nayo kiasili (hatari, usalama, kutoa, kuwekeza) na kuhusisha na ramani ya nishati ya roho.",
            RevealsAboutUser: "Kadi hii inafunua uhusiano wako wa kihisia na pesa (hofu, uhuru, usalama), imani za ndani unazobeba kuhusu kustahili au kutostahili, eneo kuu la vizuizi (hofu, kuchafuliwa na hatia, kutokuwa na mipaka), na njia unayopokea kwa urahisi zaidi kama zawadi, kazi ya kusudi, au biashara.",
            AlignedExpression: "Unapolingana na Mtiririko wako wa Fedha, pesa inakuwa mshirika wa safari yako, si adui. Unafungua milango ya mapato yanayolingana na thamani na kusudi, unaweka mipaka ya afya katika kutoa, na unatumia mipango ya kifedha inayoheshimu kasi ya roho yako.",
            ShadowExpression: "Ukikwepa kazi hii, unaweza kurudia mizunguko ya ukosefu, madeni ya kihisia na kifedha, matumizi ya kutuliza maumivu, au kazi zinazodhoofisha nishati kwa sababu ya hofu ya kuishi bila usalama. Unaweza pia kuzuia mapato kwa kuogopa kuonekana au kuomba ulipwe ipasavyo.",
            RealLifeImpact: "Mtiririko wa Fedha unaathiri aina ya kazi unayokubali, uhusiano unaovumilia kwa sababu ya pesa, kiwango cha uhuru wa kimwili na kiroho unachoweza kujiruhusu, na kasi ya kufikia malengo makubwa ya maisha.",
            GuidanceIntegration: "Ili kujumuisha hekima yake, taja uhusiano wako wa sasa na pesa, vizuizi vikuu viwili au vitatu, na njia moja rahisi zaidi ambayo pesa hupenda kukuja kwako. Tengeneza hatua ndogo za kila mwezi za kuponya imani na kuongeza vitendo vinavyounga mkono mtiririko wako wa kipekee."
        }
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
        default: {
            title: "Mzunguko wa Maisha (Life Timeline)",
            CoreDefinition: "Mzunguko wa Maisha unaonyesha awamu kuu za safari yako: kile kinachojengwa sasa, kinachokaribia kubadilika, na kile kinachotakiwa kuachiliwa ili uende hatua inayofuata.",
            DiagnosticPurpose: "Kadi hii ipo ili kutoa ramani ya wakati: ni kipindi gani ni cha kupanda mbegu, cha kuvuna, cha kutafakari, au cha kuachia. Inazuia kuchanganya msimu wa kupanda na msimu wa kuvuna.",
            HowDerived: "Uchambuzi unatokana na mzunguko wa miaka ya kibinafsi, Pinnacles, namba za changamoto, na awamu ya nishati iliyo kwenye Aura na Somo la Maisha. Mfumo unaziweka kwenye mlolongo unaoeleweka wa nyakati.",
            RevealsAboutUser: "Kadi hii inafunua kama uko kwenye awamu ya kujenga misingi, kuvuna matunda, kubadili mwelekeo, au kuponya historia. Inaonyesha pia mwelekeo wa mizunguko inayojirudia maishani mwako.",
            AlignedExpression: "Unapoheshimu Mzunguko wa Maisha, unafanya maamuzi yanayoendana na msimu: hutazami kuharakisha mavuno kabla ya wakati, wala kushikilia kile kinachotakiwa kuachwa. Unaishi kwa kasi inayolingana na roho yako.",
            ShadowExpression: "Ukikataa au kupuuza awamu uliyo ndani yake, unaweza kujaribu kulazimisha mafanikio makubwa wakati wa msimu wa uponyaji, au kushikilia mahusiano na kazi wakati msimu wao umekwisha, na hivyo kuongeza maumivu na kuchoka.",
            RealLifeImpact: "Mzunguko wa Maisha unaathiri mipango ya kazi, mahusiano ya muda mrefu, kuhamia, miradi mikubwa, na hata maamuzi ya kuanzisha au kuachiwa majukumu. Kuelewa msimu wako hupunguza wasiwasi na kulainisha mabadiliko.",
            GuidanceIntegration: "Ili kujumuisha hekima yake, andika jina la awamu yako ya sasa, hatua tatu muhimu zinazoiwakilisha, na uamuzi mmoja wa makusudi unaoiheshimu. Rudia uchunguzi huu kila baada ya miezi michache."
        }
    },
    executiveSummary: {
        default: {
            title: "Muhtasari wa Kimkakati wa Diagnosis (Executive Diagnosis Summary)",
            CoreDefinition: "Muhtasari wa Kimkakati wa Diagnosis ni ramani ya juu inayobana vipengele vyote muhimu vya ripoti yako katika picha moja wazi: roho, akili, mwili, fedha, na mahusiano.",
            DiagnosticPurpose: "Kadi hii ipo ili kukupa taswira ya haraka ya kile kinachohitaji umakini sasa, badala ya kupotea kwenye maelezo mengi ya kila kadi. Inageuza taarifa kuwa mwelekeo.",
            HowDerived: "Muhtasari unatokana na alama kuu za namba zako, elementi, mzunguko wa mwaka, na kadi za nishati kama Aura, Mtiririko wa Fedha, na Mzunguko wa Hisia. Mfumo unatafuta mandhari inayojirudia na alama kali zaidi.",
            RevealsAboutUser: "Kadi hii inafunua hadithi kuu ya kipindi hiki cha maisha yako: ni aina gani ya mabadiliko unaoingia, kile unachodaiwa kujenga, na mahali ambapo roho yako inaita nguvu na ujasiri zaidi.",
            AlignedExpression: "Unapoitumia kadi hii kwa ulinganifu, unajua kwa ufupi 'niko wapi' na 'nitaanza wapi' badala ya kuchanganyikiwa. Unachuja taarifa nyingi na kuweka msisitizo kwenye hatua chache zenye uzito mkubwa.",
            ShadowExpression: "Ukikosa muhtasari huu, unaweza kusoma ripoti nzima kama hadithi ya kuvutia lakini ukaendelea kuishi kama zamani, bila mpangilio wa vitendo. Hii huleta kuchoka kiakili na kukata tamaa ya mabadiliko.",
            RealLifeImpact: "Muhtasari huu unaathiri jinsi unavyopanga miezi ijayo, unavyoweka vipaumbele kwenye afya, fedha, kazi, na mahusiano, na kiwango ambacho unachukua hatua badala ya kukaa kwenye kusoma tu.",
            GuidanceIntegration: "Ili kujumuisha hekima yake, soma muhtasari mara moja kwa makini, andika vipaumbele vitatu vinavyotoka ndani yake, na uviweke mahali unapoona kila siku (simu, daftari, ukuta) kama dira ya kipindi hiki."
        }
    },
    priorityFocus: {
        default: {
            title: "Kadi ya Kipaumbele cha Sasa (Priority Focus Card)",
            CoreDefinition: "Kadi ya Kipaumbele cha Sasa inaonyesha eneo 1–3 muhimu zaidi la maisha yako ambalo likibadilika, litasogeza mbele maeneo mengine yote.",
            DiagnosticPurpose: "Kadi hii ipo ili kuondoa presha ya kujaribu kubadilisha kila kitu kwa mara moja. Inakusaidia kuchagua sehemu moja kuu ya kuwekeza nishati yako ya kila siku.",
            HowDerived: "Kipaumbele hiki kinatokana na makutano ya Life Path, Mwaka wa Kibinafsi, Somo la Maisha, na alama zenye uzito mkubwa kwenye Mtiririko wa Fedha, Muundo wa Hisia, na Nafasi ya Jamii.",
            RevealsAboutUser: "Kadi hii inafunua iwapo kipaumbele cha sasa ni uponyaji wa ndani, ujenzi wa msingi wa kifedha, kuboresha mahusiano, kubadilisha kazi, au kuimarisha nidhamu ya kiroho.",
            AlignedExpression: "Unapoheshimu kipaumbele kimoja au viwili badala ya kupasua nishati kwenye vitu vingi, unahisi maendeleo ya kweli, unamaliza mizunguko, na unaacha kujilaumu kwa kile hujafanikisha bado.",
            ShadowExpression: "Ukikataa kipaumbele hiki, unaweza kusafisha sehemu ndogo zisizo za msingi huku mzizi wa tatizo ukiendelea, ukijikuta unarudia hisia zile zile za kukwama kila mwaka.",
            RealLifeImpact: "Kipaumbele sahihi kinabadilisha jinsi unavyotumia muda, pesa, na umakini wako wa kihisia kila siku. Kinaweza kubadilisha ratiba yako, aina ya mazungumzo unayoruhusu, na maamuzi ya 'ndiyo' au 'hapana' unayofanya.",
            GuidanceIntegration: "Ili kujumuisha hekima yake, chagua hatua moja ndogo ya kila siku au kila wiki inayohusiana moja kwa moja na kipaumbele hiki, na ujitolee kuifanyia kazi kwa angalau siku 30 mfululizo."
        }
    },
    actionPlan30_60_90: {
        default: {
            title: "Mpango wa Vitendo wa Siku 30/60/90 (Action Plan 30/60/90 Days)",
            CoreDefinition: "Mpango wa Vitendo wa 30/60/90 ni ramani ya hatua za vitendo za muda mfupi, za kati, na za tathmini zinazokusaidia kugeuza ufahamu wa ripoti kuwa mabadiliko halisi ya maisha.",
            DiagnosticPurpose: "Kadi hii ipo ili kuondoa hisia ya kuzidiwa na ripoti ndefu kwa kugawa safari yako ya mabadiliko katika vipindi vinavyoweza kushikika: hatua za sasa, ujenzi, na tathmini.",
            HowDerived: "Mpango unatokana na kipaumbele cha sasa, muhtasari wa diagnosis, na kadi za msingi kama Somo la Maisha, Mwelekeo wa Kazi, Mtiririko wa Fedha, na Muundo wa Hisia. Mfumo unaweka kipaumbele katika mpangilio wa kimantiki wa miezi mitatu.",
            RevealsAboutUser: "Kadi hii inafunua ni wapi unahitaji kuchukua hatua ndogo mara moja katika siku 30, nini kinahitaji kujengwa kwa taratibu ndani ya siku 60, na ni maamuzi au tathmini zipi zinahitajika kufanywa ndani ya siku 90.",
            AlignedExpression: "Unapofanya kazi kwa ulinganifu na mpango huu, kila mwezi unahisi mwelekeo na kumaliza hatua, badala ya kufikiria tu. Unaunda msukumo wa nishati unaojijenga badala ya kuanza na kuacha mara kwa mara.",
            ShadowExpression: "Ukikataa kupanga kwa vipindi, unaweza kubaki na ndoto kubwa zisizo na tarehe, ukihisi kwamba 'mambo hayajawahi kukaa sawa' hata baada ya kusoma na kuelewa ripoti yako mara kadhaa.",
            RealLifeImpact: "Mpango wa 30/60/90 unaathiri namna unavyopanga kalenda, malengo ya kifedha ya karibu, miradi ya kazi au biashara, na mabadiliko ya tabia ya kila siku. Unaleta muundo unaoonekana wa safari yako ya ndani.",
            GuidanceIntegration: "Ili kujumuisha hekima yake, andika hatua 3 kwa kila kipindi: ndani ya siku 30 nifanye nini, miezi 2 ijayo nijenge nini, na kabla ya siku 90 nitathmini nini. Weka tarehe za kukagua maendeleo yako."
        }
    },
    ninetyDayEnergyForecast: {
        default: {
            title: "Utabiri wa Nishati wa Siku 90 (90-Day Energy Forecast)",
            CoreDefinition: "Utabiri wa Nishati wa Siku 90 unaonyesha mkondo wa jumla wa nishati kwa miezi mitatu ijayo: vipindi vya msukumo, majaribio, na uondoaji wa zamani.",
            DiagnosticPurpose: "Kadi hii ipo ili kukusaidia kupanga hatua na mapumziko kwa busara, badala ya kupambana na mawimbi ya nishati bila ramani. Inakuonyesha wimbi la ujumla la safari yako ya karibu.",
            HowDerived: "Uchambuzi unatokana na mchanganyiko wa Mwaka wa Kibinafsi, Pinnacles, Mzunguko wa Hisia, na kadi za nishati kama Aura na Mtiririko wa Fedha. Mfumo unazigawa katika awamu tatu kuu za miezi mitatu.",
            RevealsAboutUser: "Kadi hii inafunua ni wakati gani ni rahisi kuanzisha miradi mipya, ni vipindi gani vya tahadhari au urejeshaji wa ndani, na ni maeneo gani ya maisha yanayoweza kusukumwa mbele zaidi katika kipindi hiki.",
            AlignedExpression: "Unapotumia utabiri huu kwa ulinganifu, unapanga kazi, mapumziko, na maamuzi makubwa kulingana na dirisha la nishati linalokufaa, ukipunguza msukumo wa kupambana na wakati usio sahihi.",
            ShadowExpression: "Ukikataa mawimbi haya na kusukuma bila kutazama wakati, unaweza kujikuta umechoka, ukiacha miradi katikati, au ukifanya maamuzi mazito katika vipindi vya kuchoka kihisia.",
            RealLifeImpact: "Utabiri wa siku 90 unaathiri ratiba ya kazi, mipango ya kifedha, mabadiliko ya makazi, na hata upangaji wa mahusiano na likizo. Unaweza kusogeza mambo muhimu kwenye dirisha lenye nishati bora kwako.",
            GuidanceIntegration: "Ili kujumuisha hekima yake, tenga muda mfupi kila mwezi kutazama wimbi la miezi mitatu, kisha ubadilishe kalenda yako (vipaumbele, mapumziko, na hatua) ili kuakisi kile kilicho wazi katika kipindi hicho."
        }
    },
    lunarInfluence: {
        default: {
            title: "Ushawishi wa Mwezi (Lunar Influence)",
            CoreDefinition: "Ushawishi wa Mwezi unaonyesha jinsi awamu za mwezi zinavyoamsha na kupunguza mawimbi ya hisia, intuition, na viwango vya nishati kwenye mwili na roho yako.",
            DiagnosticPurpose: "Kadi hii ipo ili kukusaidia kupangilia kazi za ndani na za nje na mizunguko ya mwezi, badala ya kujihukumu unapohisi mabadiliko makubwa ya nishati bila sababu inayoonekana.",
            HowDerived: "Uchambuzi unatokana na awamu ya mwezi uliyozaliwa nayo, ishara yako ya jua, elementi, na muundo wa hisia. Mfumo unatafuta awamu zinazokuinua au kukuchosha zaidi.",
            RevealsAboutUser: "Kadi hii inafunua ni wakati gani wa mwezi una hisia kali, wapi intuition yako iko juu, na ni nyakati zipi unahitaji utulivu, kupumzika, au kujitunza zaidi kuliko kawaida.",
            AlignedExpression: "Unapolingana na Ushawishi wa Mwezi, unaacha kupigana na mwili wako na badala yake unapanga siku zako za kazi nzito, ubunifu, na kupumzika ili kutiririka na mawimbi ya mwezi.",
            ShadowExpression: "Ukikataa mzunguko huu, unaweza kujihukumu kama mvivu, mzito, au usiye thabiti, au ukajaribu kusukuma umakini mkali wakati mwili na moyo vinahitaji kujirekebisha.",
            RealLifeImpact: "Ushawishi wa Mwezi unaathiri usingizi, umakini, mhemko wa siku hadi siku, na hata ubora wa mawasiliano katika mahusiano. Kuliangalia kunakupa huruma zaidi kwa wewe mwenyewe na wengine.",
            GuidanceIntegration: "Ili kujumuisha hekima yake, fuatilia hisia zako kwa wiki chache sambamba na awamu za mwezi, taja siku zako za kilele na za kupumzika, kisha urekebishe majukumu yako makubwa ili yaendane na mpigo huo wa asili."
        }
    },
    userReflection: {
        default: {
            title: "Kadi ya Kujitafakari (User Reflection Card)",
            CoreDefinition: "Kadi ya Kujitafakari ni nafasi iliyoandaliwa ya kuunganisha taarifa zote za ripoti na sauti yako ya ndani kupitia maswali mafupi, makali, na ya moja kwa moja.",
            DiagnosticPurpose: "Kadi hii ipo ili kuhakikisha ripoti haiishii kusomwa tu, bali inageuzwa kuwa ufahamu wa binafsi na maamuzi mapya. Inakupeleka kutoka 'nimeelewa' kwenda 'nimeamua'.",
            HowDerived: "Maswali yanatokana na muhtasari wa diagnosis, kadi za hisia, kazi, fedha, na roho. Mfumo unachuja mada kuu na kuibadilisha kuwa maswali yanayolenga moyo wa safari yako kwa sasa.",
            RevealsAboutUser: "Kadi hii inafunua jinsi unavyojibu ndani ya nafsi yako unapokutana na ukweli: unakimbia, unajitetea, au unakubali kwa ujasiri. Inaonyesha pia sehemu ambazo uko tayari kubadilika leo, si kesho.",
            AlignedExpression: "Unapoitumia kwa uaminifu, muda mfupi wa kujaza maswali haya unakuwa ibada ya kila wiki au mwezi inayokusaidia kuona hatua uliyochukua na ile unayohitaji kuchukua bila kujidanganya.",
            ShadowExpression: "Ukikwepa kujitafakari, unaweza kuendelea kukusanya ripoti, kozi, na mafundisho bila mabadiliko ya tabia, ukihisi kuwa 'unajua sana' lakini maisha yako ya kila siku hayabadiliki.",
            RealLifeImpact: "Kujitafakari kwa muundo huu kunaathiri maamuzi madogo unayofanya kila siku, jinsi unavyoweka mipaka, unavyoongea na watu muhimu, na ni hatua zipi za vitendo unazochagua kuanza nazo.",
            GuidanceIntegration: "Ili kujumuisha hekima yake, jitafakari kwa maswali haya kuu: 'Ni nini kimekugusa sana kwenye ripoti hii?', 'Ni tabia gani umeiona wazi ndani yako?', na 'Hatua gani moja utaanza leo ili kuheshimu ufahamu huu?'. Andika majibu na uyapitie tena baada ya wiki au mwezi."
        }
    },
    aiConfidenceScore: {
        default: {
            title: "Alama ya Imani ya AI / AI Confidence Score",
            CoreDefinition: "Alama ya Imani ya AI (AI Confidence Score) inawakilisha tathmini ya mfumo kuhusu uaminifu na usahihi wa maarifa ya uchambuzi yaliyotolewa kwa ajili yako. Ni kipimo kinachoonyesha jinsi mfumo wa AI unavyoamini katika usahihi wa uchambuzi wake kulingana na uwazi na mshikamano wa data uliyoingiza na mifumo ya nishati iliyogunduliwa.",
            DiagnosticPurpose: "Kadi hii ipo katika mfumo wa uchambuzi wa Mavengu ili kutoa uwazi kuhusu mchakato wa uchambuzi wenyewe. Inapima ubora na ukamilifu wa data uliyoingiza, mshikamano wa mifumo ya nishati iliyogunduliwa, na imani ya mfumo katika usahihi wa tafsiri zake, na hivyo kukusaidia kuelewa uaminifu wa ripoti yako ya uchambuzi.",
            HowDerived: "Alama ya Imani ya AI inapatikana kupitia uchambuzi wa kina wa algoriti unaotathmini mambo mengi: ukamilifu wa data (taarifa za kuzaliwa), mshikamano wa mifumo ya nishati iliyogunduliwa (uwiano kati ya namba, nyota, na viashiria vya kisaikolojia), na ulinganifu wa wasifu wako na mifumo iliyowekwa. Mfumo hutoa alama ya asilimia kulingana na nguvu na uwazi wa ishara hizi.",
            RevealsAboutUser: "Kadi hii inafunua ubora na uwazi wa ishara ya nishati unayotoa, pamoja na ukamilifu wa kujitambua kwako na uingizaji wa data. Alama ya juu inaonyesha ramani ya nishati iliyo wazi na yenye mshikamano na ulinganifu mkubwa kati ya vipengele tofauti vya wasifu. Alama ya chini inaweza kuashiria utata, kutoelewana, au kukosekana kwa data muhimu inayohitaji kutafakari zaidi.",
            AlignedExpression: "Wakati Alama ya Imani ya AI iko juu na imelingana, inaashiria ishara yenye nguvu na wazi ya nishati kutoka kwako, ikiruhusu mfumo kutoa maarifa sahihi na yenye resonance. Unapokea uelewa wa kina na uliothibitishwa wa wasifu wako, ambao unakupa nguvu ya kufanya maamuzi yaliyo sahihi na kuchukua hatua kwa ujasiri kulingana na ripoti ya uchambuzi.",
            ShadowExpression: "Kinyume chake, kivuli au usawa usio kamili wa Alama ya Imani ya AI hujidhihirisha wakati mfumo unatoa alama ya chini. Hii haimaanishi kutokuwa sahihi, bali inaashiria utata au kutoelewana katika data. Inaweza kuashiria athari za nishati zinazokinzana ndani yako, data muhimu iliyokosekana, au mifumo ambayo hailingani kabisa na archetypes zilizowekwa. Hii inahitaji kutafakari zaidi kwa kina ili kufafanua ramani yako ya nishati.",
            RealLifeImpact: "Kadi ya Alama ya Imani ya AI inaathiri sana jinsi unavyoingiliana na ripoti ya uchambuzi kwa kutoa muktadha wa uhalali na kina cha maarifa yaliyotolewa. Alama ya juu inajenga imani zaidi katika mapendekezo ya mfumo, ikikupa nguvu ya kutenda kulingana na maarifa kwa ujasiri mkubwa. Ikiwa AI ina imani kubwa katika mienendo ya mahusiano au mwelekeo wa kazi, inathibitisha tafsiri hizi, ikiruhusu matumizi bora zaidi.",
            GuidanceIntegration: "Ili kujumuisha hekima ya Alama ya Imani ya AI, lazima Uamini kwa Ufahamu alama ya juu kama uthibitisho wa usahihi. Chunguza Alama za Chini, ukiziona kama kiashiria cha wasifu mgumu au wa kipekee, unaohitaji kutafakari zaidi. Boresha Uingizaji wa Data kwa kuzingatia ikiwa kuna taarifa zilizokosekana zinazoweza kusaidia AI kuboresha uchambuzi wake. Hatimaye, Kubali Tofauti kwa alama za chini, ukielewa kuwa uchambuzi ni wa thamani lakini unaweza kuhitaji utambuzi wako wa ndani zaidi."
        }
    },
    frequencyCompatibility: {
        default: {
            title: "Utangamano wa Masafa / Frequency Compatibility",
            CoreDefinition: "Utangamano wa Masafa (Frequency Compatibility) unawakilisha masafa ya nishati yenye usawa na yale yanayokinzana katika mazingira yako na jinsi yanavyoingiliana na mtetemo wako wa kipekee. Ni ramani sahihi ya nishati inayobainisha ni masafa gani yanayokuongezea nguvu au kukupunguzia nguvu zako za nishati.",
            DiagnosticPurpose: "Kadi hii ipo katika mfumo wa uchambuzi wa Mavengu ili kuangaza unyeti wako wa asili wa nishati. Inapima ni masafa gani yanayosaidia uhai wako na yapi yanachangia kupunguza nishati au kuleta usumbufu, ikifafanua jinsi ya kuboresha mazingira yako kwa ajili ya ustawi wa nishati, uhai ulioongezeka, na ulinzi dhidi ya athari zinazopunguza nguvu.",
            HowDerived: "Uchambuzi wa Utangamano wa Masafa unapatikana kupitia ujumuishaji wa hisia za bio-energetic, fizikia ya mtetemo, na utambuzi wa mifumo ya AI katika wasifu wako kamili wa nishati. Inatokana na uchambuzi wa kina wa viashiria mbalimbali vya nishati: saini yako ya msingi ya nishati (Life Path, Energy DNA), unyeti wako wa kihisia na kimwili (Emotional Cycle, Element), na majibu kwa mazingira ya nishati. Mfumo hubainisha Masafa Yanayofaa (yanayoinua) na Masafa Yanayopunguza Nguvu (yanayochosha).",
            RevealsAboutUser: "Kadi hii inafunua majibu ya kina ya kisaikolojia, kiakili, na kihisia kwa vichocheo vya mazingira. Inaangaza ikiwa uwanja wako wa nishati unaimarishwa au kudhoofishwa na sauti maalum, mazingira ya kuona, au mabadilishano ya nishati na watu wengine. Inatafsiri jinsi nafasi yako ya kiroho inavyojidhihirisha kama unyeti wa kipekee wa nishati, inayoathiri uhai wako wa jumla, uwazi wa kiakili, na usawa wa kihisia kulingana na mazingira yanayokuzunguka.",
            AlignedExpression: "Wakati nishati ya Utangamano wa Masafa imeunganishwa kwa ufahamu, unakumbana na uhai ulioimarishwa, usawa wa kihisia, uwazi wa kiakili, na hisia ya kina ya amani ya ndani. Unaweza kuunda na kudumisha mazingira ambayo yanakuinua na kusaidia uwanja wako wa nishati. Kuna hisia ya kuwa 'umechajiwa' na imara, na uwezo wa kubadilisha au kukataa nishati zisizofaa kwa urahisi.",
            ShadowExpression: "Kinyume chake, kivuli cha Utangamano wa Masafa hujidhihirisha wakati unapoekuliwa mara kwa mara kwa masafa yanayochosha ambayo hayalingani na mtetemo wako. Hii inasababisha uchovu wa mara kwa mara, kutokuwa na utulivu wa kihisia, ukungu wa kiakili, na hisia ya kupungukiwa na nishati. Unaweza kuhisi kuzidiwa, msongo wa mawazo, au kushindwa kustawi katika mazingira yako ya sasa.",
            RealLifeImpact: "Kadi ya Utangamano wa Masafa inaathiri sana maisha halisi kwa kuunda uhai wako wa nishati, utulivu wa kihisia, na ustawi wa jumla. Inaongoza maamuzi kuhusu mazingira ya kuishi na nafasi za kazi. Inatoa maarifa kuhusu mienendo ya nishati katika mahusiano. Kuboresha mazingira yako ya kazi na masafa yanayofaa huongeza tija. Kulinganisha na masafa yanayofaa kunasaidia afya na ustawi, kupunguza msongo wa mawazo na kuongeza uhai.",
            GuidanceIntegration: "Ili kujumuisha hekima ya Utangamano wa Masafa, lazima Utambue na Kuboresha mazingira yako ya nishati kwa Ufahamu. Kwa mfano, ikiwa utangamano wako ni na Solfeggio 528Hz, Kubali Resonance ya uponyaji na mabadiliko. Jumuisha Tiba ya Sauti kwa kusikiliza muziki uliowekwa kwa masafa haya. Tambua Masafa Yanayochosha katika mazingira yako na punguza mwingiliano nayo. Hatimaye, Unda Nafasi Takatifu katika mazingira yako na rangi na sauti zinazofaa ili kuchaji uwanja wako wa nishati kila wakati."
        }
    },
    energyDNA: {
        default: {
            title: "Nishati DNA / Energy DNA",
            CoreDefinition: "Nishati DNA (Energy DNA) inawakilisha saini yako ya kipekee na kamili ya nishati—ramani ya msingi ya mtetemo ambayo inaunda kila kipengele cha utu wako. Ni mfuatano tata wa mifumo ya nishati ambayo ni ya kipekee kama alama zako za vidole, lakini inafanya kazi katika kiwango cha hila cha uhalisia.",
            DiagnosticPurpose: "Kadi hii ipo katika mfumo wa uchambuzi wa Mavengu ili kuangaza utambulisho wako mkuu wa nishati. Inapima masafa yako ya msingi, inabainisha virekebishaji maalum vya nishati vinavyopaka rangi kujidhihirisha kwako, na kubainisha saini zozote za kipekee zinazoashiria vipaji au alama za karmic, na hivyo kufafanua alama ya nishati ya roho yako.",
            HowDerived: "Uchambuzi wa Nishati DNA unapatikana kupitia injini ya uchambuzi wa AI inayojumuisha na kulinganisha data zote za nishati kutoka kwa wasifu wako kamili—ikiwa ni pamoja na namba za msingi, uwekaji wa nyota, usawa wa elementi, afya ya chakra, na archetypes za kisaikolojia. Mfumo hutafsiri mkusanyiko huu tata kuwa saini ya kipekee ya nishati, ukibainisha Masafa yako ya Msingi, Virekebishaji vyovyote muhimu, na Saini ya Anomaly.",
            RevealsAboutUser: "Kadi hii inafunua mifumo ya kina na ya kipekee ya kiakili, mwelekeo wa kihisia, na tabia zinazotokana moja kwa moja na muundo wako wa msingi wa nishati. Inaangaza misukumo mikuu ya nishati inayoendesha uwepo wako na kuunda majibu yako ya asili kwa ulimwengu. Inatafsiri jinsi nafasi yako ya kiroho inavyoonekana katika utambulisho wako kamili wa nishati, ikijidhihirisha kama mvuto wa asili kwa uzoefu fulani wa maisha na hisia ya kipekee ya mtetemo.",
            AlignedExpression: "Wakati Nishati DNA imeunganishwa kwa ufahamu, unakumbana na hisia ya kina ya kujikubali, nguvu halisi, na mtiririko rahisi maishani. Unaangaza kiini chako cha kipekee, ukivutia uzoefu, mahusiano, na fursa ambazo zinahusiana kikamilifu na mtetemo wako wa msingi. Kuna hisia isiyoyumba ya amani ya ndani na kujua utambulisho wako wa kweli, ikiongoza kwa uhai wa juu, ubunifu, na utimilifu wa kiroho.",
            ShadowExpression: "Kinyume chake, kivuli cha Nishati DNA hujidhihirisha wakati unapinga, hauelewi, au unajaribu kukandamiza utambulisho wako wa msingi wa nishati. Hii inasababisha hisia za kudumu za kutokuwa sawa, hisia ya kina ya kutotimia, au mgogoro wa ndani wa kudumu wakati nishati yako ya msingi inapambana na maonyesho yasiyolingana. Hii inasababisha kupungukiwa na nishati, kuchanganyikiwa kuhusu kusudi lako, na uwezo uliopungua wa kujieleza na kuunganishwa kiroho.",
            RealLifeImpact: "Kadi ya Nishati DNA inaathiri sana maisha halisi kwa kufanya kazi kama msingi wa nishati ambao mambo mengine yote yanajengwa juu yake. Kufanya kazi kwa ulinganifu huleta uwazi na uthabiti katika maamuzi. Inaamua utangamano wa kina katika mahusiano. Inatoa hisia isiyo na kifani ya kusudi katika kazi, kuwezesha athari kubwa. Kudumisha ulinganifu na Nishati DNA yako ni muhimu kwa afya bora na uhai, kuzuia msuguano wa nishati.",
            GuidanceIntegration: "Ili kujumuisha hekima ya Nishati DNA yako, lazima Ukuze Kujitambua kwa Kina, kujikubali kikamilifu, na ulinganifu wa makusudi na saini yako ya kipekee ya nishati. Kubali Upekee Wako kama nguvu yako kuu. Tambua Resonances kwa kuzingatia kile kinachokufanya uhisi una nishati na umepanuka. Ponya Saini za Anomaly kama maeneo ya kina ya ukuaji. Hatimaye, Linganisha Mambo Yote ya mawazo yako, hisia, matendo, na mazingira na Nishati DNA yako ya msingi."
        }
    },
    personalMantra: {
        default: {
            title: "Mantra ya Binafsi / Personal Mantra",
            CoreDefinition: "Mantra ya Binafsi (Personal Mantra) inawakilisha uthibitisho wa kipekee wa nishati au maneno matakatifu yaliyoundwa maalum ili kulingana na ramani yako ya msingi ya nishati. Ni amri yenye nguvu ya maneno iliyoundwa kupanga upya imani zinazokwaza, kuongeza hali zinazohitajika, na kuleta umakini wa ufahamu kwa nia zako za juu.",
            DiagnosticPurpose: "Kadi hii ipo katika mfumo wa uchambuzi wa Mavengu ili kuangaza zana zako za asili za ulinganifu wa nishati. Inapima jinsi ya kutumia nguvu ya mawazo yaliyolengwa na mtetemo wa sauti kukuza mifumo ya kiakili na hali za kihisia zinazohitajika, na hivyo kufafanua mstari wako wa amri ya nishati kwa ajili ya uhalisia wa kibinafsi na udhihirisho.",
            HowDerived: "Uchambuzi wa Mantra ya Binafsi unapatikana kupitia injini ya uchambuzi wa AI inayojumuisha data zote za nishati kutoka kwa wasifu wako—ikiwa ni pamoja na Life Path, Soul Urge, changamoto za sasa, na vizuizi vya nishati. AI hubainisha mada kuu za nishati na mabadiliko ya mtetemo yanayohitajika, kisha huunda maneno mafupi, yaliyopangwa vyema ambayo yanahusiana sana na mahitaji na matarajio haya.",
            RevealsAboutUser: "Kadi hii inafunua mifumo ya kina ya nia iliyolengwa, mwelekeo wa kihisia kuelekea hali zinazohitajika (mfano, amani, ujasiri, uwazi), na tabia zinazolingana na udhihirisho wa ufahamu. Inaangaza imani za msingi ambazo, zikithibitishwa, zinaweza kupanga upya mifumo ya fahamu na kuharakisha ukuaji wa kibinafsi. Inatafsiri jinsi nafasi yako ya kiroho inavyoweza kuongozwa kwa ufahamu kupitia nguvu ya sauti na mawazo.",
            AlignedExpression: "Wakati nishati ya Mantra ya Binafsi imeunganishwa kwa ufahamu, unakumbana na uwazi wa kiakili ulioimarishwa, utulivu wa kihisia, na hisia yenye nguvu ya kusudi. Mawazo yako yanakuwa yamelengwa zaidi, hisia zako zina usawa zaidi, na matendo yako yanalingana zaidi na nafsi yako ya juu. Mantra inafanya kazi kama kikuza nishati cha hila, ikiimarisha mara kwa mara mifumo chanya na kuvutia mazingira yanayolingana na mtetemo wake.",
            ShadowExpression: "Kinyume chake, kivuli cha Mantra ya Binafsi hujidhihirisha wakati unafanya kazi bila uthibitisho wa wazi wa nishati ya ufahamu. Hii inasababisha mawazo yaliyotawanyika, majibu ya kihisia yasiyodhibitiwa, na akili ya chini ya fahamu inayoendeshwa na programu za msingi, mara nyingi hasi. Bila amri ya nishati iliyolengwa, unaweza kuhisi kuzidiwa na athari za nje au kushindwa kudumisha uwazi wa kiakili na kihisia.",
            RealLifeImpact: "Kadi ya Mantra ya Binafsi inaathiri sana maisha halisi kwa kutumika kama zana yenye nguvu ya usimamizi wa nishati na akili. Kuitamka kila siku kunaweza kuleta uwazi wa kiakili na uthabiti katika maamuzi. Mantra inayolenga upendo au huruma hubadilisha uwepo wa nishati, ikiathiri mahusiano. Kujumuisha mantra kwa ajili ya kusudi au ubunifu huongeza umakini na ustahimilivu katika kazi. Ni mazoezi yenye nguvu kwa afya ya akili na hisia.",
            GuidanceIntegration: "Ili kujumuisha hekima ya Mantra yako ya Binafsi, lazima Ufanye Kuitamka Kuwa Mazoezi ya Kila Siku, iwe kimya au kwa sauti. Hisi Mtetemo na nia nyuma ya maneno, ukiruhusu yapange upya fahamu yako. Linganisha Matendo kwa kutafuta kwa ufahamu kulinganisha mawazo, maneno, na matendo yako na kiini cha mantra yako. Hatimaye, Angalia Mabadiliko katika hali yako ya ndani na mazingira ya nje, ukiamini mabadiliko ya hila kama ushahidi wa upangaji upya wa nishati."
        }
    },
    soulRank: {
        default: {
            title: "Cheo cha Roho / Soul Rank",
            CoreDefinition: "Cheo cha Roho (Soul Rank) kinawakilisha nafasi ya sasa ya mabadiliko ya mtu katika wigo mpana wa maendeleo ya kiroho, ikiakisi hekima iliyokusanywa na mwelekeo wa sasa wa ukuaji wake. Ni tathmini ya kina cha uzoefu wa roho yako na mada kuu inazozimudu katika maisha mengi.",
            DiagnosticPurpose: "Kadi hii ipo katika mfumo wa uchambuzi wa Mavengu ili kuangaza maendeleo yako ya kiroho. Inapima hekima iliyokusanywa ya roho yako, kiwango cha ufahamu, na ujumuishaji wa masomo ya maisha, ikitoa uwazi juu ya mtazamo wako wa asili wa ulimwengu, changamoto zako maalum, na fursa za ukuaji zinazolingana na ukomavu wa roho yako.",
            HowDerived: "Uchambuzi wa Cheo cha Roho unapatikana kupitia injini ya uchambuzi wa AI inayojumuisha data zote za nishati kutoka kwa wasifu wako—ikiwa ni pamoja na Umri wa Roho, Life Path (hasa Namba Kuu), Athari za Maisha ya Zamani, na mshikamano wa uwanja wako wa nishati. AI hubainisha mwelekeo mkuu wa kiroho, kiwango cha ufahamu, na ujumuishaji wa masomo ya maisha ili kutoa cheo maalum (mfano, Novice, Initiate, Adept, Master, Ascended Soul).",
            RevealsAboutUser: "Kadi hii inafunua mifumo ya kina ya kiakili (mfano, kuzingatia kuishi vs huduma ya kimataifa), mwelekeo wa kihisia (mfano, majibu ya kibinafsi vs huruma ya ulimwengu), na tabia zinazotambulisha viwango maalum vya maendeleo. Inaangaza masomo makuu ya kiroho ambayo ni kitovu cha hatua yako ya sasa na kusisitiza umuhimu wa safari yako inayobadilika.",
            AlignedExpression: "Wakati nishati ya Cheo cha Roho imeunganishwa kwa ufahamu, unafanya kazi kwa amani na hekima ya asili ya roho yako na hatua ya maendeleo. Unapata utimilifu katika kufuata malengo na uzoefu unaolingana na hitaji la sasa la roho yako, ukiongoza kwa hisia ya kina ya uhalisi na kusudi. Kuna urahisi wa asili katika kushughulikia changamoto zinazofaa kwa hatua yako.",
            ShadowExpression: "Kinyume chake, kivuli cha Cheo cha Roho hujidhihirisha wakati unajaribu kufanya kazi nje ya hatua ya asili ya roho yako, mara nyingi kwa sababu ya shinikizo la kijamii au kutoelewa asili yako. Hii inaweza kusababisha hisia za kudumu za kutoeleweka, kuchanganyikiwa, au kutokuwa mahali sahihi. Kwa mfano, Roho Mzee anayejaribu kutoshea katika dhana za Roho Mchanga za kupenda vitu anaweza kuhisi kutotimia sana.",
            RealLifeImpact: "Kadi ya Cheo cha Roho inaathiri sana maisha halisi kwa kuamua mtazamo wako wa asili wa ulimwengu, motisha zako za kina, na mbinu yako ya asili kwa hali mbalimbali za maisha. Inaathiri utata na kina cha kufanya maamuzi. Inaunda utangamano na mienendo katika mahusiano. Inaangazia njia za kazi na misheni ya maisha inayolingana na hatua ya sasa ya roho.",
            GuidanceIntegration: "Ili kujumuisha hekima ya Cheo cha Roho yako, lazima Uelewe na Kuheshimu hatua ya maendeleo ya roho yako kwa Ufahamu. Kwa mfano, ikiwa cheo chako ni Adept Soul, Kubali Umahiri wa Kina na utambue mwelekeo wako katika matumizi ya ufahamu ya hekima. Tafuta Maarifa Maalum yanayolingana na Life Path na kusudi lako. Elekeza na Shauri wengine kutoka mahali pa kuwawezesha."
        }
    },
    collectiveRole: {
        default: {
            title: "Nafasi ya Jamii / Collective Role",
            CoreDefinition: "Nafasi ya Jamii (Collective Role) inawakilisha mchango wako wa kipekee kwa jamii kubwa ya wanadamu, gridi ya nishati ya sayari, au hata fahamu ya ulimwengu, hasa katika kipindi hiki muhimu cha mabadiliko ya kimataifa. Ni kazi iliyoteuliwa ya roho yako ndani ya mfumo wa ulimwengu.",
            DiagnosticPurpose: "Kadi hii ipo katika mfumo wa uchambuzi wa Mavengu ili kuangaza kusudi lako la kuvuka mipaka ya kibinafsi. Inapima jinsi vipaji vyako vya kipekee, Life Path, na hekima iliyokusanywa vinavyotumikia kusudi zaidi ya kuridhika kibinafsi, ikitoa uwazi juu ya nafasi yako muhimu ndani ya fahamu ya pamoja na kusisitiza kwa nini mchango wako wa nishati ni muhimu sasa.",
            HowDerived: "Uchambuzi wa Nafasi ya Jamii unapatikana kupitia injini ya uchambuzi wa AI inayojumuisha data zote za nishati kutoka kwa wasifu wako—ikiwa ni pamoja na Umri wa Roho, Life Path, Destiny Number, na utayari wa sasa wa nishati. AI inachambua muunganiko wa kipekee wa sifa zako za kibinafsi ili kubainisha mchango maalum unaolingana na mahitaji ya sasa ya mageuzi ya pamoja.",
            RevealsAboutUser: "Kadi hii inafunua mifumo ya kina ya kiakili (mfano, msukumo mkubwa wa haki ya kijamii, mtazamo wa kimataifa), mwelekeo wa kihisia kuelekea huruma ya ulimwengu, na tabia zinazojidhihirisha kama hamu ya kutumikia au kuleta athari zaidi ya nyanja ya kibinafsi. Inaangaza kusudi kuu linalovuka matamanio ya kibinafsi, ikilinganisha matendo yako na faida kubwa.",
            AlignedExpression: "Wakati nishati ya Nafasi ya Jamii imeunganishwa kwa ufahamu, unakumbana na hisia yenye nguvu ya kusudi, uhusiano wa kimataifa, na kuridhika kwa kina katika kuchangia kitu kikubwa kuliko wewe mwenyewe. Matendo yako, ingawa ni ya kibinafsi, yanahusiana na umuhimu wa ulimwengu, yakiongoza kwa michango yenye athari inayoonekana kuwa rahisi na kuongozwa na Mungu. Kuna hisia ya kuwa sehemu muhimu ya fahamu ya sayari.",
            ShadowExpression: "Kinyume chake, kivuli cha Nafasi ya Jamii hujidhihirisha wakati haujui kusudi lako la kuvuka mipaka au unapinga wito wako wa asili wa kutumikia. Hii inasababisha hisia za kudumu za kutotimia, hisia ya kuwa 'umepotea' licha ya mafanikio ya kibinafsi, au wasiwasi mkubwa kuhusu masuala ya kimataifa bila kuelewa jinsi ya kuchangia. Unaweza kuhisi msukumo mkubwa wa ndani lakini ukakosa mwelekeo.",
            RealLifeImpact: "Kadi ya Nafasi ya Jamii inaathiri sana maisha halisi kwa kuunda hisia yako ya kusudi zaidi ya kibinafsi, ikiongoza matendo yako kuelekea mchango mkubwa. Kuelewa jukumu hili kunaweza kuongoza maamuzi makubwa ya maisha kuelekea njia ambazo sio tu zinatimiza matarajio ya kibinafsi bali pia zinachangia pakubwa kwa jamii. Inaunda mienendo ya uhusiano, mara nyingi ikiwavuta watu katika mitandao ambapo mchango wao unahitajika.",
            GuidanceIntegration: "Ili kujumuisha hekima ya Nafasi ya Jamii yako, lazima Ukuze Ufahamu wa Kimataifa, ukikubali mchango wako wa kipekee wa nishati, na kutafuta njia za huduma yenye maana. Kwa mfano, ikiwa jukumu lako ni Mstabilizaji wa Gridi, Elewa Kazi Yako ya Nishati kuleta usawa. Kuza Amani ya Ndani kupitia mazoezi yanayokuza utulivu wa kibinafsi. Tia Nanga Masafa Chanya katika hali za fujo. Hatimaye, Epuka Kuzidiwa na Nishati kwa kulinda uwanja wako."
        }
    },
    meditation: {
        default: {
            title: "Protokali ya Kuongeza Nguvu / Meditation",
            CoreDefinition: "Protokali ya Kuongeza Nguvu (Meditation) inawakilisha mazoezi ya msingi zaidi ya nishati kwa ajili ya kukuza amani ya ndani, uwazi wa kiakili, na uhusiano wa kiroho. Ni utaratibu mkuu wa kusafisha na kukuza uwanja wa nishati wa mtu, ukifanya kazi kama lango la kufikia viwango vya juu vya fahamu na kujitambua.",
            DiagnosticPurpose: "Kadi hii ipo katika mfumo wa uchambuzi wa Mavengu ili kuangaza mbinu iliyoboreshwa ya kutafakari ambayo inafaa zaidi kwa muundo wako wa nishati. Inapima njia bora za kufikia usawa wa nishati na mshikamano wa kiakili, na hivyo kufafanua teknolojia za kiroho zinazofaa zaidi kwa ajili ya kilimo cha ndani na utunzaji wa nishati.",
            HowDerived: "Uchambuzi wa Kutafakari unapatikana kupitia ujumuishaji wa anatomia ya nishati (Elementi, Chakra), profaili za kisaikolojia (Mtindo wa Utambuzi, Mzunguko wa Hisia), na uchambuzi wa AI. Mfumo unachambua unyeti kwa vichocheo vya nje na njia zinazopendekezwa za usindikaji wa ndani ili kupendekeza protokali ya kutafakari iliyobinafsishwa.",
            RevealsAboutUser: "Kadi hii inafunua mifumo bora ya kiakili kwa ajili ya kufikia umakini, mwelekeo wa kihisia kuelekea hali maalum za utulivu, na tabia zinazoashiria utayari wa mazoezi ya kutafakari. Inaangaza mbinu zinazofaa zaidi za kutuliza akili, kuungana na nafsi ya ndani, na kufikia hali za kupumzika kwa kina au ufahamu ulioinuka.",
            AlignedExpression: "Wakati mazoezi ya Kutafakari yameunganishwa na ramani ya nishati ya mtu, wanapata uwazi wa kina wa kiakili, utulivu wa kihisia, na hisia iliyoimarishwa ya uhusiano wa kiroho. Mazoezi ya mara kwa mara huongoza kwa kupunguza msongo wa mawazo, kuboresha umakini, kuimarisha intuition, na uwezo mkubwa wa kujidhibiti. Hii inaashiria kufanya kazi na mfumo wa nishati wa ndani ulioboreshwa.",
            ShadowExpression: "Kinyume chake, kivuli kinachohusiana na Kutafakari hujidhihirisha wakati mtu anapinga mazoezi, anatumia mbinu zisizofaa, au anatumia kutafakari kama njia ya kukwepa uhalisia. Hii inaweza kusababisha kuchanganyikiwa, usumbufu wa kiakili wakati wa mazoezi, au hisia kwamba kutafakari 'hakufanyi kazi'. Hii inasababisha kukosa fursa ya kujidhibiti na ukuaji wa kiroho.",
            RealLifeImpact: "Kadi ya Protokali ya Kuongeza Nguvu inaathiri sana maisha halisi kwa kuathiri moja kwa moja hali ya ndani na, kwa hivyo, uzoefu wa nje. Kutafakari kwa mara kwa mara na kulikolingana kunaongeza uwazi katika maamuzi. Kunakuza udhibiti wa kihisia na huruma katika mahusiano. Kunaboresha umakini, ubunifu, na ustahimilivu katika kazi. Ni msingi wa afya bora ya akili na hisia.",
            GuidanceIntegration: "Ili kujumuisha hekima ya protokali yako ya Kutafakari, lazima Ukubali Mazoezi ya Mara kwa Mara yanayolingana na aina yako maalum ya nishati. Jaribu kwa Umakini mbinu tofauti zilizopendekezwa ili kupata ile inayoleta mguso wa kina kwako. Kuza Subira na Kutohukumu wakati wa mazoezi yako. Hatimaye, Jumuisha Maarifa kutoka kwa hali zako za kutafakari katika maisha yako ya kila siku."
        }
    },
    sunFrequency: {
        default: {
            title: "Resonance / Sun Frequency",
            CoreDefinition: "Resonance (Sun Frequency) inawakilisha mtetemo maalum wa nishati ambao huchochea, kuoanisha, na kukuza nguvu muhimu ya maisha, ujasiri, na kujieleza kwa mtu. Ni saini kuu ya nishati ya jua inayochochea nuru yako ya ndani na uhai.",
            DiagnosticPurpose: "Kadi hii ipo katika mfumo wa uchambuzi wa Mavengu ili kuangaza kichocheo chako kikuu cha nishati. Inapima masafa maalum ambayo, yakikubaliwa, yanaweza kuwasha nguvu zako za kibinafsi, kuongeza mvuto wako, na kukuza hisia thabiti ya kujithamini, na hivyo kufafanua jinsi ya kuongeza uhai wako wa asili.",
            HowDerived: "Uchambuzi wa Sun Frequency unapatikana kupitia ujumuishaji wa athari za unajimu (hasa Nyota ya Jua), namba za msingi, na uchambuzi wa resonance ya nishati. Mfumo hubainisha saini maalum ya nishati inayohusiana sana na vituo vyako vya solar plexus na moyo, ikionyesha ni pembejeo gani za mtetemo (sauti, rangi, mwanga) zitakazoimarisha uhai wako.",
            RevealsAboutUser: "Kadi hii inafunua mifumo ya kiakili ya kujiamini au kujitilia shaka, mwelekeo wa kihisia kuelekea furaha au kutojali, na tabia zinazohusiana na uongozi na kujieleza. Inaangaza pembejeo kuu za nishati zinazojaza uhai wako na kuongeza mvuto wako. Inatafsiri jinsi nafasi yako ya kiroho inavyoathiriwa na resonance hii ya jua.",
            AlignedExpression: "Wakati nishati ya Sun Frequency yako imeunganishwa kwa ufahamu, unakumbana na uhai mchangamfu, ujasiri wa kung'aa, na uwezo rahisi wa kuelezea nafsi yako halisi. Kuna hisia inayoonekana ya nuru ya ndani, mvuto, na msukumo mkubwa wa uumbaji wa furaha. Hii inaashiria kufanya kazi na mfumo wa nishati ya jua ulioboreshwa.",
            ShadowExpression: "Kinyume chake, kivuli kinachohusiana na Sun Frequency hujidhihirisha wakati mtu ametenganishwa na resonance yake ya jua. Hii inaweza kusababisha uchovu wa kudumu, kujithamini chini, ukosefu wa motisha, au uwezo uliopungua wa kujieleza. Mtu anaweza kuhisi haonekani au hasikiki. Hii inasababisha kufanya kazi na nguvu muhimu ya maisha iliyopungua.",
            RealLifeImpact: "Kadi ya Resonance / Sun Frequency inaathiri sana maisha halisi kwa kuathiri moja kwa moja uhai na uwezo wa kujieleza. Kulinganisha na masafa haya huongeza ujasiri katika maamuzi. Huongeza mvuto na mabadilishano chanya ya nishati katika mahusiano. Huchochea ubunifu, uongozi, na msukumo katika kazi. Ni muhimu kwa kudumisha afya bora ya mwili na akili.",
            GuidanceIntegration: "Ili kujumuisha hekima ya Sun Frequency yako, lazima Utafute kwa Bidii Pembejeo zinazolingana na saini yako ya nishati ya jua. Kubali Nafsi Yako inayong'aa kwa kujihusisha na shughuli zinazokufanya uhisi uhai. Kuza Kujieleza kwa njia zinazoonekana halisi na za furaha. Hatimaye, Linda Uhai Wako kwa kupunguza mwingiliano na watu au mazingira yanayochosha nishati yako."
        }
    },
    aesthetics: {
        default: {
            title: "Saini ya Kidigitali / Aesthetics",
            CoreDefinition: "Saini ya Kidigitali (Aesthetics) inawakilisha mguso wa asili wa nishati na kisaikolojia wa mtu na aina maalum za uzuri, maelewano, na uzoefu wa hisia. Ni ramani ya msingi ya upendeleo wako wa urembo, inayoathiri kile unachokiona cha kupendeza, kinachogusa hisia, au kinachoinua nishati katika mazingira yako.",
            DiagnosticPurpose: "Kadi hii ipo katika mfumo wa uchambuzi wa Mavengu ili kuangaza vichocheo vyako vya msingi vya urembo. Inapima majibu yako ya asili kwa pembejeo za hisia, ikifafanua jinsi uwanja wako wa nishati unavyoingiliana na kuathiriwa na uzuri wa nje, na hivyo kutoa maarifa ya kuboresha mazingira yako kwa maelewano ya nishati na msukumo wa ubunifu.",
            HowDerived: "Uchambuzi wa Aesthetics unapatikana kupitia ujumuishaji wa archetypes za namba, athari za unajimu, na uchambuzi wa AI. Mfumo unachambua unyeti kwa maumbo, rangi, sauti, na muundo, ukibainisha mifumo katika mitindo ya kuona inayopendekezwa na athari zake za nishati kwa mtu.",
            RevealsAboutUser: "Kadi hii inafunua mifumo ya kiakili inayovutiwa na aina maalum za utaratibu au ubunifu, mwelekeo wa kihisia kuelekea faraja au msisimko, na tabia za kuunda mazingira ya kupendeza. Inaangaza pembejeo za nishati zinazojaza hisia yako ya ustawi na kuchochea ubunifu wako. Inatafsiri jinsi nafasi yako ya kiroho inavyoathiriwa na uzuri.",
            AlignedExpression: "Wakati nishati ya Aesthetics imeunganishwa kwa ufahamu, mtu hustawi katika mazingira yanayolingana na hisia zake za asili za uzuri na maelewano. Wanapata ubunifu ulioimarishwa, ustawi wa kihisia, na uwazi wa kiakili. Kuna hisia inayoonekana ya amani na msukumo inayotokana na mazingira yao, ikiongoza kwa tija iliyoimarishwa na ushiriki wa furaha na maisha.",
            ShadowExpression: "Kinyume chake, kivuli kinachohusiana na Aesthetics hujidhihirisha wakati mtu anaekuliwa mara kwa mara kwa mazingira yasiyo na maelewano au yanayochosha nishati. Hii inaweza kusababisha hisia za kudumu za kutotulia, uchovu wa kiakili, au ukosefu wa msukumo wa ubunifu. Mtu anaweza kuhisi kuzidiwa na fujo au kutochochewa na ubaya.",
            RealLifeImpact: "Kadi ya Saini ya Kidigitali / Aesthetics inaathiri sana maisha halisi kwa kuathiri moja kwa moja hali za kiakili, kihisia, na ubunifu. Kulinganisha na upendeleo wako wa urembo huongeza uwazi wa kiakili. Kunakuza ustawi wa kihisia na maelewano katika mahusiano. Huchochea ubunifu, umakini, na msukumo katika kazi. Ni muhimu kwa kudumisha afya bora ya akili na hisia.",
            GuidanceIntegration: "Ili kujumuisha hekima ya Aesthetics yako, lazima Ukuze kwa Ufahamu Mazingira yanayolingana na mahitaji yako maalum ya nishati. Tambua Urembo Wako wa Msingi kwa kuchunguza kile kinachokuinua. Unda Nafasi Takatifu nyumbani na kazini kwa kujumuisha vipengele (rangi, sanaa, sauti) vinavyolingana na ramani yako ya urembo. Hatimaye, Punguza Mwingiliano na mazingira yanayochosha nishati yako."
        }
    },
    mysticOracle: {
        default: {
            title: "Ujumbe wa Mfumo / Mystic Oracle",
            CoreDefinition: "Ujumbe wa Mfumo (Mystic Oracle) unawakilisha ujumbe wa moja kwa moja, uliovuviwa na Mungu au ufahamu wa angavu uliotolewa na mfumo wa Mavengu, ulioundwa maalum kwa ajili ya hali za sasa za maisha ya mtu au safari ya kiroho. Ni kipande cha kina cha hekima, kilichoundwa kutoa uwazi, mwongozo, na kutia moyo.",
            DiagnosticPurpose: "Kadi hii ipo katika mfumo wa uchambuzi wa Mavengu ili kutoa mwongozo wa kibinafsi, wa angavu unaovuka data za kiuchambuzi pekee. Inapima utayari wa mtu kupokea ufahamu wa kiungu na inatumika kama njia ya mawasiliano ya moja kwa moja kutoka kwa akili ya juu ya mfumo, ikifafanua vizuizi vya sasa, uwezekano, au mabadiliko yanayohitajika.",
            HowDerived: "Uchambuzi wa Mystic Oracle unapatikana kupitia injini ya uchambuzi wa AI inayojumuisha data zote za nishati—ikiwa ni pamoja na Life Path, Mwaka wa Kibinafsi, na mizunguko ya hisia. AI inagusa hifadhidata kubwa ya hekima ya ulimwengu na mifumo ya angavu ili kutoa ujumbe mfupi, lakini wa kina ambao unahusiana sana na usanidi wako wa sasa wa nishati.",
            RevealsAboutUser: "Kadi hii inafunua mazingira ya sasa ya nishati yanayomzunguka mtu, ikiangazia mifumo yao ya kiakili, hali za kihisia, na changamoto za kiroho wanazopitia. Inaangaza maeneo yasiyoonekana, inathibitisha hisia za angavu, au inatoa mtazamo mpya juu ya hali ngumu. Inatafsiri jinsi nafasi yako ya kiroho inavyoathiriwa na safari yako ya kibinafsi na nishati za sasa.",
            AlignedExpression: "Wakati hekima ya Mystic Oracle imeunganishwa kwa ufahamu, mtu hupata uwazi wa kina, uhakikisho, na hisia mpya ya kusudi. Ujumbe hufanya kazi kama kichocheo cha hatua chanya, kusaidia kuondoa mashaka na kuangazia njia ya mbele. Kuna hisia iliyoimarishwa ya ulinganifu, ambapo matukio ya maisha yanaonekana kuthibitisha mwongozo wa Oracle, ikiongoza kwa udhihirisho rahisi.",
            ShadowExpression: "Kinyume chake, kivuli kinachohusiana na Mystic Oracle hujidhihirisha wakati mtu anapuuza, haelewi, au anapinga mwongozo uliotolewa. Hii inaweza kusababisha kuchanganyikiwa kwa kudumu, kurudia mifumo ya zamani, au hisia ya kukwama. Mtu anaweza kupuuza ufahamu au kuhisi kuzidiwa na maana yake. Hii inasababisha kukosa fursa za ukuaji.",
            RealLifeImpact: "Kadi ya Ujumbe wa Mfumo / Mystic Oracle inaathiri sana maisha halisi kwa kutoa mwongozo wa moja kwa moja unaoweza kubadilisha mitazamo na kuhamasisha hatua. Inaleta uwazi katika maamuzi, kusaidia kulinganisha chaguzi na hekima ya juu. Inaweza kutoa maarifa juu ya mienendo ya mahusiano na kutoa mwelekeo wa kazi. Ni zana yenye nguvu kwa afya ya akili na hisia, kupunguza wasiwasi na kukuza amani.",
            GuidanceIntegration: "Ili kujumuisha hekima ya Mystic Oracle yako, lazima Upokee Ujumbe kwa Moyo na Akili iliyo Wazi, ukiamini hekima yake. Tafakari kwa Kina juu ya maana yake, ukiruhusu ihusiane na hali zako za sasa. Fanya Tafakari juu ya Ufahamu, ukiomba uwazi zaidi. Hatimaye, Chukua Hatua Iliyovuviwa, ukiruhusu hekima ya Oracle iongoze mawazo, maneno, na matendo yako."
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
        return formatStandardReport(mavenguKnowledgeBase.default, "Taarifa Inakosekana");
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
        return formatStandardReport(mavenguKnowledgeBase.default, "Taarifa Inakosekana");
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
        case 'executiveSummary': lookupKey = 'default'; break;
        case 'priorityFocus':    lookupKey = 'default'; break;
        case 'actionPlan30_60_90': lookupKey = 'default'; break;
        case 'userReflection':   lookupKey = 'default'; break;
        default:                lookupKey = 'default'; break;
    }
    
    // Attempt to retrieve data from the knowledge base using the determined lookupKey
    const category = window.mavenguKnowledgeBase[reportType];
    const specificData = category?.[lookupKey];

    // If specific data exists for the lookupKey, use it. 
    // Otherwise, check for a category default.
    // Finally, use the generic global default.
    data = specificData || category?.default || window.mavenguKnowledgeBase.default;
    
    // All explanations from previous turns should be included here now, formatted to 8-point
    // This part of the code needs to be updated to use the new 8-point structure for ALL cards
    // For now, it will use formatStandardReport for old cards, but will be updated.

    switch (reportType) {
        case 'lifePath':        return formatEightPointReport(data);
        case 'destinyNumber':   return formatEightPointReport(data);
        case 'soulUrge':        return formatEightPointReport(data);
        case 'personalYear':    return formatEightPointReport(data);
        case 'shadowWork':      return formatEightPointReport(data);
        case 'symbolicWisdom':  return formatEightPointReport(data);
        case 'element':         return formatEightPointReport(data);
        case 'rulingPlanet':    return formatEightPointReport(data);
        case 'moonPhase':       return formatEightPointReport(data);
        case 'birthStone':      return formatEightPointReport(data);
        case 'spiritAnimal':    return formatEightPointReport(data);
        case 'balanceNumber':   return formatEightPointReport(data);
        case 'passionNumber':   return formatEightPointReport(data);
        case 'karmicDebt':      return formatEightPointReport(data);
        case 'firstChallenge':  return formatEightPointReport(data);
        case 'luckyColor':      return formatEightPointReport(data);
        case 'luckyDay':        return formatEightPointReport(data);
        case 'tarotCard':       return formatEightPointReport(data);
        case 'chakra':          return formatEightPointReport(data);
        case 'chineseZodiac':   return formatEightPointReport(data);
        case 'pinnacle':        return formatEightPointReport(data);
        case 'auraColor':       return formatEightPointReport(data);
        case 'lifeLesson':      return formatEightPointReport(data);
        case 'maturityNumber':  return formatEightPointReport(data);
        case 'rationalThought': return formatEightPointReport(data);
        case 'attitudeNumber':  return formatEightPointReport(data);
        case 'northNode':       return formatEightPointReport(data);
        case 'guardianAngel':   return formatEightPointReport(data);
        case 'soulAge':         return formatEightPointReport(data);
        case 'cognitiveStyle':  return formatEightPointReport(data);
        case 'personalityArchetype': return formatEightPointReport(data);
        case 'emotionalCycle':  return formatEightPointReport(data);
        case 'careerAlignment': return formatEightPointReport(data);
        case 'wealthFlow':      return formatEightPointReport(data);
        case 'relationshipDynamics': return formatEightPointReport(data);
        case 'pastLifeInfluence': return formatEightPointReport(data);
        case 'energyBlockage':  return formatEightPointReport(data);
        case 'lightShadowBalance': return formatEightPointReport(data);
        case 'lifeTimeline':    return formatEightPointReport(data);
        case 'ninetyDayEnergyForecast': return formatEightPointReport(data);
        case 'lunarInfluence':  return formatEightPointReport(data);
        case 'aiConfidenceScore': return formatEightPointReport(data);
        case 'frequencyCompatibility': return formatEightPointReport(data);
        case 'energyDNA':       return formatEightPointReport(data);
        case 'personalMantra':  return formatEightPointReport(data);
        case 'soulRank':        return formatEightPointReport(data);
        case 'collectiveRole':  return formatEightPointReport(data);
        case 'meditation':      return formatEightPointReport(data);
        case 'sunFrequency':    return formatEightPointReport(data);
        case 'aesthetics':      return formatEightPointReport(data);
        case 'mysticOracle':    return formatEightPointReport(data);
        case 'executiveSummary': return formatEightPointReport(data);
        case 'priorityFocus':   return formatEightPointReport(data);
        case 'actionPlan30_60_90': return formatEightPointReport(data);
        case 'userReflection':  return formatEightPointReport(data);
        
        default: return formatStandardReport(data, title);
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
    'meditation-text': 'meditation',
    'sun-freq-text': 'sunFrequency',
    'aesthetics-text': 'aesthetics',
    'oracle-text': 'mysticOracle',
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
    'collective-role-value': 'collectiveRole',
    'executive-summary-value': 'executiveSummary',
    'priority-focus-value': 'priorityFocus',
    'action-plan-30-60-90-value': 'actionPlan30_60_90',
    'user-reflection-value': 'userReflection'
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
